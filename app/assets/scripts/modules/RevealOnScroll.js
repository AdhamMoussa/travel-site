import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(item, offset) {
        this.itemsToReveal = $(`.${item}`);
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        const obj = this;
        this.itemsToReveal.each(function() {
            const currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: obj.offset
            });
        });
    }
}

export default RevealOnScroll;