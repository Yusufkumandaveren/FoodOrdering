import { StyleSheet,Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors'
import products from '../../../assets/data/products'


const product = products[9]


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:product.image}} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  image:{
    width: '100%',
    aspectRatio: 1, 
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:10,
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    color:Colors.light.tint,

  }
});
