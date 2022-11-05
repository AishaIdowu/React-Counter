import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
