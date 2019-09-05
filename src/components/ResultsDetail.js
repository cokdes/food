import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Image style={styles.image} source={{ uri:result.restaurant.thumb }} />
            <Text style={styles.name} >{result.restaurant.name}</Text>
            <Text>
                {result.restaurant.user_rating.aggregate_rating} Stars, {result.restaurant.all_reviews_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft : 15
    },
    image:{
        width: 240,
        height: 120,
        borderRadius: 4,
        marginEnd: 10
    },

    name:{
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ResultsDetail
