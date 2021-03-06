import { StyleSheet } from 'react-native'

const backgroundColor = '#eee'
const fontColour = '#444444'
const accentColour = '#ff24c8'

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
    fontColourAlpha: { color: `${fontColour}88` },
    fontColour: { color: fontColour },
    accentColour: { color: accentColour }
})

exports.fontColour = fontColour
exports.accentColour = accentColour