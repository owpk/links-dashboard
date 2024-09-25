import { FunctionComponent } from "react"
import { useRecoilState } from "recoil"
import { ButtonProps, buttonsState } from "../store"
import { Button } from "./Button"

export const ButtonBlock: FunctionComponent = () => {

    const [buttons] = useRecoilState<ButtonProps[]>(buttonsState)

    return (
        <div className="row row-cols-1 row-cols-md-6 g-4">
            {buttons.map(button =>
                <div key={button.id} className="col p-3">
                    {/*<ToggableButton menuProps={button} />*/}
                    <Button {...button} />
                </div>
            )}
        </div>
    )
}