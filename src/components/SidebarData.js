import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

const SidebarData = [
    {
        title:"기본 관리",
        icon: <MdIcons.MdOutlineSettings size="18"/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown size="18"/>,
        childrens:[
            {
                id: 1,
                title:"사이트 기본 정보",
                path:"menu1",
            },
            {
                id: 2,
                title:"팝업/리스트 관리",
                path:"menu2",
            },
            {
                id: 3,
                title:"푸시 알림 관리",
                path:"menu3",
            },
            {
                id: 4,
                title:"공지사항/이벤트",
                path:"menu4",
            },
            {
                id: 5,
                title:"금지어 관리",
                path:"menu5",
            }
        ]
    },
    {
        title:"회원 관리",
        icon: <RiIcons.RiUserLine size="18"/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown size="18"/>,
        childrens:[
            {
                id: 1,
                title:"전체 회원 정보",
                path:"menu6",
            },
            {
                id: 2,
                title:"포인트 관리",
                path:"menu7",
            },
            {
                id: 3,
                title:"출금 신청 관리",
                path:"menu8",
            },
            {
                id: 4,
                title:"로그 관리",
                path:"menu9",
            },
            {
                id: 5,
                title:"탈퇴 회원 관리",
                path:"menu10",
            }
        ]
    },
    {
        title:"1차 폴",
        icon: <AiIcons.AiOutlineUnorderedList size="18"/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown size="18"/>,
        childrens:[
            {
                id: 1,
                title:"전체 리스트",
                path:"menu11",
            },
            {
                id: 2,
                title:"대기중 리스트",
                path:"menu12",
            },
            {
                id: 3,
                title:"진행중 리스트",
                path:"menu13",
            },
            {
                id: 4,
                title:"종료된 리스트",
                path:"menu14",
            },
            {
                id: 5,
                title:"신청 리스트",
                path:"menu15",
            }
        ]
    },
    {
        title:"2차 폴",
        icon: <BsIcons.BsListCheck size="18"/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown size="18"/>,
        childrens:[
            {
                id: 1,
                title:"소메뉴1",
                path:"menu16",
            },
            { 
                id: 2,
                title:"소메뉴2",
                path:"menu17",
            },
            {
                id: 3,
                title:"소메뉴3",
                path:"menu18",
            },
            {
                id: 4,
                title:"소메뉴4",
                path:"menu19",
            },
            {
                id: 5,
                title:"소메뉴5",
                path:"menu20",
            }
        ]
    },
    
]

export default SidebarData;