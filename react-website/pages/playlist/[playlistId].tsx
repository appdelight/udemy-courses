import React, { useState } from "react";
import Img from "../../components/Img";
import Header from "../../container/Header";
import { getLessons, ILessonReqpose } from "../../services";
import { open_dialog } from "../../utils/global";
import { ADD_NEW_LESSON } from "../../utils/types";
import Routes from "next/router";

const PlaylistLessonsPage = () => {
    const [lessons, setLessons] = useState<ILessonReqpose[]>([]);
    const [playlistId, setPlaylistId] = useState<string>("");

    React.useEffect(() => {
        setTimeout(() => {
            const plId = String(Routes.query.playlistId);
            setPlaylistId(plId);
            handleGetLessons(plId);
        }, 1500);
    }, [Routes]);

    const handleGetLessons = (plId?: string) => {
        getLessons({ courseId: plId || playlistId })
            .then((result) => {
                console.log("result", result);
                setLessons(result?.data?.data?.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleClickAddNew = () => {
        open_dialog({
            Name: ADD_NEW_LESSON,
            DrawerData: {
                playlistId,
                handleClose: handleGetLessons,
            },
            disableBackdropClick: true,
        });
    };
    const handleClickBreadcrumb = (path: string) => {
        Routes.push(path);
    };
    return (
        <React.Fragment>
            <Header activeTab={"HOME"} />

            <div className="lessons_container container-fluid">
                <div className="breadcrumb">
                    <li onClick={() => handleClickBreadcrumb("/")} className="breadcrumb-item">
                        Home
                    </li>
                    <li onClick={() => handleClickBreadcrumb("/playlist")} className="breadcrumb-item">
                        Playlist
                    </li>
                    <li className="breadcrumb-item active">{playlistId}</li>
                </div>
                <div className="playlist_page_body box-shadow p-3">
                    <div className="pb_header col-12 row">
                        <div className="mr-auto">
                            <h3>Lessons</h3>
                        </div>
                        <div className="ml-auto">
                            <button onClick={handleClickAddNew} className="btn btn-danger">
                                Add New
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="lesson_card_container">
                        {lessons.map((item) => (
                            <div key={item._id} className="lesson_card box-shadow card">
                                <div className="playlist_card_poster">
                                    <video
                                        controls
                                        poster={item.poster}
                                        src={item.videoUrl}
                                        height="160px"
                                        width="100%"
                                        className="object-fit-cover"
                                    />
                                </div>
                                <div className="playlist_details container">
                                    <h4 className="course_title bold">{item.title}</h4>
                                    <p className="course_desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                        {!lessons?.length ? (
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

export default PlaylistLessonsPage;
