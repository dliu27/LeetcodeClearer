console.log('Content script loaded.');

// Function to reset code by clicking the buttons
function resetCode() {

    const buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].offsetLeft === 667) {
            buttons[i].click();
            console.log('Reset button clicked.');
            break
        }
    };

    setTimeout(() => {
        const buttons2 = document.querySelectorAll("button");
        for (let i = 0; i < buttons2.length; i++) {
            if (buttons2[i].innerText === "Confirm") {
                buttons2[i].click();
                console.log('Confirm button clicked.');
                break
            }
        }
    }, 50)    
}

window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "E") {
      resetCode();
    }
  });
  