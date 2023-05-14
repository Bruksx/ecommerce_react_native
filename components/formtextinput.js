import { TextInput, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function FormTextInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.formTextInput} placeholder={props.placeholder} />
      <AntDesign
        name={props.antdesignIcon}
        size={24}
        color={props.iconColor}
        style={styles.icon}
      />
      <Text style={styles.errorText}>{props.errorText}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  formTextInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
  },
  formTextInputWithBorder: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    borderColor:"red",
    borderWidth:2,
    borderRadius:3,
  },
  label: {
    position: "absolute",
    zIndex: 1,
    color: "#737373",
    top: 5,
    left: 10,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: "33%",
  },
  errorText:{
    color:"red",
    fontSize:10,
  }
});

export default FormTextInput;
