export default function HeaderComponent(){
    return(
        <>
        <div className="container my-3">
        <nav class="navbar navbar-expand-md navbar-light bg-light mb-3 p-1">
          
            <a class="navbar-brand m-1" href="/">ToDo</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/todos">Todos</a></li>
                </ul>
            </div>
            <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
            </ul>	
        </nav>
        </div>
        <hr />
        </>
    )
}
