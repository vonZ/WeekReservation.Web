import { FunctionComponent as FC } from 'react';
import { Container, Row } from 'react-grid-system';
import Button from '../Shared/Button';

interface ISlotsListingContainerProps {
  getAllSlots: any;
}

const SlotsListingContainer: FC<ISlotsListingContainerProps> = ({ getAllSlots = [] }) => {
  const getReservationsForSelection = (selection: string) => {
    const selectedMonth = getAllSlots.filter((item: any) => item.month === selection);
    console.log({ selectedMonth });
  };

  const uniqueMonths = Array.from(new Set(getAllSlots.map((item: any) => item.month)));

  return (
    <Container>
      <Row justify="center">
        {uniqueMonths.map((month: any, key: number) => (
          <Button key={key} onClick={() => getReservationsForSelection(month)}>
            {month}
          </Button>
        ))}
      </Row>
    </Container>
  );
};

export default SlotsListingContainer;
