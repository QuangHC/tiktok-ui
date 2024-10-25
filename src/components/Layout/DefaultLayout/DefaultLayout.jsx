import Header from '~/components/Layout/components/Header/index.jsx';
import Sidebar from '~/components/Layout/Sidebar';
import classNames from "classnames/bind.js";
import styles from "~/components/Layout/DefaultLayout/DefaultLayout.module.scss";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;