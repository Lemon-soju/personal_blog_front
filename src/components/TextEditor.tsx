import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { type HookCallback } from "@toast-ui/editor/types/editor";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import React from "react";
import axios from "axios";

interface TextEditorProps {
  initialValue: string;
  editorRef: React.LegacyRef<Editor>;
  toolbarItems: string[][];
}

const TextEditor: React.FC<TextEditorProps> = ({
  initialValue,
  editorRef,
  toolbarItems,
}) => {
  let accessToken = localStorage.getItem("accessToken");
  const backend = process.env.REACT_APP_BASE_URL;

  const uploadImage = async (blob: Blob | File) => {
    const url = backend + "/post/uploadImage";

    const headers = {
      "Content-Type": "multipart/form-data",
      accessToken: accessToken,
    };

    try {
      const formData = new FormData();
      formData.append("img", blob);
      const result = await axios.post(url, formData, { headers });
      return result.data;
    } catch (error) {
      window.alert("사진 첨부에 실패했습니다. 사진 용량을 줄여 주십시오.");
    }
  };

  const onUploadImage = async (blob: Blob | File, callback: HookCallback) => {
    const imageUrl = await uploadImage(blob);
    callback(imageUrl, "첨부 이미지");

    document.querySelectorAll("img").forEach((img) => {
      img.style.maxWidth = "100%";
    });

    return false;
  };

  return (
    <div>
      <Editor
        previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"}
        height={window.innerWidth > 1000 ? "80vh" : "60vh"}
        initialEditType="wysiwyg"
        ref={editorRef}
        language="ko-KR"
        initialValue={initialValue}
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax]}
      />
    </div>
  );
};

export default TextEditor;
