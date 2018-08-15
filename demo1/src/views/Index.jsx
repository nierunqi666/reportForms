import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import Route from '../router/route';

export default class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       return (
            <div className="index">
                <header>
                    <img src="../../public/img/1.jpg" alt=""/>
                    <ul>
                        <NavLink to="/index/workbench">工作台</NavLink>
                        <NavLink to="/index/examine">审批</NavLink>    
                        <NavLink to="/index/statistics">统计</NavLink>    
                        <NavLink to="/index/finance">财务</NavLink>    
                        <NavLink to="/index/setup">企业设置</NavLink>    
                    </ul>
                </header>
                <section>
                    <Route routes={this.props.routes}></Route>
                </section>
            </div>
       )
    }
}
