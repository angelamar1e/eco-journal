import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const ArticlePage = ({ route }) => {
    const { article } = route.params;
    const [comment, setComment] = React.useState('');
    const [comments, setComments] = React.useState([
        { id: 1, user: 'User1', comment: 'Great article!' },
        { id: 2, user: 'User2', comment: 'Very informative.' },
    ]);

    const addComment = () => {
        setComments([...comments, { id: comments.length + 1, user: 'You', comment }]);
        setComment('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <TouchableOpacity style={styles.logButton}>
                <Text style={styles.logButtonText}>Add to Daily Log</Text>
            </TouchableOpacity>
            <Text style={styles.content}>{article.content}</Text>
            <Text style={styles.sectionTitle}>Community Interaction</Text>
            {comments.map((c) => (
                <View key={c.id} style={styles.comment}>
                    <Text style={styles.commentUser}>{c.user}:</Text>
                    <Text style={styles.commentText}>{c.comment}</Text>
                </View>
            ))}
            <TextInput
                style={styles.commentInput}
                placeholder="Add a comment..."
                value={comment}
                onChangeText={setComment}
            />
            <TouchableOpacity style={styles.commentButton} onPress={addComment}>
                <Text style={styles.commentButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logButton: {
        backgroundColor: '#407F3D',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    logButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    comment: {
        marginBottom: 10,
    },
    commentUser: {
        fontWeight: 'bold',
    },
    commentText: {
        marginLeft: 10,
    },
    commentInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    commentButton: {
        backgroundColor: '#407F3D',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    commentButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});