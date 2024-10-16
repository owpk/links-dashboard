import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { ButtonProps, fetchAllButtonsSelector } from "../store";


export interface WidgetProps {
    title: string,
    request: string
}

export const LinksWidget: FunctionComponent<WidgetProps> = (props: WidgetProps) => {
    //const [buttons] = useRecoilState<ButtonProps[]>(buttonsState);
    const butts = useRecoilValue(fetchAllButtonsSelector(props.request));

    return (
        <div className="ui-widget">
            <div className="widget-title">{props.title.toUpperCase()}</div>
            <div className="ui-container Links-container">
                {butts.map((bp: ButtonProps) => <Link {...bp} />)}
            </div>
        </div>
    )
}

const Link = (props: ButtonProps) => {
    return (
        <div className="hover-element">
            <a className="link-hr">
                <div className="link-img">
                    <img style={{ width: "40px", opacity: "0.5" }} src="https://simpleicons.org/icons/npm.svg" />
                </div>
                <div>
                    <div className="link-title">{props.title}<span style={{color: "green"}}> ↗</span></div>
                    <div className="link-body">{props.body}</div>
                </div>
            </a>
        </div>
    )
}