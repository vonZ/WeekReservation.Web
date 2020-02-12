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
  opacity: ${props => (props.currentmonth ? '1' : '0.6')};
  border-bottom: ${props => (props.currentmonth ? '1px solid #1060b6' : 'none')};
  color: #1060b6;
`;

const MonthList: FC<IMonthListProps> = ({ months = [], getSlotsForSelection = () => {}, selectedMonth }) => (
  <Container>
    <Row justify="center">
      {months.map((month: string, key: number) => (
        <Button key={key} onClick={() => getSlotsForSelection(month)}>
          <Month currentmonth={selectedMonth === month}>{month}</Month>
        </Button>
      ))}
      <Button onClick={() => getSlotsForSelection('')}>Visa alla</Button>
    </Row>
  </Container>
);

export default MonthList;
