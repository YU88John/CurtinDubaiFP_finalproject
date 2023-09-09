function news(){
    window.scrollTo(0, document.body.scrollHeight)        
}

function welcome(){
    let name = document.getElementById("name").value
    let title = document.getElementById("news") 
    title.innerHTML = "Successfully subscribed!"

    document.getElementById("container").style.display = "none";
    document.getElementById("alert").innerHTML = "<p>Thank you for your interest, Mr./Ms. " + name + ".</p>" +
    "<p>You will receive the news of latest collections as soon as possible.</p>"
}
