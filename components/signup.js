import { StyleSheet, Text, KeyboardAvoidingView, View} from "react-native";
import MyImage from "./myimage";
import Heading from "./heading";
import FormTextInput from "./formtextinput";
import FormButton from "./formbutton";
import FormText from "./formtext";

export default function SignupScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}
    >
      <View style={{width:"100%"}}>
      <Heading title="Sign Up" left={true} search={false}/>
      </View>
      
      <View style={styles.inputContainer}>
        <FormTextInput
          label="Name"
          antdesignIcon="check"
          iconColor="green"
        />
        <FormTextInput label="Email" />
        <FormTextInput placeholder="password" />
      </View>

      <View style={{ width:"100%"}}>
        <View style={{ width:"100%", position:"absolute", bottom:15}}>
          <FormText text="Already have an account?"/>
        </View>
      </View>

      <View style={{ width:"100%"}}>
        <View style={{width:"100%", position:"absolute", bottom:10}}>
          <FormButton title="Sign Up" color="#e60000"/>
        </View>
      </View>

      <View style={{width:"100%"}}>
        <View style={{position:"absolute", top:40, width:"100%", alignItems:"center"}}>
          <Text>or signup with social account</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <MyImage
          imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/fb.png")}
        />
        <MyImage
          imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/google.png")}
        />
      </View>

      
    </KeyboardAvoidingView>
  );
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

  inputContainer:{
    width:"100%",
  },

  imageContainer:{
    flexDirection:"row",
    width:210,
    justifyContent:"space-between",
  },

});
