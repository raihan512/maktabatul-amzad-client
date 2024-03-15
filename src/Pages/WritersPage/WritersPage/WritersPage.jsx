import React from "react";
import useWriters from "../../../hooks/useWriters";

export default function WritersPage() {
  const [writers] = useWriters();
  console.log(writers);
  return <div></div>;
}
