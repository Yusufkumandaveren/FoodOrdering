import { Stack } from 'expo-router';

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Orders',headerTitleAlign:'center', }} />
    </Stack>
  );
}