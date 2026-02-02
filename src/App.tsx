import { useState } from "react";
import Record from "./pages/Record";

function App() {
  const [page, setPage] = useState("home");{/*homeはトップページを表す言葉。自由に変えていい*/}

  return (
    <div>
      {page === "home" && (
        <>
          <h1>運動記録アプリ</h1>

          <div>
            <button onClick={() => setPage("record")}>記録</button>
            <button>履歴</button>
          </div>
        </>
      )}

      {page === "record" && <Record onBack={() => setPage("home")}/>}{/*Recordに戻る処理を渡す*/}
    </div>
  );
}

export default App;
