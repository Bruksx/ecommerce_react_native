import { Text, StyleSheet, View , TouchableOpacity} from "react-native/";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


function Heading(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        {props.left == true ? (
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <AntDesign name="left" size={22} color="black" style={styles.left} />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.text}> {props.text} </Text>
        {props.search == true ? (
          <AntDesign
            name="search1"
            size={22}
            color="black"
            style={styles.left}
          />
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.formHeading}> {props.title}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"95%",
    alignSelf:"center"
  },
  formHeading: {
    fontSize: 30,
    fontWeight: 700,
    alignSelf: "flex-start",
  },
  text: {
    fontWeight: "600",
    fontSize: 22,
  },
});

export default Heading;
