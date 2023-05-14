import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, KeyboardAvoidingView, Button } from "react-native";
import MyImage from "./components/myimage";
import FormHeading from "./components/heading";
import FormTextInput from "./components/formtextinput";
import { AntDesign } from "@expo/vector-icons";
import FormText from "./components/formtext";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <AntDesign name="left" size={22} color="black" style={styles.left} />
      <FormHeading text="Sign Up" />
      <FormTextInput
        label="Name"
        antdesignIcon="check"
        iconColor="green"
      />
      <FormTextInput label="Email" />
      <FormTextInput placeholder="password" />
      <FormText text="Already have an account?"/>
      <Button title="Sign up" color="#ff0000" />
      <Text>or signup with social account</Text>
      <MyImage
        imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/fb.png")}
      />
      <MyImage
        imageSource={require("C:/Users/Owner/Documents/projects/reactNative/newproject/assets/social_icons/google.png")}
      />

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
    paddingTop: 30,
  },

  left: {
    alignSelf: "flex-start",
  },
});
