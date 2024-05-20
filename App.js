import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initalRouteName='Welcome' // sets the default screen of the stack
        screenOptions={{
          // default options for ALL screens in the navigator
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b', // color for the icon and label in the active tab.
          tabBarInactiveTintColor: 'gray' // color for the icon and label in the inactive tabs.
        }}>
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            //  options to configure ONLY this screen
            tabBarIcon: (color, size) => <Ionicons name='home' size={size} color={color} />
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            //  options to configure ONLY this screen
            tabBarIcon: (color, size) => <Ionicons name='person' size={size} color={color} />
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
