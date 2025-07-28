import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosConfig from "../axiosConfig";
import categories from "./enum";

export const getBusinessCategory = createAsyncThunk(
  "business/getBusinessCategory",
  async ({ category, keyword, page }, { rejectWithValue }) => {
    try {
      let url = `/businesses/search?`;

      if (category) url += `category=${encodeURIComponent(category)}&`;
      if (keyword) url += `keyword=${encodeURIComponent(keyword)}&`;
      if (page !== undefined && page !== null) url += `page=${page}`;

      const response = await axiosConfig.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const getCategoryDropdown = createAsyncThunk(
  "business/getCategoryDropdown",
  async () => {
    try {
      const response = await axiosConfig.get("businesses/categories");
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const getCities = createAsyncThunk(
  "business/getCities",
  async () => {
    try {
      const response = await axiosConfig.get("location/cities");
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);


const businessSlice = createSlice({
  name: "business",
  initialState: {
    BusinessCategory: [],
    categoriesDropdown: [],
    cities: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinessCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBusinessCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.BusinessCategory = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getBusinessCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getCategoryDropdown.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryDropdown.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesDropdown = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getCategoryDropdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload?.cities || [];
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export default businessSlice.reducer;
