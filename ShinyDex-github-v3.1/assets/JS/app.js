
function startAll(){
// $('#nat-btn').on('click', function() {
//     document.getElementById("nationalPokedex").classList.toggle('show');

// }) ;
// When the user clicks on the button, scroll to the top of the document

/// e n d   b u t t o n s
scrollBtn = `<button onclick="topFunction()" id="scrollTop" href="#myHeader">
<img id="top-arrow" src="assets/img/top-icon.png" alt="scroll-to-top-arrow">

<img id="ball-icon" src="assets/img/poke-top.png" alt="scroll-to-top-octopus-icon">
</button>`;

    ///   N A T I O N A L    P O K E D E X

      
pokedex_url ="https://pokeapi.co/api/v2/pokemon?limit=905";

$.getJSON(pokedex_url, function(jsonObj) {
    var pkmnList = jsonObj.results; 
    myArray=[];

    // $.each(pkmnList, function(index, object) { 
        var card ="";
        for (var i = 0; i < pkmnList.length; i++) {
        var pmnarray = pkmnList[i];
        var nomi= pmnarray.name;
        console.log(nomi);
        
    };
    myArray.push(nomi);
        console.log(myArray);
       
        var smurf='';
        // var zeros= "000";

        for (var i = 0; i < pkmnList.length; i++) {
            let pokemon = pkmnList[i];
            let nome = pokemon["name"];
            
            console.log("Indice del singolo pokemon ", i, nome, myArray[i], "pokemon: ", pokemon);
         
        

        var gender = "mf";
            var forms="-";
            var formVar="";
            var pokeNameVar="";
            // var dropmenu ="";
            muteBtn='<span>'+forms+'</span>';
            // var schedaLink="";
            var dropBtn=""; 
            var modalbody="";
            var modallo="";
            modalcont='<div class="container-fluid">';
            modalrow= '<div class="row">';
            modalcol='<div class="col-md-4 col-lg-3">';
            modalcolxl='<div class="col-md-4 col-lg-3 col-xl-2">';
            modalcolfull='<div class="col-md-3 col-lg-2 col-xl">';
                     //struttura di una table forms
                    
        //  div='<div class="dropdown-content">';
        //  cardop='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_';
        
        //  img_s='.png" alt="sprite"><img class="f-shinyimg" src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_';
        
         cardop='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/normal/';
        
         img_s='.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/shiny/';
         //inverted shiny-normal:
         cardopIn='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/shiny/';
        
         img_sIn='.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/normal/';
         //back sprite:
         cardopBk='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/back-normal/';
        
         img_sBk='.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/back-shiny/';
        
        
         spans='.png" alt="sprite-shiny"></span><br><span class="text-muted"><p class="f-orms mt-2">';
         fem='female';
         male='male';
         mega='mega';
         mx= 'mega X';
         my= 'mega Y';
         giga='gigamax';
         alola='Alola form';
         galar='Galar form';
         hisui='Hisui form';
         cardcl='</p></span></div>';
         div_='</div>'; 
         
         m='-m';
         f='-f';
         meg='-mega';
         gig='-gigantamax';
         alo='-alolan';
         gal='-galarian';
         his='-hisuian';
         //other forms card composition:
         fcardop='<div class="f-cardform"><span class="f-sprite"><img class="f-img" src="';  
         //inserisci link immagine
         fimgcl= '"></span><br><span class="text-muted"><p class="f-orms mt-2">';
         //inserisci forma. il seguito è uguale.
         
         //in caso di shiny:
         fcardopnormal='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="';
         //inserisci link img normal 
         fcardopshiny='"><img class="f-shinyimg" src="';
         //inserisci link img shiny
         fimgcl= '"></span><br><span class="text-muted"><p class="f-orms mt-2">';
         //inserisci forma. il seguito è uguale.

                    
         
        //  nome = '<a class="f-name" href="">' + pkmn + '</a>';
         console.log(nome);
        //  nome='<a class="f-name" href="">'+ myArray[i]+'</a>';
        

        ///  ! ! !  l'i non corrisponde più all'index number del pokemon: partendo da zero, corrisponde a un numero indietro!!!///
        
        
            if (i==2) { 
                gender= "md";
                forms= "male";
                // schedaLink ='scheda.html" target="_blank';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+div_+modalcol+cardop+nome+meg+img_s+nome+meg+spans+mega+cardcl+div_+modalcol+cardop+nome+gig+img_s+nome+gig+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==5) {
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-mega-x'+img_s +nome+'-mega-x'+spans+mx+cardcl+div_+modalcol+cardop+nome+'-mega-y'+img_s+nome+'-mega-y'+spans+my+cardcl+div_+modalcol+cardop+nome+gig+img_s+nome+gig+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
      
            } else if(i==8){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s+nome+spans+forms+cardcl+cardop+nome+meg+img_s+nome+meg+spans+mega+cardcl+cardop+nome+gig+img_s+nome+gig+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==11){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+gig+img_s+nome+gig+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==14){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==17){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==18){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==19){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if(i==24){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                //modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/pikachu-rockstar-f.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/pikachu-rockstar-f.png'+fimgcl+'rock star'+cardcl+div_
                modalbody=modalcolxl+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcolxl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+div_+modalcolxl+cardop+nome+'-original-cap'+img_s +nome+'-original-cap'+spans+'Original cap'+cardcl+div_+modalcolxl+cardop+nome+'-hoenn-cap'+img_s +nome+'-hoenn-cap'+spans+'Hoenn cap'+cardcl+div_+modalcolxl+cardop+nome+'-sinnoh-cap'+img_s +nome+'-sinnoh-cap'+spans+'Sinnoh cap'+cardcl+div_+modalcolxl+cardop+nome+'-unova-cap'+img_s +nome+'-unova-cap'+spans+'Unova cap'+cardcl+div_+modalcolxl+cardop+nome+'-kalos-cap'+img_s +nome+'-kalos-cap'+spans+'Kalos cap'+cardcl+div_+modalcolxl+cardop+nome+'-alola-cap'+img_s +nome+'-alola-cap'+spans+'Alola cap'+cardcl+div_+modalcolxl+cardop+nome+'-johto-cap'+img_s +nome+'-johto-cap'+spans+'Johto cap<br>Partner cap'+cardcl+div_+modalcolxl+cardop+nome+'-world-cap'+img_s +nome+'-world-cap'+spans+'World cap'+cardcl+div_+modalcolxl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl+div_+modalcolxl+fcardop+'assets/img/cosplay.png'+fimgcl+'cosplay'+cardcl+div_+modalcolxl+fcardop+'assets/img/Rock_Star.png'+fimgcl+'rock star'+cardcl+div_+modalcolxl+fcardop+'assets/img/Belle.png'+fimgcl+'Belle'+cardcl+div_+modalcolxl+fcardop+'assets/img/Pop_Star.png'+fimgcl+'pop star'+cardcl+div_+modalcolxl+fcardop+'assets/img/PhD.png'+fimgcl+'Ph. D'+cardcl+div_+modalcolxl+fcardop+'assets/img/Libre.png'+fimgcl+'libre'+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==25){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==26){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==27){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==36){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                  
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==37){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==40){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==41){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==43){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==44){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==49){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==50){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==51){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl+div_+modalcol+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl+div_+modalcol+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==52){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==57){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==58){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==63){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==64){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==67){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==73){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==74){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==75){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==76){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==77){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==78){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==79){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==82){
                nome = `Farfetch'd`;
                pokeNameVar="farfetchd";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+pokeNameVar+img_s +pokeNameVar+spans+forms+cardcl+cardop+pokeNameVar+gal+img_s +pokeNameVar+gal+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Farfetch\'d forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==83){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==84){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==87){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==88){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==93){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==96) {
                    gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
                } else if(i==28){
                    gender= "fo";
                    pokeNameVar="nidoran-f";
                    // nome='<a class="f-name" href="">'+'Nidoran♀'+'</a>';
                    nome=`Nidoran♀`;
                } else if (i==29 || i==30) {
                    gender= "fo";
                }else if (i==31){
                    pokeNameVar="nidoran-m";
                    gender= "mo";
                    // nome='<a class="f-name" href="">'+'Nidoran♂'+'</a>';
                    nome=`Nidoran♂`;
                } else if (i==32 || i==33) {
                    gender= "mo";
                } else if (i==80|| i==81) {
                    gender= "uk";
                } else if (i==98) {
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==99){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==100){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
            } else if (i==102){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==104){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+alo+img_s +nome+alo+spans+alola+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==109){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==110){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==111){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==114){
                gender= "fo";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==117){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==118){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==121){
                nome='Mr.&nbsp;Mime';
                pokeNameVar="mr-mime";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+pokeNameVar+img_s +pokeNameVar+spans+forms+cardcl+cardop+pokeNameVar+gal+img_s +pokeNameVar+gal+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Mr. Mime forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==122){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==126){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==128){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==129){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==130) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==132){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==141){
                gender= "mf";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==142) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==143){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==144){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==145){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==149) {
                gender= "uk";
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+meg+'-x'+img_s +nome+meg+'-x'+spans+mx+cardcl+div_+modalcol+cardop+nome+meg+'-y'+img_s+nome+meg+'-y'+spans+my+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20151215182812/Mewtwo_oscuro_%28Pokk%C3%A9n_Tournament%29.png'+fimgcl+'Pokkén Shadow<br>Mewtwo'+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/8/89/latest/20151215183339/Mega-Mewtwo_X_oscuro_%28Pokk%C3%A9n_Tournament%29.png'+fimgcl+'Pokkén Shadow<br>Mega Mewtwo X'+cardcl+div_+modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/mewtwo-armored.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/mewtwo-armored.png'+fimgcl+'armored Mewtwo'+cardcl+div_;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                  
            } else if (i==153){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==156){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
            } else if (i==164){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==165){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==171){
                
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20190102210409/Pichu_SSBU_6.png'+fimgcl+'spiky-eared'+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==177){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==180){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==184){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==185){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==189){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==193){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==194){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardopBk+nome+img_sBk +nome+spans+male+cardcl+cardopBk+nome+f+img_sBk +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==197){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==198){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==200){
                gender= "uk";
                forms= "A";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+nome+img_s +nome+spans+'A'+cardcl+div_+modalcolxl+cardop+nome+'-b'+img_s +nome+'-b'+spans+'B'+cardcl+div_+modalcolxl+cardop+nome+'-c'+img_s +nome+'-c'+spans+'C'+cardcl+div_+modalcolxl+cardop+nome+'-d'+img_s +nome+'-d'+spans+'D'+cardcl+div_+modalcolxl+cardop+nome+'-e'+img_s +nome+'-e'+spans+'E'+cardcl+div_+modalcolxl+cardop+nome+'-f'+img_s +nome+'-f'+spans+'F'+cardcl+div_+modalcolxl+cardop+nome+'-g'+img_s +nome+'-g'+spans+'G'+cardcl+div_+modalcolxl+cardop+nome+'-h'+img_s +nome+'-h'+spans+'H'+cardcl+div_+modalcolxl+cardop+nome+'-i'+img_s +nome+'-i'+spans+'I'+cardcl+div_+modalcolxl+cardop+nome+'-j'+img_s +nome+'-j'+spans+'J'+cardcl+div_+modalcolxl+cardop+nome+'-k'+img_s +nome+'-k'+spans+'K'+cardcl+div_+modalcolxl+cardop+nome+'-l'+img_s +nome+'-l'+spans+'L'+cardcl+div_+modalcolxl+cardop+nome+'-m'+img_s +nome+'-m'+spans+'M'+cardcl+div_+modalcolxl+cardop+nome+'-n'+img_s +nome+'-n'+spans+'N'+cardcl+div_+modalcolxl+cardop+nome+'-o'+img_s +nome+'-o'+spans+'O'+cardcl+div_+modalcolxl+cardop+nome+'-p'+img_s +nome+'-p'+spans+'P'+cardcl+div_+modalcolxl+cardop+nome+'-q'+img_s +nome+'-q'+spans+'Q'+cardcl+div_+modalcolxl+cardop+nome+'-r'+img_s +nome+'-r'+spans+'R'+cardcl+div_+modalcolxl+cardop+nome+'-s'+img_s +nome+'-s'+spans+'S'+cardcl+div_+modalcolxl+cardop+nome+'-t'+img_s +nome+'-t'+spans+'T'+cardcl+div_+modalcolxl+cardop+nome+'-u'+img_s +nome+'-u'+spans+'U'+cardcl+div_+modalcolxl+cardop+nome+'-v'+img_s +nome+'-v'+spans+'V'+cardcl+div_+modalcolxl+cardop+nome+'-w'+img_s +nome+'-w'+spans+'W'+cardcl+div_+modalcolxl+cardop+nome+'-x'+img_s +nome+'-x'+spans+'X'+cardcl+div_+modalcolxl+cardop+nome+'-y'+img_s +nome+'-y'+spans+'Y'+cardcl+div_+modalcolxl+cardop+nome+'-z'+img_s +nome+'-z'+spans+'Z'+cardcl+div_+modalcolxl+cardop+nome+'-em'+img_s +nome+'-em'+spans+'!'+cardcl+div_+modalcolxl+cardop+nome+'-qm'+img_s +nome+'-qm'+spans+'?'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

               
            } else if (i==201){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==202){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==206){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==207){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==210){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==211){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==213){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==214){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+div_+modalcol+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl+div_+modalcol+cardop+nome+his+f+img_s +nome+his+f+spans+hisui+" "+fem+cardcl+div_;
               
                    modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                    muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==216){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==220){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==221){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==223){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==228){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==231){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==247){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==248){
                gender="uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/7/7b/latest/20180620213125/Lugia_oscuro.png'+fimgcl +'Shadow Lugia'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==253){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==254) {
                gender= "fd";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardopBk+nome+img_sBk +nome+spans+male+cardcl+cardopBk+nome+f+img_sBk +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==255){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==256){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==259){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==262){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==263){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==266){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==268){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==271){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==273){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==274){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==281){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==301){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==302){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==305){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==306){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==307){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==309){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==314){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==315){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==316){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==318){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==321){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==322){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==326){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b9/latest/20210629025939/Spinda_1_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20210629030012/Spinda_1_GO_variocolor.png'+fimgcl+'pattern #1'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/1/1c/latest/20210629030016/Spinda_2_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d3/latest/20210629030020/Spinda_2_GO_variocolor.png'+fimgcl+'pattern #2'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/2/2d/latest/20210629030319/Spinda_3_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20210629030321/Spinda_3_GO_variocolor.png'+fimgcl+'pattern #3'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d7/latest/20210629030323/Spinda_4_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d1/latest/20210629030326/Spinda_4_GO_variocolor.png'+fimgcl+'pattern #4'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20210629030714/Spinda_5_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d5/latest/20210629030716/Spinda_5_GO_variocolor.png'+fimgcl+'pattern #5'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210629030718/Spinda_6_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b3/latest/20210629030720/Spinda_6_GO_variocolor.png'+fimgcl+'pattern #6'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/f1/latest/20210629031025/Spinda_7_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20210629031028/Spinda_7_GO_variocolor.png'+fimgcl+'pattern #7'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20210629031029/Spinda_8_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b4/latest/20210629031032/Spinda_8_GO_variocolor.png'+fimgcl+'pattern #8'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20210629031531/Spinda_9_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b3/latest/20210629031534/Spinda_9_GO_variocolor.png'+fimgcl+'pattern #9'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==331){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==333){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==349){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==350){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-sunny'+img_s +nome+'-sunny'+spans+'sunny form'+cardcl+div_+modalcol+cardop+nome+'-rainy'+img_s +nome+'-rainy'+spans+'rainy form'+cardcl+div_+modalcol+cardop+nome+'-snowy'+img_s +nome+'-snowy'+spans+'snowy form'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==353){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==358){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==361){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==368){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==372){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==375){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==379){
                gender= "fo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==380){
                gender= "mo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==381){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-primal'+img_s +nome+'-primal'+spans+'Primal Kyogre'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==382){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-primal'+img_s +nome+'-primal'+spans+'Primal Groudon'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==383){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==385){
                gender= "uk";
                forms= "standard";
                nome= `Deoxys`;
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-attack'+img_s +nome.toLowerCase()+'-attack'+spans+'attack forme'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-defense'+img_s +nome.toLowerCase()+'-defense'+spans+'defense forme'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-speed'+img_s +nome.toLowerCase()+'-speed'+spans+'speed forme'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Deoxys forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==395){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==396){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==397){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==398){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==399){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==400){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==401){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==402){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==403){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==404){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==406){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==411){
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-sandy'+img_s +nome+'-sandy'+spans+'sandy cloak'+cardcl+cardop+nome+'-trash'+img_s +nome+'-trash'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==412){
                // nome='<a class="f-name" href="">'+'Wormadam'+'</a>';
                nome= `Wormadam`;
                gender= "fo";
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-sandy'+img_s +nome.toLowerCase()+'-sandy'+spans+'sandy cloak'+cardcl+cardop+nome.toLowerCase()+'-trash'+img_s +nome.toLowerCase()+'-trash'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wormadam forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==414){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==416){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==417){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardopBk+nome+img_sBk +nome+spans+male+cardcl+cardopBk+nome+f+img_sBk +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==418){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardopBk+nome+img_sBk +nome+spans+male+cardcl+cardopBk+nome+f+img_sBk +nome+f+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==420){
                forms= "overcast form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-sunshine'+img_s +nome+'-sunshine'+spans+'sunshine form'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==421){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-east'+img_s +nome+'-east'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==422){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-east'+img_s +nome+'-east'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==423){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==427){
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==438){
                 nome='Mime&nbsp;Jr.';
                 pokeNameVar="mime-jr";
            } else if (i==442){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==443){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==444){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==447){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==448){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==449){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==452){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==453){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==455){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==456){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==458){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } 
            else if (i==459){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==460){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==463){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==464){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==472){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==474){
                gender= "mo";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==478){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-heat'+img_s +nome+'-heat'+spans+'heat Rotom'+cardcl+div_+modalcol+cardop+nome+'-wash'+img_s +nome+'-wash'+spans+'wash Rotom'+cardcl+div_+modalcol+cardop+nome+'-frost'+img_s +nome+'-frost'+spans+'frost Rotom'+cardcl+div_+modalcol+cardop+nome+'-fan'+img_s +nome+'-fan'+spans+'fan Rotom'+cardcl+div_+modalcol+cardop+nome+'-mow'+img_s +nome+'-mow'+spans+'mow Rotom'+cardcl+div_+modalcol+fcardop+'assets/img/Rotom-Pokédex.png'+fimgcl +'Rotom Pokédex'+cardcl+div_+modalcol+fcardop+'assets/img/Rotom-Pokédex-2.png'+fimgcl +'Rotom Pokédex 2'+cardcl+div_+modalcol+fcardop+'assets/img/Rotom-Phone.png'+fimgcl +'Rotom Phone'+cardcl+div_+modalcol+fcardop+'assets/img/Rotom-Phone-2.png'+fimgcl +'Rotom Phone 2'+cardcl+div_+modalcol+fcardop+'assets/img/rotomdrone2.png'+fimgcl +'Rotom drone'+cardcl+div_+modalcol+fcardop+'assets/img/Rotomi.png'+fimgcl +'Rotomi'+cardcl+div_;
                    //+div_+modalcol+fcardop+'assets/img/Rotom-drone.png'+fimgcl +'Rotom drone'+cardcl
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==486){
                gender= "uk";
                forms= "altered forme";
                // nome='<a class="f-name" href="">'+'Giratina'+'</a>';
                nome=`Giratina`;
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-origin'+img_s +nome.toLowerCase()+'-origin'+spans+'origin forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Giratina forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if (i==491){
                gender= "uk";
                forms= "land forme";
                // nome='<a class="f-name" href="">'+'Shaymin'+'</a>';
                nome=`Shaymin`;
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-sky'+img_s +nome.toLowerCase()+'-sky'+spans+'sky forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Shaymin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if(i==492){
                gender= "uk";
                forms= "normal type";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcolxl+cardop+nome+'-fighting'+img_s +nome+'-fighting'+spans+'fighting type'+cardcl+div_+modalcolxl+cardop+nome+'-flying'+img_s +nome+'-flying'+spans+'flying type'+cardcl+div_+modalcolxl+cardop+nome+'-poison'+img_s +nome+'-poison'+spans+'poison type'+cardcl+div_+modalcolxl+cardop+nome+'-ground'+img_s +nome+'-ground'+spans+'ground type'+cardcl+div_+modalcolxl+cardop+nome+'-rock'+img_s +nome+'-rock'+spans+'rock type'+cardcl+div_+modalcolxl+cardop+nome+'-bug'+img_s +nome+'-bug'+spans+'bug type'+cardcl+div_+modalcolxl+cardop+nome+'-ghost'+img_s +nome+'-ghost'+spans+'ghost type'+cardcl+div_+modalcolxl+cardop+nome+'-steel'+img_s +nome+'-steel'+spans+'steel type'+cardcl+div_+modalcolxl+cardop+nome+'-fire'+img_s +nome+'-fire'+spans+'fire type'+cardcl+div_+modalcolxl+cardop+nome+'-water'+img_s +nome+'-water'+spans+'water type'+cardcl+div_+modalcolxl+cardop+nome+'-grass'+img_s +nome+'-grass'+spans+'grass type'+cardcl+div_+modalcolxl+cardop+nome+'-electric'+img_s +nome+'-electric'+spans+'electric type'+cardcl+div_+modalcolxl+cardop+nome+'-psychic'+img_s +nome+'-psychic'+spans+'psychic type'+cardcl+div_+modalcolxl+cardop+nome+'-ice'+img_s +nome+'-ice'+spans+'ice type'+cardcl+div_+modalcolxl+cardop+nome+'-dragon'+img_s +nome+'-dragon'+spans+'dragon type'+cardcl+div_+modalcolxl+cardop+nome+'-dark'+img_s +nome+'-dark'+spans+'dark type'+cardcl+div_+modalcolxl+cardop+nome+'-fairy'+img_s +nome+'-fairy'+spans+'fairy type'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==502){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==520){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==530){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            } else if (i==548){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==549){
                forms= "red-striped";
                // nome='<a class="f-name" href="">'+'Basculin'+'</a>';
                nome=`Basculin`;
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-blue-striped'+img_s +nome.toLowerCase()+'-blue-striped'+spans+'blue-striped'+cardcl+cardop+nome.toLowerCase()+'-white-striped'+img_s +nome.toLowerCase()+'-white-striped'+spans+'white-striped'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Basculin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==553){
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==554){
                forms= "standard";
                // nome='<a class="f-name" href="">'+'Darmanitan'+'</a>'; 
                nome= `Darmanitan`;
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-zen'+img_s +nome.toLowerCase()+'-zen'+spans+'zen mode'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+gal+'-'+forms+img_s +nome.toLowerCase()+gal+'-'+forms+spans+galar+cardcl+div_+modalcol+cardop+nome.toLowerCase()+gal+'-zen'+img_s +nome.toLowerCase()+gal+'-zen'+spans+galar+' zen mode'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Darmanitan forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==561){
                
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==568){
                
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==569){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==570){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==584){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-summer'+img_s +nome+'-summer'+spans+'summer form'+cardcl+div_+modalcol+cardop+nome+'-autumn'+img_s +nome+'-autumn'+spans+'autumn form'+cardcl+div_+modalcol+cardop+nome+'-winter'+img_s +nome+'-winter'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==585){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-summer'+img_s +nome+'-summer'+spans+'summer form'+cardcl+div_+modalcol+cardop+nome+'-autumn'+img_s +nome+'-autumn'+spans+'autumn form'+cardcl+div_+modalcol+cardop+nome+'-winter'+img_s +nome+'-winter'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==591){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==592){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==617){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gal+img_s +nome+gal+spans+galar+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==627){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==640){
            gender= "mo";
                forms= "incarnate forme";
            // nome='<a class="f-name" href="">'+'Tornadus'+'</a>';
            nome=`Tornadus`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-therian'+img_s +nome.toLowerCase()+'-therian'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Tornadus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==641){
            gender= "mo";
            forms= "incarnate forme";
            // nome='<a class="f-name" href="">'+'Thundurus'+'</a>';
            nome= `Thundurus`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-therian'+img_s +nome.toLowerCase()+'-therian'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Thundurus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==642){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/Reshiram-Activated.png'+fimgcl+'in overdrive'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==643){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/Zekrom-Activated.png'+fimgcl+'in overdrive'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==644){
            gender= "mo";
            forms= "incarnate forme";
            // nome='<a class="f-name" href="">'+'Landorus'+'</a>';
            nome= `Landorus`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-therian'+img_s +nome.toLowerCase()+'-therian'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Landorus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==645){
            gender= "uk";
            forms= "standard"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-white'+img_s +nome+'-white'+spans+'white Kyurem'+cardcl+div_+modalcol+fcardopnormal+'assets/img/kyurem-white.png'+fcardopshiny+'assets/img/kyurem-white-s.png'+fimgcl+'white Kyurem<br>in overdrive'+cardcl+div_+modalcol+cardop+nome+'-black'+img_s +nome+'-black'+spans+'black Kyurem'+cardcl+div_+modalcol+fcardopnormal+'assets/img/kyurem-black.png'+fcardopshiny+'assets/img/kyurem-black-s.png'+fimgcl+'black Kyurem<br>in overdrive'+cardcl+div_;
       //+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/2/26/646Kyurem-White2.png/600px-646Kyurem-White2.png'+fimgcl+'white Kyurem<br>in overdrive'+cardcl+div_
       //+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/d/de/646Kyurem-Black2.png/600px-646Kyurem-Black2.png'+fimgcl +'black Kyurem<br>in overdrive'+cardcl+div_
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==646){
            gender= "uk";
            forms= "ordinary form";
            // nome='<a class="f-name" href="">'+'Keldeo'+'</a>';
            nome=`Keldeo`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-resolute'+img_s +nome.toLowerCase()+'-resolute'+spans+'resolute form'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Keldeo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==647){
            gender= "uk";
            forms= "aria forme";
            // nome='<a class="f-name" href="">'+'Meloetta'+'</a>';
            nome=`Meloetta`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-pirouette'+img_s +nome.toLowerCase()+'-pirouette'+spans+'pirouette forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meloetta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==648){
            forms= "standard";
            gender= "uk"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-douse'+img_s +nome+'-douse'+spans+'douse drive'+cardcl+div_+modalcol+cardop+nome+'-shock'+img_s +nome+'-shock'+spans+'shock drive'+cardcl+div_+modalcol+cardop+nome+'-burn'+img_s +nome+'-burn'+spans+'burn drive'+cardcl+div_+modalcol+cardop+nome+'-chill'+img_s +nome+'-chill'+spans+'chill drive'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } 
        

          else if (i==657){
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-ash'+img_s +nome+'-ash'+spans+'Ash-Greninja'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if(i==665){ 
            forms= "meadow pattern";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcolxl+cardop+nome+'-polar'+img_s +nome+'-polar'+spans+'polar pattern'+cardcl+div_+modalcolxl+cardop+nome+'-tundra'+img_s +nome+'-tundra'+spans+'tundra pattern'+cardcl+div_+modalcolxl+cardop+nome+'-continental'+img_s +nome+'-continental'+spans+'continental pattern'+cardcl+div_+modalcolxl+cardop+nome+'-garden'+img_s +nome+'-garden'+spans+'garden pattern'+cardcl+div_+modalcolxl+cardop+nome+'-elegant'+img_s +nome+'-elegant'+spans+'elegant pattern'+cardcl+div_+modalcolxl+cardop+nome+'-icy-snow'+img_s +nome+'-icy-snow'+spans+'icy snow pattern'+cardcl+div_+modalcolxl+cardop+nome+'-modern'+img_s +nome+'-modern'+spans+'modern pattern'+cardcl+div_+modalcolxl+cardop+nome+'-marine'+img_s +nome+'-marine'+spans+'marine pattern'+cardcl+div_+modalcolxl+cardop+nome+'-archipelago'+img_s +nome+'-archipelago'+spans+'archipelago pattern'+cardcl+div_+modalcolxl+cardop+nome+'-high-plains'+img_s +nome+'-high-plains'+spans+'high plains pattern'+cardcl+div_+modalcolxl+cardop+nome+'-sandstorm'+img_s +nome+'-sandstorm'+spans+'sandstorm pattern'+cardcl+div_+modalcolxl+cardop+nome+'-river'+img_s +nome+'-river'+spans+'river pattern'+cardcl+div_+modalcolxl+cardop+nome+'-monsoon'+img_s +nome+'-monsoon'+spans+'monsoon pattern'+cardcl+div_+modalcolxl+cardop+nome+'-savanna'+img_s +nome+'-savanna'+spans+'savanna pattern'+cardcl+div_+modalcolxl+cardop+nome+'-sun'+img_s +nome+'-sun'+spans+'sun pattern'+cardcl+div_+modalcolxl+cardop+nome+'-ocean'+img_s +nome+'-ocean'+spans+'ocean pattern'+cardcl+div_+modalcolxl+cardop+nome+'-jungle'+img_s +nome+'-jungle'+spans+'jungle pattern'+cardcl+div_+modalcolxl+cardop+nome+'-fancy'+img_s +nome+'-fancy'+spans+'fancy pattern'+cardcl+div_+modalcolxl+cardop+nome+'-poke-ball'+img_s +nome+'-poke-ball'+spans+'poké ball pattern'+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==667){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+f+img_s +nome+f+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==668){
            gender= "fo";
                forms= "red flower";
                pokeNameVar="flabebe";
            // nome='<a class="f-name" href="">'+'Flabébé'+'</a>';
            nome=`Flabébé`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+pokeNameVar.toLowerCase()+img_s +pokeNameVar.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+pokeNameVar.toLowerCase()+'-yellow'+img_s +pokeNameVar.toLowerCase()+'-yellow'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+pokeNameVar.toLowerCase()+'-orange'+img_s +pokeNameVar.toLowerCase()+'-orange'+spans+'orange flower'+cardcl+div_+modalcol+cardop+pokeNameVar.toLowerCase()+'-blue'+img_s +pokeNameVar.toLowerCase()+'-blue'+spans+'blue flower'+cardcl+div_+modalcol+cardop+pokeNameVar.toLowerCase()+'-white'+img_s +pokeNameVar.toLowerCase()+'-white'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Flabébé forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==669){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-yellow'+img_s +nome+'-yellow'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+nome+'-orange'+img_s +nome+'-orange'+spans+'orange flower'+cardcl+div_+modalcol+cardop+nome+'-blue'+img_s +nome+'-blue'+spans+'blue flower'+cardcl+div_+modalcol+cardop+nome+'-white'+img_s +nome+'-white'+spans+'white flower'+cardcl+div_+modalcol+fcardopnormal+'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d7bbc09-b889-4fb5-89c5-390e7aa64cb4/d8dgmj3-5d2a1529-7a92-4a5b-bdfa-456dfea107c6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkN2JiYzA5LWI4ODktNGZiNS04OWM1LTM5MGU3YWE2NGNiNFwvZDhkZ21qMy01ZDJhMTUyOS03YTkyLTRhNWItYmRmYS00NTZkZmVhMTA3YzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T_0361B3Vwo2HZPUM3s9FE8LcrJVRO0ZS2yTBiGSgSk'+fcardopshiny+'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d7bbc09-b889-4fb5-89c5-390e7aa64cb4/d8dgmsp-9c7cfb04-67a4-4c83-b9f1-69de20dd7dfe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkN2JiYzA5LWI4ODktNGZiNS04OWM1LTM5MGU3YWE2NGNiNFwvZDhkZ21zcC05YzdjZmIwNC02N2E0LTRjODMtYjlmMS02OWRlMjBkZDdkZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TM1KzhAf6TwM43Pn50aRTmtcOSogB4O8eMLaKgBzU-U'+fimgcl +"eternal flower<br>AZ's unique Floette"+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==670){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-yellow'+img_s +nome+'-yellow'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+nome+'-orange'+img_s +nome+'-orange'+spans+'orange flower'+cardcl+div_+modalcol+cardop+nome+'-blue'+img_s +nome+'-blue'+spans+'blue flower'+cardcl+div_+modalcol+cardop+nome+'-white'+img_s +nome+'-white'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==675){
            forms= "natural form";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-heart'+img_s +nome+'-heart'+spans+'heart trim'+cardcl+div_+modalcol+cardop+nome+'-star'+img_s +nome+'-star'+spans+'star trim'+cardcl+div_+modalcol+cardop+nome+'-diamond'+img_s +nome+'-diamond'+spans+'diamond trim'+cardcl+div_+modalcol+cardop+nome+'-debutante'+img_s +nome+'-debutante'+spans+'debutante trim'+cardcl+div_+modalcol+cardop+nome+'-matron'+img_s +nome+'-matron'+spans+'matron trim'+cardcl+div_+modalcol+cardop+nome+'-dandy'+img_s +nome+'-dandy'+spans+'dandy trim'+cardcl+div_+modalcol+cardop+nome+'-la-reine'+img_s +nome+'-la-reine'+spans+'la reine trim'+cardcl+div_+modalcol+cardop+nome+'-kabuki'+img_s +nome+'-kabuki'+spans+'kabuki trim'+cardcl+div_+modalcol+cardop+nome+'-pharaoh'+img_s +nome+'-pharaoh'+spans+'pharaoh trim'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==677){
            gender= "mo";
            forms= 'male';
            // nome='<a class="f-name" href="">'+'Meowstic'+'</a>';
            nome= `Meowstic`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-'+fem+img_s +nome.toLowerCase()+'-'+fem+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meowstic forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==680){
            // nome='<a class="f-name" href="">'+'Aegislash'+'</a>';
            nome= `Aegislash`;
            forms= "shield forme";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-blade'+img_s +nome.toLowerCase()+'-blade'+spans+'blade forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Aegislash forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>'; 
        } else if (i==704){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==705){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';   
        } else if (i==709){
            forms= "average size";
            // nome='<a class="f-name" href="">'+'Pumpkaboo'+'</a>';
            nome= `Pumpkaboo`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome.toLowerCase()+'-small'+img_s +nome.toLowerCase()+'-small'+spans+'small size'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-large'+img_s +nome.toLowerCase()+'-large'+spans+'large size'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-super'+img_s +nome.toLowerCase()+'-super'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Pumpkaboo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==710){
            forms= "average size";
            // nome='<a class="f-name" href="">'+'Gourgeist'+'</a>';
            nome= `Gourgeist`;
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome.toLowerCase()+'-small'+img_s +nome.toLowerCase()+'-small'+spans+'small size'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-large'+img_s +nome.toLowerCase()+'-large'+spans+'large size'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-super'+img_s +nome.toLowerCase()+'-super'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Gourgeist forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==712){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==715){
            gender= "uk";
                forms= "neutral mode";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-active'+img_s +nome+'-active'+spans+'active mode'+cardcl+fcardop+'assets/img/tree.png'+fimgcl +'tree'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==716){
            gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/cocoon_form.png'+fimgcl +'cocoon'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==717){
            gender= "uk";
            forms= "50% forme";
            nome=`Zygarde`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-10'+img_s +nome.toLowerCase()+'-10'+spans+'10% forme'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-complete'+img_s +nome.toLowerCase()+'-complete'+spans+'complete forme'+cardcl+div_+modalcol+fcardop+'assets/img/Cell.png'+fimgcl+'cell'+cardcl+div_+modalcol+fcardop+'assets/img/Core.png'+fimgcl+'core'+cardcl+div_;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zygarde forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==718){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+meg+img_s +nome+meg+spans+mega+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==719){
            gender= "uk";
            forms= "confined";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-unbound'+img_s +nome+'-unbound'+spans+'unbound'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==723){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+his+img_s +nome+his+spans+hisui+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==740){
            forms= "baile style";
            // nome='<a class="f-name" href="">'+'Oricorio'+'</a>';
            nome=`Oricorio`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-pom-pom'+img_s +nome.toLowerCase()+'-pom-pom'+spans+'pom-pom style'+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-pau'+img_s +nome.toLowerCase()+'-pau'+spans+"pa'u style"+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-sensu'+img_s +nome.toLowerCase()+'-sensu'+spans+'sensu style'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Oricorio forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==744){
            // nome='<a class="f-name" href="">'+'Lycanroc'+'</a>';
            nome= `Lycanroc`;
            forms= "miday form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-midnight'+img_s +nome.toLowerCase()+'-midnight'+spans+'midnight form'+cardcl+cardop+nome.toLowerCase()+'-dusk'+img_s +nome.toLowerCase()+'-dusk'+spans+'dusk form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Lycanroc forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==745){
            // nome='<a class="f-name" href="">'+'Wishiwashi'+'</a>';
            nome =`Wishiwashi`;
            forms= "solo form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-school'+img_s +nome.toLowerCase()+'-school'+spans+'school form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wishiwashi forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==771){
            // nome='<a class="f-name" href="">'+'Type: Null'+'</a>';
            nome = `Type:&nbsp;Null`;
            pokeNameVar="type-null";
            gender= "uk";
        } else if(i==772){
            gender= "uk";
                forms= "type: normal";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcolxl+cardop+nome+'-fighting'+img_s +nome+'-fighting'+spans+' type: fighting'+cardcl+div_+modalcolxl+cardop+nome+'-flying'+img_s +nome+'-flying'+spans+' type: flying'+cardcl+div_+modalcolxl+cardop+nome+'-poison'+img_s +nome+'-poison'+spans+' type: poison'+cardcl+div_+modalcolxl+cardop+nome+'-ground'+img_s +nome+'-ground'+spans+' type: ground'+cardcl+div_+modalcolxl+cardop+nome+'-rock'+img_s +nome+'-rock'+spans+' type: rock'+cardcl+div_+modalcolxl+cardop+nome+'-bug'+img_s +nome+'-bug'+spans+' type: bug'+cardcl+div_+modalcolxl+cardop+nome+'-ghost'+img_s +nome+'-ghost'+spans+' type: ghost'+cardcl+div_+modalcolxl+cardop+nome+'-steel'+img_s +nome+'-steel'+spans+' type: steel'+cardcl+div_+modalcolxl+cardop+nome+'-fire'+img_s +nome+'-fire'+spans+' type: fire'+cardcl+div_+modalcolxl+cardop+nome+'-water'+img_s +nome+'-water'+spans+' type: water'+cardcl+div_+modalcolxl+cardop+nome+'-grass'+img_s +nome+'-grass'+spans+' type: grass'+cardcl+div_+modalcolxl+cardop+nome+'-electric'+img_s +nome+'-electric'+spans+' type: electric'+cardcl+div_+modalcolxl+cardop+nome+'-psychic'+img_s +nome+'-psychic'+spans+' type: psychic'+cardcl+div_+modalcolxl+cardop+nome+'-ice'+img_s +nome+'-ice'+spans+' type: ice'+cardcl+div_+modalcolxl+cardop+nome+'-dragon'+img_s +nome+'-dragon'+spans+' type: dragon'+cardcl+div_+modalcolxl+cardop+nome+'-dark'+img_s +nome+'-dark'+spans+' type: dark'+cardcl+div_+modalcolxl+cardop+nome+'-fairy'+img_s +nome+'-fairy'+spans+' type: fairy'+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==773){
            gender= "uk";
            forms= "core";
            // nome='<a class="f-name" href="">'+'Minior'+'</a>';
            nome= `Minior`;
            pokeNameVar='minior-red-core';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardopIn+nome.toLowerCase()+img_sIn +nome.toLowerCase()+spans+'meteor'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-red-core'+img_sIn +nome.toLowerCase()+'-red-core'+spans+'red core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-orange-core'+img_sIn +nome.toLowerCase()+'-orange-core'+spans+'orange core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-yellow-core'+img_sIn +nome.toLowerCase()+'-yellow-core'+spans+'yellow core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-green-core'+img_sIn +nome.toLowerCase()+'-green-core'+spans+'green core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-blue-core'+img_sIn +nome.toLowerCase()+'-blue-core'+spans+'blue core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-indigo-core'+img_sIn +nome.toLowerCase()+'-indigo-core'+spans+'indigo core'+cardcl+div_+modalcol+cardopIn+nome.toLowerCase()+'-violet-core'+img_sIn +nome.toLowerCase()+'-violet-core'+spans+'violet core'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Minior forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==777){ 
            forms= "disguised";
            // nome='<a class="f-name" href="">'+'Mimikyu'+'</a>';
            nome =`Mimikyu`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-busted'+img_s +nome.toLowerCase()+'-busted'+spans+'busted'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Mimikyu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==784){ 
            nome="Tapu&nbsp;Koko";
            pokeNameVar="tapu-koko";
        } else if (i==785){ 
            nome="Tapu&nbsp;Lele";
            pokeNameVar="tapu-lele";
        } else if (i==786){ 
            nome="Tapu&nbsp;Bulu";
            pokeNameVar="tapu-bulu";
        } else if (i==787){ 
            nome="Tapu&nbsp;Fini";
            pokeNameVar="tapu-fini";
            
        } else if (i==790){ 
            gender= "uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/RadiantSunPhase.png'+fimgcl +'radiant sun phase'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==791){ 
            gender= "uk";
            forms= "standard";

            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/FullMoonPhase.png'+fimgcl +'full moon phase'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==799){
            gender= "uk";
                forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome+img_s +nome+spans+forms+cardcl+div_+modalcol+cardop+nome+'-dusk-mane'+img_s +nome+'-dusk-mane'+spans+'dusk mane'+cardcl+div_+modalcol+cardop+nome+'-dawn-wings'+img_s +nome+'-dawn-wings'+spans+'dawn wings'+cardcl+div_+modalcol+cardop+nome+'-ultra'+img_s +nome+'-ultra'+spans+'ultra Necrozma'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==800){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-original'+img_s +nome+'-original'+spans+'original color'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==801){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardopnormal+'assets/img/zenith-n.png'+fcardopshiny+'assets/img/zenith-s.png'+fimgcl +'zenith'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==808){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==811){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==814){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==817){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==822){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==825){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==833){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==838){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==840){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==841){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==843){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==844){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-gulping'+img_s +nome+'-gulping'+spans+'gulping'+cardcl+cardop+nome+'-gorging'+img_s +nome+'-gorging'+spans+'gorging'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==848){
            // nome='<a class="f-name" href="">'+'Toxtricity'+'</a>';
            nome = `Toxtricity`;
            forms= "amped form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-low-key'+img_s +nome.toLowerCase()+'-low-key'+spans+'low key'+cardcl+cardop+nome.toLowerCase()+gig+img_s +nome.toLowerCase()+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Toxtricity forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==850){  
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==853){  
            gender="uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/phony-n.png'+fimgcl +'phony'+cardcl+fcardop+'assets/img/antique-n.png'+fimgcl +'antique'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==854){  
            gender="uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+fcardop+'assets/img/phony-s.png'+fimgcl +'phony'+cardcl+fcardop+'assets/img/antique-s.png'+fimgcl +'antique'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==857){
            gender= "fo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==860){
            gender= "mo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==864){   
            nome = `Sirfetch'd`;
            pokeNameVar="sirfetchd";      
        } else if (i==865){   
            nome = `Mr.&nbsp;Rime`;  
            pokeNameVar="mr-rime";            
        }
        else if(i==868){ 
            gender= "fo";
            forms= "vanilla cream<br>strawberry sweet";
            let va="-vanilla";let ru="-ruby";
            let sa="-salted";let ra="-rainbow";let mi="-mint";let ma="-matcha";let le="-lemon";let ca="-caramel"; let c="-cream";let s="-swirl";let str="-strawberry";let be="-berry"; let st="-star";let rib="-ribbon";let clo="-clover"; let lo="-love";let flo="-flower";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolfull+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl+div_+modalcolfull+cardopIn+nome+img_sIn +nome+spans+forms+cardcl+div_+modalcolfull+cardopIn+nome+va+c+be+img_sIn +nome+va+c+be+spans+"vanilla cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+va+c+lo+img_sIn +nome+va+c+lo+spans+"vanilla cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+va+c+st+img_sIn +nome+va+c+st+spans+"vanilla cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+va+c+clo+img_sIn +nome+va+c+clo+spans+"vanilla cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+va+c+flo+img_sIn +nome+va+c+flo+spans+"vanilla cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+va+c+rib+img_sIn +nome+va+c+rib+spans+"vanilla cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+str+img_sIn +nome+ru+c+str+spans+"ruby cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+be+img_sIn +nome+ru+c+be+spans+"ruby cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+lo+img_sIn +nome+ru+c+lo+spans+"ruby cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+st+img_sIn +nome+ru+c+st+spans+"ruby cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+clo+img_sIn +nome+ru+c+clo+spans+"ruby cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+flo+img_sIn +nome+ru+c+flo+spans+"ruby cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+c+rib+img_sIn +nome+ru+c+rib+spans+"ruby cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+str+img_sIn +nome+ma+c+str+spans+"matcha cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+be+img_sIn +nome+ma+c+be+spans+"matcha cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+lo+img_sIn +nome+ma+c+lo+spans+"matcha cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+st+img_sIn +nome+ma+c+st+spans+"matcha cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+clo+img_sIn +nome+ma+c+clo+spans+"matcha cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+flo+img_sIn +nome+ma+c+flo+spans+"matcha cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ma+c+rib+img_sIn +nome+ma+c+rib+spans+"matcha cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+str+img_sIn +nome+mi+c+str+spans+"mint cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+be+img_sIn +nome+mi+c+be+spans+"mint cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+lo+img_sIn +nome+mi+c+lo+spans+"mint cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+st+img_sIn +nome+mi+c+st+spans+"mint cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+clo+img_sIn +nome+mi+c+clo+spans+"mint cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+flo+img_sIn +nome+mi+c+flo+spans+"mint cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+mi+c+rib+img_sIn +nome+mi+c+rib+spans+"mint cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+str+img_sIn +nome+le+c+str+spans+"lemon cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+be+img_sIn +nome+le+c+be+spans+"lemon cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+lo+img_sIn +nome+le+c+lo+spans+"lemon cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+st+img_sIn +nome+le+c+st+spans+"lemon cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+clo+img_sIn +nome+le+c+clo+spans+"lemon cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+flo+img_sIn +nome+le+c+flo+spans+"lemon cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+le+c+rib+img_sIn +nome+le+c+rib+spans+"lemon cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+str+img_sIn +nome+sa+c+str+spans+"salted cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+be+img_sIn +nome+sa+c+be+spans+"salted cream<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+lo+img_sIn +nome+sa+c+lo+spans+"salted cream<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+st+img_sIn +nome+sa+c+st+spans+"salted cream<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+clo+img_sIn +nome+sa+c+clo+spans+"salted cream<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+flo+img_sIn +nome+sa+c+flo+spans+"salted cream<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+sa+c+rib+img_sIn +nome+sa+c+rib+spans+"salted cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+str+img_sIn +nome+ru+s+str+spans+"ruby swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+be+img_sIn +nome+ru+s+be+spans+"ruby swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+lo+img_sIn +nome+ru+s+lo+spans+"ruby swirl<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+st+img_sIn +nome+ru+s+st+spans+"ruby swirl<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+clo+img_sIn +nome+ru+s+clo+spans+"ruby swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+flo+img_sIn +nome+ru+s+flo+spans+"ruby swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ru+s+rib+img_sIn +nome+ru+s+rib+spans+"ruby swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+str+img_sIn +nome+ca+s+str+spans+"caramel swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+be+img_sIn +nome+ca+s+be+spans+"caramel swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+lo+img_sIn +nome+ca+s+lo+spans+"caramel swirl<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+st+img_sIn +nome+ca+s+st+spans+"caramel swirl<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+clo+img_sIn +nome+ca+s+clo+spans+"caramel swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+flo+img_sIn +nome+ca+s+flo+spans+"caramel swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ca+s+rib+img_sIn +nome+ca+s+rib+spans+"caramel swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+str+img_sIn +nome+ra+s+str+spans+"rainbow swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+be+img_sIn +nome+ra+s+be+spans+"rainbow swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+lo+img_sIn +nome+ra+s+lo+spans+"rainbow swirl<br>love sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+st+img_sIn +nome+ra+s+st+spans+"rainbow swirl<br>star sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+clo+img_sIn +nome+ra+s+clo+spans+"rainbow swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+flo+img_sIn +nome+ra+s+flo+spans+"rainbow swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardopIn+nome+ra+s+rib+img_sIn +nome+ra+s+rib+spans+"rainbow swirl<br>ribbon sweet"+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-fullscreen"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==874){
            forms= "ice face";
            // nome='<a class="f-name" href="">'+'Eiscue'+'</a>';
            nome=`Eiscue`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-noice'+img_s +nome.toLowerCase()+'-noice'+spans+'noice face'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Eiscue forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==875){  
            gender= "mo";
            forms= "male";
            // nome='<a class="f-name" href="">'+'Indeedee'+'</a>';
            nome= `Indeedee`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-'+fem+img_s +nome.toLowerCase()+'-'+fem+spans+fem+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Indeedee forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==876){  
            nome="Morpeko";
            forms= "full belly mode";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-hangry'+img_s +nome.toLowerCase()+'-hangry'+spans+'hangry mode'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==878){  
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==883){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+gig+img_s +nome+gig+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } if(i==887){
            gender= "uk";
            forms= "hero of<br>many battles";
            // nome='<a class="f-name" href="">'+'Zacian'+'</a>';
            nome=`Zacian`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-crowned'+img_s +nome.toLowerCase()+'-crowned'+spans+'crowned sword'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zacian forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if(i==888){
            gender= "uk";
            forms= "hero of<br>many battles";
            // nome='<a class="f-name" href="">'+'Zamazenta'+'</a>';
            nome=`Zamazenta`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-crowned'+img_s +nome.toLowerCase()+'-crowned'+spans+'crowned shield'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zamazenta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==889){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-eternamax'+img_s +nome+'-eternamax'+spans+'eternamax'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==891){  
            forms= "single strike style";
            // nome='<a class="f-name" href="">'+'Urshifu'+'</a>';
            nome = `Urshifu`;
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-single-strike'+gig+img_s +nome.toLowerCase()+'-single-strike'+gig+spans+forms+'<br>'+giga+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-rapid-strike'+img_s +nome.toLowerCase()+'-rapid-strike'+spans+"rapid strike style"+cardcl+div_+modalcol+cardop+nome.toLowerCase()+'-rapid-strike'+gig+img_s +nome.toLowerCase()+'-rapid-strike'+gig+spans+"rapid strike style<br>"+giga+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Urshifu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==892){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-dada'+img_s +nome+'-dada'+spans+'Dada Zarude'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==897){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+nome+img_s +nome+spans+forms+cardcl+cardop+nome+'-ice-rider'+img_s +nome+'-ice-rider'+spans+'ice rider'+cardcl+cardop+nome+'-shadow-rider'+img_s +nome+'-shadow-rider'+spans+'shadow rider'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        // }
        // else if (i==898){
        //     nome = `Wyrdeer`;           
        // }else if (i==899){
        //     nome = `Kleavor`;   
        // }else if (i==900){
        //     nome = `Ursaluna`;             
        }else if (i==901){
            nome = `Basculegion`;  
            forms= "male";
            // formVar= "male";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+nome+'Modal';
            modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-'+fem+img_s +nome.toLowerCase()+'-'+fem+spans+'female'+cardcl;
                // modalbody='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/normal/basculegion-male.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/shiny/basculegion-male.png" alt="sprite-shiny"></span><br><span class="text-muted"><p class="f-orms mt-2">'+forms+`</p></span></div>
                // <div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/normal/basculegion-female.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/shiny/basculegion-female.png" alt="sprite-shiny"></span><br><span class="text-muted"><p class="f-orms mt-2">female</p></span></div>`;

            modallo= '<div class="modal fade" id="ex'+nome+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+nome+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        // }else if (i==902){
        //     nome = `Sneasler`;          
        // }else if (i==903){
        //     nome = `Overqwil`;           
        }else if (i==904){
            nome = `Enamorus`;
            forms= "incarnate forme";
            // formVar= "incarnate";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+nome+'Modal';
            modalbody=cardop+nome.toLowerCase()+img_s +nome.toLowerCase()+spans+forms+cardcl+cardop+nome.toLowerCase()+'-therian'+img_s +nome.toLowerCase()+'-therian'+spans+'therian forme'+cardcl;
                // modalbody='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/normal/enamorus-incarnate.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/shiny/enamorus-incarnate.png" alt="sprite-shiny"></span><br><span class="text-muted"><p class="f-orms mt-2">'+forms+`</p></span></div>
                // <div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://img.pokemondb.net/sprites/home/normal/enamorus-therian.png" alt="sprite"><img class="f-shinyimg" src="https://img.pokemondb.net/sprites/home/shiny/enamorus-therian.png" alt="sprite-shiny"></span><br><span class="text-muted"><p class="f-orms mt-2">therian forme</p></span></div>`;              
           
            modallo= '<div class="modal fade" id="ex'+nome+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+nome+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }
        else if (i==112 || i==123 || i==237 || i==240 || i==241 || i==313 || i==415 || i==439 || i==477 || i==487 || i==547 || i==548 || i==628 || i==629 || i==757 || i>=760 && i<=762 || i==855 || i==856 || i==867) {
                gender= "fo";
            } else if (i==105 || i==106 || i==127 || i==235 || i==236 || i==312 || i==413 || i==537 || i==538 || i==626 || i==627 || i==858 || i==859) {
                gender= "mo";
            } else if (i==99 || i==100 || i==119 || i==120 || i==131 || i==136 || i==150 || i==232 || i>=242 && i<=244 || i==249 || i==250 || i==291 || i==232 || i==336 || i==337 || i==342 || i==343 || i==373 || i==374 || i>=376 && i<=378 || i==384 || i==435|| i==436 || i==461|| i==473|| i>=479 && i<=483 || i==485 || i>=488 && i<=490 || i==493 || i>=598 && i<=600 || i==614|| i==621|| i==622 || i>=637 && i<=639 || i==702|| i==720 || i==780 || i>=784 && i<=789 || i>=792 && i<=798 || i>=802 && i<=807 || i==869 || i>=879 && i<=882 || i>=893 && i<=896) {
                gender= "uk";
            }
            
           
                    
                card += buildPokemonCard(i+1, nome, muteBtn, modallo, gender, pokeNameVar);
         
        }
        






        $('#nationalPokedex').html(card);
        $("#fixed-btn").html(scrollBtn);
        $("#myTitle").html("ShinyDex");
        // $("title").html("ShinyDex");
      
        // $('#kanto-btn').on('click', function() {
        
        //     $('.f-card').each(function(){
                

        //         $(this).toggleClass('d-none');
                
                
        //     });
        

        // }) ;
        

    // });
});

const GEN_URL= "https://pokeapi.co/api/v2/generation/";
$.getJSON(GEN_URL, function(data){
    var gen_results=data.results;
    var buttonGenerator=``;
    for (i=1; i<=gen_results.length; i++){
      
        // var buttonsArray=[];
        // var gens_url=;
        $.getJSON(GEN_URL+i, function(gens_data){
            var gens_region=gens_data.main_region;
            var gens_id=gens_data.id;
            var species= gens_data.pokemon_species;
            var firstSpecieUrl= species[0].url;
            var linkToFirstSpecie=""; 
            if(gens_id===8){
                
                buttonGenerator+=`<a type="button" class="btn btn-outline-light f-btn" id="regionFirstSpecie`+gens_id+`"><h2>Gen `+gens_id+` - `+gens_region.name+`</h2></a>`+
                `<a type="button" class="btn btn-outline-light f-btn" id="regionFirstSpecie8_5" href="#899"><h2>Gen 8.5 - Hisui</h2></a>`;
               
            }else{
                // console.log("this is the first pokemon in this region: "+firstSpecieUrl+"; this is the id of the first specie of this region: "+firstSpecie);
                // buttonGenerator+=`<button style="position: relative;" id="btnGen`+gens_id+`" type="button" class="btn btn-outline-light f-btn"><h2>Gen `+gens_id+` - `+gens_region.name+`</h2><a style="position: absolute; width:250px; height: 60px; left:50%; top:50%; transform: translate(-50%, -50%);" id="regionFirstSpecie`+gens_id+`"></a></button> `;
                buttonGenerator+=`<a type="button" class="btn btn-outline-light f-btn" id="regionFirstSpecie`+gens_id+`"><h2>Gen `+gens_id+` - `+gens_region.name+`</h2></a>`;
                // console.log(gens_id +" - " +gens_region.name);
                console.log(buttonGenerator);
                
               
            }
            $("#buttonsContainer").html(buttonGenerator);

         
                $.getJSON(firstSpecieUrl, function(specieData){
                    var firstSpecie = specieData.id;
                    console.log("this is the id of this first regional pokemon: "+firstSpecie);
                    // linkToFirstSpecie = `<a href="#`+firstSpecie+`"></a>`;
                    // console.log(linkToFirstSpecie);
                    $("#regionFirstSpecie"+gens_id).attr("href", "#"+firstSpecie); 
                    // $("#regionFirstSpecie"+gens_id).html(linkToFirstSpecie); 
    
                })
                 
            
            
            // buttonsArray.push(buttonGenerator);
           
        });
       
        // console.log(buttonsArray);
       

    };
    // $("#regionFirstSpecie8_5").attr("href", "#899");
    
    // $("#test").html(buttonGenerator);
    // gen_results.forEach((gen_result)=>{
        
    //     $.getJSON(gen_result.url, function(jsonObject){
    //         var region =jsonObject.main_region;
    //         console.log(region);
    //     })
       
    // })
    
})
// $(document).on("click", "btnGen2", function(){
//     // for (i=1; i<152; i++){
//     $("#1").addClass("d-none")    
//     // }
// })
// buttonsMaker = `<button id="kanto-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 1 - Kanto</h2></button> 
// <button id="johto-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 2 - Johto</h2></button>
// <button id="hoenn-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 3 - Hoenn</h2></button>  
// <button id="sinnoh-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 4 - Sinnoh</h2></button> 
// <button id="unova-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 5 - Unova</h2></button> 
// <button id="kalos-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 6 - Kalos</h2></button>
// <button id="alola-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 7 - Alola</h2></button>
// <button id="galar-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 8 - Galar</h2></button>
// <button id="hisui-btn" type="button" class="btn btn-outline-light f-btn"><h2>Gen 9 - Hisui</h2></button>`;
// $('#buttonsContainer').html(buttonsMaker);

};
 //funzioni UTILI by Dave
 const buildPokemonCard = (pokeNumber, nome, muteBtn, modallo, gender, pokeNameVar) => {

    return ('<div class="f-card" id="' + pokeNumber + '">' +
        '<span class="f-sprite">' +
        '<img class="f-normalimg" src="' + newPokemonSpriteUrl(false, pokeNumber, nome, pokeNameVar) + '" alt="sprite">' +
        '<img class="f-shinyimg" src="' + newPokemonSpriteUrl(true, pokeNumber, nome, pokeNameVar) + '" alt="sprite-shiny">' +
        '</span>' +
        '<br>' +
        '<span class="text-muted">' +
        '<small>' + "#" + padPokemonNumber(pokeNumber, 4) + '</small>' +
        '<br>' + '<span data-id='+pokeNumber+' data-name='+nome+' class="f-name">' + nome + '</span>' +
        '<br>' +
        muteBtn +
        '</span>' +
        '</div>' + modallo);
}

// const getPokemonSpriteUrl = (isShiny, gender, pokeNumber, pokemonName, formVariant) => {
//     if(pokeNumber>=899){
//         let formType = isShiny ? 'shiny' : 'normal';
//         if(pokeNumber==902 || pokeNumber==905){ 
//             let spriteUrl = `https://img.pokemondb.net/sprites/home/${formType}/${pokemonName.toLowerCase()}-${formVariant}.png`;
//             return spriteUrl;
//             //<a href="https://pokemondb.net/pokedex/enamorus"><img src="https://img.pokemondb.net/sprites/home/normal/enamorus-therian.png"
//         }else{        
//             let spriteUrl = `https://img.pokemondb.net/sprites/home/${formType}/${pokemonName.toLowerCase()}.png`;
//             return spriteUrl;
//         }   
//     }else{
//         let formType = isShiny ? 'r' : 'n';
//         let threeZeroCode = (pokeNumber==774) ? '007' : '000';

//         let spriteUrl = `https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_${padPokemonNumber(pokeNumber, 4)}_${threeZeroCode}_${gender}_n_00000000_f_${formType}.png`;
//         return spriteUrl;
//     }
// }

const newPokemonSpriteUrl = (isShiny, pokeNumber, pokemonName, pokeNameVar) => {
   
        let formType = isShiny ? 'shiny' : 'normal';
        if(pokeNumber==29 || pokeNumber==32 || pokeNumber==83 || pokeNumber==122 || pokeNumber==439 || pokeNumber==669 || pokeNumber==772 || pokeNumber==774 || pokeNumber>=785 && pokeNumber<=788 || pokeNumber==865 || pokeNumber==866 ){ 
            console.log("---------------------DE BOIA-------------------------------")
            let spriteUrl = `https://img.pokemondb.net/sprites/home/${formType}/${pokeNameVar}.png`;
            console.log("my sprite new url w name var: "+spriteUrl)
            return spriteUrl;
            //<a href="https://pokemondb.net/pokedex/enamorus"><img src="https://img.pokemondb.net/sprites/home/normal/enamorus-therian.png"
        }else{        
            let spriteUrl = `https://img.pokemondb.net/sprites/home/${formType}/${pokemonName.toLowerCase()}.png`;
            return spriteUrl;
        }   
    
}

const padPokemonNumber = (pokeNumber, numberOfDigits) => {

    let paddedPokeNumber = '';

    let difference = numberOfDigits - pokeNumber.toString().length;

    for (let i = 0; i < difference; i++) {

        paddedPokeNumber += '0';
    }

    paddedPokeNumber += pokeNumber;

    return paddedPokeNumber;
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }