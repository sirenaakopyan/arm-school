import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="school">School</SidebarLink>
                <SidebarLink to="camp">Camp</SidebarLink>
                <SidebarLink to="calendar">Calendar</SidebarLink>
                <SidebarLink to="getInvolved">Get Involved</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/enroll'>Enroll</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;