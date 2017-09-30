<template>
	<div class="company-info">
		<div class="m-cell">
	    <a class="cell-item" href="javascript:;">
	      <div class="cell-left">
	          <div class="img_wrap" style="width: 1.6rem;padding: .2rem;">
	              <img src="//static.ydcss.com/ydui/img/logo.png" style="width: 100%;" />
	          </div>
	      </div>
	      <div class="cell-right">已认证</div>
	    </a>
	  </div>
	  <div class="m-cell">
		  <div class="cell-item company-info-item">
		      <i class="cell-icon icon-home-outline"></i>{{info.sname}}
		  </div>
		  <div class="cell-item company-info-item">
		      <i class="cell-icon icon-location"></i> {{info.saddress}}
		  </div>
		  <div class="cell-item company-info-item">
		      <i class="cell-icon icon-phone2"></i>{{info.smobile}}
		  </div>
		</div>
		<div class="m-celltitle" style="color: #333;">公司简介：</div>
		  <div style="padding: 0 0.24rem; font-size: 14px;line-height: 1.8;">
		     {{info.sabout}}
		  </div>
	  </div>
  </div>
</template>
<script type="text/javascript">
export default{
  props: ['info'],
  data () {
    return {
    };
  },
  created () {
  }
/*  created () {
    var that = this;
    that.info = that.globalData.companyData;
    if (!that.info) {
    	that.info = {};
      that.globalData.addListen('companyData', function () {
        that.info = that.globalData.companyData;
      });
    };
  }  */
};
</script>
<style type="text/css">

</style>