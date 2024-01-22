import "./index.css"
import { Input } from 'antd';
const { Search } = Input;
export const SearchComponent = () => (
  <>
    <Search placeholder="Tìm kiếm sản phẩm"  loading={false} enterButton />
  </>
);
