import classNames from "classnames/bind";
import styles from "./index.module.scss";
import 'swiper/swiper-bundle.css';
import {OutstandingComponent} from "./bestSell";
import { SlideComponent } from "./slides";
import { BestSellComponent } from "./massiveDiscount";
import { News } from "../../component/news";
import { BrandOutStandingComponent } from "./brandOutstanding";
const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("container")}>
        <SlideComponent/>
        <BrandOutStandingComponent/>
        <OutstandingComponent />
        <BestSellComponent/>
    </div>
  );
};
export default HomePage;
