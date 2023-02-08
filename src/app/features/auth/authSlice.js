import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import authService from "../auth/authService";

const local_token = JSON.parse(localStorage.getItem("prodezign_user_token"));
console.log("local token below");
console.log(local_token);


const initialState = {
  account: null,
  token: !local_token ? null : local_token,
  enrollments: [],
  isVerified: false,
  current_action: "",
  loading: false,
  error: false,
  success: false,
  message: "",

  current_view: "signup",

  // current_view: {
  //   view: "signup",
  //   title_text: "Create An Account",
  //   switch_text: "Already have an account ? Login",
  //   button_text: "Create Account",
  // },

  read_user: {
    loading: false,
    error: false,
    success: false,
    redirect: false,
  },
};

/// ASYNC THNUK FUNCTIONS
export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      return await authService.register(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log("register thunk error");
      console.log(message);
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      return await authService.login(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log("login thunk error");
      console.log(message);
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const verify = createAsyncThunk(
  "auth/verify",
  /// payload is a string
  async (payload, thunkAPI) => {
    try {
      return await authService.verify(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log("verify thunk error");
      console.log(message);
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const readUser = createAsyncThunk(
  "auth/readUser",
  async (payload, thunkAPI) => {
    try {
      return await authService.readUser(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      const status = error?.response?.data?.status;
      const redirect = error?.response?.data?.redirect;
      return thunkAPI.rejectWithValue({
        status,
        message,
        redirect
      });
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
      state.current_action = "";
    },

    setCurrentView: (state, action) => {
      state.current_view = action.payload;
    },

    setBalance: (state, action) => {
      state.account.balance = action.payload;
    },

    signOut: (state, action) => {
      localStorage.removeItem("prodezign_user_token");
      state.account = null;
      state.token = null;
      state.enrollments =  [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.current_action = "signup";
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.current_view = "verify";
        state.account = action.payload.account;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.account = null;
        state.message = action.payload;
      })

      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current_action = "login";
        state.loading = false;
        state.success = true;
        state.error = false;
        let verified = action.payload.account.verified;
        /// if account not verified
        if (!verified) {
          /// update the current_view state to verify
          state.current_view = "verify";
        }
        state.account = action.payload.account;
        state.token = action.payload.token;
        state.enrollments = action.payload.enrollments;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.account = null;
        state.token = null;
        state.message = action.payload;
      })

      .addCase(verify.pending, (state, action) => {
        state.current_action = "verify";
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        // if verify sis successful then you update the verified state in the account to be true
        state.account.verified = true;
      })
      .addCase(verify.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(readUser.pending, (state, action) => {
        state.read_user.loading = true;
        state.read_user.error = false;
        state.read_user.success = false;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.read_user.loading = false;
        state.read_user.success = true;
        state.account = action.payload.account;
        state.enrollments = action.payload.data;
      })
      .addCase(readUser.rejected, (state, action) => {
        console.log(action.payload)
        state.read_user.loading = false;
        state.read_user.error = true;
        state.account = null;
        state.message = action.payload.message;
        state.read_user.redirect = action.payload?.redirect;
      });
  },
});

export const { reset, setCurrentView, setBalance, signOut } = authSlice.actions;
export default authSlice.reducer;
