import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

import DayEntry from '../components/home/day'

import sharedStyles from '../styles/shared'
import homescreen from '../styles/homescreen'

export default class HomeView extends React.Component {
    constructor() {
        super()

        // TODO: get these from storage
        this.state = {
            entries: [{
                date: new Date(),
                logs: [
                    {
                        mood: 'Sad',
                        tags: ['Anxious', 'Stressed']
                    },
                    {
                        mood: 'Happy',
                        tags: ['Loved', 'Excited', 'Content']
                    }
                ],
                overallMood: 'Happy',
                diary: 'This is a test diary that will eventually be read by storage when I get to it'
            }],
        }
    }
    
    render() {
        return (
            <SafeAreaView style={sharedStyles.container}>
                <Text>Home Screen</Text>
                { this.renderDayEntries() }
                <TouchableOpacity style={homescreen.addButton}>
                    <FontAwesome name="plus" size={25} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    renderDayEntries() {
        return this.state.entries.map(entry => (
            <DayEntry 
                date={entry.date} 
                overallMood={entry.overallMood} 
                diary={entry.diary}
                logs={entry.logs} />
        ))
    }
}