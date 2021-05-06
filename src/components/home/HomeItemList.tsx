import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Item } from '../item/types';
import HomeItemCard from './HomeItemCard';

interface Props {
  items: Record<string, Item>;
}

const HomeItemList = ({ items }: Props) => {

  return (
    <ScrollView style={styles.container}>
      {!!Object.keys(items).length && Object.values(items).map(item => (
        <HomeItemCard key={item.id} item={item} />
      ))}
    </ScrollView>
  )
}

export default HomeItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})