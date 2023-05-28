import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function FormText(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate(props.navigateTo)}}>
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
