import React, { ReactPropTypes, useState } from "react";

interface Props {
    src: string;
    height: string;
    width: string;
    color: string;
    size?: string;
    fill?: string;
    style?: object;
    className?: string;
    useWidth?: string;
    useHeight?: string;
    id?: string;
    hoverColor?: string;
    viewBox?: string;
}
const SvgIcon = (props: Props) => {
    const [hover, setHover] = useState(false);
    const styles = {
        svg: {
            display: "inline-block",
            verticalAlign: "middle",
            cursor: "pointer",
            color: hover ? props.hoverColor : props.color,
        },
    };
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    return (
        <React.Fragment>
            <svg
                height={props.height}
                width={props.width}
                style={styles.svg || {}}
                className={props.className}
                fill={props.fill}
                color={props.color}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id={props.id}
                viewBox={props.viewBox || "0 0 26.241 26.294"}
            >
                <use xlinkHref={props.src} width={props.useWidth || "100%" || props.size} height={props.useHeight || "100%" || props.size} />
            </svg>
        </React.Fragment>
    );
};

export default SvgIcon;
