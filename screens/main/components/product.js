import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import FormButton from "../../../components/formbutton";
import { AntDesign, Foundation } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import colors from "../../../utils/colors";
import { useState } from "react";

export default function Product(props) {
  const [likeIcon, setLikeIcon] = useState(
    <AntDesign name="hearto" size={16} color={colors.red} />
  );
  const [likeState, setLikeState] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={props.imageSource}
      ></ImageBackground>

      <View style={styles.bonusContainer}>
        <FormButton
          title={"-" + props.bonusRate *100 + "%"}
          backgroundColor="#e60000"
          height={25}
          width={50}
        />
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          switchLikeIcon(likeState, setLikeState, setLikeIcon);
        }}
      >
        {likeIcon}
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
      <Rating
          style={styles.rating}
          imageSize={20}
          readonly
          ratingColor={colors.orange}
          type="custom"
          ratingBackgroundColor={colors.ash}
          tintColor={colors.backgroundAsh}
          startingValue={props.rating/2}
        />
        <Text style={styles.ratingNumber}>({props.rating})</Text>
      </View>
      <Text style={styles.sellerName}>{props.sellerName}</Text>
      <Text style={styles.productName}>{props.productName}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{props.price}$</Text>
        <Text style={styles.newPrice}>{Math.round(props.price - (props.price * props.bonusRate))}$</Text>
      </View>
    </View>
  );
}

const switchLikeIcon = (likeState, setLikeState, setLikeIcon) => {
  if (likeState === true) {
    setLikeIcon(<AntDesign name="hearto" size={16} color={colors.red} />);
    setLikeState(false);
  } else {
    setLikeIcon(<Foundation name="heart" size={16} color={colors.red} />);
    setLikeState(true);
  }
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 340,
    justifyContent: "space-between",
    marginLeft:20,
  },
  image: {
    height: 230,
    width: "100%",
  },
  bonusContainer: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  iconContainer: {
    width: 40,
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#737373",
    position: "absolute",
    right: 0,
    bottom: "25%",
  },
  ratingContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent:"space-between"
  },
  productName: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 600,
  },
  sellerName: {
    color: colors.ash,
  },
  priceContainer: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  oldPrice: {
    color: colors.ash,
    textDecorationLine: "line-through",
  },
  newPrice: {
    color: colors.red,
  },
  rating: {
    backgroundColor: colors.ash,
  },
  ratingNumber:{
    color: colors.ash
  }
});
