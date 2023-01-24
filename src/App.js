import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import "./App.scss";

const App = () => (
  <>
    <Header/>
    <Routes>
      <Route
        index
        element={<SearchResults />}
      />
      <Route
        path="/:id"
        element={<ProductDetails />}
      />
    </Routes>
  </>
);

export default App;
