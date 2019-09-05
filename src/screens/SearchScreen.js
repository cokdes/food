import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults'
import ResultList from '../components/ResultList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
        return results.filter(result =>{
            return result.restaurant.price_range === price;
        });
    };

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultsByPrice(1)} title="Cost Effective" navigation={navigation}/>
                <ResultList results={filterResultsByPrice(2)} title="Bit Pricier" navigation={navigation}/>
                <ResultList results={filterResultsByPrice(3)} title="Big Spender" navigation={navigation}/>
                <ResultList results={filterResultsByPrice(4)} title="Sultan" navigation={navigation}/>
            </ScrollView>
            <Text></Text>
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen
