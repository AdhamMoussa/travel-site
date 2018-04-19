import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.triggerEl = $('#our-beginning');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionsWaypoint();
        this.addSmoothScroll();
    }
    createHeaderWaypoint() {
        let that = this;
        new Waypoint({
            element: this.triggerEl[0],
            handler: function (direction) {
                if (direction === 'down') {
                    that.siteHeader.addClass('site-header--darker');
                } else {
                    that.siteHeader.removeClass('site-header--darker');
                }
            }
        });
    }
    createPageSectionsWaypoint() {
        let that = this;
        this.pageSections.each(function () {
            let $item = $(this);
            let currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function (direction) {
                    if (direction === "down") {
                        let matching = $item.attr('data-matching-link');
                        that.headerLinks.removeClass('active');
                        $(matching).addClass('active');
                    }
                },
                offset: '30%'
            });
            new Waypoint({
                element: currentItem,
                handler: function (direction) {
                    if (direction === "up") {
                        let matching = $item.attr('data-matching-link');
                        $(matching).addClass('active').parent().siblings().children().removeClass('active');
                    }
                },
                offset: '-50%'
            });
        });
    }
    addSmoothScroll() {
        this.headerLinks.smoothScroll();
    }
}

export default StickyHeader;