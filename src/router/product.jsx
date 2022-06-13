import { Link, Outlet } from "react-router-dom"

export const Product = () => {
    return (
        <>
        <p> No change in layout </p>
        <Link to="featured">Fetured</Link>
        <Link to="task">task</Link>
        <Outlet></Outlet>
        </>
    )
}