define(["jquery","_super"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){if(this.loader=this.is("loader"),""!==this.loader)switch(this.loader){case"sticky":this.$ani=a('<div class="loader-sticky"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div> ');break;case"spinner":this.$ani=a('<div class="loading-container"><div class="loading"></div></div>');break;case"none":break;default:this.$ani=a('<div class="loader"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div> ')}},options:{},_exec:function(){var a=this;return this.waited||""===this.is("wait")||"raf"===this.is("wait")?(this.waited=!1,this.$elem.append(this.$ani),void(window.location.href=this.$elem.attr("href"))):(this.waited=!0,void setTimeout(function(){a._exec()},parseInt(this.is("wait"),10)))}});return a.plugin("actions.link",c),c});