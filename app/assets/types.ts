export interface IChatTab{
    name:string,
    avatar:string,
    lastMessage:string,
    readMark:'notSent'|'sent'|'posted'|'read',
    timeStamp:string,
    sender:boolean
}
export interface IOnline{
    name:string,
    avatar:string,
    isOnline:boolean
}