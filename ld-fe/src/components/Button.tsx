import { FunctionComponent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { buttonRestClient } from "../rest/index";
import { ButtonProps, buttonsState } from "../store";

const Img = (bp: ButtonProps) => {
    const [imgErorred, setErrored] = useState<Boolean>(false)
    return (
        <img style={{ width: "2rem" }}
            onError={({ currentTarget }) => {
                if (!imgErorred) {
                    const loc = window.location
                    const path = (bp.url === "/" || undefined) ? "" : bp.url
                    currentTarget.src = `${loc.protocol}//${loc.hostname}:${loc.port}${path}/favicon.ico`
                    console.log(bp)
                    setErrored(true)
                }
            }} src={bp.image_link} className="card-img" alt="..." />
    )
}

const ButtonHorizontal: FunctionComponent<ButtonProps> = (bp: ButtonProps) => {
    return (
        <div className="row">
            <div style={{ borderRight: "1px solid rgba(255, 255, 255, 0)" }} className="col-md-auto">
                <Img {...bp} />
            </div>
            <div style={{ paddingLeft: 0 }} className="col-md-auto">
                <div style={{ padding: "0 10px 0 0" }}>
                    <p style={{ marginBottom: "2px" }} className="card-text">{bp.name}
                        <span style={{color: "var(--acc-color)"}}> ↗</span>
                    </p>
                    <span style={{ fontSize: "12px" }} className="headerFont">{bp.body}</span>
                </div>
            </div>
        </div>
    )
}

export const Button: FunctionComponent<ButtonProps> = (bp: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle: React.CSSProperties = {
        transition: 'all 0.1s ease-in-out',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    };

    return (

        <div className="card"
            style={{
                ...buttonStyle,
                color: "white",
                backgroundColor: "rgba(200, 200, 200, 0.01)",
                border: 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
                <a style={{color: "inherit", textDecoration: "inherit"}} href={bp.url} target="_blank" rel="noopener noreferrer">
                    <ButtonHorizontal {...bp} />
                </a>
        </div>
    )
}

const icnSize = 15

const EditIcon = ({ buttonProps }: { buttonProps: ButtonProps }) => {

    const [buttons, setButtons] = useRecoilState<ButtonProps[]>(buttonsState)

    const handleEditEvent = useCallback(async () => {
        const resp = await buttonRestClient.updateById(buttonProps, "buttons")

        if (resp.data === true) {
            const tasksCloneWithoutNewUpdatedOne = buttons.filter(button => !(button.id === buttonProps.id))
            const updatedButtonsList = [...tasksCloneWithoutNewUpdatedOne, buttonProps];
            setButtons(updatedButtonsList)
        }
    }, [buttonProps, setButtons, buttons])

    return (
        <div className="btn btn-secondary" onClick={handleEditEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" width={icnSize} height={icnSize} fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
            </svg>
        </div>
    )
}

const TrashIcon = ({ id }: { id: string | undefined }) => {

    const [buttons, setButtons] = useRecoilState<ButtonProps[]>(buttonsState)

    const handleDeleteEvent = useCallback(async () => {
        const response = await buttonRestClient.deleteById(id === undefined ? "" : id, "buttons");
        console.log(response.data)
        if (response.data === true) {
            console.log("updating buttons state")
            setButtons(buttons.filter(button => button.id !== id))
        }
    }, [buttons, setButtons, id])

    return (
        <div className="btn btn-secondary" onClick={handleDeleteEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" width={icnSize} height={icnSize} fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
        </div>
    )
}

export const ButtonMenu = ({ menuProps }: { menuProps: ButtonProps }) => {
    return (
        <div>
            <div className="row justify-content-end" style={{ marginRight: "5px" }}>
                <div className="col-3">
                    <EditIcon buttonProps={menuProps} />
                </div>

                <div className="col-3">
                    <TrashIcon id={menuProps.id} />
                </div>
            </div>
        </div>
    )
}

// export const ToggableButton = ({ menuProps }: { menuProps: ButtonProps }) => {

//     const [isToggled, setToggle] = useState(false)

//     function toggleUp() {
//         setToggle(true)
//     }

//     function toggleDown() {
//         setToggle(false)
//     }

//     const bp: ButtonProps = menuProps;

//     if (isToggled) {
//         return (
//             <div onMouseEnter={toggleUp} onMouseLeave={toggleDown}>
//                 <ButtonMenu menuProps={menuProps} />
//                 <Button {...{ bp, setIframe: (value: boolean) => setToggle(value) }} />
//             </div>)
//     }

//     return (
//         <div onMouseEnter={toggleUp} onMouseLeave={toggleDown}>
//             <Button {...{ bp, setIframe: (value: boolean) => setToggle(value) }} />
//         </div>
//     )
// }

