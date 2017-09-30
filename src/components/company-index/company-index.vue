<template>
	<div>
		<menu-nav v-on:setDirection="setSlideDirection"></menu-nav>
		<transition v-bind:name="'slide-' + dir" mode="in-out">
			<router-view :cData="companyData.data"></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
import menuNav from './header.vue';
import Vue from 'Vue';
function fn () {
  // console.log(this.globalData);
  // console.log(this.$route.params);
  const id = this.$route.params.id;
  let that = this;
  that.$ajax({
    url: '/shopController/queryShopInfo',
    method: 'post',
    data: {
      jsonBody: {
        id: id
      }
    },
    headers: {'Content-Type': 'application/json'}
  })
  .then(function (ret) {
    Vue.set(that.companyData, 'data', ret.data.jsonBody[0]);
    console.log(that.companyData.data);
  });
};

export default{
  components: {
    menuNav
  },
  data: function () {
  	return {
    companyData: {
      data: {}
    },
    dir: 'left'
  };
  },
  methods: {
    setSlideDirection: function (dir) {
      console.log(dir);
      this.dir = dir;
    }
  },
  created: function () {
    fn.apply(this);
  }
};
</script>
<style type="text/css">
.slide-left-enter{
	transform: translateX(100%);
}
.slide-right-enter{
  transform: translateX(-100%);
}
.slide-left-enter-active,
.slide-right-enter-active{
	transition: 0.5s;
  z-index: 9;
}
.slide-left-leave,
.slide-right-leave{
  z-index: 0;
}
.m-content{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
}

.no-info{
  text-align: center;
  line-height: 50px;
  position: relative;
}
.no-info::after{
  content:'';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 90%;
  height: 1px;
  transform: translateX(-50%);
  background-color: #ccc;
}
</style>
