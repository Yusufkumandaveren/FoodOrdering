import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="sign-in" 
        options={{ 
          title: "Giriş Yap",
          headerBackTitle: "Geri"
        }} 
      />
      <Stack.Screen 
        name="sign-up" 
        options={{ 
          title: "Kayıt Ol",
          headerBackTitle: "Geri"
        }} 
      />
    </Stack>
  );
}
