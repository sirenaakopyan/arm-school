import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggleState }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleState}>
      <Icon onClick={toggleState}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggleState}>
            About
          </SidebarLink>
          <SidebarLink to='school' onClick={toggleState}>
            School
          </SidebarLink>
          <SidebarLink to='camp' onClick={toggleState}>
            Camp
          </SidebarLink>
          <SidebarLink to='calendar' onClick={toggleState}>
            Calendar
          </SidebarLink>
          <SidebarLink to='getInvolved' onClick={toggleState}>
            Get Involved
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/enroll'>Enroll</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
