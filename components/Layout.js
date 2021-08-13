import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}

export default Layout
