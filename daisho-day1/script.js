const helloBtn=document.getElementById("helloBtn");
const message=document.getElementById("message");

helloBtn.addEventListener("click",()=>{
    const hour = newDate().getHours();
    let greeting = "こんにちは";
    if (hour<12){
        greeting = "おはよう";
    }else if (hour>=18){
        greeting ="こんばんわ";
    }
    message.textContent = '${greeting}GitHub Pagesの公開に成功しました';
});