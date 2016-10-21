<template>
	<ul>
		<li v-for="j in showmsg" @click="tolink(j.link)">
	<div class="hello">
		
    <h1 class="tit">{{j.title}}</h1>
   	<div class="content">
   		<div class="flex_2">
   			<div class="author">
					 <span class="name">{{j.author|zqw}}</span>
					 <span class="spking">{{j.category|zqw}}</span>
   			</div>
   			<div class="article">
			
		
			这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			
			
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 	 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 	 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
			 这篇文章主要介绍了JavaScript将XML转成JSON的方法,实例分析了javascript操作XML文件及格式转化的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
   			</div>
   		</div>
   		<div class="flex_1">
   			<div class="showtime">
					 <div class="time">
							{{j.pubDate|zqw}}
					 </div>
					 
   			</div>
   			<div class="showimg">
					 <img src="../assets/logo.png">
   			</div>
   		</div>
   	</div>
  </div>
	</li>
	<li v-show="showloding" id="loding">加载。。。</li>
</ul>
</template>

<script>
export default {
  
  data () {
	 
    return {
      page:1,
		
		msg:[],
		showmsg:[],
		showloding:false,
		page:1
    }
  },
  methods:{
  	getdate:function(){
		  var vm=this
			this.$http({
	                method:'GET',
	                url:'http://localhost:8081/get',
	               }).then(function(data){
						
					var msg=data.body.rss.channel[0].item
					
						vm.msg=[...msg]
						vm.setmsg(1)
						console.log(JSON.stringify(msg[0]))
	              })
		},
		setmsg:function(n){
			this.showloding=false
			if(n*10>this.msg.length) return
			var s=this.msg.splice(0,n*10)
			this.showmsg=s	
		},
		tolink:function(n){
		//	alert(n)
				window.location.href=n
			//this.$router.go({path:n})
		}

  },
  mounted(){//代替 ready
		var vm=this
				$(document).scroll(function(){
				var bheight = $(window).height();//浏览器当前窗口可视区域高度
				var sheight = $("body")[0].scrollHeight;//获取滚动条高度，[0]是为了把jq对象转化为js对象
				var stop = $("body").scrollTop();//滚动条距离顶部的距离
				
				if(stop>=sheight-bheight){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
					vm.showloding=true
					vm.page++
					setTimeout(function(){
						vm.setmsg(vm.page)
					},500)
					
				}
			});
	
  	this.getdate()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.hello{
	margin: 0 0.1rem;
	
}

.tit{
		letter-spacing: 2px;
		color:#808080;
}
.content{
	display: flex;
	width:100%;
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
		width:100%;
	
	}
.showtime{
		margin:10px 8px;
		display:inline-block;
		padding:3px;
		background:#ccc;
		border-radius:3px;
		color:#fff;
		width:100px;
		text-align:center;
		margin-left:0;
}
.showimg{

}
.showimg img{
	height:100px;
	width:100px;
}
a {
  color: #42b983;
}
	#loding{
		height:30px;
		width:100%;
		line-height:30px;
		color:#808080;
		text-align:center;
	}
</style>
