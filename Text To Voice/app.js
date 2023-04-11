button = document.querySelector("button")
text = document.querySelector("textarea")

button.addEventListener("click",()=>{
    let voice = new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(voice)
})