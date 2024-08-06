import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


export default function DailyLogScreen({ navigation }) {
  const [checkboxStates, setCheckboxStates] = useState({
    ecoAction1: false,
    ecoAction2: false,
    ecoAction3: false,
  });

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleCheckboxChange = (key) => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: '#036B00', textAlign: 'left' }]}>Daily Log</Text>
      </View>

      <View style={[styles.rectangle, { backgroundColor: '#036B00' }]}>
        <View style={styles.textContainer}>
          <Text style={[styles.subheading1, { color: 'white' }]}>
            Carbon Reduction Goal:
          </Text>
          <View style={[styles.row, {gap: 65, alignItems: 'flex-start'}]}>
            <Text style={[styles.title, { color: 'white' }]}>
              1000 g
            </Text>
            <SetGoalButton
              label="Set Goal"
              disabled={false}
            />
          </View>    
        </View>   
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Eco-Actions</Text>
      </View>

      <View style={styles.rectangle}>
        <Checkbox
          checked={checkboxStates.ecoAction1}
          onChange={() => handleCheckboxChange('ecoAction1')}
          label="Eco-Action#1"
        />
      </View>

      <View style={styles.rectangle}>
        <Checkbox
          checked={checkboxStates.ecoAction2}
          onChange={() => handleCheckboxChange('ecoAction2')}
          label="Eco-Action#2"
        />
      </View>

      <View style={styles.rectangle}>
        <Checkbox
          checked={checkboxStates.ecoAction3}
          onChange={() => handleCheckboxChange('ecoAction3')}
          label="Eco-Action#3"
        />
      </View>

    </View>
  );
}

const SetGoalButton = ({ label, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.setGoalButton, 
        { backgroundColor: disabled ? 'lightgrey' : '#407F3D' },
      ]}  
      disabled={disabled}
    >
      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity 
      style={styles.row} 
      onPress={() => onChange(!checked)}
    >
      <View style={[styles.checkbox, checked && styles.checked]} />
      <Text style={[styles.text, {alignItems:'flex-end'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    paddingVertical: 15,
    width: '90%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  rectangle: {
    padding: 15,
    width: '90%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  }, 
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#0D0D0D',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    marginBottom: 5,
  },
  subheading1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginBottom: 5,
  },
  setGoalButton: {
    borderRadius: 25,
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 8,
  },
});
