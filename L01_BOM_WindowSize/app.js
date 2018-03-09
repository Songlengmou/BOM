(function () {

    console.log(window.innerWidth, window.innerHeight);

    var FORM_WIDTH = 200;
    var FORM_HEIGHT = 120;
    var form = document.querySelector(".login_form");

    function initFromStyle() {
        form.style.width = FORM_WIDTH + "px";
        form.style.height = FORM_HEIGHT + "px";
    }

    function centerForm() {
        form.style.left = ((window.innerWidth - FORM_WIDTH) / 2) + "px";
        form.style.top = ((window.innerHeight - FORM_HEIGHT) / 2) + "px";
    }

    function main() {
        initFromStyle();
        centerForm();
    }

    main();
})();