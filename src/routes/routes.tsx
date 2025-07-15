import { FiHome, FiUsers, FiSettings } from "react-icons/fi"; // pode usar qualquer lib
import LoginPage from "@/app/login/LoginPage";
export const appRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FiHome />,
    element: <LoginPage />, // substitua pelo componente de dashboard real
  },
  {
    path: "/users",
    name: "Usuários",
    icon: <FiUsers />,
    element: <div>Users Page</div>,
  },
  {
    path: "/settings",
    name: "Configurações",
    icon: <FiSettings />,
    element: <div>Settings Page</div>,
  },
];
