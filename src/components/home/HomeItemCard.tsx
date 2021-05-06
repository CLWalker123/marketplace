import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';
import { Item } from '../item/types';

interface Props {
  item: Item;
}

const HomeItemCard = ({ item }: Props) => {
  const navigation = useNavigation();
  
  const handleNavigateToItem = useCallback(() => {
    navigation.navigate('Item', { id: item.id, name: item.name });
  }, [item.id]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateToItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`£${ item.price / 100}`}</Text>
    </TouchableOpacity>
  )
}

export default HomeItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    marginVertical: 4,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    borderColor: colors.DARK,
    backgroundColor: colors.LIGHT,
  },
  name: {
    fontFamily: 'Oxygen_700Bold',
    fontSize: 24,
  },
  price: {
    fontFamily: 'Oxygen_400Regular',
    fontSize: 18,
  }
})
