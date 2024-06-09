import _ from 'lodash';
import { ChangeEventHandler, EventHandler, useLayoutEffect, useRef } from 'react';

interface IProps {
    title: string;
    height: number;
    widthTitle: number;
    widthTotal: number;
    gap?: number;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler<any>;
    defaultValue: string;
    bigText?: boolean;
    handleBlur?: EventHandler<any>;
    typeValidate?: string;
    errorText?: string;
}

export const InputText = ({
    bigText,
    defaultValue,
    height,
    onChange,
    placeholder,
    title,
    type,
    widthTitle,
    widthTotal,
    gap,
    handleBlur,
    errorText
}: IProps) => {
    var GAP = gap || 4;
    let parRef = useRef<HTMLDivElement>(null);
    let titleRef = useRef<HTMLSpanElement>(null);
    let errRef = useRef<HTMLSpanElement>(null);
    // console.log(errorText);

    useLayoutEffect(() => {
        if (parRef.current) {
            parRef.current.style.height = `${height}px`;
            parRef.current.style.width = `${widthTotal}px`;
            parRef.current.style.gap = `${GAP}px`;
        }
        if (titleRef.current) {
            titleRef.current.style.width = `${widthTitle}px`;
        }
        if (errRef.current) {
            errRef.current.style.marginLeft = `${widthTitle + GAP}px`;
            errRef.current.style.padding = '5px 0';
        }
    }, [parRef, titleRef, errRef.current]);

    return (
        <>
            <div ref={parRef} className={`flex items-center justify-between`}>
                <span
                    ref={titleRef}
                    className={`h-full flex items-center justify-end px-2 pr-3 ${bigText && 'text-lgm font-medium'}`}
                >
                    {title}
                </span>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`flex-1 flex items-center h-full border-b outline-none text-textColorGray  
                    ${bigText && 'text-lgm font-medium'}
                `}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
            {errorText !== '' && (
                <span ref={errRef} className={`text-textColorRed text-xs font-normal`}>
                    {errorText}
                </span>
            )}
        </>
    );
};
