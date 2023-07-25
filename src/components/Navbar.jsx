import { FiBell } from "react-icons/fi";
import p from "../../public/images/peoples.png"

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 right-0 z-10 bg-dua">
            <div className="flex-1">
                <a href="/" className="w-10"><img src="../../public/images/LogoPsis.svg" alt="" /></a>
                <a href="/" className="btn btn-ghost normal-case text-xl">PSIS - DESA</a>
            </div>
            <div className="flex-none">
                <a href="/login" className="btn bg-empat hover:bg-tiga normal-case text-lg text-white">Login</a>
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FiBell className="text-xl"/>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="../../public/vite.svg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;