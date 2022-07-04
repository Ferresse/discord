const startButton = document.querySelector("#start");
var hookUrl = document.querySelector("#hookUrl");
var hookName = document.querySelector("#hookName");
var hookMessage = document.querySelector("#message");
var hookAvatar = document.querySelector("#avatarUrl");
var hookCount = document.querySelector("#count");
var hookDelay = document.querySelector("#delay");

startButton.addEventListener("click", () => {
    parseInt(document.querySelector("#count").value);
    console.log(hookCount);
    for (let i = 0; i < hookCount; i++) {
        console.log("work");
    }
});
