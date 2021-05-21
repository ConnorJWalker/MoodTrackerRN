import { StyleSheet } from 'react-native'
import { fontColour } from './shared'

const opacity = 44

export default StyleSheet.create({
    groupContainer: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderTopWidth: 1,
        borderColor: `${fontColour}${opacity}`,
    },
    settingsRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: `${fontColour}${opacity}`,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    settingsDescription: {
        flex: 4
    },
    settingsInput: {
        // flex: 1
    }
})
