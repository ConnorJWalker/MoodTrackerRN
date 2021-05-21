import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

import MoodLog from './log'

import sharedStyles from '../../styles/shared'
import homeStyles from '../../styles/homescreen'

export default class DayEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            showContent: true
        }
    }
    
    render() {
        return (
            <View style={homeStyles.dayContainer}>
                <TouchableOpacity style={homeStyles.dayHeader} onPress={() => this.toggleShowContent()}>
                    <Text style={sharedStyles.title}>{this.getDateString(this.props.date)}</Text>
                    <View style={homeStyles.collapseIcon}>
                        <FontAwesome 
                            name={ this.state.showContent ? 'chevron-up' : 'chevron-down' }
                            size={25}
                            style={sharedStyles.fontColourAlpha} />
                    </View>
                </TouchableOpacity>

                <View style={{ display: this.state.showContent ? 'flex' : 'none' }}>
                    { this.renderMoodLog(this.props.logs) }

                    <View style={homeStyles.overallMoodContainer}>
                        <Text style={sharedStyles.subTitle}>Overall I Felt: </Text>
                        <Text style={homeStyles.overallMood}>{ this.props.overallMood }</Text>
                    </View>
                    <Text>{this.props.diary}</Text>
                </View>
            </View>
        )
    }

    renderMoodLog(logs) {
        return logs.map((log, i) => (
            <MoodLog 
                mood={log.mood}
                tags={log.tags}
                key={i} />
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

    toggleShowContent() {
        this.setState({ showContent: !this.state.showContent })
    }
}