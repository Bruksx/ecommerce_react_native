import { StyleSheet, Text, KeyboardAvoidingView, View, Pressable, TouchableHighlight} from "react-native";
import MyImage from "../components/myimage";
import Heading from "../components/heading";
import FormTextInput from "../components/formtextinput"
import FormButton from "../components/formbutton"
import FormText from "../components/formtext";

export default function SignupScreen({navigation}) {
  function navigateToLogin(){
    return navigation.navigate("Login")
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
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

      <TouchableHighlight style={{ width:"100%",}} onPress={()=>{navigation.navigate("Login")}}>
        <View style={{ width:"100%"}}>
          <FormText text="Already have an account?" navigateTo={navigateToLogin}/>
        </View>
      </TouchableHighlight>

      <View style={{ width:"100%"}}>
        <View style={{width:"100%", position:"absolute", bottom:10}}>
          <FormButton title="Sign Up" color="#e60000" />
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
