import { Link } from "react-router-dom";
 
export default function Login () {
    return (
        <div className="h-screen y-screen bg-slate-700 flex items-center justify-center text-slate-50">
            <div className="flex flex-col bg-slate-600 rounded-md px-9 py-10">
                <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                <form className="flex flex-col space-y-6">
                    <div>
                        <label className="block text-lg" htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email" 
                            placeholder="Ex : example123@gmail.com"
                            className="px-4 py-2 outline-none text-slate-600"
                        />
                    </div>

                    <div>
                        <label className="block text-lg" htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Ex : example12345"
                            className="px-4 py-2 outline-none text-slate-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-slate-50 text-slate-600 px-3 py-3 rounded-md font-bold">Login</button>
                        <Link to="/signup" className="underline text-sky-400">I don't have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}