import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware from "./RootSaga";
import createRootReducer from "./RootReducer";

const rootReducer = createRootReducer();

const middleware = [sagaMiddleware];

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
