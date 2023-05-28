import { Text , KeyboardAvoidingView, View, StyleSheet} from "react-native";
import Heading from "../components/heading";
import FormTextInput from "../components/formtextinput";
import FormButton from "../components/formbutton";

export default function ForgotPasswordScreen(navigation){
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{width:"100%", height:"50%", justifyContent:"space-between"}}>
                <Heading title="Forgot password" left={true}/>
                <Text style={{marginTop:20, marginBottom:-20}}>
                    Please, enter your email address. 
                    You will receive a link to create a new password via email.
                </Text>
                <FormTextInput 
                    label="Email" 
                    labelColor="red"
                    errorText="Not a valid email address. Should be your@email.com" 
                    antdesignIcon="close"
                    formState="error"
                    iconColor="red"
                />
                <FormButton title="SEND" backgroundColor="#e60000"/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f9f9f9",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 15,
      paddingTop: 50,
      height:"100%",
      minHeight:800,
    },
})