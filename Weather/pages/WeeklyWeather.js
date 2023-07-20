import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Variables from '../components/Variables';
import Day from '../components/Day';
const WeeklyWeather = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const day = route.params

    const getNext6Days = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const next6Days = [];
      
        for (let i = 1; i <= 6; i++) {
          const date = new Date();
          date.setDate(date.getDate() + i);
          const dayName = days[date.getDay()];
          next6Days.push(dayName);
        }
      
        return next6Days;
      };
      
      const next6DaysArray = getNext6Days();
      console.log(next6DaysArray);

  return (
    <SafeAreaView style={styles.main}>

      <View style={styles.header}>
        <View style={{width: '37%'}}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Main')} >

                <FontAwesome5Icon name="arrow-left" size={23} color="white" style={{paddingLeft: "15%", paddingTop: "1%"}}/>
            </TouchableOpacity>

        </View>
        <Text style={{color: "white", fontSize: 22.5, fontWeight: '500', width: '50%'}}>{day.location}</Text>
      </View>

      <Text style={{paddingVertical:'6%', color: 'white', fontSize: 25, fontWeight: '500', paddingLeft: '5%'}}>
        Today
      </Text>
      <View style={{ alignItems: 'center'}}>
        <Text style={{color:'white', fontSize: 75, fontWeight: '700', paddingLeft: "7.5%"}}>{day.temp}°</Text>
        <Text style={{color:'white', fontSize: 20 , fontWeight: '500', paddingTop: '7.5%'}}>{day.cond}</Text>
      </View>
      <View style={{alignItems: 'center', height: '14%', marginTop: "5%", marginBottom: '4%'}}>
      <Variables wind={day.wind} humid={day.humid} vis={day.vis}/>
      </View>
      
      <Day day={"Tomorrow"} />
      <Day day={next6DaysArray[1]}/>
      <Day day={next6DaysArray[2]}/>
      <Day day={next6DaysArray[3]}/>
      <Day day={next6DaysArray[4]}/>
      <Day day={next6DaysArray[5]}/>


      


    </SafeAreaView>
  )
}

export default WeeklyWeather

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'rgba(0,0,0,0.85)',
        flex: 1

    },
    header:{
        flexDirection:'row',
        // justifyContent: 'center',
        paddingTop: "2.5%"
    }
})