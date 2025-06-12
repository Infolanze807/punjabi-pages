import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../axiosConfig";
import { toast } from "react-toastify";

export const addProfile = createAsyncThunk(
  "dashboard/addProfile",
  async (profileData) => {
    try {
      const response = await axiosConfig.post("businesses", profileData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const getMyBussiness = createAsyncThunk(
  "dashboard/getMyBussiness",
  async () => {
    try {
      const response = await axiosConfig.get("businesses/my/businesses");
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const updateMyBussiness = createAsyncThunk(
  "dashboard/updateMyBussiness",
  async ({bussinessId,bussinessData}) => {
    try {
      const response = await axiosConfig.patch(`businesses/${bussinessId}`,bussinessData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    myBussiness: [],
    updateBussiness: null,
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(action.payload.message);
      })
      .addCase(addProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getMyBussiness.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyBussiness.fulfilled, (state, action) => {
        state.loading = false;
        state.myBussiness = action.payload.data;
        state.message = action.payload.message;
        // toast.success(action.payload.message);
      })
      .addCase(getMyBussiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(updateMyBussiness.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMyBussiness.fulfilled, (state, action) => {
        state.loading = false;
        state.updateBussiness = action.payload;
        state.message = action.payload.message;
        toast.success(action.payload.message);
      })
      .addCase(updateMyBussiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export default dashboardSlice.reducer;
