<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'seller'}">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  import {urlParse} from '@/common/js/util';
  import header from '@/components/header/header.vue';

  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
//            console.log(queryParam);
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.axios.get('/api/seller?id=' + this.seller.id).then((res) => {
        res = res.data;
//        console.log(res.data);
        if (res.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, res.data); // 给对象扩展属性
          console.log(this.seller.id);
//          console.log('ok');
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
