import type { JSX } from "react";
import type { LabelTypes } from "./label-types";
import "../Label.css";

interface LabelProps {
    text: string;
    labelType: LabelTypes;
    children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({text , labelType , children}) => {

    const cssClassMap = {
        Important: "label-important",
        Warning: "label-warning",
        Info: "label-info",
        Success: "label-success",
        Error: "label-error",
    } as const;

    const LabelTag = "label";
    const LabelTagElement = LabelTag as keyof JSX.IntrinsicElements;
    const Children = children as keyof JSX.IntrinsicElements;

    return(
        <>
            <LabelTagElement className={cssClassMap[labelType]}>
                {text}
                {children}
            </LabelTagElement>
        </>
    );
}

export default Label;