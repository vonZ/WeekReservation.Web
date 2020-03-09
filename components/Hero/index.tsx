import { FunctionComponent as FC } from 'react';
import BackgroundImage from '../Shared/BackgroundImage';
import landscapeImage from '../../media/images/landscape.jpg';

interface IHeroProps {
  hasSearched?: boolean;
}

const Hero: FC<IHeroProps> = ({ hasSearched = false }) => (
  <div style={{ position: 'relative' }}>
    <BackgroundImage bgImageUrl={landscapeImage} collapse={hasSearched} />
    <div style={{ position: 'absolute', top: '50%', marginTop: '-28px', width: '100%', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: 'white' }}>När vill du resa hit?</h1>
      <p style={{ fontSize: '1.4rem', color: 'white' }}>Sök efter ett datum</p>
    </div>
  </div>
);

export default Hero;
