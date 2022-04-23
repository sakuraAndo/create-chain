<template>
  <div class="header-bar">
    <div class="header-content">
      <img src="@/assets/create-chain-logo.jpg">
      <ul>
        <li
          v-for="(item, index) in categoryList"
          :key="index"
          @click="goToDetail(item)"
        >
          <span>{{ item.name }}</span>
          <div
            v-if="item.children"
            class="sub-category"
          >
            <p
              v-for="(child,index) in item.children"
              :key="index"
              @click.stop="goToChildDetail(item, child)"
            >{{ child.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import categoryList from '@/model/title.js'
export default {
  name: "HeaderBar",
  data() {
    return {
      categoryList: categoryList,
    };
  },
  methods: {
    goToDetail(categoryItem) {
      this.$router.push(`/${categoryItem.path}`).catch(() => {});
    },
    goToChildDetail(item, child) {
      this.$router.push(`/${item.path}/${child.path}`).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  height: 70px;
  width: 100%;
  border-bottom: 1px solid black;
  //   background-color: #4b7be5;
  .header-content {
    height: 100%;
    width: 1400px;
    margin: 0 auto;
    img {
      width: 60px;
      height: 60px;
      display: inline-block;
      vertical-align: super;
    }
    ul {
      display: inline-block;
      margin-left: 330px;
    }
    li {
      float: left;
      text-align: center;
      height: 70px;
      width: 100px;
      line-height: 70px;
      position: relative;
      cursor: pointer;
      &:hover {
        background-color: #4b7be5;
        span {
          color: white;
        }
        .sub-category {
          display: block;
        }
      }
      .sub-category {
        width: 200px;
        position: absolute;
        top: 70px;
        left: 0;
        background: #fff;
        border-radius: 0 0 10px 10px;
        padding: 15px 0 15px 0;
        box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.2);
        display: none;
        p {
          height: 40px;
          width: 100%;
          line-height: 40px;
          text-align: left;
          padding-left: 20px;
          box-sizing: border-box;
          margin: 0;
          &:hover {
            background-color: #4b7be5;
          }
        }
      }
    }
  }
}
</style>