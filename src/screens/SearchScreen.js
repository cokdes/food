import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("hi there!")
        try{
            const response = await zomato.get('/search', {
                params: {
                    entity_id: 170,
                    entity_type: 'city',
                    q : searchTerm,
                }
            });
            setResult(response.data.restaurants);
        }catch(err){
            setErrorMessage("Something went wrong, please try again later");
        }
    }

    //call API when component first rendered
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {result.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen
