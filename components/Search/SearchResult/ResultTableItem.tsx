import { FunctionComponent as FC, useState } from 'react';
import { PaddingWrapper } from '../../Shared';
import * as $ from './style';

interface IResultTableItemProps {
  item?: any;
  setSelectedSlot?: Function;
}

const getDateString = (datestring: string) => datestring.split('T')[0];

const ResultTableItem: FC<IResultTableItemProps> = ({ item = {}, setSelectedSlot = () => {} }) => {
  const [currentItem, setCurrentItem] = useState(item);

  const handleSelectChange = (e: any) => {
    const { value } = e.target;

    setCurrentItem((state: any) => ({
      ...state,
      capacity: value,
    }));
  };

  return (
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
            <$.StyledSelectList value={currentItem.capacity} onChange={handleSelectChange}>
              {Array.from({ length: item.capacity }, (_, index) => (
                <option key={index} value={index + 1}>{`${index + 1} besökare`}</option>
              ))}
            </$.StyledSelectList>
          </div>
          <div>
            <$.StyledActionButton onClick={() => setSelectedSlot(currentItem)}>Välj</$.StyledActionButton>
          </div>
        </div>
      </$.StyledTd>
    </>
  );
};

export default ResultTableItem;
