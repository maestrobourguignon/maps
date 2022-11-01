import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ title }) => {
return(
  <View 
    style={styles.item}
  >
    <Text>{title}</Text>
  </View>
)
}
const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent:'center',
    padding:15, 
  }
})