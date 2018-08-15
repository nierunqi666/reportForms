import React from 'react';
import Chart from '../../Chart';
import List from '../../List';

export default class ProjectBudget extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='project'>
                <Chart/>
                <List/>
            </div>
        )
    }
}