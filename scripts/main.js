"use strict";$(document).ready(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var e=$(".height-fix").height();$(".height-fix").height(e)}$(".gallery__carousel").slick({arrows:!1,infinite:!0,adaptiveHeight:!0,slidesToShow:3,autoplay:!0,dots:!0,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$("#open-popup-1").magnificPopup({items:[{src:"images/1.JPG",title:"LTC | Láminas en edificios"},{src:"images/2.JPG",title:"LTC | Láminas en edificios"},{src:"images/3.jpg",title:"LTC | Láminas en edificios"},{src:"images/4.jpg",title:"LTC | Láminas en edificios"},{src:"images/2.JPG",title:"LTC | Láminas en edificios"},{src:"images/19.JPG",title:"LTC | Láminas en edificios"},{src:"images/26.jpg",title:"LTC | Láminas en edificios"}],callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},gallery:{enabled:!0},type:"image"}),$("#open-popup-2").magnificPopup({items:[{src:"images/8.JPG",title:"LTC | Láminas en coches policía"},{src:"images/5.JPG",title:"LTC | Láminas en coches policía"}],callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},gallery:{enabled:!0},type:"image"}),$("#open-popup-3").magnificPopup({items:[{src:"images/13.JPG",title:"LTC | Láminas en gimnasios"},{src:"images/14.JPG",title:"LTC | Láminas en gimnasios"},{src:"images/17.JPG",title:"LTC | Láminas en gimnasios"},{src:"images/18.JPG",title:"LTC | Láminas en gimnasios"}],callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},gallery:{enabled:!0},type:"image"}),$("#open-popup-4").magnificPopup({items:[{src:"images/30.jpg",title:"LTC | Láminas en oficinas"},{src:"images/31.jpg",title:"LTC | Láminas en oficinas"},{src:"images/32.jpg",title:"LTC | Láminas en oficinas"},{src:"images/34.jpg",title:"LTC | Láminas en oficinas"}],callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},gallery:{enabled:!0},type:"image"}),$("#open-popup-5").magnificPopup({items:[{src:"images/37.jpg",title:"LTC | Obras con andamios"},{src:"images/38.jpg",title:"LTC | Obras con andamios"},{src:"images/36.jpg",title:"LTC | Obras con andamios"},{src:"images/39.jpg",title:"LTC | Obras con andamios"},{src:"images/41.jpg",title:"LTC | Obras con andamios"}],callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},gallery:{enabled:!0},type:"image"})}),function(e){function i(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,i){var s=a(e,i)?n:t;s(e,i)}var a,t,n;"classList"in document.documentElement?(a=function(e,i){return e.classList.contains(i)},t=function(e,i){e.classList.add(i)},n=function(e,i){e.classList.remove(i)}):(a=function(e,s){return i(s).test(e.className)},t=function(e,i){a(e,i)||(e.className=e.className+" "+i)},n=function(e,s){e.className=e.className.replace(i(s)," ")});var m={hasClass:a,addClass:t,removeClass:n,toggleClass:s,has:a,add:t,remove:n,toggle:s};"function"==typeof define&&define.amd?define(m):e.classie=m}(window),function(){function e(e){classie.add(e.target.parentNode,"input--filled")}function i(e){""===e.target.value.trim()&&classie.remove(e.target.parentNode,"input--filled")}String.prototype.trim||!function(){var e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(e,"")}}(),[].slice.call(document.querySelectorAll("input.input__field")).forEach(function(s){""!==s.value.trim()&&classie.add(s.parentNode,"input--filled"),s.addEventListener("focus",e),s.addEventListener("blur",i)})}(),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top-100},1e3),!1}})});