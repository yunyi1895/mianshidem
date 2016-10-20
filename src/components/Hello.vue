<template>
  <div class="hello">
    <h1>摩拜:推出轻骑版单车Lite共享单车进入融合之战了么？</h1>
   	<div class="content">
   		<div class="flex_2">
   			<div class="author">
					 <span class="name">陈明峰</span>
					 <span class="spking">投资人说</span>
   			</div>
   			<div class="article">
   				EverNote（印象笔记）是在2012年正式推出的免费应用程序，它能在各种终端设备上创建笔记。EverNote不仅具备强大的笔记捕捉功能，还采用了独特的分类方式，而
					 EverNote（印象笔记）是在2012年正式推出的免费应用程序，它能在各种终端设备上创建笔记。EverNote不仅具备强大的笔记捕捉功能，还采用了独特的分类方式，而...
					EverNote（印象笔记）是在2012年正式推出的免费应用程序，它能在各种终端设备上创建笔记。EverNote不仅具备强大的笔记捕捉功能，还采用了独特的分类方式，而...
   			</div>
   		</div>
   		<div class="flex_1">
   			<div class="showtime">
					 <div class="time">
							showtime
					 </div>
					 
   			</div>
   			<div class="showimg">
   				showimg
   			</div>
   		</div>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods(){
  	
  },
  ready(){
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.hello{
	margin: 0 0.1rem;
	
}
.content{
	display: flex;
	
}
.flex_1{
	flex:1;

}
.flex_2{
	flex:2;
	margin-right:0.2rem;
	
}
.author{
		margin:10px 8px;

	}
	.name{
		display:inline-block;
		padding:3px;
		background:blue;
		border-radius:3px;
		color:#fff;
		margin-right:10px;
	}
	.spking{
		display:inline-block;
		padding:3px;
		background:#bbb;
		border-radius:3px;
		color:orange;
	}
	.article{
		color:#ccc;
		letter-spacing: 2px;
		height:100px;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height:25px;
	}
a {
  color: #42b983;
}
</style>
