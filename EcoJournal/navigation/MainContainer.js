import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import CustomTabBar from './CustomTabBar';

// screens
import LandingPageScreen from './screens/LandingPage';
import EducateScreen from './screens/educate';
import DailyLogScreen from './screens/daily_log';

// screen names
const LandingPageName = 'Home';
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
                        
                        if (route.name === LandingPageName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === educateName) {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === dailyLogName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={iconColor} />;
                },
                tabBarLabel: () => null, //remove labels
                tabBarStyle: {
                    padding: 10,
                    paddingBottom: 10,
                    height: 60,
                    backgroundColor: '#2A2B33'
                },
            })}
            tabBar={(props) => <CustomTabBar {...props} />} // Use custom tab bar
        >
                <Tab.Screen name={LandingPageName} component={LandingPageScreen} />
                <Tab.Screen name={educateName} component={EducateScreen} />
                <Tab.Screen name={dailyLogName} component={DailyLogScreen} />  
            </Tab.Navigator>
        </NavigationContainer>
    );
}