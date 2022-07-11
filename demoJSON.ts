import { IChatTab, IOnline } from "./app/assets/types"

export const ChatTabs:IChatTab[]=[
    {
        name:'Babatunde Alabi',
        avatar:'image1.jpg',
        lastMessage:'Good Morning Boss',
        readMark:'sent',
        timeStamp:'May 17',
        sender:true
    },
    {
        name:'De Saint',
        avatar:'image2.jpg',
        lastMessage:'Good Morning Boss',
        readMark:'sent',
        timeStamp:'May 17',
        sender:true
    },
    {
        name:'Innocent Wanda',
        avatar:'image3.jpg',
        lastMessage:'Hello Boss I said',
        readMark:'sent',
        timeStamp:'May 16',
        sender:false
    },
    {
        name:'',
        avatar:'image4.jpg',
        lastMessage:'English pls',
        readMark:'sent',
        timeStamp:'May 15',
        sender:true
    },
    {
        name:'Osimi Amos',
        avatar:'image5.jpg',
        lastMessage:'Osimi Amos sent a sticker',
        readMark:'notSent',
        timeStamp:'May 14',
        sender:false
    },
    {
        name:'Samiir Daahir',
        avatar:'image6.jpg',
        lastMessage:'You can now send Message',
        readMark:'notSent',
        timeStamp:'May 10',
        sender:false
    },
    {
        name:'Queen Remmy',
        avatar:'image7.jpg',
        lastMessage:'Are you',
        readMark:'posted',
        timeStamp:'April 17',
        sender:true
    },
    {
        name:'Francety James',
        avatar:'image8.jpg',
        lastMessage:'Hello',
        readMark:'sent',
        timeStamp:'March 4',
        sender:false
    },
    {
        name:'BigKen Neth',
        avatar:'image9.jpg',
        lastMessage:'like',
        readMark:'read',
        timeStamp:'Februaury 28',
        sender:true
    },
    {
        name:'Emmanuel Ramson',
        avatar:'image10.jpg',
        lastMessage:'3110554566 First Bank',
        readMark:'sent',
        timeStamp:'February 4',
        sender:false
    },
]

export const OnlineUsers:IOnline[]=[
    {
        name:'Babatunde Alabi',
        avatar:'image1.jpg',
        isOnline:true
    },
    {
        name:'Innocent Wanda',
        avatar:'image3.jpg',
        isOnline:true
    },
    {
        name:'Samiir Daahir',
        avatar:'image6.jpg',
        isOnline:false
    },
    {
        name:'Francety James',
        avatar:'image8.jpg',
        isOnline:true
    },
    {
        name:'Emmanuel Ramson',
        avatar:'image10.jpg',
        isOnline:false
    }
]