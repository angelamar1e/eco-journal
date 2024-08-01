import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from './screens/home';
import EducateScreen from './screens/educate';
import DailyLogScreen from './screens/daily_log';

// screen names
const homeName = 'Home'
const educateName = 'Educate';
const dailyLogName = 'Daily Log';

const Tab = createBottomTabNavigator();

export default function MainContainer () {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={educateName} component={EducateScreen} />
                <Tab.Screen name={dailyLogName} component={DailyLogScreen} />  
            </Tab.Navigator>
        </NavigationContainer>
    );
}