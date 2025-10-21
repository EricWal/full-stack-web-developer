var buttonNums = document.querySelectorAll("button").length;
for (var i = 0; i < buttonNums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){alert(2)})
}
