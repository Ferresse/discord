const startButton = document.querySelector("#start");
var hookUrl = document.getElementById("hookUrl");
var hookName = document.getElementById("hookName");
var hookMessage = document.getElementById("message");
var hookAvatar = document.getElementById("avatarUrl");
var hookCount = document.getElementById("count");
var hookDelay = document.getElementById("delay");

startButton.addEventListener("click", () => {
    if (hookCount.value != 0 && hookUrl.value != 0 && hookMessage.value != 0) {
        for (let i = 0; i < hookCount.value; i++) {
            let delayInterval = setInterval(() => {
                console.log("x", i);
                // fetch(hookUrl.value, {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                //         username: hookName.value || "hooker",
                //         avatar_url: hookAvatar.value || "",
                //         content: hookMessage.value || ".",
                //     }),
                // });
                if (i === hookCount.value) {
                    clearInterval(delayInterval);
                }
            }, 500);
        }
    } else {
        alert("Put values in");
    }
});
