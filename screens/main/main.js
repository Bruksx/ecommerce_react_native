import { Text, View, ScrollView, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./homescreen";
import ShopScreen from "./shopscreen";
import { AntDesign , Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function MainScreen(navigation){
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({route})=>({
                    headerShown:false, 
                    tabBarActiveTintColor:"#e60000",
                    tabBarIcon: ({focused, color, size})=> { 
                        if (route.name ==="Home"){
                            return <AntDesign name="home" size={24} color={color} />
                        }
                        if (route.name ==="Shop"){
                            return <AntDesign name="shoppingcart" size={24} color={color} />
                        }
                        if (route.name ==="Bag"){
                            return <Feather name="shopping-bag" size={24} color={color} />
                        }
                        if (route.name ==="Favourites"){
                            return <AntDesign name="hearto" size={24} color={color} />
                        }
                        if (route.name ==="Profile"){
                            return <AntDesign name="user" size={24} color={color} />
                        }
                    }

                    })}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Shop" component={ShopScreen}/>
                <Tab.Screen name="Bag" component={HomeScreen}/>
                <Tab.Screen name="Favourites" component={HomeScreen}/>
                <Tab.Screen name="Profile" component={HomeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}



const styles = StyleSheet.create({
    container:{
        height:"100%"
    },
    scrollView:{
        height:"91.8%",
    }
})