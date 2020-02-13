import { FunctionComponent as FC } from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { Card } from '../Shared';
import { Calendar as CalendarIcon, Bed as BedIcon, Check as CheckIcon } from '../../images/icons';

interface ISlotItem {
  alias: string;
  occupationStatusCode: number;
  fromDate: string;
  toDate: string;
}

interface ISlotListItemProps {
  slotItem: ISlotItem;
  setOccupationStatusText: any;
  setOccupationColor: any;
}

interface IStatusTextProps {
  readonly highlight?: boolean;
}

interface IStatusCircle {
  readonly color?: string;
}

const StatusText = styled.span<IStatusTextProps>`
  font-weight: ${props => (props.highlight ? '700' : '300')};
  text-align: right;
`;

const StatusCircle = styled.div<IStatusCircle>`
  background-color: ${props => props.color};
  width: 15px;
  height: 15px;
  display: inline-flex;
  border-radius: 25px;
  vertical-align: text-bottom;
  margin: 0px 0px 0px 10px;
`;

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

const SlotListItem: FC<ISlotListItemProps> = ({
  slotItem: { alias = '', occupationStatusCode = 0, fromDate = '', toDate = '' } = {},
  setOccupationStatusText = () => {},
  setOccupationColor = () => {},
}) => (
  <div style={{ margin: '30px 0px' }}>
    <Card>
      <div>
        <Row justify="start" align="center">
          <Col md={9}>
            <h2>{alias}</h2>
          </Col>
          <AlignRightWrapper>
            <StatusText highlight={false}>{`Tillgänglighet: `}</StatusText>
            <StatusText highlight={true}>{setOccupationStatusText(occupationStatusCode - 1)}</StatusText>
            <StatusCircle color={setOccupationColor(occupationStatusCode - 1)} />
          </AlignRightWrapper>
        </Row>
        <Row style={{ paddingTop: 7 }} justify="start">
          <Col md={9}>
            <CalendarIcon />
            <FactsText>{`${fromDate} - ${toDate}`}</FactsText>
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
        {occupationStatusCode !== 1 && (
          <>
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
          </>
        )}
        <AlignRightWrapper>
          <Link href="/about">
            <LinkText>Reservera vecka</LinkText>
          </Link>
        </AlignRightWrapper>
      </Row>
    </Card>
  </div>
);

export default SlotListItem;
