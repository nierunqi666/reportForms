import React from 'react';
import Chart from './Chart';
import List from './List';

export default class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       return (
            <div className="index">
                <Chart/>
                <List/>
            </div>
       )
    }
}
