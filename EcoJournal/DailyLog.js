import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CheckBox} from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const DailyLog = () => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-PH', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  
  const [isDone, setIsDone] = useState(false);
  const [ecoActions, setEcoActions] = useState([false, false, false]); 

  const handleToggleDone = () => {
    setIsDone(!isDone);
  };

  const handleCheckboxChange = (index) => {
    const updatedActions = [...ecoActions];
    updatedActions[index] = !updatedActions[index];
    setEcoActions(updatedActions);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerbackground}>
        <Text style={styles.pagetitle}> Daily Log </Text>
        <Text style={styles.pagesubtitle}>{formattedDate}</Text>
      </View>

      <View style={styles.rectangle}>
        <Text style={[styles.sectiontitle, {color: '#000000'}]}>Carbon Reduction Goal</Text>
        <Text style={styles.figures}>000 g</Text>
        
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>Start: </Text>
            <Text style={styles.text}>End: </Text>
          </View>
          <TouchableOpacity style={[styles.button, { marginRight: 10, backgroundColor: '#407F3D'}]}>
            <Text style={[styles.text, { textAlign: 'center', color: '#FFFFFF'}]}>Set a goal</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.subcontainer}>
        <Text style={[styles.sectiontitle, { textAlign: 'left', marginTop: 10}]}>Customize your Daily Log</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDone ? '#F6F5F3' : '#34C759' }]}
            onPress={() => setIsDone(false)}
          >
              <Text style={[styles.text, { textAlign: 'center', color: isDone ? '#000000' : '#FFFFFF' }]}>To-Do</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDone ? '#34C759' : '#F6F5F3' }]}
            onPress={handleToggleDone}
          >
              <Text style={[styles.text, { textAlign: 'center', color: isDone ? '#FFFFFF' : '#000000' }]}>Done</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, { marginLeft: 115, backgroundColor: '#407F3D'}]}>
              <Text style={[styles.text, { textAlign: 'center', color: '#FFFFFF'}]}>Add an action</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          {ecoActions.map((checked, index) => (
            <View style={styles.row} key={index}>
              <View style={styles.placeholder}>
                <CheckBox
                  value={checked}
                  onValueChange={() => handleCheckboxChange(index)}
                  tintColors={{ true: '#34C759', false: '#000' }}
                />
                
                <Text style={[styles.text, { marginLeft: 10 }]}>Eco-Action #{index + 1}</Text>
              </View>
                
            </View>
          ))}
        </View>

        <Text style={[styles.sectiontitle, { textAlign: 'left', marginTop: 10}]}>Reflection Entries</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#407F3D'}]}>
            <Text style={[styles.text, { textAlign: 'center', color: '#FFFFFF'}]}>Write a reflection entry</Text>
        </TouchableOpacity>
        <View style={[styles.placeholder, { marginTop: 10 }]}>
          <Text style={[styles.text, { marginLeft: 10 }]}>Date</Text>
        </View>

      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },

  subcontainer: {
    padding: 20,
    width: 400,
  },

  headerbackground: {
    width: 400,
    height: 250,
    backgroundColor: '#407F3D',
    borderRadius: 10,
    position: 'relative',
  },

  pagetitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 70,
  },

  pagesubtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },

  rectangle: {
    width: 357,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: -100, 
    padding: 20, 
  },

  sectiontitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginBottom: 10,
    color: '#000000'
  },

  figures: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  column: {
    flex: 1,
  },

  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
  },

  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 100,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  placeholder: {
    backgroundColor: '#F6F5F3',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
});

export default DailyLog;
