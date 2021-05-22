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
                <View style={homescreenStyles.entryContainerRight}>
                    <View>
                        <Text style={sharedStyles.subTitle}>{ this.props.mood }</Text>
                        <View style={homescreenStyles.tagContainer}>
                            { this.renderTags(this.props.tags) }
                        </View>
                    </View>
                    <FontAwesome 
                        name='chevron-right' 
                        style={[sharedStyles.fontColourAlpha, homescreenStyles.chevronRight]} 
                        size={25} />
                </View>
            </View>
        )
    }

    getMoodIcon(mood) {
        const mainEmotions = ['angry', 'frown', 'meh', 'smile', 'laugh-beam']
        const mainEmotionsDisplay = ['Angry', 'Sad', 'Meh', 'Happy', 'Very Happy']

        return (
            <FontAwesome 
                style={homescreenStyles.faceIcon} 
                name={mainEmotions[mainEmotionsDisplay.indexOf(mood)]} 
                size={60} />
        )
    }

    renderTags(tags) {
        return tags.map((tag, i) => (
            <Text style={homescreenStyles.tag} key={i}>{ tag }</Text>
        ))
    }
}