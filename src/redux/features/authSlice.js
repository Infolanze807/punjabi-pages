import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../axiosConfig";
import { toast } from "react-toastify";

export const login = createAsyncThunk("auth/login", async (loginData) => {
  try {
    const response = await axiosConfig.post("auth/login", loginData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error || error.message || "Something went wrong"
    );
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (registerData) => {
    try {
      const response = await axiosConfig.post("auth/register", registerData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (verifyData) => {
    try {
      const response = await axiosConfig.post("auth/verify-email", verifyData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (forgotEmail) => {
    try {
      const response = await axiosConfig.post(
        "auth/forgot-password",
        forgotEmail
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetPasswordData) => {
    try {
      const response = await axiosConfig.post(
        "auth/reset-password",
        resetPasswordData
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (resendOtpData) => {
    try {
      const response = await axiosConfig.post(
        "auth/resend-registration-otp",
        resendOtpData
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (deleteData) => {
    try {
      const response = await axiosConfig.delete(
        "auth/delete-account",
        deleteData
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      toast.info("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        toast.success(state.message);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
