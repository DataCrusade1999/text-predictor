import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Layout from '../layouts/Layout'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Layout title='Predictive Text'>
                <Component {...pageProps} />
            </Layout>

        </ChakraProvider >
    )
}

export default MyApp
