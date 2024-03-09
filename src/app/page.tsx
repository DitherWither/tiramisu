"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Hallo</h1>
      <p>{count}</p>
      <Button onClick={() => { setCount(count + 1) }}>Click Me</Button>
    </main>
  );
}
