import {useQuery} from "@tanstack/react-query";
import {useDebounce} from 'use-debounce';
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSpinner} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Search.module.scss";
import {Wrapper as PopperWrapper} from "~/components/Popper/index.jsx";
import AccountItem from "~/components/AccountItem/index.jsx";
import {SearchIcon} from "~/components/Icons/index.jsx";
import {search} from "~/services/searchServices.jsx";


const cx = classNames.bind(styles);

export const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();
    const [debouncedText] = useDebounce(searchText, 500)

    const {isLoading, error, data: userData} = useQuery({
        queryKey: ["users", debouncedText],
        queryFn: () => {
            // Fetch method
            // return fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedText)}&type=less`)
            //     .then((response) => {
            //         if (!response.ok) throw new Error("User not found!");
            //         return response.json();
            //     })
            //     .then((result) => result.data);

            // Axios: XMLHttpRequest
            const fetchApi = async () => {
                return search(debouncedText);
            }
            return fetchApi();
        },
        enabled: !!debouncedText, // Chỉ gọi API khi có giá trị searchText
    });

    // Xử lý khi người dùng nhập vào input
    const onChangeText = (value) => {
        setSearchText(value);
        setShowResult(true); // Mở Popper
    };

    const handleClear = () => {
        setSearchText("");
        inputRef.current.focus();
        setShowResult(false); // Ẩn Popper
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <HeadlessTippy
                interactive
                visible={showResult && !!userData && userData.length > 0}
                render={(attrs) => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {Array.isArray(userData) &&
                                userData.map((item) => (
                                    <AccountItem key={item.id} data={item}/>
                                ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        value={searchText}
                        spellCheck={false}
                        onChange={(e) => onChangeText(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!isLoading && !!searchText && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    )}

                    {isLoading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner}/>}
                    <button className={cx("search-btn")}>
                        <SearchIcon/>
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
};
