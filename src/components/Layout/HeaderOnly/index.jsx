// import Header from '~/components/Layout/components/Header';

// eslint-disable-next-line react/prop-types
function HeaderOnly({children}) {
    return (
        <div>
            <div>Header Only</div>
            {children}
        </div>
    )
}

export default HeaderOnly;