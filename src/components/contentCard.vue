<template>
  <div>
    <el-card
      shadow="hover"
      :body-style="{ padding: '0px' }"
    >
      <img
        src="../assets/digital-collection.jpg"
        class="image"
      >
      <div
        class="card-middle-info"
        style="padding: 14px;"
      >
        <span>数字藏品{{ num }}</span>
        <el-button
          type="text"
          class="button"
        >操作按钮</el-button>
        <div><span>详细的说明</span></div>
      </div>
      <div class="card-bottom-info">
        <div class="user-circle"></div>
        <span>对应的名字</span>
        <div class="time-info">一天前</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "contentCard",
  props: {
    num: Number
  }
};
</script>

<style lang="scss">
.el-card {
  border-radius: 10px;
  width: 220px;
  margin-bottom: 30px;
  .image {
    width: 100%;
  }
  &:nth-child(4n) {
    margin-right: 0px;
  }
  .card-middle-info {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dcdfe6;
    position: relative;
    .button {
      position: absolute;
      top: 6px;
      right: 40px;
    }
    > div {
      span {
        font-size: 12px;
        color: gray;
      }
    }
  }
  .card-bottom-info {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .user-circle {
      width: 30px;
      height: 30px;
      background-color: blueviolet;
      border-radius: 50%;
      margin-left: 15px;
      margin-right: 15px;
    }
    span {
      font-size: 12px;
    }
    .time-info {
      font-size: 12px;
      color: gray;
      margin-left: 50px;
    }
  }
}
</style>