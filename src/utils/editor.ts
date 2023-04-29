import { Quill } from "react-quill";

export {};

// export const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }],
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link", "image"],
//   ],
//   imageResize: {
//     modules: ["Resize", "DisplaySize"],
//     displaySize: true,
//     maxSize: {
//       width: 500,
//       height: 500,
//     },
//   },
// };

export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
  ImageResize: {
    maxWidth: 600,
    maxHeight: 800,
    parchment: Quill.import("parchment"),
  },
};
