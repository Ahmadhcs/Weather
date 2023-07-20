import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Day = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{paddingLeft: '7.5%', color: 'white', fontWeight: '700', fontSize: 17.5, width: '34%'}}>{props.day}</Text>
      <FontAwesome5Icon name="arrow-right" size={18} color="white" />
      <Text style={{color: 'white', fontWeight: '700', fontSize: 17.5, paddingLeft: '6%'}}>42%</Text>
      <FontAwesome5Icon name="arrow-right" size={18} color="white" style={{ paddingLeft: '9%', paddingTop: '0.4%'}}/>
      <Text style={{color: 'white', fontWeight: '700', fontSize: 17.5, paddingLeft: '5%'}}>13° </Text>
      <Text style={{color: 'white', fontWeight: '700', fontSize: 17.5, paddingLeft: '2.5%'}}>42°</Text>


    </View>
  )
}

export default Day

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: "6%",
        paddingVertical: '3%',
        marginVertical: '2.2%',
        flexDirection: 'row',
        borderRadius: 30
    }
})