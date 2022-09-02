import { Utils } from '@antv/graphin';
import { AutoComplete, Button, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../common/api';
import { useAutoSave, useGraphData } from '../states/graph_states';



const ClearCanvas: React.FC = () => {
    const {setData} = useGraphData()
    const {setAutoSave} = useAutoSave()
    const { isLoading, isFetching, error, data, status, refetch } = useQuery(["autosave"], getData);

    const onClick = () => {
        setData([])
    };

    return (
        <>
            <Button onClick={onClick} type="primary">Clear Canvas</Button>
        </>
    );
};

export default ClearCanvas;