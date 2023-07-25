import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DownloadSingleFile = () => {
  const { fileId } = useParams();

  useEffect(() => {
    // fetchfile function here
    console.log(fileId);
  }, []);

  return (
    <div className="mx-auto">
      <div className="my-[100px] mx-5 rounded-xl inline-block p-5 max-w-md border-2 border-gray-300">
        <h1 className="font-bold">Download File</h1>
        <br />
        <p>
          Someone shared with you the file listed below. Click on the
          &quot;Download&quot; button to start downloading it.
        </p>
        <br />
        <div className="rounded-xl border-4 border-[#ccc] border-dashed text-left p-5">
          <img
            className="h-12 mr-3"
            src="https://mrriky54hd.altervista.org/cdn/assets/img/file_icon.svg"
          />
          <div className="inline-block text-gray-500">
            <p>FILE NAME: FILE_NAME.txt</p>
            <p>FILE SIZE: 3GB</p>
            <p>OTHER THING...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSingleFile;
