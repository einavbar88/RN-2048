export const backgroundColor = (number) => {
    switch (number) {
        case 2:
            return '#eee4da'
        case 4:
            return '#eee1c9'
        case 8:
            return '#f3b27a'
        case 16:
            return '#f69664'
        case 32:
            return '#f77c5f'
        case 64:
            return '#f75f3b'
        case 128:
            return '#edd073'
        case 256:
            return '#edcc62'
        case 512:
            return '#edc950'
        case 1024:
            return '#e7c257'
        case 2048:
            return '#e8be4e'
        default:
            return '#cdc1b4'
    }
}

const getSize = (num, Dimensions) => {
    const defaultSize = (Dimensions.get('window').width - 30) / 10
    if (num < 10) return defaultSize
    if (num < 100) return defaultSize - 2
    if (num < 1000) return defaultSize - 5
    return defaultSize - 8

}

export const textStyle = (number, Dimensions) => {
    return {
        color: number > 4 ? 'white' : '#776e65',
        fontSize: getSize(number, Dimensions),
        fontWeight: 'bold',
    }
}