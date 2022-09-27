import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  // const state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0);
  // const setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
