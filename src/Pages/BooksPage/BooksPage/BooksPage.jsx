import React from "react";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";

export default function BooksPage() {
  const [books, isLoading] = useBooks();

  return (
    <section className="container">
      {/* Filter area */}
      <div className="flex justify-between py-5">
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
      {/* Books Container */}
      <div className="grid grid-cols-7 gap-5">
        {isLoading ? (
          <>.............</>
        ) : (
          <>
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
