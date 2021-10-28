import React, { useEffect, useState } from "react";

const around = (n: number, value: number): boolean => {
    return value >= n - 5 && value <= n + 5;
};
/**
 * @description this is a component to get pagination event
 * if scroll height of a container is equal to scrollTop & clientHeight
 * then this component will raise an event provided in props (pageEventHandler)
 * provide the html element id of scrollable container (make sure that element exists in View Port)
 * @author Jagannath
 * @date 2021-01-18
 * @param id: HTMLElement id - string
 * @param pageEventHandler: f()
 */
type Props = {
    id: string;
    page: number;
    pageEventHandler: (page: number) => void;
};
const PaginationIndicator = (props: Props) => {
    const [pageChange, setPageChange] = useState<number>(0);

    useEffect(() => {
        const elementNode: HTMLElement | null = document.getElementById(
            props.id
        );

        if (elementNode) {
            elementNode.addEventListener("scroll", () => {
                const isScrollTouchingBottom: boolean = around(
                    +elementNode.scrollHeight,
                    +elementNode.scrollTop + +elementNode.clientHeight
                );
                if (isScrollTouchingBottom && +elementNode.scrollTop) {
                    setPageChange(Math.random());
                }
            });
        }
    }, []);

    useEffect(() => {
        const elementNode: HTMLElement | null = document.getElementById(
            props.id
        );
        if (elementNode) {
            const isScrollTouchingBottom: boolean = around(
                +elementNode.scrollHeight,
                +elementNode.scrollTop + +elementNode.clientHeight
            );
            if (isScrollTouchingBottom) {
                props.pageEventHandler(props.page+1);
            }
        }
    }, [pageChange]);

    useEffect(() => {
        return () => {
            const elementNode: HTMLElement | null = document.getElementById(
                props.id
            );
            if (elementNode) {
                elementNode.removeEventListener("scroll", () => null);
            }
        };
    }, []);
    return <div></div>;
};
export default PaginationIndicator;
