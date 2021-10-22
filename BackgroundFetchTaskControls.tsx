import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native'
import {
  registerTaskAsync,
  unregisterTaskAsync,
  getStatusAsync,
} from 'expo-background-fetch'
import {
  getRegisteredTasksAsync,
} from 'expo-task-manager'
import { TASK_NAME_BACKGROUND_FETCH } from './utils'

export const BackgroundFetchTaskControls = () => {
  const [tasks, setTasks] = useState('')
  const [status, setStatus] = useState('')

  const handlePressGetRegisteredTasks = async () => {
    try {
      const registeredTasks = await getRegisteredTasksAsync()
      setTasks(JSON.stringify(registeredTasks))
    } catch (e) {
      console.log('handlePressGetRegisteredTasks e', e)
    }
  }

  const handlePressGetStatus = async () => {
    try {
      const res = await getStatusAsync()
      setStatus(JSON.stringify(res))
    } catch (e) {
      console.log('handlePressGetStatus e', e)
    }
  }

  const handlePressRegisterTask = async () => {
    try {
      await registerTaskAsync(TASK_NAME_BACKGROUND_FETCH, {
        minimumInterval: 5, // 5 secs
        stopOnTerminate: false, // android only,
        startOnBoot: true, // android only
      })
    } catch (e) {
      console.log('handlePressRegisterTask e', e)
    }
  }

  const handlePressUnregisterTask = async () => {
    try {
      await unregisterTaskAsync(TASK_NAME_BACKGROUND_FETCH)
    } catch (e) {
      console.log('handlePressUnregisterTask e', e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 8 }}>
        <Text>{`tasks (${tasks})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Text>{`status (${status})`}</Text>
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'get registered tasks'}
          onPress={handlePressGetRegisteredTasks}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'handle press get status'}
          onPress={handlePressGetStatus}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'register task'}
          onPress={handlePressRegisterTask}
        />
      </View>
      <View style={{ margin: 8 }}>
        <Button
          title={'unregister task'}
          onPress={handlePressUnregisterTask}
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
