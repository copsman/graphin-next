import React, { useContext, useEffect, useState } from 'react';
import { GraphEvent, GraphinContext } from '@antv/graphin';
import { useAutoSave, useGraphData } from '../states/graph_states';
import { GraphinNode } from '@antv/graphin/lib/typings/type';
import { getData, setData } from '../../common/api';
import { useQuery } from 'react-query';

const AutoSave: React.FC = () => {
    const {selectedData} = useGraphData()
    const {selectedAutoSave, setAutoSave} = useAutoSave()
    const { graph } = useContext(GraphinContext)
    const { isLoading, isFetching, error, data, status, refetch } = useQuery(["autosave"], getData);


    useEffect(() => {
        if(selectedAutoSave == true){
            console.log("true")
            graph.render();
            graph.destroyLayout();
            graph.changeData(selectedData);
            setAutoSave(false)
        }

        else{
            console.log("false")
        }
    },[selectedAutoSave, selectedData])

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
        setData(JSON.stringify(graph.save()))
        refetch()
    }

    useEffect(() => {
        //graph.setTextWaterMarker(['AntV', 'G6'])
        if (selectedData != null || selectedData != '') {
            graph.changeSize(graph.getContainer().clientWidth, graph.getContainer().clientHeight)
            graph.refreshPositions()
        }

    }, [selectedData])

    return (
        <>
        </>
    );
};

export default AutoSave;