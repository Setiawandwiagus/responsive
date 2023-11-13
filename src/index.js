import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <RouterList />
        </React.StrictMode>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
