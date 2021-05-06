import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../theme/colors';
import HomeView from '../components/home/HomeView';
import ItemView from './item/ItemView';
import AccountView from '../components/account/AccountView';
import colors from '../theme/colors';


const MainStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTintColor,
      }}
    >
      <MainStack.Screen name="Home" component={HomeView} />
      <MainStack.Screen name="Item" component={ItemView} />
    </MainStack.Navigator>
  );
}

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTintColor,
      }}
    >
      <AccountStack.Screen name="Account" component={AccountView} />
    </AccountStack.Navigator>
  );
}

const RootNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const iconName = route.name === 'Main' ? 'home' : 'user';
          return <FontAwesome name={iconName} size={32} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: Colors.DARK,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Main" component={MainStackScreen} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default RootNavigator;

const headerStyle = {
  backgroundColor: colors.ACCENT,
};

const headerTitleStyle = {
  color: 'white'
};

const headerTintColor = 'white'
