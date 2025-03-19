import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Auth() {
  return (
    <View>
      <TextInput 
      style={{
        marginTop: 20,
        width:300,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
      }}
      />
      <TextInput 
      style={{
        width:300,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
      }}
      />
      <Button 
      title='Submit'
      />
    </View>
  )
}
