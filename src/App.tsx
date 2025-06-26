import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col gap-8 px-4 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Hello React & Tailwind!</h1>
      <div className="flex flex-col gap-6">
        <button className="btn btn--active">Active</button>
        <button className="btn btn--focused">Focused</button>
        <button className="btn btn--default">Default</button>
        <button className="btn btn--hover">Hover</button>
      </div>
    </main>
  );
}

export default App;
