window.onload = function() {
  //导航栏
  var navigationbar = document.getElementById("navigationbar");
  navigationbar.innerHTML="<div class='tel'><div id='NavLink'><div class='NavBG'><ul id='sddm'><li class='CurrentLi'><a href='/'>网站首页</a></li><li><a href='/关于社团/' onmouseover=mopen('m1') onmouseout='mclosetime()'>关于社团</a><div id='m1' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/关于社团/社团介绍/'>社团介绍</a><a href='/关于社团/社团文化'>社团文化</a><a href='/关于社团/社团环境'>社团环境</a><a href='/关于社团/我们的荣誉'>我们的荣誉</a><a href='/关于社团/信息公开'>信息公开</a></div></li><li><a href='/新闻动态/' onmouseover=mopen('m2') onmouseout='mclosetime()'>新闻动态</a><div id='m2' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/新闻动态/本社活动/'>本社活动</a><a href='/新闻动态/其他社团/'>其他社团</a></div></li><li><a href='/联系/' onmouseover=mopen('m3') onmouseout='mclosetime()'>联系我们</a><div id='m3' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/联系/'>联络方式</a></div></li><li><a href='/大事记/' onmouseover=mopen('m4') onmouseout='mclosetime()'>大事记</a><div id='m4' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/大事记/2022/'>2022年</a></div></li><li><a href='/友情链接/' onmouseover=mopen('m5') onmouseout='mclosetime()'>友情链接</a><div id='m5' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='http://edu.hainan.gov.cn/'>海南省教育厅</a><a href='http://dost.hainan.gov.cn/'>省科学技术厅</a><a href='http://www.hksyzx.cn'>海口实验中学</a><a href='http://www.haikouzx.com/'>海口中学</a></div></li></ul><!--导航条结束--></div></div></div><!--导航结束-->";
  //页末声明
  var end = document.getElementById("end");
  end.innerHTML="<p>我们遵循&nbsp;<a href='https://creativecommons.org/publicdomain/zero/1.0/deed.zh'>CC0 1.0 通用 (CC0 1.0)公共领域贡献</a>&nbsp;开源协议</p><p>Create By HKEMS-STMO (1998-2023)</p><p>本站由 海口实验中学科技社 创建</p><p><a href='/MQSI/index.html' target='_blank'>技术支持：WEB By MQSI</a></p><p><span id='span'></span></p><img alt='海口实验中学' src='/HKEMS.png' height='20' width='20' /><p class='end'><a href='http://www.hksyzx.cn'>海口实验中学</a></p>";
}