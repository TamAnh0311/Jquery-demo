import { baseApiAsync } from "./baseApi"

const TASK = "/task"


function taskIdByQuery(id) {
    return "?id=" + id
}

function taskApi(method, endpoint = "", data = null) {
    return baseApiAsync(method, TASK + endpoint, data)
}

export function getTasks() {
    return taskApi("GET")
}

export function getTaskById(id) {
    return taskApi("GET", taskIdByQuery(id))
} 

export function createTask(task) {
    return taskApi("POST", "", task)
}

export function updateTask(task) {
    return taskApi("PUT", "", task)
}

export function deleteTask(id) {
    return taskApi("DELETE", taskIdByQuery(id))
}

export function updateTaskStatus(id, status) {
    return taskApi("PUT", '/update-status', {
        id,
        status
    })
}


