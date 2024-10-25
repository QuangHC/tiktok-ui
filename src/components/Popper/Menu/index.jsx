import classNames from "classnames/bind.js";
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "../index.jsx";

import styles from "./Menu.module.scss";
import MenuItem from "~/components/Popper/Menu/MenuItem.jsx";
import Header from "~/components/Popper/Menu/Header.jsx";
import {useEffect, useState} from "react";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function Menu({children, items = [], onChange = () => {}}) {
    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];

    useEffect(() => {
        setHistory([{data: items}]);
    }, [items]);

    const renderItems = () => {
        return (
            current.data.map((item, index) => {
                const isParent = !!item.children;

                return <MenuItem key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children]);
                    } else {
                        onChange(item)
                    }
                }}
                />
            })
        )
    }

    return (
        <>
            <Tippy
                interactive
                placement="bottom-start"
                // visible
                offset={[10, 8]}
                delay={[0, 300]}
                onHide={() => {
                    setHistory(prev => prev.slice(0, 1));
                }}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 &&
                                <Header onBack={() => setHistory(prev => prev.slice(0, prev.length - 1))}
                                        title="Language"/>}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>

        </>
    )
}

export default Menu;