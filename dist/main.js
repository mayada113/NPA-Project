$("button").on("click", function () {
    let teamInput = $("#team-input").val()
    $.get(`/teams/${teamInput}`, function (playerData) {
        console.log(playerData)        
        renderTeam(playerData)
    }
    )
    
})


const renderTeam = function (playerData) {
    $("#player-info").empty() 
    const source = $('#players-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({playerData});
    $('#player-info').append(newHTML);
}

