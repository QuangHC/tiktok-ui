import classNames from "classnames/bind.js";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function Wrapper({children, className}) {
    return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;