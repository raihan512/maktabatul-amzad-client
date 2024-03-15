import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function useWriters() {
  const axiosPublic = useAxiosPublic();
  const { data: writers = [] } = useQuery({
    queryKey: ["writers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/writers");
      return res.data;
    },
  });
  return [writers];
}
