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
        <div id="picture" class="picture"></div>
        <div class="info-name">
            <div id="wareName" class="name">{{data.data.name}}</div>
            <div id="description" class="description">{{data.data.descs}}</div>
        </div>
        <div class="info-price">
            <div id="price" class="price">¥{{data.data.discountPrice.toFixed(2)}}</div>
            <div class="other">
                <div class="origin-price">
                    <del id="originPrice">原价：{{data.data.marketPrice.toFixed(2)}}</del>
                </div>
                <div id="detail" class="place">{{data.data.spec}}</div>
            </div>
        </div>
        <div class="detail-img-wrap">
            <img src="" alt="">
        </div>

    </section>
	</div>
</template>
<script>
import Vue from 'vue';

function fn () {
  const id = this.$route.params.id;
  let that = this;
  that.$ajax({
    url: '/productController/queryProductInfo',
    method: 'post',
    data: {
      jsonBody: {
        id: id
      }
    },
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  })
  .then(function (ret) {
  	Vue.set(that.data, 'data', ret.data.jsonBody[0]);
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
	.flex {
            display:-webkit-box;
            display:-webkit-flex;
            display:        flex;
        }
        .flex_item {
            -webkit-box-flex:1;
            -webkit-flex:1;
            flex:1;
        }
        .ellipsis-line{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .info-name {
            box-sizing: border-box;
            width: 100%;
            padding: 8px;
        }

        .info-name .name {
            width: 100%;
            min-height: 24px;
            line-height: 24px;
            color: #444;
            font-size: 18px;
        }

        .info-name .description {
            width: 100%;
            min-height: 20px;
            line-height: 20px;
            color: #888;
            font-size: 14px;
        }

        .info-price {
            box-sizing: border-box;
            width: 100%;
            height: 61px;
            padding-top: 8px;
            padding-left: 8px;
            border-bottom: 1px solid #ddd;
        }

        .info-price .price {
            width: 100%;
            height: 24px;
            line-height: 24px;
            color: #e3007f;
            font-size: 24px;
            font-weight: bolder;
        }

        .info-price .other {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-flex-flow: row;
            flex-flow: row;
            width: 100%;
            height: 20px;
        }

        .info-price .other div {
            width: 100%;
            height: 20px;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            line-height: 20px;
            font-size: 14px;
            color: #888;
        }

        .info-price .other .origin-price {
            box-sizing: border-box;
            padding-left: 8px;
            text-align: left;
        }

        .info-price .other .unit {
            box-sizing: border-box;
            text-align: center;
        }

        .info-price .other .place {
            box-sizing: border-box;
            padding-right: 16px;
            text-align: right;
        }
        .detail-img-wrap{
            padding: 10px;
        }
        .detail-img-wrap img{
            width: 100%;
        }
</style>