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