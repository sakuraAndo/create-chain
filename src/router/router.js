import ChainHome from '@/page/ChainHome.vue';
import CollectionPage from '@/page/collection/CollectionPage.vue';
import CollectionRecommend from '@/page/collection/CollectionRecommend.vue';

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: ChainHome,
  },
  {
    path: '/collection',
    name: 'collection',
    redirect: '/collection/collectionRecommend',
    component: CollectionPage,
    children: [
      {
        path: 'collectionRecommend',
        component: CollectionRecommend,
      },
    ],
  },
];
