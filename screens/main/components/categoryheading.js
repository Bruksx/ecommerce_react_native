import { Text , StyleSheet, View} from "react-native";

export default function CategoryHeading(props){
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>{props.mainText}</Text>
            <Text style={styles.subText}>{props.subText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
    },
    mainText:{
        fontSize:40,
        fontWeight:600,
    },
    subText:{
        fontSize:15,
        color:"#737373"
    }
})