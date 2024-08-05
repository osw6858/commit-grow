import {ComponentPropsWithoutRef, ReactNode} from 'react';
import {validTags} from "@/contants/vaildTag";

// 허용된 태그의 타입 정의
export type ValidTag = typeof validTags[number];

// Props 타입 정의
export type DynamicTagProps<T extends ValidTag> = {
    tag: T;
    children: ReactNode | string
} & ComponentPropsWithoutRef<T>;