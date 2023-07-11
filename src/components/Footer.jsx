const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-lima text-base-content">
                <div>
                    <a href="/"><img src="../../public/images/LogoPsis.svg" alt="psis" /></a>
                    <p className="text-xl text-white font-semibold"><a href="/">Public Service Information System<br />DESA</a></p>
                </div>
                <div>
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <p className="text-gray-300 mt-4">LanDev - Jr Web Developer</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                        <ul className="mt-4">
                            <li><a href="https://react.dev/" className="text-gray-300 hover:text-white">React JS</a></li>
                            <li className='mt-2'><a href="https://mui.com/material-ui/getting-started/overview/" className="text-gray-300 hover:text-white">Material UI</a></li>
                            <li className='mt-2'><a href="https://tailwindcss.com/" className="text-gray-300 hover:text-white">Tailwind CSS</a></li>
                            <li className='mt-2'><a href="https://nodejs.org/en/docs" className="text-gray-300 hover:text-white">Node JS</a></li>
                            <li className='mt-2'><a href="https://expressjs.com/" className="text-gray-300 hover:text-white">Express JS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Address & Contact</h3>
                        <p className="text-gray-300 mt-4">Nagari Sumanik, KAB. Tanah Datar</p>
                        <p className="text-gray-300">azlan.nur15.07hakim@gmail.com</p>
                    </div>
            </footer>
        </>
    );
}

export default Footer;