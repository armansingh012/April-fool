let a = document.querySelector(".btn");
let b = document.querySelector("button");
let c = document.querySelector(".april-fool")
// a.addEventListener("click" , (a) => {
// console.log("hello")
// b.innerHTML = "click me again"

// })
c.classList.add("hide")
c.classList.remove("april-fool")
a.classList.remove("hide")
const messages = ["click me again", "try harder buddy", "you are just getting there", "one more time", "it's last time promise"];
        let index = 0;

        a.addEventListener("click", () => {
            if (index < messages.length) {
                b.innerHTML = messages[index]; 
                index++;
            } else {
                c.classList.remove("hide")
                c.classList.add("april-fool");
                a.classList.add("hide")
            }
        });
