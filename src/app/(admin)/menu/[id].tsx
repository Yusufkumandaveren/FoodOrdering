import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const sizes : PizzaSize[] = ["S", "M", "L", "XL"];


const ProducDetailScreen = () => {
  const {addItem} = useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  const router = useRouter();

  const addToCart = () => {
    if(!product){
      return;
    }
    addItem(product,selectedSize)
    router.push('/cart')
  }

  const product = products.find((p) => p.id.toString() === id);

  return (
    <View style={styles.container}>
      <Stack.Screen  options={{title:'Menu',
          headerRight:()=>(
      
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          
    )
        }}/>


      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.price}>${product?.price}</Text>
      
    </View>
  );
};

export default ProducDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  select: {
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
