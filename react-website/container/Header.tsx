import Route from "next/router";
import React from "react";
import SvgIcon from "../components/Image/SvgIcon";
import { APP_NAME, CHAT_ICON, HAMBURGER_ICON, LIVE_TV_ICON, NOTIFICATION_ICON, PROFILE_ICON, SEARCH_ICON } from "../utils/config";
import { open_drawer } from "../utils/global";
type TabsType = "HOME" | "MENU" | "STAFFS" | "ABOUT" | "CONTACTS";
enum ETabs {
    "HOME",
    "MENU",
    "STAFFS",
    "ABOUT",
    "CONTACTS",
}
const ITabs = ["/", "/menu", "/staffs", "/about", "/contacts"];
type Props = {
    activeTab: TabsType;
};
const Header = (props: Props) => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    React.useEffect(() => {
        setActiveTab(ETabs[props.activeTab] || 0);
    }, []);

    const handleClickMenu = () => {
        open_drawer({
            Name: "OPEN_DRAWER",
            DrawerData: {},
            Anchor: "left",
        });
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        // const tabIndex = ETabs[newValue];
        const route: string = ITabs[newValue];
        Route.push(route);
    };
    const handleClickLogo = () => {
        Route.push("/");
    };
    return (
        <React.Fragment>
            <div className="header">
                <header className="homepage_header">
                    <nav className="homepage_header__nav">
                        <div className="header_logo">
                            {/* <div>
                                <SvgIcon id="header_nav__logo" height="50px" width="50px" src={HAMBURGER_ICON} color="#ffffff" />
                            </div> */}
                            {/* <img src="/images/hotsaka.png" /> */}
                            {APP_NAME}
                        </div>

                        <div className="header_middle mr-auto">
                            <div className="header_search__input">
                                <input type="search" placeholder="Search" />
                                <button className="header_search__btn">
                                    <span>
                                        <SvgIcon id="profile-icon" height="24px" width="24px" src={SEARCH_ICON} color="#000000" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="header_country">
                            {/* <SvgIcon
                                id="LIVE_TV_ICON"
                                className="header_nav_icon mx-2"
                                height="30px"
                                width="30px"
                                src={LIVE_TV_ICON}
                                color={"#fff"}
                            />
                            <SvgIcon id="CHAT_ICON" className="header_nav_icon mx-2" height="30px" width="30px" src={CHAT_ICON} color={"#fff"} />
                            <SvgIcon
                                id="NOTIFICATION_ICON"
                                className="header_nav_icon mx-2"
                                height="30px"
                                width="30px"
                                src={NOTIFICATION_ICON}
                                color={"#fff"}
                            /> */}
                            <SvgIcon
                                id="PROFILE_ICON"
                                className="header_nav_icon mx-2"
                                height="30px"
                                width="30px"
                                src={PROFILE_ICON}
                                color={"#fff"}
                            />
                        </div>
                    </nav>
                </header>
            </div>
        </React.Fragment>
    );
};

export default Header;
