import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/shared'

export default class PixelsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Pixels Screen</Text>
            </View>
        )
    }
}