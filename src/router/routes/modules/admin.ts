import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ADMIN: AppRouteRecordRaw = {
  path: '/admin',
  name: 'Admin',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.admin',
    requiresAuth: true,
    icon: 'icon-settings',
    order: 4,
  },
  children: [
    {
      path: 'class',
      name: 'Class',
      component: () => import('@/views/admin/class/index.vue'),
      meta: {
        locale: 'menu.admin.class',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'relation',
      name: 'Relation',
      component: () => import('@/views/admin/relation/index.vue'),
      meta: {
        locale: 'menu.admin.relation',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'fields',
      name: 'Fields',
      component: () => import('@/views/admin/fields/index.vue'),
      meta: {
        locale: 'menu.admin.fields',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'class-topo',
      name: 'ClassTopo',
      component: () => import('@/views/ci/topo/index.vue'),
      meta: {
        locale: 'menu.admin.classTopo',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default ADMIN;
