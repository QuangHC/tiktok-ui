import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
// import {ChakraProvider} from '@chakra-ui/react'
// import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from '~/components/GlobalStyles';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<BrowserRouter>*/}
        <GlobalStyle>
            {/*<ChakraProvider>*/}
            <App/>
            {/*</ChakraProvider>*/}
        </GlobalStyle>
        {/*// </BrowserRouter>*/}
    </StrictMode>
)
