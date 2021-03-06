import { StyleSheet } from 'react-native'
import { fontColour } from './shared'

export default StyleSheet.create({
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#fff',
        borderWidth: 2,
        padding: 15,
        borderRadius: 50
    },
    dayContainer: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 20,
        borderColor: fontColour,
        borderWidth: 2,
        padding: 10
    },
    dayHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    collapseIcon: {
        justifyContent: 'center',
        marginRight: 10
    },
    overallMoodContainer: {
        flexDirection: 'row',
        marginBottom: 7
    },
    overallMood: {
        marginTop: 5,
        marginLeft: 3
    },
    entryContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    entryContainerRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    faceIcon: {
        color: fontColour,
        marginRight: 10
    },
    tagContainer: {
        flexDirection: 'row',
    },
    tag: {
        marginRight: 5,
        padding: 3,
        borderColor: fontColour,
        borderWidth: 2,
        borderRadius: 5
    },
    chevronRight: {
        marginTop: 20
    }
})