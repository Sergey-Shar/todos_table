import { ReactNode } from "react"
import './fieldGroup.css'
export const FieldGroup = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className="field-group">
            {children}
        </div>
    )
}