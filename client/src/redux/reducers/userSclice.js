import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    firstTimeUser: true,
    userRole: '',
    token: '',
//   isLoggedIn: false,
//   id: '',
//   username: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignUserRole: (state, actions) => {
      state.userRole = actions.payload
    },
    setIsFirstTimeUser: (state, actions) => {
      state.firstTimeUser = false
    },
    // setLoginDetails: (state, actions) => {
    //   if (actions.payload) {
    //     const { token, id, username } = actions.payload
    //     state.token = token
    //     state.id = id
    //     state.username = username
    //   }
    //   state.isLoggedIn = !state.isLoggedIn
    // },
    resetLoginDetails: (state) => {
        state.userRole = ''
        state.firstTimeUser = true
    //   state.token = ''
    //   state.id = ''
    //   state.username = ''
    //   state.isLoggedIn = !state.isLoggedIn
    }
  }
});

export const { assignUserRole, setIsFirstTimeUser } = userSlice.actions;
export default userSlice.reducer;