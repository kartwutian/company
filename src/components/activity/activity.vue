<template>
<div class="products">
    <div class="headimg">
        <yd-slider autoplay="3000" speed="500">
            <yd-slider-item v-for="slide in data.data.fxbPictureVideo" :key="slide.pvId">
              <a href="javascript:;">
                  <img v-bind:src="baseUrl + slide.pvUrl">
              </a>
            </yd-slider-item>
        </yd-slider>
    </div>
     <section>
        <div class="m-cell" style="margin-bottom: 0;">
            <div class="cell-item" style="line-height: 0.8rem;font-size: 14px;padding: 0.2rem;" >
                <div >{{data.data.name}}</div>
            </div>

        </div>
        <div class="m-cell" style="margin-bottom: 0;">
            <a class="cell-item" href="javascript:;">
                <div class="cell-left"><i class="cell-icon icon-clock"></i>活动时间:</div>
                <div class="cell-right ">{{data.data.starttime}}~~{{data.data.endtime}}</div>
            </a>

        </div>

    </section>
    <div class="m-celltitle" style="color: #333;line-height: 2;">活动详情:</div>
    <div style="padding: 0.24rem; font-size: 14px;line-height: 1.8;">
        {{data.data.content}}
    </div>
</div>
</template>
<script>
import Vue from 'vue';
function fn () {
  const id = this.$route.params.id;
  let that = this;
  that.$ajax({
    url: '/activityController/activity/' + id,
    method: 'get',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  })
  .then(function (ret) {
  	Vue.set(that.data, 'data', ret.data.jsonBody);
  	console.log(that.data);
  });
}
export default {
  data () {
  	return {
  	baseUrl: this.baseImageUrl,
    data: {
    	data: {}
    }
  };
  },
  created () {
    fn.apply(this);
  }
};
</script>
<style type="text/css">

</style>