import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Fragment, StrictMode} from "react";
import { publicRoutes } from "~/routes";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import SidebarWithHeader from "~/components/Layout/SidebarWithHeader";

const queryClient = new QueryClient();
function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Layout = route.layout === null ? Fragment : route.layout || SidebarWithHeader;

                                const Page = route.component;

                                return (
                                    <Route key={index} path={route.path} element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    } />
                                );
                            })}
                        </Routes>
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
        </StrictMode>
    );
}

export default App;
