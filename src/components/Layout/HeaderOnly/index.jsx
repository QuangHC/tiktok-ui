// import Header from '~/components/Layout/components/Header';

function HeaderOnly({children}) {
    return (
        <div>
            <div>Header Only</div>
            {children}
        </div>
    )
}

export default HeaderOnly;