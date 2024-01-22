// import { BiLike } from "react-icons/bi";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import TextAreaComponent from "../textArea";
// // import { idComment } from "../../redux/slice";
// import classNames from "classnames/bind";
// import styles from "./comment.module.scss";
// import ButtonComponent from "../button";
// const cx = classNames.bind(styles);
// const CommentComponent = ({ comment, show }: any) => {
//   const [like, setLike] = useState(false);
//   const dispatch = useDispatch();
//   return (
//     <div className={cx("comment-container")}>
//       <div style={{ display: "flex" }}>
//         <img
//           style={{ width: "40px", height: "40px" }}
//           src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-barca-inkythuatso-2-01-05-10-08-55.jpg"
//           alt=""
//         />
//         <h5 style={{ marginLeft: "5px" }}>Tên</h5>
//       </div>
//       <div style={{ marginLeft: "30px" }}>
//         <p style={{ marginBottom: "20px" }}>{comment.comment}</p>
//         <p style={{ fontSize: "15px" }}>
//           <span
//             onClick={() => {
//               dispatch(idComment(comment.id));
//             }}
//             style={{ marginRight: "20px", cursor: "pointer" }}>
//             Trả lời
//           </span>
//           <span
//             onClick={() => setLike(!like)}
//             style={like ? { color: "blue", cursor: "pointer" } : { cursor: "pointer" }}>
//             <BiLike />
//             Thích
//           </span>
//           <span style={{ fontSize: "12px", marginLeft: "20px", opacity: "0.7" }}>21/07/2022</span>
//         </p>
//         {/* {show && <TextAreaComponent placeholder="Nhập câu trả lời" />} */}
//       </div>
//       <ul style={{ listStyle: "none", margin: "20px 10px" }}>
//         {comment.listCommentChildren.length > 0 &&
//           comment.listCommentChildren.map((commentChildren: any, index: number) => {
//             return (
//               <li key={index} style={{ margin: "20px 40px" }}>
//                 <CommentComponent comment={commentChildren} />
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };
// export default CommentComponent;
