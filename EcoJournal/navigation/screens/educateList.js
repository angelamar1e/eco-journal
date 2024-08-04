import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {card} from 'react-native-paper';

const articles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1' },
    { id: 2, title: 'Article 2', content: 'Content of Article 2' },
    { id: 3, title: 'Article 3', content: 'Content of Article 3' },
    // sample articles only
];

const EducateList = () => {
    return (
        <ScrollView horizontal={true} contentContainerStyle={styles.container}>
            {articles.map((article) => (
                <View key={article.id} style={styles.card}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.content}>{article.content}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    card: {
        width: 250,
        height: 250,
        backgroundColor: '#407F3D',
        padding: 16,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'flex-end',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    content: {
        fontSize: 14,
        color: 'white',
    },
});

export default EducateList;