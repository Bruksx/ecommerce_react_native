import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import FormButton from "../../components/formbutton";
import CategoryHeading from "./components/categoryheading";
import Product from "./components/product";
import products from "../../utils/productJSON";

export default function HomeScreen() {
  const image = require("../../assets/main/bkimage.png");
  const productList = []
  var key = 0
  for (let product of products){
    key += 1
    productList.push(
        <Product
            key={key}
            imageSource={product.imageSource}
            bonusRate={product.bonusRate}
            rating={product.rating}
            sellerName={product.sellerName}
            productName={product.productName}
            price={product.price}
        />)
  }
  return (
    <ScrollView>
      <ImageBackground style={styles.fashionSale} source={image}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Fashion Sale</Text>
          <FormButton
            title="check"
            backgroundColor="#e60000"
            width={160}
            height={40}
          />
        </View>
      </ImageBackground>
      <CategoryHeading mainText="New" subText="You’ve never seen it before!" />
      <ScrollView style={styles.productScrollview} horizontal={true}>
        {productList}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fashionSale: {
    height: 550,
  },
  text: {
    color: "white",
    fontSize: 57,
    fontWeight: 900,
  },
  contentContainer: {
    position: "absolute",
    bottom: 30,
    height: 200,
    left: 30,
    justifyContent: "space-between",
  },
  productScrollview: {
    flexDirection:"row",
    flexGrow:1,
  },
});
