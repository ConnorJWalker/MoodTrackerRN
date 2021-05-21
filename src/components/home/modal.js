import React from "react";
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

import styles from '../../styles/shared'
import modalStyles from '../../styles/modals'

import tags from '../../../assets/emotions.json'

export default class NewEntryModal extends React.Component {
    constructor() {
        super()

        this.state = {
            shouldShowMore: false,
            selectedMainEmotion: -1
        }
        this.mainEmotions = ['angry', 'frown', 'meh', 'smile', 'laugh-beam']
    }

    render() {
        return (
            <Modal visible={this.props.show} transparent={true} animationType="slide">
                <View style={modalStyles.centerView}>
                    <View style={modalStyles.modalView}>
                        {/* Modal Header */}
                        <View style={modalStyles.modalHeader}>
                            <TouchableOpacity onPress={() => this.closeModal()}>
                                <FontAwesome name="times" size={25} style={styles.fontColourAlpha} />
                            </TouchableOpacity>
                            <Text style={[styles.subTitle, modalStyles.modalTital]}>I Am Feeling</Text>
                            {/* TODO: find less hacky method of aligning modal title */}
                            <FontAwesome name="times" size={25} style={{color: '#00000000'}} />
                        </View>

                        {/* Main Modal Content */}
                        <View style={modalStyles.moodIconsSelector}>
                            { this.renderMoodIcons() }
                        </View>
                        <View style={{ display: this.state.shouldShowMore ? 'flex' : 'none' }}>
                            <Text>Emotions</Text>
                            <View>
                                <Text style={{ display: this.state.selectedMainEmotion === -1 ? 'flex' : 'none' }}>
                                    No Mood Currently Selected
                                </Text>
                                <View 
                                    style={[
                                        { display: this.state.selectedMainEmotion !== -1 ? 'flex' : 'none' },
                                        modalStyles.emotionTagContainer
                                    ]}
                                >
                                    { this.renderEmotionTags() }
                                </View>
                            </View>
                            <Text>I am currently at: </Text>
                        </View>

                        {/* Modal Footer */}
                        <View style={modalStyles.modalFooter}>
                            <TouchableOpacity 
                                onPress={() => this.handleShowMoreLessButtonClick()}
                                style={[modalStyles.modalFooterButton, { borderRightWidth: 2 }]} 
                            >
                                <Text style={{textAlign: 'center'}}>Show { this.state.shouldShowMore ? 'Less' : 'More' }</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.modalFooterButton}>
                                <Text style={{textAlign: 'center'}}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    renderMoodIcons() {
        return this.mainEmotions.map((icon, i) => (
            <FontAwesome 
                name={icon}
                size={40}
                style={this.state.selectedMainEmotion === i ? styles.accentColour : styles.fontColour} 
                key={i}
                onPress={() => this.updateSelectedMood(i)} />
        ))
    }

    handleShowMoreLessButtonClick() {
        this.setState({ shouldShowMore: !this.state.shouldShowMore })
    }

    updateSelectedMood(index) {
        this.setState({ selectedMainEmotion: index })
    }

    renderEmotionTags() {
        if (this.state.selectedMainEmotion === -1) return

        return tags[this.mainEmotions[this.state.selectedMainEmotion]].map(emotion => (
            <Text>{ emotion }</Text>
        ))
    }

    closeModal() {
        this.setState({ selectedMainEmotion: -1, shouldShowMore: false })
        this.props.toggleClose()
    }
}