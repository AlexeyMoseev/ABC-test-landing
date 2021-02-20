$(document).ready(function () {
    for (var i = 0; i < $('.list__title').length; i++) {
        toggle(i);
    }

    function toggle(i) {
        $(`.list__title:eq(${i})`).on('click', function () {
            let x = $(`.list__description:eq(${i})`);

            //Индикатор состояния
            if (x.css('display') === 'block') {
                $(`.list__title:eq(${i})`).find($('.list__state-indicator-minus')).remove();
                $(`.list__title:eq(${i})`).append(
                    $(
                        '<img class="list__state-indicator-plus" src="../images/plus.svg"></img>'
                    )
                );
            }
            if (x.css('display') === 'none') {
                $(`.list__title:eq(${i})`).find($('.list__state-indicator-plus')).remove();
                $(`.list__title:eq(${i})`).append(
                    $(
                        '<img class="list__state-indicator-minus" src="../images/minus.svg"></img>'
                    )
                );
            }

            x.slideToggle('slow');
        });
    }
});
