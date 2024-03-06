//initial start game function
function startGame() {
    //player name
    let playerName = document.querySelector("#name-input").value;
    //What happens if you don't put in a player name
    if (playerName.trim() === "") {
        alert("Please adventurer, tell me your name!")
        return;
    }
    //all player name displays in tags
    let playerNameDisplay = document.querySelector("#playerNameDisplay");
    playerNameDisplay.textContent = playerName;
    let playerNameDisplayParagraph = document.querySelector("#playerNameDisplayParagraph");
    playerNameDisplayParagraph.textContent = playerName;
    let displayNameTwoYes = document.querySelector("#displayNameTwoYes");
    displayNameTwoYes.textContent = playerName;
    let oneOneDisplayName = document.querySelector("#oneOneDisplayName");
    oneOneDisplayName.textContent = playerName;
    let oneTwoDisplayName = document.querySelector("#oneTwoDisplayName");
    oneTwoDisplayName.textContent = playerName;
    let oneOneTwoDisplayName = document.querySelector("#oneOneTwoDisplayName");
    oneOneTwoDisplayName.textContent = playerName;
    //first state switch
    document.querySelector("#one-content").style.display = "none";
    document.querySelector("#two-content").style.display = "block";
    
    

    //main button click options
    document.querySelector("#option1").addEventListener("click", function() {
        document.querySelector("#two-content").style.display = "none";
        document.querySelector("#two-option1").style.display = "block";
    });
    document.querySelector("#option2").addEventListener("click", function() {
        document.querySelector("#two-content").style.display = "none";
        document.querySelector("#two-option2").style.display = "block";
    });
    document.querySelector("#option1-one").addEventListener("click", function() {
        document.querySelector("#two-option1").style.display = "none";
        document.querySelector("#one-one").style.display = "block";
    });
    document.querySelector("#option1-two").addEventListener("click", function() {
        document.querySelector("#two-option1").style.display = "none";
        document.querySelector("#one-two").style.display = "block";
    });
    document.querySelector("#option2-one").addEventListener("click", function() {
        document.querySelector("#two-option2").style.display = "none";
        document.querySelector("#two-one").style.display = "block";
    });
    document.querySelector("#option2-two").addEventListener("click", function() {
        document.querySelector("#two-option2").style.display = "none";
        document.querySelector("#two-two").style.display = "block";
    });
    document.querySelector("#one-two-option1").addEventListener("click", function() {
        document.querySelector("#one-two").style.display = "none";
        document.querySelector("#air-attack").style.display = "block";
    });
    document.querySelector("#one-two-option2").addEventListener("click", function() {
        document.querySelector("#one-two").style.display = "none";
        document.querySelector("#sneak-attack").style.display = "block";
    });
    document.querySelector("#one-one-option1").addEventListener("click", function() {
        document.querySelector("#one-one").style.display = "none";
        document.querySelector("#throw-sword").style.display = "block";
    });
    document.querySelector("#one-one-option2").addEventListener("click", function() {
        document.querySelector("#one-one").style.display = "none";
        document.querySelector("#slice").style.display = "block";
    });
    //back buttons
    document.querySelector("#two-content-back").addEventListener("click", function() {
        document.querySelector("#two-content").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#two-option1-back").addEventListener("click", function() {
        document.querySelector("#two-option1").style.display = "none";
        document.querySelector("#two-content").style.display = "block";
    });
    document.querySelector("#two-option2-back").addEventListener("click", function() {
        document.querySelector("#two-option2").style.display = "none";
        document.querySelector("#two-content").style.display = "block";
    });
    document.querySelector("#one-one-back").addEventListener("click", function() {
        document.querySelector("#one-one").style.display = "none";
        document.querySelector("#two-option1").style.display = "block";
    });
    document.querySelector("#one-two-back").addEventListener("click", function() {
        document.querySelector("#one-two").style.display = "none";
        document.querySelector("#two-option1").style.display = "block";
    });
    //new game buttons
    document.querySelector("#two-one-newgame").addEventListener("click", function() {
        document.querySelector("#two-one").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#two-two-newgame").addEventListener("click", function() {
        document.querySelector("#two-two").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#air-attack-newgame").addEventListener("click", function() {
        document.querySelector("#air-attack").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#sneak-attack-newgame").addEventListener("click", function() {
        document.querySelector("#sneak-attack").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#throw-sword-newgame").addEventListener("click", function() {
        document.querySelector("#throw-sword").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
    document.querySelector("#slice-newgame").addEventListener("click", function() {
        document.querySelector("#slice").style.display = "none";
        document.querySelector("#one-content").style.display = "block";
    });
}

