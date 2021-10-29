import Router from "next/router";
import React, { useEffect, useState } from "react";
import Img from "../../components/Img";
import Header from "../../container/Header";
import { getPlaylist, IPlaylistResponse } from "../../services";
import { open_dialog } from "../../utils/global";
import { ADD_NEW_PLAYLIST } from "../../utils/types";

const PlaylistPage = () => {
    const [courses, setCourses] = useState<IPlaylistResponse[]>([]);
    useEffect(() => {
        handleGetPlaylist();
    }, []);

    const handleGetPlaylist = () => {
        getPlaylist({})
            .then((response) => {
                const coursesList = response?.data?.data?.data;
                setCourses(coursesList);
            })
            .catch((error) => console.error(error));
    };
    const handleClickAddNew = () => {
        open_dialog({
            Name: ADD_NEW_PLAYLIST,
            DrawerData: {
                handleClose: handleGetPlaylist,
            },
            disableBackdropClick: true,
        });
    };
    const handleClick = (id: string) => {
        Router.push(`playlist/${id}`);
    };
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
                            <button onClick={handleClickAddNew} className="btn btn-danger">
                                Add New
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="playlist_card_container">
                        {courses.map((item) => (
                            <div key={item._id} onClick={() => handleClick(item._id)} className="playlist_card box-shadow card">
                                <div className="playlist_card_poster">
                                    <Img src={item.poster} height="160px" width="100%" className="object-fit-cover" alt="course poster" />
                                </div>
                                <div className="playlist_details container">
                                    <h4 className="course_title bold">{item.title}</h4>
                                    <p className="course_desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                        {!courses?.length ? (
                            <div className="text-center w-100 my-5">
                                <h3 className="text-muted">No Data Found!</h3>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PlaylistPage;
