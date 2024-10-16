import { FunctionComponent } from "react";
import logo from '../assets/ocrv.png';

const HeaderButton: FunctionComponent = () => {
    return (
        <button className="button headerButton">irk czt.dev</button>
    )
}

export const Header: FunctionComponent = () => {
    return (
        <div className="ui-container top-header">
            <img className="header-logo" src={logo} alt="logo" />
            <div className="vertical-dash" />
            <div className="header-title">Title</div>
        </div>
    )
}