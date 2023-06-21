import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import NavigationService from './NavigationService'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24 }}>MED247 (HOME)</Text>
      <Button onPress={() => NavigationService.navigate("ListPromotion")} title='Go to ListPromotion' />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})