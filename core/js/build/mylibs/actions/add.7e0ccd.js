define(["jquery","_super"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){},options:{},_exec:function(){var b=this;if(!this.waited&&""!==this.is("wait")&&"raf"!==this.is("wait"))return this.waited=!0,void setTimeout(function(){b._exec()},parseInt(this.is("wait"),10));switch(this.waited=!1,this.$destination=""!==this.is("relatedTo")?a(this.is("relatedTo")):this.$elem,this.data=""!==this.is("data")?this.is("data"):this._getOutcommendHtml(),this.is("datatype")){case"class":window.requestAnimationFrame(this._addClass.bind(this));break;case"style":window.requestAnimationFrame(this._addStyle.bind(this));break;case"html":this.injectMethod=""!==this.is("inject")?this.is("inject"):"html",window.requestAnimationFrame(this._addHtml.bind(this));break;case"attr":window.requestAnimationFrame(this._addAttr.bind(this));break;case"prop":window.requestAnimationFrame(this._addProp.bind(this));break;case"text":window.requestAnimationFrame(this._addText.bind(this))}},_getOutcommendHtml:function(){for(var a=0,b=this.$destination[0].childNodes.length;b>a;a++)if(8===this.$destination[0].childNodes[a].nodeType)return void 0!==this.$destination[0].childNodes[a].textContent?this.$destination[0].childNodes[a].textContent.replace("comment in by JS",""):this.$destination[0].childNodes[a].data.replace("comment in by JS","")},_getCssObj:function(){for(var a,b={},c=this.data.split("|"),d=0,e=c.length;e>d;d++)a=c[d].split(":"),b[a[0]]=a[1];return b},_addClass:function(){this.$destination.addClass(this.data),""!==this.is("scrollTo")&&this._scrollTo()},_addStyle:function(){this.$destination.css(this._getCssObj()),""!==this.is("scrollTo")&&this._scrollTo()},_addAttr:function(){var a=this.data.split(":");this.$destination.attr(a[0],a[1]),""!==this.is("scrollTo")&&this._scrollTo()},_addHtml:function(){var b=a(this.data);this.$destination[this.injectMethod](b),""!==this.is("scrollTo")&&this._scrollTo(),""===this.is("data")&&setTimeout(function(){b.requirementsForJmElements().triggerSelfexecObj().picturefill()},200)},_addText:function(){this.$destination.html(this.data),""!==this.is("scrollTo")&&this._scrollTo()},_addProp:function(){var a=this.data.split(":");"checked"===a[0]&&(a[1]="true"===a[1]),this.$destination.prop(a[0],a[1]),""!==this.is("scrollTo")&&this._scrollTo()}});return a.plugin("actions.add",c),c});