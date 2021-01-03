$('#grid').click(clicked);

function clicked(e){
    //check if click is a button
    if(e.target == e.currentTarget){
        return;
    }
    //stop looking for other event listeners on this event
    e.stopPropagation();
    //get clicked button
    var buttonText = e.target.textContent;
    var desc = JSON.parse(sessionStorage.getItem(buttonText));
    //change description box text
    $('#description').html(desc[1]);
    //jump back to top (for mobile)
    $('html,body').scrollTop(0);
}