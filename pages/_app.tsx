import { AppProps } from 'next/app';
import { StateProvider, initialState } from '../lib/state';
import reducer from '../reducers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
