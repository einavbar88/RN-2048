import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';


const EmptyTile = () => {


    return (
        <View style={styles.empty} />
    );
}

const styles = StyleSheet.create({
    empty: {
        height: 75,
        width: 75,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdc1b4'
    },
});

export default EmptyTile