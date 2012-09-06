if("undefined"==typeof ZeroClipboard){
/*
ZeroClipboard
by Joseph Huckaby
https://github.com/jonrohan/ZeroClipboard
MIT License
*/
var ZeroClipboard={version:"1.0.8",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a);this.className+=" "+a},a.removeClass=function(a){for(var b=this.className.split(/\s+/),d=-1,e=0;e<b.length;e++)b[e]==a&&(d=e,e=b.length);return-1<d&&(b.splice(d,1),this.className=b.join(" ")),this},a.hasClass=function(a){return!!this.className.match(RegExp("\\s*"+a+"\\s*"))}),a},setMoviePath:function(a){this.moviePath=a},newClient:function(){return new ZeroClipboard.Client},dispatch:function(a,c,b){(a=this.clients[a])&&a.receiveEvent(c,b)},register:function(a,c){this.clients[a]=c},getDOMObjectPosition:function(a,c){for(var b={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};a&&a!=c;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);a&&this.glue(a)}};ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,zIndex:99,glue:function(a,c,b){this.domElement=ZeroClipboard.$(a);this.domElement.style.zIndex&&(this.zIndex=parseInt(this.domElement.style.zIndex,10)+1);"string"==typeof c?c=ZeroClipboard.$(c):"undefined"==typeof c&&(c=document.getElementsByTagName("body")[0]);a=ZeroClipboard.getDOMObjectPosition(this.domElement,c);this.div=document.createElement("div");var d=this.div.style;d.position="absolute";d.left=""+a.left+"px";d.top=""+a.top+"px";d.width=""+a.width+"px";d.height=""+a.height+"px";d.zIndex=this.zIndex;if("object"==typeof b)for(var e in b)d[e]=b[e];c.appendChild(this.div);this.div.innerHTML=this.getHTML(a.width,a.height)},getHTML:function(a,c){var b="",d="id="+this.id+"&width="+a+"&height="+c;if(navigator.userAgent.match(/MSIE/))var e=location.href.match(/^https/i)?"https://":"http://",b=b+('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+a+'" height="'+c+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>');else b+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+c+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" wmode="transparent" />';return b},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(c){}this.domElement=null;this.div=null}},reposition:function(a){a&&(this.domElement=ZeroClipboard.$(a),this.domElement||this.hide());if(this.domElement&&this.div){var a=ZeroClipboard.getDOMObjectPosition(this.domElement),c=this.div.style;c.left=""+a.left+"px";c.top=""+a.top+"px"}},setText:function(a){this.clipText=a;this.ready&&this.movie.setText(a)},addEventListener:function(a,c){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(c)},setHandCursor:function(a){this.handCursorEnabled=a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,c){a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case "load":this.movie=document.getElementById(this.movieId);if(!this.movie){var b=this;setTimeout(function(){b.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){b=this;setTimeout(function(){b.receiveEvent("load",null)},100);this.ready=!0;return}this.ready=!0;this.movie.setText(this.clipText);this.movie.setHandCursor(this.handCursorEnabled);break;case "mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case "mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case "mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a])for(var d=0,e=this.handlers[a].length;d<e;d++){var f=this.handlers[a][d];"function"==typeof f?f(this,c):"object"==typeof f&&2==f.length?f[0][f[1]](this,c):"string"==typeof f&&window[f](this,c)}}};"undefined"!=typeof module&&(module.exports=ZeroClipboard)
}ZeroClipboard.setMoviePath(ed2klsPath+"/ZeroClipboard.swf");
/*
eD2k Link Selector Main JavaScript
by tomchen1989
http://emulefans.com/wordpress-ed2k-link-selector/
GPL v2
*/
var ed2kls={$:function(a){return document.getElementById(a)},$n:function(a){return document.getElementsByName(a)},$c:function(a,c,b){var b=b||document,c=c||"*",d=[];if(document.getElementsByClassName&&Array.filter){if("*"==c)return b.getElementsByClassName(a);d=Array.filter(b.getElementsByClassName(a),function(a){return a.tagName==c.toUpperCase()})}else{b=b.getElementsByTagName(c);a=RegExp("(^|\\s)"+a+"(\\s|$)");for(i=0,j=0,l=b.length;i<l;i++)a.test(b[i].className)&&(d[j]=b[i],j++)}return d},bind:function(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,function(c){b.call(a,c)})},ht:function(a,c){for(var b=a.firstChild;null!==b;b=b.nextSibling)if(3==b.nodeType)return b.nodeValue=c,!0;return!1},help:function(a,c){var b=ed2kls.$("el-s-info-"+a),d=ed2kls.$("el-s-info-content-"+a);d.innerHTML="";var e=ed2kls.$("el-s-info-content-str-"+c).cloneNode(!0);e.id="";d.appendChild(e);"none"==b.style.display&&("undefined"==typeof jQuery?b.style.display="block":jQuery(b).slideDown(300))},closeinfo:function(a){"undefined"==typeof jQuery?ed2kls.$("el-s-info-"+a).style.display="none":jQuery(ed2kls.$("el-s-info-"+a)).slideUp(300)},close:function(a){var c=ed2kls.$("el-s-tb-"+a),a=ed2kls.$("el-s-exd-"+a);if("none"==c.style.display){ed2kls.ht(a,"[-]");if("undefined"!=typeof jQuery&&!jQuery.browser.msie)jQuery(c).fadeIn("slow");else{var b=navigator.appVersion.match(/MSIE (\d+\.\d+)/,"");c.style.display=null!==b&&8>=Number(b[1])?"block":"table-row-group"}a.setAttribute("title",ed2klsVar.shk)}else ed2kls.ht(a,"[+]"),"undefined"!=typeof jQuery&&!jQuery.browser.msie?jQuery(c).fadeOut("slow"):c.style.display="none",a.setAttribute("title",ed2klsVar.exd)},cb:{main:function(a,c){var b=new ZeroClipboard.Client;b.movieId="Ed2klsZeroClipboardMovie_"+b.id;var d=!1;b.setHandCursor(!0);b.addEventListener("load",function(){d=!0});b.addEventListener("mouseOver",function(){for(var d=ed2kls.$n("el-s-chkbx-"+c+"[]"),f=d.length,h="",g=0;g<f;g++)d[g].checked&&(1==a?h+=ed2kls.getName(d[g].value)+"\n":2==a&&(h+=d[g].value+"\n"));b.setText(h)});b.addEventListener("complete",function(){var a=ed2kls.$("el-s-copied-"+c);d?(a.style.display="inline",window.setTimeout(function(){a.style.display="none"},1E3)):alert(ed2klsVar.retry)});1==a?b.glue("el-s-copynames-"+c,"el-s-copynames-container-"+c):2==a&&b.glue("el-s-copylinks-"+c,"el-s-copylinks-container-"+c)},init:function(){for(var a=ed2kls.$c("el-s-copylinks","input"),c=a.length,b,d=0;d<c;d++)b=a[d].id,b=b.substr(b.lastIndexOf("-")+1),ed2kls.$("el-s-totsize-"+b)&&this.main(1,b),this.main(2,b)},exe:function(){ed2kls.bind(window,"load",function(){ed2kls.cb.init()})},noflashcopy:function(a,c){if(window.clipboardData){for(var b=ed2kls.$n("el-s-chkbx-"+c+"[]"),d=b.length,e="",f=0;f<d;f++)b[f].checked&&(1==a?e+=ed2kls.getName(b[f].value)+"\n":2==a&&(e+=b[f].value+"\n"));window.clipboardData.setData("Text",e);var h=ed2kls.$("el-s-copied-"+c);h.style.display="inline";window.setTimeout(function(){h.style.display="none"},1E3)}else this.init(),alert(ed2klsVar.retry)}},formatSize:function(a){var c=ed2klsVar.bytes;1099511627776<=a?(a=Math.round(a/1.099511627776E10)/100,c=ed2klsVar.tb):1073741824<=a?(a=Math.round(a/1.073741824E7)/100,c=ed2klsVar.gb):1048576<=a?(a=Math.round(a/10485.76)/100,c=ed2klsVar.mb):1024<=a&&(a=Math.round(a/10.24)/100,c=ed2klsVar.kb);return a+c},getName:function(a){a=decodeURIComponent(a);return a=a.split("|")[2]},getSize:function(a){a=decodeURIComponent(a);return a=+a.split("|")[3]},clear:function(a){if(ed2kls.$("el-s-namefilter-"+a)){ed2kls.$("el-s-namefilter-"+a).value="";for(var c=ed2kls.$n("el-s-chktype-"+a+"[]"),b=c.length,d=0;d<b;d++)c[d].checked=!1}ed2kls.$("el-s-sizesymbol-"+a+"-1")&&(ed2kls.$("el-s-sizesymbol-"+a+"-1").selectedIndex=0,ed2kls.$("el-s-sizefilter-"+a+"-1").value="",ed2kls.$("el-s-sizeunit-"+a+"-1").selectedIndex=0,ed2kls.$("el-s-sizesymbol-"+a+"-2").selectedIndex=0,ed2kls.$("el-s-sizefilter-"+a+"-2").value="",ed2kls.$("el-s-sizeunit-"+a+"-2").selectedIndex=0)},total:function(a){for(var c=ed2kls.$("el-s-totsize-"+a)?!0:!1,b=ed2kls.$n("el-s-chkbx-"+a+"[]"),d=b.length,e=0,f=0,h=ed2kls.$("el-s-chkall-"+a),g=0;g<d;g++)b[g].checked&&(c&&(e+=this.getSize(b[g].value)),f++);h.checked=f==d?!0:!1;c&&ed2kls.ht(ed2kls.$("el-s-totsize-"+a),this.formatSize(e,a));ed2kls.ht(ed2kls.$("el-s-totnum-"+a),f)},initChk:-1,checkIt:function(a,c){var b=c||window.event;tarNum=(b.target||b.srcElement).id;tarNum=tarNum.substr(tarNum.lastIndexOf("-")+1);tarNum-=1;if(b.shiftKey)for(var b=ed2kls.$n("el-s-chkbx-"+a+"[]"),d=Math.min(tarNum,this.initChk),e=Math.max(tarNum,this.initChk),d=d+1;d<=e-1;d++)b[d].checked=b[d].checked?!1:!0;else this.initChk=tarNum;this.total(a);this.clear(a)},checkAll:function(a,c){for(var b=ed2kls.$n("el-s-chkbx-"+a+"[]"),d=b.length,e=0;e<d;e++)b[e].checked=c;this.total(a);this.clear(a)},download:function(a){for(var a=ed2kls.$n("el-s-chkbx-"+a+"[]"),c=a.length,b=[],d=0;d<c;d++)a[d].checked&&b.push(a[d].value);var e=b.length;if(0===e)return!1;var f=6E3,h=0,g=function(){window.location=b[h];h<e-1&&(h++,window.setTimeout(function(){f=500;g()},f))};g()},test:function(a,c){if(""===a||void 0===a||""===c)return!0;for(var a=a.replace(/\"(.+?)\"/g,function(a){a=a.substr(1,a.length-2);return a=a.replace(/\s/g,"\\u0020").replace(/\+/g,"\\u002B").replace(/-/g,"\\u002D").replace(/\|/g,"\\u007C").replace(/\^/g,"\\u005E").replace(/\$/g,"\\u0024")}),a=a.replace(/[\s\+)]*\-/g," -").replace(/\|\s-/g,"|-").replace(/([\\\.\{\}\[\]\(\)\*\+\?])/g,"\\$1").replace(/\\(\\u[0-9A-F]{4})/g,"$1"),b=a.split(/[\s\+]+/),d=0,e=b.length;d<e;d++){var f=b[d];if(""!==f)if(/\|/.test(f)){for(var f=f.split("|"),h=!1,g=0,m=f.length;g<m;g++){var k=f[g];if(""!==k&&("-"!=k.charAt(0)&&!0===RegExp(k,"i").test(c)||"-"==k.charAt(0)&&!1===RegExp(k.substr(1,k.length-1),"i").test(c)))h=!0}if(!1===h)return!1}else if("-"!=f.charAt(0)&&!1===RegExp(f,"i").test(c)||"-"==f.charAt(0)&&!0===RegExp(f.substr(1,f.length-1),"i").test(c))return!1}return!0},testSize:function(a,c,b,d){if(""===b||void 0===b)return!0;b*=d;switch(c){case "1":if(a>b)return!0;break;case "2":if(a<b)return!0;break;default:return!0}return!1},filter:function(a){this.filterRun(a);this.setChktype(a);this.total(a)},filterRun:function(a){var c,b,d,e,f,h,g;ed2kls.$("el-s-namefilter-"+a)&&(c=ed2kls.$("el-s-namefilter-"+a),c=c.value);ed2kls.$("el-s-sizesymbol-"+a+"-1")&&(b=ed2kls.$("el-s-sizesymbol-"+a+"-1"),b=b.options[b.selectedIndex].value,d=ed2kls.$("el-s-sizefilter-"+a+"-1").value,e=ed2kls.$("el-s-sizeunit-"+a+"-1"),e=e.options[e.selectedIndex].value,f=ed2kls.$("el-s-sizesymbol-"+a+"-2"),f=f.options[f.selectedIndex].value,h=ed2kls.$("el-s-sizefilter-"+a+"-2").value,g=ed2kls.$("el-s-sizeunit-"+a+"-2"),g=g.options[g.selectedIndex].value);for(var a=ed2kls.$n("el-s-chkbx-"+a+"[]"),m=a.length,k=0;k<m;k++)a[k].checked=this.test(c,this.getName(a[k].value))&&this.testSize(this.getSize(a[k].value),b,d,e)&&this.testSize(this.getSize(a[k].value),f,h,g)?!0:!1},setChktype:function(a){if(ed2kls.$("el-s-namefilter-"+a))for(var c=ed2kls.$n("el-s-chktype-"+a+"[]"),a=ed2kls.$("el-s-namefilter-"+a).value,b=c.length,d,e=0;e<b;e++)d=c[e].value,d=RegExp("\\."+d+"\\$","i"),c[e].checked=d.test(a)?!0:!1},typeFilter:function(a,c,b){var d=ed2kls.$("el-s-namefilter-"+a),e=/(\.\S+?\$)(\|\.\S+?\$)*/i;d.value=d.value.replace(RegExp("\\|\\."+c+"\\$|\\."+c+"\\$\\||\\."+c+"\\$","i"),"");b&&(e.test(d.value)?d.value=d.value.replace(e,"$&|."+c+"$"):(""!==d.value&&" "!==d.value.substr(d.value.length-1,1)&&(d.value+=" "),d.value+="."+c+"$"));this.filterRun(a);this.total(a)},emclChk:function(a){for(var a=ed2kls.$n("el-s-chkbx-"+a+"[]"),c=a.length,b=0;b<c;b++)if(a[b].checked)return!0;return!1},exe:function(){this.bind(window,"load",ed2kls.init)},init:function(){for(var a=ed2kls.$c("el-s-namefilter","input").concat(ed2kls.$c("el-s-sizefilter","input")),c=0,b=a.length;c<b;c++)a[c].value="";a=ed2kls.$c("el-s-chkbx","input");c=0;for(b=a.length;c<b;c++){var d=a[c];d.checked=/el-s-chktype/.test(d.className)?!1:!0}}};ed2kls.cb.exe();ed2kls.exe();