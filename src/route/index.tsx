import { Cart } from "../pages/cart";
import { ForgotPassword } from "../pages/forgotPassword";
import { HistoriesOrder } from "../pages/historiesOrder";
import HomePage from "../pages/home";
import { InfoUser } from "../pages/infoUser";
import {ProductlPage} from "../pages/phone";
import { PhoneByCategory } from "../pages/phoneByCategory";
import RegisterPage from "../pages/register";
const RouteNav = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id_phone",
    element: <ProductlPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/phone_category/:id_category",
    element: <PhoneByCategory/>
  },
  {
    path: "/info_user",
    element: <InfoUser/>
  },
  {
    path: "/histories_order",
    elment: <HistoriesOrder/>
  }
];
export default RouteNav;
