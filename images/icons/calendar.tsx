import * as React from 'react';

interface ICalendarProps {}

const Calendar: React.FunctionComponent<ICalendarProps> = props => (
  <svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
    <path
      d="M11 1H9V0H8v1H4V0H3v1H1a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1zm0 10H1V5h10v6zM1 4V2h2v1h1V2h4v1h1V2h2v2H1z"
      fill="#000"
      fillRule="nonzero"
      fillOpacity={0.85}
    />
  </svg>
);

export default Calendar;
