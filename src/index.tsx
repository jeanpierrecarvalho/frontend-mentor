import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductPreviewCardComponent from "./Newbie/ProductPreviewCardComponent";
import StatsPreviewCardComponent from "./Newbie/StatsPreviewCardComponent";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/newbie">
          <Route
            path="product-preview-card-component"
            element={<ProductPreviewCardComponent />}
          />
          <Route
            path="stats-preview-card-component"
            element={<StatsPreviewCardComponent />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
