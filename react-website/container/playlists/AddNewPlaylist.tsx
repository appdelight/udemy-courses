import React, { useState } from "react";
import { IDialogComponentProps } from "../../components/Dialogs";
import Img from "../../components/Img";
import { addNewPlaylistApi } from "../../services";
import { formatText, UploadImage } from "../../utils/global";

type Props = {
    onClose: () => void;
    handleClose: () => void;
};
const AddNewPlaylist = (props: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [posterUrl, setPosterUrl] = useState<string>("");
    const [poster, setPoster] = useState<any>();
    const [file, setFile] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const folder = await formatText(title);
            let url = posterUrl;
            if (!posterUrl) {
                url = await UploadImage(file, `udemy_courses/${folder}`);
                setPosterUrl(url);
            }
            // call api here to add new playlist
            const payload = {
                poster: url,
                title: title,
                description: description,
            };
            await addNewPlaylistApi(payload);
            setLoading(false);
            props.handleClose();
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
    return (
        <div className=" add_playlist">
            <div className="card-header text-center">Add new playlist</div>
            <form onSubmit={handleSubmit} className="container form-group p-3">
                <div className="col-12 row">
                    <label htmlFor="playlist-title" className="playlist_title col-md-4 p-0">
                        Playlist Title:
                    </label>
                    <input
                        type="text"
                        name="playlist title"
                        id="playlist-title"
                        placeholder="title..."
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-input col-md-8"
                    />
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="playlist-description" className="playlist_title col-md-4 p-0">
                        Playlist Description:
                    </label>
                    <textarea
                        name="playlist description"
                        id="playlist-description"
                        placeholder="description..."
                        cols={3}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-input col-md-8"
                    ></textarea>
                </div>
                <br />
                <div className="col-12 row">
                    <label htmlFor="playlist-poster" className="playlist_poster col-md-4 p-0">
                        Playlist Poster:
                    </label>
                    <input
                        type="file"
                        name="playlist_poster"
                        id="playlist-poster"
                        disabled={!title}
                        onChange={handleSelectFile}
                        className="form-input col-md-8 p-0"
                    />
                </div>
                <div className="col-12 px-0 py-2" style={{ height: "120px" }}>
                    {posterUrl || poster ? (
                        <Img src={posterUrl || poster} height="100px" width="120px" className="object-fit-cover" alt="playlist poster" />
                    ) : (
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

export default AddNewPlaylist;
