$( document ).ready(function() {
    ! function(e) {
        e.fn.hover3d = function(s) {
            var t = e.extend({
                selector: null,
                perspective: 1e3,
                sensitivity: 20,
                invert: !1,
                shine: !1,
                hoverInClass: "hover-in",
                hoverOutClass: "hover-out",
                hoverClass: "hover-3d"
            }, s);
            return this.each(function() {
                var s = e(this),
                    r = s.find(t.selector);
                t.shine && r.append('<div class="shine"></div>');
                var n = e(this).find(".shine");
                s.css({
                    perspective: t.perspective + "px",
                    transformStyle: "preserve-3d"
                }), r.css({
                    perspective: t.perspective + "px",
                    transformStyle: "preserve-3d"
                }), n.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    "z-index": 9
                }), s.on("mouseenter", function() {
                    return r.addClass(t.hoverInClass + " " + t.hoverClass), void setTimeout(function() {
                        r.removeClass(t.hoverInClass)
                    }, 1e3)
                }), s.on("mousemove", function(e) {
                    return o = e, a = s.innerWidth(), i = s.innerHeight(), v = t.invert ? (a / 2 - o.offsetX) / t.sensitivity : -(a / 2 - o.offsetX) / t.sensitivity, p = t.invert ? -(i / 2 - o.offsetY) / t.sensitivity : (i / 2 - o.offsetY) / t.sensitivity, dy = o.offsetY - i / 2, dx = o.offsetX - a / 2, theta = Math.atan2(dy, dx), angle = 180 * theta / Math.PI - 90, angle < 0 && (angle += 360), r.css({
                        perspective: t.perspective + "px",
                        transformStyle: "preserve-3d",
                        transform: "rotateY(" + v + "deg) rotateX(" + p + "deg)",
                        //boxShadow: "rgba(27, 45, 100, 0.25) 25px 0px 65px"
                    }), r.parent().parent().css({
                        zIndex: 99,
                    }), r.find(".project__image-overlay").fadeIn(300), void n.css("background", "linear-gradient(" + angle + "deg, rgba(255,255,255," + o.offsetY / i * .5 + ") 0%,rgba(255,255,255,0) 80%)");
                    var o, a, i, v, p
                }), s.on("mouseleave", function() {
                    return r.addClass(t.hoverOutClass + " " + t.hoverClass), r.css({
                        perspective: t.perspective + "px",
                        transformStyle: "preserve-3d",
                        transform: "rotateX(0) rotateY(0)",
                        //boxShadow: "rgba(0, 0, 0, 0.04) 1px 1px 30px"
                    }), r.parent().parent().css({
                        zIndex: 10,
                    }), r.find(".project__image-overlay").fadeOut(300), void setTimeout(function() {
                        r.removeClass(t.hoverOutClass + " " + t.hoverClass)
                    }, 1e3)
                })
            })
        }
    }(jQuery);

});
$(document).ready(function() {
	$(".owl-item").hover3d({
		selector: ".item",
		shine: !1,
		sensitivity: 120
	});
	$(".item-wide").hover3d({
		selector: ".box-holder",
		shine: !1,
		sensitivity: 200
	});
});