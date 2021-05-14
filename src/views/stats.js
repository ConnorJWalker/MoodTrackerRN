import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/shared'

export default class StatsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Statistics Screen</Text>
            </View>
        )
    }
}