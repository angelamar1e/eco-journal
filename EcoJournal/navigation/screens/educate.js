import * as React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';

export default function EducateScreen({ navigation }) {
    return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
        <TextInput placeholder='Search'/>
    </SafeAreaView>
    );
}