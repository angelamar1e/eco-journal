import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';

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
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconColor = focused ? 'green' : color;
                        
                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === educateName) {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === dailyLogName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={iconColor} />;
                },
                tabBarLabel: ({ focused, color }) => {
                    let labelStyle = {
                        fontSize: 14, // Set font size
                        fontWeight: 'bold', // Set font weight
                        color: focused ? 'green' : color, // Set font color based on focus
                    };

                    return (
                        <Text style={labelStyle}>
                            {route.name}
                        </Text>
                    );
                },
                tabBarStyle: {
                    padding: 10,
                    paddingBottom: 10,
                    height: 60
                },
            })}
        >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={educateName} component={EducateScreen} />
                <Tab.Screen name={dailyLogName} component={DailyLogScreen} />  
            </Tab.Navigator>
        </NavigationContainer>
    );
}