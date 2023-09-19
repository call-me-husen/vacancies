import { configureStore } from "@reduxjs/toolkit";
import job from "@/redux/reducers/job";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    job,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreState: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = useDispatch<AppDispatch>