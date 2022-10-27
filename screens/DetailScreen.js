import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {plant} = params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={28}
          color={COLORS.dark}
          onPress={() => navigation.goBack()}
        />
        <Icon name="shopping-cart" size={28} color={COLORS.dark} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line}></View>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Best Coice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: '400',
                marginLeft: 10,
              }}>
              ${plant.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>ABOUT</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 20,
            }}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.borderBtn}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: COLORS.dark,
                    marginHorizontal: 10,
                  }}>
                  +
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.dark,
                  marginHorizontal: 10,
                }}>
                Or
              </Text>
              <View style={styles.borderBtn}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: COLORS.dark,
                    marginHorizontal: 10,
                  }}>
                  -
                </Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text style={{color:COLORS.white,fontSize:18,fontWeight:"bold"}}>Buy</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    flex: 0.4,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 0.6,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    marginBottom: 10,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    marginRight: 10,
  },
  borderBtn: {
    width: 60,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyBtn: {
    width: 160,
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default DetailScreen;
