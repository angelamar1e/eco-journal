import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from './screens/home';
import EducateScreen from './screens/educate';

// screen names
const homeName = 'Home'
const educateName = 'Educate';

const Tab = createBottomTabNavigator();

export default function MainContainer () {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name={educateName} component={EducateScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}