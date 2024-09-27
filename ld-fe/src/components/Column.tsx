import { FC } from "react"

export interface ColProps {
    children: React.ReactNode[]
    colType: "col" | "col-auto"
}

export const Column:FC<ColProps> = (prop: ColProps) => {
    return (
        <div className={prop.colType}>
            {prop.children}
        </div>
    )
}