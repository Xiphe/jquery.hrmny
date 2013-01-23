jQuery.hrmny
============

A jQuery plugin that writes css rules for colors based on customizable rules and base colors.

This should have at least two use cases.

1. The Template designer sets the harmony rule. An administrator chooses a color. The css generated by hrmny will be cached and delivered without the need of JavaScript and delay through the parsing process.
2. You may want to let your site visitors choose a color they like.


This script is currently in an early development state.
Check out the [Demo Site](http://xiphe.github.com/jquery.hrmny/).


Todo
----

* Implement breakpoints in harmony rules "If the lightness of the base color is under 40%, value a) should be added. If not use value b)"
* multiplication in harmony rules
* callbacks in harmony rules
* getters, setters and options
* Build some solid harmony rule presets


License
-------

Copyright (C) 2013 Hannes Diercks

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.