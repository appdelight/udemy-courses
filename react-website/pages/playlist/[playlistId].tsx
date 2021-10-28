import React, { useState } from "react";
import Img from "../../components/Img";
import Header from "../../container/Header";
import { getLessons } from "../../services";
import { open_dialog } from "../../utils/global";
import { ADD_NEW_LESSON } from "../../utils/types";
import Routes from "next/router";

const PlaylistLessonsPage = () => {
    const [lessons, setLessons] = useState();
    const [playlistId, setPlaylistId] = useState<string>();

    React.useEffect(() => {
        const plId = String(Routes.query.playlistId);
        setPlaylistId(plId);
        getLessons({ playlistId: plId })
            .then((result) => {
                console.log("result", result);
                setLessons(result?.data?.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const handleClickAddNew = () => {
        open_dialog({
            Name: ADD_NEW_LESSON,
            DrawerData: {
                playlistId
            },
            disableBackdropClick: true,
        });
    };
    const handleClickBreadcrumb = (path: string) => {
        Routes.push(path)
    }
    return (
        <React.Fragment>
            <Header activeTab={"HOME"} />

            <div className="lessons_container container-fluid">
                <div className="breadcrumb">
                    <li onClick={()=>handleClickBreadcrumb("/")} className="breadcrumb-item">Home</li>
                    <li onClick={()=>handleClickBreadcrumb("/playlist")} className="breadcrumb-item">Playlist</li>
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
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                        <div className="lesson_card box-shadow card">
                            <div className="playlist_card_poster">
                                <video 
                                    controls
                                    poster="https://res.cloudinary.com/jagannath/image/upload/v1635449352/jagannath/udemy_courses/hhkh/ca2c9chs1sbrve3nyqxt.jpg"
                                    src="https://res.cloudinary.com/jagannath/video/upload/v1635448191/jagannath/udemy_courses/playlistid_959375983475/video_teds/ad7er8wanotjcd3z8k19.mp4"
                                    height="160px"
                                    width="100%"
                                    className="object-fit-cover"
                                />
                            </div>
                            <div className="playlist_details container">
                                <h4 className="course_title bold">Lesson Title</h4>
                                <p className="course_desc">Reactjs admin dashboard with charts, graph analytics & tabular data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PlaylistLessonsPage;
