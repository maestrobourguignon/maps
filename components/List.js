import React from "react";
import {  FlatList, View, Button, StyleSheet, Dimensions  } from "react-native";
import Favoritos from "./favoritos";

export default ({puntos, closeModal }) => {
  return(
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos}
          renderItem={({  item  }) => <Favoritos
            title={item.name}
          />
          }
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.button}>
        <Button title='cerrar' onPress={closeModal} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 300,  
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent:'center',
    padding:15, 
  },
  button: {
    padding:20,
  },  
})