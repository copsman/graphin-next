import create from 'zustand'
import setESIcons from '../styles/elastic';
import setIcons from "../styles/graphine-icons";
import { Graph, GraphinContext } from '@antv/graphin';
import { useContext } from 'react';
export const useGraphData = create((set: Function) => ({
    selectedData: [],
    selectedSearch: '',
    selectedGraphContext: [],
    setData: (data:any) => set(({
        selectedData: data
    })),
    setSearch: (search:any) => set(({
        selectedSearch: search
    })),
    setGraphContext: (GraphContext:any) => set(({
        selectedGraphContext: GraphContext
    }))
}))
