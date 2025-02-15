import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "./components/Loading.jsx";
import IngredientList from "./components/Admin/Ingredients/IngredientList.jsx";
import CategoryList from "./components/Admin/Categories/CategoryList.jsx";
import MenuList from "./components/Admin/Menus/MenuList.jsx";
import Homepage from "./components/User/Homepage.jsx";
import UserProfile from "./components/User/Profile.jsx";
import UserList from "./components/Admin/Users/UserList.jsx";
import RoleList from "./components/Admin/Roles/RoleList.jsx";
import ResetPassword from "./components/User/ReserPassword.jsx";
import VideoList from "./components/Admin/Video/VideoList.jsx";
import SeeVideo from "./components/User/SeeVideo.jsx";
import DashBoard from "./components/Admin/Dashboard/Dashboard.jsx";
import CountLogin from "./components/Admin/CounterLogin/LoginCounter.jsx";
import NapXu from "./components/User/NapXu.jsx";
import Login from "./components/User/Login.jsx";
import Register from "./components/User/Register.jsx";
// Lazy load components

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Default redirect to /user/homepage */}
          <Route path="/" element={<Navigate to="/register" replace />} />

          {/* Auth routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Admin routes */}
          <Route path="/admin/ingredients" element={<IngredientList />} />
          <Route path="/admin/categories" element={<CategoryList />} />
          <Route path="/admin/menus" element={<MenuList />} />
          <Route path="/admin/user" element={<UserList />} />
          <Route path="/admin/roles" element={<RoleList />} />
          <Route path="/admin/video" element={<VideoList />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/count-login" element={<CountLogin />} />

          {/* User routes */}
          <Route path="/user/homepage" element={<Homepage />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/resetpassword" element={<ResetPassword />} />
          <Route path="/user/see-video" element={<SeeVideo />} />
          <Route path="/user/nap-xu" element={<NapXu />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
