$(function () {
    $('#modal_callback').parsley().on('form:success', function () {
        event.stopPropagation();

        var form = $('#modal_callback');
        var obj = form.serialize();
        $.ajax({
            url: '/',
            dataType: "json",
            data: obj,
            async: false,
            type: "post",
            success: function (ans) {
                if (ans.STATUS) {
                    succesCallback(0);
                    form.trigger('reset');

                } else {
                    ans.ERROR.forEach(function (item) {
                        console.log(item);
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

        return false;
    });
});

// рекапча
function onCallbackSubmit(token) {
    $("#modal_callback").parsley().validate();
}
