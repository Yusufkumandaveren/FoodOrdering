import { Platform, StyleSheet, FlatList, View,Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/CartListItem';
import Button from '@/components/Button';



const CartScreen = () => {
  const {items, total} = useCart()
  return (
    <View style={{padding:10,}}>
      <FlatList 
      data= {items}
      renderItem={({item})=><CartListItem cartItem={item} />}
      contentContainerStyle={{ gap:10}}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <Button text='Checkout'/>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
    total:{
       marginTop:10,
       fontSize:20,
       fontWeight:'500' 
    }
})