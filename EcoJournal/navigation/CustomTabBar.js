import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const CustomTabBar = (props) => {
  return (
    <View style={styles.container}>
      <BottomTabBar {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
    elevation: 0,
    shadowOpacity: 0,
    marginHorizontal: 20,
    marginBottom: 5
  },
});

export default CustomTabBar;