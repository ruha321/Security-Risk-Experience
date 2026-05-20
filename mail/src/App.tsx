import { useState } from "react";
import "./App.css";

import phishingMails from "./data/phishingMails";

function App() {

  const [mailIndex, setMailIndex] = useState(0);

  const mail = phishingMails[mailIndex];

  return (
    <div className="app">

      <div className="mail-window">

        <div className="mail-toolbar">
          <button>←</button>
          <button>アーカイブ</button>
          <button>迷惑メール</button>
          <button>削除</button>
        </div>

        <div className="mail-header">

          <h1>{mail.subject}</h1>

          <div className="sender-area">

            <div className="avatar">
              {mail.senderName.charAt(0)}
            </div>

            <div>

              <div className="sender-name">
                {mail.senderName}
              </div>

              <div className="sender-email">
                {mail.senderEmail}
              </div>

            </div>

          </div>

        </div>

        <div className="mail-body">

          {mail.body.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <a
            href={mail.linkUrl}
            className="mail-link"
            onClick={(event) => {
              event.preventDefault();

              alert("⚠ フィッシングサイトです！");
            }}
          >
            {mail.linkText}
          </a>

        </div>

        <div className="next-area">

          <button
            onClick={() => {
              setMailIndex(
                (mailIndex + 1) % phishingMails.length
              );
            }}
          >
            次のメールへ
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;