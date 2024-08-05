import {ButtonType} from "@type/component/common/buttonType";

export default function BasicButton({type, children, onClick, className}:ButtonType) {
    return <button className={`${className}`} type={type} onClick={onClick}>{children}</button>
}