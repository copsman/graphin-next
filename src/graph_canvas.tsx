import React from "react";
import Graphin, { Behaviors, Utils } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import setIcons from "./styles/graphine-icons";
import { useGraphData } from "./states/graph_states";
import GraphContext from "./functions/GraphContext";
import MiniMapPlugin from "./components/plugins/minimap/Minimap";
import ContextMenuPlugin from "./components/plugins/contextMenu/ContextMenu";
import LegendPlugin from "./components/plugins/legend/Legend";
const { ZoomCanvas, FitView } = Behaviors;

export default function GraphTest() {
  const {selectedData} = useGraphData()
  var data:any = selectedData
  //console.log(selectedData)
  return (
      <Graphin enabledStack= {true} data={data} layout={{ type: "dagre" }}>
        <GraphContext />
        {/* <LegendPlugin /> */}
        <MiniMapPlugin />
        <ContextMenuPlugin />
        <FitView />
      </Graphin>
  );
}
