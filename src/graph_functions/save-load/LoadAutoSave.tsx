import { Utils } from '@antv/graphin';
import { AutoComplete, Button, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../common/api';
import { useAutoSave, useGraphData } from '../../states/graph_states';



const LoadAutoSave: React.FC = () => {
    const {setData} = useGraphData()
    const {setAutoSave} = useAutoSave()
    const { isLoading, isFetching, error, data, status, refetch } = useQuery(["autosave"], getData);
    const [isSaveLoading, setSaveLoading] = useState(false)
    const onClick = () => {
        setSaveLoading(true)
        setTimeout(() => {
            refetch()
            console.log(data)
            setData(data)
            setAutoSave(true)
            console.log("click")
            setSaveLoading(false)
        }, 1000)
    };
    // useEffect(() => {
        
    //     if(isSaveLoading && !isFetching){
    //         setSaveLoading(false)
    //     }

    //     console.log("FETCHing: ", isFetching)
    // }, [isSaveLoading,isFetching])

    return (
        <>
            <Button loading={isSaveLoading} onClick={onClick} type="primary">Load AutoSave</Button>
        </>
    );
};

export default LoadAutoSave;