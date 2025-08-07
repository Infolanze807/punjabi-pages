import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosConfig from "../axiosConfig";
import categories from "./enum";

export const getBusinessCategory = createAsyncThunk(
  "business/getBusinessCategory",
  async (
    { category, subCategory, keyword, page, city },
    { rejectWithValue }
  ) => {
    try {
      let url = `/businesses/search/web?`;

      if (category) url += `category=${encodeURIComponent(category)}&`;
      if (subCategory) url += `subCategory=${encodeURIComponent(subCategory)}&`;
      if (keyword) url += `keyword=${encodeURIComponent(keyword)}&`;
      if (city) url += `city=${encodeURIComponent(city)}&`;
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

export const getCities = createAsyncThunk("business/getCities", async () => {
  try {
    const response = await axiosConfig.get("location/cities");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error || error.message || "Something went wrong"
    );
  }
});

export const getFeatureBusiness = createAsyncThunk(
  "business/getFeatureBusiness",
  async () => {
    try {
      const response = await axiosConfig.get("businesses/feature/web");
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const getStates = createAsyncThunk("business/getStates", async () => {
  try {
    const response = await axiosConfig.get("location/states");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error || error.message || "Something went wrong"
    );
  }
});

export const getBusinessById = createAsyncThunk(
  "business/getBusinessById",
  async (id) => {
    try {
      const response = await axiosConfig.get(`businesses/${id}`);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const getPopularBusiness = createAsyncThunk(
  "business/getPopularBusiness",
  async () => {
    try {
      const response = await axiosConfig.get("businesses/popular");
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
    states: [],
    featureBusiness: [],
    businessById: [],
    popularBusiness: [],
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
      })
      .addCase(getFeatureBusiness.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFeatureBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.featureBusiness = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getFeatureBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getBusinessById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBusinessById.fulfilled, (state, action) => {
        state.loading = false;
        state.businessById = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getBusinessById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getPopularBusiness.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.popularBusiness = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getPopularBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export default businessSlice.reducer;
