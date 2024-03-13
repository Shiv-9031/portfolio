import "./App.css";

import BlogRoutes from "./pages/Blog/Routes/BlogRoutes.mjs";

function App() {
  return (
    <>
      <div className="App" style={{ marginTop: "75px" }}>
        <BlogRoutes />
      </div>
    </>
  );
}

export default App;
