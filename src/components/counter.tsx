"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
    </>
  );
}
