import React from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

import styles from '../../styles/shared'
import modalStyles from '../../styles/modals'

export default class DayEntryModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = { diary: this.props.diary }
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
                            <Text style={[styles.subTitle, modalStyles.modalTital]}>Overall I Felt</Text>
                            {/* TODO: find less hacky method of aligning modal title */}
                            <FontAwesome name="times" size={25} style={{color: '#00000000'}} />
                        </View>

                        {/* Main content */}
                        <View style={modalStyles.moreInfoContainer}>
                            <Text style={[styles.subTitle, modalStyles.modalTital]}>Diary</Text>
                            <TextInput 
                                defaultValue={this.state.dairy}
                                placeholder='No diary entry yet :('
                                onChangeText={text => this.setState({ diary: text })} />
                        </View>

                        {/* Modal Footer */}
                        <View style={modalStyles.modalFooter}>
                            <TouchableOpacity style={modalStyles.modalFooterButton} onPress={() => this.handleSaveButtonClick()}>
                                <Text style={{ textAlign: 'center' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    closeModal() {
        this.props.toggleClose()
    }

    handleSaveButtonClick() {
        this.props.saveDiary({
            diary: this.state.diary
        })

        this.closeModal()
    }
}