import { StyleSheet } from 'react-native'

const backgroundColor = '#eee'
const fontColour = '#444'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor
    },
    title: {
        fontSize: 40,
        fontWeight: '400',
        color: fontColour
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: fontColour
    },
    fontColour: { color: fontColour }
})

exports.fontColour = fontColour
