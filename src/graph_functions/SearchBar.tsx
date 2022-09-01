import { Utils } from '@antv/graphin';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import React, { useContext, useState } from 'react';
import { GI_LOCAL_DATA } from '../data/GI_DATA';
import { useGraphData } from '../states/graph_states';
import setIcons from '../styles/graphine-icons';

const getNames = (str:any) => {
    const values:any[] = [];
    str.nodes.map((item:any) => {
        values.push({
            value: item.id,
            label: <div>{"ID: " + item.id}</div>
        })
    })
    console.log(values)
    return (values)
}

const SearchBar: React.FC = () => {
    // const [value, setValue] = useState('');
    const [options, setOptions]:any = useState([]);
    const {selectedData, setSearch, selectedSearch, setData} = useGraphData()
    const data1 = Utils.mock(5).circle().graphin();
    const onSearch = (searchText: string) => {
        console.log("click")
        setOptions(
            getNames(GI_LOCAL_DATA)
        );
    };

    const onSelect = (data: string) => {
        console.log('onSelect', data);
        setSearch(data)
        if(data == "account_7"){
            setData(setIcons())
        }
        else if(data == null || data == ''){
            setData([])
        }
        else{
            setData(setIcons())
        }
        
    };

    const onChange = (data: string) => {
        console.log("Here")
        if(data == null || data == ''){
            setData([])
        }
    };

    const onClear = () => {
        console.log("delete")
        setData([])
    };

    const onClick = () => {
        console.log("click")
        //setData([])
    };

    return (
        <>
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                onClear={onClear}
                //onClick={onClick}
                clearIcon = {true}
                filterOption={(inputValue, option:any) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
            >
                <Input.Search size="large" placeholder="input here" onSearch={onSelect} allowClear enterButton/>
            </AutoComplete>
        </>
    );
};

export default SearchBar;