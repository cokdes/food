import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam ('id');
    const [result, setResult] = useState(null);

    console.log(result)

    const getResult = async (id) => {
        const response = await zomato.get(`/restaurant?res_id=${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result}
                keyExtractor={(photos) => photos.id}
                renderItem={( item ) => {
                    <Image style={styles.image} source = {{ uri : item.photos.photo.url }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        height:200,
        width:300
    }
})

export default ResultsShowScreen
