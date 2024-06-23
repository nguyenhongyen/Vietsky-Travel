const handleStickySidebar = function () {
    if ($('#sidebarSticky').length > 0) {
        $('#sidebarSticky').css('top',$('header').outerHeight());

    }
}
$(function () {
    handleStickySidebar()
});