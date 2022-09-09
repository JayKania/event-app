import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <h2>
      <EventList events={featuredEvents} />
    </h2>
  );
};

export default Home;
