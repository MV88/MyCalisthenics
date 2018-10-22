import React from "react";
import { Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const MainSidebar = () => (
    <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible width="thin">
            <Menu.Item as="a">
                <Icon name="home" />
                Dashboard
            </Menu.Item>
            <Menu.Item as="a">
                <Icon name="tasks" />
                Progresses
            </Menu.Item>
            <Menu.Item as="a">
                <Icon name="table" />
                Objectives
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
            <Segment basic>
                <Header as="h3">Application Content</Header>
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default MainSidebar;
