import { useState } from "react";//入力内容を管理する

type Props = {
  onBack: () => void;
};//TypeScriptでReactコンポーネントのprops（受け取る引数）の型を定義している

export default function Record({ onBack }: Props) {
  const [exercise, setExercise] = useState("");//種目（文字）
  const [time, setTime] = useState(0);//時間（数字）

  return (
    <div>
      <h2>記録ページ</h2>

      <div>
        <label>種目:</label>
        <input 
          type="text" 
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>

      <div>
        <label>時間:</label>
        <input 
          type="number"
          value={time}  
          onChange={(e) => setTime(Number(e.target.value))}//value と onChange はセット
        />
      </div>

      <button
        onClick={() => {
          alert(`種目: ${exercise} / 時間: ${time}`);
        }}
          >保存</button>

      <button onClick={onBack}>戻る</button>
        
       <p>種目: {exercise}</p>
       <p>時間: {time}</p>

    </div>

  );
}
 