import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';
import { PaddingWrapper } from '../../Shared';
import { Calendar as CalendarIcon, Check as CheckIcon } from '../../../media/icons';

interface IResultTableItemProps {
  item?: any;
}

const FactsText = styled.span`
  font-weight: 400;
  text-align: right;
  padding: 0px 0px 0px 25px;
`;

const StyledTd = styled.td`
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
  vertical-align: top;
`;

const StyledSelectList = styled.select`
  border: 2px solid #5a5a5a;
  height: 100%;
  width: 100%;
  color: #5a5a5a;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 25px 10px 10px;
  background: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const StyledCalendarIcon = styled(props => <CalendarIcon {...props} />)`
  position: absolute;
`;

const StyledCheckIcon = styled(props => <CheckIcon {...props} />)`
  transition: opacity 0.6s;
  position: absolute;
`;

const StyledActionButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: #4f78b8;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`;

const getDateString = (datestring: string) => datestring.split('T')[0];

const ResultTableItem: FC<IResultTableItemProps> = ({ item = {} }) => (
  <>
    <StyledTd>
      <PaddingWrapper value="0px 0px 15px 0px">
        <h2>{item.alias}</h2>
      </PaddingWrapper>
      <StyledCalendarIcon />
      <FactsText>{`${getDateString(item.fromDate)} - ${getDateString(item.toDate)}`}</FactsText>
    </StyledTd>
    <StyledTd>
      <PaddingWrapper value="0px 0px 15px 0px">
        <StyledCheckIcon />
        <FactsText>Möjlighet att hyra utrustning</FactsText>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 15px 0px">
        <StyledCheckIcon />
        <FactsText>Möjlighet till guidning</FactsText>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 15px 0px">
        <StyledCheckIcon />
        <FactsText>Möjlighet att hyra overall</FactsText>
      </PaddingWrapper>
      <a href="#">Läs mer om tillvalen</a>
    </StyledTd>
    <StyledTd>
      <PaddingWrapper value="0px 0px 5px 0px">
        <h1>{`${item.price} SEK`}</h1>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 5px 0px">
        <p>Inklusive skatter och avgifter</p>
      </PaddingWrapper>
      <a href="#">Bokningsvillkor</a>
    </StyledTd>
    <StyledTd>
      <div style={{ height: '120px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <div>
          <StyledSelectList>
            <option>Antal besökare</option>
            <option>1 besökare</option>
            <option>2 besökare</option>
            <option>3 besökare</option>
            <option>4 besökare</option>
          </StyledSelectList>
        </div>
        <div>
          <StyledActionButton>Välj</StyledActionButton>
        </div>
      </div>
    </StyledTd>
  </>
);

export default ResultTableItem;
