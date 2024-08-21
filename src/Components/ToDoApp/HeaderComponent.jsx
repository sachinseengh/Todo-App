import { useContext } from 'react'
import { useAuth } from './security/AuthContext'
import { Link } from 'react-router-dom';

export default function HeaderComponent() {

    const authContext = useAuth();
    const authenticated = authContext.isAuthenticated;


    return (
        <>
            <div className="container my-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 p-1">
                    <Link className="navbar-brand m-1" to="/">ToDo</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {authenticated && <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>}
                            {authenticated && <li className="nav-item"><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {!authenticated && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                        {authenticated && <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>}
                    </ul>
                </nav>
            </div>
            <hr />
        </>
    )
}
