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
        screenOptions={
          {
            // default options for ALL screens in the navigator
          }
        }>
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={
            {
              //  options to configure ONLY this screen
            }
          }
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={
            {
              //  options to configure ONLY this screen
            }
          }
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
