import React from 'react';

export default class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="list">
               <div className="header">
                    <h3>项目预算报表</h3>
                    <input type="text" placeholder='1月'/>
               </div>
               <div className="list-content">
               <div className="panel panel-default">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">费用承担人</th>
                                <th scope="col">金额</th>
                                <th scope="col">占比</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
               </div>
            </div>
        )
    }
}
