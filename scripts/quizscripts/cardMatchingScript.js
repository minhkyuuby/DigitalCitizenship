let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let count = 0;
$( document ).ready(function() {
    $("section.memory-game").each(function(){
        var divs = $(this).find("div");
        for(var i = 0; i < divs.length; i++) $(divs[i]).remove();
        shuffle(divs);
        for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
    });

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function checkForMatch() {
    if(firstCard.dataset.framework == secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();
    }
}
function disableCards() {
    $(firstCard).click(false);
    $(secondCard).click(false);
    resetBoard();
    if(count==5) {
        $("#myModal").modal();
        return;
    }
    count++;
}
function unflipCards() {
    lockBoard = true;
    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    resetBoard();
    }, 1000);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
$(document).on('click' , '.memory-card', function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if(lockBoard) return;
    if(this == firstCard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        secondCard = this;
        checkForMatch();
});

$(document).on('click' , '.reset', function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    location.reload();
});
