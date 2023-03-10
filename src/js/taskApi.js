import { baseApiAsync } from "./baseApi"

const TASK = "/tasks"


function taskApi(method,  data = null, id = "") {
    const endpoint = id ? TASK + "/" + id : TASK
    return baseApiAsync(method, endpoint, data)
}

export function getTasks() {
    return taskApi("GET")
}

export function getTaskById(id) {
    return taskApi("GET", null, id)
} 

export function createTask(task) {
    return taskApi("POST", task)
}

export function updateTask(task) {
    return taskApi("PUT", task, task.id)
}

export function deleteTask(id) {
    return taskApi("DELETE", null, id)
}

export function updateTaskStatus(task) {
    return taskApi("PUT", taskIdByQuery(task.id), {
        task
    })
}


