import classNames from 'classnames'
import styles from './Image.module.scss'
import images from '~/assets/images'
import {useState} from "react";

// const cx = classNames.bind(styles)

// eslint-disable-next-line react/prop-types
export const Image = ({ src, alt, className, fallBack : flBack = images.noImg, ...props }) => {
    const [fallBack, setFallBack] = useState('');

    const onHandleError = () => {
        setFallBack(flBack);
    }
    return (
        <img className={classNames(styles.wrapper, className)} src={fallBack || src} alt={alt} {...props} onError={onHandleError} />
    )
}
