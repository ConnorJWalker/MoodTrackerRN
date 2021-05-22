import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

import DayEntry from '../components/home/day'
import NewEntryModal from '../components/home/modal'

import sharedStyles from '../styles/shared'
import homescreen from '../styles/homescreen'

export default class HomeView extends React.Component {
    constructor() {
        super()

        this.state = { showModal: false, entries: [] }
        this.loadEntries()
    }
    
    render() {
        return (
            <SafeAreaView style={sharedStyles.container}>
                <Text>Home Screen</Text>
                { this.renderDayEntries() }
                <TouchableOpacity style={homescreen.addButton} onPress={() => this.updateModalVisibilty()}>
                    <FontAwesome name="plus" size={25} />
                </TouchableOpacity>

                <NewEntryModal
                    show={this.state.showModal}
                    toggleClose={() => this.updateModalVisibilty()}
                    saveEntry={entry => this.addNewEntry(entry)} />
            </SafeAreaView>
        )
    }

    loadEntries() {
        AsyncStorage.getItem('entries')
            .then(entries => {
                if (entries)
                    this.setState({ entries: JSON.parse(entries) })
            })
            .catch(error => console.error(error))
    }

    renderDayEntries() {
        if (this.state.entries.length === 0)
            return <Text>No entries yet</Text>

        return this.state.entries.map((entry, i) => (
            <DayEntry 
                date={entry.date}
                overallMood={entry.overallMood} 
                diary={entry.diary}
                logs={entry.logs}
                key={i} />
        ))
    }

    updateModalVisibilty() {
        this.setState({ showModal: !this.state.showModal })
    }

    addNewEntry(entry) {
        const arrayExists = this.state.entries.length > 0
        
        const hasTodaysDate = arrayExists 
            ? new Date(this.state.entries[0].date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
            : false

        let entries = this.state.entries
        if (arrayExists && hasTodaysDate) {
            entries[0].logs.unshift(entry)
        } else {
            entries.unshift({
                date: new Date(),
                logs: [ entry ],
                overallMood: null,
                diary: null
            })
        }

        this.setState({ entries })
        AsyncStorage.setItem('entries', JSON.stringify(this.state.entries))
    }
}