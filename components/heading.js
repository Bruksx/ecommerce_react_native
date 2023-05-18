import { Text, StyleSheet, View , TouchableHighlight} from "react-native/";
import { AntDesign } from "@expo/vector-icons";

function Heading(props) {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        {props.left == true ? (
          <AntDesign name="left" size={22} color="black" style={styles.left} />
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
