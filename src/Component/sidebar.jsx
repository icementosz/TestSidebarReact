import SCSS from './stylesidebarcss.module.css'
import React, { createContext, useContext, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Sidebar({ isSidebarActive, toggleSidebar, onCloseSidebar }) {
    const handleToggleSidebar = () => {
        toggleSidebar();
        if (!isSidebarActive) {
            onCloseSidebar();
        }
    };
    
// const [isSidebarActive, setIsSidebarActive] = useState(false);
// const toggleSidebar = () => {
//     setIsSidebarActive(!isSidebarActive);
// };
    return (
        <div className="">
            <div className={SCSS['hamburger-menu']} onClick={handleToggleSidebar}>
                <i class="fas fa-bars"></i>
            </div>

            <div className={`${SCSS.sidebar} ${isSidebarActive ? SCSS.active : ''}`}>
                <div className={SCSS['logo-details']}>
                    <div className="">
                        <svg viewBox="0 0 512 512" class=""><g><path fill="#1fc091" d="M317.633 56.851H194.37a51.19 51.19 0 0 0-51.134 51.129v38.454h33.724V107.98a17.425 17.425 0 0 1 17.41-17.4h123.263a17.424 17.424 0 0 1 17.409 17.405v38.454h33.725V107.98a51.191 51.191 0 0 0-51.134-51.129z" opacity="1" data-original="#1fc091"></path><rect width="496" height="317.092" x="8" y="138.057" fill="#008d67" rx="24.215" opacity="1" data-original="#008d67"></rect><path fill="#019f74" d="M479.785 138.057H49.69v251.358a40.709 40.709 0 0 0 40.71 40.709H504V162.272a24.214 24.214 0 0 0-24.215-24.215z" opacity="1" data-original="#019f74"></path><path fill="#ffffff" d="M345.36 264.822h-57.654v-57.641h-63.412v57.641H166.64v63.413h57.654v57.653h63.412v-57.653h57.654z" opacity="1" data-original="#ffffff"></path><path fill="#4fd79c" d="M317.637 56.851H194.37a50.9 50.9 0 0 0-32.93 12.057 50.789 50.789 0 0 0-5.893 23.79v26.2a12.251 12.251 0 0 0 12.253 12.253h9.161V107.98a17.429 17.429 0 0 1 12.38-16.658c.706-8.957 8.2-9.933 17.34-9.933h112.594a28.078 28.078 0 0 1 28.078 28.078v9.433a12.252 12.252 0 0 0 12.253 12.252h9.161V107.98a51.13 51.13 0 0 0-51.13-51.129z" opacity="1" data-original="#4fd79c" class=""></path></g></svg>
                    </div>
                    <span className={SCSS['logo_name']}>CLINIC</span>
                </div>
                <ul className={SCSS['nav-links']}>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-chart-line"></i>
                            <span className={SCSS['link_name']}>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-user-pen"></i>
                            <span className={SCSS['link_name']}>Manage User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <span className={SCSS['link_name']}>Logout</span>
                        </a>
                    </li>
                </ul>
                <div className={SCSS['profile-detail']}>
                    <div className="">
                        <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcdb18a94cf3e9b3e/64b5073aebf1bb4cd8c89250/Marcus_Rashford(1).jpg?auto=webp&format=pjpg&width=3840&quality=60" alt="profile" />
                    </div>
                    <div className={SCSS['profile-info']}>
                        <div className="">Hi</div>
                        <div className="">Mr. Rashford</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;