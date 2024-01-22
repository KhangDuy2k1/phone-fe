export const reload = (): void => {
        window.location.reload()
}
export const scrollAddEvent = (scrollCb: any):void => {
        window.addEventListener("scroll", scrollCb)
}
export const removeScrollEvent = (scrollCb : any):void => { 
        window.removeEventListener("scroll", scrollCb)
}