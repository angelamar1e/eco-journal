import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import articles from './sampleData';

const EducateList = ({selectedCategory}) => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} >
            {Object.keys(articles).map((category) => (
                <View key={category} style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>{category}</Text>
                    <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
                        {articles[category].map((article) => (
                            <View key={article.id} style={styles.card}>
                                <View style={styles.cardContent}>
                                    <Text style={styles.title}>{article.title}</Text>
                                    <Text style={styles.content}>{article.content}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
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