import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';
import plants from '../data/plants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryList from '../components/CategoryList';
import Plant from '../components/Plant';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: COLORS.green}}>
            Plant Shop
          </Text>
        </View>
        <Icon
          name="shopping-cart"
          size={30}
          color={COLORS.green}
          style={{marginRight: 15}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.searchBox}>
          <Icon
            name="search"
            size={30}
            color={COLORS.green}
            style={{marginRight: 20}}
          />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20}}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.green,
            padding: 10,
            borderRadius: 10,
          }}>
          <Icon name="filter-list" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        data={plants}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Plant plant={item} />}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    height: 50,
  },
});

export default HomeScreen;
