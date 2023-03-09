import { baseApiAsync } from "./baseApi";
const url = "/login"

export async function login(payload) {
    const res = await baseApiAsync('POST', url, payload)
    console.log(res)
}