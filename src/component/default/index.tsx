import { ReactNode } from "react";
import { HeaderComponent } from "../header";
import FooterComponent from "../footer";
import { BreadCrumdComponent } from "../breadCrumd";
import LoginModal from "../../modal/user/login";
import FirstComponent from "../topHot";
import CategoryComponent from "../category";
import { ConfirmLogoutModal } from "../../modal/user/logout";
import { ReviewModal } from "../../modal/phone/review";
import { News } from "../news";
interface Props {
  children: ReactNode;
  path: string;
}
const DefaultComponent = ({ children, path }: Props) => {
  return (
    <div>
      <LoginModal />
      <ConfirmLogoutModal/>
      <FirstComponent/>
      <ReviewModal/>
     <div>
        <HeaderComponent />
        <CategoryComponent />
        <div style={{ width: "1200px", margin: "0 auto" }}>
          {children}
          {path !== "/register" && <News/>}
          {path !== "/register" && path !=="/forgot" && <FooterComponent />}
        </div>
      </div>
    </div>
  );
};
export default DefaultComponent;
