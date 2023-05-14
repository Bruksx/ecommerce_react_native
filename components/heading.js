import { Text , StyleSheet} from "react-native/";

function FormHeading (props){
    return (
        <Text style={styles.formHeading}> {props.text}</Text>
    )
}

var styles = StyleSheet.create({
    formHeading:{
        fontSize:30,
        fontWeight:700,
        alignSelf:"flex-start",
    }
})

export default FormHeading