import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
import PageStateContext from "./context";

const Main = () => {
  const [offset, setOffset] = useState(6);

  return (
    <React.StrictMode>
      <PageStateContext.Provider value={{ offset, setOffset }}>
        <App />
      </PageStateContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
