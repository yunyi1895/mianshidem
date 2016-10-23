<template>
	<div>
	<ul class="showul">
		<li v-for="j in showmsg" @click="tolink(j.link)"><!-- 先不用touchend-->
	<div class="hello">
	<h1 class="tit">{{j.title|zqwqw}}</h1>
   	<div class="content">
   		<div class="flex_2">
   			<div class="author">
					 <span class="name">{{j.author|zqwqw}}</span>
					 <span class="spking">{{j.category|zqwqw}}</span>
   			</div>
   			<div class="article">
				   有限公司于2015年9月成立。皮肤宝是一款垂直于皮肤科领域的移动医疗工具，医生端和患者端均于2016年3月20日正式上线运营，通过“线上首诊、线下转诊、急慢分治、上下联动、电子处方、药品到家”模式，实现皮肤病的在线分级诊疗。</p><p>王峰告诉36氪一组数据：<strong>皮肤宝APP上入驻医生已超过2000名，以公立三甲医院执业医生为主。与皮肤宝平台签约的合作医院超过300家。C端注册用户则已逾10万名，平台已经为近5万用户提供不同的医疗服务，其中付费用户有3万余名，平均客单价在百元左右（问诊和药品是主要赢利点）。复诊和复购用户合计超过10%，用户满意度超过85%。</strong></p><p><strong>除了继续投入核心问诊技术与产品的开发，皮肤宝近期还在大力开展B端业务。</strong>“我们希望，以皮肤宝核心的皮肤诊疗服务为切入点，向周边行业发散延展，打造皮肤健康生态大平台，一站式实现更美更健康的目标。”</p><p>王峰还透露，这些B端机构大体分为两类：<strong>一是综合医疗大健康，二是与美相关。</strong>目前，皮肤宝已与相关企业达成合作，并正在做技术对接。</p><p>虽然王峰表示B端合作方具体名字不方便透露，但通过投资方的观察和思考或许能略猜一二：</p><p>公开资料显示，隆领投资是由蔡文胜创办的早期股权投资机构，而蔡文胜也是美图秀秀的董事长。一个是美图/美拍，通过数字技术美化用户的图片或者视频效果，达到“表面”上的更好；一个是美肤，通过医疗技术或服务让用户的皮肤更健康，达到“本质”上的更好。那些不满足“表面”，且对“本质”有刚需的的用户，显然不在少数。再深层次的，美图投过的美妆企业qqq
				 <!--{{j.description|zqw}}-->
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
<div>
</template>

<script>
export default {
   data () {
	 return {
     	page:1,
		msg:[],
		showmsg:[],
		showloding:false,
		page:1,
		ispage:true
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
						//console.log(JSON.stringify(msg[0]))
	              })
		},
		setmsg:function(n){
			var vm=this
			this.showloding=false
			console.log(n)
			console.log(this.msg.length)
			if(n*10>this.msg.length) return
			var s=this.msg.slice(0,n*10)
			this.showmsg=s
			this.page++
			setTimeout(function(){
						
					vm.ispage=true
					},100)
		},
		tolink:function(n){
		
				window.location.href=n
			
		}

  },
  ready(){//代替 ready
		var vm=this
			window.onscroll=function(){ //js监听滚动条滚动事件
				var bheight = document.documentElement.clientHeight;//浏览器当前窗口可视区域高度
				var sheight =document.body.scrollHeight;//获取滚动条高度
				var stop =window.pageYOffset;//滚动条距离顶部的距离
				
				if(stop>=sheight-bheight && vm.ispage){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
					vm.showloding=true
					vm.ispage=false
					setTimeout(function(){
						vm.setmsg(vm.page)
					},500)
					
				}

		}

			
	
  	this.getdate()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.showul{
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
	margin-right:0.2rem;
}
.showul li{
	width:100%;
	
}
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
