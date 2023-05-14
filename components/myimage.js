import { Image, StyleSheet } from "react-native";

function MyImage(props){
    return (
        <Image 
            source={props.imageSource}
            style={styles.image}
        />
    )
}


const styles = StyleSheet.create({
    image:{
        height:100,
        borderColor:"red",
        borderWidth:1,
        width:200,
    }
})








export default MyImage