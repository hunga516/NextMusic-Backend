import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink, Route, Routes } from "react-router-dom";
import { DashboardNewSong } from ".";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import DashboardAlbum from "./DashboardAlbum";
import DashboardArtist from "./DashboardArtist";
import DashBoardHome from "./DashBoardHome";
import DashboardSongs from "./DashboardSongs";
import DashboardUser from "./DashboardUser";
import Header from "./Header";
import { FaUser } from "react-icons/fa";
import { IoMusicalNote } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoAlbumsOutline } from "react-icons/io5";
import { Logo } from "../assets/icon";
import HeaderDashboard from "./HeaderDashboard";
import { useLocation } from 'react-router-dom';


const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="w-full h-[100vh] flex flex-row justify-center bg-primary">
      <div className="flex flex-col px-8 py-6 flex gap-4 flex-[10%] border-r-[2px] bg-[#F9F9F9]">
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/home"}><Logo /></NavLink>
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/user"} className="flex font-sans flex-row items-center gap-2 font-semibold mt-4"><FaUser />  Người dùng </NavLink>
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/songs"} className="flex font-sans flex-row items-center gap-2 font-semibold" ><IoMusicalNote />  Bài hát </NavLink>
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/artist"} className="flex font-sans flex-row items-center gap-2 font-semibold" ><FaMicrophone />  Ca sĩ </NavLink>

        {/* prettier-ignore */}
        <NavLink to={"/dashboard/albums"} className="flex font-sans flex-row items-center gap-2 font-semibold" ><IoAlbumsOutline /> Albums </NavLink>
      </div>

      <div className="flex flex-col flex-[90%]">
        <HeaderDashboard currentPath={location.pathname} />
        <Routes>
          <Route path="/home" element={<DashBoardHome />} />
          <Route path="/user" element={<DashboardUser />} />
          <Route path="/songs" element={<DashboardSongs />} />
          <Route path="/artist" element={<DashboardArtist />} />
          <Route path="/albums" element={<DashboardAlbum />} />
          <Route path="/newSong" element={<DashboardNewSong />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
