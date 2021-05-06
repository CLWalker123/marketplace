import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { ReduxState } from '../../redux/rootReducer';
import { Item } from './types';
import { generateItemFromItemIdSelector } from './selectors';

interface Props {
  item: Item;
  route: {
    params: NavParams;
  };
}

interface NavParams {
  id: string,
}

export const ItemView = ({ item }: Props) => {
  const timeString = useRef(new Date(Date.now() + item.time_remaining).toTimeString().slice(0,8)).current;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{`£${item.price / 100}`}</Text>
      <View style={styles.extraInfoContainer}>
        <Text style={styles.timer}>{`Expires at ${timeString}`}</Text>
        <View style={styles.viewsContainer}>
          <FontAwesome name="eye" size={18} style={styles.icon} />
          <Text>{item.views}</Text>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state: ReduxState, props: Props) => {
  return {
    item: generateItemFromItemIdSelector(props.route.params.id)(state),
  }
}

export default connect(mapStateToProps)(ItemView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  extraInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewsContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Oxygen_700Bold',
    fontSize: 48,
  },
  price: {
    fontFamily: 'Oxygen_400Regular',
    fontSize: 24,
  },
  timer: {
    fontFamily: 'Oxygen_300Light',
    fontSize: 18,
    color: '#2b2b2b'
  },
  icon: {
    marginHorizontal: 4,
  }
})
