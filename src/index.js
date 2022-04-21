import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
import OffsetContext from "./context";

const Main = () => {
  const [offset, setOffset] = useState(6);
  return (
    <React.StrictMode>
      <OffsetContext.Provider value={{ offset, setOffset }}>
        <App />
      </OffsetContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
