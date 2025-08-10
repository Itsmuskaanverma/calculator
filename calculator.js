const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (btn.classList.contains("clear-all")) {
            display.value = "";
        } 
        else if (btn.classList.contains("clear-last")) {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});

// Allow Enter key for "=" and Backspace for "C"
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        display.value += e.key;
    } else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});
