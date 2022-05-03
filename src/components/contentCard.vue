<template>
  <div>
    <el-card
      shadow="hover"
      :body-style="{ padding: '0px' }"
    >
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      >
      <div class="card-middle-info" style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button
            type="text"
            class="button"
          >操作按钮</el-button>
        </div>
      </div>
      <div class="card-bottom-info">
        xxxx
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "contentCard",
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
      height: 80px;
      border-bottom: 1px solid #dcdfe6;
  }
  .card-bottom-info {
    width: 100%;
    height: 40px;
  }
}
</style>