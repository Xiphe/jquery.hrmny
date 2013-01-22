/**
 * jQuery.hrmny
 * 0.1-alpha
 * (c) 2013 Hannes Diercks
 * GPLv2
 */
jQuery(document).ready(function($) {
    this.harmonies = {
        analogous: {
            left1:{
                hue: 22,
                saturation: -0.05
            },
            left2:{
                hue: 11,
                saturation: -0.05,
                lightness: -0.09
            },
            right1:{
                hue: -22,
                saturation: -0.05
            },
            right2:{
                hue: -11,
                saturation: -0.05,
                lightness: -0.09
            }
        }
    };
    
    this.namespace = 'hrmny-';
    this.css = '';
    this.colorRules = {
        background: 'background-color',
        border: 'border-color',
        color: 'color'
    };
    
    var self = this;
    var _base = null;
    
    var _parseHarmonies = function(cb) {
        self.css = '';
        var n = self.namespace;
        $.each(self.harmonies, function(hrmyname, colors) {
            $.each(self.colorRules, function(a, r) {
                self.css += '.'+n+hrmyname+' .'+n+a+'-base{'+r+':'+_base.toHexString()+';} ';
            });
            $.each(colors, function(clrname, setngs) {
                var color = $.extend({}, _base);
                
                $.each(setngs, function(m, v) {
                    if (typeof color[m] === 'function') {
	                    color = color[m](color[m]()+v);
                    } else {
                        alert(m+'('+v+') is not a valid jQuery.Color method');
                    }
                });
                $.each(self.colorRules, function(a, r) {
                    self.css += '.'+n+hrmyname+' .'+n+a+'-'+clrname+'{'+r+':'+color.toHexString()+';} ';
                });
            });
        });
        if (typeof cb === 'function') {
            window.setTimeout(cb, 0);
        }
    };
    
    var _appendStyles = function() {
        if (!$('#'+self.namespace+'styles').length) {
            $('body').append($('<style />').attr({
                id: self.namespace+'styles',
                type: 'text/css'
            }));
        }
        $('#'+self.namespace+'styles').html(self.css);
    };
    
    var _init= function() {
        _base = $.Color($('#clrhrmny-input').val());
        _parseHarmonies(_appendStyles);
        $('#clrhrmny-input').keyup(function(){
            _base = $.Color($(this).val());
            _parseHarmonies(_appendStyles);
        });
    };
    
    $.getScript('http://code.jquery.com/color/jquery.color-2.1.1.min.js', _init);
});