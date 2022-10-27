import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../data/colors';
const categories = ['POPULAR', 'ORGANICS', 'INDOORS', 'SYNTHETICS'];

const CategoryList = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);
  return (
    <View style={styles.categoryContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setSelectedCategoryIndex(index)}
          key={index}>
          <Text
            style={[
              styles.categoryText,
              selectedCategoryIndex === index && styles.active,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  active: {
    color: COLORS.green,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,
    paddingBottom: 5,
  },
});

export default CategoryList;
