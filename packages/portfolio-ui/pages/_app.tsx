import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '../theme';
import '../global.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
