import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { lowerCase } from "lodash";
import bootcampService from "./bootcampService";

const initialState = {
  bootcamp_api: {
    loading: false,
    success: false,
    error: false,
    message: "",
  },
  current_bootcamp: {},
  bootcamps: [],
  filtered_bootcamps: {
    web: [],
    ui: [],
    graphics: [],
    product: [],
  },
};

/// ASYNC THNUK FUNCTIONS
export const getBootcamp = createAsyncThunk(
  "bootcamp/getBootcamp",
  async (payload, thunkAPI) => {
    try {
      return await bootcampService.getBootcamp();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleBootcamp = createAsyncThunk(
  "bootcamp/getSingleBootcamp",
  async (payload, thunkAPI) => {
    try {
      return await bootcampService.getSingleBootcamp(payload);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bootcampSlice = createSlice({
  name: "bootcamp",
  initialState,
  reducers: {
    setGetBootcampApi: (state, action) => {
      if (action.payload === true) {
        state.bootcamp_api = {
          loading: false,
          success: false,
          error: false,
          message: "",
        };
      } else {
        state.bootcamp_api = action.payload;
      }
    },
    setCurrentBootcamp: (state, action) => {
      if (action.payload === true) {
        state.current_bootcamp = {};
      } else {
        state.current_bootcamp = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBootcamp.pending, (state, action) => {
        state.bootcamp_api.loading = true;
        if (state.bootcamp_api.error) {
          state.bootcamp_api.error = false;
        }
        if (state.bootcamp_api.success) {
          state.bootcamp_api.success = false;
        }
      })
      .addCase(getBootcamp.fulfilled, (state, action) => {
        // update the getBootcamp api status
        state.bootcamp_api.loading = false;
        state.bootcamp_api.success = true;
        const payload = action.payload; /// list of bootcamps objects
        state.bootcamps = payload;

        payload.map((item) => {
          const category = lowerCase(item.category);
          if (category === "web development") {
            state.filtered_bootcamps.web.push(item);
          } else if (category === "graphics") {
            state.filtered_bootcamps.graphics.push(item);
          } else if (category === "product") {
            state.filtered_bootcamps.product.push(item);
          } else if (category === "ui/ux") {
            state.filtered_bootcamps.ui.push(item);
          }
        });
      })
      .addCase(getBootcamp.rejected, (state, action) => {
        // update the getBootcamp api status
        state.bootcamp_api.loading = false;
        state.bootcamp_api.error = true;
        state.bootcamp_api.message = action.payload;
      })
      .addCase(getSingleBootcamp.pending, (state, action) => {
        state.bootcamp_api.loading = true;
        if (state.bootcamp_api.error) {
          state.bootcamp_api.error = false;
        }
        if (state.bootcamp_api.success) {
          state.bootcamp_api.success = false;
        }
      })
      .addCase(getSingleBootcamp.fulfilled, (state, action) => {
        // update the getBootcamp api status
        state.bootcamp_api.loading = false;
        state.bootcamp_api.success = true;
        const payload = action.payload; /// single bootcamp object

        const category = lowerCase(payload.category);
        if (category === "web development") {
          state.filtered_bootcamps.web.push(payload);
        } else if (category === "graphics") {
          state.filtered_bootcamps.graphics.push(payload);
        } else if (category === "product") {
          state.filtered_bootcamps.product.push(payload);
        } else if (category === "ui/ux") {
          state.filtered_bootcamps.ui.push(payload);
        }
        state.bootcamps.push(payload);
        state.current_bootcamp = payload;
      })
      .addCase(getSingleBootcamp.rejected, (state, action) => {
        // update the getBootcamp api status
        state.bootcamp_api.loading = false;
        state.bootcamp_api.error = true;
        state.bootcamp_api.message = action.payload;
      });
  },
});

export const { setGetBootcampApi, setCurrentBootcamp } = bootcampSlice.actions;
export default bootcampSlice.reducer;
