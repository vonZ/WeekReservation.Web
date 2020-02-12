import { FunctionComponent as FC } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { Card } from '../Shared';

interface ISlot {
  alias: string;
  occupationStatusCode: number;
}

interface ISlotListProps {
  slots: Array<ISlot>;
}

interface IParagraphProps {
  readonly highlight?: boolean;
}

interface IStatusCircle {
  readonly color?: string;
}

const Paragraph = styled.span<IParagraphProps>`
  font-size: 0.8rem;
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

const setOccupationStatusText = (code: number = 0) => ['fullbokat', 'fåtal platser kvar', 'plats finns'][code];
const setOccupationColor = (code: number = 0) => ['#E02020', '#F7B500', '#12B320'][code];

const SlotList: FC<ISlotListProps> = ({ slots = [] }) => (
  <Container>
    {slots.map((item: ISlot, key: number) => (
      <div key={key} style={{ margin: '30px 0px' }}>
        <Card>
          <Row justify="start" align="center">
            <Col md={9}>
              <h2>{item?.alias}</h2>
            </Col>
            <Col>
              <Paragraph highlight={false}>{`Tillgänglighet: `}</Paragraph>
              <Paragraph highlight={true}>{setOccupationStatusText(item?.occupationStatusCode - 1)}</Paragraph>
              <StatusCircle color={setOccupationColor(item?.occupationStatusCode - 1)} />
            </Col>
          </Row>
        </Card>
      </div>
    ))}
  </Container>
);

export default SlotList;
