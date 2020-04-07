import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_SLOT_BY_DATESPAN } from '../../../graphql';
import { useGlobalState } from '../../../context';

interface ISlotItem {
  alias?: string;
}

const useSearch = () => {
  const [hasSearched, setSearched] = useState(false);
  const [searchSlot, { data: slotData }] = useLazyQuery(GET_SLOT_BY_DATESPAN);

  const selectedSlot: ISlotItem = useGlobalState('selectedSlot');
  const fromDate: string = useGlobalState('fromDate');
  const endDate: string = useGlobalState('endDate');

  useEffect(() => {
    if (slotData && slotData.getSlotByDateSpan) {
      console.log(slotData.getSlotByDateSpan);
      window.location.hash = `fromDate=${fromDate.split('T')[0]}&endDate=${endDate.split('T')[0]}`;
      setSearched(true);
    }
  }, [slotData]);

  return { hasSearched, selectedSlot, slotData, searchSlot };
};

export default useSearch;
