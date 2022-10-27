import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const Plant = ({plant}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {plant})}>
      <View style={styles.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              padding: 4,
              backgroundColor: plant.like
                ? 'rgba(215,42,42,.2)'
                : 'rgba(0,0,0,.2)',
              borderRadius: 50,
            }}>
            <Icon
              name="favorite"
              size={20}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image source={plant.img} style={{flex: 1, resizeMode: 'contain'}} />
        </View>
        <Text style={styles.name}>{plant.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.price}>${plant.price}</Text>
          <View style={styles.button}>
            <Icon name="add" size={20} color={COLORS.white} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: COLORS.light,
    width: deviceWidth / 2 - 30,

    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  button: {
    backgroundColor: COLORS.green,
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Plant;
