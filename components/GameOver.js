import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';


const GameOver = () => {


    return (
        <View style={styles.gameOver}>
            <Text style={styles.gameOverTitle}>Game Over!</Text>
            <Text style={styles.gameOverText}>It was a good game, try again!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gameOver: {
        height: '104%',
        width: '104%',
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000050',
        zIndex: 200
    },
    gameOverTitle: {
        fontSize: 50,
        fontWeight: "700",
        color: 'white'
    },
    gameOverText: {
        fontSize: 20,
        fontWeight: "500",
        color: 'white'
    }
});

export default GameOver