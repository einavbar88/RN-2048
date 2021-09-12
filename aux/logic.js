

//array functions
const transposeArray = (array) => {
    return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

const sort = (col, action) => {
    return col.sort((a, b) => b !== null ? (a !== null ? 0 : action) : -action)
}

export const compareMatrix = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][j] !== arr2[i][j])
                return false
        }
    }

    return true
}

///////////////////////////
const randomNum = (max) => {
    return (Math.floor(Math.random() * max) + 1)
}

const checkNoNewRenders = (board) => {
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[i].length; j++)
            if (board[i][j] === null)
                return false
    return true
}

const checkIsGameOver = (board) => {
    if (!checkNoNewRenders(board)) return false
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[i].length - 1; j++) {
            if (board[i][j] == null)
                return false
            if (i < board.length - 1)
                if (board[i + 1][j] && board[i][j].num === board[i + 1][j].num)
                    return false
            if (board[i][j + 1] && board[i][j].num === board[i][j + 1].num)
                return false
        }
    return true
}

export const addNewRandom = (board) => {
    if (!board || checkNoNewRenders(board))
        return null

    if (checkIsGameOver(board)) return "GAME_OVER"

    const row = randomNum(4) - 1
    const column = randomNum(4) - 1
    const randomCube = board[row][column]

    if (randomCube) return addNewRandom(board)

    const ret = [...board]
    const rand = randomNum(5)
    ret[row][column] = { num: rand > 1 ? 2 : 4 }
    ret[row][column].position = [row, column]
    ret[row][column].isNew = true
    return ret

}

const downRightMerge = (input) => {
    const col = [...input]
    let score = 0
    for (let i = col.length - 1; i > 0; i--) {
        if (col[i] && col[i].num === col[i - 1]?.num) {
            col[i].num = col[i].num * 2
            col[i - 1] = null
            score += col[i].num
            col[i].isMerged = true
        }
    }
    return { b: sort(col, -1), score }
}

const upLeftMerge = (input) => {
    const col = [...input]
    let score = 0
    for (let i = 0; i < col.length - 1; i++) {
        if (col[i] && col[i].num === col[i + 1]?.num) {
            col[i].num = col[i].num * 2
            col[i + 1] = null
            score += col[i].num
            col[i].isMerged = true
        }
    }
    return { b: sort(col, 1), score }
}

const moveArr = (arr, direction) => {
    let action = (direction === 'down' || direction === 'right') ? -1 : 1
    const set = sort(arr, action)
    if (action === -1)
        return downRightMerge(set)
    return upLeftMerge(set)

}

const move = (board, direction) => {
    const ret = { afterMoveBoard: [], addScore: 0 }
    for (let i = 0; i < board.length; i++) {
        const { b, score } = moveArr([...board[i]], direction)
        ret.afterMoveBoard.push(b)
        ret.addScore += score
    }
    return ret
}

const moveVertical = (transposedBoard, direction) => {
    const ret = move([...transposedBoard], direction)
    ret.afterMoveBoard = transposeArray([...ret.afterMoveBoard])
    return ret
}


export const commitMove = (prevBoard, direction) => {
    const columns = transposeArray([...prevBoard])
    switch (direction) {
        case "up":
        case "down":
            const verticalMove = moveVertical([...columns], direction)
            return { afterMoveBoard: verticalMove.afterMoveBoard, addScore: verticalMove.addScore }
        case "left":
        case "right":
            const horizontalMove = move([...prevBoard], direction)
            return { afterMoveBoard: horizontalMove.afterMoveBoard, addScore: horizontalMove.addScore }
        default:
            return newBoard
    }
}
