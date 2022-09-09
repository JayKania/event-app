import { useRouter } from "next/router";
import React from "react";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.query);
  return <h2>Single Event</h2>;
};

export default SingleEvent;
