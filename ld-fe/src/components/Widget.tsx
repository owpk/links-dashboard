import React, { FunctionComponent } from "react";


export interface WidgetProps {
    embed: React.ComponentType<any>
    props?: any
    title: string
}

export const Widget: FunctionComponent<WidgetProps> = (props: WidgetProps) => {
    return (
        <div style={{paddingTop: "1rem"}}>
            <div className="headerFont">
                {props.title.toUpperCase()}
            </div>
            <div className="tile tile-box">
                <props.embed {...props} />
            </div>
        </div>
    )
}