import React from 'react'
import { Text, View, SafeAreaView, Switch } from 'react-native'

import styles from '../styles/shared'
import settingsStyles from '../styles/settings'

import defaultSettings from '../../assets/settings.json'

export default class SettingsView extends React.Component {
    constructor() {
        super()

        this.state = {
            settings: defaultSettings
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Settings</Text>

                <View style={settingsStyles.groupContainer}>
                    <Text style={styles.subTitle}>Entries</Text>
                    { this.renderOptionsList(this.state.settings.entries, 0) }
                </View>

                <View style={settingsStyles.groupContainer}>
                    <Text style={styles.subTitle}>Mood Overview</Text>
                    { this.renderOptionsList(this.state.settings.moodOverview, 1) }
                </View>

                <View style={settingsStyles.groupContainer}>
                    <Text style={styles.subTitle}>Days by Pixels</Text>
                    { this.renderOptionsList(this.state.settings.dayByPixels, 2) }
                </View>
            </SafeAreaView>
        )
    }

    renderOptionsList(list, groupNo) {
        return list.map((item, i) => (
            <View style={settingsStyles.settingsRow} key={i}>
                <Text style={settingsStyles.settingsDescription}>
                    { item.description }
                </Text>

                <Switch 
                    style={settingsStyles.settingsInput} 
                    value={item.value}
                    onValueChange={() => this.onSettingsChange(groupNo, i)} />
            </View>
        ))
    }

    onSettingsChange(groupNo, index) {
        const groupName = Object.keys(this.state.settings)[groupNo]
        const optionName = Object.keys(this.state.settings[groupName])[index]
        
        let newSettingsValues = { ...this.state.settings }
        newSettingsValues[groupName][optionName].value = !newSettingsValues[groupName][optionName].value

        this.setState({ settings: newSettingsValues })
    }
}