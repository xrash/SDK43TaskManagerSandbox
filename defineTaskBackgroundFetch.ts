import {
  defineTask,
} from 'expo-task-manager'
import {
  BackgroundFetchResult,
} from 'expo-background-fetch'
import {
  TASK_NAME_BACKGROUND_FETCH,
  knock,
} from './utils'

defineTask(TASK_NAME_BACKGROUND_FETCH, ({ data, error }) => {
  console.log(`${TASK_NAME_BACKGROUND_FETCH} data`, data)
  console.log(`${TASK_NAME_BACKGROUND_FETCH} error`, error)
  knock(JSON.stringify(data), 'bg-fetch')
  return BackgroundFetchResult.NewData
})
