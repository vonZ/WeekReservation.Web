import { FunctionComponent as FC, useState } from 'react';
import MonthList from './MonthList';
import SlotList from './SlotList';

interface ISlotsListingContainerProps {
  getAllSlots: any;
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
  month !== '' ? slotsArray.filter((item: ISlot) => item.month === month) : slotsArray;
const getUniqueMonths = (slotsArray: Array<ISlot>) => Array.from(new Set(slotsArray.map((item: ISlot) => item.month)));

const SlotsListingContainer: FC<ISlotsListingContainerProps> = ({ defaultMonth, getAllSlots = [] }) => {
  const [slots, setSlots] = useState(getSlotsByMonth(getAllSlots, defaultMonth));

  const getSlotsForSelection = (selection: string) => {
    const selectedSlot = getSlotsByMonth(getAllSlots, selection);
    setSlots(selectedSlot);
  };

  const monthListProps = {
    months: getUniqueMonths(getAllSlots),
    getSlotsForSelection,
    selectedMonth: slots.map((item: ISlot) => item.month)[0],
  };

  const slotListProps = {
    slots,
  };

  return (
    <>
      <div style={{ padding: '50px 0px', background: '#0c244a', color: 'white' }}>
        <h1 style={{ textAlign: 'center', paddingBottom: '50px', color: 'white', fontSize: '54px' }}>
          Hitta en vecka att besöka oss
        </h1>
        <MonthList {...monthListProps} />
      </div>
      <SlotList {...slotListProps} />
    </>
  );
};

export default SlotsListingContainer;
