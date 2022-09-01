import type { ContextMenuValue } from '@antv/graphin';
import { Components } from '@antv/graphin';
import { Menu, message } from 'antd';

const { ContextMenu } = Components;

const MyMenu = (value: ContextMenuValue) => {
    const handleClick = (e: { key: unknown }) => {
        const { onClose, id } = value;
        message.info(`${e.key}:${id}`);
        onClose();
    };

    return (
        <Menu onClick={handleClick}>
            <Menu.Item key="copy">Copy</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
            <Menu.Item key="tag">Tag</Menu.Item>
        </Menu>
    );
};

const ContextMenuPlugin = () => {
    return (
        <ContextMenu style={{ background: '#fff' }} bindType="node">
            {value => {
                return <MyMenu {...value} />;
            }}
        </ContextMenu>
    );
};
export default ContextMenuPlugin;