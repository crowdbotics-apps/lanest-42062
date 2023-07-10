import axios from "axios"
import { LANEST_USERNAME, LANEST_PASSWORD } from "react-native-dotenv"
const lanest = axios.create({
  baseURL: "https://lenestgd.socpanel.com/",
  auth: { username: LANEST_USERNAME, password: LANEST_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
