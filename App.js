import React from 'react';
import Search from './screens/Search'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import SeachStack from './routes/searchStack'
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import StopDetails from './screens/StopDetails';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SearchStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="StopDetails" component={StopDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Search" component={SearchStack} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
