(function() {
    'use strict';

    var words = [
        { 'en': 'fly', 'ja': '飛ぶ' },
        { 'en': 'push', 'ja': '押す' },
        { 'en': 'pull', 'ja': '引く' },
        { 'en': 'run', 'ja': '走る' },
        { 'en': 'walk', 'ja': '歩く' }
    ];

    var card = document.getElementById('card');
    var cardFront = document.getElementById('card-front');
    var cardBack = document.getElementById('card-back');
    var btn = document.getElementById('btn');
    card.addEventListener('click', function() {
        flip();
    });
    btn.addEventListener('click', function() {
        next();
    });

    function next() {
        if (card.className === 'open') {
            card.addEventListener('transitionend', setCard);
            flip();
        } else {
            setCard();
        }

    }
    function setCard() {
        var num = Math.floor(Math.random() * words.length);
        cardFront.innerHTML = words[num]['en'];
        cardBack.innerHTML = words[num]['ja'];
        card.removeEventListener('transitionend', setCard);
    }

    setCard();

    window.addEventListener('keyup', function(e) {
        if (e.keyCode === 70) {
            flip();
        } else if (e.keyCode === 78) {
            next();
        }
    });

    function flip() {
        card.className = card.className === '' ? 'open' : '';
    }

})();