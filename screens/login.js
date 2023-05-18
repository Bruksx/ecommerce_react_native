import { Text , StyleSheet, KeyboardAvoidingView, View} from "react-native"
import Heading from "../components/heading"
import FormTextInput from "../components/formtextinput"
import FormText from "../components/formtext"
import FormButton from "../components/formbutton"
import MyImage from "../components/myimage"

export default function LoginScreen(navigation){
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ width:"100%", justifyContent:"space-between"}}>
                <Heading title="Login" left={true}/>
                <View style={{height:70, width:"100%"}}></View>
                <View style={{height:150, width:"100%"}}>
                    <FormTextInput label="Email"/>
                    <FormTextInput label="Password"/>
                </View>
                <View style={{ height:20, width:"100%"}}></View>
                <FormText text="Forgot your password?" navigateTo={()=>{}}/>
                <View style={{height:30, width:"100%"}}></View>
                <FormButton title="LOGIN"/>
            </View>

            <View style={{height:"24%", width:"100%"}}></View>

            <View style={{ height:"23%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                <Text>or login with social account</Text>
                <View style={{flexDirection:"row"}}>
                    <MyImage
                        imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/fb.png")}
                    />
                    <MyImage
                        imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/google.png")}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingTop: 50,
        height:"100%",
        minHeight:800,
    }
})