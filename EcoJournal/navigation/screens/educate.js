import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';

export default function EducateScreen({ navigation }) {
    return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
        <TextInput 
            placeholder='Search'
            style={styles.searchBar}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 20,
        paddingVertical: 10, 
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20,
    }
})