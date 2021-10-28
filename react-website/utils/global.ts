import { IDrawerProps } from "../HOC/DrawerHoc";
import { IDrawersNames } from "./types";
// import parse from "html-react-parser";
import { DialogClose, DialogOpen, DrawerClose, DrawerOpen } from "./RxJsTopics";
import { CLOUDINARY_API_BASE, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "./config";


/**
 * @param Name: drawer name - ex: "OPEN_DRAWER"
 * @param DrawerData: {}
 * @param Anchor: "left"
 */
export const open_drawer = (data: IDrawerProps) => 
{
  return DrawerOpen.next(data)
}

/**
 * @param Name: drawer name - ex: "OPEN_DRAWER"
 */
export const close_drawer = (Name: IDrawersNames) => 
{
  return DrawerClose.next(Name)
}

/**
 * @param Name: dialog name - ex: "OPEN_DRAWER"
 * @param DrawerData: {}
 * @param Anchor: "left"
 */
export const open_dialog = (data: IDrawerProps) => 
{
  return DialogOpen.next(data)
}

/**
 * @param Name: dialog name - ex: "OPEN_DRAWER"
 */
export const close_dialog = (Name: IDrawersNames) => 
{
  return DialogClose.next(Name)
}


 /**
 * @description use this method to pause a task for sometime
 * @author jagannath
 * @date 09/09/2021
 * @param time time in milliseconds
 * @return Promise()
 */
  export const sleep = (time: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, time);
});


// /**
//  * @description use this method to parse query params 
//  * @author jagannath
//  * @date 09/09/2021
//  * @param param url query params - search params
//  * @return ex: {key: value}
//  */
// export const parseQuery =(query:string) => {
//     query = query.trim().replace(/^[?#&]/, '');
//     const queryParam = {}
//     for (const param of query.split('&')) {
// 		if (param === '') {
// 			continue;
// 		}
//         let [key, value] = param.split('=');
//         queryParam[key] = value;
// 	}
//     return queryParam
// }

 /**
 * @description use this method to parse url pathname (routes into an array)
 * @author jagannath
 * @date 09/09/2021
 * @param param url pathname
 * @return string[] - ex: ["signup", "merchant"]
 */
export const parseParam = (param: string): string[] => {
    param = param.trim().replace(/^[/#&]/, '');
    return param.split('/')
}

// returns true if mobile device, false otherwise
export const detectDevice = (): boolean => {
    let isMobileView = (navigator.userAgent
    ).match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i);
    return Boolean(isMobileView);
};

export const linkify = (text:string) => {
    var urlRegex =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return text.replace(urlRegex, function (url) {
      let urlInstance = url;
      if (!urlInstance.startsWith("http")) {
        urlInstance = "https://" + url;
      }
      return '<a target="_blank" href="' + urlInstance + '">' + url + "</a>";
    });
  };
  
  export const parseUrlText = (text:string) => {
    // return parse(linkify(text));
  };



export const UploadImage = async (file:any, folderId:string) => {
  try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`)
      const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/image/upload/`;
      const res = await fetch(apiUrl, {
        method: "POST",
        body: data
      });
      const resultJson = await res.json();
      return resultJson.secure_url;
    } catch (error) {
      console.error('failed to upload image: ', error)
      return null;
    }
}
export const UploadVideo = async (file:any, folderId:string) => {
  try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`)
      const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/video/upload/`;
      const res = await fetch(apiUrl, {
        method: "POST",
        body: data
      });
      const resultJson = await res.json();
      return resultJson.secure_url;
    } catch (error) {
      console.error('failed to upload image: ', error)
      return null;
    }
}

 /**
 * @param text : string
 * @param [format]: string - ex: "_" | "," | "-"
 * @return string
 */
export const formatText = (text:string, format?:string) => {
  let rowText = text.toLocaleLowerCase().split(' ');
  return rowText.join(format || '_')
}