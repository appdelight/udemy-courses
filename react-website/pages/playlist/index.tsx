import Router from "next/router";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Img from "../../components/Img";
import Header from "../../container/Header";
import { open_dialog } from "../../utils/global";
import { ADD_NEW_PLAYLIST } from "../../utils/types";

const PlaylistPage = () => {
    const handleClickAddNew = () => {
        open_dialog({
            Name: ADD_NEW_PLAYLIST,
            DrawerData: {},
            disableBackdropClick: true
        })
    }
    const handleClick = (id: string) => {
        Router.push(`playlist/${id}`)
    }
    return (
        <React.Fragment>
            <Header activeTab={"HOME"} />
            <div className="playlist_page_container container-fluid">
                <div className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Playlist</li>
                </div>
                <div className="playlist_page_body box-shadow p-3">
                    <div className="pb_header col-12 row">
                        <div className="mr-auto">
                            <h3>Playlists</h3>
                        </div>
                        <div className="ml-auto">
                            <button 
                                onClick={handleClickAddNew}
                                className="btn btn-danger">Add New</button>
                        </div>
                    </div>
                    <br />
                    <div className="playlist_card_container">
                        <div onClick={()=>handleClick("playlistid_959375983475")} className="playlist_card box-shadow card">
                            <div className="playlist_card_poster">
                                <Img
                                    src="https://jagan.cf/images/projects/placeholder.png"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                    alt="course poster"/>
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Course Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PlaylistPage;
