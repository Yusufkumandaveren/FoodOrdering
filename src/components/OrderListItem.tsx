import { View, Text, Pressable ,StyleSheet } from 'react-native'
import React from 'react'
import { Order } from '@/types'
import { Link, useSegments } from "expo-router";
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

type OrdersListItemProps={
    order: Order
}

const OrderListItem = ({order}:OrdersListItemProps) => {
    const segments = useSegments();
    
    const productRoute = `/${segments[0]}/orders/${order.id}` as `${string}:${string}`
  return (
    <Link href={productRoute} asChild >
          <Pressable  style={styles.container} >
            <View>
            <Text style={styles.title}>Order #{order.id}</Text>
            <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
            </View>
            <Text style={styles.status}>{order.status}</Text>
          </Pressable>
        </Link>
  )
}

export default OrderListItem


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: 'gray',
  },
  status: {
    fontWeight: '500',
  },
});
