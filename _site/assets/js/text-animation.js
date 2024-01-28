(function($) {
    'use strict';
    
    $.fn.textshuffle = function(options) {
        var settings = $.extend({
            str: '',               // The string to be animated
            waitChar: '-',         // Character displayed during animation
            charSpeed: 1,          // Speed of character changes
            moveFix: 25,           // Fixed movement amount
            moveRange: 10,         // Range of movement
            moveTrigger: 25,       // Movement trigger
            fps: 60,               // Frames per second
            callback: null         // Callback function after animation
        }, options);

        return this.each(function() {
            var $this = $(this),
                originalStr = settings.str,
                currentStr = '',
                positions = [],
                currentIndex = 0,
                maxIndex = 0,
                intervalId;

            function shuffle() {
                currentStr = '';

                for (var i = 0; i < maxIndex; i++) {
                    if (positions[i] === 0) {
                        currentStr += originalStr.charAt(i);
                    } else if (positions[i] > 0) {
                        var randomCharCode = Math.min(Math.max(originalStr.charCodeAt(i) + positions[i], 33), 126);
                        currentStr += String.fromCharCode(randomCharCode);
                        positions[i]--;
                    } else {
                        currentStr += settings.waitChar;
                    }
                }

                $this.text(currentStr);

                // if (currentIndex >= originalStr.length && positions.every(function(val) { return val === 0; })) {
                //     clearInterval(intervalId);
                //     if (typeof settings.callback === 'function') {
                //         settings.callback();
                //     }
                // }

                if (currentIndex < originalStr.length) {
                    positions[currentIndex] = settings.moveFix + Math.floor(Math.random() * settings.moveRange);
                    maxIndex = Math.max(maxIndex, currentIndex + 1);
                    currentIndex++;
                }
            }

            // Initialize positions array
            for (var i = 0; i < originalStr.length; i++) {
                positions.push(0);
            }

            // Start the animation
            intervalId = setInterval(shuffle, 1000 / settings.fps);
        });
    };

})(jQuery);

// Usage example
$(document).ready(function() {
    $('.header-title-link').textshuffle({
        str: "Jean-Pierre Daumard",  // Replace with your title
        // You can adjust other options as needed
    });
});
