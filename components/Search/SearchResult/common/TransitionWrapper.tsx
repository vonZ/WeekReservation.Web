import { FunctionComponent as FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  children: ReactNode;
}

const tbodyVariant = {
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

const trVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const TransitionTbodyWrapper: FC<IProps> = ({ children }) => (
  <motion.tbody variants={tbodyVariant} initial="hidden" animate="visible">
    {children}
  </motion.tbody>
);

export const TransitionTrWrapper: FC<IProps> = ({ children }) => (
  <motion.tr variants={trVariant} style={{ margin: '30px 0px' }}>
    {children}
  </motion.tr>
);
