import React from 'react'
import Route from 'next/router';
import { APP_NAME } from '../utils/config';

interface HeaderProps  {
    title?: string,
    menuIcon?: boolean,
    moreIcon?: boolean,
    closeIcon?: boolean,
    backIcon?: boolean,
    rightIcons?: JSX.Element
}

const HeaderComponent = (props: HeaderProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className="header_cont d-flex justify-content-between p-2">
                <div className="d-flex">
                    {props.backIcon ? (
                        <span onClick={Route.back} className="material-icons-outlined">
                            keyboard_backspace
                        </span>
                    ): <></>}

                    {props.closeIcon ? (
                        <span onClick={Route.back} className="material-icons-outlined pr-2">
                            close
                        </span>
                    ): <></>}

                    <div className="header_title">
                        {props.title || APP_NAME}
                    </div>
                </div>
                <div className="header_right">

                    {props.rightIcons ? (
                        props.rightIcons
                    ): <></>}

                    {props.moreIcon ? (
                        <span className="material-icons-outlined">
                            more_vert
                        </span>
                    ):<></>}

                    {props.menuIcon ? (
                        <span className="material-icons-outlined">
                            menu
                        </span>
                    ):<></>}
                </div>
            </div>
            <style>{`
                .header{
                    height: 70px;
                    align-items: center;
                    position: sticky;
                    top: -1px;
                    background: var(--dark);
                    z-index: 100;
                }
                .header_title{
                    font-size: large;
                    font-weight: 500;
                    padding-left: 12px;
                }

            `}</style>
        </React.Fragment>
    )
}

export default HeaderComponent
