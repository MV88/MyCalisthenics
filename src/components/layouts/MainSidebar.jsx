import React from "react";
import {
    Header,
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";
import Icon from "../presentation/Icon";

const MainSidebar = ({
    active = "dashboard",
    onChangePage = () => {}
}) => {
    return (<Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible width="thin">
        <Menu.Item as="a">
            LOGO
        </Menu.Item>
        <Menu.Item as="a" active={active === "dashboard"} onClick={() => onChangePage("dashboard")}>
            <Icon name="gym-bars"/>Dashboard
        </Menu.Item>
        <Menu.Item as="a" active={active === "progress"} onClick={() => onChangePage("progress")}>
            <Icon name="pull-up-posture"/>Progresses
        </Menu.Item>
        <Menu.Item as="a" active={active === "objective"} onClick={() => onChangePage("objective")}>
            <Icon name="gym-bars"/>Objectives
        </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
        <Segment basic>
            <Header as="h3">Application Content</Header>
        </Segment>
    </Sidebar.Pusher>
</Sidebar.Pushable>);
};

export default MainSidebar;
