import "./dashboard.css";
import { FileUploader } from "react-drag-drop-files";

const Dashboard = () => {

  const baseURL = "http://localhost:8000";
  const uploadURL = `${baseURL}/api/files`;
  const emailURL = `${baseURL}/api/files/send`;

  const maxAllowedSize = 100 * 1024 * 1024; //100mb

  const handleChange = (file: File) => {
    console.log(file);
  };
  
  return (
    <>
      <img src="../../assets/logo.png" alt="Inshare logo" className="logo" />
      <section className="upload-container">
        <form action="">
          <FileUploader handleChange={handleChange}>
            <div className="drop-zone">
              <div className="icon-container">
                <img
                  src="file.svg"
                  draggable="false"
                  className="center"
                  alt="File Icon"
                />
                <img
                  src="file.svg"
                  draggable="false"
                  className="left"
                  alt="File Icon"
                />
                <img
                  src="file.svg"
                  draggable="false"
                  className="right"
                  alt="File Icon"
                />
              </div>
              <input type="file" />
              <div className="title">
                Drop your Files here or, <span id="browseBtn">browse</span>
              </div>
            </div>
          </FileUploader>
        </form>
        <div className="progress-container">
          <div className="bg-progress"></div>

          <div className="inner-container">
            <div className="status">Uploading...</div>
            <div className="percent-container">
              <span className="percentage" id="progressPercent">
                0
              </span>
              %
            </div>
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="sharing-container">
          <p className="expire">Link expires in 24 hrs</p>

          <div className="input-container">
            <input type="text" id="fileURL" readOnly />
            <img
              src="../../assets/copy-icon.svg"
              id="copyURLBtn"
              alt="copy to clipboard icon"
            />
          </div>

          <p className="email-info">Or Send via Email</p>
          <div className="email-container">
            <form id="emailForm">
              <div className="filed">
                <label htmlFor="fromEmail">Your email</label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  name="from-email"
                  id="fromEmail"
                />
              </div>

              <div className="filed">
                <label htmlFor="toEmail">Receiver&apos;s email</label>
                <input
                  type="email"
                  required
                  autoComplete="receiver"
                  name="to-email"
                  id="toEmail"
                />
              </div>
              <div className="send-btn-container">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="image-vector"></div>
      <div className={`toast ${false && "show"}`}>Sample message</div>
    </>
  );
};

export default Dashboard;
