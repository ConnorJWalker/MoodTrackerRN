import React from 'react'
import { View, Text } from 'react-native'

import MoodLog from './log'

import sharedStyles from '../../styles/shared'
import homeStyles from '../../styles/homescreen'

export default class DayEntry extends React.Component {
    render() {
        return (
            <View style={homeStyles.dayContainer}>
                <Text style={sharedStyles.title}>{this.getDateString(this.props.date)}</Text>

                { this.renderMoodLog(this.props.logs) }

                <View style={homeStyles.overallMoodContainer}>
                    <Text style={sharedStyles.subTitle}>Overall I Felt: </Text>
                    <Text style={homeStyles.overallMood}>{ this.props.overallMood }</Text>
                </View>
                <Text>{this.props.diary}</Text>
            </View>
        )
    }

    renderMoodLog(logs) {
        return logs.map(log => (
            <MoodLog 
                mood={log.mood}
                tags={log.tags} />
        ))
    }

    getDateString(date) {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        const today = new Date()
        if (today.getMonth() === month && today.getFullYear() === year) {
            if (today.getDate() === day)
                return 'Today'
            else if (today.getDate() - 1 === day)
                return 'Yesterday'
            else
                return date.getDateString() // TODO: fix format
        }
    }
}