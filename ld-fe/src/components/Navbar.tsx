import { useRecoilState } from "recoil"
import { buttonsState } from "../store"

export const Navbar = () => {

    const [links] = useRecoilState(buttonsState)

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme={"dark"}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map(l =>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={l.url}>{l.name}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}