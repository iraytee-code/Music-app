import { combineReducers } from "redux";
import { reducer as ToastrReducer } from "react-redux-toastr";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authenticationReducer"],
};

const appReducer = combineReducers({
  toastr: ToastrReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
