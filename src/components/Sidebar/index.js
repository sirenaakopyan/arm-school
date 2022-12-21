import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="school" onClick={toggle}>School</SidebarLink>
                <SidebarLink to="camp" onClick={toggle}>Camp</SidebarLink>
                <SidebarLink to="calendar" onClick={toggle}>Calendar</SidebarLink>
                <SidebarLink to="getInvolved" onClick={toggle}>Get Involved</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/enroll'>Enroll</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;