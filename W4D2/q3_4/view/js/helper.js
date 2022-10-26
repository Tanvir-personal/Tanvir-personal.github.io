/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
$(() => {
    const addedSuccess = (data, status) => {
        $('#msg').text('Product added to cart');
        console.log(data);
        $('#count').html(`(${data.count})`);
    };
    const noSuccess = () => {
        $('#msg').text('Unable to reach server');
      //   setTimeout(clearMsg, 10000);
    };

    // eslint-disable-next-line eqeqeq
    $('#count').html($('#cartItemCount').val() == 0 ? '' : `(${$('#cartItemCount').val()})`);

    const getCartSuccess = (data, status) => {
            if (!data) {
                  $('#count').html(`(${data.count})`);
            }
            console.log(data);
    };

    $.get({
      url: '/cart',
      contentType: 'application/json; charset=utf-8',
      })
      .done(getCartSuccess)
      .fail(noSuccess);

    $('#add').submit(() => {
        const data = {
            productId: $('#productId').val(),
        };
        console.log(`data: ${JSON.stringify(data)}`);
        $.post({
            url: '/add-to-cart',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
        })
            .done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});
