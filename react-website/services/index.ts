import { get, post } from "../utils/requests"

type IPlaylistPayload = {
    poster: string,
    title: string,
    description?: string
}
export const addNewPlaylistApi = (payload: IPlaylistPayload) => {
    return post('playlist', payload)
}

type IPlaylistQuery = {
    search?: string
}
export const getPlaylist = (query: IPlaylistQuery) => {
    let url = 'playlist';
    if (query.search) url = `${url}?search=${query.search}`
    return get(url)
}

type ILessonPayload = {
    playlistId: string,
    poster: string,
    videoUrl: string,
    title: string,
    description?: string,
    orderNumber?: number
}
export const addNewLessonApi = (payload: ILessonPayload) => {
    return post('lesson', payload)
}

type ILessonQuery = {
    playlistId: string,
    search?: string
}
export const getLessons = (query: ILessonQuery) => {
    let url = `lesson?playlist=${query.playlistId}`;
    if (query.search) url = `${url}&search=${query.search}`
    return get(url)
}