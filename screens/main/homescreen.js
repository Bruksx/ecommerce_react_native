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
import {newProducts, saleProducts} from "../../utils/jsonmocks/productJSON"
import categories from "../../utils/jsonmocks/categories";
import colors from "../../utils/colors";

export default function HomeScreen() {
  const image = require("../../assets/main/bkimage.png");
  const newProductList = []
  const saleProductList = []
  var key = 0
  for (let product of newProducts){
    newProductList.push(
      <Product
        key={key}
        imageSource={product.imageSource}
        bonusRate={product.bonusRate}
        rating={product.rating}
        sellerName={product.sellerName}
        productName={product.productName}
        price={product.price}
      />
    )
    key += 1
  }
  for (let product of saleProducts){
    saleProductList.push(
      <Product
        key={key}
        imageSource={product.imageSource}
        bonusRate={product.bonusRate}
        rating={product.rating}
        sellerName={product.sellerName}
        productName={product.productName}
        price={product.price}
      />
    )
    key += 1
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
        {newProductList}
      </ScrollView>
      <CategoryHeading mainText="Sale" subText="You’ve never seen it before!" />
      <ScrollView style={styles.productScrollview} horizontal={true}>
        {saleProductList}
      </ScrollView>
      <View style={styles.categories}>
        <ImageBackground source={categories[0].image} style={styles.category1}>
          <Text style={styles.categoryText}>New Collection</Text>
        </ImageBackground>
        <View style={{flexDirection:"row", width:"100%"}}>
          <View style={{width:"50%"}}>
            <ImageBackground source={categories[1].image} style={styles.category2}></ImageBackground>
            <ImageBackground source={categories[2].image} style={styles.category3}></ImageBackground>
          </View>
          <ImageBackground source={categories[3].image} style={styles.category4}>
            <Text style={styles.categoryText}>Black</Text>
          </ImageBackground>
        </View>
      </View>
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
  categories:{
  },
  category1:{
    height:300,
    backgroundColor:colors.black,
  },
  category2:{
    height:180,
    width:"100%",
  },
  category3:{
    height:180,
    width:"100%",
    backgroundColor:colors.purple
  },
  category4:{
    height:360,
    width:200,
    backgroundColor:colors.blue
  },
  categoryText:{
    color:"white",
    fontSize:35,
    fontWeight:700,
    position:"absolute",
    top:"45%",
    left:"33%"
  }
});
