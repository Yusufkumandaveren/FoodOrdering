import OrderListItem from "@/components/OrderListItem";
import orders from "@assets/data/orders";
import { Stack } from "expo-router";
import { FlatList } from "react-native";

export default function OrderScreen() {
  return (
    <>
      {/* <Stack.Screen options={{ title: "index" }} /> */}
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
