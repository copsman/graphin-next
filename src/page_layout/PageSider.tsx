import {
    DesktopOutlined,
    SaveOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    SearchOutlined
} from "@ant-design/icons";
import { Divider, Drawer, MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import ClearCanvas from "../graph_functions/ClearCanvas";
import LoadAutoSave from "../graph_functions/save-load/LoadAutoSave";
import SearchBar from "../graph_functions/SearchBar"

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    }
}

const items: any = [
    getItem("Search", "Search", <SearchOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "Tom"),
        getItem("Bill", "4"),
        getItem("Alex", "5")
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8")
    ]),
    getItem("Saves", "9", <SaveOutlined />)
];

const { Sider } = Layout;


const PageSider: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const [collapsed, setCollapsed] = useState(true);
    const [search, setSearch]: any = useState(null)
    const handleClick = (e: { key: unknown }) => {
        if (e.key == "Search") {
            //setSearch("hii")
            showDrawer()
            // <SearchBar />
        }
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
                <div>
                <SearchBar />
                </div>
                <Divider />
                <div>
                    <ClearCanvas />
                </div>
                <Divider />
                <div>
                <LoadAutoSave />
                </div>
            </Drawer>
            <Menu onClick={handleClick}
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />

        </Sider>
    );
};

export default PageSider;
