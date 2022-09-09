import { useRouter } from "next/router";
import React from "react";

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router.query);
  return <h2>Filtered Events</h2>;
};

export default FilteredEvents;
