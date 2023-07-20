import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import Variables from '../components/Variables'
import Daily from '../components/Daily'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const MainWeather = () => {
    const today  = new Date()
    const actual = today.toDateString()

    const [location, setLocation] = useState("")
    const [temp, setTemp]= useState(0)
    const [wind, setWind] = useState(0)
    const [humid, setHumid] = useState(0)
    const [vis, setVis] = useState(0)
    const [cond, setCond] = useState("")

    const nextFourDays = [];

for (let i = 0; i < 4; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);

  const options = { month: 'long', day: 'numeric' };
  const nextDayFormatted = nextDay.toLocaleDateString(undefined, options);

  nextFourDays.push(nextDayFormatted);
}

    

    const [day1, setDay1] = useState(null)
    const [day2, setDay2] = useState(null)
    const [day3, setDay3] = useState(null)

    

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=acd99cf7419a4c93939194957231907&q=new york&days=4&aqi=no&alerts=no');
            const data = await response.json();
            setLocation(data.location.name)
            setTemp(data.current.temp_c)
            setWind(data.current.wind_kph)
            setHumid(data.current.humidity)
            setVis(data.current.vis_km)
            setCond(data.current.condition.text)
            setDay1(data.forecast.forecastday[1])
            setDay2(data.forecast.forecastday[2])
            setDay3(data.forecast.forecastday[3])

            //day1.day.maxtemp_c
            //day1.day.mintemp_c
            //day1.hour[0].condition.text
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchData();
      }, []);

      if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={{color: "white", fontSize: 22.5, fontWeight: '500'}}>{location}</Text>

      </View>
      <View style={styles.date}>
        <View style={styles.dateContainer}>
            <Text style={{color: "white", fontSize: 17,paddingVertical:7.5, fontWeight: '600' }}>{actual}</Text>
        </View>
      </View>

      <View style={{paddingTop: "8%", alignItems: 'center', fontWeight: '700'}}>
        <Text style={{color: "white", fontSize: 18, fontWeight: '500'}}>{cond}</Text>
      </View>

      <View style={{paddingVertical: '5%', alignItems: 'center'}}>
        <Text style={{color:'white', fontSize: 110, fontWeight: '700', paddingLeft: "12.5%"}}>{temp}°</Text>
      </View>
      <View style={{alignItems: 'center', height: '14%'}}>
        <Variables wind={wind} humid={humid} vis={vis}/>
      </View>
      <View style={{flexDirection: 'row'}}>
     
            <Text style={{paddingVertical: '5%', color: 'white', paddingLeft: "7.5%", fontSize: 17.5, fontWeight: 'bold'}}>
                Weekly Forecast
            </Text>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Week", {location, temp, wind, humid, vis, cond})}>
                <FontAwesome5Icon name="arrow-right" size={18} color="white" style={{ paddingTop: '5.25%', paddingLeft: '4%' }}/>
            </TouchableOpacity>

        </View>
      <View  style={{ flexDirection: 'row', height:"35%", width: "90%", marginLeft: "5%"}}>
        <Daily cond={cond} day={0} today={true}  temp={temp} date={nextFourDays[0]} />
        <Daily cond={day1.hour[0].condition.text} day={"Tomorrow"} temp={day1.day.avgtemp_c} date={nextFourDays[1]} />
        <Daily cond={day2.hour[0].condition.text} day={2} temp={day2.day.avgtemp_c} date={nextFourDays[2]} />

        <Daily cond={day3.hour[12].condition.text} day={3} temp={day3.day.avgtemp_c} date={nextFourDays[3]} />


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'rgba(0,0,0,0.85)',
        flex: 1

    },
    header:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: "2.5%"
    },
    date:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "7.5%"
    },
    dateContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 43, 107, 1)',
         borderRadius: 30,
         width: '50%'
    
    }
})

export default MainWeather