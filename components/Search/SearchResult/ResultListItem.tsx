import { FunctionComponent as FC } from 'react';
import { motion } from 'framer-motion';
import { LightCardItem } from '../../Shared';

interface IResultItem {
  alias: string;
  fromDate: string;
  toDate: string;
}

interface IResultListItemProps {
  slotItem: IResultItem;
  variants?: any;
}

const SearchResultListItem: FC<IResultListItemProps> = props => (
  <motion.div variants={props.variants} style={{ margin: '30px 0px' }}>
    <LightCardItem {...props} />
  </motion.div>
);

export default SearchResultListItem;
