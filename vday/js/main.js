let no_button = document.getElementsByClassName("no-button")[0],
    yes_button = document.getElementsByClassName("yes-button")[0],
    main_container = document.getElementById("main-container"),
    gif_preview = document.getElementById("gif-preview"),
    no_messages = [
        "really? :((((",
        "are you sure about it?",
        "please :(",
        "i'll give you one more chance",
        "oh :(",
        "i'm sorry",
        "are you sure?",
        "no cap?",
        "okay",
        "okay.",
        "okay..",
        "okay...",
        "\uD83D\uDE14",
        "wait",
        "please baby",
        "one more time",
        "i love you",
        "i miss you",
        "i miss your smile, eyes...",
        "your cute dimples",
        "your presence",
        "your everything",
        "no?",
        "catch me :(",
    ];
    var i = 0;
    function updateMessageAndGIF() {
        if (i < no_messages.length) {
            no_button.textContent = no_messages[i++];
            let e = i >= 13 ? "gif/sad_panda_2.gif" : "gif/sad_panda.gif";
            gif_preview.getAttribute("src") !== e && gif_preview.setAttribute("src", e);
        } else no_button.textContent === no_messages[no_messages.length - 1] && animateButton();
    }
    function animateButton() {
        let e = no_button.offsetWidth / 2,
            t = no_button.offsetHeight / 2;
        no_button.style.transformOrigin = `${e}px ${t}px`;
        let n = Math.floor(Math.random() * main_container.offsetWidth - main_container.offsetWidth / 2),
            o = Math.floor(Math.random() * main_container.offsetHeight - main_container.offsetHeight / 2),
            a = `${0.6 * n}px ${0.6 * o}px`;
        (no_button.style.translate = a), (no_button.style.position = "absolute");
    }
    no_button.addEventListener("click", updateMessageAndGIF),
    yes_button.addEventListener("click", () => {
        window.location.replace("/vday/thankyou");
    });
