let cardId=1
let drop=document.getElementById('dropdownDots')
let drop1=document.getElementById('dropdownsm1')
let drop2=document.getElementById('dropdownsm2')
let dropVal=true
let dropsmVal1=true
let dropsmVal2=true
const moveFor=()=>{
    if(cardId>0&&cardId<3){
        let classCard=`card${cardId}`
        document.getElementById(classCard).classList.add('hidden')
        cardId+=1;
        classCard=`card${cardId}`
        document.getElementById(classCard).classList.remove('hidden')
    }
}
const moveBack=()=>{
    if(cardId>1){
        let classCard=`card${cardId}`
        document.getElementById(classCard).classList.add('hidden')
        cardId-=1;
        classCard=`card${cardId}`
        document.getElementById(classCard).classList.remove('hidden')
    }
}
const dropDown=()=>{
    if(dropVal){
        drop.classList.remove('hidden')
        dropVal=false
    }
    else{
        drop.classList.add('hidden')
        dropVal=true
    }
}
const dropsm1=()=>{
    if(dropsmVal1){
        drop1.classList.remove('hidden')
        dropsmVal1=false
    }
    else{
        drop1.classList.add('hidden')
        dropsmVal1=true
    }
}
const dropsm2=()=>{
    if(dropsmVal2){
        drop2.classList.remove('hidden')
        dropsmVal2=false
    }
    else{
        drop2.classList.add('hidden')
        dropsmVal2=true
    } 
}

    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('#tabs li');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');

                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });

                // Remove background from all tabs
                tabs.forEach(tab => {
                    tab.classList.remove('bg-[#FFFFFF1A]');
                });

                // Show the selected tab content
                document.getElementById(targetTab).classList.remove('hidden');

                // Add background to the selected tab
                this.classList.add('bg-[#FFFFFF1A]');
            });
        });
    });
