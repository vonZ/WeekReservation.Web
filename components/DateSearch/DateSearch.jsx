import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isSameDay } from 'date-fns';
import { sv } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import { Container, Row, Col } from 'react-grid-system';

const DateSearch = props => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      format="dd MMM yyyy"
      locale={sv}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
          <Row justify="center">
            <Col xs={3}>
              <input
                className={'input' + (focus === START_DATE ? ' -focused' : '')}
                {...startDateInputProps}
                placeholder="Start date"
              />
              <span className="date-range_arrow" />
            </Col>
            <Col xs={3}>
              <input
                className={'input' + (focus === END_DATE ? ' -focused' : '')}
                {...endDateInputProps}
                placeholder="End date"
              />
            </Col>
          </Row>
        </div>
      )}
    </DateRangePicker>
  );
};

DateSearch.propTypes = {};

export default DateSearch;
