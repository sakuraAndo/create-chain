const categoryList = [
  { name: '首页', path: 'home' },
  {
    name: '发现藏品',
    path: 'collection',
    children: [
      { name: '藏品推荐', path: 'collectionRecommend' },
      { name: '我的关注', path: 'collectionFollow' },
    ],
  },
  {
    name: '优质文创',
    path: 'article',
    children: [
      { name: '热销推荐', path: 'articleHot' },
      { name: '我的关注', path: 'articleFollow' },
    ],
  },
  {
    name: '活动赛事',
    path: 'game',
    children: [
      { name: '最新赛事', path: 'newGame' },
      { name: '完结赛事', path: 'finishGame' },
    ],
  },
  {
    name: '区块链存证',
    path: 'chain',
    children: [
      { name: '在线存证', path: 'onlineProof' },
      { name: '查看我的存证', path: 'viewProof' },
    ],
  },
  {
    name: '我的',
    path: 'personal',
    children: [
      { name: '基本信息', path: 'baseicInfo' },
      { name: '我的藏品', path: 'personalCollection' },
      { name: '创作中心', path: 'createCenter' },
      { name: '我的收藏', path: 'personalLike' },
      { name: '我的赛事', path: 'personalGame' },
      { name: '退出登录', path: 'exitLogin' },
    ],
  },
];

export default categoryList;
