import { FunctionComponent as FC } from 'react';
import { Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { Button } from '../Shared';

interface IMonthListProps {
  months: any;
  getSlotsForSelection(month?: string): void;
  selectedMonth: string;
}

interface IMonthItemProps {
  readonly currentmonth?: boolean;
}

const MonthItem = styled.span<IMonthItemProps>`
  padding: 3px 7px;
  color: inherit;
  opacity: ${props => (props.currentmonth ? '1' : '0.6')};
  border-bottom: ${props => (props.currentmonth ? '1px solid #464646' : 'none')};

  :hover {
    opacity: 1;
  }
`;

const MonthList: FC<IMonthListProps> = ({ months = [], getSlotsForSelection = () => {}, selectedMonth = '' }) => (
  <Container>
    <Row justify="center">
      {months.map((month: string, key: number) => (
        <Button key={key} onClick={() => getSlotsForSelection(month)}>
          <MonthItem currentmonth={selectedMonth === month}>{month}</MonthItem>
        </Button>
      ))}
      <Button onClick={() => getSlotsForSelection('')}>
        <MonthItem currentmonth={selectedMonth === ''}>Hela året</MonthItem>
      </Button>
    </Row>
  </Container>
);

export default MonthList;
