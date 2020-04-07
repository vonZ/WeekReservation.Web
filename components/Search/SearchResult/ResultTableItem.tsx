import { FunctionComponent as FC } from 'react';
import { PaddingWrapper } from '../../Shared';
import * as $ from './style';

interface IResultTableItemProps {
  item?: any;
  setSelectedSlot?: Function;
}

const getDateString = (datestring: string) => datestring.split('T')[0];

const ResultTableItem: FC<IResultTableItemProps> = ({ item = {}, setSelectedSlot = () => {} }) => (
  <>
    <$.StyledTd>
      <PaddingWrapper value="0px 0px 15px 0px">
        <h2>{item.alias}</h2>
      </PaddingWrapper>
      <$.StyledCalendarIcon />
      <$.FactsText>{`${getDateString(item.fromDate)} - ${getDateString(item.toDate)}`}</$.FactsText>
    </$.StyledTd>
    <$.StyledTd>
      <PaddingWrapper value="0px 0px 15px 0px">
        <$.StyledCheckIcon />
        <$.FactsText>Möjlighet att hyra utrustning</$.FactsText>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 15px 0px">
        <$.StyledCheckIcon />
        <$.FactsText>Möjlighet till guidning</$.FactsText>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 15px 0px">
        <$.StyledCheckIcon />
        <$.FactsText>Möjlighet att hyra overall</$.FactsText>
      </PaddingWrapper>
      <a href="#">Läs mer om tillvalen</a>
    </$.StyledTd>
    <$.StyledTd>
      <PaddingWrapper value="0px 0px 5px 0px">
        <h1>{`${item.price} SEK`}</h1>
      </PaddingWrapper>
      <PaddingWrapper value="0px 0px 5px 0px">
        <p>Inklusive skatter och avgifter</p>
      </PaddingWrapper>
      <a href="#">Bokningsvillkor</a>
    </$.StyledTd>
    <$.StyledTd>
      <div style={{ height: '120px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <div>
          <$.StyledSelectList>
            <option>Antal besökare</option>
            <option>1 besökare</option>
            <option>2 besökare</option>
            <option>3 besökare</option>
            <option>4 besökare</option>
          </$.StyledSelectList>
        </div>
        <div>
          <$.StyledActionButton onClick={() => setSelectedSlot(item)}>Välj</$.StyledActionButton>
        </div>
      </div>
    </$.StyledTd>
  </>
);

export default ResultTableItem;
