import React from 'react';

export default function AlertDuration({
  startDateTimestamp,
  endDateTimestamp,
}) {
  const eventStartDate = new Date(startDateTimestamp * 1000);
  const eventEndDate = new Date(endDateTimestamp * 1000);

  const dateLocaleOptions = {
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <p>
      {`${'From'} `}
      <time dateTime={eventStartDate.toISOString()}>
        {eventStartDate.toLocaleDateString(
          navigator.language,
          dateLocaleOptions
        )}
      </time>
      {` ${'to'} `}
      <time dateTime={eventEndDate.toISOString()}>
        {eventEndDate.toLocaleDateString(navigator.language, dateLocaleOptions)}
      </time>
    </p>
  );
}
