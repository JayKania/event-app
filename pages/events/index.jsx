import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const Events = () => {
  const allEvents = getAllEvents();

  return (
    <h2>
      <EventList events={allEvents} />
    </h2>
  );
};

export default Events;
