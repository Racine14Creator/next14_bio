import Link from "next/link"

const Navbar = () => {
    return (
        <div className="container max-w-[1200px] m-auto">

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"#aboutus"}>About Us</Link></li>
                            <li><Link href={"#contact"}>Contact Us</Link></li>
                            <li>
                                <Link href="/projects">Our Projects</Link>
                                <ul className="p-2">
                                    <li><a>Data Analysis</a></li>
                                    <li><a>Software</a></li>
                                    <li><a>Cyber Security</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Racine14 Tech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                        <li>
                            <details>
                                <summary>Our Projects</summary>
                                <ul className="p-2">
                                    <li><a>Data Analysis</a></li>
                                    <li><a>Software</a></li>
                                    <li><a>Cyber Security</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-md btn-success">Sign In</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar