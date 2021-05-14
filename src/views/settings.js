import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/shared'

export default class SettingsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}