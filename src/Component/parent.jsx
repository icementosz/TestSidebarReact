import React, { useState } from 'react';
import Sidebar from './sidebar';
import Kuy from './kuy';

function ParentComponent() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return (
        <div>
            <Sidebar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} onCloseSidebar={toggleSidebar} />
            <Kuy isSidebarActive={isSidebarActive} />
        </div>
    );
}

export default ParentComponent;
