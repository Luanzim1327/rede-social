import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div className="flex bg-slate-900 text-white justify-between py-3 items-center">
            <h2 className="px-3 text-3xl">Logo</h2>
            <ul className="flex space-x-3 px-5 text-xl">
                <ListItem to={"/login"}>
                    Login
                </ListItem>
                <ListItem to={"/signup"}>
                    Sign Up
                </ListItem>   
            </ul>
        </div>
    )
}

function ListItem ({to , children , ...props}) {
    return (
        <li {...props}>
            <Link to={to}>{children}</Link>
        </li>
    )
}