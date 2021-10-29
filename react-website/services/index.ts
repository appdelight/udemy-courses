import { get, post } from "../utils/requests"

export type IPlaylistPayload = {
    poster: string,
    title: string,
    description?: string
}
export interface IPlaylistResponse extends IPlaylistPayload {
    createdAt: string,
    status?: number,
    updatedAt: string,
    _id: string
}
export const addNewPlaylistApi = (payload: IPlaylistPayload) => {
    return post('courses', payload)
}

export type IPlaylistQuery = {
    search?: string
}
export const getPlaylist = (query: IPlaylistQuery) => {
    let url = 'courses';
    if (query.search) url = `${url}?search=${query.search}`
    return get(url)
}

export type ILessonPayload = {
    courseId: string,
    poster: string,
    videoUrl: string,
    title: string,
    description?: string,
    orderNumber?: number
}
export const addNewLessonApi = (payload: ILessonPayload) => {
    return post('lessons', payload)
}

export type ILessonQuery = {
    courseId: string,
    search?: string
}
export interface ILessonReqpose extends ILessonPayload {
    createdAt: string,
    status?: number,
    updatedAt: string,
    _id: string
}
export const getLessons = (query: ILessonQuery) => {
    let url = `lessons?courseId=${query.courseId}`;
    if (query.search) url = `${url}&search=${query.search}`
    return get(url)
}