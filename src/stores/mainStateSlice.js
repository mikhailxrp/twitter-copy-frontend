import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',

  async function () {
    try {
      const response = await fetch('http://localhost:5500/users');
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',

  async function () {
    try {
      const response = await fetch('http://localhost:5500/posts');

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const mainState = createSlice({
  name: 'mainState',
  initialState: {
    visibleStateRegister: false,
    visibleStateLogin: false,
    users: [],
    posts: [],
    statusUsers: null,
    statusPosts: null,
  },
  reducers: {
    register: (state, action) => {
      state.visibleStateRegister = action.payload;
    },
    login: (state, action) => {
      state.visibleStateLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.statusUsers = 'loading';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.statusUsers = 'resolved';
      state.users = action.payload;
    });

    builder.addCase(fetchPosts.pending, (state) => {
      state.statusPosts = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.statusPosts = 'resolved';
      state.posts = action.payload;
    });
  },
});

export const { register, login } = mainState.actions;

export default mainState.reducer;
