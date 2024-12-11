import "./App.css";

export default function App() {
  return (
    <div className="flex h-screen flex-col">
      <div className="bg-red-500">header</div>
      <div className="grow bg-green-500">content</div>
      <div className="bg-blue-500">footer</div>
    </div>
  );
}
