<template>
  <div class="chain-home">
    <el-carousel indicator-position="outside">
      <el-carousel-item
        v-for="item in ['carousel', 'laptop', 'blockchain2', 'blockchain-applications']"
        :key="item"
        :style="calBackImg(item)"
      >
      </el-carousel-item>
    </el-carousel>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="用户管理"
        name="first"
      >
        <span slot="label"><i class="el-icon-s-home"></i> 首页推荐</span>
        <div class="home-img">
          <content-card v-for="item in 20" :key="item" :num="item"></content-card>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="配置管理"
        name="second"
      >
        <span slot="label"><i class="el-icon-share"></i> 佳作分享</span>
        配置管理
      </el-tab-pane>
      <el-tab-pane
        label="角色管理"
        name="third"
      >
        <span slot="label"><i class="el-icon-s-opportunity"></i> 最新作品</span>
        角色管理
      </el-tab-pane>
      <el-tab-pane
        label="定时任务补偿"
        name="fourth"
      >
        <span slot="label"><i class="el-icon-star-on"></i> 我的关注</span>
        定时任务补偿
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import contentCard from '@/components/contentCard.vue';

export default {
  components: { contentCard },
  name: "ChainHome",
  data() {
    return {
      activeName: "first",
      img: require("../assets/carousel.jpg"),
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  computed: {
    calBackImg() {
      return (img) => {
        return { "background-image": `url(${require(`@/assets/${img}.jpg`)})` };
      };
    },
  },
};
</script>

<style lang="scss">
.chain-home {
  width: 1200px;
  margin: 0 auto;
}
.el-carousel {
  margin-top: 20px;
  border-radius: 10px;
  .el-carousel__arrow {
    width: 60px;
    height: 60px;
    i {
      font-size: 25px;
    }
  }
}
.el-carousel__item {
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/carousel.jpg");
}
.home-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>