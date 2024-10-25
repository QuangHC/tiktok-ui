// eslint-disable-next-line react/prop-types
import Button from "~/components/Button/index.jsx";
import classNames from "classnames/bind.js";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {
    const classes = cx('menu-item', ...(data.class ?? []));
    return (
        <>
            <div>
                <Button className={classes} leftIcon={data.icon} to={data.to}
                        onClick={onClick}>{data.title}</Button>
            </div>
        </>
    )
}


export default MenuItem;