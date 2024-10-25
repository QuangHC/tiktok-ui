// import {useEffect, useState} from "react";
import classNames from "classnames/bind.js";
// import Tippy from '@tippyjs/react/headless';
//
// import images from "~/assets/images/index.jsx";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
                    // eslint-disable-next-line react/prop-types
                    to, href, round = false, disabled = false, text = false, primary = false,
                    // eslint-disable-next-line react/prop-types
                    outline = false, small = false, large = false, children, className, onClick,
                    // eslint-disable-next-line react/prop-types
                    leftIcon, rightIcon, ...rest
                }) {
    let Comp = 'button';
    const props = {
        onClick,
        rest
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        round,
        [className] : className,
    });

    return (
        <>
            <Comp className={classes} onClick={onClick} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

export default Button;