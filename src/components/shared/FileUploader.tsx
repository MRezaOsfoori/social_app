import React, { useState, useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [fileUrl, setFileUrl] = useState(mediaUrl);
  const [file, setFile] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col flex-center  bg-dark-3 rounded-xl cursor pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="" className=" file_uploader-img" />
          </div>
          <p>کلیک کن یا عکس را بردار</p>
        </>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="upload"
          />
          <h3 className="text-light-2 base-medium mb-2 mt-6 ">
            {" "}
            فایل را در اینجا یارگذاری کنید
          </h3>
          <p className="text-light-4 small-regular mb-6"> SVG, PNG,JPG</p>
          <Button className="shad-button_dark_4">از سیستم بردار</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
