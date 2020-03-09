import { FunctionComponent as FC } from 'react';
import { Container } from 'react-grid-system';
import { motion } from 'framer-motion';
import ResultListItem from './ResultListItem';

interface IResult {
  alias: string;
  fromDate: string;
  toDate: string;
}

interface IResultProps {
  searchResult: Array<IResult>;
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

const resultItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ResultList: FC<IResultProps> = ({ searchResult = [] }) => (
  <Container>
    <motion.div variants={container} initial="hidden" animate="visible">
      {searchResult.map((item: IResult, key: number) => (
        <ResultListItem key={key} variants={resultItemVariant} slotItem={item} />
      ))}
    </motion.div>
  </Container>
);

export default ResultList;
