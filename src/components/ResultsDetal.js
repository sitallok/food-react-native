import React from 'react';
import { View, Image, Text, StyleSheet } from  'react-native';

const ResultDetail = ({ result }) => {
    let image;
    if(result.image_url != null){
        image = result.image_url;
    }else{
        image = "https://via.placeholder.com/250x120";
    }

    return (
        <View style={{marginRight: 35}}>
            <Image style={styles.image} source= {{uri: image}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>Avaliação: {result.rating} - {result.review_count} avaliações</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        marginTop: 8
    }
});

export default ResultDetail;