// import Header from '~/components/Layout/components/Header';
import {useEffect, useState} from "react";
import classNames from "classnames/bind.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleXmark, faCloudUpload, faEarthAsia,
    faEllipsisVertical, faEnvelope, faGear, faHouseLaptop, faKeyboard,
    faMagnifyingGlass,
    faSignIn, faSignOut,
    faSpinner, faUser
} from "@fortawesome/free-solid-svg-icons";
import {faCircleQuestion, faMoon} from "@fortawesome/free-regular-svg-icons";
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from "~/assets/images/index.js";
import Button from "~/components/Button/index.jsx";
import styles from "./Header.module.scss";
import {Wrapper as PopperWrapper} from "~/components/Popper/index.jsx";
import AccountItem from "~/components/AccountItem/index.jsx";
import Menu from "~/components/Popper/Menu";
import {faBitcoin} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouseLaptop}/>,
        title: "Creator tools",
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean'
                },

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feedback and helps",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faMoon}/>,
        title: "Dark mode",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: "Keyboard shortcuts",
    },
]
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}/>,
        title: "View profile",
        to: "/profile",
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin}/>,
        title: "Get Coins",
        to: "/profile",
    },
    {
        icon: <FontAwesomeIcon icon={faGear}/>,
        title: "Settings",
        to: "/settings",
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}/>,
        title: "Log out",
        // to: "/log out",
        type: "log out",
        // separate: true,
        class: [
            "separate",
        ]
    }
]

function Header() {
    // const [menuItem, setMenuItem] = useState(MENU_ITEMS);
    const [currentUser, setCurrentUser] = useState(false);
    // const [searchResult, setSearchResult ] = useState(false);
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0)
    // }, [])

    const handleOnChange = (item) => {
        console.log(item);
        switch (item.type) {
            case 'language':
                alert('Change language');
                break;
            case 'log out':
                setCurrentUser(false);
                break;
            default:
                alert('do')
        }
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok"/>

                <HeadlessTippy
                    interactive
                    // visible={searchResult.length > 0}
                    // visible={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>

                                {/*{searchResult}*/}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content={"Upload"} placement={"bottom"}>
                                <FontAwesomeIcon className={cx('action-btn')} icon={faCloudUpload}/>
                            </Tippy>
                            <Tippy delay={[0, 200]} content={"Notification"} placement={"bottom"}>
                                <FontAwesomeIcon className={cx('action-btn')} icon={faEnvelope}/>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}/>}
                                    onClick={() => {
                                        setCurrentUser(true);
                                        // setMenuItem(userMenu);
                                    }}>Log in</Button>
                        </>
                    )}
                    <Menu items={(currentUser) ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
                        <button className={cx('more-act')}>
                            {currentUser ? (
                                <>
                                    <img
                                        className={cx('user-avatar')}
                                        src={'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14ceefb98611e8a10dd571e5590f94ef~c5_300x300.webp?lk3s=a5d48078&nonce=15020&refresh_token=6cca709e11d7b685d3271461f533b81f&x-expires=1729998000&x-signature=CKmkbqF7iL7tqxX%2BGuuJtuOEq1c%3D&shp=a5d48078&shcp=c1333099'}
                                        alt={'avatar'}/>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                                </>
                            )}
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header;