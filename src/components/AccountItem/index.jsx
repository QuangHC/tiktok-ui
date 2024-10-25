import classNames from "classnames/bind.js";
import styles from "./AccountItem.module.scss"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
        <div className={cx('wrapper')} >
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14ceefb98611e8a10dd571e5590f94ef~c5_300x300.webp?lk3s=a5d48078&nonce=15020&refresh_token=6cca709e11d7b685d3271461f533b81f&x-expires=1729998000&x-signature=CKmkbqF7iL7tqxX%2BGuuJtuOEq1c%3D&shp=a5d48078&shcp=c1333099"  alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Abc123</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Dao Le Phuong Hoa</span>
            </div>
        </div>
        </>

    )
}

export default AccountItem;