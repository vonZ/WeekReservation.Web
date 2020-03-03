import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isSameDay } from 'date-fns';
import { sv } from 'date-fns/locale';
import { DateRangePicker } from 'react-nice-dates';
import { Container, Row, Col } from 'react-grid-system';

const StyledInput = styled.input`
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  border: none;
  font-size: 1rem;
  padding: 10px 30px;
  cursor: pointer;
  background: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const DateSearch = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dateRangePickerProps = {
    startDate,
    endDate,
    onStartDateChange: setStartDate,
    onEndDateChange: setEndDate,
    minimumDate: new Date(),
    format: 'dd MMMM yyyy',
    locale: sv,
  };

  return (
    <DateRangePicker {...dateRangePickerProps}>
      {({ startDateInputProps, endDateInputProps }) => (
        <div style={{ padding: '10px' }}>
          <StyledInput {...startDateInputProps} placeholder="Från" />
          <StyledInput {...endDateInputProps} placeholder="Till" />
          <div style={{ display: 'inline-flex', borderLeft: '1px solid #c3c3c3' }}>
            <StyledSelect>
              <option>Antal besökare</option>
              <option>1 besökare</option>
              <option>2 besökare</option>
              <option>3 besökare</option>
              <option>4 besökare</option>
            </StyledSelect>
          </div>
        </div>
      )}
    </DateRangePicker>
  );
};

DateSearch.propTypes = {};

export default DateSearch;
