//一级
import Index from '../views/Index';
//二级
import Workbench from '../views/index/Workbench';
import Examine from '../views/index/Examine';
import Statistics from '../views/index/Statistics';
import Finance from '../views/index/Finance';
import Setup from '../views/index/Setup';
//三级
import Stat from '../views/index/statistics/Stat';
import Chart from '../views/index/statistics/Chart';
import Query from '../views/index/statistics/Query';
import ProjectBudget from '../views/index/statistics/ProjectBudget';
import DepartBudget from '../views/index/statistics/DepartBudget';


export default {
    routes: [{
        path: '/index',
        name: 'index',
        component: Index,
        children: [{
            path: '/index/workbench',
            name: 'workbench',
            component: Workbench,
        }, {
            path: '/index/examine',
            name: 'examine',
            component: Examine,
        }, {
            path: '/index/statistics',
            name: 'statistics',
            component: Statistics,
            children: [{
                path: '/index/statistics/stat',
                name: 'stat',
                component: Stat
            }, {
                path: '/index/statistics/chart',
                name: 'chart',
                component: Chart
            }, {
                path: '/index/statistics/query',
                name: 'query',
                component: Query
            }, {
                path: '/index/statistics/projectBudget',
                name: 'projectBudget',
                component: ProjectBudget
            }, {
                path: '/index/statistics/departBudget',
                name: 'departBudget',
                component: DepartBudget
            }]
        }, {
            path: '/index/finance',
            name: 'finance',
            component: Finance,
        }, {
            path: '/index/setup',
            name: 'setup',
            component: Setup,
        }]
    }]
}