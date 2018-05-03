
<template>
  <div id="app">
      <el-container>
        <el-aside width="220px">
          <div class="logo-box">
            <img :src=logoUrl alt="">
          </div>
          <ul class="nav-lists" >
            <li @click="rotateArrow(index)" v-for="item,index in navLists">
              <a>
               <router-link :to="{path : item.link}">
                <div class="nav-center-box">
                   <img :src=item.iconUrl alt="" width="20px" height="20px" class="nav-icon">
                   
                    {{item.navName}}
                   <span class="arrow" ><img :src=arrowUrl alt="" :class="{show : item.secondList==''? false :true}" /></span>
                </div> 
                </router-link>
                </a>
                <ul :class="{hide : isShow}">
                  <li v-for="seconditem in item.secondList ">{{seconditem.secondNavName}}</li>
                </ul>
            </li>
          </ul>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>
                <keep-alive>
                 <router-view></router-view> 
              </keep-alive>
          </el-main>
        </el-container>
     </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
       isShow:true,
       logoUrl:'src/assets/logoHome.png',
       arrowUrl:'src/assets/nav_09.png',
       navLists:[
         {
           link:'index',
           iconUrl:'src/assets/incon_10.png',
           navName:'首页',
           secondList:['']
         },
          {
            link:'data',
            iconUrl:'src/assets/incon_13.png',
            navName:'数据统计',
            secondList:[
              {
                secondNavName:'平台数据分析', 
              },
               {
                secondNavName:'应用数据分析', 
              },
               {
                secondNavName:'用户数据分析', 
              }
            ]
          },
          { link:'system',
            iconUrl:'src/assets/incon_15.png',
            navName:'系统管理',
            secondList:[
              {
                secondNavName:'版本管理', 
              },
               {
                secondNavName:'机构管理', 
              },
               {
                secondNavName:'账号管理', 
              }
            ]
          },
          {
             link:'basic',
            iconUrl:'src/assets/incon_17.png',
            navName:'基础数据管理',
             secondList:[
              {
                secondNavName:'系统服务', 
              },
               {
                secondNavName:'支付设置', 
              },
               {
                secondNavName:'应用分类', 
              },
              {
                secondNavName:'办税攻略', 
              }
            ]
          },
       ]

    };
   
  },
 methods:{
    rotateArrow(index){
      // this.isShow=!this.isShow
    }
 },

//   components: {},



//   mounted: {},

//   methods: {}
}

</script>
<style  >
/*css重置*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
form,fieldset,input,textarea,p,blockquote,th,td,img { padding: 0; margin: 0; }
fieldset,img { border: 0; }
address,caption,cite,code,dfn,em,strong,th,var,i { font-weight: normal; font-style: normal; }
ol,ul,li { list-style: none; }
caption,th { text-align: left; }
q:before,q:after { content:''; }
abbr,acronym { border: 0; }
ul{margin-bottom:0!important;list-style: none;padding:0;}
a:link{text-decoration:none;}
a:visited{text-decoration:none;}
a:hover{text-decoration:none;color:#fff;}
a:active{text-decoration:none;}
input[type="button"], input[type="submit"], input[type="reset"] ,input[type="text"],input[type="tel"],input[type="password"],textarea,button{
    -webkit-appearance: none;
    outline: none;
}
[readonly="readonly"] {
    pointer-events: none;
}


label{margin-bottom:0;}
body{min-width:1366px;}
.logo-box{width:100%;height:60px;border-bottom:1px solid #3b3b43;}
.logo-box img{height:36px;margin:12px auto;}
.nav-lists{width:100%;font-size:14px;}
.nav-lists>li{width:100%;line-height: 50px;border-bottom:1px solid #3b3b43;}
.nav-lists>li>a{display: block;width:100%;height:50px;color:#ffffff;margin:0 auto;text-align: left!important;}
.nav-lists>li:hover{background: #27272d;}
.nav-lists>li>a .nav-center-box{width:70%;height:50px;margin:0 auto;position:relative;}
.nav-lists>li>a:link,.nav-lists>li>a:visited,.nav-lists>li>a:hover,.nav-lists>li>a:active{color:#ffffff;}
.nav-lists>li>a .nav-center-box>img.nav-icon{display: inline-block;width:20px;height:20px;vertical-align: middle;margin-right:10px;}
.nav-lists>li>a .nav-center-box .arrow{display: inline-block;width:10px;height:8px;position: absolute;top:22px;right:0;}
.nav-lists>li>a .nav-center-box .arrow>img{display: none;}
.nav-lists>li>a .nav-center-box .arrow>img.show{display: block}
.hide{display: none;}
.show{display: block;}
 /* element-ui */
  .el-header, .el-footer {background-color: #ffffff;color: #777777;text-align: center;line-height: 60px;} 
  .el-aside {background-color: #313139;color: #ffffff;text-align: center;}
  .el-main {background-color: #E9EEF3;color: #333;text-align: center;}
  body > .el-container {margin-bottom: 40px;}
</style>