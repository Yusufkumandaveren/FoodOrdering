import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const resetFields = () =>{
    setName('')
    setPrice('')
  }

  const onCreate = () => {
    console.warn("creating product", name , price);

    //save in the database
    resetFields();
  };
  return (
    <View style={styles.containter}>
      <Image />
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Margarita..."
        style={styles.input}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        keyboardType="number-pad"
        style={styles.input}
      />
      <Button onPress={onCreate} text={"Create"} />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});
