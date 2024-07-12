import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/pages";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default App;
