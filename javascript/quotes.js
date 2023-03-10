function randomquote() {
    var toss= Math.floor(Math.random() * 10) + 1;
    if (toss ==1){
    document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body">"With the world so set on tearing itself apart, it don\'t seem like such a bad thing to me to want to put a little bit of it back together."</p><p class="card-author-or-date">-Desmond Doss</p>'
    }

    else if (toss==2){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body">"When you can do the things that I can, but you don\'t, and then the bad things happen, they happen because of you."</p><p class="card-author-or-date">-Peter Parker a.k.a. Spiderman</p>'
    }
    else if (toss==3){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body">“Compromise where you can. Where you can\'t, don\'t. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say \'No, you move\'.</p><p class="card-author-or-date">-Captain America a.k.a Steve Rogers</p>'
    }
    else if (toss==4){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body">"The world will always be filled with injustice. If you have time to give up or hold a grudge against that injustice, then use that time to enjoy battling those injustices instead."</p><p class="card-author-or-date">-Korosensei</p>'
    }
    else if (toss==5){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body">“We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. <br><br> And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for. To quote from Whitman, “O me! O life!… of the questions of these recurring; of the endless trains of the faithless… of cities filled with the foolish; what good amid these, O me, O life?” “Answer. That you are here — that life exists, and identity; that the powerful play goes on and you may contribute a verse.” That the powerful play  <b>goes on</b> and you may contribute a verse. What will your verse be?”</p><p class="card-author-or-date">-John Keating, Dead Poets Society</p>'
    }
    else if (toss==6){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body"> "I went to the woods because I wanted to live deliberately. I wanted to live deep and suck out all the marrow of life. To put to rout all that was not life; and not, when I had come to die, discover that I had not lived."</p><p class="card-author-or-date">-Neil Perry, Dead Poets Society</p>'
    }
    else if (toss==7){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body"> "All problems in computer science can be solved by another level of indirection"</p><p class="card-author-or-date">-Butler Lampson</p>'
    }
    else if (toss==8){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body"> "When the student is ready the master arrives. <br> When the student is truely ready... the master will dissapear"</p><p class="card-author-or-date">-Tao Te Ching</p>'
    }
    else if (toss==9){
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body"> "Sometimes life is like this dark tunnel. You can\'t always see the light at the end of the tunnel, but if you just keep moving... you will come to a better place."</p><p class="card-author-or-date">-Uncle Iroh, Avatar the Last Airbender</p>'
    }

    else{
        document.getElementsByClassName("card-details")[0].innerHTML = '<p class="card-body"> "It\'s time for you to look inward, and start asking yourself the big questions. <br> Who are you? <br> And what do you want?"</p><p class="card-author-or-date">-Uncle Iroh, Avatar the Last Airbender</p>'
    }
    window.scrollTo(0,document.body.scrollHeight);
    }

