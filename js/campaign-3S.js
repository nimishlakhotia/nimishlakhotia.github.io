var ongoing = document.querySelector(".ongoingCampaigns");
var upcoming = document.querySelector('.upcomingCampaigns');
var previous = document.querySelector('.previousCampaigns');
var ongoingDownBtn = ongoing.getElementsByClassName('downicon');
var upcomingDownBtn = upcoming.getElementsByClassName('downicon');
var previousDownBtn = previous.getElementsByClassName('downicon');

ongoingDownBtn[0].querySelector('i').addEventListener('click',function(){
    console.log('clicked');
    var hiddenCards = ongoing.getElementsByClassName('hd');
   if(this.classList.contains('condensed')){
       this.classList.remove('condensed');
       this.classList.remove('fa-chevron-down');
       this.classList.add('fa-chevron-up');
       var upcoming = document.querySelector('.upcomingCampaigns');
       var previous = document.querySelector('.previousCampaigns');
       upcoming.classList.add('hidden');
       previous.classList.add('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
           hiddenCards[i].classList.remove('hidden');  
       }
   }
   else{
       this.classList.add('condensed'); 
       this.classList.remove('fa-chevron-up');
       this.classList.add('fa-chevron-down');
       var upcoming = document.querySelector('.upcomingCampaigns');
       var previous = document.querySelector('.previousCampaigns');
       upcoming.classList.remove('hidden');
       previous.classList.remove('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
        hiddenCards[i].classList.add('hidden');  
    }
   }
})

upcomingDownBtn[0].querySelector('i').addEventListener('click',function(){
    console.log('clicked');
    var hiddenCards = upcoming.getElementsByClassName('hd');
   if(this.classList.contains('condensed')){
       this.classList.remove('condensed');
       this.classList.remove('fa-chevron-down');
       this.classList.add('fa-chevron-up');
       var ongoing = document.querySelector('.ongoingCampaigns');
       var previous = document.querySelector('.previousCampaigns');
       ongoing.classList.add('hidden');
       previous.classList.add('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
        hiddenCards[i].classList.remove('hidden');  
    }
   }
   else{
       this.classList.add('condensed'); 
       this.classList.remove('fa-chevron-up');
       this.classList.add('fa-chevron-down');
       var ongoing = document.querySelector('.ongoingCampaigns');
       var previous = document.querySelector('.previousCampaigns');
       ongoing.classList.remove('hidden');
       previous.classList.remove('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
        hiddenCards[i].classList.add('hidden');  
    }
   }

})

previousDownBtn[0].querySelector('i').addEventListener('click',function(){
    console.log('clicked');
    var hiddenCards = previous.getElementsByClassName('hd');
   if(this.classList.contains('condensed')){
       this.classList.remove('condensed');
       this.classList.remove('fa-chevron-down');
       this.classList.add('fa-chevron-up');
       var upcoming = document.querySelector('.upcomingCampaigns');
       var ongoing = document.querySelector('.ongoingCampaigns');
       upcoming.classList.add('hidden');
       ongoing.classList.add('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
        hiddenCards[i].classList.remove('hidden');  
    }
   }
   else{
       this.classList.add('condensed'); 
       this.classList.remove('fa-chevron-up');
       this.classList.add('fa-chevron-down');
       var upcoming = document.querySelector('.upcomingCampaigns');
       var ongoing = document.querySelector('.ongoingCampaigns');
       upcoming.classList.remove('hidden');
       ongoing.classList.remove('hidden');
       for (let i = 0; i < hiddenCards.length; i++) {
        hiddenCards[i].classList.add('hidden');  
    }
   }
})