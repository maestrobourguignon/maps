import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Input from './Input';

export default ({handleChangeText, handleSubmit, handleCancel}) => {
return(
  <View style={styles.form}>
    <View style={styles.form}>
      <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
      </View>
    <View style={styles.formA}>    
      <Button title='Aceptar' onPress={handleSubmit} />
    </View>
    <View style={styles.formC}>
      <Button title='Cancelar' onPress={handleCancel} />
    </View>
  </View>)}

const styles = StyleSheet.create({
  form: {
    padding:10,
  },
  formA: {
    paddingTop:30,
    paddingHorizontal:10,
  },
  formC: {
    padding:10,
  }
});