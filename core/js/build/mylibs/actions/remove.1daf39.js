define(["jquery","_super"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){},options:{},_exec:function(){var b=this;if(!this.waited&&""!==this.is("wait")&&"raf"!==this.is("wait"))return this.waited=!0,void setTimeout(function(){b._exec()},parseInt(this.is("wait"),10));switch(this.waited=!1,this.$destination=""!==this.is("relatedTo")?a(this.is("relatedTo")):this.$elem,this.is("datatype")){case"class":window.requestAnimationFrame(this._removeClass.bind(this));break;case"html":window.requestAnimationFrame(this._removeHtml.bind(this));break;case"attr":window.requestAnimationFrame(this._removeAttr.bind(this));break;case"prop":window.requestAnimationFrame(this._removeProp.bind(this))}},_removeClass:function(){this.$destination.removeClass(this.is("data")),""!==this.is("scrollTo")&&this._scrollTo()},_removeHtml:function(){this.$destination.remove(),""!==this.is("scrollTo")&&this._scrollTo()},_removeAttr:function(){this.$destination.removeAttr(this.is("data")),""!==this.is("scrollTo")&&this._scrollTo()},_removeProp:function(){this.$destination.removeProp(this.is("data")),""!==this.is("scrollTo")&&this._scrollTo()}});return a.plugin("action.remove",c),c});