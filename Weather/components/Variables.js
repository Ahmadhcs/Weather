import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Variables = (props) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.items}>
            <FontAwesome5Icon name="wind" size={25} color="white" style={{ marginBottom: 10 }} />
            <Text style={{ color: 'white', fontSize: 17.5, fontWeight: '700' }}>{props.wind} Km/h</Text>
            <Text style={[styles.indi, { color: 'rgba(230,230,230,0.7)', fontSize: 12.5, fontWeight: 'bold'}]}>Wind</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.items}>
            <FontAwesome5Icon name="wind" size={25} color="white" style={{ marginBottom: 10 }} />
            <Text style={{ color: 'white', fontSize: 17.5, fontWeight: '700' }}>{props.humid}%</Text>
            <Text style={[styles.indi, { color: 'rgba(230,230,230,0.7)', fontSize: 12.5 , fontWeight: 'bold' }]}>Humidity</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.items}>
            <FontAwesome5Icon name="wind" size={25} color="white" style={{ marginBottom: 10 }} />
            <Text style={{ color: 'white', fontSize: 17.5, fontWeight: '700' }}>{props.vis} Km</Text>
            <Text style={[styles.indi, { color: 'rgba(230,230,230,0.7)', fontSize: 12.5, fontWeight: 'bold' }]}>Visibility</Text>
          </View>
        </View>
      </View>
      <View style={styles.hideTopRightBottomLeftShadow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    position: 'relative',
    width: '85%',
    height: '100%',
    borderRadius: 0,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(100,100,100,.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 43, 107, 1)',
    borderRadius: 15,
    elevation: 5,
  },
  column: {
    width: '33%',
    alignItems: 'center',
  },
  items: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indi: {
    marginTop: 5,
  },
  hideTopRightBottomLeftShadow: {
    position: 'absolute',
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
    backgroundColor: 'rgba(100,100,100,.2)',
    borderRadius: 12,
  },
});

export default Variables;