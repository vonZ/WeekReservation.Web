import Router from 'next/router';
import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_SLOT_BY_DATESPAN } from '../../../graphql';
import { useGlobalState, useDispatch } from '../../../context/searchContext';
import { UI } from '../../../utils';

interface ISlotItem {
  alias?: string;
  capacity?: number;
}

const useSearch = () => {
  const [hasSearched, setSearched] = useState(false);
  const [searchSlot, { data: slotData }] = useLazyQuery(GET_SLOT_BY_DATESPAN);
  const dispatch = useDispatch();

  const selectedSlot: ISlotItem = useGlobalState('selectedSlot');
  const fromDate: string = useGlobalState('fromDate');
  const toDate: string = useGlobalState('toDate');

  const getProperty = (item: any) => item.split('=');
  const getFirstOrArray = (value = '') => (value.length === 1 ? value[0] : value);
  const getKeyValueObject = ([key = '', value = '']) => ({ key, value: getFirstOrArray(value) });

  useEffect(() => {
    // const hashValue = location.hash.substr(1);
    const searchValue = location.search.substr(1);
    const value = searchValue
      .split('&')
      .map(getProperty)
      .map(getKeyValueObject);

    const searchPayload = UI.convertArrayToObject(value, 'key');
    console.log(window.location.search);

    const { fromDate, toDate } = searchPayload;

    if (value.length > 1) {
      dispatch({ type: 'setFromDate', fromDate });
      dispatch({ type: 'setToDate', toDate });
      searchSlot({ variables: searchPayload });
    }
  }, []);

  useEffect(() => {
    if (slotData && slotData.getSlotByDateSpan) {
      // window.location.hash = `fromDate=${fromDate.split('T')[0]}&toDate=${toDate.split('T')[0]}`;
      const href = `/search-week?fromDate=${fromDate.split('T')[0]}&toDate=${toDate.split('T')[0]}`;
      const as = href;
      Router.push(href, as, { shallow: true });
      setSearched(true);
    }
  }, [slotData]);

  return { hasSearched, selectedSlot, slotData, searchSlot };
};

export default useSearch;
