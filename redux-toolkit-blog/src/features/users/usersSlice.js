import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tomper" },
  { id: "1", name: "zomper" },
  { id: "2", name: "chomper" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
