const API_ROOT = "http://localhost:8080"

export function baseApiAsync(method, endpoint, data = null) {
    return $.ajax({
        method,
        url: API_ROOT + endpoint,
        data,
        beforeSend: function (xhr) {
            const token = localStorage.getItem('accessToken')
            xhr.setRequestHeader('Authorization', token)
        }
    })
}
