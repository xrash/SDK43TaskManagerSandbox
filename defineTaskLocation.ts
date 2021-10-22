import {
  defineTask,
} from 'expo-task-manager'
import {
  TASK_NAME_LOCATION,
  knock,
} from './utils'

defineTask(TASK_NAME_LOCATION, ({ data, error }) => {
  console.log(`${TASK_NAME_LOCATION} data`, data)
  console.log(`${TASK_NAME_LOCATION} error`, error)
  knock(JSON.stringify(data), 'location')
  //  throw new Error('ERROR THROWN')
})
