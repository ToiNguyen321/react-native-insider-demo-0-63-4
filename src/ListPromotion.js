import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationService from './NavigationService'

const ListPromotion = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24 }}>LIST PROMOTION</Text>
      <Button onPress={() => NavigationService.goBack()} title='Go Back' />
    </View>
  )
}

export default ListPromotion

const styles = StyleSheet.create({})