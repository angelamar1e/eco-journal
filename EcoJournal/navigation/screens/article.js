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

};