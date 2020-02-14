import { FunctionComponent as FC } from 'react';
import { Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { Button } from '../Shared';

interface IMonthListProps {
  months: any;
  getSlotsForSelection(month?: string): void;
  selectedMonth: string;
}

interface IMonthProps {
  readonly currentmonth?: boolean;
}

const Month = styled.span<IMonthProps>`
  padding: 3px 7px;
  color: inherit;
  opacity: ${props => (props.currentmonth ? '1' : '0.6')};
  border-bottom: ${props => (props.currentmonth ? '1px solid #464646' : 'none')};

  :hover {
    opacity: 1;
    border-bottom: 1px solid #0c244a;
  }
`;

const MonthList: FC<IMonthListProps> = ({ months = [], getSlotsForSelection = () => {}, selectedMonth }) => (
  <Container>
    <Row justify="center">
      {months.map((month: string, key: number) => (
        <Button key={key} onClick={() => getSlotsForSelection(month)}>
          <Month currentmonth={selectedMonth === month}>{month}</Month>
        </Button>
      ))}
      <Button extendedStyle={{ color: '#00345f', opacity: '0.6' }} onClick={() => getSlotsForSelection('')}>
        Visa alla
      </Button>
    </Row>
  </Container>
);

export default MonthList;
