import classNames from "classnames/bind.js";
import {Link} from "react-router-dom";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Image} from "~/components/Image/index.jsx";
import styles from "./AccountItem.module.scss"


const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function AccountItem({data}) {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <Link to={`/${data.nickname}`} className={cx('wrapper')}>
                {/* eslint-disable-next-line react/prop-types */}
                <Image className={cx('avatar')} src={data.avatar} alt="Img"/>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        {/* eslint-disable-next-line react/prop-types */}
                        <span>{data.nickname}</span>
                        {/* eslint-disable-next-line react/prop-types */}
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                    </h4>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className={cx('username')}>{data.full_name}</span>
                </div>
            </Link>
        </>

    )
}

export default AccountItem;