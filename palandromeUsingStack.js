function checkPalndrome( word ) { 
    let letters = [];
    let rword = '';

    for(let i = 0; i < word.length; i++ ) {
        letters.push(word[i]);
    }
     for( let i = 0; i < word.length; i++ ) {
         rword = rword + letters.pop();
     }

     if( rword == word) {
         console.log('its a palamdrome');
     } else {
         console.log('its not a palandrome');
         
     }
}

checkPalndrome('racecara');