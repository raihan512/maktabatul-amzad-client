import React from "react";
import useCategories from "../../../../hooks/useCategories";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  const [categories, isLoading] = useCategories();
  return (
    <section className="container">
      {/* Breadcumb */}
      <div className="flex justify-between items-center py-3 border-b-2">
        <p>All Categories</p>

        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      {/* Writers Container */}
      <div className="flex flex-wrap space-x-2 mt-10">
        {isLoading ? (
          <>Loading....</>
        ) : (
          <>
            {categories.map((category) => (
              <p
                key={category._id}
                className="bg-gray-400 py-1 px-2.5 mb-3 rounded-sm"
              >
                <Link to="">{category.name[1]}</Link>
              </p>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
