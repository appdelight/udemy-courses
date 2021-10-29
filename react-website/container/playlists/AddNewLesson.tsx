import React, { useState } from "react";
import Img from "../../components/Img";
import { addNewLessonApi } from "../../services";
import { formatText, UploadImage, UploadVideo } from "../../utils/global";
type Props = {
    playlistId: string;
    onClose: () => void;
    handleClose: () => void;
};
const AddNewLesson = (props: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [lessonNumber, setLessonNumber] = useState<number | string>(0);
    const [posterUrl, setPosterUrl] = useState<string>("");
    const [poster, setPoster] = useState<any>();
    const [file, setFile] = useState<any>();

    const [videoUrl, setVideoUrl] = useState<string>("");
    const [video, setVideo] = useState<any>();
    const [videoFile, setVideoFile] = useState<any>();

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const folder = await formatText(title);

            // uploading poster
            let url = posterUrl;
            if (!url) {
                url = await UploadImage(file, `udemy_courses/${props.playlistId}/poster_${folder}`);
                setPosterUrl(url);
            }

            // uploading video
            let urlVideo = videoUrl;
            if (!urlVideo) {
                urlVideo = await UploadVideo(videoFile, `udemy_courses/${props.playlistId}/video_${folder}`);
                setVideoUrl(urlVideo);
            }

            // call api here to add new playlist
            const payload = {
                courseId: props.playlistId,
                title: title,
                description: description,
                poster: url,
                videoUrl: urlVideo,
                lessonNumber: lessonNumber,
            };
            await addNewLessonApi(payload);
            setLoading(false);
            props.handleClose?.();
            props.onClose();
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    const handleClose = () => {
        props.onClose();
    };

    const handleSelectFile = (e: any) => {
        const fileData = e.target.files[0];
        setFile(fileData);
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = function () {
            setPoster(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    const handleSelectVideoFile = (e: any) => {
        const fileData = e.target.files[0];
        setVideoFile(fileData);
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = function () {
            setVideo(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    return (
        <div className=" add_playlist">
            <div className="card-header text-center">Add new lesson</div>
            <form onSubmit={handleSubmit} className="container form-group p-3">
                <div className="col-12 row">
                    <label htmlFor="lesson-title" className="lesson_title col-md-4 p-0">
                        Title:
                    </label>
                    <input
                        type="text"
                        name="lesson title"
                        id="lesson-title"
                        placeholder="title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-input col-md-8"
                    />
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="lesson-title" className="lesson_title col-md-4 p-0">
                        Lesson Number:
                    </label>
                    <input
                        type="number"
                        min="0"
                        name="lesson number"
                        id="lesson-number"
                        placeholder="number..."
                        value={lessonNumber}
                        onChange={(e) => setLessonNumber(e.target.value)}
                        className="form-input col-md-8"
                    />
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="lesson-description" className="lesson_title col-md-4 p-0">
                        Description:
                    </label>
                    <textarea
                        name="lesson description"
                        id="lesson-description"
                        placeholder="description..."
                        cols={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-input col-md-8"
                    ></textarea>
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="lesson-poster" className="lesson_poster col-md-4 p-0">
                        Poster:
                    </label>
                    <input
                        type="file"
                        name="lesson_poster"
                        id="lesson-poster"
                        disabled={!title}
                        onChange={handleSelectFile}
                        className="form-input col-md-8 p-0"
                    />
                </div>
                <div className="col-12 px-0 py-2" style={{ height: "120px" }}>
                    {posterUrl || poster ? (
                        <Img src={posterUrl || poster} height="100px" width="120px" className="object-fit-cover" alt="lesson poster" />
                    ) : (
                        <></>
                    )}
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="lesson-video" className="lesson_video col-md-4 p-0">
                        Video:
                    </label>
                    <input
                        type="file"
                        name="lesson_poster"
                        id="lesson-poster"
                        disabled={!title}
                        onChange={handleSelectVideoFile}
                        className="form-input col-md-8 p-0"
                    />
                </div>
                <div className="col-12 px-0 py-2" style={{ height: "120px" }}>
                    {videoUrl || video ? (
                        <video controls playsInline src={videoUrl || video} height="100px" width="120px" className="object-fit-cover"></video>
                    ) : (
                        // <Img
                        // src={videoUrl || video}
                        // height="100px"
                        // width="120px"
                        // className="object-fit-cover"
                        // alt="lesson poster"
                        // />
                        <></>
                    )}
                </div>
                <br />
                <div className="col-12 text-center">
                    <button onClick={handleClose} type="reset" className="btn btn-outline-danger mx-2">
                        Cancel
                    </button>
                    <button disabled={(!file && !poster) || !title} type="submit" className="btn btn-success mx-2">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewLesson;
