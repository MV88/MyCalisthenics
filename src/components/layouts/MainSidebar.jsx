import React from "react";
import {
    Divider,
    Header,
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";
import Icon from "../presentation/Icon";

const MainSidebar = () => (<Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible width="thin">
        <Divider/>
        <Menu.Item as="a" active>
            <Icon name="gym-bars"/>Dashboard
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="pull-up-posture"/>Progresses
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="gym-bars"/>Objectives
        </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
        <Segment basic>
            <Header as="h3">Application Content</Header>
            <div className="ui left icon">
                d
            </div>
        </Segment>
    </Sidebar.Pusher>
</Sidebar.Pushable>);

export default MainSidebar;
