<template>
  <div class="m-content">
		<div class="tab-panel-item">
            <article class="m-list list-theme1">
                <div class="list-item" v-for="pros in cData.productDtos">
                    <a v-bind:href="'/company/#/goods/'+pros.id">
                        <div class="list-img">
                            <img v-bind:src="baseUrl + pros.fxbPictureVideo[0].pvUrl">
                        </div>
                        <div class="list-mes">
                            <h3 class="list-title">{{pros.name}}</h3>
                            <div class="list-mes-item">
                                <div>
                                    <span class="list-price"><em>¥</em>{{pros.discountPrice.toFixed(2)}}</span>
                                    <span class="list-del-price">¥{{pros.marketPrice.toFixed(2)}}</span>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </a>
                </div>                
            </article>
        </div>
        <div class="no-info" n-if="cData.activityDtos.length == 0">
            没有商品信息
        </div>
  </div>
</template>
<script type="text/javascript">
export default{
  props: ['cData'],
  data () {
    return {
      baseUrl: this.baseImageUrl || ''
    };
  }

};
</script>
<style type="text/css">
	.goods{
		height: 600px;
		background-color: #000;
	}
</style>