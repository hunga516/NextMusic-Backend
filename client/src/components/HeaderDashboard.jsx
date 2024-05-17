import React from "react";

export const HeaderDashboard = ({ currentPath }) => {
    const pathContentMap = {
        '/dashboard/home': 'Trang chủ',
        '/dashboard/user': 'Người dùng hệ thống',
        '/dashboard/songs': 'Tất cả bài hát',
        '/dashboard/artist': 'Ca sĩ',
        '/dashboard/albums': 'Album và danh sách phát',
        '/dashboard/newSong': 'Bài hát / Thêm bài hát mới',
    };

    const content = pathContentMap[currentPath] || 'Unknown Dashboard';

    return (
        <div className="flex flex-row justify-between w-full p-6 bg-[#F9F9F9] border-b-[2px]">
            <div className="text-semibold font-md font-sans font-bold">{content}</div>
            <div className="flex items-center">
                <div className="bg-gray-300 rounded-full mr-2"></div>
                <div>Avatar</div>
            </div>
        </div>

    )
}

export default HeaderDashboard;