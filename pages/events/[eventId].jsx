import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../dummy-data";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.query.eventId);
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  console.log(event);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default SingleEvent;
