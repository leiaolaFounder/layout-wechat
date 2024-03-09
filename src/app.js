import { useLaunch } from "@tarojs/taro";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "@store/index";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/index.scss";
import "./app.scss";

const App = ({ children }) => {
  useLaunch(() => {
    console.log("App launched.");
  });
  return (
    <Provider store={store}>
      <PersistGate loading={children} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default App;
