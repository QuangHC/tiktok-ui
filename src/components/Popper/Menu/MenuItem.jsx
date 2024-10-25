import Button from "~/components/Button/index.jsx";
import classNames from "classnames/bind.js";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function MenuItem({data, onClick}) {
    // eslint-disable-next-line react/prop-types
    const classes = cx('menu-item', ...(data.class ?? []));
    return (
        <>
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
            </div>
        </>
    )
}


export default MenuItem;