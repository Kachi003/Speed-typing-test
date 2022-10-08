let Passages={
    text1:"To successfully complete this course, read the study units, listen to the audios and videos, do all assessments, open the links and read, and participate in discussion forums.",
    text2:"You will receive online facilitation. The facilitation is learner centred.The mode of facilitation shall be asynchronous and synchronous.",
    text3:"The facilitator will take you through the course guide in the first lecture at the start date of facilitation.",
    text4:"They collect, preserve and disseminate library resources suitable for different categories of people such as children, adults,literates and illiterates.",
    text5:"They usually engage in repackaging of information using audiovisual materials and indigenous languages to render information services to the illiterate class.",
    text6:"They support both individual and self-conducted education as well as formal education at all levels.",
    text7:"They provide adequate information that will improve the knowledge and opinion of the masses.",
    text8:"To give advice or library development or organization to any agency of the federal, state or local government.",
    text9:"The reference librarian maintains a list of referral institutions and experts that is regularly updated.",
    text10:"Decide on the format in which you will take notes as you read the articles."
    }

let Container=document.querySelector(".container");
let Passage=document.querySelector(".text");
let Textbox=document.querySelector(".textbox");
let Counter=document.querySelector(".counter");
let Num=0;
let index=0;
let count=0;

Textbox.addEventListener("input",()=>{
    let textArray= Passage.innerHTML.split("");
    let inputArray=Textbox.value.split("");
    
    
    
    
    
    if (textArray[index]===inputArray[index]) {
        
        Textbox.classList.remove("wrong")
        Textbox.classList.add("correct");
        index++
        
    }
    
    if(textArray[index]!==inputArray[index]){
        
        Textbox.classList.remove("correct")
         Textbox.classList.add("wrong")
         index--;
        };
    

   if (Passage.innerHTML===Textbox.value) {
    Num++;
    Textbox.value="";
    loadText();
    
   }
    
    
})


function loadText() {
       let texts=Object.keys(Passages);
       let Text =texts[Num];
       Passage.innerHTML=Passages[Text];
       if (Num>texts.length-1) {
        Container.classList.add("result-page");
        Container.innerHTML=`You used ${count/60} minutes`;
        Counter.innerHTML=0;

        let newButton=document.createElement("button");
        newButton.textContent="RESTART";
        newButton.classList.add("button");
        newButton.addEventListener("click",()=>{
            location.reload();
        })

        Container.appendChild(newButton);
       }
       
       }



setInterval(()=>{
    count++;
Counter.innerHTML=count;
},1100);

loadText();




