define(["jquery","_super"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){},options:{},_exec:function(){var a=this;return this.waited||""===this.is("wait")||"raf"===this.is("wait")?(this.waited=!1,void(""!==this.is("scrollTo")&&this._scrollTo())):(this.waited=!0,void setTimeout(function(){a._exec()},parseInt(this.is("wait"),10)))}});return a.plugin("action.scroll",c),c});