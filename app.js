const startButton = document.querySelector("#start");
var hookUrl = document.getElementById("hookUrl");
var hookName = document.getElementById("hookName");
var hookMessage = document.getElementById("message");
var hookAvatar = document.getElementById("avatarUrl");
var hookCount = document.getElementById("count");
var hookDelay = document.getElementById("delay");
let i = 0;

startButton.addEventListener("click", () => {
    if (hookCount.value != 0 && hookUrl.value != 0 && hookMessage.value != 0) {
        function increment() {
            if (i < hookCount.value) {
                i++;
                fetch(hookUrl.value, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: hookName.value || "hooker",
                        avatar_url: hookAvatar.value || "",
                        content: hookMessage.value || ".",
                    }),
                });
            } else {
                clearInterval(incrementInterval);
                i = 0;
            }
        }
    } else {
        alert("Put values in");
    }

    let incrementInterval = setInterval(increment, hookDelay.value || 500);
});
