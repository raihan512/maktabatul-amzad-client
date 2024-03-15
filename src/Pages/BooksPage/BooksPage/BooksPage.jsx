import React from "react";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const [books] = useBooks();

  return (
    <section className="container">
      {/* Filter area */}
      <div className="py-5">
        <div className="flex justify-between">
          <p>Books</p>
          <div className="flex space-x-5">
            <select name="" id="" className="border px-3">
              <option value="">20</option>
              <option value="">40</option>
              <option value="">80</option>
              <option value="">100</option>
            </select>

            <select name="" id="" className="border px-3">
              <option value="">Default</option>
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        {/* Books Container */}
        <div className="col-span-10">
          <div className="grid grid-cols-7 gap-5">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
        {/* Related Books */}
        <div className="col-span-2"></div>
      </div>
    </section>
  );
}
