import React from 'react'
import { Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

import sharedStyles from '../../styles/shared'
import homescreenStyles from '../../styles/homescreen'

export default class MoodLog extends React.Component {
    render() {
        return (
            <View style={homescreenStyles.entryContainer}>
                { this.getMoodIcon(this.props.mood) }
                <View>
                    <Text style={sharedStyles.subTitle}>{ this.props.mood }</Text>
                    <View>
                        <View style={homescreenStyles.tagContainer}>
                            { this.renderTags(this.props.tags) }
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    getMoodIcon(mood) {
        const moods = {
            Happy: 'smile',
            Sad: 'sad-cry'
        }

        return <FontAwesome style={homescreenStyles.faceIcon} name={moods[mood]} size={60} />
    }

    renderTags(tags) {
        return tags.map(tag => (
            <Text style={homescreenStyles.tag}>{ tag }</Text>
        ))
    }
}