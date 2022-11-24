import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        <Toaster position="top-center" reverseOrder={false} />
      </RouterProvider>
    </div>
  );
}

export default App;
