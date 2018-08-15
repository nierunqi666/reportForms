import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import Route from '../../router/route';

export default class Statistics extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='statistics'>
                <div className="left">
                    <ul>
                        <NavLink to="/index/statistics/stat">费用统计</NavLink> 
                        <NavLink to="/index/statistics/chart">费用报表</NavLink>
                        <NavLink to="/index/statistics/query">查询</NavLink>
                        <NavLink to="/index/statistics/projectBudget">项目预算报表</NavLink>
                        <NavLink to="/index/statistics/departBudget">部门预算报表</NavLink>
                    </ul>
                </div>
                <div className="right">
                    <Route routes={this.props.routes}></Route> 
                </div>
            </div>
        )
    }
}
