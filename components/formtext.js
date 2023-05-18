import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function FormText(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{props.navigateTo()}}>
      <Text style={styles.text}>{props.text}</Text>
      <AntDesign name="arrowright" size={20} color="red"style={styles.icon} />
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf:"flex-end",
  },
  icon:{
    marginLeft:5,
  },
  text:{
    color:"#222222",
  }
});

export default FormText;
