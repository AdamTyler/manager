import React from 'react'
import { Modal, Text, View } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, onDecline, onAccept, visible }) => {
  const { containerStyle, textStyle, cardSectionStytle } = styles
  return (
    <Modal
      animationType={'slide'}
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStytle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onDecline}>No</Button>
          <Button onPress={onAccept}>Yes</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStytle: {
    justifyContent: 'center'
  },
  textSytle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
}

export { Confirm }
