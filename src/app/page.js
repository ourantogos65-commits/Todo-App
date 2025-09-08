"use client";

export default function home() {
  const [number, setNumber] = useState();
  return (
    <div>
      <p>{number}</p>
      <button>hello</button>
    </div>
  );
}
