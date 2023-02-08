import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form_select_class: "",
  form_select_session_year: "",
  form_performance_type: "asc",
  form_performance_option: "alpha",
  form_performance_field: "",
  form_performance_filter_field: "",
  form_performance_filter_option: "all",

  // CLASS Performance Form FILTER AND SORT STATES
  class_performance_sort_type: "asc",
  class_performance_sort_option: "alpha",
  class_performance_filter_option: "all",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormSelectClass: (state, action) => {
      state.form_select_class = action.payload;
    },
    setFormSelectSessionYear: (state, action) => {
      state.form_select_session_year = action.payload;
    },
    setFormPerformanceOption: (state, action) => {
      state.form_performance_option = action.payload;
    },
    setFormPerformanceType: (state, action) => {
      state.form_performance_type = action.payload;
    },
    setFormPerformanceField: (state, action) => {
      state.form_performance_field = action.payload;
    },

    setFormPerformanceSortOption: (state) => {
      state.form_performance_option = "alpha";
      state.form_performance_type = "asc";
      state.form_performance_field = "";
    },

    setFormPerformanceFilterOption: (state, action) => {
      if (action.payload == true) {
        state.form_performance_filter_option = "all";
      } else {
        state.form_performance_filter_option = action.payload;
      }
    },
    setFormPerformanceFilterField: (state, action) => {
      state.form_performance_filter_field = action.payload;
    },

    setClassPerformFilterOption: (state, action) => {
      if (action.payload == true) {
        state.class_performance_filter_option = "all";
      } else {
        state.class_performance_filter_option = action.payload;
      }
    },

    setClassPerformSortOption: (state, action) => {
      if (action.payload == true) {
        state.class_performance_sort_option = "all";
      } else {
        state.class_performance_sort_option = action.payload;
      }
    },

    setClassPerformSortType: (state, action) => {
      if (action.payload == true) {
        state.class_performance_sort_type = "asc";
      } else {
        state.class_performance_sort_type = action.payload;
      }
    },
  },
});

export const {
  setFormSelectClass,
  setFormSelectSessionYear,
  setFormPerformanceOption,
  setFormPerformanceType,
  setFormPerformanceField,
  setFormPerformanceFilterField,
  setFormPerformanceFilterOption,
  setFormPerformanceSortOption,


  // Class Performance Filter and Sort Actions
  setClassPerformFilterOption,
  setClassPerformSortOption,
  setClassPerformSortType,

} = formSlice.actions;
export default formSlice.reducer;
