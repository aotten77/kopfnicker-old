define(["jquery","_super","video","css!require-css.video"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){},options:{},_exec:function(){a(".app_tutorial_step"),a(".app_tutorial_step1"),a(".app_tutorial_step2"),a(".app_tutorial_step3"),a(".app_tutorial_step4"),a(".app_tutorial_step5");this._addHtml()},_addHtml:function(){var a=this;this.$elem.append('<video class="myapp-tutorial-video video-js vjs-default-skin" controls preload="none" width="'+this.is("width")+'" height="'+this.is("height")+'" poster="'+this.is("poster")+'"><source src="'+this.is("src")+'.mp4" type="video/mp4" /><source src="'+this.is("src")+'.webm" type="video/webm" /><source src="'+this.is("src")+'.ogv" type="video/ogg" /></video>'),window.videojs(this.$elem.find("video").eq(0)[0],{},function(){a.$video=this,a._playerReady(),a._addListener()})},_addListener:function(){var b=this;b.$video.on("timeupdate",function(){var c=b.$video.currentTime();c>33&&36>c?(b._resetList(),a("#vid2").addClass("active")):c>76&&79>c?(b._resetList(),a("#vid3").addClass("active")):c>97&&100>c?(b._resetList(),a("#vid4").addClass("active")):c>138&&141>c&&(b._resetList(),a("#vid5").addClass("active"))})},_resetList:function(){a(".bullet-list li").removeClass("active")},_playerReady:function(){var b=this;a(".bullet-list li").on("click",function(c){switch(b._resetList(),a("#"+c.target.id).addClass("active"),c.target.id){case"vid1":b.$video.currentTime(0).play();break;case"vid2":b.$video.currentTime(33).play();break;case"vid3":b.$video.currentTime(76).play();break;case"vid4":b.$video.currentTime(97).play();break;case"vid5":b.$video.currentTime(138).play()}})}});return a.plugin("modules.video",c),c});