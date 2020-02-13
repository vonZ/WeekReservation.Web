import { FunctionComponent as FC } from 'react';
import { Container } from 'react-grid-system';
import SlotListItem from './SlotListItem';

interface ISlot {
  alias: string;
  occupationStatusCode: number;
  fromDate: string;
  toDate: string;
}

interface ISlotListProps {
  slots: Array<ISlot>;
}

const setOccupationStatusText = (code: number = 0) => ['fullbokat', 'fåtal platser kvar', 'plats finns'][code];
const setOccupationColor = (code: number = 0) => ['#E02020', '#F7B500', '#12B320'][code];

const SlotList: FC<ISlotListProps> = ({ slots = [] }) => (
  <Container>
    {slots.map((item: ISlot, key: number) => (
      <SlotListItem
        key={key}
        slotItem={item}
        setOccupationStatusText={setOccupationStatusText}
        setOccupationColor={setOccupationColor}
      />
    ))}
  </Container>
);

export default SlotList;
