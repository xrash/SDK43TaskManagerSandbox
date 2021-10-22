import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native'
import {
  getForegroundPermissionsAsync,
  getBackgroundPermissionsAsync,
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
} from 'expo-location'

export const PermissionsControls = () => {
  const [fgPerms, setFgPerms] = useState('')
  const [bgPerms, setBgPerms] = useState('')

  const handlePressGetForegroundPermissions = async () => {
    try {
      const perms = await getForegroundPermissionsAsync()
      setFgPerms(JSON.stringify(perms))
      //      console.log('handlePressGetForegroundPermissions perms', perms)
    } catch (e) {
      console.log('handlePressGetForegroundPermissions e', e)
    }
  }

  const handlePressGetBackgroundPermissions = async () => {
    try {
      const perms = await getBackgroundPermissionsAsync()
      setBgPerms(JSON.stringify(perms))
      //      console.log('handlePressGetBackgroundPermissions perms', perms)
    } catch (e) {
      console.log('handlePressGetBackgroundPermissions e', e)
    }
  }

  const handlePressRequestForegroundPermissions = async () => {
    try {
      const perms = await requestForegroundPermissionsAsync()
      //      console.log('handlePressRequestForegroundPermissions perms', perms)
    } catch (e) {
      console.log('handlePressRequestForegroundPermissions e', e)
    }
  }

  const handlePressRequestBackgroundPermissions = async () => {
    try {
      const perms = await requestBackgroundPermissionsAsync()
      //      console.log('handlePressRequestBackgroundPermissions perms', perms)
    } catch (e) {
      console.log('handlePressRequestBackgroundPermissions e', e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 8 }}>
        <Text>{`fg perms (${fgPerms})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Text>{`bg perms (${bgPerms})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'Get Foreground Permissions'}
          onPress={handlePressGetForegroundPermissions}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'Get Background Permissions'}
          onPress={handlePressGetBackgroundPermissions}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'Request Foreground Permissions'}
          onPress={handlePressRequestForegroundPermissions}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'Request Background Permissions'}
          onPress={handlePressRequestBackgroundPermissions}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})
