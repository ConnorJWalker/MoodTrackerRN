import { StyleSheet } from 'react-native'
import { fontColour } from './shared'

export default StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: fontColour,
        paddingTop: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        paddingHorizontal: 35
    },
    moodIconsSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35
    },
    emotionTagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    modalFooter: {
        flexDirection: 'row',
        marginTop: 25,
        borderTopWidth: 2,
        borderTopColor: fontColour,
    },
    modalFooterButton: {
        flex: 1,
        padding: 5
    }
})