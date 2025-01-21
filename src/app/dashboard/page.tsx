"use client";

import World from "@/components/world";
import { useState } from "react";

export default function Dashboard() {
  const [bobi, useBobi] = useState(false);
  return (
    <>
      <h1>Dashboard</h1>
      <World val={bobi} />
      <button onClick={() => useBobi(!bobi)}>Choose bobi</button>
    </>
  );
}
