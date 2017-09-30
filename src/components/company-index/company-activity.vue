<template>
  <div class="m-content">
		<div class="tab-panel-item">
            <div class="m-cell" v-for="active in cData.activityDtos" :key="active.id">
                <a v-bind:href="'/company/#/activity/'+active.id">
                    <div class="cell-item" style="padding-left: 0;">
                        <div class="flex_item desc ellipsis-line">{{active.name}}
                        </div>
                        <div class="desc" style="padding: 0 0.2rem;color:#03a9f4;width:30%">进行中</div>
                    </div>
                    <div class="m-slider"><!-- 参数在这里 -->
                        <div class="slider-wrapper">
                            <div class="slider-item">
                                <img v-bind:src="baseUrl + active.fxbPictureVideo[0].pvUrl">
                            </div>
                        
                        </div>
                        <div class="slider-pagination"></div><!-- 分页标识 -->
                    </div>
                    <div class="cell-item" style="padding-left: 0;">
                        <div class=" desc" style="padding-right: 0.1rem;">活动时间:</div>
                        <div class="desc flex_item ellipsis-line" >{{active.starttime}} ~~{{active.endtime}}</div>
                    </div>
                </a>
            </div>
        </div>
        
        <div class="no-info" v-if="cData.activityDtos.length == 0">
            没有活动信息
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
    .desc{
        line-height: .8rem;
        font-size: 14px;
    }
</style>