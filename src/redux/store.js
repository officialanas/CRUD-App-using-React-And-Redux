import { configureStore } from "@reduxjs/toolkit"
import PostSlice from "../redux/features/PostSlice"

export default configureStore({
  reducer: {
    app: PostSlice,
  },
})