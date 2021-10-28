
/**
 * @description use this method to set cookie
 * @author Jagannath
 * @date 17/09/2021
 * @param cookieName name of the key to shtore in cookie
 * @param value value of the key 
 * @return boolean
 */
export function setCookie(cookieName: string, value: string | boolean): Promise<boolean> 
{
    return new Promise((resolve, reject)=>{
        document.cookie = `${cookieName}=${value}`
        resolve(true)
    })
}

/**
 * @description use this method to get cookie
 * @author Jagannath
 * @date 17-09-2021
 * @param cookieName key name
 * @return string
 */
export function getCookie(cookieName: string): string 
{
    var cookieString = RegExp(cookieName + "=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : "");
}