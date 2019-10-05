$(document).ready(function () {
    $("header").hover(function () {
        $(this).css("background-color", "darkred");
    }, function () {
        $(this).css("background-color", "darkslategray");
    });

    $(".iconPic").hover(function () {
        $(this).css("width", "100px");
    }, function () {
        $(this).css("width", "75px");
    });

    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitObject = JSON.parse(this.responseText);
            document.getElementById("gitHubReposList").innerHTML = gitObject[0].name;

        }
    };
    gitHubRequest.open("GET", "https://api.github.com/users/JohnnySanNicolas/repos", true);
    gitHubRequest.send();


});