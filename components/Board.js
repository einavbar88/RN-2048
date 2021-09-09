import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import Tile from './Tile';
import GestureRecognizer from 'react-native-swipe-gestures';
import EmptyTile from './EmptyTile';
import GameOver from './GameOver';

const Board = ({ gameBoard, makeMove, gameOver }) => {

    return (
        <GestureRecognizer
            onSwipeRight={() => makeMove("right")}
            onSwipeLeft={() => makeMove("left")}
            onSwipeDown={() => makeMove("down")}
            onSwipeUp={() => makeMove("up")}
            style={styles.boardBg}
            config={{ velocityThreshold: 0, directionalOffsetThreshold: 80 }}
        >
            {gameOver && <GameOver />}
            {gameBoard && gameBoard.map((row, i) => row.map((tile, j) =>
                <EmptyTile key={Math.random() + i * j} />
            ))}
            {gameBoard && gameBoard.map((row, i) => row.map((tile, j) =>
                <Tile key={Math.random() + i * j} tile={tile} newPos={[i, j]} />
            ))}
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    boardBg: {
        position: 'relative',
        height: 350,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#bbada0',
        flexWrap: 'wrap',
        borderRadius: 5,
        padding: 5
    }
});

export default Board