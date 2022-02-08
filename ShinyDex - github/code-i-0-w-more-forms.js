
function startAll(){
// $('#nat-btn').on('click', function() {
//     document.getElementById("nationalPokedex").classList.toggle('show');

// }) ;

/// e n d   b u t t o n s

    ///   N A T I O N A L    P O K E D E X

      
pokedex_url ="https://pokeapi.co/api/v2/pokemon?limit=898";

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
            let pkmn = pokemon["name"];
            
            console.log("Indice del singolo pokemon ", i, pkmn, myArray[i], "pokemon: ", pokemon);
         
        

        var gender = "mf";
            var forms="-";
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
         cardop='<div class="f-cardform"><span class="f-sprite"><img class="f-normalimg" src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_';
        
         img_s='.png" alt="sprite"><img class="f-shinyimg" src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_';
        
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

                    
         
         nome = '<a class="f-name" href="">' + pkmn + '</a>';
         console.log(nome);
        //  nome='<a class="f-name" href="">'+ myArray[i]+'</a>';
        

        ///  ! ! !  l'i non corrisponde più all'index number del pokemon: partendo da zero, corrisponde a un numero indietro!!!///
        
        
            if (i==2) { 
                gender= "md";
                forms= "male";
                // schedaLink ='scheda.html" target="_blank';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0003_000_md_n_00000000_f_n'+img_s +'0003_000_md_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0003_000_fd_n_00000000_f_n'+img_s +'0003_000_fd_n_00000000_f_r'+spans+fem+cardcl+div_+modalcol+cardop+'0003_001_mf_n_00000000_f_n'+img_s+'0003_001_mf_n_00000000_f_r'+spans+mega+cardcl+div_+modalcol+cardop+'0003_000_mf_g_00000000_f_n'+img_s+'0003_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==5) {
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcol+cardop+'0006_000_mf_n_00000000_f_n'+img_s +'0006_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0006_001_mf_n_00000000_f_n'+img_s +'0006_001_mf_n_00000000_f_r'+spans+mx+cardcl+div_+modalcol+cardop+'0006_002_mf_n_00000000_f_n'+img_s+'0006_002_mf_n_00000000_f_r'+spans+my+cardcl+div_+modalcol+cardop+'0006_000_mf_g_00000000_f_n'+img_s+'0006_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
      
            } else if(i==8){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0009_000_mf_n_00000000_f_n'+img_s+'0009_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0009_001_mf_n_00000000_f_n'+img_s+'0009_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0009_000_mf_g_00000000_f_n'+img_s+'0009_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==11){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0012_000_md_n_00000000_f_n'+img_s +'0012_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0012_000_fd_n_00000000_f_n'+img_s +'0012_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0012_000_mf_g_00000000_f_n'+img_s+'0012_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==14){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0015_000_mf_n_00000000_f_n'+img_s +'0015_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0015_001_mf_n_00000000_f_n'+img_s +'0015_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==17){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0018_000_mf_n_00000000_f_n'+img_s +'0018_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0018_001_mf_n_00000000_f_n'+img_s +'0018_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==18){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0019_000_md_n_00000000_f_n'+img_s +'0019_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0019_000_fd_n_00000000_f_n'+img_s +'0019_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0019_001_mf_n_00000000_f_n'+img_s +'0019_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==19){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0020_000_md_n_00000000_f_n'+img_s +'0020_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0020_000_fd_n_00000000_f_n'+img_s +'0020_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0020_001_mf_n_00000000_f_n'+img_s +'0020_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if(i==24){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                //modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/pikachu-rockstar-f.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/pikachu-rockstar-f.png'+fimgcl+'rock star'+cardcl+div_
                modalbody=modalcolxl+cardop+'0025_000_md_n_00000000_f_n'+img_s +'0025_000_md_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0025_000_fd_n_00000000_f_n'+img_s +'0025_000_fd_n_00000000_f_r'+spans+fem+cardcl+div_+modalcolxl+cardop+'0025_001_mo_n_00000000_f_n'+img_s +'0025_001_mo_n_00000000_f_r'+spans+'Original cap'+cardcl+div_+modalcolxl+cardop+'0025_002_mo_n_00000000_f_n'+img_s +'0025_002_mo_n_00000000_f_r'+spans+'Hoenn cap'+cardcl+div_+modalcolxl+cardop+'0025_003_mo_n_00000000_f_n'+img_s +'0025_003_mo_n_00000000_f_r'+spans+'Sinnoh cap'+cardcl+div_+modalcolxl+cardop+'0025_004_mo_n_00000000_f_n'+img_s +'0025_004_mo_n_00000000_f_r'+spans+'Unova cap'+cardcl+div_+modalcolxl+cardop+'0025_005_mo_n_00000000_f_n'+img_s +'0025_005_mo_n_00000000_f_r'+spans+'Kalos cap'+cardcl+div_+modalcolxl+cardop+'0025_006_mo_n_00000000_f_n'+img_s +'0025_006_mo_n_00000000_f_r'+spans+'Alola cap'+cardcl+div_+modalcolxl+cardop+'0025_007_mo_n_00000000_f_n'+img_s +'0025_007_mo_n_00000000_f_r'+spans+'Johto cap<br>Partner cap'+cardcl+div_+modalcolxl+cardop+'0025_009_mo_n_00000000_f_n'+img_s +'0025_009_mo_n_00000000_f_r'+spans+'World cap'+cardcl+div_+modalcolxl+cardop+'0025_000_mf_g_00000000_f_n'+img_s +'0025_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/2/28/Spr_6o_025_C.png'+fimgcl+'cosplay'+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/4/4f/025Pikachu-Rock_Star.png/600px-025Pikachu-Rock_Star.png'+fimgcl+'rock star'+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/f/f0/025Pikachu-Belle.png/600px-025Pikachu-Belle.png'+fimgcl+'Belle'+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/e/e8/025Pikachu-Pop_Star.png/600px-025Pikachu-Pop_Star.png'+fimgcl+'pop star'+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/2/2f/025Pikachu-PhD.png/600px-025Pikachu-PhD.png'+fimgcl+'Ph. D'+cardcl+div_+modalcolxl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/e/e7/025Pikachu-Libre.png/600px-025Pikachu-Libre.png'+fimgcl+'libre'+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==25){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0026_000_md_n_00000000_f_n'+img_s +'0026_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0026_000_fd_n_00000000_f_n'+img_s +'0026_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0026_001_mf_n_00000000_f_n'+img_s +'0026_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==26){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0027_000_mf_n_00000000_f_n'+img_s +'0027_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0027_001_mf_n_00000000_f_n'+img_s +'0027_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==27){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0028_000_mf_n_00000000_f_n'+img_s +'0028_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0028_001_mf_n_00000000_f_n'+img_s +'0028_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==36){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0037_000_mf_n_00000000_f_n'+img_s +'0037_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0037_001_mf_n_00000000_f_n'+img_s +'0037_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                  
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==37){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0038_000_mf_n_00000000_f_n'+img_s +'0038_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0038_001_mf_n_00000000_f_n'+img_s +'0038_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==40){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0041_000_md_n_00000000_f_n'+img_s +'0041_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0041_000_fd_n_00000000_f_n'+img_s +'0041_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==41){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0042_000_md_n_00000000_f_n'+img_s +'0042_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0042_000_fd_n_00000000_f_n'+img_s +'0042_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==43){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0044_000_md_n_00000000_f_n'+img_s +'0044_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0044_000_fd_n_00000000_f_n'+img_s +'0044_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==44){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0045_000_md_n_00000000_f_n'+img_s +'0045_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0045_000_fd_n_00000000_f_n'+img_s +'0045_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==49){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0050_000_mf_n_00000000_f_n'+img_s +'0050_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0050_001_mf_n_00000000_f_n'+img_s +'0050_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==50){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0051_000_mf_n_00000000_f_n'+img_s +'0051_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0051_001_mf_n_00000000_f_n'+img_s +'0051_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==51){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0052_000_mf_n_00000000_f_n'+img_s +'0052_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0052_001_mf_n_00000000_f_n'+img_s +'0052_001_mf_n_00000000_f_r'+spans+alola+cardcl+div_+modalcol+cardop+'0052_002_mf_n_00000000_f_n'+img_s +'0052_002_mf_n_00000000_f_r'+spans+galar+cardcl+div_+modalcol+cardop+'0052_000_mf_g_00000000_f_n'+img_s +'0052_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==52){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0053_000_mf_n_00000000_f_n'+img_s +'0053_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0053_001_mf_n_00000000_f_n'+img_s +'0053_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==63){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0064_000_md_n_00000000_f_n'+img_s +'0064_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0064_000_fd_n_00000000_f_n'+img_s +'0064_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==64){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0065_000_md_n_00000000_f_n'+img_s +'0065_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0065_000_fd_n_00000000_f_n'+img_s +'0065_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0065_001_mf_n_00000000_f_n'+img_s +'0065_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==67){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0068_000_mf_n_00000000_f_n'+img_s +'0068_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0068_000_mf_g_00000000_f_n'+img_s +'0068_000_mf_g_00000000_f_r'+spans+giga+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==73){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0074_000_mf_n_00000000_f_n'+img_s +'0074_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0074_001_mf_n_00000000_f_n'+img_s +'0074_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==74){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0075_000_mf_n_00000000_f_n'+img_s +'0075_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0075_001_mf_n_00000000_f_n'+img_s +'0075_001_mf_n_00000000_f_r'+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==75){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0076_000_mf_n_00000000_f_n'+img_s +'0076_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0076_001_mf_n_00000000_f_n'+img_s +'0076_001_mf_n_00000000_f_r'+spans+alola+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==76){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0077_000_mf_n_00000000_f_n'+img_s +'0077_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0077_001_mf_n_00000000_f_n'+img_s +'0077_001_mf_n_00000000_f_r'+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==77){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0078_000_mf_n_00000000_f_n'+img_s +'0078_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0078_001_mf_n_00000000_f_n'+img_s +'0078_001_mf_n_00000000_f_r'+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==78){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0079_000_mf_n_00000000_f_n'+img_s +'0079_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0079_001_mf_n_00000000_f_n'+img_s +'0079_001_mf_n_00000000_f_r'+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==79){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0080_000_mf_n_00000000_f_n'+img_s +'0080_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0080_001_mf_n_00000000_f_n'+img_s +'0080_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0080_002_mf_n_00000000_f_n'+img_s +'0080_002_mf_n_00000000_f_r'+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==82){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0083_000_mf_n_00000000_f_n'+img_s +'0083_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0083_001_mf_n_00000000_f_n'+img_s +'0083_001_mf_n_00000000_f_r'+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==83){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0084_000_md_n_00000000_f_n'+img_s +'0084_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0084_000_fd_n_00000000_f_n'+img_s +'0084_000_fd_n_00000000_f_r'+spans+fem+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==84){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0085_000_md_n_00000000_f_n'+img_s +'0085_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0085_000_fd_n_00000000_f_n'+img_s +'0085_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==87){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0088_000_mf_n_00000000_f_n'+img_s +'0088_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0088_001_mf_n_00000000_f_n'+img_s +'0088_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==88){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0089_000_mf_n_00000000_f_n'+img_s +'0089_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0089_001_mf_n_00000000_f_n'+img_s +'0089_001_mf_n_00000000_f_r'+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==93){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0094_000_mf_n_00000000_f_n'+img_s +'0094_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0094_001_mf_n_00000000_f_n'+img_s +'0094_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0094_000_mf_g_00000000_f_n'+img_s +'0094_000_mf_g_00000000_f_r'+spans+giga+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==96) {
                    gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0097_000_md_n_00000000_f_n'+img_s +'0097_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0097_000_fd_n_00000000_f_n'+img_s +'0097_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
                } else if(i==28){
                    gender= "fo";
                    nome='<a class="f-name" href="">'+'Nidoran♀'+'</a>';
                } else if (i==29 || i==30) {
                    gender= "fo";
                }else if (i==31){
                    gender= "mo";
                    nome='<a class="f-name" href="">'+'Nidoran♂'+'</a>';
                } else if (i==32 || i==33) {
                    gender= "mo";
                } else if (i==80|| i==81) {
                    gender= "uk";
                } else if (i==98) {
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0099_000_mf_n_00000000_f_n'+img_s +'0099_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0099_000_mf_g_00000000_f_n'+img_s +'0099_000_mf_g_00000000_f_r'+spans+giga+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
            } else if (i==102){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0103_000_mf_n_00000000_f_n'+img_s +'0103_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0103_001_mf_n_00000000_f_n'+img_s +'0103_001_mf_n_00000000_f_r'+spans+alola+cardcl;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==104){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0105_000_mf_n_00000000_f_n'+img_s +'0105_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0105_001_mf_n_00000000_f_n'+img_s +'0105_001_mf_n_00000000_f_r'+spans+alola+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==109){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0110_000_mf_n_00000000_f_n'+img_s +'0110_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0110_001_mf_n_00000000_f_n'+img_s +'0110_001_mf_n_00000000_f_r'+spans+galar+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==110){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0111_000_md_n_00000000_f_n'+img_s +'0111_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0111_000_fd_n_00000000_f_n'+img_s +'0111_000_fd_n_00000000_f_r'+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==111){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0112_000_md_n_00000000_f_n'+img_s +'0112_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0112_000_fd_n_00000000_f_n'+img_s +'0112_000_fd_n_00000000_f_r'+spans+fem+cardcl;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==114){
                gender= "fo";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0115_000_fo_n_00000000_f_n'+img_s +'0115_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0115_001_fo_n_00000000_f_n'+img_s +'0115_001_fo_n_00000000_f_r'+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==117){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0118_000_md_n_00000000_f_n'+img_s +'0118_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0118_000_fd_n_00000000_f_n'+img_s +'0118_000_fd_n_00000000_f_r'+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==118){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0119_000_md_n_00000000_f_n'+img_s +'0119_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0119_000_fd_n_00000000_f_n'+img_s +'0119_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==121){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0122_000_mf_n_00000000_f_n'+img_s +'0122_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0122_001_mf_n_00000000_f_n'+img_s +'0122_001_mf_n_00000000_f_r'+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==122){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0123_000_md_n_00000000_f_n'+img_s +'0123_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0123_000_fd_n_00000000_f_n'+img_s +'0123_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==126){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0127_000_mf_n_00000000_f_n'+img_s +'0127_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0127_001_mf_n_00000000_f_n'+img_s +'0127_001_mf_n_00000000_f_r'+spans+mega+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==128){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0129_000_md_n_00000000_f_n'+img_s +'0129_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0129_000_fd_n_00000000_f_n'+img_s +'0129_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==129){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0130_000_md_n_00000000_f_n'+img_s +'0130_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0130_000_fd_n_00000000_f_n'+img_s +'0130_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0130_001_mf_n_00000000_f_n'+img_s +'0130_001_mf_n_00000000_f_r'+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==130) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0131_000_mf_n_00000000_f_n'+img_s +'0131_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0131_000_mf_g_00000000_f_n'+img_s +'0131_000_mf_g_00000000_f_r'+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==132){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0133_000_md_n_00000000_f_n'+img_s +'0133_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0133_000_fd_n_00000000_f_n'+img_s +'0133_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0133_000_mf_g_00000000_f_n'+img_s +'0133_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==141){
                gender= "mf";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0142_000_mf_n_00000000_f_n'+img_s +'0142_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0142_001_mf_n_00000000_f_n'+img_s +'0142_001_mf_n_00000000_f_r'+spans+mega+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==142) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0143_000_mf_n_00000000_f_n'+img_s +'0143_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0143_000_mf_g_00000000_f_n'+img_s +'0143_000_mf_g_00000000_f_r'+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==143){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0144_000_uk_n_00000000_f_n'+img_s +'0144_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0144_001_uk_n_00000000_f_n'+img_s +'0144_001_uk_n_00000000_f_r'+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==144){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0145_000_uk_n_00000000_f_n'+img_s +'0145_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0145_001_uk_n_00000000_f_n'+img_s +'0145_001_uk_n_00000000_f_r'+spans+galar+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==145){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0146_000_uk_n_00000000_f_n'+img_s +'0146_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0146_001_uk_n_00000000_f_n'+img_s +'0146_001_uk_n_00000000_f_r'+spans+galar+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==149) {
                gender= "uk";
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0150_000_uk_n_00000000_f_n'+img_s +'0150_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0150_001_uk_n_00000000_f_n'+img_s +'0150_001_uk_n_00000000_f_r'+spans+mx+cardcl+div_+modalcol+cardop+'0150_002_uk_n_00000000_f_n'+img_s+'0150_002_uk_n_00000000_f_r'+spans+my+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20151215182812/Mewtwo_oscuro_%28Pokk%C3%A9n_Tournament%29.png'+fimgcl+'Pokkén Shadow<br>Mewtwo'+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/8/89/latest/20151215183339/Mega-Mewtwo_X_oscuro_%28Pokk%C3%A9n_Tournament%29.png'+fimgcl+'Pokkén Shadow<br>Mega Mewtwo X'+cardcl+div_+modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/mewtwo-armored.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/mewtwo-armored.png'+fimgcl+'armored Mewtwo'+cardcl+div_;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                  
            } else if (i==153){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0154_000_md_n_00000000_f_n'+img_s +'0154_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0154_000_fd_n_00000000_f_n'+img_s +'0154_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==164){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0165_000_md_n_00000000_f_n'+img_s +'0165_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0165_000_fd_n_00000000_f_n'+img_s +'0165_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==165){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0166_000_md_n_00000000_f_n'+img_s +'0166_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0166_000_fd_n_00000000_f_n'+img_s +'0166_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==171){
                
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0172_000_mf_n_00000000_f_n'+img_s +'0172_000_mf_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20190102210409/Pichu_SSBU_6.png'+fimgcl+'spiky-eared'+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==177){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0178_000_md_n_00000000_f_n'+img_s +'0178_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0178_000_fd_n_00000000_f_n'+img_s +'0178_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==180){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0181_000_mf_n_00000000_f_n'+img_s +'0181_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0181_001_mf_n_00000000_f_n'+img_s +'0181_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==184){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0185_000_md_n_00000000_f_n'+img_s +'0185_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0185_000_fd_n_00000000_f_n'+img_s +'0185_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==185){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0186_000_md_n_00000000_f_n'+img_s +'0186_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0186_000_fd_n_00000000_f_n'+img_s +'0186_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==189){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0190_000_md_n_00000000_f_n'+img_s +'0190_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0190_000_fd_n_00000000_f_n'+img_s +'0190_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==193){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0194_000_md_n_00000000_f_n'+img_s +'0194_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0194_000_fd_n_00000000_f_n'+img_s +'0194_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==194){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0195_000_md_n_00000000_f_n'+img_s +'0195_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0195_000_md_n_00000000_b_n'+img_s +'0195_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0195_000_fd_n_00000000_b_n'+img_s +'0195_000_fd_n_00000000_b_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==197){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0198_000_md_n_00000000_f_n'+img_s +'0198_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0198_000_fd_n_00000000_f_n'+img_s +'0198_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==198){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0199_000_mf_n_00000000_f_n'+img_s +'0199_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0199_001_mf_n_00000000_f_n'+img_s +'0199_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==200){
                gender= "uk";
                forms= "A";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+'0201_000_uk_n_00000000_f_n'+img_s +'0201_000_uk_n_00000000_f_r'+spans+'A'+cardcl+div_+modalcolxl+cardop+'0201_001_uk_n_00000000_f_n'+img_s +'0201_001_uk_n_00000000_f_r'+spans+'B'+cardcl+div_+modalcolxl+cardop+'0201_002_uk_n_00000000_f_n'+img_s +'0201_002_uk_n_00000000_f_r'+spans+'C'+cardcl+div_+modalcolxl+cardop+'0201_003_uk_n_00000000_f_n'+img_s +'0201_003_uk_n_00000000_f_r'+spans+'D'+cardcl+div_+modalcolxl+cardop+'0201_004_uk_n_00000000_f_n'+img_s +'0201_004_uk_n_00000000_f_r'+spans+'E'+cardcl+div_+modalcolxl+cardop+'0201_005_uk_n_00000000_f_n'+img_s +'0201_005_uk_n_00000000_f_r'+spans+'F'+cardcl+div_+modalcolxl+cardop+'0201_006_uk_n_00000000_f_n'+img_s +'0201_006_uk_n_00000000_f_r'+spans+'G'+cardcl+div_+modalcolxl+cardop+'0201_007_uk_n_00000000_f_n'+img_s +'0201_007_uk_n_00000000_f_r'+spans+'H'+cardcl+div_+modalcolxl+cardop+'0201_008_uk_n_00000000_f_n'+img_s +'0201_008_uk_n_00000000_f_r'+spans+'I'+cardcl+div_+modalcolxl+cardop+'0201_009_uk_n_00000000_f_n'+img_s +'0201_009_uk_n_00000000_f_r'+spans+'J'+cardcl+div_+modalcolxl+cardop+'0201_010_uk_n_00000000_f_n'+img_s +'0201_010_uk_n_00000000_f_r'+spans+'K'+cardcl+div_+modalcolxl+cardop+'0201_011_uk_n_00000000_f_n'+img_s +'0201_011_uk_n_00000000_f_r'+spans+'L'+cardcl+div_+modalcolxl+cardop+'0201_012_uk_n_00000000_f_n'+img_s +'0201_012_uk_n_00000000_f_r'+spans+'M'+cardcl+div_+modalcolxl+cardop+'0201_013_uk_n_00000000_f_n'+img_s +'0201_013_uk_n_00000000_f_r'+spans+'N'+cardcl+div_+modalcolxl+cardop+'0201_014_uk_n_00000000_f_n'+img_s +'0201_014_uk_n_00000000_f_r'+spans+'O'+cardcl+div_+modalcolxl+cardop+'0201_015_uk_n_00000000_f_n'+img_s +'0201_015_uk_n_00000000_f_r'+spans+'P'+cardcl+div_+modalcolxl+cardop+'0201_016_uk_n_00000000_f_n'+img_s +'0201_016_uk_n_00000000_f_r'+spans+'Q'+cardcl+div_+modalcolxl+cardop+'0201_017_uk_n_00000000_f_n'+img_s +'0201_017_uk_n_00000000_f_r'+spans+'R'+cardcl+div_+modalcolxl+cardop+'0201_018_uk_n_00000000_f_n'+img_s +'0201_018_uk_n_00000000_f_r'+spans+'S'+cardcl+div_+modalcolxl+cardop+'0201_019_uk_n_00000000_f_n'+img_s +'0201_019_uk_n_00000000_f_r'+spans+'T'+cardcl+div_+modalcolxl+cardop+'0201_020_uk_n_00000000_f_n'+img_s +'0201_020_uk_n_00000000_f_r'+spans+'U'+cardcl+div_+modalcolxl+cardop+'0201_021_uk_n_00000000_f_n'+img_s +'0201_021_uk_n_00000000_f_r'+spans+'V'+cardcl+div_+modalcolxl+cardop+'0201_022_uk_n_00000000_f_n'+img_s +'0201_022_uk_n_00000000_f_r'+spans+'W'+cardcl+div_+modalcolxl+cardop+'0201_023_uk_n_00000000_f_n'+img_s +'0201_023_uk_n_00000000_f_r'+spans+'X'+cardcl+div_+modalcolxl+cardop+'0201_024_uk_n_00000000_f_n'+img_s +'0201_024_uk_n_00000000_f_r'+spans+'Y'+cardcl+div_+modalcolxl+cardop+'0201_025_uk_n_00000000_f_n'+img_s +'0201_025_uk_n_00000000_f_r'+spans+'Z'+cardcl+div_+modalcolxl+cardop+'0201_026_uk_n_00000000_f_n'+img_s +'0201_026_uk_n_00000000_f_r'+spans+'!'+cardcl+div_+modalcolxl+cardop+'0201_027_uk_n_00000000_f_n'+img_s +'0201_027_uk_n_00000000_f_r'+spans+'?'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

               
            } else if (i==201){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0202_000_md_n_00000000_f_n'+img_s +'0202_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0202_000_fd_n_00000000_f_n'+img_s +'0202_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==202){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0203_000_md_n_00000000_f_n'+img_s +'0203_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0203_000_fd_n_00000000_f_n'+img_s +'0203_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==206){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0207_000_md_n_00000000_f_n'+img_s +'0207_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0207_000_fd_n_00000000_f_n'+img_s +'0207_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==207){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0208_000_md_n_00000000_f_n'+img_s +'0208_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0208_000_fd_n_00000000_f_n'+img_s +'0208_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0208_001_mf_n_00000000_f_n'+img_s +'0208_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==211){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0212_000_md_n_00000000_f_n'+img_s +'0212_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0212_000_fd_n_00000000_f_n'+img_s +'0212_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0212_001_mf_n_00000000_f_n'+img_s +'0212_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==213){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0214_000_md_n_00000000_f_n'+img_s +'0214_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0214_000_fd_n_00000000_f_n'+img_s +'0214_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0214_001_mf_n_00000000_f_n'+img_s +'0214_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==214){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0215_000_md_n_00000000_f_n'+img_s +'0215_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0215_000_fd_n_00000000_f_n'+img_s +'0215_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==216){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0217_000_md_n_00000000_f_n'+img_s +'0217_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0217_000_fd_n_00000000_f_n'+img_s +'0217_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==220){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0221_000_md_n_00000000_f_n'+img_s +'0221_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0221_000_fd_n_00000000_f_n'+img_s +'0221_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==221){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0222_000_mf_n_00000000_f_n'+img_s +'0222_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0222_001_mf_n_00000000_f_n'+img_s +'0222_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==223){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0224_000_md_n_00000000_f_n'+img_s +'0224_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0224_000_fd_n_00000000_f_n'+img_s +'0224_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==228){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0229_000_md_n_00000000_f_n'+img_s +'0229_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0229_000_fd_n_00000000_f_n'+img_s +'0229_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0229_001_mf_n_00000000_f_n'+img_s +'0229_001_mf_n_00000000_f_r'+spans+mega+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==231){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0232_000_md_n_00000000_f_n'+img_s +'0232_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0232_000_fd_n_00000000_f_n'+img_s +'0232_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==247){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0248_000_mf_n_00000000_f_n'+img_s +'0248_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0248_001_mf_n_00000000_f_n'+img_s +'0248_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==248){
                gender="uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0249_000_uk_n_00000000_f_n'+img_s +'0249_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/7/7b/latest/20180620213125/Lugia_oscuro.png'+fimgcl +'Shadow Lugia'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==253){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0254_000_mf_n_00000000_f_n'+img_s +'0254_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0254_001_mf_n_00000000_f_n'+img_s +'0254_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==254) {
                gender= "fd";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0255_000_fd_n_00000000_f_n'+img_s +'0255_000_fd_n_00000000_f_r'+spans+forms+cardcl+cardop+'0255_000_md_n_00000000_b_n'+img_s +'0255_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0255_000_fd_n_00000000_b_n'+img_s +'0255_000_fd_n_00000000_b_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==255){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0256_000_md_n_00000000_f_n'+img_s +'0256_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0256_000_fd_n_00000000_f_n'+img_s +'0256_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==256){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0257_000_md_n_00000000_f_n'+img_s +'0257_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0257_000_fd_n_00000000_f_n'+img_s +'0257_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0257_001_mf_n_00000000_f_n'+img_s +'0257_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==259){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0260_000_mf_n_00000000_f_n'+img_s +'0260_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0260_001_mf_n_00000000_f_n'+img_s +'0260_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==262){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0263_000_mf_n_00000000_f_n'+img_s +'0263_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0263_001_mf_n_00000000_f_n'+img_s +'0263_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==263){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0264_000_mf_n_00000000_f_n'+img_s +'0264_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0264_001_mf_n_00000000_f_n'+img_s +'0264_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==266){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0267_000_md_n_00000000_f_n'+img_s +'0267_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0267_000_fd_n_00000000_f_n'+img_s +'0267_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==268){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0269_000_md_n_00000000_f_n'+img_s +'0269_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0269_000_fd_n_00000000_f_n'+img_s +'0269_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==271){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0272_000_md_n_00000000_f_n'+img_s +'0272_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0272_000_fd_n_00000000_f_n'+img_s +'0272_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==273){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0274_000_md_n_00000000_f_n'+img_s +'0274_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0274_000_fd_n_00000000_f_n'+img_s +'0274_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==274){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0275_000_md_n_00000000_f_n'+img_s +'0275_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0275_000_fd_n_00000000_f_n'+img_s +'0275_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==281){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0282_000_mf_n_00000000_f_n'+img_s +'0282_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0282_001_mf_n_00000000_f_n'+img_s +'0282_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==301){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0302_000_mf_n_00000000_f_n'+img_s +'0302_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0302_001_mf_n_00000000_f_n'+img_s +'0302_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==302){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0303_000_mf_n_00000000_f_n'+img_s +'0303_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0303_001_mf_n_00000000_f_n'+img_s +'0303_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==305){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0306_000_mf_n_00000000_f_n'+img_s +'0306_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0306_001_mf_n_00000000_f_n'+img_s +'0306_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==306){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0307_000_md_n_00000000_f_n'+img_s +'0307_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0307_000_fd_n_00000000_f_n'+img_s +'0307_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==307){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0308_000_md_n_00000000_f_n'+img_s +'0308_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0308_000_fd_n_00000000_f_n'+img_s +'0308_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0308_001_mf_n_00000000_f_n'+img_s +'0308_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==309){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0310_000_mf_n_00000000_f_n'+img_s +'0310_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0310_001_mf_n_00000000_f_n'+img_s +'0310_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==314){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0315_000_md_n_00000000_f_n'+img_s +'0315_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0315_000_fd_n_00000000_f_n'+img_s +'0315_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==315){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0316_000_md_n_00000000_f_n'+img_s +'0316_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0316_000_fd_n_00000000_f_n'+img_s +'0316_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==316){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0317_000_md_n_00000000_f_n'+img_s +'0317_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0317_000_fd_n_00000000_f_n'+img_s +'0317_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==318){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0319_000_mf_n_00000000_f_n'+img_s +'0319_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0319_001_mf_n_00000000_f_n'+img_s +'0319_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==321){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0322_000_md_n_00000000_f_n'+img_s +'0322_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0322_000_fd_n_00000000_f_n'+img_s +'0322_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==322){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0323_000_md_n_00000000_f_n'+img_s +'0323_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0323_000_fd_n_00000000_f_n'+img_s +'0323_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0323_001_mf_n_00000000_f_n'+img_s +'0323_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==326){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0327_000_mf_n_00000000_f_n'+img_s +'0327_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b9/latest/20210629025939/Spinda_1_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20210629030012/Spinda_1_GO_variocolor.png'+fimgcl+'pattern #1'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/1/1c/latest/20210629030016/Spinda_2_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d3/latest/20210629030020/Spinda_2_GO_variocolor.png'+fimgcl+'pattern #2'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/2/2d/latest/20210629030319/Spinda_3_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20210629030321/Spinda_3_GO_variocolor.png'+fimgcl+'pattern #3'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d7/latest/20210629030323/Spinda_4_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d1/latest/20210629030326/Spinda_4_GO_variocolor.png'+fimgcl+'pattern #4'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20210629030714/Spinda_5_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/d/d5/latest/20210629030716/Spinda_5_GO_variocolor.png'+fimgcl+'pattern #5'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210629030718/Spinda_6_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b3/latest/20210629030720/Spinda_6_GO_variocolor.png'+fimgcl+'pattern #6'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/f1/latest/20210629031025/Spinda_7_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20210629031028/Spinda_7_GO_variocolor.png'+fimgcl+'pattern #7'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20210629031029/Spinda_8_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b4/latest/20210629031032/Spinda_8_GO_variocolor.png'+fimgcl+'pattern #8'+cardcl+div_+modalcol+fcardopnormal+'https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20210629031531/Spinda_9_GO.png'+fcardopshiny+'https://images.wikidexcdn.net/mwuploads/wikidex/b/b3/latest/20210629031534/Spinda_9_GO_variocolor.png'+fimgcl+'pattern #9'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==331){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0332_000_md_n_00000000_f_n'+img_s +'0332_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0332_000_fd_n_00000000_f_n'+img_s +'0332_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==333){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0334_000_mf_n_00000000_f_n'+img_s +'0334_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0334_001_mf_n_00000000_f_n'+img_s +'0334_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==349){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0350_000_md_n_00000000_f_n'+img_s +'0350_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0350_000_fd_n_00000000_f_n'+img_s +'0350_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==350){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0351_000_mf_n_00000000_f_n'+img_s +'0351_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0351_001_mf_n_00000000_f_n'+img_s +'0351_001_mf_n_00000000_f_r'+spans+'sunny form'+cardcl+div_+modalcol+cardop+'0351_002_mf_n_00000000_f_n'+img_s +'0351_002_mf_n_00000000_f_r'+spans+'rainy form'+cardcl+div_+modalcol+cardop+'0351_003_mf_n_00000000_f_n'+img_s +'0351_003_mf_n_00000000_f_r'+spans+'snowy form'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==353){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0354_000_mf_n_00000000_f_n'+img_s +'0354_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0354_001_mf_n_00000000_f_n'+img_s +'0354_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==358){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0359_000_mf_n_00000000_f_n'+img_s +'0359_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0359_001_mf_n_00000000_f_n'+img_s +'0359_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==361){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0362_000_mf_n_00000000_f_n'+img_s +'0362_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0362_001_mf_n_00000000_f_n'+img_s +'0362_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==368){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0369_000_md_n_00000000_f_n'+img_s +'0369_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0369_000_fd_n_00000000_f_n'+img_s +'0369_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==372){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0373_000_mf_n_00000000_f_n'+img_s +'0373_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0373_001_mf_n_00000000_f_n'+img_s +'0373_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==375){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0376_000_uk_n_00000000_f_n'+img_s +'0376_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0376_001_uk_n_00000000_f_n'+img_s +'0376_001_uk_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==379){
                gender= "fo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0380_000_fo_n_00000000_f_n'+img_s +'0380_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0380_001_fo_n_00000000_f_n'+img_s +'0380_001_fo_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==380){
                gender= "mo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0381_000_mo_n_00000000_f_n'+img_s +'0381_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0381_001_mo_n_00000000_f_n'+img_s +'0381_001_mo_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==381){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0382_000_uk_n_00000000_f_n'+img_s +'0382_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0382_001_uk_n_00000000_f_n'+img_s +'0382_001_uk_n_00000000_f_r'+spans+'Primal Kyogre'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==382){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0383_000_uk_n_00000000_f_n'+img_s +'0383_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0383_001_uk_n_00000000_f_n'+img_s +'0383_001_uk_n_00000000_f_r'+spans+'Primal Groudon'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==383){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0384_000_uk_n_00000000_f_n'+img_s +'0384_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0384_001_uk_n_00000000_f_n'+img_s +'0384_001_uk_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==385){
                gender= "uk";
                forms= "standard";
                nome='<a class="f-name" href="">'+'Deoxys'+'</a>';
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0386_000_uk_n_00000000_f_n'+img_s +'0386_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0386_001_uk_n_00000000_f_n'+img_s +'0386_001_uk_n_00000000_f_r'+spans+'attack forme'+cardcl+div_+modalcol+cardop+'0386_002_uk_n_00000000_f_n'+img_s +'0386_002_uk_n_00000000_f_r'+spans+'defense forme'+cardcl+div_+modalcol+cardop+'0386_003_uk_n_00000000_f_n'+img_s +'0386_003_uk_n_00000000_f_r'+spans+'speed forme'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Deoxys forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==395){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0396_000_md_n_00000000_f_n'+img_s +'0396_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0396_000_fd_n_00000000_f_n'+img_s +'0396_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==396){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0397_000_md_n_00000000_f_n'+img_s +'0397_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0397_000_fd_n_00000000_f_n'+img_s +'0397_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==397){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0398_000_md_n_00000000_f_n'+img_s +'0398_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0398_000_fd_n_00000000_f_n'+img_s +'0398_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==398){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0399_000_md_n_00000000_f_n'+img_s +'0399_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0399_000_fd_n_00000000_f_n'+img_s +'0399_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==399){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0400_000_md_n_00000000_f_n'+img_s +'0400_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0400_000_fd_n_00000000_f_n'+img_s +'0400_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==400){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0401_000_md_n_00000000_f_n'+img_s +'0401_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0401_000_fd_n_00000000_f_n'+img_s +'0401_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==401){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0402_000_md_n_00000000_f_n'+img_s +'0402_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0402_000_fd_n_00000000_f_n'+img_s +'0402_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==402){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0403_000_md_n_00000000_f_n'+img_s +'0403_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0403_000_fd_n_00000000_f_n'+img_s +'0403_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==403){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0404_000_md_n_00000000_f_n'+img_s +'0404_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0404_000_fd_n_00000000_f_n'+img_s +'0404_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==404){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0405_000_md_n_00000000_f_n'+img_s +'0405_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0405_000_fd_n_00000000_f_n'+img_s +'0405_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==406){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0407_000_md_n_00000000_f_n'+img_s +'0407_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0407_000_fd_n_00000000_f_n'+img_s +'0407_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==411){
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0412_000_mf_n_00000000_f_n'+img_s +'0412_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0412_001_mf_n_00000000_f_n'+img_s +'0412_001_mf_n_00000000_f_r'+spans+'sandy cloak'+cardcl+cardop+'0412_002_mf_n_00000000_f_n'+img_s +'0412_002_mf_n_00000000_f_r'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==412){
                nome='<a class="f-name" href="">'+'Wormadam'+'</a>';
                gender= "fo";
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0413_000_fo_n_00000000_f_n'+img_s +'0413_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0413_001_fo_n_00000000_f_n'+img_s +'0413_001_fo_n_00000000_f_r'+spans+'sandy cloak'+cardcl+cardop+'0413_002_fo_n_00000000_f_n'+img_s +'0413_002_fo_n_00000000_f_r'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wormadam forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==414){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0415_000_md_n_00000000_f_n'+img_s +'0415_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0415_000_fd_n_00000000_f_n'+img_s +'0415_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==416){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0417_000_md_n_00000000_f_n'+img_s +'0417_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0417_000_fd_n_00000000_f_n'+img_s +'0417_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==417){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0418_000_md_n_00000000_f_n'+img_s +'0418_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0418_000_md_n_00000000_b_n'+img_s +'0418_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0418_000_fd_n_00000000_b_n'+img_s +'0418_000_fd_n_00000000_b_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==418){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0419_000_md_n_00000000_f_n'+img_s +'0419_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0419_000_md_n_00000000_b_n'+img_s +'0419_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0419_000_fd_n_00000000_b_n'+img_s +'0419_000_fd_n_00000000_b_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==420){
                forms= "overcast form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0421_000_mf_n_00000000_f_n'+img_s +'0421_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0421_001_mf_n_00000000_f_n'+img_s +'0421_001_mf_n_00000000_f_r'+spans+'sunshine form'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==421){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0422_000_mf_n_00000000_f_n'+img_s +'0422_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0422_001_mf_n_00000000_f_n'+img_s +'0422_001_mf_n_00000000_f_r'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==422){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0423_000_mf_n_00000000_f_n'+img_s +'0423_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0423_001_mf_n_00000000_f_n'+img_s +'0423_001_mf_n_00000000_f_r'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==423){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0424_000_md_n_00000000_f_n'+img_s +'0424_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0424_000_fd_n_00000000_f_n'+img_s +'0424_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==427){
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0428_000_mf_n_00000000_f_n'+img_s +'0428_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0428_001_mf_n_00000000_f_n'+img_s +'0428_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==442){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0443_000_md_n_00000000_f_n'+img_s +'0443_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0443_000_fd_n_00000000_f_n'+img_s +'0443_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==443){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0444_000_md_n_00000000_f_n'+img_s +'0444_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0444_000_fd_n_00000000_f_n'+img_s +'0444_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==444){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0445_000_md_n_00000000_f_n'+img_s +'0445_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0445_000_fd_n_00000000_f_n'+img_s +'0445_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0445_001_mf_n_00000000_f_n'+img_s +'0445_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==447){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0448_000_mf_n_00000000_f_n'+img_s +'0448_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0448_001_mf_n_00000000_f_n'+img_s +'0448_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==448){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0449_000_md_n_00000000_f_n'+img_s +'0449_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0449_000_fd_n_00000000_f_n'+img_s +'0449_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==449){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0450_000_md_n_00000000_f_n'+img_s +'0450_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0450_000_fd_n_00000000_f_n'+img_s +'0450_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==452){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0453_000_md_n_00000000_f_n'+img_s +'0453_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0453_000_fd_n_00000000_f_n'+img_s +'0453_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==453){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0454_000_md_n_00000000_f_n'+img_s +'0454_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0454_000_fd_n_00000000_f_n'+img_s +'0454_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==455){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0456_000_md_n_00000000_f_n'+img_s +'0456_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0456_000_fd_n_00000000_f_n'+img_s +'0456_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==456){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0457_000_md_n_00000000_f_n'+img_s +'0457_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0457_000_fd_n_00000000_f_n'+img_s +'0457_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==458){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= cardop+'0459_000_md_n_00000000_f_n'+img_s +'0459_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0459_000_fd_n_00000000_f_n'+img_s +'0459_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } 
            else if (i==459){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0460_000_md_n_00000000_f_n'+img_s +'0460_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0460_000_fd_n_00000000_f_n'+img_s +'0460_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0460_001_mf_n_00000000_f_n'+img_s +'0460_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==460){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0461_000_md_n_00000000_f_n'+img_s +'0461_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0461_000_fd_n_00000000_f_n'+img_s +'0461_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==463){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0464_000_md_n_00000000_f_n'+img_s +'0464_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0464_000_fd_n_00000000_f_n'+img_s +'0464_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==464){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0465_000_md_n_00000000_f_n'+img_s +'0465_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0465_000_fd_n_00000000_f_n'+img_s +'0465_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==472){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0473_000_md_n_00000000_f_n'+img_s +'0473_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0473_000_fd_n_00000000_f_n'+img_s +'0473_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==474){
                gender= "mo";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0475_000_mo_n_00000000_f_n'+img_s +'0475_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0475_001_mo_n_00000000_f_n'+img_s +'0475_001_mo_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==478){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0479_000_uk_n_00000000_f_n'+img_s +'0479_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0479_001_uk_n_00000000_f_n'+img_s +'0479_001_uk_n_00000000_f_r'+spans+'heat Rotom'+cardcl+div_+modalcol+cardop+'0479_002_uk_n_00000000_f_n'+img_s +'0479_002_uk_n_00000000_f_r'+spans+'wash Rotom'+cardcl+div_+modalcol+cardop+'0479_003_uk_n_00000000_f_n'+img_s +'0479_003_uk_n_00000000_f_r'+spans+'frost Rotom'+cardcl+div_+modalcol+cardop+'0479_004_uk_n_00000000_f_n'+img_s +'0479_004_uk_n_00000000_f_r'+spans+'fan Rotom'+cardcl+div_+modalcol+cardop+'0479_005_uk_n_00000000_f_n'+img_s +'0479_005_uk_n_00000000_f_r'+spans+'mow Rotom'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/3/36/479Rotom-Pok%C3%A9dex.png/600px-479Rotom-Pok%C3%A9dex.png'+fimgcl +'Rotom Pokédex'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/c/c2/479Rotom-Pok%C3%A9dex_2.png/600px-479Rotom-Pok%C3%A9dex_2.png'+fimgcl +'Rotom Pokédex 2'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/0/03/479Rotom-Phone.png/259px-479Rotom-Phone.png'+fimgcl +'Rotom Phone'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/b/b6/479Rotom-Phone_2.png/449px-479Rotom-Phone_2.png'+fimgcl +'Rotom Phone 2'+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/5/53/latest/20200414080334/Rotom_dron_EpEc.png'+fimgcl +'Rotom drone'+cardcl+div_+modalcol+fcardop+'https://images.wikidexcdn.net/mwuploads/wikidex/3/3f/latest/20200413180944/Rotom_forma_Rotomi.png'+fimgcl +'Rotomi'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==486){
                gender= "uk";
                forms= "altered forme";
                nome='<a class="f-name" href="">'+'Giratina'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0487_000_uk_n_00000000_f_n'+img_s +'0487_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0487_001_uk_n_00000000_f_n'+img_s +'0487_001_uk_n_00000000_f_r'+spans+'origin forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Giratina forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if (i==491){
                gender= "uk";
                forms= "land forme";
                nome='<a class="f-name" href="">'+'Shaymin'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0492_000_uk_n_00000000_f_n'+img_s +'0492_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0492_001_uk_n_00000000_f_n'+img_s +'0492_001_uk_n_00000000_f_r'+spans+'sky forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Shaymin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if(i==492){
                gender= "uk";
                forms= "normal type";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+'0493_000_uk_n_00000000_f_n'+img_s +'0493_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0493_001_uk_n_00000000_f_n'+img_s +'0493_001_uk_n_00000000_f_r'+spans+'fighting type'+cardcl+div_+modalcolxl+cardop+'0493_002_uk_n_00000000_f_n'+img_s +'0493_002_uk_n_00000000_f_r'+spans+'flying type'+cardcl+div_+modalcolxl+cardop+'0493_003_uk_n_00000000_f_n'+img_s +'0493_003_uk_n_00000000_f_r'+spans+'poison type'+cardcl+div_+modalcolxl+cardop+'0493_004_uk_n_00000000_f_n'+img_s +'0493_004_uk_n_00000000_f_r'+spans+'ground type'+cardcl+div_+modalcolxl+cardop+'0493_005_uk_n_00000000_f_n'+img_s +'0493_005_uk_n_00000000_f_r'+spans+'rock type'+cardcl+div_+modalcolxl+cardop+'0493_006_uk_n_00000000_f_n'+img_s +'0493_006_uk_n_00000000_f_r'+spans+'bug type'+cardcl+div_+modalcolxl+cardop+'0493_007_uk_n_00000000_f_n'+img_s +'0493_007_uk_n_00000000_f_r'+spans+'ghost type'+cardcl+div_+modalcolxl+cardop+'0493_008_uk_n_00000000_f_n'+img_s +'0493_008_uk_n_00000000_f_r'+spans+'steel type'+cardcl+div_+modalcolxl+cardop+'0493_009_uk_n_00000000_f_n'+img_s +'0493_009_uk_n_00000000_f_r'+spans+'fire type'+cardcl+div_+modalcolxl+cardop+'0493_010_uk_n_00000000_f_n'+img_s +'0493_010_uk_n_00000000_f_r'+spans+'water type'+cardcl+div_+modalcolxl+cardop+'0493_011_uk_n_00000000_f_n'+img_s +'0493_011_uk_n_00000000_f_r'+spans+'grass type'+cardcl+div_+modalcolxl+cardop+'0493_012_uk_n_00000000_f_n'+img_s +'0493_012_uk_n_00000000_f_r'+spans+'electric type'+cardcl+div_+modalcolxl+cardop+'0493_013_uk_n_00000000_f_n'+img_s +'0493_013_uk_n_00000000_f_r'+spans+'psychic type'+cardcl+div_+modalcolxl+cardop+'0493_014_uk_n_00000000_f_n'+img_s +'0493_014_uk_n_00000000_f_r'+spans+'ice type'+cardcl+div_+modalcolxl+cardop+'0493_015_uk_n_00000000_f_n'+img_s +'0493_015_uk_n_00000000_f_r'+spans+'dragon type'+cardcl+div_+modalcolxl+cardop+'0493_016_uk_n_00000000_f_n'+img_s +'0493_016_uk_n_00000000_f_r'+spans+'dark type'+cardcl+div_+modalcolxl+cardop+'0493_017_uk_n_00000000_f_n'+img_s +'0493_017_uk_n_00000000_f_r'+spans+'fairy type'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==520){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0521_000_md_n_00000000_f_n'+img_s +'0521_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0521_000_fd_n_00000000_f_n'+img_s +'0521_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==530){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0531_000_mf_n_00000000_f_n'+img_s +'0531_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0531_001_mf_n_00000000_f_n'+img_s +'0531_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==549){
                forms= "red-striped";
                nome='<a class="f-name" href="">'+'Basculin'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0550_000_mf_n_00000000_f_n'+img_s +'0550_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0550_001_mf_n_00000000_f_n'+img_s +'0550_001_mf_n_00000000_f_r'+spans+'blue-striped'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Basculin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==553){
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0554_000_mf_n_00000000_f_n'+img_s +'0554_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0554_001_mf_n_00000000_f_n'+img_s +'0554_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==554){
                forms= "standard";
                nome='<a class="f-name" href="">'+'Darmanitan'+'</a>'; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0555_000_mf_n_00000000_f_n'+img_s +'0555_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0555_001_mf_n_00000000_f_n'+img_s +'0555_001_mf_n_00000000_f_r'+spans+'zen mode'+cardcl+div_+modalcol+cardop+'0555_002_mf_n_00000000_f_n'+img_s +'0555_002_mf_n_00000000_f_r'+spans+galar+cardcl+div_+modalcol+cardop+'0555_003_mf_n_00000000_f_n'+img_s +'0555_003_mf_n_00000000_f_r'+spans+galar+' zen mode'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Darmanitan forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==561){
                
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0562_000_mf_n_00000000_f_n'+img_s +'0562_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0562_001_mf_n_00000000_f_n'+img_s +'0562_001_mf_n_00000000_f_r'+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==568){
                
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0569_000_mf_n_00000000_f_n'+img_s +'0569_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0569_000_mf_g_00000000_f_n'+img_s +'0569_000_mf_g_00000000_f_r'+spans+giga+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==584){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0585_000_mf_n_00000000_f_n'+img_s +'0585_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0585_001_mf_n_00000000_f_n'+img_s +'0585_001_mf_n_00000000_f_r'+spans+'summer form'+cardcl+div_+modalcol+cardop+'0585_002_mf_n_00000000_f_n'+img_s +'0585_002_mf_n_00000000_f_r'+spans+'autumn form'+cardcl+div_+modalcol+cardop+'0585_003_mf_n_00000000_f_n'+img_s +'0585_003_mf_n_00000000_f_r'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==585){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0586_000_mf_n_00000000_f_n'+img_s +'0586_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0586_001_mf_n_00000000_f_n'+img_s +'0586_001_mf_n_00000000_f_r'+spans+'summer form'+cardcl+div_+modalcol+cardop+'0586_002_mf_n_00000000_f_n'+img_s +'0586_002_mf_n_00000000_f_r'+spans+'autumn form'+cardcl+div_+modalcol+cardop+'0586_003_mf_n_00000000_f_n'+img_s +'0586_003_mf_n_00000000_f_r'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==591){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0592_000_md_n_00000000_f_n'+img_s +'0592_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0592_000_fd_n_00000000_f_n'+img_s +'0592_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==592){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0593_000_md_n_00000000_f_n'+img_s +'0593_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0593_000_fd_n_00000000_f_n'+img_s +'0593_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==617){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0618_000_mf_n_00000000_f_n'+img_s +'0618_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0618_001_mf_n_00000000_f_n'+img_s +'0618_001_mf_n_00000000_f_r'+spans+galar+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==640){
            gender= "mo";
                forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Tornadus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0641_000_mo_n_00000000_f_n'+img_s +'0641_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0641_001_mo_n_00000000_f_n'+img_s +'0641_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Tornadus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==641){
            gender= "mo";
            forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Thundurus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0642_000_mo_n_00000000_f_n'+img_s +'0642_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0642_001_mo_n_00000000_f_n'+img_s +'0642_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Thundurus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==642){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0643_000_uk_n_00000000_f_n'+img_s +'0643_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/1/1f/643Reshiram-Activated.png'+fimgcl+'in overdrive'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==643){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0644_000_uk_n_00000000_f_n'+img_s +'0644_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/a/af/644Zekrom-Activated.png'+fimgcl+'in overdrive'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==644){
            gender= "mo";
            forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Landorus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0645_000_mo_n_00000000_f_n'+img_s +'0645_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0645_001_mo_n_00000000_f_n'+img_s +'0645_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Landorus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==645){
            gender= "uk";
            forms= "standard"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0646_000_uk_n_00000000_f_n'+img_s +'0646_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0646_001_uk_n_00000000_f_n'+img_s +'0646_001_uk_n_00000000_f_r'+spans+'white Kyurem'+cardcl+div_+modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/kyurem-white.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/kyurem-white.png'+fimgcl+'white Kyurem<br>in overdrive'+cardcl+div_+modalcol+cardop+'0646_002_uk_n_00000000_f_n'+img_s +'0646_002_uk_n_00000000_f_r'+spans+'black Kyurem'+cardcl+div_+modalcol+fcardopnormal+'https://img.pokemondb.net/sprites/go/normal/kyurem-black.png'+fcardopshiny+'https://img.pokemondb.net/sprites/go/shiny/kyurem-black.png'+fimgcl+'black Kyurem<br>in overdrive'+cardcl+div_;
       //+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/2/26/646Kyurem-White2.png/600px-646Kyurem-White2.png'+fimgcl+'white Kyurem<br>in overdrive'+cardcl+div_
       //+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/d/de/646Kyurem-Black2.png/600px-646Kyurem-Black2.png'+fimgcl +'black Kyurem<br>in overdrive'+cardcl+div_
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==646){
            gender= "uk";
            forms= "ordinary form";
            nome='<a class="f-name" href="">'+'Keldeo'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0647_000_uk_n_00000000_f_n'+img_s +'0647_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0647_001_uk_n_00000000_f_n'+img_s +'0647_001_uk_n_00000000_f_r'+spans+'resolute form'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Keldeo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==647){
            gender= "uk";
            forms= "aria forme";
            nome='<a class="f-name" href="">'+'Meloetta'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0648_000_uk_n_00000000_f_n'+img_s +'0648_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0648_001_uk_n_00000000_f_n'+img_s +'0648_001_uk_n_00000000_f_r'+spans+'pirouette forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meloetta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==648){
            forms= "standard";
            gender= "uk"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0649_000_uk_n_00000000_f_n'+img_s +'0649_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0649_001_uk_n_00000000_f_n'+img_s +'0649_001_uk_n_00000000_f_r'+spans+'douse drive'+cardcl+div_+modalcol+cardop+'0649_002_uk_n_00000000_f_n'+img_s +'0649_002_uk_n_00000000_f_r'+spans+'shock drive'+cardcl+div_+modalcol+cardop+'0649_003_uk_n_00000000_f_n'+img_s +'0649_003_uk_n_00000000_f_r'+spans+'burn drive'+cardcl+div_+modalcol+cardop+'0649_004_uk_n_00000000_f_n'+img_s +'0649_004_uk_n_00000000_f_r'+spans+'chill drive'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } 
        

          else if (i==657){
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0658_000_mf_n_00000000_f_n'+img_s +'0658_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0658_002_mo_n_00000000_f_n'+img_s +'0658_002_mo_n_00000000_f_r'+spans+'Ash-Greninja'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if(i==665){ 
            forms= "icy snow";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+'0666_000_mf_n_00000000_f_n'+img_s +'0666_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0666_001_mf_n_00000000_f_n'+img_s +'0666_001_mf_n_00000000_f_r'+spans+'polar'+cardcl+div_+modalcolxl+cardop+'0666_002_mf_n_00000000_f_n'+img_s +'0666_002_mf_n_00000000_f_r'+spans+'tundra'+cardcl+div_+modalcolxl+cardop+'0666_003_mf_n_00000000_f_n'+img_s +'0666_003_mf_n_00000000_f_r'+spans+'continental'+cardcl+div_+modalcolxl+cardop+'0666_004_mf_n_00000000_f_n'+img_s +'0666_004_mf_n_00000000_f_r'+spans+'garden'+cardcl+div_+modalcolxl+cardop+'0666_005_mf_n_00000000_f_n'+img_s +'0666_005_mf_n_00000000_f_r'+spans+'elegant'+cardcl+div_+modalcolxl+cardop+'0666_006_mf_n_00000000_f_n'+img_s +'0666_006_mf_n_00000000_f_r'+spans+'meadow'+cardcl+div_+modalcolxl+cardop+'0666_007_mf_n_00000000_f_n'+img_s +'0666_007_mf_n_00000000_f_r'+spans+'modern'+cardcl+div_+modalcolxl+cardop+'0666_008_mf_n_00000000_f_n'+img_s +'0666_008_mf_n_00000000_f_r'+spans+'marine'+cardcl+div_+modalcolxl+cardop+'0666_009_mf_n_00000000_f_n'+img_s +'0666_009_mf_n_00000000_f_r'+spans+'archipelago'+cardcl+div_+modalcolxl+cardop+'0666_010_mf_n_00000000_f_n'+img_s +'0666_010_mf_n_00000000_f_r'+spans+'high plains'+cardcl+div_+modalcolxl+cardop+'0666_011_mf_n_00000000_f_n'+img_s +'0666_011_mf_n_00000000_f_r'+spans+'sandstorm'+cardcl+div_+modalcolxl+cardop+'0666_012_mf_n_00000000_f_n'+img_s +'0666_012_mf_n_00000000_f_r'+spans+'river'+cardcl+div_+modalcolxl+cardop+'0666_013_mf_n_00000000_f_n'+img_s +'0666_013_mf_n_00000000_f_r'+spans+'monsoon'+cardcl+div_+modalcolxl+cardop+'0666_014_mf_n_00000000_f_n'+img_s +'0666_014_mf_n_00000000_f_r'+spans+'savanna'+cardcl+div_+modalcolxl+cardop+'0666_015_mf_n_00000000_f_n'+img_s +'0666_015_mf_n_00000000_f_r'+spans+'sun'+cardcl+div_+modalcolxl+cardop+'0666_016_mf_n_00000000_f_n'+img_s +'0666_016_mf_n_00000000_f_r'+spans+'ocean'+cardcl+div_+modalcolxl+cardop+'0666_017_mf_n_00000000_f_n'+img_s +'0666_017_mf_n_00000000_f_r'+spans+'jungle'+cardcl+div_+modalcolxl+cardop+'0666_018_mf_n_00000000_f_n'+img_s +'0666_018_mf_n_00000000_f_r'+spans+'fancy'+cardcl+div_+modalcolxl+cardop+'0666_019_mf_n_00000000_f_n'+img_s +'0666_019_mf_n_00000000_f_r'+spans+'poké ball'+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==667){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0668_000_md_n_00000000_f_n'+img_s +'0668_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0668_000_fd_n_00000000_f_n'+img_s +'0668_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==668){
            gender= "fo";
                forms= "red flower";
            nome='<a class="f-name" href="">'+'Flabébé'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0669_000_fo_n_00000000_f_n'+img_s +'0669_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0669_001_fo_n_00000000_f_n'+img_s +'0669_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0669_002_fo_n_00000000_f_n'+img_s +'0669_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0669_003_fo_n_00000000_f_n'+img_s +'0669_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0669_004_fo_n_00000000_f_n'+img_s +'0669_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Flabébé forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==669){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0670_000_fo_n_00000000_f_n'+img_s +'0670_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0670_001_fo_n_00000000_f_n'+img_s +'0670_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0670_002_fo_n_00000000_f_n'+img_s +'0670_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0670_003_fo_n_00000000_f_n'+img_s +'0670_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0670_004_fo_n_00000000_f_n'+img_s +'0670_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_+modalcol+fcardopnormal+'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d7bbc09-b889-4fb5-89c5-390e7aa64cb4/d8dgmj3-5d2a1529-7a92-4a5b-bdfa-456dfea107c6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkN2JiYzA5LWI4ODktNGZiNS04OWM1LTM5MGU3YWE2NGNiNFwvZDhkZ21qMy01ZDJhMTUyOS03YTkyLTRhNWItYmRmYS00NTZkZmVhMTA3YzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T_0361B3Vwo2HZPUM3s9FE8LcrJVRO0ZS2yTBiGSgSk'+fcardopshiny+'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d7bbc09-b889-4fb5-89c5-390e7aa64cb4/d8dgmsp-9c7cfb04-67a4-4c83-b9f1-69de20dd7dfe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkN2JiYzA5LWI4ODktNGZiNS04OWM1LTM5MGU3YWE2NGNiNFwvZDhkZ21zcC05YzdjZmIwNC02N2E0LTRjODMtYjlmMS02OWRlMjBkZDdkZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TM1KzhAf6TwM43Pn50aRTmtcOSogB4O8eMLaKgBzU-U'+fimgcl +"eternal flower<br>AZ's unique Floette"+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==670){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0671_000_fo_n_00000000_f_n'+img_s +'0671_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0671_001_fo_n_00000000_f_n'+img_s +'0671_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0671_002_fo_n_00000000_f_n'+img_s +'0671_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0671_003_fo_n_00000000_f_n'+img_s +'0671_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0671_004_fo_n_00000000_f_n'+img_s +'0671_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==675){
            forms= "natural form";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0676_000_mf_n_00000000_f_n'+img_s +'0676_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0676_001_mf_n_00000000_f_n'+img_s +'0676_001_mf_n_00000000_f_r'+spans+'heart trim'+cardcl+div_+modalcol+cardop+'0676_002_mf_n_00000000_f_n'+img_s +'0676_002_mf_n_00000000_f_r'+spans+'star trim'+cardcl+div_+modalcol+cardop+'0676_003_mf_n_00000000_f_n'+img_s +'0676_003_mf_n_00000000_f_r'+spans+'diamond trim'+cardcl+div_+modalcol+cardop+'0676_004_mf_n_00000000_f_n'+img_s +'0676_004_mf_n_00000000_f_r'+spans+'debutante trim'+cardcl+div_+modalcol+cardop+'0676_005_mf_n_00000000_f_n'+img_s +'0676_005_mf_n_00000000_f_r'+spans+'matron trim'+cardcl+div_+modalcol+cardop+'0676_006_mf_n_00000000_f_n'+img_s +'0676_006_mf_n_00000000_f_r'+spans+'dandy trim'+cardcl+div_+modalcol+cardop+'0676_007_mf_n_00000000_f_n'+img_s +'0676_007_mf_n_00000000_f_r'+spans+'la reine trim'+cardcl+div_+modalcol+cardop+'0676_008_mf_n_00000000_f_n'+img_s +'0676_008_mf_n_00000000_f_r'+spans+'kabuki trim'+cardcl+div_+modalcol+cardop+'0676_009_mf_n_00000000_f_n'+img_s +'0676_009_mf_n_00000000_f_r'+spans+'pharaoh trim'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==677){
            gender= "mo";
            forms= 'male';
            nome='<a class="f-name" href="">'+'Meowstic'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0678_000_mo_n_00000000_f_n'+img_s +'0678_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0678_001_fo_n_00000000_f_n'+img_s +'0678_001_fo_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meowstic forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==680){
            nome='<a class="f-name" href="">'+'Aegislash'+'</a>';
            forms= "shield forme";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0681_000_mf_n_00000000_f_n'+img_s +'0681_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0681_001_mf_n_00000000_f_n'+img_s +'0681_001_mf_n_00000000_f_r'+spans+'blade forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Aegislash forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==709){
            forms= "average size";
            nome='<a class="f-name" href="">'+'Pumpkaboo'+'</a>';
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0710_001_mf_n_00000000_f_n'+img_s +'0710_001_mf_n_00000000_f_r'+spans+'small size'+cardcl+div_+modalcol+cardop+'0710_000_mf_n_00000000_f_n'+img_s +'0710_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0710_002_mf_n_00000000_f_n'+img_s +'0710_002_mf_n_00000000_f_r'+spans+'large size'+cardcl+div_+modalcol+cardop+'0710_003_mf_n_00000000_f_n'+img_s +'0710_003_mf_n_00000000_f_r'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Pumpkaboo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==710){
            forms= "average size";
            nome='<a class="f-name" href="">'+'Gourgeist'+'</a>';
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0711_001_mf_n_00000000_f_n'+img_s +'0711_001_mf_n_00000000_f_r'+spans+'small size'+cardcl+div_+modalcol+cardop+'0711_000_mf_n_00000000_f_n'+img_s +'0711_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0711_002_mf_n_00000000_f_n'+img_s +'0711_002_mf_n_00000000_f_r'+spans+'large size'+cardcl+div_+modalcol+cardop+'0711_003_mf_n_00000000_f_n'+img_s +'0711_003_mf_n_00000000_f_r'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Gourgeist forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==715){
            gender= "uk";
                forms= "neutral mode";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0716_000_uk_n_00000000_f_n'+img_s +'0716_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0716_001_uk_n_00000000_f_n'+img_s +'0716_001_uk_n_00000000_f_r'+spans+'active mode'+cardcl+fcardop+'https://pinkiespokemonhome.files.wordpress.com/2019/08/c03ebd6c431176807ce56c16bafdbf12c9765ed5_hq.jpg?w=258&h=300'+fimgcl +'tree'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==716){
            gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0717_000_uk_n_00000000_f_n'+img_s +'0717_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/1/16/Malva_Yveltal_cocoon_form_Adventures.png/411px-Malva_Yveltal_cocoon_form_Adventures.png'+fimgcl +'cocoon'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==717){
            gender= "uk";
            forms= "50% forme";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0718_000_uk_n_00000000_f_n'+img_s +'0718_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0718_001_uk_n_00000000_f_n'+img_s +'0718_001_uk_n_00000000_f_r'+spans+'10% forme'+cardcl+div_+modalcol+cardop+'0718_004_uk_n_00000000_f_n'+img_s +'0718_004_uk_n_00000000_f_r'+spans+'complete forme'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/9/93/718Zygarde-Cell.png/600px-718Zygarde-Cell.png'+fimgcl+'cell'+cardcl+div_+modalcol+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/8/8b/718Zygarde-Core.png/600px-718Zygarde-Core.png'+fimgcl+'core'+cardcl+div_;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==718){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0719_000_uk_n_00000000_f_n'+img_s +'0719_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0719_001_uk_n_00000000_f_n'+img_s +'0719_001_uk_n_00000000_f_r'+spans+mega+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==719){
            gender= "uk";
            forms= "confined";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0720_000_uk_n_00000000_f_n'+img_s +'0720_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0720_001_uk_n_00000000_f_n'+img_s +'0720_001_uk_n_00000000_f_r'+spans+'unbound'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==740){
            forms= "baile style";
            nome='<a class="f-name" href="">'+'Oricorio'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0741_000_mf_n_00000000_f_n'+img_s +'0741_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0741_001_mf_n_00000000_f_n'+img_s +'0741_001_mf_n_00000000_f_r'+spans+'pom-pom style'+cardcl+div_+modalcol+cardop+'0741_002_mf_n_00000000_f_n'+img_s +'0741_002_mf_n_00000000_f_r'+spans+"pa'u style"+cardcl+div_+modalcol+cardop+'0741_003_mf_n_00000000_f_n'+img_s +'0741_003_mf_n_00000000_f_r'+spans+'sensu style'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Oricorio forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==744){
            nome='<a class="f-name" href="">'+'Lycanroc'+'</a>';
            forms= "miday form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0745_000_mf_n_00000000_f_n'+img_s +'0745_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0745_001_mf_n_00000000_f_n'+img_s +'0745_001_mf_n_00000000_f_r'+spans+'midnight form'+cardcl+cardop+'0745_002_mf_n_00000000_f_n'+img_s +'0745_002_mf_n_00000000_f_r'+spans+'dusk form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Lycanroc forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==745){
            nome='<a class="f-name" href="">'+'Wishiwashi'+'</a>';
            forms= "solo form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0746_000_mf_n_00000000_f_n'+img_s +'0746_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0746_001_mf_n_00000000_f_n'+img_s +'0746_001_mf_n_00000000_f_r'+spans+'school form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wishiwashi forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==771){
            nome='<a class="f-name" href="">'+'Type: Null'+'</a>';
            gender= "uk";
        } else if(i==772){
            gender= "uk";
                forms= "type: normal";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+'0773_000_uk_n_00000000_f_n'+img_s +'0773_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0773_001_uk_n_00000000_f_n'+img_s +'0773_001_uk_n_00000000_f_r'+spans+' type: fighting'+cardcl+div_+modalcolxl+cardop+'0773_002_uk_n_00000000_f_n'+img_s +'0773_002_uk_n_00000000_f_r'+spans+' type: flying'+cardcl+div_+modalcolxl+cardop+'0773_003_uk_n_00000000_f_n'+img_s +'0773_003_uk_n_00000000_f_r'+spans+' type: poison'+cardcl+div_+modalcolxl+cardop+'0773_004_uk_n_00000000_f_n'+img_s +'0773_004_uk_n_00000000_f_r'+spans+' type: ground'+cardcl+div_+modalcolxl+cardop+'0773_005_uk_n_00000000_f_n'+img_s +'0773_005_uk_n_00000000_f_r'+spans+' type: rock'+cardcl+div_+modalcolxl+cardop+'0773_006_uk_n_00000000_f_n'+img_s +'0773_006_uk_n_00000000_f_r'+spans+' type: bug'+cardcl+div_+modalcolxl+cardop+'0773_007_uk_n_00000000_f_n'+img_s +'0773_007_uk_n_00000000_f_r'+spans+' type: ghost'+cardcl+div_+modalcolxl+cardop+'0773_008_uk_n_00000000_f_n'+img_s +'0773_008_uk_n_00000000_f_r'+spans+' type: steel'+cardcl+div_+modalcolxl+cardop+'0773_009_uk_n_00000000_f_n'+img_s +'0773_009_uk_n_00000000_f_r'+spans+' type: fire'+cardcl+div_+modalcolxl+cardop+'0773_010_uk_n_00000000_f_n'+img_s +'0773_010_uk_n_00000000_f_r'+spans+' type: water'+cardcl+div_+modalcolxl+cardop+'0773_011_uk_n_00000000_f_n'+img_s +'0773_011_uk_n_00000000_f_r'+spans+' type: grass'+cardcl+div_+modalcolxl+cardop+'0773_012_uk_n_00000000_f_n'+img_s +'0773_012_uk_n_00000000_f_r'+spans+' type: electric'+cardcl+div_+modalcolxl+cardop+'0773_013_uk_n_00000000_f_n'+img_s +'0773_013_uk_n_00000000_f_r'+spans+' type: psychic'+cardcl+div_+modalcolxl+cardop+'0773_014_uk_n_00000000_f_n'+img_s +'0773_014_uk_n_00000000_f_r'+spans+' type: ice'+cardcl+div_+modalcolxl+cardop+'0773_015_uk_n_00000000_f_n'+img_s +'0773_015_uk_n_00000000_f_r'+spans+' type: dragon'+cardcl+div_+modalcolxl+cardop+'0773_016_uk_n_00000000_f_n'+img_s +'0773_016_uk_n_00000000_f_r'+spans+' type: dark'+cardcl+div_+modalcolxl+cardop+'0773_017_uk_n_00000000_f_n'+img_s +'0773_017_uk_n_00000000_f_r'+spans+' type: fairy'+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==773){
            gender= "uk";
            forms= "core";
            nome='<a class="f-name" href="">'+'Minior'+'</a>';
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0774_000_uk_n_00000000_f_n'+img_s +'0774_000_uk_n_00000000_f_r'+spans+'meteor'+cardcl+div_+modalcol+cardop+'0774_007_uk_n_00000000_f_r'+img_s +'0774_007_uk_n_00000000_f_n'+spans+'red core'+cardcl+div_+modalcol+cardop+'0774_008_uk_n_00000000_f_r'+img_s +'0774_008_uk_n_00000000_f_n'+spans+'orange core'+cardcl+div_+modalcol+cardop+'0774_009_uk_n_00000000_f_r'+img_s +'0774_009_uk_n_00000000_f_n'+spans+'yellow core'+cardcl+div_+modalcol+cardop+'0774_010_uk_n_00000000_f_r'+img_s +'0774_010_uk_n_00000000_f_n'+spans+'green core'+cardcl+div_+modalcol+cardop+'0774_011_uk_n_00000000_f_r'+img_s +'0774_011_uk_n_00000000_f_n'+spans+'blue core'+cardcl+div_+modalcol+cardop+'0774_012_uk_n_00000000_f_r'+img_s +'0774_012_uk_n_00000000_f_n'+spans+'indigo core'+cardcl+div_+modalcol+cardop+'0774_013_uk_n_00000000_f_r'+img_s +'0774_013_uk_n_00000000_f_n'+spans+'violet core'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Minior forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==777){ 
            forms= "disguised";
            nome='<a class="f-name" href="">'+'Mimikyu'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0778_000_mf_n_00000000_f_n'+img_s +'0778_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0778_001_mf_n_00000000_f_n'+img_s +'0778_001_mf_n_00000000_f_r'+spans+'busted'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Mimikyu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==790){ 
            gender= "uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0791_000_uk_n_00000000_f_n'+img_s +'0791_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/5/58/791Solgaleo-RadiantSunPhase.png/600px-791Solgaleo-RadiantSunPhase.png'+fimgcl +'radiant sun phase'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==791){ 
            gender= "uk";
            forms= "standard";

            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0792_000_uk_n_00000000_f_n'+img_s +'0792_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/thumb/6/64/792Lunala-FullMoonPhase.png/600px-792Lunala-FullMoonPhase.png'+fimgcl +'full moon phase'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==799){
            gender= "uk";
                forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0800_000_uk_n_00000000_f_n'+img_s +'0800_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0800_001_uk_n_00000000_f_n'+img_s +'0800_001_uk_n_00000000_f_r'+spans+'dusk mane'+cardcl+div_+modalcol+cardop+'0800_002_uk_n_00000000_f_n'+img_s +'0800_002_uk_n_00000000_f_r'+spans+'dawn wings'+cardcl+div_+modalcol+cardop+'0800_003_uk_n_00000000_f_n'+img_s +'0800_003_uk_n_00000000_f_r'+spans+'ultra Necrozma'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==800){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0801_000_uk_n_00000000_f_n'+img_s +'0801_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0801_001_uk_n_00000000_f_n'+img_s +'0801_001_uk_n_00000000_f_r'+spans+'original color'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==801){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0802_000_uk_n_00000000_f_n'+img_s +'0802_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardopnormal+'https://archives.bulbagarden.net/media/upload/thumb/1/11/802Marshadow-Alt.png/600px-802Marshadow-Alt.png'+fcardopshiny+'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e48d6b9d-3b1d-46a0-a254-3a448ec3a8a5/ddn43ra-94a76142-591e-4f64-917a-3659635d4bff.png'+fimgcl +'zenith'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==808){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0809_000_uk_n_00000000_f_n'+img_s +'0809_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0809_000_uk_g_00000000_f_n'+img_s +'0809_000_uk_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==811){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0812_000_mf_n_00000000_f_n'+img_s +'0812_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0812_000_mf_g_00000000_f_n'+img_s +'0812_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==814){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0815_000_mf_n_00000000_f_n'+img_s +'0815_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0815_000_mf_g_00000000_f_n'+img_s +'0815_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==817){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0818_000_mf_n_00000000_f_n'+img_s +'0818_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0818_000_mf_g_00000000_f_n'+img_s +'0818_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==822){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0823_000_mf_n_00000000_f_n'+img_s +'0823_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0823_000_mf_g_00000000_f_n'+img_s +'0823_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==825){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0826_000_mf_n_00000000_f_n'+img_s +'0826_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0826_000_mf_g_00000000_f_n'+img_s +'0826_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==833){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0834_000_mf_n_00000000_f_n'+img_s +'0834_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0834_000_mf_g_00000000_f_n'+img_s +'0834_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==838){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0839_000_mf_n_00000000_f_n'+img_s +'0839_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0839_000_mf_g_00000000_f_n'+img_s +'0839_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==840){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0841_000_mf_n_00000000_f_n'+img_s +'0841_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0841_000_mf_g_00000000_f_n'+img_s +'0841_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==841){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0842_000_mf_n_00000000_f_n'+img_s +'0842_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0842_000_mf_g_00000000_f_n'+img_s +'0842_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==843){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0844_000_mf_n_00000000_f_n'+img_s +'0844_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0844_000_mf_g_00000000_f_n'+img_s +'0844_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==844){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0845_000_mf_n_00000000_f_n'+img_s +'0845_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0845_001_mf_n_00000000_f_n'+img_s +'0845_001_mf_n_00000000_f_r'+spans+'gulping'+cardcl+cardop+'0845_002_mf_n_00000000_f_n'+img_s +'0845_002_mf_n_00000000_f_r'+spans+'gorging'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==848){
            nome='<a class="f-name" href="">'+'Toxtricity'+'</a>';
            forms= "amped form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0849_000_mf_n_00000000_f_n'+img_s +'0849_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0849_001_mf_n_00000000_f_n'+img_s +'0849_001_mf_n_00000000_f_r'+spans+'low key'+cardcl+cardop+'0849_000_mf_g_00000000_f_n'+img_s +'0849_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Toxtricity forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==850){  
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0851_000_mf_n_00000000_f_n'+img_s +'0851_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0851_000_mf_g_00000000_f_n'+img_s +'0851_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==853){  
            gender="uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0854_000_uk_n_00000000_f_n'+img_s +'0854_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/a/a3/HOME854_b.png'+fimgcl +'phony'+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/3/38/HOME854A_b.png'+fimgcl +'antique'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==854){  
            gender="uk";
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0855_000_uk_n_00000000_f_n'+img_s +'0855_000_uk_n_00000000_f_r'+spans+forms+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/d/d5/HOME855_b.png'+fimgcl +'phony'+cardcl+fcardop+'https://archives.bulbagarden.net/media/upload/4/4a/HOME855A_b.png'+fimgcl +'antique'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==857){
            gender= "fo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0858_000_fo_n_00000000_f_n'+img_s +'0858_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0858_000_fo_g_00000000_f_n'+img_s +'0858_000_fo_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==860){
            gender= "mo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0861_000_mo_n_00000000_f_n'+img_s +'0861_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0861_000_mo_g_00000000_f_n'+img_s +'0861_000_mo_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }
        else if(i==868){ 
            gender= "fo";
            forms= "vanilla cream<br>strawberry sweet";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolfull+cardop+'0869_000_fo_g_00000000_f_n'+img_s +'0869_000_fo_g_00000000_f_r'+spans+giga+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000000_f_r'+img_s +'0869_000_fo_n_00000000_f_n'+spans+forms+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000001_f_r'+img_s +'0869_000_fo_n_00000001_f_n'+spans+"vanilla cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000002_f_r'+img_s +'0869_000_fo_n_00000002_f_n'+spans+"vanilla cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000003_f_r'+img_s +'0869_000_fo_n_00000003_f_n'+spans+"vanilla cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000004_f_r'+img_s +'0869_000_fo_n_00000004_f_n'+spans+"vanilla cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000005_f_r'+img_s +'0869_000_fo_n_00000005_f_n'+spans+"vanilla cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000006_f_r'+img_s +'0869_000_fo_n_00000006_f_n'+spans+"vanilla cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000000_f_r'+img_s +'0869_001_fo_n_00000000_f_n'+spans+"ruby cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000001_f_r'+img_s +'0869_001_fo_n_00000001_f_n'+spans+"ruby cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000002_f_r'+img_s +'0869_001_fo_n_00000002_f_n'+spans+"ruby cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000003_f_r'+img_s +'0869_001_fo_n_00000003_f_n'+spans+"ruby cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000004_f_r'+img_s +'0869_001_fo_n_00000004_f_n'+spans+"ruby cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000005_f_r'+img_s +'0869_001_fo_n_00000005_f_n'+spans+"ruby cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000006_f_r'+img_s +'0869_001_fo_n_00000006_f_n'+spans+"ruby cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000000_f_r'+img_s +'0869_002_fo_n_00000000_f_n'+spans+"matcha cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000001_f_r'+img_s +'0869_002_fo_n_00000001_f_n'+spans+"matcha cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000002_f_r'+img_s +'0869_002_fo_n_00000002_f_n'+spans+"matcha cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000003_f_r'+img_s +'0869_002_fo_n_00000003_f_n'+spans+"matcha cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000004_f_r'+img_s +'0869_002_fo_n_00000004_f_n'+spans+"matcha cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000005_f_r'+img_s +'0869_002_fo_n_00000005_f_n'+spans+"matcha cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000006_f_r'+img_s +'0869_002_fo_n_00000006_f_n'+spans+"matcha cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000000_f_r'+img_s +'0869_003_fo_n_00000000_f_n'+spans+"mint cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000001_f_r'+img_s +'0869_003_fo_n_00000001_f_n'+spans+"mint cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000002_f_r'+img_s +'0869_003_fo_n_00000002_f_n'+spans+"mint cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000003_f_r'+img_s +'0869_003_fo_n_00000003_f_n'+spans+"mint cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000004_f_r'+img_s +'0869_003_fo_n_00000004_f_n'+spans+"mint cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000005_f_r'+img_s +'0869_003_fo_n_00000005_f_n'+spans+"mint cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000006_f_r'+img_s +'0869_003_fo_n_00000006_f_n'+spans+"mint cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000000_f_r'+img_s +'0869_004_fo_n_00000000_f_n'+spans+"lemon cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000001_f_r'+img_s +'0869_004_fo_n_00000001_f_n'+spans+"lemon cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000002_f_r'+img_s +'0869_004_fo_n_00000002_f_n'+spans+"lemon cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000003_f_r'+img_s +'0869_004_fo_n_00000003_f_n'+spans+"lemon cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000004_f_r'+img_s +'0869_004_fo_n_00000004_f_n'+spans+"lemon cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000005_f_r'+img_s +'0869_004_fo_n_00000005_f_n'+spans+"lemon cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000006_f_r'+img_s +'0869_004_fo_n_00000006_f_n'+spans+"lemon cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000000_f_r'+img_s +'0869_005_fo_n_00000000_f_n'+spans+"salted cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000001_f_r'+img_s +'0869_005_fo_n_00000001_f_n'+spans+"salted cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000002_f_r'+img_s +'0869_005_fo_n_00000002_f_n'+spans+"salted cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000003_f_r'+img_s +'0869_005_fo_n_00000003_f_n'+spans+"salted cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000004_f_r'+img_s +'0869_005_fo_n_00000004_f_n'+spans+"salted cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000005_f_r'+img_s +'0869_005_fo_n_00000005_f_n'+spans+"salted cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000006_f_r'+img_s +'0869_005_fo_n_00000006_f_n'+spans+"salted cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000000_f_r'+img_s +'0869_006_fo_n_00000000_f_n'+spans+"ruby swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000001_f_r'+img_s +'0869_006_fo_n_00000001_f_n'+spans+"ruby swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000002_f_r'+img_s +'0869_006_fo_n_00000002_f_n'+spans+"ruby swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000003_f_r'+img_s +'0869_006_fo_n_00000003_f_n'+spans+"ruby swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000004_f_r'+img_s +'0869_006_fo_n_00000004_f_n'+spans+"ruby swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000005_f_r'+img_s +'0869_006_fo_n_00000005_f_n'+spans+"ruby swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000006_f_r'+img_s +'0869_006_fo_n_00000006_f_n'+spans+"ruby swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000000_f_r'+img_s +'0869_007_fo_n_00000000_f_n'+spans+"caramel swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000001_f_r'+img_s +'0869_007_fo_n_00000001_f_n'+spans+"caramel swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000002_f_r'+img_s +'0869_007_fo_n_00000002_f_n'+spans+"caramel swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000003_f_r'+img_s +'0869_007_fo_n_00000003_f_n'+spans+"caramel swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000004_f_r'+img_s +'0869_007_fo_n_00000004_f_n'+spans+"caramel swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000005_f_r'+img_s +'0869_007_fo_n_00000005_f_n'+spans+"caramel swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000006_f_r'+img_s +'0869_007_fo_n_00000006_f_n'+spans+"caramel swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000000_f_r'+img_s +'0869_008_fo_n_00000000_f_n'+spans+"rainbow swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000001_f_r'+img_s +'0869_008_fo_n_00000001_f_n'+spans+"rainbow swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000002_f_r'+img_s +'0869_008_fo_n_00000002_f_n'+spans+"rainbow swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000003_f_r'+img_s +'0869_008_fo_n_00000003_f_n'+spans+"rainbow swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000004_f_r'+img_s +'0869_008_fo_n_00000004_f_n'+spans+"rainbow swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000005_f_r'+img_s +'0869_008_fo_n_00000005_f_n'+spans+"rainbow swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000006_f_r'+img_s +'0869_008_fo_n_00000006_f_n'+spans+"rainbow swirl<br>ribbon sweet"+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-fullscreen"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==874){
            forms= "ice face";
            nome='<a class="f-name" href="">'+'Eiscue'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0875_000_mf_n_00000000_f_n'+img_s +'0875_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0875_001_mf_n_00000000_f_n'+img_s +'0875_001_mf_n_00000000_f_r'+spans+'noice face'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Eiscue forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==875){  
            gender= "mo";
            forms= "male";
            nome='<a class="f-name" href="">'+'Indeedee'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0876_000_mo_n_00000000_f_n'+img_s +'0876_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0876_001_fo_n_00000000_f_n'+img_s +'0876_001_fo_n_00000000_f_r'+spans+fem+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Indeedee forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==876){  
            
            forms= "full belly mode";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0877_000_mf_n_00000000_f_n'+img_s +'0877_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0877_001_mf_n_00000000_f_n'+img_s +'0877_001_mf_n_00000000_f_r'+spans+'hangry mode'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==878){  
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0879_000_mf_n_00000000_f_n'+img_s +'0879_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0879_000_mf_g_00000000_f_n'+img_s +'0879_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==883){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0884_000_mf_n_00000000_f_n'+img_s +'0884_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0884_000_mf_g_00000000_f_n'+img_s +'0884_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } if(i==887){
            gender= "uk";
            forms= "hero of<br>many battles";
            nome='<a class="f-name" href="">'+'Zacian'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0888_000_uk_n_00000000_f_n'+img_s +'0888_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0888_001_uk_n_00000000_f_n'+img_s +'0888_001_uk_n_00000000_f_r'+spans+'crowned sword'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zacian forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if(i==888){
            gender= "uk";
            forms= "hero of<br>many battles";
            nome='<a class="f-name" href="">'+'Zamazenta'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0889_000_uk_n_00000000_f_n'+img_s +'0889_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0889_001_uk_n_00000000_f_n'+img_s +'0889_001_uk_n_00000000_f_r'+spans+'crowned shield'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zamazenta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==889){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0890_000_uk_n_00000000_f_n'+img_s +'0890_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0890_001_uk_n_00000000_f_n'+img_s +'0890_001_uk_n_00000000_f_r'+spans+'eternamax'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==891){  
            forms= "single strike style";
            nome='<a class="f-name" href="">'+'Urshifu'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0892_000_mf_n_00000000_f_n'+img_s +'0892_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0892_000_mf_g_00000000_f_n'+img_s +'0892_000_mf_g_00000000_f_r'+spans+forms+'<br>'+giga+cardcl+div_+modalcol+cardop+'0892_001_mf_n_00000000_f_n'+img_s +'0892_001_mf_n_00000000_f_r'+spans+"rapid strike style"+cardcl+div_+modalcol+cardop+'0892_001_mf_g_00000000_f_n'+img_s +'0892_001_mf_g_00000000_f_r'+spans+"rapid strike style<br>"+giga+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Urshifu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==892){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0893_000_uk_n_00000000_f_n'+img_s +'0893_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0893_001_uk_n_00000000_f_n'+img_s +'0893_001_uk_n_00000000_f_r'+spans+'Dada Zarude'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==897){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0898_000_uk_n_00000000_f_n'+img_s +'0898_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0898_001_uk_n_00000000_f_n'+img_s +'0898_001_uk_n_00000000_f_r'+spans+'ice rider'+cardcl+cardop+'0898_002_uk_n_00000000_f_n'+img_s +'0898_002_uk_n_00000000_f_r'+spans+'shadow rider'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }
        else if (i==112 || i==123 || i==237 || i==240 || i==241 || i==313 || i==415 || i==439 || i==477 || i==487 || i==547 || i==548 || i==628 || i==629 || i==757 || i>=760 && i<=762 || i==855 || i==856 || i==867) {
                gender= "fo";
            } else if (i==105 || i==106 || i==127 || i==235 || i==236 || i==312 || i==413 || i==537 || i==538 || i==626 || i==627 || i==858 || i==859) {
                gender= "mo";
            } else if (i==99 || i==100 || i==119 || i==120 || i==131 || i==136 || i==150 || i==232 || i>=242 && i<=244 || i==249 || i==250 || i==291 || i==232 || i==336 || i==337 || i==342 || i==343 || i==373 || i==374 || i>=376 && i<=378 || i==384 || i==435|| i==436 || i==461|| i==473|| i>=479 && i<=483 || i==485 || i>=488 && i<=490 || i==493 || i>=598 && i<=600 || i==614|| i==621|| i==622 || i>=637 && i<=639 || i==702|| i==720 || i==780 || i>=784 && i<=789 || i>=792 && i<=798 || i>=802 && i<=807 || i==869 || i>=879 && i<=882 || i>=893 && i<=896) {
                gender= "uk";
            }
            
           
                    
                card += buildPokemonCard(i+1, nome, muteBtn, modallo, gender);
         
        }
        
        $('#nationalPokedex').html(card);
        // $('#kanto-btn').on('click', function() {
        
        //     $('.f-card').each(function(){
                

        //         $(this).toggleClass('d-none');
                
                
        //     });
        

        // }) ;
        

    // });
});

};
 //funzioni UTILI by Dave
 const buildPokemonCard = (pokeNumber, nome, muteBtn, modallo, gender) => {

    return ('<div class="f-card" id="' + pokeNumber + '">' +
        '<span class="f-sprite">' +
        '<img class="f-normalimg" src="' + getPokemonSpriteUrl(false, gender, pokeNumber) + '" alt="sprite">' +
        '<img class="f-shinyimg" src="' + getPokemonSpriteUrl(true, gender, pokeNumber) + '" alt="sprite-shiny">' +
        '</span>' +
        '<br>' +
        '<span class="text-muted">' +
        '<small>' + "#" + padPokemonNumber(pokeNumber, 4) + '</small>' +
        '<br>' + nome +
        '<br>' +
        muteBtn +
        '</span>' +
        '</div>' + modallo);
}

const getPokemonSpriteUrl = (isShiny, gender, pokeNumber) => {

    let formType = isShiny ? 'r' : 'n';
    let threeZeroCode = (pokeNumber==774) ? '007' : '000';

    let spriteUrl = `https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_${padPokemonNumber(pokeNumber, 4)}_${threeZeroCode}_${gender}_n_00000000_f_${formType}.png`;

    return spriteUrl;
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