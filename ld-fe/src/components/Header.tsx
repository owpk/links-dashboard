import { FunctionComponent } from "react";
import logo from '../assets/ocrv.png';

export const HeaderButton: FunctionComponent = () => {
    return (
        <button className="button headerButton">irk czt.dev</button>
    )
}

export const Header: FunctionComponent = () => {
    return (
        <div className='tile' style={{marginTop: "1.3rem", marginBottom: "1.3rem"}}>
            <div className='headerFont row'>
                <img
                    style={{
                        padding: "10px",
                        paddingLeft: "30px",
                        paddingRight: "15px",
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                    className="col-auto" src={logo} alt="logo" />
                <div className="col-lg d-flex align-items-end">
                    <HeaderButton />
                </div>
            </div>
        </div>
    )
}