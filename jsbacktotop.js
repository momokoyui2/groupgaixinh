jQuery(document).ready(function() {
    var e = $(this);
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() >= 100 ? jQuery("#scrollToTop").fadeIn(250) : jQuery("#scrollToTop").fadeOut(250)
    })
});
$(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().topp3
            }, 500), !1
        }
    })
});
