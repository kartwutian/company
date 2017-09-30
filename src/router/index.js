import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Company from '@/components/company-index/company-index';
import Activity from '@/components/activity/activity';
import Goods from '@/components/goods/goods';
import CompanyInfo from '@/components/company-index/company-info';
import CompanyGoods from '@/components/company-index/company-goods';
import CompanyActivity from '@/components/company-index/company-activity';
import CompanyJobs from '@/components/company-index/company-jobs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/company/:id',
      // name: 'company',
      component: Company,
      children: [
        {
          name: 'info',
          path: '',
          component: CompanyInfo
        },
        {

          name: 'c-goods',
          path: 'goods',
          component: CompanyGoods
        },
        {
          name: 'c-activity',
          path: 'activity',
          component: CompanyActivity
        },
        {
          name: 'c-jobs',
          path: 'jobs',
          component: CompanyJobs
        }
      ]
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: Activity
    },
    {
      path: '/goods/:id',
      name: 'goods',
      component: Goods
    }
  ]
});
