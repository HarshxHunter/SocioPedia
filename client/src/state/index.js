import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    city: null,
    users: [],
    URL: process.env.REACT_APP_BASE_URL,
    isLoading: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state,action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },
        setPosts: (state,action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state,action) => {
            const updatedPosts = state.posts.map((post) => {
                if(post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        updateUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token;
        },
        setUsers: (state, action) => {
            state.users = action.payload.users;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.isLoading
          }
    }
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost,setUsers,setIsLoading } = authSlice.actions;
export default authSlice.reducer;