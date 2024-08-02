import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function LandingPageScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
      <Text style={styles.title}> Welcome, user!</Text>
      </View>
      
      <View style={styles.rectangle}>
        <Text style={styles.subheading1}>Carbon Footprint</Text>
        <Text style={styles.title}>1.3 tonnes</Text> 
      </View>

      <View style={styles.columns}>
        <View style={styles.square}>
          <Text style={styles.title}>22g</Text>
          <Text style={styles.subheading2}>less than initial record</Text>
        </View>

        <View style={styles.square}>
          <Text style={styles.title}>26%</Text>
          <Text style={styles.subheading2}>of goal completed</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5​',
    padding: 20,
    alignItems: 'center',
  },

  header: {
    paddingVertical: 15,
    width: '90%',
    alignItems: 'flex-start',
    marginTop: 20,
  }, 

  columns: {
    flexDirection: 'row',
    justifycontent: 'center',
    width: '100%',
  },

  rectangle: {
    padding: 15,
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignitems: 'flex-start',
    marginBottom: 20,
  },

  square: {
    alignitems: 'center',
    justifycontent: 'center',
    width: '45%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 8,
    padding: 15,
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#036B00',
    textAlign: 'Left',
    marginBottom: 5,
  },

  subheading1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#0D0D0D',
    textAlign: 'left',
    marginBottom: 5,
  },
  
  subheading2: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#0D0D0D',
    textAlign: 'Left',
    marginBottom: 5,
  },  
  
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#0D0D0D',
    textAlign: 'left',
    marginBottom: 5,
  },

});
