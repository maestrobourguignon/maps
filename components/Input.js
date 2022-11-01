import React, {useState} from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default ({title, ...rest}) =>{
  return(
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text>{title}</Text>
      </View>
      <View style={styles.inputWrapper}>  
        <TextInput {...rest} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height:40,  
  },
  inputWrapper: {
    borderWidth:1,
    borderColor: '#ccc',
  },
  titleWrapper:{
    paddingBottom:5
  },
})