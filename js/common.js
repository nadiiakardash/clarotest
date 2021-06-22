$(document).ready(function () {
    // aos animation
    AOS.init({
        disable: function () {
            var maxWidth = 1025;
            return window.innerWidth < maxWidth;
        }
    });
    // hide/show header
    var header = $('.header'),
        scrollPrev = 0;
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 70 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;

        if (scrolled > 70) {
            header.addClass('scrhead');
        } else {
            header.removeClass('scrhead');
        }
    });
    // menu
    $('.burger-btn').click(function () {
        $('.mobile-nav').addClass('showmenu');
        $('.mobile-nav__bg').addClass('showbg');
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.mob-nav__wrapp').length && !$target.closest('.burger-btn').length) {
            $('.mobile-nav').removeClass('showmenu');
            $('.mobile-nav__bg').removeClass('showbg');
        }
    });
    $('.closemenu').click(function () {
        $('.mobile-nav').removeClass('showmenu');
        $('.mobile-nav__bg').removeClass('showbg');
    });
    // range slider
    if ($('*').is('input[type="range"]')) {
        $(function () {
            var $document = $(document),
                $inputRange = $('input[type="range"]');

            function valueOutput(element) {
                var value = element.value,
                    output = element.parentNode.getElementsByTagName('output')[0];
                output.innerHTML = value;
            }
            for (var i = $inputRange.length - 1; i >= 0; i--) {
                valueOutput($inputRange[i]);
            };
            $document.on('input', 'input[type="range"]', function (e) {
                valueOutput(e.target);
            });

            $inputRange.rangeslider({
                polyfill: false
            });
        });
    }
    // order filter
    $('.category-dropdown').on('click', '.category-change a', function (ev) {
        if ("#" === $(this).attr('href')) {
            ev.preventDefault();
            var parent = $(this).parents('.category-dropdown');
            parent.find('.change-text').html($(this).html());
        }
    });
    // Order form
    $('input[name="trafftype"], .rangesl').change(function () {
        var trafficTypeVal = $('input[name="trafftype"]:checked').val(),
            totalVisitors = $('.rangesl').val(),
            trafficTypePrice = $('.trafficbox .totaltext span'),
            totalVisitorsPrice = $('.visitorsbox .totaltext span'),
            formTotalPrice = $('.order-bottsect .title span');

        totTrPrice = $(trafficTypePrice).text(Number(trafficTypeVal).toFixed(2));
        totVarVis = $(totalVisitorsPrice).text(Number((trafficTypeVal * totalVisitors) / 1000).toFixed(2));
        formTotal = $(formTotalPrice).text(Number((trafficTypeVal * totalVisitors) / 1000).toFixed(2));
    });
    // country select
    $('input[name="geoloc"]').change(function () {
        var selectBox = $('#country-select');
        if ($('#geoloc2').is(':checked')) {
            $(selectBox).prop('disabled', false);
        } else {
            $(selectBox).prop('disabled', true);
        }
    });
    // password inputs
    $(".eye").click(function () {
        var input = $(this).parent().find('input');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    // header user dropdown
    var userDropBtn = $('.header__sign>ul.loglist>li');
    $(userDropBtn).click(function () {
        $('.loglist__sublist').slideToggle();
        $(this).toggleClass('rotatearrow');
    });
    // ---mob
    $('.mobile-nav__logined>li').click(function () {
        $(this).toggleClass('rotatearr')
        $('.mob-nav__wrapp').toggleClass('mobusermenu');
    });
    // Mask
    if ($('*').is('.nummask')) {
        $('.nummask').inputmask({ "mask": "+ 9 9999 99 99 999" }); //specifying options
    }
    // sort status
    $('.allshow').click(function () {
        $('.acc-tablerow.active-order, .acc-tablerow.waiting-order').show();
    });
    $('.actshow').click(function () {
        $('.acc-tablerow.active-order').show();
        $('.acc-tablerow.waiting-order').hide();
    });
    $('.waitshow').click(function () {
        $('.acc-tablerow.active-order').hide();
        $('.acc-tablerow.waiting-order').show();
    });
    // header user menu - close
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header.logined .header__sign .loglist').length && !$target.closest('.header__sign ul.loglist .loglist__sublist').length) {
            $('.header__sign ul.loglist .loglist__sublist').slideUp();
            $('.header__sign>ul.loglist>li').removeClass('rotatearrow');
        }
    });














});

