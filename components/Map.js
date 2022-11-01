import React, {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as Location from 'expo-location';


export default ({  onLongPress, puntos, pointsFilter }) => {
  const [locacion, setLocacion] = useState({})

  const searchLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted'){
      return Alert.alert('No tenemos los permisos para acceder al la localizacion')
    } 
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location);
  }
  useEffect(() => {
    searchLocation()
  });

  return (
    <MapView
      style={styles.map}
      onLongPress={onLongPress}
    >
      {locacion.coords
          ? <Marker 
              coordinate={locacion.coords}
              title='Ubicacion Actual'
              description='Usted esta aqui :)'/>
          : null
      }
      {pointsFilter && puntos.map(x =>
        <Marker

          key={x.name}
          coordinate={x.coordinate}
          title={x.name}
        />)}  
    </MapView>
  )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - 150,
    },
})