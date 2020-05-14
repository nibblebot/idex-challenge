import { createSlice } from "@reduxjs/toolkit"
import { userAccountInfo } from "../../profile.json"

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    fullName: userAccountInfo.fullName,
    email: userAccountInfo.email,
    avatar: userAccountInfo.profilePictureURL,
    password: "",
    language: "en",
  },
  reducers: {
    setProfile: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.fullName = action.payload.fullName
      state.email = action.payload.email
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const { setProfile, setLanguage } = profileSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEmail = (state) => state.profile.email
export const selectFullName = (state) => state.profile.fullName
export const selectAvatar = (state) => state.profile.avatar
export const selectLanguage = (state) => state.profile.language

export default profileSlice.reducer
