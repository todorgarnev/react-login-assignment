import { Navigate, Route, Routes } from "react-router-dom";
import { ForgotPassword, Login, Success } from "@/pages";
import { Layout } from "@/components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Login />} path="/" />
        <Route element={<Success />} path="/success" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<Navigate to="/" />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
