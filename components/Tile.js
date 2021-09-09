import React, { useRef } from 'react'
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { backgroundColor, textStyle } from '../aux/uiAux';


const Tile = ({ tile, newPos }) => {

    let style, pos, apear, beat
    const animate = (position) => {

        const toValue = { x: position[1] * 85 + 10, y: position[0] * 85 + 10 }

        Animated.timing(pos, {
            toValue,
            duration: 100,
            useNativeDriver: true
        }).start()
        if (tile.isMerged) {
            style.transform.push({ scale: beat })
            Animated.spring(beat, {
                toValue: 1,
                useNativeDriver: true
            }).start()
        }
        if (tile.isNew) {
            style.transform.push({ scale: apear })
            Animated.timing(apear, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true
            }).start()
        }
        if (tile) {
            tile.position = position
            tile.isNew = false
            tile.isMerged = false
        }

    }


    if (tile) {
        pos = useRef(new Animated.ValueXY({ x: tile.position[1] * 85 + 10, y: tile.position[0] * 85 + 10 })).current
        apear = useRef(new Animated.Value(0)).current
        beat = useRef(new Animated.Value(1.1)).current

        style = {
            ...styles.tile,
            backgroundColor: backgroundColor(tile?.num),
            left: 0,
            zIndex: tile.num ? 100 : 0,
            position: tile ? 'absolute' : 'relative',
            transform: [...pos.getTranslateTransform()]
        }

        animate(newPos)
    }


    return (
        tile ?
            <Animated.View
                style={style} >
                <Text style={textStyle(tile.num, Dimensions)}>{tile.num}</Text>
            </Animated.View> : <View />
    );
}

const styles = StyleSheet.create({
    tile: {
        height: 75,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Tile