export const CONFIRMATION_DIALOG = "CONFIRMATION_DIALOG";
export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";
export const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST"
export const ADD_NEW_LESSON = "ADD_NEW_LESSON";


export type IDrawersNames = "ALL" | 
    typeof OPEN_DRAWER | 
    typeof CLOSE_DRAWER |
    typeof ADD_NEW_PLAYLIST |
    typeof ADD_NEW_LESSON ;

export enum MenuTypes {
    HOME = "HOME",
    MENU = "MENU",
    STAFFS = "STAFFS",
    ABOUT = "ABOUT",
    CONTACTS = "CONTACTS"
}