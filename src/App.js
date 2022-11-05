import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomHook from "./components/CustomHook";
// import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Reducer from "./components/Reducer";

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
          <Route
            path="/Reducer"
            element={
              <ErrorBoundary>
                <Reducer />
              </ErrorBoundary>
            }
          />
          <Route
            path="/CustomHook"
            element={
              <ErrorBoundary>
                <CustomHook initialCount={1} />
              </ErrorBoundary>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
