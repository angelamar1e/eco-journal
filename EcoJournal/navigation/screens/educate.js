import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function EducateScreen({ navigation }) {
    const [filters, setFilters] = React.useState([
        { label: 'ALL' },
        { label: 'Food' },
        { label: 'Mobility' },
        { label: 'Electricity' },
    ]);
    const [selected, setSelected] = React.useState(filters[0]);

    const callback = (data) => {
        if (selected === data) return setSelected(filters[0]);
        setSelected(data);
    };
    
    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
            <TextInput 
                placeholder='Search'
                style={styles.searchBar}
            />
            <View style={styles.filterContainer}>
                {filters.map((filter) => (
                    <FilterButton
                        selected={filter === selected}
                        disabled={filter !== selected && selected !== filters[0] && filter !== filters[0]}
                        data={filter}
                        callback={callback}
                    />
                ))}
            </View>
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
    }
})