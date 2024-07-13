import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/pages";
import { Layout } from "@/components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Login />} path="/" />
        <Route element={<Navigate to="/" />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
