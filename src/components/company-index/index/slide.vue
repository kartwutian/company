<template>
		<yd-slider autoplay="3000" speed="500">
	    <yd-slider-item v-for="slide in slides" :key="slide.pvId">
	      <a href="javascript:;">
	          <img v-bind:src="baseUrl + slide.pvUrl">
	      </a>
	    </yd-slider-item>
	  </yd-slider>
</template>
<script type="text/javascript">
export default{
  props: ['slides'],
  data () {
  	return {
  		baseUrl: this.baseImageUrl
  	};
  },
  created () {
  }
};
</script>
<style type="text/css">

</style>