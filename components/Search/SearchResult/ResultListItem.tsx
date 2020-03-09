import { FunctionComponent as FC } from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../../Shared';
import { Calendar as CalendarIcon, Bed as BedIcon, Check as CheckIcon } from '../../../media/icons';

interface IResultItem {
  alias: string;
  fromDate: string;
  toDate: string;
}

interface IResultListItemProps {
  slotItem: IResultItem;
  variants?: any;
}

const FactsText = styled.span`
  font-weight: 400;
  text-align: right;
  padding: 0px 0px 0px 10px;
`;

const LinkText = styled.a`
  -webkit-appearance: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.5s;
  background: #f8f5f5;
  border: 1px solid #e2e2e2;
  color: #4a4a4a;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 3px;

  :focus {
    outline: none;
  }

  :hover {
    background: #d6d4d4;
  }
`;

const AlignRightWrapper = styled.div`
  margin-left: auto;
`;

const getDateString = (datestring: string) => datestring.split('T')[0];

const SearchResultListItem: FC<IResultListItemProps> = ({
  slotItem: { alias = '', fromDate = '', toDate = '' } = {},
  variants = {},
}) => (
  <motion.div variants={variants} style={{ margin: '30px 0px' }}>
    <Card>
      <div>
        <Row justify="start" align="center">
          <Col md={9}>
            <h2>{alias}</h2>
          </Col>
        </Row>
        <Row style={{ paddingTop: 7 }} justify="start">
          <Col md={9}>
            <CalendarIcon />
            <FactsText>{`${getDateString(fromDate)} - ${getDateString(toDate)}`}</FactsText>
          </Col>
        </Row>
        <Row style={{ paddingTop: 7 }} justify="start">
          <Col md={9}>
            <BedIcon />
            <FactsText>Två-bäddsrum med badrum</FactsText>
          </Col>
        </Row>
      </div>
      <Row justify="inherit" align="center">
        <Col xs={3}>
          <CheckIcon />
          <FactsText>Möjlighet att hyra utrustning</FactsText>
        </Col>
        <Col xs={3}>
          <CheckIcon />
          <FactsText>Möjlighet till guidning</FactsText>
        </Col>
        <Col xs={3}>
          <CheckIcon />
          <FactsText>Möjlighet att hyra overall</FactsText>
        </Col>
        <AlignRightWrapper>
          <Link href="/about">
            <LinkText>{`Boka ${alias}`}</LinkText>
          </Link>
        </AlignRightWrapper>
      </Row>
    </Card>
  </motion.div>
);

export default SearchResultListItem;
