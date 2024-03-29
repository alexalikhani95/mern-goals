import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null, // if there is a user in localstorage, use that, otherwise null
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString(); // If any of this exists, it will be put into this variable
    return thunkAPI.rejectWithValue(message); // This will reject and send the error message as the payload
  }
});

// Loginuser
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString(); // If any of this exists, it will be put into this variable
    return thunkAPI.rejectWithValue(message); // This will reject and send the error message as the payload
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //response from the backend
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      }) // if the registration gets rejected
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //response from the backend
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //response from the backend
        state.user = null;
      }) // if the registration gets rejected
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const { reset } = authSlice.actions; // reset re has to be exported from actions as its in a reducer object
export default authSlice.reducer;
