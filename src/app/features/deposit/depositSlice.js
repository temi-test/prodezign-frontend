import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import depositService from "../deposit/depositService";
var _ = require("lodash");

const SUCCESS = "successful";
const FAILURE = "failure";
const PENDING = "pending";

const initial_response = {
  loading: false,
  success: true,
  error: false,
  message:
    "Your Deposit has been successfully processed. Confirm by cheking your bank account and wallet balance",
  //data: null,
  data: {
    transaction_id: "4064195",
    transaction_ref: "FLW-MOCK-343beb95cb7b95551ac753180a83d5fc",
    status: "pending",
    amount: 400,
    datetime: "2023-01-03T08:48:50.324Z",
    narration: "Self Deposit by Daramola Temitope Triumph",
    type: "Deposit",
    sender_id: "63b3d8666182dd9adb808ae4",
    wallet_id: null,
    bank_name: null,
    bank_code: null,
    account_number: null,
    account_name: null,
    _id: "63b3ebf2cbc8a93f1a3c3acd",
  },
};
const initialState = {
  deposit_response: {
    ...initial_response,
  },
  deposit_status: "pending",
  redirect_url: "",
  deposit_errors: [],
  deposit_mode: "", //pin,avs,  otp, 3ds/redirct, success, failure, pending,
  deposit_stage: "charge", // charge, authorize, validate, redirectHandler
};

/// ASYNC THNUK FUNCTIONS
export const depositCharge = createAsyncThunk(
  "deposit/charge",
  async (payload, thunkAPI) => {
    try {
      return await depositService.create(payload);
    } catch (error) {
      const field_errors = error?.response?.data?.fields;
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("deposit update thunk error debug");
      console.log(message);
      console.log(error);
      return thunkAPI.rejectWithValue({
        message: message,
        field_errors: field_errors,
      });
    }
  }
);

export const authorizeCharge = createAsyncThunk(
  "deposit/authorize",
  async (payload, thunkAPI) => {
    try {
      return await depositService.authorize(payload);
    } catch (error) {
      const field_errors = error?.response?.data?.fields;
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("deposit authorize thunk error debug");

      console.log(error);
      return thunkAPI.rejectWithValue({
        message: message,
        field_errors: field_errors,
      });
    }
  }
);

export const validateCharge = createAsyncThunk(
  "deposit/validate",
  async (payload, thunkAPI) => {
    try {
      return await depositService.validate(payload);
    } catch (error) {
      const field_errors = error?.response?.data?.fields;
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("deposit validate thunk error debug");

      console.log(error);
      return thunkAPI.rejectWithValue({
        message: message,
        field_errors: field_errors,
      });
    }
  }
);

export const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    setDepositResponse: (state, action) => {
      if (action.payload === true) {
        state.deposit_response = {
          loading: false,
          success: false,
          error: false,
          message: "",
        };
      } else {
        state.deposit_response = action.payload;
      }
    },

    setDepositMode: (state, action) => {
      state.deposit_mode = action.payload;
    },
    setDepositErrors: (state, action) => {
      if (action.payload == true) {
        state.field_errors = {};
      } else {
        state.field_errors = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(depositCharge.pending, (state, action) => {
        state.deposit_response.loading = true;
      })
      .addCase(depositCharge.fulfilled, (state, action) => {
        // set the deposit api response to success
        state.deposit_response.success = true;
        state.deposit_response.loading = false;

        if (action.payload?.status) {
          // the charge was successful
          state.deposit_mode = "validated"; /// auto validated
          state.deposit_status = action.payload.status;
          state.deposit_response.message = action.payload.message;
        } else {
          // the states here will move the form to the next stage of the transactions
          // check the current
          if (action.payload.mode === "redirect") {
            state.redirect_url = action.payload.redirect_url;
          }
          state.deposit_mode = action.payload.mode; // either pin or avs_noauth or redirect here
          state.deposit_fields = action.payload.fields;
        }
      })
      .addCase(depositCharge.rejected, (state, action) => {
        state.deposit_response.loading = false;
        state.deposit_response.error = true;
        state.deposit_response.message = action.payload.message;
        state.deposit_errors = action.payload?.field_errors;
      })

      // for the authorize charge returns 3 instances
      // otp mode....to be used in the next stage....validate stage
      // redirect mode.......to be used in the next stage.....redirectHandler
      // auto validation.......to show the final transaction status to user
      .addCase(authorizeCharge.pending, (state, action) => {
        state.deposit_response.loading = true;
      })
      .addCase(authorizeCharge.fulfilled, (state, action) => {
        state.deposit_response.success = true;
        state.deposit_response.loading = false;

        if (action.payload?.status) {
          // the authorize was successful
          state.deposit_stage = "validated"; /// auto validated
          state.deposit_status = action.payload.status;
          state.deposit_response.message = action.payload.message;
        } else {
          // the states here will move the form to the next stage of the transactions

          // check the current
          if (action.payload.mode == "redirect") {
            state.redirect_url = action.payload.redirect_url;
          }
          state.deposit_mode = action.payload.mode; // either otp or redirect here
          state.deposit_fields = action.payload.fields;
        }
      })
      .addCase(authorizeCharge.rejected, (state, action) => {
        state.deposit_response.loading = false;
        state.deposit_response.error = true;
        state.deposit_response.message = action.payload.message;
        state.deposit_errors = action.payload?.field_errors;
      })

      // for the validate charge returns the final transaction status
      // success mode.......
      // pending mode.......
      // failure............
      // error.........server error validating the charge
      .addCase(validateCharge.pending, (state, action) => {
        state.deposit_response.loading = true;
      })
      .addCase(validateCharge.fulfilled, (state, action) => {
        state.deposit_stage = "validated"; ///manually or auto validated
        state.deposit_status = action.payload.status;
        state.deposit_response.success = true;
        state.deposit_response.loading = false;
        state.deposit_response.message = action.payload.message;
      })
      .addCase(validateCharge.rejected, (state, action) => {
        state.deposit_response.loading = false;
        state.deposit_response.error = true;
        state.deposit_response.message = action.payload.message;
        state.deposit_errors = action.payload?.field_errors;
      });
  },
});

export const { setDepositResponse, setDepositErrors, setDepositMode } =
  depositSlice.actions;
export default depositSlice.reducer;
