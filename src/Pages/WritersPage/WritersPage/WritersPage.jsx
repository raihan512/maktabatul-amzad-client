import React from "react";
import useWriters from "../../../hooks/useWriters";
import { Link } from "react-router-dom";

export default function WritersPage() {
  const [writers, isLoading] = useWriters();
  console.log(writers);
  return (
    <section className="container">
      {/* Breadcumb */}
      <div className="flex justify-between items-center py-3 border-b-2">
        <p>All Writers</p>

        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/writers">Writers</Link>
          </li>
        </ul>
      </div>
      {/* Writers Container */}
      <div className="grid grid-cols-6 gap-10 my-10">
        {isLoading ? (
          <>Loading .....</>
        ) : (
          <>
            {writers.map((writer) => (
              <div key={writer._id} className="text-center">
                <Link to="">
                  <img
                    src={writer.image}
                    alt={writer.name[1]}
                    className="h-40 w-40 rounded-full"
                  />
                  <h4 className="text-lg font-medium capitalize truncate">
                    {writer.name[1]}
                  </h4>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
