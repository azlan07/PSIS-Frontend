import imgLogin from "../../public/images/login.svg"

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login Akun</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nik</span>
                            </label>
                            <input type="text" placeholder="nik" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-empat hover:bg-tiga text-white">Login</button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <a href="https://api.whatsapp.com/send?phone=6282377458691&text=Min,%20buek%20akun%20ciek!" target="_blank" className="label-text-alt link link-hover text-sm font-semibold">Belum punya akun? Hubungi Admin</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;