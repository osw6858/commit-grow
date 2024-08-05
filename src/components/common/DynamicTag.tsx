import {DynamicTagProps, ValidTag} from "@type/component/common/dynamicTagType";
import {ElementType} from "react";

export default function DynamicTag<T extends ValidTag>({ tag, children, ...props }: DynamicTagProps<T>) {
    const Tag = tag as ElementType;
    return <Tag {...props}>{children}</Tag>;
}