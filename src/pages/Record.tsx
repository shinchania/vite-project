type Props = {
  onBack: () => void;
};//TypeScriptでReactコンポーネントのprops（受け取る引数）の型を定義している

export default function Record({ onBack }: Props) {
  return (
    <div>
      <h2>記録ページ</h2>

      <div>
        <label>種目:</label>
        <input type="text"/>
      </div>

      <div>
        <label>時間:</label>
        <input type="number"/>
      </div>

      <button>保存</button>

      <button onClick={onBack}>戻る</button>
    </div>
  );
}
 