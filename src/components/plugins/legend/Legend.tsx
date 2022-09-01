import type { LegendChildrenProps } from '@antv/graphin';
import { Components } from '@antv/graphin';

const { Legend } = Components;

const LegendPlugin = () => {
  return (
      <Legend bindType="node" sortKey="nodeType" >
        {(renderProps: LegendChildrenProps) => {
          return <Legend.Node {...renderProps} />;
        }}
      </Legend>
  );
};

export default LegendPlugin;