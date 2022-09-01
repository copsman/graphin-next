import React, { useContext, useEffect, useState } from 'react';
import { GraphEvent, GraphinContext } from '@antv/graphin';
import { useGraphData } from '../states/graph_states';
import { GraphinNode } from '@antv/graphin/lib/typings/type';

const GraphContext: React.FC = () => {
    const { selectedGraphContext, selectedData, setGraphContext, selectedSearch } = useGraphData()
    const { graph } = useContext(GraphinContext)
    const [stateWidth, setStateWidth]: any = useState(graph.getContainer().clientWidth)


    //console.log("render")
    //console.log(graph['cfg']['data'])
    useEffect(() => {
        // listen to the node click event
        graph.on('node:dragend', handleNodeClick);

    }, [graph])
    function handleNodeClick(event: GraphEvent) {
        const item = event.item;
        console.log(graph.save())
        // animately move the graph to focus on the item.
        // the second parameter controlls whether move with animation, the third parameter is the animate configuration
        graph.focusItem(item, true, {
            easing: 'easeCubic',
            duration: 500,
        });
    }
    
    useEffect(() => {
        console.log("ggg")
        console.log(selectedData)
        //graph.destroyLayout()
        //graph.read(selectedData)
        graph.render()
        graph.destroyLayout()
        graph.changeData(selectedData)
        //graph.refreshPositions()
        //graph.render()
        //graph.setTextWaterMarker(['AntV', 'G6'])
        //const str:any = "account_7"
        //console.log(graph.findById(selectedSearch))
        //const item = graph.findById(selectedSearch)
        //graph.focusItem(selectedSearch)
        // if(item != null){
        //     item.hide()
        // }
    }, [graph['cfg']['data'], selectedData])

    useEffect(() => {
        console.log(stateWidth)
    }, [stateWidth])

    useEffect(() => {
        //graph.setTextWaterMarker(['AntV', 'G6'])
        if (selectedSearch != null || selectedSearch != '') {
            graph.changeSize(graph.getContainer().clientWidth, graph.getContainer().clientHeight)
            graph.refreshPositions()
            const str: any = "account_7"
            console.log(graph.findById(selectedSearch))
            const item = graph.findById(selectedSearch)
            graph.focusItem(item)
            console.log("done")
            // if(item != null){
            //     item.hide()
            // }
        }

    }, [selectedSearch])
    //graph.render()
    return (
        <>
        </>
    );
};

export default GraphContext;