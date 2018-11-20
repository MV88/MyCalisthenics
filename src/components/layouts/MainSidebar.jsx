import React from "react";
import {
    Link
} from "react-router-dom";
import {
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";
import Icon from "../presentation/Icon";

const MainSidebar = ({children}) => {
    const active = location.pathname.replace("/", "");

    return (<Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible width="thin">
        <Menu.Item as="div">
            LOGO
        </Menu.Item>
        <Link to="/dashboard">
            <Menu.Item as="div" active={active === "dashboard"}>
                <Icon name="gym-bars"/>Dashboard
            </Menu.Item>
        </Link>
        <Link to="/progresses">
            <Menu.Item as="div" active={active === "progresses"}>
                <Icon name="pull-up-posture"/>Progresses
            </Menu.Item>
        </Link>
        <Link to="/objectives">
            <Menu.Item as="div" active={active === "objectives"}>
                <Icon name="gym-bars"/>Objectives
            </Menu.Item>
        </Link>
    </Sidebar>

    <Sidebar.Pusher>
        <Segment basic>
            {children}
        </Segment>
    </Sidebar.Pusher>
</Sidebar.Pushable>);
};

export default MainSidebar;
