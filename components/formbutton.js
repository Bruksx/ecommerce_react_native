import { BackHandler, StyleSheet, Text , TouchableOpacity} from "react-native";

function FormButton(props) {
  var styles = StyleSheet.create({
    button: {
      height: props.height? props.height: 50,
      width: props.width? props.width: "100%",
      backgroundColor:props.backgroundColor,
      borderRadius:45,
      justifyContent:"center",
      alignItems:"center",
      borderColor:props.borderColor,
    },
    text:{
      color:"white"
    }
  })

  return (
    <TouchableOpacity title={props.title} style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}



export default FormButton;
