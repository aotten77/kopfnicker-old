define(["jquery","_super"],function(a,b){"use strict";var c=a.extend({},b,{init:function(c,d){return this.options=a.extend({},this.options,c),this.name=this.options.pluginName,this.pos=this.options.pos,this.jmname=this.options.jmname,this.$elem=a(d),b.config.call(this),this.onInitExec(),this},onInitExec:function(){this._oldClass=this.$elem.val()},options:{},_exec:function(){this.$elem.closest("table").find("tbody").find("tr").add(this.$elem.closest("table").find("tfoot").find("tr")).switchColumnsViaClassName(this._oldClass,this.$elem.val(),this.num),this._oldClass=this.$elem.val()}});return a.plugin("modules.tablesort",c),c});