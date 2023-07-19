import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CI: AppRouteRecordRaw = {
  path: '/ci',
  name: 'CI',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.ci',
    requiresAuth: true,
    icon: 'icon-home',
    order: 1,
  },
  children: [
    {
      path: 'list',
      name: 'CIList',
      component: () => import('@/views/ci/list/index.vue'),
      meta: {
        locale: 'menu.ci.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'topo',
      name: 'CITopo',
      component: () => import('@/views/ci/topo/index.vue'),
      meta: {
        locale: 'menu.ci.topo',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'draft',
      name: 'CIDraft',
      component: () => import('@/views/ci/draft/index.vue'),
      meta: {
        locale: 'menu.ci.draft',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default CI;
