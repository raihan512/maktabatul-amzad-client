import React from "react";
import useCategories from "../../../../hooks/useCategories";

export default function CategoriesPage() {
  const [categories] = useCategories();
  console.log(categories);
  return <div></div>;
}
