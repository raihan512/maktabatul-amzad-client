import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function useBooks() {
  const axiosPublic = useAxiosPublic();
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/books");
      return res.data;
    },
  });
  return [books, isLoading];
}
