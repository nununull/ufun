(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09a3":function(e,t,o){},"48b3":function(e,t,o){},"4dd0":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"navBar"},[o("van-sticky",{attrs:{container:e.navBar}},[o("van-nav-bar",{attrs:{fixed:"",placeholder:"","left-arrow":"",border:!1},on:{"click-left":e.onClickLeft},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.movieVO.vodName+"-"+e.movieDetailVO.playName)}})]},proxy:!0},{key:"right",fn:function(){return[o("van-icon",{attrs:{name:e.movieVO.isCollected?"star":"star-o",size:"18"},on:{click:e.collectMovie}})]},proxy:!0}])}),o("div",{staticClass:"player"},[o("ufun-player",{directives:[{name:"show",rawName:"v-show",value:e.isM3u8,expression:"isM3u8"}],attrs:{"play-url":e.playUrl}}),o("iframe",{directives:[{name:"show",rawName:"v-show",value:!e.isM3u8,expression:"!isM3u8"}],attrs:{src:e.playUrlIframe,width:"100%",height:"180px",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",frameSpacing:"0",marginHeight:"0",frameBorder:"0",scrolling:"no",vspale:"0",noResize:""}})],1)],1),o("div",[o("van-tabs",{attrs:{color:"#4fc08d",swipeable:"","title-active-color":"#4fc08d"}},[o("van-tab",{attrs:{title:"简介"}},[o("video-resc",{attrs:{movie:e.movieVO}})],1),o("van-tab",{attrs:{title:"选集"}},[o("van-collapse",{attrs:{border:!1},model:{value:e.activeCollapseNames,callback:function(t){e.activeCollapseNames=t},expression:"activeCollapseNames"}},[o("div",e._l(e.movieVOList[0].playVOList,(function(t,a){return o("van-collapse-item",{key:a,attrs:{border:!1,name:t.vodPlayFrom},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(t.vodPlayFrom)}})]},proxy:!0}],null,!0)},[o("van-grid",{attrs:{"column-num":4,border:!1}},e._l(t.playDetailVOList,(function(t,a){return o("van-grid-item",{key:a,attrs:{text:t.playName},on:{click:function(o){return e.switchMovie(t)}}})})),1)],1)})),1)])],1),e.movieVO.downloadUrlList&&0<e.movieVO.downloadUrlList.length?o("van-tab",{attrs:{title:"下载"}},[o("van-grid",{attrs:{border:!1}},e._l(e.movieVO.downloadUrlList,(function(t,a){return o("van-grid-item",{key:a,attrs:{text:t.text},on:{click:function(o){return e.onCopyDownloadUrl(t.value)}}})})),1)],1):e._e()],1)],1)],1)},i=[],n=(o("c975"),o("96cf"),o("1da1")),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("van-row",{attrs:{gutter:"50"}},[o("van-col",{attrs:{span:"8"}},[o("van-image",{attrs:{width:"120",height:"120",src:e.movie.vodPic}})],1),o("van-col",{attrs:{span:"15"}},[o("b",{domProps:{textContent:e._s(e.movie.vodName)}}),o("div",{staticClass:"van-multi-ellipsis--l3"},[o("div",[e._v("别名："+e._s(e.movie.vodSub))]),o("div",[e._v("导演："+e._s(e.movie.vodDirector))]),o("div",[e._v("类型："+e._s(e.movie.typeName))]),o("div",[e._v("年份："+e._s(e.movie.vodYear))]),o("div",[e._v("地区："+e._s(e.movie.vodArea))]),o("div",[e._v("语言："+e._s(e.movie.vodLang))]),o("div",[e._v("演员："+e._s(e.movie.vodActor))])])])],1),o("van-row",[o("van-col",[o("p",{domProps:{innerHTML:e._s(e.movie.vodContent)}})])],1)],1)},l=[],s={name:"VideoDesc",props:["movie"]},c=s,v=(o("b634"),o("2877")),u=Object(v["a"])(c,r,l,!1,null,"757d9e45",null),d=u.exports,m=o("ee52"),f={name:"Play",components:{"video-resc":d,"ufun-player":m["a"]},data:function(){return{activeCollapseNames:[0],navBar:null,isNeedIframe:!1}},computed:{isM3u8:function(){return-1<this.movieDetailVO.playUrl.indexOf("m3u8")||-1<this.movieDetailVO.playUrl.indexOf("mp4")},playUrl:function(){return this.movieDetailVO.playUrl},playUrlIframe:function(){return this.isM3u8?"":this.movieDetailVO.playUrl},movieDetailVO:function(){var e=this.$store.state.rightNowMovieDetailVO;return e||(e=this.$cacheUtil.LOCAL_STORAGE.get(this.$cacheConstant.MOVIE.RIGHT_NOW_MOVIE_DETAIL)),e},movieVO:function(){var e=this.$store.state.rightNowMovieVO;return e||(e=this.$cacheUtil.LOCAL_STORAGE.get(this.$cacheConstant.MOVIE.RIGHT_NOW_MOVIE)),e},movieVOList:function(){var e=this.$store.state.movieVOList;return e&&0!==e.length||(e=this.$cacheUtil.LOCAL_STORAGE.get(this.$cacheConstant.MOVIE.MOVIE_LIST)),e},live:function(){var e=!1,t=this.movieDetailVO.playUrl;return t.indexOf(".m3u8")>-1&&(e=!0),e}},created:function(){this.movieDetailVO?this.activeCollapseNames=[this.movieDetailVO.vodPlayFrom]:window.location="/"},mounted:function(){},methods:{onClickLeft:function(){this.$router.go(-1)},play:function(){console.log("play callback")},switchMovie:function(e){this.$store.commit("updateRightNowMovieDetailVO",e)},collectMovie:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.movieVO,t.next=3,e.$dexieUtil.getInstance().play_collection.where("rescPlatform").equals(o.rescPlatform).and((function(e){return e.vodId===o.vodId})).count();case 3:if(a=t.sent,0===a){t.next=10;break}return t.next=7,e.$dexieUtil.getInstance().play_collection.where("rescPlatform").equals(o.rescPlatform).and((function(e){return e.vodId===o.vodId})).delete();case 7:return e.movieVO.isCollected=!1,e.$toast.success("取消收藏成功！"),t.abrupt("return");case 10:return o.createTime=e.$dayjs().format("YYYY-MM-DD HH:mm:ss"),o.isCollected=!0,t.next=14,e.$dexieUtil.getInstance().play_collection.add(o);case 14:e.movieVO.isCollected=!0,e.$toast.success("收藏成功！");case 16:case"end":return t.stop()}}),t)})))()},onCopyDownloadUrl:function(e){var t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),this.$toast.success("下载链接复制成功！")}}},p=f,h=(o("c98b"),Object(v["a"])(p,a,i,!1,null,"f4174bb8",null));t["default"]=h.exports},b634:function(e,t,o){"use strict";o("09a3")},c98b:function(e,t,o){"use strict";o("48b3")}}]);