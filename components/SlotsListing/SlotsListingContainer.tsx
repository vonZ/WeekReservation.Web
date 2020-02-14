import { FunctionComponent as FC, useState, useEffect } from 'react';
import MonthList from './MonthList';
import SlotList from './SlotList';

interface ISlotsListingContainerProps {
  slotNodes: Array<ISlot>;
  defaultMonth: string;
}

interface ISlot {
  alias: string;
  month: string;
  occupationStatusCode: number;
  getSlotsForSelection(month?: string): void;
  selectedMonth: string;
  fromDate: string;
  toDate: string;
}

const getSlotsByMonth = (slotsArray: Array<ISlot>, month: string) =>
  month ? slotsArray.filter((item: ISlot) => item.month === month) : slotsArray;
const getUniqueMonths = (slotsArray: Array<ISlot>) => Array.from(new Set(slotsArray.map((item: ISlot) => item.month)));

const SlotsListingContainer: FC<ISlotsListingContainerProps> = ({ defaultMonth, slotNodes = [] }) => {
  const [slots, setSlots] = useState(getSlotsByMonth(slotNodes, defaultMonth));
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  useEffect(() => {
    const showAllSlots = slots.length === slotNodes.length;
    const month = !showAllSlots ? slots.map((item: ISlot) => item.month)[0] : '';
    setSelectedMonth(month);
  }, [slots]);

  const getSlotsForSelection = (selection: string) => {
    const selectedSlot = getSlotsByMonth(slotNodes, selection);
    setSlots(selectedSlot);
  };

  const monthListProps = {
    months: getUniqueMonths(slotNodes),
    getSlotsForSelection,
    selectedMonth,
  };

  const slotListProps = {
    slots,
  };

  return (
    <>
      <div style={{ padding: '80px 0px 20px 0px', color: '#00345f' }}>
        <MonthList {...monthListProps} />
      </div>
      <SlotList {...slotListProps} />
    </>
  );
};

export default SlotsListingContainer;
