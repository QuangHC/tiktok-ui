import Header from '../components/Header/index.jsx';
import Sidebar from './Sidebar/index.jsx';

// eslint-disable-next-line react/prop-types
function DefaultLayout( {children} ) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;