import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EducateScreen from './screens/educate';
import ArticlePage from './screens/article';

const Stack = createStackNavigator();

const EducateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EducateHome" component={EducateScreen} options={{headerShown: false}} />
            <Stack.Screen name="Article" component={ArticlePage} />
        </Stack.Navigator>
    );
};

export default EducateStack;
