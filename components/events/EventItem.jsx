import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import RightArrowIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

const EventItem = ({ eventData }) => {
  const { id, title, description, location, date, image, isFeatured } =
    eventData;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        {/* <div></div> */}
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{formattedDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
