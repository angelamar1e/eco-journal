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
        <ScrollView>
            {articles.map((article) => (
                <View key={article.id}>
                    <Text>{article.title}</Text>
                    <Text>{article.content}</Text>
                </View>
            ))}
        </ScrollView>
    );
};


export default EducateList;