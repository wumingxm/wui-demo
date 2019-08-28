/**
 * Created by jf on 2015/9/11.
 * Modified by bear on 2016/9/7.
 */
$(function () {
    var pageManager = {
        $container: $('#container'),
        _pageStack: [],
        _configs: [],
        _pageAppend: function(){},
        _defaultPage: null,
        _pageIndex: 1,
        setDefault: function (defaultPage) {
           
        },
        setPageAppend: function (pageAppend) {
           
        },
        init: function () {
            
        },
        push: function (config) {
            
        },
        go: function (to) {
          
        },
        _go: function (config) {
         
        },
        back: function () {
            history.back();
        },
        _back: function (config) {
           
        },
        _findInStack: function (url) {
            
        },
        _find: function (key, value) {
            
        },
        _bind: function (page) {
            
        }
    };

    function fastClick(){
        var supportTouch = function(){
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }();
        var _old$On = $.fn.on;

        $.fn.on = function(){
            
        };
    }
    function preload(){
       
    }
    function androidInputBugFix(){
       
    }
    function setJSAPI(){
        
        $.getJSON('https://weui.io/api/sign?url=' + encodeURIComponent(location.href.split('#')[0]), function (res) {
            
           
        });
    }
    function setPageManager(){
       
    }
    function showDialogue  (){
    	$(window).on("click",function(){
       	    weui.dialog({
				content: 
	                '<div class="weui-cell">'+
		                '<div class="weui-cell__hd">'+
		                    '<input type="radio" name="checkbox1" id="s12"/>'+
		                    '<i class="weui-icon-checked"></i>'+
		                '</div>'+
		                '<div class="weui-cell__bd">'+
		                    '<label>最近半年</label>'+
		                '</div>'+
		             '</div>'+
	                 '<div class ="weui-cell">'+
		                '<div class="weui-cell__hd">'+
		                    '<input type="radio" name="checkbox1"  id="s12"/>'+
		                '</div>'+
		                '<div class="weui-cell__bd">'+
		                    '<label>最近一个月</label>'+
		                '</div>'+
		             '</div>'+
		              '<div class="weui-cell">'+
		                '<div class="weui-cell__hd">'+
		                    '<input type="radio" name="checkbox1"  id="s12"/>'+
		                    '<i class="weui-icon-checked"></i>'+
		                '</div>'+
		                '<div class="weui-cell__bd">'+
		                    '<label>最近三天</label>'+
		                '</div>'+
		             '</div>'+
		              '<div class="weui-cell">'+
		                '<div class="weui-cell__hd">'+
		                    '<input type="radio" name="checkbox1"  id="s12"/>'+
		                    '<i class="weui-icon-checked"></i>'+
		                '</div>'+
		                '<div class="weui-cell__bd">'+
		                    '<label>全部</label>'+
		                '</div>'+
		             '</div>',
				className: 'dialogueClass'
			});	
		});
	}	
    	

    function init(){
       showDialogue();
    }
    init();
});
