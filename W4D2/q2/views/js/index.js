/* eslint-disable no-undef */
$(() => {
    const clearMsg = () => {
        $('#qLabel').html('Ask Question');
        $('#question').val('');
    };
    const askedSuccess = (data, status) => {
        $('#qLabel').html('Answer');
        $('#question').val(data);
        $('#question').focus();
        setTimeout(clearMsg, 4000);
    };
    const noSuccess = () => {
        $('#question').text('Unable to reach server');
        setTimeout(clearMsg, 10000);
    };

    $('#ask').submit(() => {
        $.get({
            url: '/answer',
            contentType: 'application/json; charset=utf-8',
        })
            .done(askedSuccess)
            .fail(noSuccess);
        return false;
    });
});
