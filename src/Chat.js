import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationService from './NavigationService'

const Chat = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => NavigationService.goBack()} title='Go Back' />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})