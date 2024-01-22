import { ReactNode } from "react";
import "./index.css";
interface Props {
  children: ReactNode;
}
const StyleDefault = ({ children }: Props) => {
  return <div> {children} </div>;
};
export default StyleDefault;
