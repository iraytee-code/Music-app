import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import persistedReducer from "./reducers";
import { persistStore } from "redux-persist";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware];

//method to find if you are local or production

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
