<template>
	<div>
	
		<ul class="tab-nav">
        <li class="tab-nav-item" v-bind:class="{ 'tab-active': active == 'info' }"><a href="javascript:;" @click="goto('info')">主页</a></li>
        <li class="tab-nav-item" v-bind:class="{ 'tab-active': active == 'c-goods' }"><a href="javascript:;" @click="goto('c-goods')">商品</a></li>
        <li class="tab-nav-item" v-bind:class="{ 'tab-active': active == 'c-activity' }"><a href="javascript:;" @click="goto('c-activity')">活动</a></li>
        <li class="tab-nav-item" v-bind:class="{ 'tab-active': active == 'c-jobs' }"><a href="javascript:;" @click="goto('c-jobs')">招聘</a></li>
    </ul>


	</div>
</template>
<script>
const routs = ['info', 'c-goods', 'c-activity', 'c-jobs'];
export default{
  data: function () {
    return {
      active: 'info',
      activeId: 0
    };
  },
  methods: {
    goto: function (name) {
      this.active = name;
      this.$router.push({name: name});
      const id = routs.indexOf(name);
      const dir = id > this.activeId ? 'left' : 'right';
      this.activeId = id;
      this.$emit('setDirection', dir);
    }
  },
  created: function () {
  	this.active = this.$route.name;
    this.activeId = routs.indexOf(this.active);
  }
};
</script>
<style></style>