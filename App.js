import SignupScreen from "./screens/signup"
import LoginScreen from "./screens/login"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
        >
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}