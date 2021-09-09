import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Board from '../components/Board';
import Dashboard from '../components/Dashboard';
import gameReducer from '../reducers/gameReducer';

export default function MainScreen() {

    const [game, dispatchGame] = useReducer(gameReducer, { board: [], score: 0 })
    const [bestScore, setBestScore] = useState(0)

    const storeBest = async (value) => {
        try {
            await AsyncStorage.setItem('best', value + "")
        } catch (e) {
            console.log(e)
        }
    }
    const getBest = async () => {
        try {
            const value = await AsyncStorage.getItem('best')
            if (value !== null) {
                setBestScore(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const makeMove = (direction) => {
        dispatchGame({ type: "MAKE_MOVE", direction })
    }

    useEffect(() => {
        startNewGame()
        getBest()
    }, [])

    const startNewGame = () => {
        dispatchGame({ type: "NEW_GAME" })
    }

    useEffect(() => {
        if (game.score > bestScore) {
            storeBest(game.score)
            setBestScore(game.score)
        }
    }, [game])

    return (
        <View style={styles.container}>
            <Dashboard score={game.score} startNewGame={startNewGame} best={bestScore} />
            <Board gameBoard={game.board} makeMove={makeMove} gameOver={game.gameOver} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf8ef',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
