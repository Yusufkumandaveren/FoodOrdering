import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: "Sign up", headerTitleAlign: "center" }}
      />
      <Text style={styles.textButton}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />
      <Text style={styles.textButton}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder=""
        secureTextEntry
      />
      <Button text="Create an account" />
      <Link href={'/(auth)/sign-in'} style={styles.accountText} >Sign in</Link>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
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
    borderWidth:1,
    borderColor:'gray'
  },
  textButton: {
    fontSize: 20,
    fontWeight: "300",
    color: 'grey',
    marginVertical: 10,
  },
  accountText:{
    alignSelf:'center',
    color: Colors.light.tint,
    fontWeight:'bold',
    fontSize: 18,
  },
});
