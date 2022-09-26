import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = ({ events }) => {
  const listMarkup = events.map((event) => {
    return <EventItem key={event.id} eventData={event} />;
  });

  return <ul className={classes.list}>{listMarkup}</ul>;
};

export default EventList;
