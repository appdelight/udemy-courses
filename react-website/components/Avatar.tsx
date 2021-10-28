import React from "react";
import Image from 'next/image';

type ObjectFit = "cover" | "fill" | "contain" | "inherit" | "none";
type AvatarProps = {
    width: string;
    height: string;
    profilePic: string;
    name: string;
    id: string;
    className?: string;
    objectFit?: ObjectFit;
    style?: object;
}
const Avatar = (props: AvatarProps) => {
    if (!props.profilePic) {
        return (
            <span className="material-icons-outlined post_user_profile px-2">
                person
            </span>
        );
    }
    return (
        <Image 
            src={props.profilePic} 
            loading="lazy"
            alt={props.name}
            id={props.id}
            layout="fixed"
            width={props.width} 
            height={props.height}
            objectFit={props.objectFit || "cover"}
            className={props.className}
        />
    );
};

export default Avatar;
