import { Image, StyleSheet , View} from "react-native";

function MyImage(props){
    return (
        <View style={styles.container}>
        <Image 
            source={props.imageSource}
            style={styles.image}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:64,
        width:92,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:25,
        width:25,
    }
})








export default MyImage