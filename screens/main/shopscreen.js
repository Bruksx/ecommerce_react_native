import { Text, View , StyleSheet} from "react-native"
import Heading from "../../components/heading"

export default function ShopScreen(props){
    return (
        <View style={styles.container}>
            <Heading text="categories" left search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
    }
})