import React, { useContext, useEffect, useState } from 'react';
import {GraphinContext } from '@antv/graphin';
import { useGraphData } from '../states/graph_states';

const GraphContext: React.FC = () => {
    const {selectedGraphContext,selectedData, setGraphContext, selectedSearch} = useGraphData()
    const {graph} = useContext(GraphinContext)
    const [stateWidth, setStateWidth]:any = useState(graph.getContainer().clientWidth)

    
        //console.log("render")
        //console.log(graph['cfg']['data'])
        useEffect(() => {
            console.log("ggg")
            graph.render()
            //graph.setTextWaterMarker(['AntV', 'G6'])
            //const str:any = "account_7"
            //console.log(graph.findById(selectedSearch))
            //const item = graph.findById(selectedSearch)
            //graph.focusItem(selectedSearch)
            // if(item != null){
            //     item.hide()
            // }
        },[graph['cfg']['data']])

        useEffect(() => {
            console.log(stateWidth)
        }, [stateWidth])

        useEffect(() => {
            //graph.setTextWaterMarker(['AntV', 'G6'])
            if(selectedSearch != null || selectedSearch != ''){
                graph.changeSize(graph.getContainer().clientWidth, graph.getContainer().clientHeight)
                graph.refreshPositions()
                const str:any = "account_7"
                console.log(graph.findById(selectedSearch))
                const item = graph.findById(selectedSearch)
                graph.focusItem(item)
                console.log("done")
                // if(item != null){
                //     item.hide()
                // }
            }
            
        },[selectedSearch])
        //graph.render()
    return (
        <>
        </>
    );
};

export default GraphContext;