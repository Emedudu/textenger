export interface IChatTab{
    name:string,
    avatar:string,
    lastMessage:string,
    readMark:'notSent'|'sent'|'posted'|'read',
    timeStamp:string,
    sender:boolean
}