import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sampleData from './sampleData';

const EducateList = ({ filteredArticles}) => {
    const navigation = useNavigation(); // Hook to get navigation object for screen transitions
    
    console.log('filteredArticles:', filteredArticles);

    // Render function for each item in the FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Article', { article: item })} // Navigate to the Article screen on press
        >
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content} numberOfLines={1}>{item.content}</Text> 
            </View>
        </TouchableOpacity>
    );

    // Check if there are no filtered articles
    if (!filteredArticles || filteredArticles.length === 0) {
        return (
            <View>
                <Text>No articles available</Text>
            </View>
        );
    }

    // Main render of the component
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {Object.keys(sampleData).map((category) => (
                <View key={category} style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>{category}</Text>
                    <FlatList
                        data={sampleData[category]}  // Using articles from the current category
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalScroll}
                    />
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
        flexDirection: 'row',
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