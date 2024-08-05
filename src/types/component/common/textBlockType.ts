import {ValidTag} from "@type/component/common/dynamicTagType";
import {ReactNode} from "react";

export interface TextBlockType {
    tag: ValidTag
    content: string | ReactNode
}