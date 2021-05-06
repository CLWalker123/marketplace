import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../theme/colors';
import { ReduxState } from '../../redux/rootReducer';
import { Item } from '../item/types';
import { fetchAllItems as fetchAllItemsAction } from '../item/actions';
import { itemErrorSelector, itemPendingSelector, itemsSelector } from '../item/selectors';
import HomeEmptyView from './HomeEmptyView';
import HomeItemList from './HomeItemList';

interface Props {
  items: Record<string, Item>;
  itemError: string | null;
  itemPending: boolean;
  fetchAllItems: any;
}

export const HomeView = ({
  items,
  itemError,
  itemPending,
  fetchAllItems,
}: Props) => {

  useEffect(() => {
    fetchAllItems();
  }, [fetchAllItems])

  if ((!itemPending && itemError) || !Object.keys(items).length) {
    return <HomeEmptyView />
  }

  return (
    <View style={styles.container}>
      {itemPending ?
        <ActivityIndicator />
      :
        <HomeItemList items={items} />
      }
    </View>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    itemPending: itemPendingSelector(state),
    itemError: itemErrorSelector(state),
    items: itemsSelector(state),
  }
}

const mapDispatchToProps = {
  fetchAllItems: fetchAllItemsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})