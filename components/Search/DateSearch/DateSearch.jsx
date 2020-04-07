import React, { useState, useEffect } from 'react';
import { sv } from 'date-fns/locale';
import { DateRangePicker } from 'react-nice-dates';
import { Container, Row, Col } from 'react-grid-system';
import { useDispatch } from '../../../context';
import { UI, variables } from '../../../utils';
import { Button } from '../../Shared';
import * as $ from './style';

const DateSearch = ({ searchSlot }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate && endDate) {
      const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
      const startDateISOTime = new Date(startDate - tzoffset).toISOString().slice(0, -1);
      const endDateDateISOTime = new Date(endDate - tzoffset).toISOString().slice(0, -1);

      dispatch({ type: 'setFromDate', fromDate: startDateISOTime });
      dispatch({ type: 'setEndDate', endDate: endDateDateISOTime });

      searchSlot({ variables: { fromDate: startDateISOTime, toDate: endDateDateISOTime } });
    }
  }, [startDate, endDate]);

  const dateRangePickerProps = {
    startDate,
    endDate,
    onStartDateChange: setStartDate,
    onEndDateChange: setEndDate,
    minimumDate: new Date(),
    format: 'dd MMMM yyyy',
    locale: sv,
  };

  const inputOnClick = () => UI.scrollElementIntoView(document.getElementById('DateSearch'));

  return (
    <$.DateSearchWrapper id="DateSearch">
      <DateRangePicker {...dateRangePickerProps}>
        {({ startDateInputProps, endDateInputProps }) => (
          <div style={{ padding: '10px 0px 10px 10px' }}>
            <$.StyledCalendarIcon />
            <$.StyledInput {...startDateInputProps} onClick={inputOnClick} placeholder="Från" />
            <$.StyledCalendarIcon />
            <$.StyledInput {...endDateInputProps} onClick={inputOnClick} placeholder="Till" />
          </div>
        )}
      </DateRangePicker>
      <div style={{ borderLeft: '1px solid #c3c3c3', margin: '10px 0px', padding: '0px 20px' }}>
        <$.StyledUserIcon />
        <$.StyledSelect>
          <option>Antal besökare</option>
          <option>1 besökare</option>
          <option>2 besökare</option>
          <option>3 besökare</option>
          <option>4 besökare</option>
        </$.StyledSelect>
      </div>
    </$.DateSearchWrapper>
  );
};

DateSearch.propTypes = {};

export default DateSearch;
