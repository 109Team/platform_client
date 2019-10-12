<template>
  <div class="home_page">
    <header>
      <span>
        <Icon type="ios-contact" style="font-size: 32px;" />
        {{ homePageTitle }}
      </span>
      <ul class="header_items">
        <li><i class="ivu-icon ivu-icon-md-help-circle" style="font-size: 18px; cursor: pointer;" :title="help"></i></li>
        <li>{{ currentTime }}</li>
      </ul>
    </header>
    <div class="content">
      <ul v-if="!isOpenDetail && shoppingDatas.length">
        <li class="container" v-for="shop in shoppingDatas" :key="shop.ID" @click="detail(shop.ID)">
          <img :src="shop.IMGURL" alt="">
          <p>{{ shop.DESCRIBE }}</p>
          <span style="font-size: 18px; color: red; padding: 0 0 0 10px;">{{ shop.PRICE.split('.')[0] }}</span>
          <span style="font-size: 14px; color: red;" v-if="shop.PRICE.split('.')[1]">.{{ shop.PRICE.split('.')[1] }}</span>
        </li>
      </ul>
      <div style="font-size: 48px; margin-top: 300px; color: #666;" v-if="!isOpenDetail && !shoppingDatas.length">暂无数据</div>
    </div>
    <detail ref="shoppingDetail" :detailData="detailData" v-if="isOpenDetail"></detail>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import detail from '../views/shoppingDetail'

export default {
  components: {
    detail
  },
  data () {
    return {
      homePageTitle: this.$i18n.homePage_title,
      currentTime: this.$moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
      help: this.$i18n.homePage_help,
      shoppingDatas: [],
      detailData: {},
      isOpenDetail: false
    }
  },
  created () {
    this.setShoppingData()
  },
  computed: {
    ...mapState({
      shoppingData: ({ homepage }) => homepage.shoppingData
    }),
    // ...mapGetters('homepage', ['shoppingData'])
  },
  watch: {
    shoppingData: {
      handler(newArr, oldArr) {
        if (newArr && newArr.length !== 0) {
          this.shoppingDatas = newArr
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['setShoppingData']),
    detail(id) {
      this.shoppingDatas.forEach(item => {
        if (item.ID === id) {
          this.isOpenDetail = !this.isOpenDetail
          this.detailData = item
        }
      })
    }
  }
}
</script>

<style lang="">
  .home_page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #eee;
  }
  header {
    width: 100%;
    height: 72px;
    overflow: hidden;
    padding: 0 30px;
    background: rgb(20, 52, 89);
    color: #fff;
  }
  header span {
    float: left;
    line-height: 72px;
    font-size: 24px;
  }
  .header_items {
    float: right;
    line-height: 72px;
    overflow: hidden;
  }
  .header_items li {
    float: left;
    margin: 0 10px;
    font-size: 14px;
  }
  .content {
    width: 960px;
    margin: 0 auto;
  }
  .container {
    width: 20%;
    height: 300px;
    border-radius: 10px;
    border: 1px solid #ddd;
    float: left;
    margin: 10px 2.5%;
    overflow: hidden;
    text-align: left;
    cursor: pointer;
  }
  .container img {
    width: 100%;
    height: 75%;
  }
  .container p {
    text-align: left;
    padding: 0 5px;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
    overflow: hidden;
  }
</style>
