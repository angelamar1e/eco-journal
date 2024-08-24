import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EducateList from './educateList';
import ArticlePage from './article';
import sampleData from './sampleData';

const Stack = createStackNavigator();

export default function EducateScreen ({ navigation }) {
    // State to hold the filter options and the currently selected filter
    const [filters] = React.useState([
        { label: 'ALL' },
        { label: 'Food' },
        { label: 'Mobility' },
        { label: 'Electricity' },
    ]);
    const [selected, setSelected] = React.useState(filters[0]);

    // Callback function to handle filter selection and reset to 'ALL' if the same filter is selected
    const callback = (data) => {
        if (selected === data) return setSelected(filters[0]);
        setSelected(data);
    };

    // Filter articles based on selected category
    const filteredArticles = selected.label === 'ALL' ?
    Object.values(sampleData).flat() : 
    sampleData[selected.label] || []; // Get articles for the selected category
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator initialRouteName="EducateList">
              <Stack.Screen name="EducateList" options={{ headerShown: false }}>
                  {(props) => (
                      <View style={styles.container}>
                          <TextInput style={styles.searchBar} placeholder="Search" />
                            <View style={styles.filterContainer}>
                                {filters.map((data) => (
                                    <TouchableOpacity
                                        onPress={() => callback(data)} // Handle filter button press
                                        key={data.label}
                                        style={[
                                            styles.filterButton,
                                            selected === data && styles.selectedFilterButton, // Apply selected style
                                        ]}
                                    >
                                        <Text style={styles.filterText}>{data.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <EducateList navigation={navigation} filteredArticles={filteredArticles} />
                        </View>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Article" component={ArticlePage} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 20,
        paddingVertical: 10, 
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20,
    },
    filterButton: {
        borderRadius: 25,
        padding: 8,
        paddingLeft: 24,
        paddingRight: 24,
        marginRight: 8,
        height: 30,
      },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 7
    },
    selectedFilterButton: {
        backgroundColor: '#34C759',
    },
    filterText: {
        color: 'black',
        height: 15,
    },
});