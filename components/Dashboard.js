import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Dashboard = ({ score, best, startNewGame }) => {


    return (
        <View style={styles.dashboard} >
            <View style={styles.titleSection}>
                <Text style={styles.title}>2048</Text>
                <Text style={styles.text}>By Einav</Text>
            </View>
            <View style={styles.scoreBoard}>
                <View style={styles.scores}>
                    <View style={styles.score}>
                        <Text style={styles.scoreTitle}>Score</Text>
                        <Text style={styles.scoreRes}>{score}</Text>
                    </View>
                    <View style={styles.score}>
                        <Text style={styles.scoreTitle}>Best</Text>
                        <Text style={styles.scoreRes}>{best}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={startNewGame} style={styles.newGame}>
                <Text style={styles.scoreRes}>NEW GAME</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleSection: {
    },
    title: {
        fontSize: 60,
        fontWeight: '700',
        color: '#776e65',

    },
    text: {

    },
    scoreBoard: {
        flex: 1,
        alignItems: 'center',
    },
    scores: {
        flexDirection: 'row'
    },
    score: {
        backgroundColor: '#bbada0',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 5,
        margin: 5

    },
    scoreTitle: {
        color: '#eee4da',
        fontSize: 16
    },
    scoreRes: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    newGame: {
        position: 'absolute',
        top: 150,
        left: '35%',
        backgroundColor: '#8f7a66',
        padding: 10,
        borderRadius: 5
    }

});

export default Dashboard