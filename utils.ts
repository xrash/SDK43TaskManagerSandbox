export const TASK_NAME_LOCATION = 'amazing_location_task_name'
export const TASK_NAME_BACKGROUND_FETCH = 'amazing_background_fetch_task_name'
export const SERVER_BASE_URL = 'https://ba56-2804-431-c7c1-e74f-fa28-19ff-febe-5f69.ngrok.io'

export const knock = (data: string, key: string) => {
  const knockurl = `${SERVER_BASE_URL}/knock`
  fetch(knockurl, {
    method: 'POST',
    body: `[${key}] ${data}`,
  })
}

knock(Date.now().toString(), 'init')
