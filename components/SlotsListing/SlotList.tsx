import { FunctionComponent as FC } from 'react';
import { Container } from 'react-grid-system';
import { motion } from 'framer-motion';
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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const slotItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const setOccupationStatusText = (code: number = 0) => ['fullbokat', 'fåtal platser kvar', 'plats finns'][code];
const setOccupationColor = (code: number = 0) => ['#E02020', '#F7B500', '#12B320'][code];

const SlotList: FC<ISlotListProps> = ({ slots = [] }) => (
  <Container>
    <motion.div variants={container} initial="hidden" animate="visible">
      {slots.map((item: ISlot, key: number) => (
        <SlotListItem
          key={key}
          variants={slotItemVariant}
          slotItem={item}
          setOccupationStatusText={setOccupationStatusText}
          setOccupationColor={setOccupationColor}
        />
      ))}
    </motion.div>
  </Container>
);

export default SlotList;
