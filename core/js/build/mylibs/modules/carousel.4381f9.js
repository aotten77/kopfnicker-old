define(["jquery","_super","modules.carousel-ts"],function(a,b,c){"use strict";var d=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){},options:{},_exec:function(){var a=this;require(["owl_carousel","overwritings.owl_carousel"],function(){a.indexCount=0,a.$elem.owlCarousel(a.getConfig())})},getConfig:function(){var a=this;return{navigation:!0,slideSpeed:300,paginationSpeed:500,rewindSpeed:1e3,singleItem:!0,autoPlay:!0,stopOnHover:!0,jmDelayTime:""!==a.is("delay")?parseInt(a.is("delay"),10):2e3,afterInit:function(){a._setAllTeaserToVisible(),a._setCommentToPaginierung()},afterMove:function(){var b=a.$elem.data("owlCarousel");b.$owlItems.children().removeClass("visible").removeClass("leaving"),b.$owlItems.children().eq(b.currentItem).addClass("visible")}}},_setAllTeaserToVisible:function(){this.$elem.find(".stage-teaser").removeClass("hide-large").removeClass("hide-med")},_setCommentToPaginierung:function(){var b=this;this._setCommentArray(),this.$elem.find(".owl-page").each(function(c,d){a(d).html(b.commentArray[c])})},_setCommentArray:function(){var a=0,b=this.$elem[0].childNodes.length;for(this.commentArray=[];b>a;a++)8===this.$elem[0].childNodes[a].nodeType&&this.commentArray.push(this.$elem[0].childNodes[a].textContent.replace("comment in by JS",""))}},c);return a.plugin("modules.carousel",d),d});