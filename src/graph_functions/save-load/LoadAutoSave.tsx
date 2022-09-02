import { Utils } from '@antv/graphin';
import { AutoComplete, Button, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../common/api';
import { useAutoSave, useGraphData } from '../../states/graph_states';



const LoadAutoSave: React.FC = () => {
    const {setData} = useGraphData()
    const {setAutoSave} = useAutoSave()
    const { isLoading, isFetching, error, data, status, refetch } = useQuery(["autosave"], getData);

    const onClick = () => {
        refetch()
        console.log(data)
        setData(data)
        setAutoSave(true)
        console.log("click")
    };

    return (
        <>
            <Button onClick={onClick} type="primary">Load AutoSave</Button>
        </>
    );
};

export default LoadAutoSave;