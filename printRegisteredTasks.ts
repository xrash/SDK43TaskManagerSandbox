import {
  getRegisteredTasksAsync,
} from 'expo-task-manager'

const printRegisteredTasks = () => {
  getRegisteredTasksAsync()
    .then(tasks => {
      console.log(`registered tasks ${JSON.stringify(tasks)}`)
    })
    .catch(e => {
      console.log(e)
    })
}

setInterval(printRegisteredTasks, 5000)
