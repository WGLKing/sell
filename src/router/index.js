import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',              // 设置默认选中时的样式
  routes: [
    {path: '/', redirect: 'goods'},  // 默认跳转到goods也可以用redirect重定向路由
    {path: '/goods', name: 'goods', component: goods},
    {path: '/ratings', name: 'ratings', component: ratings},
    {path: '/seller', name: 'seller', component: seller}
  ]
});
