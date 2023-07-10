import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_signup_create = createAsyncThunk(
  "signups/api_v1_signup_create",
  async payload => {
    const response = await apiService.api_v1_signup_create(payload)
    return response.data
  }
)
export const rest_auth_registration_create = createAsyncThunk(
  "signups/rest_auth_registration_create",
  async payload => {
    const response = await apiService.rest_auth_registration_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signupsSlice = createSlice({
  name: "signups",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_signup_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_signup_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_signup_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [rest_auth_registration_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_registration_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [rest_auth_registration_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_signup_create,
  rest_auth_registration_create,
  slice: signupsSlice
}
