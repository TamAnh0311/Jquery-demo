const API_ROOT = "http://localhost:8080"

export function baseApiAsync(method, endpoint, payload = null) {
    const data = JSON.stringify(payload)
    return $.ajax({
        method,
        url: API_ROOT + endpoint,
        data,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-Type", "application/json");

            const token = localStorage.getItem('accessToken')
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        }
    })
}
