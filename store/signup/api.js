import axios from "axios"
const signup = axios.create({
  baseURL: "https://tstcr2020092101-20512.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function signup_post_api_v1_signup_read(payload) {
  return signup.post(`/api/v1/signup`, payload.data)
}
export const apiService = { signup_post_api_v1_signup_read }
