import React, { Component } from "react";
import CustomDialog from "../components/Dialogs";
import CustomDrawer from "../components/Drawers";
import { DialogClose, DialogOpen, DrawerClose, DrawerOpen } from "../utils/RxJsTopics";
import { IDrawersNames } from "../utils/types";
import { IDrawerProps } from "./DrawerHoc";

export type IDrawerData = {
    drawerName: string;
    drawerData: object;
};

type TAnchor = "left" | "right" | "top" | "bottom";

// export interface IDrawerProps {
//     Name: IDrawersNames;
//     DrawerData?: any;
//     Anchor?: TAnchor;
// }

export interface IOpenCloseDrawerProps extends IDrawerProps {
    Open: boolean;
}

class DialogHoc extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};

        DialogOpen.subscribe({
            next: this._open_drawer,
        });
        DialogClose.subscribe({
            next: this._close_drawer,
        });
    }

    _open_drawer = (params: IDrawerProps) => {
        console.log('params', params)
        this.setState(
            {
                ...this.state,
                [params.Name]: {
                    Open: false,
                    Anchor: params.Anchor || "left",
                    Name: params.Name,
                    DrawerData: params.DrawerData || {},
                    disableBackdropClick: params.disableBackdropClick
                },
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        [params.Name]: { ...this.state[params.Name], Open: true },
                    });
                }, 20);
            }
        );
    };

    _close_drawer = (type: IDrawersNames) => {
        let darwerData = { ...this.state };
        if (darwerData[type]) {
            darwerData[type]["Open"] = false;
        }
        this.setState(
            {
                ...this.state,
                ...darwerData,
            },
            () => {
                if (type && type !== "ALL") {
                    delete darwerData[type];
                } else {
                    darwerData = {};
                }
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        ...darwerData,
                    });
                }, 30);
            }
        );
    };

    render() {
        return Object.values(this.state).map((drawer: IOpenCloseDrawerProps, index: number) => {
            return (
                <CustomDialog
                    key={index}
                    disableBackdropClick={(drawer.disableBackdropClick || drawer.DrawerData && drawer.DrawerData.disableBackdripClick) || false}
                    Open={drawer.Open}
                    Name={drawer.Name}
                    handleClose={(type: IDrawersNames) => {
                        this._close_drawer(type);
                    }}
                    Anchor={drawer.Anchor}
                    DrawerData={drawer.DrawerData}
                />
            );
        });
    }
}

export default DialogHoc;
