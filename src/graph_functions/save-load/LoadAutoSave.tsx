import { Utils } from '@antv/graphin';
import { AutoComplete, Button, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../common/api';
import { useGraphData } from '../../states/graph_states';



const LoadAutoSave: React.FC = () => {
    const {selectedData, setSearch, selectedSearch, setData} = useGraphData()
    const { isLoading, isFetching, error, data, status } = useQuery([], getData);

    const onClick = () => {
        console.log(data)
        setData(data)
        console.log("click")
    };

    return (
        <>
            <Button onClick={onClick} type="primary">Load AutoSave</Button>
        </>
    );
};

export default LoadAutoSave;