<template>
	<div class="m-content">
		<slide :slides="cData.fxbPictureVideo"></slide>
		<info :info="cData"></info>
	</div>
	
</template>
<script type="text/javascript">
import Slide from './index/slide';
import Info from './index/info';

export default{
  props: ['cData'],
  data () {
    return {};
  },
  components: {
    slide: Slide,
    info: Info
  },
  created () {
  }
};
</script>
<style type="text/css">
	.flex {
        display:-webkit-box;
        display:-webkit-flex;
        display:        flex;
    }
    .company-info .flex_item {
        -webkit-box-flex:1;
        -webkit-flex:1;
        flex:1;
    }
    .ellipsis-line{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .company-info .item{
        border-bottom: 1px solid #ddd;
        margin: 0 10px;
    }
    .company-info .left{
        padding: 0 10px;
        font-size: 14px;
        line-height: 25px;
    }
    .company-info .left .job_about{
        color: #999;
        font-size: 12px;
    }
    .company-info .right{
        line-height: 25px;
        padding: 0 10px;
        font-size: 14px;
        text-align: right;
    }
    .company-info .right .salary{
        color: #f36;
    }
    .company-info .right .job_start_time{
        color: #999;
        font-size: 12px;

    }

    .company-info-item{
        line-height:.8rem;
        font-size: 14px;
    }
    .company-info-item .cell-icon:before{
        color: #ceb863;
    }
    .desc{
        line-height: .8rem;
        font-size: 14px;
    }
</style>