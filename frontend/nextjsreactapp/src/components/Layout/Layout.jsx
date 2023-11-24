import NavBar from "components/Navbar/NavBar"


export default function Layout({ children }) {

    return (
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    )
}