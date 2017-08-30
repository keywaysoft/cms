function hideMenu() {
    $('.main-nav li.open').removeClass('open');
};


var navNarrow = false;
$(document).ready(function () {
    $(".toggle-nav").click(function (e) {
        e.preventDefault();
        boxMenuSwitch();
    });

    /* sanye:图标添加事件 */
    $(".left-table tr[treeitemlevel=1] td").each(function(){
        var title = $(this).text();
        $(this).children("img").eq(1).attr("title", title);
        $(this).children("img").eq(1).bind("click", function () {
            if($(this).parent().parent().next().find("a").length > 0){
                var lkWord = $(this).parent().parent().next().find("a").eq(0).text();
                $(this).parent().parent().next().find("a").eq(0).html("<span>"+ lkWord +"</span>");
                $(this).parent().parent().next().find("a").eq(0).children("span:eq(0)").trigger('click');
            }
            $(this).prev().attr("src", "/keyway/assets/icons/tree/plus-3.png");
            $(this).prev().attr("isopen","false");
            $(this).prev().click();
             navReset();
        })

        /*美化目录树图标*/
        if( $(this).children("img").eq(0).attr("isopen") == "false"){
            //$(this).children("img").eq(0).attr("src", "/keyway/assets/icons/tree/plus-1.png");
        }else{
            //$(this).children("img").eq(0).attr("src","/keyway/assets/icons/tree/plus-2.png");
        }
    });
    $(".left-table tr[treeitemlevel=1] td img[isopen]").attr("src", "/keyway/assets/icons/tree/plus-3.png");
});

function boxMenuSwitch()
{
    navNarrow = !navNarrow;
    navNarrow?boxMenu():navReset();
}

function boxMenu(){
    navNarrow = true;
    $("#left").addClass("forced-hide");
    $("div.right").addClass("reight_p");
    $(".left-table tr[treeitemlevel=1] td").addClass("onlyIcon");
    $('.left-table tr[treeitemlevel=1] td').each(function(){
        $(this).children("img").eq(0).hide();
    });
    $(".toggle-nav i").removeClass().addClass('icon-arrow-right');
}

function navReset(){
    navNarrow = false;
    $("div.right").removeClass("reight_p");
    $("#left").removeClass("forced-hide");
    $(".left-table tr[treeitemlevel=1] td").removeClass("onlyIcon");
    $('.left-table tr[treeitemlevel=1] td').each(function(){
        $(this).children("img").eq(0).show();
    });
    $(".toggle-nav i").removeClass().addClass('icon-arrow-left');
}
