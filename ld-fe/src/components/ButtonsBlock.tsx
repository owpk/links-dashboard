import { FunctionComponent } from "react"
import { useRecoilState } from "recoil"
import { ButtonProps, buttonsState } from "../store"
import { Button } from "./Button"

export const LinksBlock: FunctionComponent = () => {

    const [buttons] = useRecoilState<ButtonProps[]>(buttonsState)

    return (
        <div className="vstack gap-3">
            {buttons.map(button =>
                <Button {...button} />
            )}
        </div>
    )
}