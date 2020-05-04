function alert(selector, text, success){
    if(success) {
        $(selector).addClass('alert-success')
    } else {
        $(selector).addClass('alert-danger')
    }
    $(selector + '-text').empty()
    $(selector + '-text').append(text)
    $(selector).show()
}

$(document).on('click', '.update', event => {
    event.preventDefault()
    const parent = $(event.target).parents('.event')
    const id = parent.attr('id')
    const title = parent.find('.title').val()
    const date = parent.find('.date').val()
    const building = parent.find('.building').val()
    const room = parent.find('.room').val()
    const start = parent.find('.start-time option:selected').val()
    const end = parent.find('.end-time option:selected').val()
    const endRecur = parent.find('.recur-end').val()
    let weekString = ''
    let atLeastOne = false
    let recurId = ''
    if(parent.find('.recur-block').css('display') === 'block'){
        recurId = parent.find('.recur-block').attr('id')
        $(parent.find('.form-check-input')).each(function() {
            if($(this).attr('id') !== 'recur') {
                if($(this).is(':checked')) {
                    atLeastOne = true
                    weekString += '1'
                } else {
                    weekString += '0'
                }
            }
        })
        if(!atLeastOne) {
            alert('Select at least one weekday')
        }
        if(!endRecur) {
            alert('Select a date to end recurring event')
        }
    }
    $.ajax({
        type: "post",
        url: "api/event/" + id,
        data: {
            title,
            date,
            building,
            room,
            start,
            end,
            weekString,
            endRecur,
            recurId
        },
        success: function(response){
            $('#myModal').modal('hide')
            location.reload()
        },
        error: function(response){
            $('#myModal').modal('hide')
            alert('#alert', response.responseJSON.msg, false)
        }
    })
})

$(document).on('click', '.delete', event => {
    event.preventDefault()
    const id = $(event.target).parents('.event').attr('id')
    $.ajax({
        type: "delete",
        url: "api/event/" + id,
        success: function(response){
            $(event.target).parents('.event').remove()
            location.reload()
        },
        error: function(response){
            $('#myModal').modal('hide')
            alert('#alert', response.responseJSON.msg, false)
        }
    })
})