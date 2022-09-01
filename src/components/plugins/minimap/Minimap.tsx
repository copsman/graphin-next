import Graphin, { Components, Utils } from '@antv/graphin';

const { MiniMap } = Components;

// Do not forget to import antd CSS in index.tsx\
// import "antd/dist/antd.css";

const MiniMapPlugin = () => {
  return (
        <MiniMap style={{'left': 10, 'bottom':10}} />
  );
};
export default MiniMapPlugin;