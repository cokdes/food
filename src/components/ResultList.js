import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results }) => {
    //console.log(results);
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {results ? <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={ item }/>;
                }}
            /> : "Not found"}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        marginTop:8
    },
    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    }
});

export default ResultList
