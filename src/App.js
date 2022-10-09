import { Fragment } from "react";
import "./App.css";
import AppContent from "./pages/AppContent";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <ReduxToastr
          position="top-center"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          preventDuplicates={true}
        />
        <PersistGate persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Fragment>
    </Provider>
  );
}

export default App;
