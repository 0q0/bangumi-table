$(function() {

    var sidebar = $('#sidebar'),
        menu = $('#menu-toggle'),
        intro = $('.words-wrap'),
        closed = true,
        toShow = $('#popup-box, #overlay'),
        toAdd = $('#popup-box .content-box');

    function checkSize() {

        if (intro.css("display") === "none" ) {

            $('table').off().on('click', 'img', function() {
                var activeCell = $(this).parent();
                activeCell.clone().contents().prependTo(toAdd);
                toShow.addClass( "box-show" );
            });

            $('#overlay').off().on('click', function() {
                toShow.removeClass( "box-show" );
                toAdd.empty();
            });

        } else {
            $('table, #overlay').off();
            toShow.removeClass( "box-show" );
            toAdd.empty();
        }

        if (menu.css("display") === "none" ) {
            if (closed === false) {
                closeSidebar();
            }
        }
    }

    function openSidebar() {
        sidebar.velocity({translateX: "-120px"}, 200, "linear");
        menu.velocity({rotateZ: "-45"}, 200, "linear");
        closed = false;
    }

    function closeSidebar() {
        sidebar.velocity({translateX: "120px"}, 200, "linear");
        menu.velocity({rotateZ: "0"}, 200, "linear");
        closed = true;
    }

    menu.on('click', function(event) {
    
        if (closed) {
            openSidebar();
        } else {
            closeSidebar();
        }

    });

    $(window).resize(checkSize);

    if (menu.css("display") === "none" ) {
        closed = false;
    } else {
        closed = true;
    }

    checkSize();

});
