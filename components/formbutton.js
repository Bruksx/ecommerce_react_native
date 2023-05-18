import { StyleSheet, Text , TouchableOpacity} from "react-native";

function FormButton(props) {
  return (
    <TouchableOpacity title={props.title} style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  button: {
    width:"100%",
    backgroundColor:"#b30000",
    height:50,
    borderRadius:45,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    color:"white"
  }
});

export default FormButton;
