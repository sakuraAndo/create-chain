import ChainHome from '@/components/ChainHome.vue';
import CollectionPage from '@/components/collection/CollectionPage.vue';
import CollectionRecommend from '@/components/collection/CollectionRecommend.vue';

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
