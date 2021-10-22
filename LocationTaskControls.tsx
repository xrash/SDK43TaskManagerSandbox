import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native'
import {
  startLocationUpdatesAsync,
  stopLocationUpdatesAsync,
  hasStartedLocationUpdatesAsync,
  Accuracy,
} from 'expo-location'
import {
  getRegisteredTasksAsync,
} from 'expo-task-manager'
import { TASK_NAME_LOCATION } from './utils'

export const LocationTaskControls = () => {
  const [tasks, setTasks] = useState('')
  const [hasStarted, setHasStarted] = useState('')

  const handlePressGetRegisteredTasks = async () => {
    try {
      const registeredTasks = await getRegisteredTasksAsync()
      setTasks(JSON.stringify(registeredTasks))
    } catch (e) {
      console.log('handlePressGetRegisteredTasks e', e)
    }
  }

  const handlePressHasStartedLocationUpdates = async () => {
    try {
      const res = await hasStartedLocationUpdatesAsync(TASK_NAME_LOCATION)
      setHasStarted(res ? 'yes' : 'no')
    } catch (e) {
      console.log('handlePressHasStartedLocationUpdates e', e)
    }
  }

  const handlePressStartLocationUpdates = async () => {
    try {
      /*
      await startLocationUpdatesAsync(TASK_NAME_LOCATION, {
        accuracy: Accuracy.Balanced,
        deferredUpdatesDistance: 30, // 30m ~= 100ft
        deferredUpdatesInterval: 10000, // 10000ms
        distanceInterval: 30, // 30m ~= 100ft
        pausesUpdatesAutomatically: true,
        timeInterval: 10000, // 10000ms
      })
      */

      await startLocationUpdatesAsync(TASK_NAME_LOCATION, {
        accuracy: Accuracy.Balanced,
      })

    } catch (e) {
      console.log('handlePressStartLocationUpdates e', e)
    }
  }

  const handlePressStopLocationUpdates = async () => {
    try {
      await stopLocationUpdatesAsync(TASK_NAME_LOCATION)
    } catch (e) {
      console.log('handlePressStopLocationUpdates e', e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 8 }}>
        <Text>{`tasks (${tasks})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Text>{`hasStarted (${hasStarted})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'get registered tasks'}
          onPress={handlePressGetRegisteredTasks}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'has started location updates'}
          onPress={handlePressHasStartedLocationUpdates}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'start location updates'}
          onPress={handlePressStartLocationUpdates}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'stop location updates'}
          onPress={handlePressStopLocationUpdates}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
})
