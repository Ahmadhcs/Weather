import { StyleSheet, Text, View, Image, SVG } from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Daily = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, props.today ? styles.today : styles.notToday]}>
        {/* March 20 at the top */}
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: '25%' }}>
          <Text style={{color: 'white', paddingTop: '7%', fontSize: 12.5, fontWeight: '700'}}>{props.date}</Text>
          <FontAwesome5Icon name="wind" size={35} color="white" style={{ paddingBottom: "25%" , paddingTop: "30%" }} />

          <Text style={{color: 'white', fontSize: 12.5, fontWeight: '700'}}>{props.cond}</Text>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '700', paddingTop: '35%'}}>{Math.floor(props.temp)}°C</Text>

        </View>
      </View>
      {/* Today at the bottom */}
      <View style={{ alignItems: 'center', paddingTop: '15%' }}>
    {props.day ? (
        <Text style={{ color: 'white', fontWeight: '700' }}>{props.day}</Text>
    ): (
        <Text style={{ color: 'white', fontWeight: '700' }}>Today</Text>
    )}
      </View>
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    marginRight: '1%',
    height: "90%"
  },
  innerContainer: {
    marginRight: 10,
    borderRadius: 70,
    flex: 1,
    flexDirection: 'column', // Default is column, but just to be explicit
  },
  notToday:{
    backgroundColor: 'rgba(50,50,50,0.6)',

  },
  today:{
    backgroundColor: 'rgba(255, 43, 107, 1)'

  }
});