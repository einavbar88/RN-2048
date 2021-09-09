import { addNewRandom, compareMatrix, commitMove } from '../aux/logic';

const gameReducer = (state, action) => {
    let score = state.score, board = [...state.board]
    switch (action.type) {
        case "NEW_GAME":
            const newGameBoard = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]]
            let addedRandom = addNewRandom(newGameBoard)
            addedRandom = addNewRandom(addedRandom)
            return { board: addedRandom, score: 0 }
        case "MAKE_MOVE":
            const { afterMoveBoard, addScore } = commitMove(board, action.direction)
            let randAddAfterMoveBoard = afterMoveBoard
            if (!compareMatrix(afterMoveBoard, board))
                randAddAfterMoveBoard = addNewRandom(randAddAfterMoveBoard)
            if (randAddAfterMoveBoard !== "GAME_OVER")
                return { board: randAddAfterMoveBoard, score: score + addScore }

        case "GAME_OVER":
            return { board, score, gameOver: true }
    }
}

export default gameReducer