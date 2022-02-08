
function startAll(){
// $('#nat-btn').on('click', function() {
//     document.getElementById("nationalPokedex").classList.toggle('show');

// }) ;

/// e n d   b u t t o n s

    ///   N A T I O N A L    P O K E D E X

      
pokedex_url ="https://pokeapi.co/api/v2/pokemon?limit=899";

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

        for (var i = 1; i < pkmnList.length; i++) {
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
        // noShinySpan = '.png" alt="sprite"></span><br><span class="text-muted"><p class="f-orms mt-2">'          
         
         nome = '<a class="f-name" href="">' + pkmn + '</a>';
         console.log(nome);
        //  nome='<a class="f-name" href="">'+ myArray[i]+'</a>';
          
            if (i==3) { 
                gender= "md";
                forms= "male";
                // schedaLink ='scheda.html" target="_blank';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0003_000_md_n_00000000_f_n'+img_s +'0003_000_md_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0003_000_fd_n_00000000_f_n'+img_s +'0003_000_fd_n_00000000_f_r'+spans+fem+cardcl+div_+modalcol+cardop+'0003_001_mf_n_00000000_f_n'+img_s+'0003_001_mf_n_00000000_f_r'+spans+mega+cardcl+div_+modalcol+cardop+'0003_000_mf_g_00000000_f_n'+img_s+'0003_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==6) {
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcol+cardop+'0006_000_mf_n_00000000_f_n'+img_s +'0006_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0006_001_mf_n_00000000_f_n'+img_s +'0006_001_mf_n_00000000_f_r'+spans+mx+cardcl+div_+modalcol+cardop+'0006_002_mf_n_00000000_f_n'+img_s+'0006_002_mf_n_00000000_f_r'+spans+my+cardcl+div_+modalcol+cardop+'0006_000_mf_g_00000000_f_n'+img_s+'0006_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
      
            } else if(i==9){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0009_000_mf_n_00000000_f_n'+img_s+'0009_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0009_001_mf_n_00000000_f_n'+img_s+'0009_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0009_000_mf_g_00000000_f_n'+img_s+'0009_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==12){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0012_000_md_n_00000000_f_n'+img_s +'0012_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0012_000_fd_n_00000000_f_n'+img_s +'0012_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0012_000_mf_g_00000000_f_n'+img_s+'0012_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==15){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0015_000_mf_n_00000000_f_n'+img_s +'0015_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0015_001_mf_n_00000000_f_n'+img_s +'0015_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==18){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0018_000_mf_n_00000000_f_n'+img_s +'0018_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0018_001_mf_n_00000000_f_n'+img_s +'0018_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==19){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0019_000_md_n_00000000_f_n'+img_s +'0019_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0019_000_fd_n_00000000_f_n'+img_s +'0019_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0019_001_mf_n_00000000_f_n'+img_s +'0019_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if (i==20){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0020_000_md_n_00000000_f_n'+img_s +'0020_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0020_000_fd_n_00000000_f_n'+img_s +'0020_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0020_001_mf_n_00000000_f_n'+img_s +'0020_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';

            } else if(i==25){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0025_000_md_n_00000000_f_n'+img_s +'0025_000_md_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0025_000_fd_n_00000000_f_n'+img_s +'0025_000_fd_n_00000000_f_r'+spans+fem+cardcl+div_+modalcol+cardop+'0025_001_mo_n_00000000_f_n'+img_s +'0025_001_mo_n_00000000_f_r'+spans+'Original cap'+cardcl+div_+modalcol+cardop+'0025_002_mo_n_00000000_f_n'+img_s +'0025_002_mo_n_00000000_f_r'+spans+'Hoenn cap'+cardcl+div_+modalcol+cardop+'0025_003_mo_n_00000000_f_n'+img_s +'0025_003_mo_n_00000000_f_r'+spans+'Sinnoh cap'+cardcl+div_+modalcol+cardop+'0025_004_mo_n_00000000_f_n'+img_s +'0025_004_mo_n_00000000_f_r'+spans+'Unova cap'+cardcl+div_+modalcol+cardop+'0025_005_mo_n_00000000_f_n'+img_s +'0025_005_mo_n_00000000_f_r'+spans+'Kalos cap'+cardcl+div_+modalcol+cardop+'0025_006_mo_n_00000000_f_n'+img_s +'0025_006_mo_n_00000000_f_r'+spans+'Alola cap'+cardcl+div_+modalcol+cardop+'0025_007_mo_n_00000000_f_n'+img_s +'0025_007_mo_n_00000000_f_r'+spans+'Johto cap<br>Partner cap'+cardcl+div_+modalcol+cardop+'0025_009_mo_n_00000000_f_n'+img_s +'0025_009_mo_n_00000000_f_r'+spans+'World cap'+cardcl+div_+modalcol+cardop+'0025_000_mf_g_00000000_f_n'+img_s +'0025_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;

                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==26){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0026_000_md_n_00000000_f_n'+img_s +'0026_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0026_000_fd_n_00000000_f_n'+img_s +'0026_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0026_001_mf_n_00000000_f_n'+img_s +'0026_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==27){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0027_000_mf_n_00000000_f_n'+img_s +'0027_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0027_001_mf_n_00000000_f_n'+img_s +'0027_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==28){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0028_000_mf_n_00000000_f_n'+img_s +'0028_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0028_001_mf_n_00000000_f_n'+img_s +'0028_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==37){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0037_000_mf_n_00000000_f_n'+img_s +'0037_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0037_001_mf_n_00000000_f_n'+img_s +'0037_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                  
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==38){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0038_000_mf_n_00000000_f_n'+img_s +'0038_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0038_001_mf_n_00000000_f_n'+img_s +'0038_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==41){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0041_000_md_n_00000000_f_n'+img_s +'0041_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0041_000_fd_n_00000000_f_n'+img_s +'0041_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==42){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0042_000_md_n_00000000_f_n'+img_s +'0042_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0042_000_fd_n_00000000_f_n'+img_s +'0042_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==44){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0044_000_md_n_00000000_f_n'+img_s +'0044_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0044_000_fd_n_00000000_f_n'+img_s +'0044_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==45){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0045_000_md_n_00000000_f_n'+img_s +'0045_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0045_000_fd_n_00000000_f_n'+img_s +'0045_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==50){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0050_000_mf_n_00000000_f_n'+img_s +'0050_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0050_001_mf_n_00000000_f_n'+img_s +'0050_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==51){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0051_000_mf_n_00000000_f_n'+img_s +'0051_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0051_001_mf_n_00000000_f_n'+img_s +'0051_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==52){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0052_000_mf_n_00000000_f_n'+img_s +'0052_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0052_001_mf_n_00000000_f_n'+img_s +'0052_001_mf_n_00000000_f_r'+spans+alola+cardcl+div_+modalcol+cardop+'0052_002_mf_n_00000000_f_n'+img_s +'0052_002_mf_n_00000000_f_r'+spans+galar+cardcl+div_+modalcol+cardop+'0052_000_mf_g_00000000_f_n'+img_s +'0052_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==53){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0053_000_mf_n_00000000_f_n'+img_s +'0053_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0053_001_mf_n_00000000_f_n'+img_s +'0053_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==64){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0064_000_md_n_00000000_f_n'+img_s +'0064_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0064_000_fd_n_00000000_f_n'+img_s +'0064_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==65){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0065_000_md_n_00000000_f_n'+img_s +'0065_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0065_000_fd_n_00000000_f_n'+img_s +'0065_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0065_001_mf_n_00000000_f_n'+img_s +'0065_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==68){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0068_000_mf_n_00000000_f_n'+img_s +'0068_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0068_000_mf_g_00000000_f_n'+img_s +'0068_000_mf_g_00000000_f_r'+spans+giga+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==74){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0074_000_mf_n_00000000_f_n'+img_s +'0074_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0074_001_mf_n_00000000_f_n'+img_s +'0074_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==75){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0075_000_mf_n_00000000_f_n'+img_s +'0075_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0075_001_mf_n_00000000_f_n'+img_s +'0075_001_mf_n_00000000_f_r'+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==76){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0076_000_mf_n_00000000_f_n'+img_s +'0076_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0076_001_mf_n_00000000_f_n'+img_s +'0076_001_mf_n_00000000_f_r'+spans+alola+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==77){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0077_000_mf_n_00000000_f_n'+img_s +'0077_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0077_001_mf_n_00000000_f_n'+img_s +'0077_001_mf_n_00000000_f_r'+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==78){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0078_000_mf_n_00000000_f_n'+img_s +'0078_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0078_001_mf_n_00000000_f_n'+img_s +'0078_001_mf_n_00000000_f_r'+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==79){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0079_000_mf_n_00000000_f_n'+img_s +'0079_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0079_001_mf_n_00000000_f_n'+img_s +'0079_001_mf_n_00000000_f_r'+spans+galar+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==80){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0080_000_mf_n_00000000_f_n'+img_s +'0080_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0080_001_mf_n_00000000_f_n'+img_s +'0080_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0080_002_mf_n_00000000_f_n'+img_s +'0080_002_mf_n_00000000_f_r'+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==83){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0083_000_mf_n_00000000_f_n'+img_s +'0083_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0083_001_mf_n_00000000_f_n'+img_s +'0083_001_mf_n_00000000_f_r'+spans+galar+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==84){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0084_000_md_n_00000000_f_n'+img_s +'0084_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0084_000_fd_n_00000000_f_n'+img_s +'0084_000_fd_n_00000000_f_r'+spans+fem+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==85){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0085_000_md_n_00000000_f_n'+img_s +'0085_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0085_000_fd_n_00000000_f_n'+img_s +'0085_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==88){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0088_000_mf_n_00000000_f_n'+img_s +'0088_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0088_001_mf_n_00000000_f_n'+img_s +'0088_001_mf_n_00000000_f_r'+spans+alola+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==89){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0089_000_mf_n_00000000_f_n'+img_s +'0089_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0089_001_mf_n_00000000_f_n'+img_s +'0089_001_mf_n_00000000_f_r'+spans+alola+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==94){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0094_000_mf_n_00000000_f_n'+img_s +'0094_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0094_001_mf_n_00000000_f_n'+img_s +'0094_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0094_000_mf_g_00000000_f_n'+img_s +'0094_000_mf_g_00000000_f_r'+spans+giga+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==97) {
                    gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0097_000_md_n_00000000_f_n'+img_s +'0097_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0097_000_fd_n_00000000_f_n'+img_s +'0097_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
                } else if(i==29){
                    gender= "fo";
                    nome='<a class="f-name" href="">'+'Nidoran♀'+'</a>';
                } else if (i==30 || i==31) {
                    gender= "fo";
                }else if (i==32){
                    gender= "mo";
                    nome='<a class="f-name" href="">'+'Nidoran♂'+'</a>';
                } else if (i==33 || i==34) {
                    gender= "mo";
                } else if (i==81|| i==82) {
                    gender= "uk";
                } else if (i==99) {
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0099_000_mf_n_00000000_f_n'+img_s +'0099_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0099_000_mf_g_00000000_f_n'+img_s +'0099_000_mf_g_00000000_f_r'+spans+giga+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                   
            } else if (i==103){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0103_000_mf_n_00000000_f_n'+img_s +'0103_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0103_001_mf_n_00000000_f_n'+img_s +'0103_001_mf_n_00000000_f_r'+spans+alola+cardcl;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==105){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0105_000_mf_n_00000000_f_n'+img_s +'0105_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0105_001_mf_n_00000000_f_n'+img_s +'0105_001_mf_n_00000000_f_r'+spans+alola+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==110){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0110_000_mf_n_00000000_f_n'+img_s +'0110_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0110_001_mf_n_00000000_f_n'+img_s +'0110_001_mf_n_00000000_f_r'+spans+galar+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==111){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0111_000_md_n_00000000_f_n'+img_s +'0111_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0111_000_fd_n_00000000_f_n'+img_s +'0111_000_fd_n_00000000_f_r'+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==112){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0112_000_md_n_00000000_f_n'+img_s +'0112_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0112_000_fd_n_00000000_f_n'+img_s +'0112_000_fd_n_00000000_f_r'+spans+fem+cardcl;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==115){
                gender= "fo";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0115_000_fo_n_00000000_f_n'+img_s +'0115_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0115_001_fo_n_00000000_f_n'+img_s +'0115_001_fo_n_00000000_f_r'+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==118){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0118_000_md_n_00000000_f_n'+img_s +'0118_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0118_000_fd_n_00000000_f_n'+img_s +'0118_000_fd_n_00000000_f_r'+spans+fem+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==119){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0119_000_md_n_00000000_f_n'+img_s +'0119_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0119_000_fd_n_00000000_f_n'+img_s +'0119_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==122){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0122_000_mf_n_00000000_f_n'+img_s +'0122_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0122_001_mf_n_00000000_f_n'+img_s +'0122_001_mf_n_00000000_f_r'+spans+galar+cardcl;
            
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==123){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0123_000_md_n_00000000_f_n'+img_s +'0123_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0123_000_fd_n_00000000_f_n'+img_s +'0123_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==127){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0127_000_mf_n_00000000_f_n'+img_s +'0127_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0127_001_mf_n_00000000_f_n'+img_s +'0127_001_mf_n_00000000_f_r'+spans+mega+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==129){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0129_000_md_n_00000000_f_n'+img_s +'0129_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0129_000_fd_n_00000000_f_n'+img_s +'0129_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==130){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0130_000_md_n_00000000_f_n'+img_s +'0130_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0130_000_fd_n_00000000_f_n'+img_s +'0130_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0130_001_mf_n_00000000_f_n'+img_s +'0130_001_mf_n_00000000_f_r'+spans+mega+cardcl;
         
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==131) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0131_000_mf_n_00000000_f_n'+img_s +'0131_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0131_000_mf_g_00000000_f_n'+img_s +'0131_000_mf_g_00000000_f_r'+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==133){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0133_000_md_n_00000000_f_n'+img_s +'0133_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0133_000_fd_n_00000000_f_n'+img_s +'0133_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0133_000_mf_g_00000000_f_n'+img_s +'0133_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==142){
                gender= "mf";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0142_000_mf_n_00000000_f_n'+img_s +'0142_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0142_001_mf_n_00000000_f_n'+img_s +'0142_001_mf_n_00000000_f_r'+spans+mega+cardcl;
       
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==143) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0143_000_mf_n_00000000_f_n'+img_s +'0143_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0143_000_mf_g_00000000_f_n'+img_s +'0143_000_mf_g_00000000_f_r'+spans+giga+cardcl;
        
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
               
            } else if (i==144){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0144_000_uk_n_00000000_f_n'+img_s +'0144_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0144_001_uk_n_00000000_f_n'+img_s +'0144_001_uk_n_00000000_f_r'+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==145){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0145_000_uk_n_00000000_f_n'+img_s +'0145_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0145_001_uk_n_00000000_f_n'+img_s +'0145_001_uk_n_00000000_f_r'+spans+galar+cardcl;
    
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==146){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0146_000_uk_n_00000000_f_n'+img_s +'0146_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0146_001_uk_n_00000000_f_n'+img_s +'0146_001_uk_n_00000000_f_r'+spans+galar+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==150) {
                gender= "uk";
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0150_000_uk_n_00000000_f_n'+img_s +'0150_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0150_001_uk_n_00000000_f_n'+img_s +'0150_001_uk_n_00000000_f_r'+spans+mx+cardcl+cardop+'0150_002_uk_n_00000000_f_n'+img_s+'0150_002_uk_n_00000000_f_r'+spans+my+cardcl;
     
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                  
            } else if (i==154){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0154_000_md_n_00000000_f_n'+img_s +'0154_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0154_000_fd_n_00000000_f_n'+img_s +'0154_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==165){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0165_000_md_n_00000000_f_n'+img_s +'0165_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0165_000_fd_n_00000000_f_n'+img_s +'0165_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==166){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0166_000_md_n_00000000_f_n'+img_s +'0166_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0166_000_fd_n_00000000_f_n'+img_s +'0166_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==178){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0178_000_md_n_00000000_f_n'+img_s +'0178_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0178_000_fd_n_00000000_f_n'+img_s +'0178_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==181){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0181_000_mf_n_00000000_f_n'+img_s +'0181_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0181_001_mf_n_00000000_f_n'+img_s +'0181_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==185){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0185_000_md_n_00000000_f_n'+img_s +'0185_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0185_000_fd_n_00000000_f_n'+img_s +'0185_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==186){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0186_000_md_n_00000000_f_n'+img_s +'0186_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0186_000_fd_n_00000000_f_n'+img_s +'0186_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==190){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0190_000_md_n_00000000_f_n'+img_s +'0190_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0190_000_fd_n_00000000_f_n'+img_s +'0190_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==194){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0194_000_md_n_00000000_f_n'+img_s +'0194_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0194_000_fd_n_00000000_f_n'+img_s +'0194_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==195){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0195_000_md_n_00000000_f_n'+img_s +'0195_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0195_000_md_n_00000000_b_n'+img_s +'0195_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0195_000_fd_n_00000000_b_n'+img_s +'0195_000_fd_n_00000000_b_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==198){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0198_000_md_n_00000000_f_n'+img_s +'0198_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0198_000_fd_n_00000000_f_n'+img_s +'0198_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==199){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0199_000_mf_n_00000000_f_n'+img_s +'0199_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0199_001_mf_n_00000000_f_n'+img_s +'0199_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==201){
                gender= "uk";
                forms= "A";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+'0201_000_uk_n_00000000_f_n'+img_s +'0201_000_uk_n_00000000_f_r'+spans+'A'+cardcl+div_+modalcolxl+cardop+'0201_001_uk_n_00000000_f_n'+img_s +'0201_001_uk_n_00000000_f_r'+spans+'B'+cardcl+div_+modalcolxl+cardop+'0201_002_uk_n_00000000_f_n'+img_s +'0201_002_uk_n_00000000_f_r'+spans+'C'+cardcl+div_+modalcolxl+cardop+'0201_003_uk_n_00000000_f_n'+img_s +'0201_003_uk_n_00000000_f_r'+spans+'D'+cardcl+div_+modalcolxl+cardop+'0201_004_uk_n_00000000_f_n'+img_s +'0201_004_uk_n_00000000_f_r'+spans+'E'+cardcl+div_+modalcolxl+cardop+'0201_005_uk_n_00000000_f_n'+img_s +'0201_005_uk_n_00000000_f_r'+spans+'F'+cardcl+div_+modalcolxl+cardop+'0201_006_uk_n_00000000_f_n'+img_s +'0201_006_uk_n_00000000_f_r'+spans+'G'+cardcl+div_+modalcolxl+cardop+'0201_007_uk_n_00000000_f_n'+img_s +'0201_007_uk_n_00000000_f_r'+spans+'H'+cardcl+div_+modalcolxl+cardop+'0201_008_uk_n_00000000_f_n'+img_s +'0201_008_uk_n_00000000_f_r'+spans+'I'+cardcl+div_+modalcolxl+cardop+'0201_009_uk_n_00000000_f_n'+img_s +'0201_009_uk_n_00000000_f_r'+spans+'J'+cardcl+div_+modalcolxl+cardop+'0201_010_uk_n_00000000_f_n'+img_s +'0201_010_uk_n_00000000_f_r'+spans+'K'+cardcl+div_+modalcolxl+cardop+'0201_011_uk_n_00000000_f_n'+img_s +'0201_011_uk_n_00000000_f_r'+spans+'L'+cardcl+div_+modalcolxl+cardop+'0201_012_uk_n_00000000_f_n'+img_s +'0201_012_uk_n_00000000_f_r'+spans+'M'+cardcl+div_+modalcolxl+cardop+'0201_013_uk_n_00000000_f_n'+img_s +'0201_013_uk_n_00000000_f_r'+spans+'N'+cardcl+div_+modalcolxl+cardop+'0201_014_uk_n_00000000_f_n'+img_s +'0201_014_uk_n_00000000_f_r'+spans+'O'+cardcl+div_+modalcolxl+cardop+'0201_015_uk_n_00000000_f_n'+img_s +'0201_015_uk_n_00000000_f_r'+spans+'P'+cardcl+div_+modalcolxl+cardop+'0201_016_uk_n_00000000_f_n'+img_s +'0201_016_uk_n_00000000_f_r'+spans+'Q'+cardcl+div_+modalcolxl+cardop+'0201_017_uk_n_00000000_f_n'+img_s +'0201_017_uk_n_00000000_f_r'+spans+'R'+cardcl+div_+modalcolxl+cardop+'0201_018_uk_n_00000000_f_n'+img_s +'0201_018_uk_n_00000000_f_r'+spans+'S'+cardcl+div_+modalcolxl+cardop+'0201_019_uk_n_00000000_f_n'+img_s +'0201_019_uk_n_00000000_f_r'+spans+'T'+cardcl+div_+modalcolxl+cardop+'0201_020_uk_n_00000000_f_n'+img_s +'0201_020_uk_n_00000000_f_r'+spans+'U'+cardcl+div_+modalcolxl+cardop+'0201_021_uk_n_00000000_f_n'+img_s +'0201_021_uk_n_00000000_f_r'+spans+'V'+cardcl+div_+modalcolxl+cardop+'0201_022_uk_n_00000000_f_n'+img_s +'0201_022_uk_n_00000000_f_r'+spans+'W'+cardcl+div_+modalcolxl+cardop+'0201_023_uk_n_00000000_f_n'+img_s +'0201_023_uk_n_00000000_f_r'+spans+'X'+cardcl+div_+modalcolxl+cardop+'0201_024_uk_n_00000000_f_n'+img_s +'0201_024_uk_n_00000000_f_r'+spans+'Y'+cardcl+div_+modalcolxl+cardop+'0201_025_uk_n_00000000_f_n'+img_s +'0201_025_uk_n_00000000_f_r'+spans+'Z'+cardcl+div_+modalcolxl+cardop+'0201_026_uk_n_00000000_f_n'+img_s +'0201_026_uk_n_00000000_f_r'+spans+'!'+cardcl+div_+modalcolxl+cardop+'0201_027_uk_n_00000000_f_n'+img_s +'0201_027_uk_n_00000000_f_r'+spans+'?'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==202){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0202_000_md_n_00000000_f_n'+img_s +'0202_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0202_000_fd_n_00000000_f_n'+img_s +'0202_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==203){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0203_000_md_n_00000000_f_n'+img_s +'0203_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0203_000_fd_n_00000000_f_n'+img_s +'0203_000_fd_n_00000000_f_r'+spans+fem+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==207){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0207_000_md_n_00000000_f_n'+img_s +'0207_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0207_000_fd_n_00000000_f_n'+img_s +'0207_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==208){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0208_000_md_n_00000000_f_n'+img_s +'0208_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0208_000_fd_n_00000000_f_n'+img_s +'0208_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0208_001_mf_n_00000000_f_n'+img_s +'0208_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==212){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0212_000_md_n_00000000_f_n'+img_s +'0212_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0212_000_fd_n_00000000_f_n'+img_s +'0212_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0212_001_mf_n_00000000_f_n'+img_s +'0212_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==214){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0214_000_md_n_00000000_f_n'+img_s +'0214_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0214_000_fd_n_00000000_f_n'+img_s +'0214_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0214_001_mf_n_00000000_f_n'+img_s +'0214_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==215){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0215_000_md_n_00000000_f_n'+img_s +'0215_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0215_000_fd_n_00000000_f_n'+img_s +'0215_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==217){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0217_000_md_n_00000000_f_n'+img_s +'0217_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0217_000_fd_n_00000000_f_n'+img_s +'0217_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==221){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0221_000_md_n_00000000_f_n'+img_s +'0221_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0221_000_fd_n_00000000_f_n'+img_s +'0221_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==222){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0222_000_mf_n_00000000_f_n'+img_s +'0222_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0222_001_mf_n_00000000_f_n'+img_s +'0222_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==224){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0224_000_md_n_00000000_f_n'+img_s +'0224_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0224_000_fd_n_00000000_f_n'+img_s +'0224_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==229){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0229_000_md_n_00000000_f_n'+img_s +'0229_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0229_000_fd_n_00000000_f_n'+img_s +'0229_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0229_001_mf_n_00000000_f_n'+img_s +'0229_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                    modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                    muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==232){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0232_000_md_n_00000000_f_n'+img_s +'0232_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0232_000_fd_n_00000000_f_n'+img_s +'0232_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==248){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0248_000_mf_n_00000000_f_n'+img_s +'0248_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0248_001_mf_n_00000000_f_n'+img_s +'0248_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==254){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0254_000_mf_n_00000000_f_n'+img_s +'0254_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0254_001_mf_n_00000000_f_n'+img_s +'0254_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==255) {
                gender= "fd";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0255_000_fd_n_00000000_f_n'+img_s +'0255_000_fd_n_00000000_f_r'+spans+forms+cardcl+cardop+'0255_000_md_n_00000000_b_n'+img_s +'0255_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0255_000_fd_n_00000000_b_n'+img_s +'0255_000_fd_n_00000000_b_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==256){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0256_000_md_n_00000000_f_n'+img_s +'0256_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0256_000_fd_n_00000000_f_n'+img_s +'0256_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==257){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0257_000_md_n_00000000_f_n'+img_s +'0257_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0257_000_fd_n_00000000_f_n'+img_s +'0257_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0257_001_mf_n_00000000_f_n'+img_s +'0257_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==260){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0260_000_mf_n_00000000_f_n'+img_s +'0260_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0260_001_mf_n_00000000_f_n'+img_s +'0260_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==263){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0263_000_mf_n_00000000_f_n'+img_s +'0263_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0263_001_mf_n_00000000_f_n'+img_s +'0263_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==264){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0264_000_mf_n_00000000_f_n'+img_s +'0264_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0264_001_mf_n_00000000_f_n'+img_s +'0264_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==267){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0267_000_md_n_00000000_f_n'+img_s +'0267_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0267_000_fd_n_00000000_f_n'+img_s +'0267_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==269){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0269_000_md_n_00000000_f_n'+img_s +'0269_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0269_000_fd_n_00000000_f_n'+img_s +'0269_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==272){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0272_000_md_n_00000000_f_n'+img_s +'0272_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0272_000_fd_n_00000000_f_n'+img_s +'0272_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==274){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0274_000_md_n_00000000_f_n'+img_s +'0274_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0274_000_fd_n_00000000_f_n'+img_s +'0274_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==275){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0275_000_md_n_00000000_f_n'+img_s +'0275_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0275_000_fd_n_00000000_f_n'+img_s +'0275_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==282){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0282_000_mf_n_00000000_f_n'+img_s +'0282_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0282_001_mf_n_00000000_f_n'+img_s +'0282_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==302){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0302_000_mf_n_00000000_f_n'+img_s +'0302_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0302_001_mf_n_00000000_f_n'+img_s +'0302_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==303){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0303_000_mf_n_00000000_f_n'+img_s +'0303_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0303_001_mf_n_00000000_f_n'+img_s +'0303_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==306){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0306_000_mf_n_00000000_f_n'+img_s +'0306_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0306_001_mf_n_00000000_f_n'+img_s +'0306_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==307){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0307_000_md_n_00000000_f_n'+img_s +'0307_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0307_000_fd_n_00000000_f_n'+img_s +'0307_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==308){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0308_000_md_n_00000000_f_n'+img_s +'0308_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0308_000_fd_n_00000000_f_n'+img_s +'0308_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0308_001_mf_n_00000000_f_n'+img_s +'0308_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==310){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0310_000_mf_n_00000000_f_n'+img_s +'0310_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0310_001_mf_n_00000000_f_n'+img_s +'0310_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==315){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0315_000_md_n_00000000_f_n'+img_s +'0315_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0315_000_fd_n_00000000_f_n'+img_s +'0315_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==316){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0316_000_md_n_00000000_f_n'+img_s +'0316_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0316_000_fd_n_00000000_f_n'+img_s +'0316_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==317){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0317_000_md_n_00000000_f_n'+img_s +'0317_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0317_000_fd_n_00000000_f_n'+img_s +'0317_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==319){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0319_000_mf_n_00000000_f_n'+img_s +'0319_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0319_001_mf_n_00000000_f_n'+img_s +'0319_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==322){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0322_000_md_n_00000000_f_n'+img_s +'0322_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0322_000_fd_n_00000000_f_n'+img_s +'0322_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==323){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0323_000_md_n_00000000_f_n'+img_s +'0323_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0323_000_fd_n_00000000_f_n'+img_s +'0323_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0323_001_mf_n_00000000_f_n'+img_s +'0323_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==332){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0332_000_md_n_00000000_f_n'+img_s +'0332_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0332_000_fd_n_00000000_f_n'+img_s +'0332_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==334){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0334_000_mf_n_00000000_f_n'+img_s +'0334_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0334_001_mf_n_00000000_f_n'+img_s +'0334_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==350){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0350_000_md_n_00000000_f_n'+img_s +'0350_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0350_000_fd_n_00000000_f_n'+img_s +'0350_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==351){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0351_000_mf_n_00000000_f_n'+img_s +'0351_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0351_001_mf_n_00000000_f_n'+img_s +'0351_001_mf_n_00000000_f_r'+spans+'sunny form'+cardcl+div_+modalcol+cardop+'0351_002_mf_n_00000000_f_n'+img_s +'0351_002_mf_n_00000000_f_r'+spans+'rainy form'+cardcl+div_+modalcol+cardop+'0351_003_mf_n_00000000_f_n'+img_s +'0351_003_mf_n_00000000_f_r'+spans+'snowy form'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==354){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0354_000_mf_n_00000000_f_n'+img_s +'0354_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0354_001_mf_n_00000000_f_n'+img_s +'0354_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==359){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0359_000_mf_n_00000000_f_n'+img_s +'0359_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0359_001_mf_n_00000000_f_n'+img_s +'0359_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==362){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0362_000_mf_n_00000000_f_n'+img_s +'0362_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0362_001_mf_n_00000000_f_n'+img_s +'0362_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==369){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0369_000_md_n_00000000_f_n'+img_s +'0369_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0369_000_fd_n_00000000_f_n'+img_s +'0369_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==373){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0373_000_mf_n_00000000_f_n'+img_s +'0373_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0373_001_mf_n_00000000_f_n'+img_s +'0373_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==376){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0376_000_uk_n_00000000_f_n'+img_s +'0376_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0376_001_uk_n_00000000_f_n'+img_s +'0376_001_uk_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==380){
                gender= "fo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0380_000_fo_n_00000000_f_n'+img_s +'0380_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0380_001_fo_n_00000000_f_n'+img_s +'0380_001_fo_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==381){
                gender= "mo";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0381_000_mo_n_00000000_f_n'+img_s +'0381_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0381_001_mo_n_00000000_f_n'+img_s +'0381_001_mo_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==382){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0382_000_uk_n_00000000_f_n'+img_s +'0382_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0382_001_uk_n_00000000_f_n'+img_s +'0382_001_uk_n_00000000_f_r'+spans+'Primal Kyogre'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==383){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0383_000_uk_n_00000000_f_n'+img_s +'0383_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0383_001_uk_n_00000000_f_n'+img_s +'0383_001_uk_n_00000000_f_r'+spans+'Primal Groudon'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==384){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0384_000_uk_n_00000000_f_n'+img_s +'0384_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0384_001_uk_n_00000000_f_n'+img_s +'0384_001_uk_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==386){
                gender= "uk";
                forms= "standard";
                nome='<a class="f-name" href="">'+'Deoxys'+'</a>';
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0386_000_uk_n_00000000_f_n'+img_s +'0386_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0386_001_uk_n_00000000_f_n'+img_s +'0386_001_uk_n_00000000_f_r'+spans+'attack forme'+cardcl+div_+modalcol+cardop+'0386_002_uk_n_00000000_f_n'+img_s +'0386_002_uk_n_00000000_f_r'+spans+'defense forme'+cardcl+div_+modalcol+cardop+'0386_003_uk_n_00000000_f_n'+img_s +'0386_003_uk_n_00000000_f_r'+spans+'speed forme'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Deoxys forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==396){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0396_000_md_n_00000000_f_n'+img_s +'0396_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0396_000_fd_n_00000000_f_n'+img_s +'0396_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==397){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0397_000_md_n_00000000_f_n'+img_s +'0397_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0397_000_fd_n_00000000_f_n'+img_s +'0397_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==398){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0398_000_md_n_00000000_f_n'+img_s +'0398_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0398_000_fd_n_00000000_f_n'+img_s +'0398_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==399){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0399_000_md_n_00000000_f_n'+img_s +'0399_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0399_000_fd_n_00000000_f_n'+img_s +'0399_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==400){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0400_000_md_n_00000000_f_n'+img_s +'0400_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0400_000_fd_n_00000000_f_n'+img_s +'0400_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==401){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0401_000_md_n_00000000_f_n'+img_s +'0401_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0401_000_fd_n_00000000_f_n'+img_s +'0401_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==402){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0402_000_md_n_00000000_f_n'+img_s +'0402_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0402_000_fd_n_00000000_f_n'+img_s +'0402_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==403){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0403_000_md_n_00000000_f_n'+img_s +'0403_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0403_000_fd_n_00000000_f_n'+img_s +'0403_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==404){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0404_000_md_n_00000000_f_n'+img_s +'0404_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0404_000_fd_n_00000000_f_n'+img_s +'0404_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==405){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0405_000_md_n_00000000_f_n'+img_s +'0405_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0405_000_fd_n_00000000_f_n'+img_s +'0405_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==407){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0407_000_md_n_00000000_f_n'+img_s +'0407_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0407_000_fd_n_00000000_f_n'+img_s +'0407_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==412){
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0412_000_mf_n_00000000_f_n'+img_s +'0412_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0412_001_mf_n_00000000_f_n'+img_s +'0412_001_mf_n_00000000_f_r'+spans+'sandy cloak'+cardcl+cardop+'0412_002_mf_n_00000000_f_n'+img_s +'0412_002_mf_n_00000000_f_r'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==413){
                nome='<a class="f-name" href="">'+'Wormadam'+'</a>';
                gender= "fo";
                forms= "plant cloak";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0413_000_fo_n_00000000_f_n'+img_s +'0413_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0413_001_fo_n_00000000_f_n'+img_s +'0413_001_fo_n_00000000_f_r'+spans+'sandy cloak'+cardcl+cardop+'0413_002_fo_n_00000000_f_n'+img_s +'0413_002_fo_n_00000000_f_r'+spans+'trash cloak'+cardcl;
      
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wormadam forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==415){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0415_000_md_n_00000000_f_n'+img_s +'0415_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0415_000_fd_n_00000000_f_n'+img_s +'0415_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==417){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0417_000_md_n_00000000_f_n'+img_s +'0417_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0417_000_fd_n_00000000_f_n'+img_s +'0417_000_fd_n_00000000_f_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==418){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0418_000_md_n_00000000_f_n'+img_s +'0418_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0418_000_md_n_00000000_b_n'+img_s +'0418_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0418_000_fd_n_00000000_b_n'+img_s +'0418_000_fd_n_00000000_b_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if(i==419){
                gender= "md";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0419_000_md_n_00000000_f_n'+img_s +'0419_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0419_000_md_n_00000000_b_n'+img_s +'0419_000_md_n_00000000_b_r'+spans+male+cardcl+cardop+'0419_000_fd_n_00000000_b_n'+img_s +'0419_000_fd_n_00000000_b_r'+spans+fem+cardcl;
             
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==421){
                forms= "overcast form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0421_000_mf_n_00000000_f_n'+img_s +'0421_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0421_001_mf_n_00000000_f_n'+img_s +'0421_001_mf_n_00000000_f_r'+spans+'sunshine form'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==422){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0422_000_mf_n_00000000_f_n'+img_s +'0422_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0422_001_mf_n_00000000_f_n'+img_s +'0422_001_mf_n_00000000_f_r'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==423){
                forms= "West Sea";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0423_000_mf_n_00000000_f_n'+img_s +'0423_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0423_001_mf_n_00000000_f_n'+img_s +'0423_001_mf_n_00000000_f_r'+spans+'East Sea'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==424){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0424_000_md_n_00000000_f_n'+img_s +'0424_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0424_000_fd_n_00000000_f_n'+img_s +'0424_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==428){
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0428_000_mf_n_00000000_f_n'+img_s +'0428_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0428_001_mf_n_00000000_f_n'+img_s +'0428_001_mf_n_00000000_f_r'+spans+mega+cardcl;
              
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==443){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0443_000_md_n_00000000_f_n'+img_s +'0443_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0443_000_fd_n_00000000_f_n'+img_s +'0443_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==444){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0444_000_md_n_00000000_f_n'+img_s +'0444_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0444_000_fd_n_00000000_f_n'+img_s +'0444_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==445){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0445_000_md_n_00000000_f_n'+img_s +'0445_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0445_000_fd_n_00000000_f_n'+img_s +'0445_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0445_001_mf_n_00000000_f_n'+img_s +'0445_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==448){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0448_000_mf_n_00000000_f_n'+img_s +'0448_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0448_001_mf_n_00000000_f_n'+img_s +'0448_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==449){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0449_000_md_n_00000000_f_n'+img_s +'0449_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0449_000_fd_n_00000000_f_n'+img_s +'0449_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==450){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0450_000_md_n_00000000_f_n'+img_s +'0450_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0450_000_fd_n_00000000_f_n'+img_s +'0450_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==453){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0453_000_md_n_00000000_f_n'+img_s +'0453_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0453_000_fd_n_00000000_f_n'+img_s +'0453_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==454){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0454_000_md_n_00000000_f_n'+img_s +'0454_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0454_000_fd_n_00000000_f_n'+img_s +'0454_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==456){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0456_000_md_n_00000000_f_n'+img_s +'0456_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0456_000_fd_n_00000000_f_n'+img_s +'0456_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==457){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0457_000_md_n_00000000_f_n'+img_s +'0457_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0457_000_fd_n_00000000_f_n'+img_s +'0457_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==459){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= cardop+'0459_000_md_n_00000000_f_n'+img_s +'0459_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0459_000_fd_n_00000000_f_n'+img_s +'0459_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } 
            else if (i==460){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0460_000_md_n_00000000_f_n'+img_s +'0460_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0460_000_fd_n_00000000_f_n'+img_s +'0460_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0460_001_mf_n_00000000_f_n'+img_s +'0460_001_mf_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            }
             else if (i==461){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0461_000_md_n_00000000_f_n'+img_s +'0461_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0461_000_fd_n_00000000_f_n'+img_s +'0461_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==464){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0464_000_md_n_00000000_f_n'+img_s +'0464_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0464_000_fd_n_00000000_f_n'+img_s +'0464_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==465){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0465_000_md_n_00000000_f_n'+img_s +'0465_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0465_000_fd_n_00000000_f_n'+img_s +'0465_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==473){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0473_000_md_n_00000000_f_n'+img_s +'0473_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0473_000_fd_n_00000000_f_n'+img_s +'0473_000_fd_n_00000000_f_r'+spans+fem+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==475){
                gender= "mo";
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0475_000_mo_n_00000000_f_n'+img_s +'0475_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0475_001_mo_n_00000000_f_n'+img_s +'0475_001_mo_n_00000000_f_r'+spans+mega+cardcl;
           
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==479){
                gender= "uk";
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=modalcol+cardop+'0479_000_uk_n_00000000_f_n'+img_s +'0479_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0479_001_uk_n_00000000_f_n'+img_s +'0479_001_uk_n_00000000_f_r'+spans+'heat Rotom'+cardcl+div_+modalcol+cardop+'0479_002_uk_n_00000000_f_n'+img_s +'0479_002_uk_n_00000000_f_r'+spans+'wash Rotom'+cardcl+div_+modalcol+cardop+'0479_003_uk_n_00000000_f_n'+img_s +'0479_003_uk_n_00000000_f_r'+spans+'frost Rotom'+cardcl+div_+modalcol+cardop+'0479_004_uk_n_00000000_f_n'+img_s +'0479_004_uk_n_00000000_f_r'+spans+'fan Rotom'+cardcl+div_+modalcol+cardop+'0479_005_uk_n_00000000_f_n'+img_s +'0479_005_uk_n_00000000_f_r'+spans+'mow Rotom'+cardcl+div_;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==487){
                gender= "uk";
                forms= "altered forme";
                nome='<a class="f-name" href="">'+'Giratina'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0487_000_uk_n_00000000_f_n'+img_s +'0487_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0487_001_uk_n_00000000_f_n'+img_s +'0487_001_uk_n_00000000_f_r'+spans+'origin forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Giratina forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if (i==492){
                gender= "uk";
                forms= "land forme";
                nome='<a class="f-name" href="">'+'Shaymin'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0492_000_uk_n_00000000_f_n'+img_s +'0492_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0492_001_uk_n_00000000_f_n'+img_s +'0492_001_uk_n_00000000_f_r'+spans+'sky forme'+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Shaymin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
            } else if(i==493){
                gender= "uk";
                forms= "normal type";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody= modalcolxl+cardop+'0493_000_uk_n_00000000_f_n'+img_s +'0493_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0493_001_uk_n_00000000_f_n'+img_s +'0493_001_uk_n_00000000_f_r'+spans+'fighting type'+cardcl+div_+modalcolxl+cardop+'0493_002_uk_n_00000000_f_n'+img_s +'0493_002_uk_n_00000000_f_r'+spans+'flying type'+cardcl+div_+modalcolxl+cardop+'0493_003_uk_n_00000000_f_n'+img_s +'0493_003_uk_n_00000000_f_r'+spans+'poison type'+cardcl+div_+modalcolxl+cardop+'0493_004_uk_n_00000000_f_n'+img_s +'0493_004_uk_n_00000000_f_r'+spans+'ground type'+cardcl+div_+modalcolxl+cardop+'0493_005_uk_n_00000000_f_n'+img_s +'0493_005_uk_n_00000000_f_r'+spans+'rock type'+cardcl+div_+modalcolxl+cardop+'0493_006_uk_n_00000000_f_n'+img_s +'0493_006_uk_n_00000000_f_r'+spans+'bug type'+cardcl+div_+modalcolxl+cardop+'0493_007_uk_n_00000000_f_n'+img_s +'0493_007_uk_n_00000000_f_r'+spans+'ghost type'+cardcl+div_+modalcolxl+cardop+'0493_008_uk_n_00000000_f_n'+img_s +'0493_008_uk_n_00000000_f_r'+spans+'steel type'+cardcl+div_+modalcolxl+cardop+'0493_009_uk_n_00000000_f_n'+img_s +'0493_009_uk_n_00000000_f_r'+spans+'fire type'+cardcl+div_+modalcolxl+cardop+'0493_010_uk_n_00000000_f_n'+img_s +'0493_010_uk_n_00000000_f_r'+spans+'water type'+cardcl+div_+modalcolxl+cardop+'0493_011_uk_n_00000000_f_n'+img_s +'0493_011_uk_n_00000000_f_r'+spans+'grass type'+cardcl+div_+modalcolxl+cardop+'0493_012_uk_n_00000000_f_n'+img_s +'0493_012_uk_n_00000000_f_r'+spans+'electric type'+cardcl+div_+modalcolxl+cardop+'0493_013_uk_n_00000000_f_n'+img_s +'0493_013_uk_n_00000000_f_r'+spans+'psychic type'+cardcl+div_+modalcolxl+cardop+'0493_014_uk_n_00000000_f_n'+img_s +'0493_014_uk_n_00000000_f_r'+spans+'ice type'+cardcl+div_+modalcolxl+cardop+'0493_015_uk_n_00000000_f_n'+img_s +'0493_015_uk_n_00000000_f_r'+spans+'dragon type'+cardcl+div_+modalcolxl+cardop+'0493_016_uk_n_00000000_f_n'+img_s +'0493_016_uk_n_00000000_f_r'+spans+'dark type'+cardcl+div_+modalcolxl+cardop+'0493_017_uk_n_00000000_f_n'+img_s +'0493_017_uk_n_00000000_f_r'+spans+'fairy type'+cardcl+div_;
 
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==521){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0521_000_md_n_00000000_f_n'+img_s +'0521_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0521_000_fd_n_00000000_f_n'+img_s +'0521_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==531){
                forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0531_000_mf_n_00000000_f_n'+img_s +'0531_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0531_001_mf_n_00000000_f_n'+img_s +'0531_001_mf_n_00000000_f_r'+spans+mega+cardcl;
               
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==550){
                forms= "red-striped";
                nome='<a class="f-name" href="">'+'Basculin'+'</a>';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0550_000_mf_n_00000000_f_n'+img_s +'0550_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0550_001_mf_n_00000000_f_n'+img_s +'0550_001_mf_n_00000000_f_r'+spans+'blue-striped'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Basculin forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==554){
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0554_000_mf_n_00000000_f_n'+img_s +'0554_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0554_001_mf_n_00000000_f_n'+img_s +'0554_001_mf_n_00000000_f_r'+spans+galar+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==555){
                forms= "standard";
                nome='<a class="f-name" href="">'+'Darmanitan'+'</a>'; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=modalcol+cardop+'0555_000_mf_n_00000000_f_n'+img_s +'0555_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0555_001_mf_n_00000000_f_n'+img_s +'0555_001_mf_n_00000000_f_r'+spans+'zen mode'+cardcl+div_+modalcol+cardop+'0555_002_mf_n_00000000_f_n'+img_s +'0555_002_mf_n_00000000_f_r'+spans+galar+cardcl+div_+modalcol+cardop+'0555_003_mf_n_00000000_f_n'+img_s +'0555_003_mf_n_00000000_f_r'+spans+galar+' zen mode'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Darmanitan forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
                
            } else if (i==562){
                
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                    modalbody=cardop+'0562_000_mf_n_00000000_f_n'+img_s +'0562_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0562_001_mf_n_00000000_f_n'+img_s +'0562_001_mf_n_00000000_f_r'+spans+galar+cardcl;
          
                modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            } else if (i==569){
                
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0569_000_mf_n_00000000_f_n'+img_s +'0569_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0569_000_mf_g_00000000_f_n'+img_s +'0569_000_mf_g_00000000_f_r'+spans+giga+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==585){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0585_000_mf_n_00000000_f_n'+img_s +'0585_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0585_001_mf_n_00000000_f_n'+img_s +'0585_001_mf_n_00000000_f_r'+spans+'summer form'+cardcl+div_+modalcol+cardop+'0585_002_mf_n_00000000_f_n'+img_s +'0585_002_mf_n_00000000_f_r'+spans+'autumn form'+cardcl+div_+modalcol+cardop+'0585_003_mf_n_00000000_f_n'+img_s +'0585_003_mf_n_00000000_f_r'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==586){
            forms= "spring form";
             
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0586_000_mf_n_00000000_f_n'+img_s +'0586_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0586_001_mf_n_00000000_f_n'+img_s +'0586_001_mf_n_00000000_f_r'+spans+'summer form'+cardcl+div_+modalcol+cardop+'0586_002_mf_n_00000000_f_n'+img_s +'0586_002_mf_n_00000000_f_r'+spans+'autumn form'+cardcl+div_+modalcol+cardop+'0586_003_mf_n_00000000_f_n'+img_s +'0586_003_mf_n_00000000_f_r'+spans+'winter form'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==592){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0592_000_md_n_00000000_f_n'+img_s +'0592_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0592_000_fd_n_00000000_f_n'+img_s +'0592_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==593){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0593_000_md_n_00000000_f_n'+img_s +'0593_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0593_000_fd_n_00000000_f_n'+img_s +'0593_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==618){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0618_000_mf_n_00000000_f_n'+img_s +'0618_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0618_001_mf_n_00000000_f_n'+img_s +'0618_001_mf_n_00000000_f_r'+spans+galar+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==641){
            gender= "mo";
                forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Tornadus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0641_000_mo_n_00000000_f_n'+img_s +'0641_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0641_001_mo_n_00000000_f_n'+img_s +'0641_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Tornadus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==642){
            gender= "mo";
            forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Thundurus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0642_000_mo_n_00000000_f_n'+img_s +'0642_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0642_001_mo_n_00000000_f_n'+img_s +'0642_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Thundurus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==645){
            gender= "mo";
            forms= "incarnate forme";
            nome='<a class="f-name" href="">'+'Landorus'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0645_000_mo_n_00000000_f_n'+img_s +'0645_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0645_001_mo_n_00000000_f_n'+img_s +'0645_001_mo_n_00000000_f_r'+spans+'therian forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Landorus forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==646){
            gender= "uk";
            forms= "standard"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0646_000_uk_n_00000000_f_n'+img_s +'0646_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0646_001_uk_n_00000000_f_n'+img_s +'0646_001_uk_n_00000000_f_r'+spans+'white Kyurem'+cardcl+cardop+'0646_002_uk_n_00000000_f_n'+img_s +'0646_002_uk_n_00000000_f_r'+spans+'black Kyurem'+cardcl;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==647){
            gender= "uk";
            forms= "ordinary form";
            nome='<a class="f-name" href="">'+'Keldeo'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0647_000_uk_n_00000000_f_n'+img_s +'0647_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0647_001_uk_n_00000000_f_n'+img_s +'0647_001_uk_n_00000000_f_r'+spans+'resolute form'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Keldeo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==648){
            gender= "uk";
            forms= "aria forme";
            nome='<a class="f-name" href="">'+'Meloetta'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0648_000_uk_n_00000000_f_n'+img_s +'0648_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0648_001_uk_n_00000000_f_n'+img_s +'0648_001_uk_n_00000000_f_r'+spans+'pirouette forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meloetta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==649){
            forms= "standard";
            gender= "uk"; 
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0649_000_uk_n_00000000_f_n'+img_s +'0649_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0649_001_uk_n_00000000_f_n'+img_s +'0649_001_uk_n_00000000_f_r'+spans+'douse drive'+cardcl+div_+modalcol+cardop+'0649_002_uk_n_00000000_f_n'+img_s +'0649_002_uk_n_00000000_f_r'+spans+'shock drive'+cardcl+div_+modalcol+cardop+'0649_003_uk_n_00000000_f_n'+img_s +'0649_003_uk_n_00000000_f_r'+spans+'burn drive'+cardcl+div_+modalcol+cardop+'0649_004_uk_n_00000000_f_n'+img_s +'0649_004_uk_n_00000000_f_r'+spans+'chill drive'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==658){
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0658_000_mf_n_00000000_f_n'+img_s +'0658_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0658_002_mo_n_00000000_f_n'+img_s +'0658_002_mo_n_00000000_f_r'+spans+'Ash-Greninja'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if(i==666){ 
            forms= "icy snow";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+'0666_000_mf_n_00000000_f_n'+img_s +'0666_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0666_001_mf_n_00000000_f_n'+img_s +'0666_001_mf_n_00000000_f_r'+spans+'polar'+cardcl+div_+modalcolxl+cardop+'0666_002_mf_n_00000000_f_n'+img_s +'0666_002_mf_n_00000000_f_r'+spans+'tundra'+cardcl+div_+modalcolxl+cardop+'0666_003_mf_n_00000000_f_n'+img_s +'0666_003_mf_n_00000000_f_r'+spans+'continental'+cardcl+div_+modalcolxl+cardop+'0666_004_mf_n_00000000_f_n'+img_s +'0666_004_mf_n_00000000_f_r'+spans+'garden'+cardcl+div_+modalcolxl+cardop+'0666_005_mf_n_00000000_f_n'+img_s +'0666_005_mf_n_00000000_f_r'+spans+'elegant'+cardcl+div_+modalcolxl+cardop+'0666_006_mf_n_00000000_f_n'+img_s +'0666_006_mf_n_00000000_f_r'+spans+'meadow'+cardcl+div_+modalcolxl+cardop+'0666_007_mf_n_00000000_f_n'+img_s +'0666_007_mf_n_00000000_f_r'+spans+'modern'+cardcl+div_+modalcolxl+cardop+'0666_008_mf_n_00000000_f_n'+img_s +'0666_008_mf_n_00000000_f_r'+spans+'marine'+cardcl+div_+modalcolxl+cardop+'0666_009_mf_n_00000000_f_n'+img_s +'0666_009_mf_n_00000000_f_r'+spans+'archipelago'+cardcl+div_+modalcolxl+cardop+'0666_010_mf_n_00000000_f_n'+img_s +'0666_010_mf_n_00000000_f_r'+spans+'high plains'+cardcl+div_+modalcolxl+cardop+'0666_011_mf_n_00000000_f_n'+img_s +'0666_011_mf_n_00000000_f_r'+spans+'sandstorm'+cardcl+div_+modalcolxl+cardop+'0666_012_mf_n_00000000_f_n'+img_s +'0666_012_mf_n_00000000_f_r'+spans+'river'+cardcl+div_+modalcolxl+cardop+'0666_013_mf_n_00000000_f_n'+img_s +'0666_013_mf_n_00000000_f_r'+spans+'monsoon'+cardcl+div_+modalcolxl+cardop+'0666_014_mf_n_00000000_f_n'+img_s +'0666_014_mf_n_00000000_f_r'+spans+'savanna'+cardcl+div_+modalcolxl+cardop+'0666_015_mf_n_00000000_f_n'+img_s +'0666_015_mf_n_00000000_f_r'+spans+'sun'+cardcl+div_+modalcolxl+cardop+'0666_016_mf_n_00000000_f_n'+img_s +'0666_016_mf_n_00000000_f_r'+spans+'ocean'+cardcl+div_+modalcolxl+cardop+'0666_017_mf_n_00000000_f_n'+img_s +'0666_017_mf_n_00000000_f_r'+spans+'jungle'+cardcl+div_+modalcolxl+cardop+'0666_018_mf_n_00000000_f_n'+img_s +'0666_018_mf_n_00000000_f_r'+spans+'fancy'+cardcl+div_+modalcolxl+cardop+'0666_019_mf_n_00000000_f_n'+img_s +'0666_019_mf_n_00000000_f_r'+spans+'poké ball'+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==668){
            gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0668_000_md_n_00000000_f_n'+img_s +'0668_000_md_n_00000000_f_r'+spans+forms+cardcl+cardop+'0668_000_fd_n_00000000_f_n'+img_s +'0668_000_fd_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==669){
            gender= "fo";
                forms= "red flower";
            nome='<a class="f-name" href="">'+'Flabébé'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0669_000_fo_n_00000000_f_n'+img_s +'0669_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0669_001_fo_n_00000000_f_n'+img_s +'0669_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0669_002_fo_n_00000000_f_n'+img_s +'0669_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0669_003_fo_n_00000000_f_n'+img_s +'0669_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0669_004_fo_n_00000000_f_n'+img_s +'0669_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Flabébé forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==670){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0670_000_fo_n_00000000_f_n'+img_s +'0670_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0670_001_fo_n_00000000_f_n'+img_s +'0670_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0670_002_fo_n_00000000_f_n'+img_s +'0670_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0670_003_fo_n_00000000_f_n'+img_s +'0670_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0670_004_fo_n_00000000_f_n'+img_s +'0670_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==671){
            gender= "fo";
                forms= "red flower";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0671_000_fo_n_00000000_f_n'+img_s +'0671_000_fo_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0671_001_fo_n_00000000_f_n'+img_s +'0671_001_fo_n_00000000_f_r'+spans+'yellow flower'+cardcl+div_+modalcol+cardop+'0671_002_fo_n_00000000_f_n'+img_s +'0671_002_fo_n_00000000_f_r'+spans+'orange flower'+cardcl+div_+modalcol+cardop+'0671_003_fo_n_00000000_f_n'+img_s +'0671_003_fo_n_00000000_f_r'+spans+'blue flower'+cardcl+div_+modalcol+cardop+'0671_004_fo_n_00000000_f_n'+img_s +'0671_004_fo_n_00000000_f_r'+spans+'white flower'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==676){
            forms= "natural form";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0676_000_mf_n_00000000_f_n'+img_s +'0676_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0676_001_mf_n_00000000_f_n'+img_s +'0676_001_mf_n_00000000_f_r'+spans+'heart trim'+cardcl+div_+modalcol+cardop+'0676_002_mf_n_00000000_f_n'+img_s +'0676_002_mf_n_00000000_f_r'+spans+'star trim'+cardcl+div_+modalcol+cardop+'0676_003_mf_n_00000000_f_n'+img_s +'0676_003_mf_n_00000000_f_r'+spans+'diamond trim'+cardcl+div_+modalcol+cardop+'0676_004_mf_n_00000000_f_n'+img_s +'0676_004_mf_n_00000000_f_r'+spans+'debutante trim'+cardcl+div_+modalcol+cardop+'0676_005_mf_n_00000000_f_n'+img_s +'0676_005_mf_n_00000000_f_r'+spans+'matron trim'+cardcl+div_+modalcol+cardop+'0676_006_mf_n_00000000_f_n'+img_s +'0676_006_mf_n_00000000_f_r'+spans+'dandy trim'+cardcl+div_+modalcol+cardop+'0676_007_mf_n_00000000_f_n'+img_s +'0676_007_mf_n_00000000_f_r'+spans+'la reine trim'+cardcl+div_+modalcol+cardop+'0676_008_mf_n_00000000_f_n'+img_s +'0676_008_mf_n_00000000_f_r'+spans+'kabuki trim'+cardcl+div_+modalcol+cardop+'0676_009_mf_n_00000000_f_n'+img_s +'0676_009_mf_n_00000000_f_r'+spans+'pharaoh trim'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==678){
            gender= "mo";
            forms= 'male';
            nome='<a class="f-name" href="">'+'Meowstic'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0678_000_mo_n_00000000_f_n'+img_s +'0678_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0678_001_fo_n_00000000_f_n'+img_s +'0678_001_fo_n_00000000_f_r'+spans+fem+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Meowstic forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==681){
            nome='<a class="f-name" href="">'+'Aegislash'+'</a>';
            forms= "shield forme";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0681_000_mf_n_00000000_f_n'+img_s +'0681_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0681_001_mf_n_00000000_f_n'+img_s +'0681_001_mf_n_00000000_f_r'+spans+'blade forme'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Aegislash forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';    
        } else if (i==710){
            forms= "average size";
            nome='<a class="f-name" href="">'+'Pumpkaboo'+'</a>';
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0710_001_mf_n_00000000_f_n'+img_s +'0710_001_mf_n_00000000_f_r'+spans+'small size'+cardcl+div_+modalcol+cardop+'0710_000_mf_n_00000000_f_n'+img_s +'0710_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0710_002_mf_n_00000000_f_n'+img_s +'0710_002_mf_n_00000000_f_r'+spans+'large size'+cardcl+div_+modalcol+cardop+'0710_003_mf_n_00000000_f_n'+img_s +'0710_003_mf_n_00000000_f_r'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Pumpkaboo forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==711){
            forms= "average size";
            nome='<a class="f-name" href="">'+'Gourgeist'+'</a>';
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0711_001_mf_n_00000000_f_n'+img_s +'0711_001_mf_n_00000000_f_r'+spans+'small size'+cardcl+div_+modalcol+cardop+'0711_000_mf_n_00000000_f_n'+img_s +'0711_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0711_002_mf_n_00000000_f_n'+img_s +'0711_002_mf_n_00000000_f_r'+spans+'large size'+cardcl+div_+modalcol+cardop+'0711_003_mf_n_00000000_f_n'+img_s +'0711_003_mf_n_00000000_f_r'+spans+'super size'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Gourgeist forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==716){
            gender= "uk";
                forms= "neutral mode";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0716_000_uk_n_00000000_f_n'+img_s +'0716_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0716_001_uk_n_00000000_f_n'+img_s +'0716_001_uk_n_00000000_f_r'+spans+'active mode'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==718){
            gender= "uk";
            forms= "50% forme";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0718_000_uk_n_00000000_f_n'+img_s +'0718_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0718_001_uk_n_00000000_f_n'+img_s +'0718_001_uk_n_00000000_f_r'+spans+'10% forme'+cardcl+cardop+'0718_004_uk_n_00000000_f_n'+img_s +'0718_004_uk_n_00000000_f_r'+spans+'complete forme'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==719){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0719_000_uk_n_00000000_f_n'+img_s +'0719_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0719_001_uk_n_00000000_f_n'+img_s +'0719_001_uk_n_00000000_f_r'+spans+mega+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==720){
            gender= "uk";
            forms= "confined";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0720_000_uk_n_00000000_f_n'+img_s +'0720_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0720_001_uk_n_00000000_f_n'+img_s +'0720_001_uk_n_00000000_f_r'+spans+'unbound'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==741){
            forms= "baile style";
            nome='<a class="f-name" href="">'+'Oricorio'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0741_000_mf_n_00000000_f_n'+img_s +'0741_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0741_001_mf_n_00000000_f_n'+img_s +'0741_001_mf_n_00000000_f_r'+spans+'pom-pom style'+cardcl+div_+modalcol+cardop+'0741_002_mf_n_00000000_f_n'+img_s +'0741_002_mf_n_00000000_f_r'+spans+"pa'u style"+cardcl+div_+modalcol+cardop+'0741_003_mf_n_00000000_f_n'+img_s +'0741_003_mf_n_00000000_f_r'+spans+'sensu style'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Oricorio forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==745){
            nome='<a class="f-name" href="">'+'Lycanroc'+'</a>';
            forms= "miday form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0745_000_mf_n_00000000_f_n'+img_s +'0745_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0745_001_mf_n_00000000_f_n'+img_s +'0745_001_mf_n_00000000_f_r'+spans+'midnight form'+cardcl+cardop+'0745_002_mf_n_00000000_f_n'+img_s +'0745_002_mf_n_00000000_f_r'+spans+'dusk form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Lycanroc forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==746){
            nome='<a class="f-name" href="">'+'Wishiwashi'+'</a>';
            forms= "solo form";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=cardop+'0746_000_mf_n_00000000_f_n'+img_s +'0746_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0746_001_mf_n_00000000_f_n'+img_s +'0746_001_mf_n_00000000_f_r'+spans+'school form'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Wishiwashi forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==772){
            nome='<a class="f-name" href="">'+'Type: Null'+'</a>';
            gender= "uk";
        }
         else if(i==773){
            gender= "uk";
                forms= "type: normal";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolxl+cardop+'0773_000_uk_n_00000000_f_n'+img_s +'0773_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcolxl+cardop+'0773_001_uk_n_00000000_f_n'+img_s +'0773_001_uk_n_00000000_f_r'+spans+' type: fighting'+cardcl+div_+modalcolxl+cardop+'0773_002_uk_n_00000000_f_n'+img_s +'0773_002_uk_n_00000000_f_r'+spans+' type: flying'+cardcl+div_+modalcolxl+cardop+'0773_003_uk_n_00000000_f_n'+img_s +'0773_003_uk_n_00000000_f_r'+spans+' type: poison'+cardcl+div_+modalcolxl+cardop+'0773_004_uk_n_00000000_f_n'+img_s +'0773_004_uk_n_00000000_f_r'+spans+' type: ground'+cardcl+div_+modalcolxl+cardop+'0773_005_uk_n_00000000_f_n'+img_s +'0773_005_uk_n_00000000_f_r'+spans+' type: rock'+cardcl+div_+modalcolxl+cardop+'0773_006_uk_n_00000000_f_n'+img_s +'0773_006_uk_n_00000000_f_r'+spans+' type: bug'+cardcl+div_+modalcolxl+cardop+'0773_007_uk_n_00000000_f_n'+img_s +'0773_007_uk_n_00000000_f_r'+spans+' type: ghost'+cardcl+div_+modalcolxl+cardop+'0773_008_uk_n_00000000_f_n'+img_s +'0773_008_uk_n_00000000_f_r'+spans+' type: steel'+cardcl+div_+modalcolxl+cardop+'0773_009_uk_n_00000000_f_n'+img_s +'0773_009_uk_n_00000000_f_r'+spans+' type: fire'+cardcl+div_+modalcolxl+cardop+'0773_010_uk_n_00000000_f_n'+img_s +'0773_010_uk_n_00000000_f_r'+spans+' type: water'+cardcl+div_+modalcolxl+cardop+'0773_011_uk_n_00000000_f_n'+img_s +'0773_011_uk_n_00000000_f_r'+spans+' type: grass'+cardcl+div_+modalcolxl+cardop+'0773_012_uk_n_00000000_f_n'+img_s +'0773_012_uk_n_00000000_f_r'+spans+' type: electric'+cardcl+div_+modalcolxl+cardop+'0773_013_uk_n_00000000_f_n'+img_s +'0773_013_uk_n_00000000_f_r'+spans+' type: psychic'+cardcl+div_+modalcolxl+cardop+'0773_014_uk_n_00000000_f_n'+img_s +'0773_014_uk_n_00000000_f_r'+spans+' type: ice'+cardcl+div_+modalcolxl+cardop+'0773_015_uk_n_00000000_f_n'+img_s +'0773_015_uk_n_00000000_f_r'+spans+' type: dragon'+cardcl+div_+modalcolxl+cardop+'0773_016_uk_n_00000000_f_n'+img_s +'0773_016_uk_n_00000000_f_r'+spans+' type: dark'+cardcl+div_+modalcolxl+cardop+'0773_017_uk_n_00000000_f_n'+img_s +'0773_017_uk_n_00000000_f_r'+spans+' type: fairy'+cardcl+div_;
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==774){
            gender= "uk";
            forms= "core";
            nome='<a class="f-name" href="">'+'Minior'+'</a>';
            // var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_007_"+gender+"_n_00000000_f_n.png";
            // var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_007_"+gender+"_n_00000000_f_r.png";
            // smurf='#';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0774_000_uk_n_00000000_f_n'+img_s +'0774_000_uk_n_00000000_f_r'+spans+'meteor'+cardcl+div_+modalcol+cardop+'0774_007_uk_n_00000000_f_r'+img_s +'0774_007_uk_n_00000000_f_n'+spans+'red core'+cardcl+div_+modalcol+cardop+'0774_008_uk_n_00000000_f_r'+img_s +'0774_008_uk_n_00000000_f_n'+spans+'orange core'+cardcl+div_+modalcol+cardop+'0774_009_uk_n_00000000_f_r'+img_s +'0774_009_uk_n_00000000_f_n'+spans+'yellow core'+cardcl+div_+modalcol+cardop+'0774_010_uk_n_00000000_f_r'+img_s +'0774_010_uk_n_00000000_f_n'+spans+'green core'+cardcl+div_+modalcol+cardop+'0774_011_uk_n_00000000_f_r'+img_s +'0774_011_uk_n_00000000_f_n'+spans+'blue core'+cardcl+div_+modalcol+cardop+'0774_012_uk_n_00000000_f_r'+img_s +'0774_012_uk_n_00000000_f_n'+spans+'indigo core'+cardcl+div_+modalcol+cardop+'0774_013_uk_n_00000000_f_r'+img_s +'0774_013_uk_n_00000000_f_n'+spans+'violet core'+cardcl+div_;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Minior forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==778){ 
            forms= "disguised";
            nome='<a class="f-name" href="">'+'Mimikyu'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0778_000_mf_n_00000000_f_n'+img_s +'0778_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0778_001_mf_n_00000000_f_n'+img_s +'0778_001_mf_n_00000000_f_r'+spans+'busted'+cardcl;
       
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Mimikyu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==800){
            gender= "uk";
                forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0800_000_uk_n_00000000_f_n'+img_s +'0800_000_uk_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0800_001_uk_n_00000000_f_n'+img_s +'0800_001_uk_n_00000000_f_r'+spans+'dusk mane'+cardcl+div_+modalcol+cardop+'0800_002_uk_n_00000000_f_n'+img_s +'0800_002_uk_n_00000000_f_r'+spans+'dawn wings'+cardcl+div_+modalcol+cardop+'0800_003_uk_n_00000000_f_n'+img_s +'0800_003_uk_n_00000000_f_r'+spans+'ultra Necrozma'+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==801){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0801_000_uk_n_00000000_f_n'+img_s +'0801_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0801_001_uk_n_00000000_f_n'+img_s +'0801_001_uk_n_00000000_f_r'+spans+'original color'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==809){
            gender= "uk";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0809_000_uk_n_00000000_f_n'+img_s +'0809_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0809_000_uk_g_00000000_f_n'+img_s +'0809_000_uk_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==812){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0812_000_mf_n_00000000_f_n'+img_s +'0812_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0812_000_mf_g_00000000_f_n'+img_s +'0812_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==815){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0815_000_mf_n_00000000_f_n'+img_s +'0815_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0815_000_mf_g_00000000_f_n'+img_s +'0815_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==818){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0818_000_mf_n_00000000_f_n'+img_s +'0818_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0818_000_mf_g_00000000_f_n'+img_s +'0818_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==823){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0823_000_mf_n_00000000_f_n'+img_s +'0823_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0823_000_mf_g_00000000_f_n'+img_s +'0823_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==826){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0826_000_mf_n_00000000_f_n'+img_s +'0826_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0826_000_mf_g_00000000_f_n'+img_s +'0826_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==834){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0834_000_mf_n_00000000_f_n'+img_s +'0834_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0834_000_mf_g_00000000_f_n'+img_s +'0834_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==839){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0839_000_mf_n_00000000_f_n'+img_s +'0839_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0839_000_mf_g_00000000_f_n'+img_s +'0839_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==841){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0841_000_mf_n_00000000_f_n'+img_s +'0841_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0841_000_mf_g_00000000_f_n'+img_s +'0841_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==842){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0842_000_mf_n_00000000_f_n'+img_s +'0842_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0842_000_mf_g_00000000_f_n'+img_s +'0842_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==844){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0844_000_mf_n_00000000_f_n'+img_s +'0844_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0844_000_mf_g_00000000_f_n'+img_s +'0844_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==845){
           
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0845_000_mf_n_00000000_f_n'+img_s +'0845_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0845_001_mf_n_00000000_f_n'+img_s +'0845_001_mf_n_00000000_f_r'+spans+'gulping'+cardcl+cardop+'0845_002_mf_n_00000000_f_n'+img_s +'0845_002_mf_n_00000000_f_r'+spans+'gorging'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==849){
            nome='<a class="f-name" href="">'+'Toxtricity'+'</a>';
            forms= "amped form";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0849_000_mf_n_00000000_f_n'+img_s +'0849_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0849_001_mf_n_00000000_f_n'+img_s +'0849_001_mf_n_00000000_f_r'+spans+'low key'+cardcl+cardop+'0849_000_mf_g_00000000_f_n'+img_s +'0849_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Toxtricity forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==851){  
            
            forms= "standard";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0851_000_mf_n_00000000_f_n'+img_s +'0851_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0851_000_mf_g_00000000_f_n'+img_s +'0851_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==858){
            gender= "fo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0858_000_fo_n_00000000_f_n'+img_s +'0858_000_fo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0858_000_fo_g_00000000_f_n'+img_s +'0858_000_fo_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==861){
            gender= "mo";
            forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0861_000_mo_n_00000000_f_n'+img_s +'0861_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0861_000_mo_g_00000000_f_n'+img_s +'0861_000_mo_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }
        else if(i==869){ 
            gender= "fo";
            forms= "vanilla cream<br>strawberry sweet";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody= modalcolfull+cardop+'0869_000_fo_g_00000000_f_n'+img_s +'0869_000_fo_g_00000000_f_r'+spans+giga+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000000_f_r'+img_s +'0869_000_fo_n_00000000_f_n'+spans+forms+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000001_f_r'+img_s +'0869_000_fo_n_00000001_f_n'+spans+"vanilla cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000002_f_r'+img_s +'0869_000_fo_n_00000002_f_n'+spans+"vanilla cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000003_f_r'+img_s +'0869_000_fo_n_00000003_f_n'+spans+"vanilla cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000004_f_r'+img_s +'0869_000_fo_n_00000004_f_n'+spans+"vanilla cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000005_f_r'+img_s +'0869_000_fo_n_00000005_f_n'+spans+"vanilla cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_000_fo_n_00000006_f_r'+img_s +'0869_000_fo_n_00000006_f_n'+spans+"vanilla cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000000_f_r'+img_s +'0869_001_fo_n_00000000_f_n'+spans+"ruby cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000001_f_r'+img_s +'0869_001_fo_n_00000001_f_n'+spans+"ruby cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000002_f_r'+img_s +'0869_001_fo_n_00000002_f_n'+spans+"ruby cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000003_f_r'+img_s +'0869_001_fo_n_00000003_f_n'+spans+"ruby cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000004_f_r'+img_s +'0869_001_fo_n_00000004_f_n'+spans+"ruby cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000005_f_r'+img_s +'0869_001_fo_n_00000005_f_n'+spans+"ruby cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_001_fo_n_00000006_f_r'+img_s +'0869_001_fo_n_00000006_f_n'+spans+"ruby cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000000_f_r'+img_s +'0869_002_fo_n_00000000_f_n'+spans+"matcha cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000001_f_r'+img_s +'0869_002_fo_n_00000001_f_n'+spans+"matcha cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000002_f_r'+img_s +'0869_002_fo_n_00000002_f_n'+spans+"matcha cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000003_f_r'+img_s +'0869_002_fo_n_00000003_f_n'+spans+"matcha cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000004_f_r'+img_s +'0869_002_fo_n_00000004_f_n'+spans+"matcha cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000005_f_r'+img_s +'0869_002_fo_n_00000005_f_n'+spans+"matcha cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_002_fo_n_00000006_f_r'+img_s +'0869_002_fo_n_00000006_f_n'+spans+"matcha cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000000_f_r'+img_s +'0869_003_fo_n_00000000_f_n'+spans+"mint cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000001_f_r'+img_s +'0869_003_fo_n_00000001_f_n'+spans+"mint cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000002_f_r'+img_s +'0869_003_fo_n_00000002_f_n'+spans+"mint cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000003_f_r'+img_s +'0869_003_fo_n_00000003_f_n'+spans+"mint cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000004_f_r'+img_s +'0869_003_fo_n_00000004_f_n'+spans+"mint cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000005_f_r'+img_s +'0869_003_fo_n_00000005_f_n'+spans+"mint cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_003_fo_n_00000006_f_r'+img_s +'0869_003_fo_n_00000006_f_n'+spans+"mint cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000000_f_r'+img_s +'0869_004_fo_n_00000000_f_n'+spans+"lemon cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000001_f_r'+img_s +'0869_004_fo_n_00000001_f_n'+spans+"lemon cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000002_f_r'+img_s +'0869_004_fo_n_00000002_f_n'+spans+"lemon cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000003_f_r'+img_s +'0869_004_fo_n_00000003_f_n'+spans+"lemon cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000004_f_r'+img_s +'0869_004_fo_n_00000004_f_n'+spans+"lemon cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000005_f_r'+img_s +'0869_004_fo_n_00000005_f_n'+spans+"lemon cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_004_fo_n_00000006_f_r'+img_s +'0869_004_fo_n_00000006_f_n'+spans+"lemon cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000000_f_r'+img_s +'0869_005_fo_n_00000000_f_n'+spans+"salted cream<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000001_f_r'+img_s +'0869_005_fo_n_00000001_f_n'+spans+"salted cream<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000002_f_r'+img_s +'0869_005_fo_n_00000002_f_n'+spans+"salted cream<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000003_f_r'+img_s +'0869_005_fo_n_00000003_f_n'+spans+"salted cream<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000004_f_r'+img_s +'0869_005_fo_n_00000004_f_n'+spans+"salted cream<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000005_f_r'+img_s +'0869_005_fo_n_00000005_f_n'+spans+"salted cream<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_005_fo_n_00000006_f_r'+img_s +'0869_005_fo_n_00000006_f_n'+spans+"salted cream<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000000_f_r'+img_s +'0869_006_fo_n_00000000_f_n'+spans+"ruby swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000001_f_r'+img_s +'0869_006_fo_n_00000001_f_n'+spans+"ruby swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000002_f_r'+img_s +'0869_006_fo_n_00000002_f_n'+spans+"ruby swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000003_f_r'+img_s +'0869_006_fo_n_00000003_f_n'+spans+"ruby swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000004_f_r'+img_s +'0869_006_fo_n_00000004_f_n'+spans+"ruby swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000005_f_r'+img_s +'0869_006_fo_n_00000005_f_n'+spans+"ruby swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_006_fo_n_00000006_f_r'+img_s +'0869_006_fo_n_00000006_f_n'+spans+"ruby swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000000_f_r'+img_s +'0869_007_fo_n_00000000_f_n'+spans+"caramel swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000001_f_r'+img_s +'0869_007_fo_n_00000001_f_n'+spans+"caramel swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000002_f_r'+img_s +'0869_007_fo_n_00000002_f_n'+spans+"caramel swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000003_f_r'+img_s +'0869_007_fo_n_00000003_f_n'+spans+"caramel swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000004_f_r'+img_s +'0869_007_fo_n_00000004_f_n'+spans+"caramel swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000005_f_r'+img_s +'0869_007_fo_n_00000005_f_n'+spans+"caramel swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_007_fo_n_00000006_f_r'+img_s +'0869_007_fo_n_00000006_f_n'+spans+"caramel swirl<br>ribbon sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000000_f_r'+img_s +'0869_008_fo_n_00000000_f_n'+spans+"rainbow swirl<br>strawberry sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000001_f_r'+img_s +'0869_008_fo_n_00000001_f_n'+spans+"rainbow swirl<br>berry sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000002_f_r'+img_s +'0869_008_fo_n_00000002_f_n'+spans+"rainbow swirl<br>love sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000003_f_r'+img_s +'0869_008_fo_n_00000003_f_n'+spans+"rainbow swirl<br>star sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000004_f_r'+img_s +'0869_008_fo_n_00000004_f_n'+spans+"rainbow swirl<br>clover sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000005_f_r'+img_s +'0869_008_fo_n_00000005_f_n'+spans+"rainbow swirl<br>flower sweet"+cardcl+div_+modalcolfull+cardop+'0869_008_fo_n_00000006_f_r'+img_s +'0869_008_fo_n_00000006_f_n'+spans+"rainbow swirl<br>ribbon sweet"+cardcl+div_;

            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-fullscreen"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if(i==875){
            forms= "ice face";
            nome='<a class="f-name" href="">'+'Eiscue'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0875_000_mf_n_00000000_f_n'+img_s +'0875_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0875_001_mf_n_00000000_f_n'+img_s +'0875_001_mf_n_00000000_f_r'+spans+'noice face'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Eiscue forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if (i==876){  
            gender= "mo";
            forms= "male";
            nome='<a class="f-name" href="">'+'Indeedee'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0876_000_mo_n_00000000_f_n'+img_s +'0876_000_mo_n_00000000_f_r'+spans+forms+cardcl+cardop+'0876_001_fo_n_00000000_f_n'+img_s +'0876_001_fo_n_00000000_f_r'+spans+fem+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Indeedee forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==877){  
            
            forms= "full belly mode";
            
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0877_000_mf_n_00000000_f_n'+img_s +'0877_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0877_001_mf_n_00000000_f_n'+img_s +'0877_001_mf_n_00000000_f_r'+spans+'hangry mode'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }else if (i==879){  
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0879_000_mf_n_00000000_f_n'+img_s +'0879_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0879_000_mf_g_00000000_f_n'+img_s +'0879_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==884){
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0884_000_mf_n_00000000_f_n'+img_s +'0884_000_mf_n_00000000_f_r'+spans+forms+cardcl+cardop+'0884_000_mf_g_00000000_f_n'+img_s +'0884_000_mf_g_00000000_f_r'+spans+giga+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } if(i==888){
            gender= "uk";
            forms= "hero of<br>many battles";
            nome='<a class="f-name" href="">'+'Zacian'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0888_000_uk_n_00000000_f_n'+img_s +'0888_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0888_001_uk_n_00000000_f_n'+img_s +'0888_001_uk_n_00000000_f_r'+spans+'crowned sword'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zacian forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        }else if(i==889){
            gender= "uk";
            forms= "hero of<br>many battles";
            nome='<a class="f-name" href="">'+'Zamazenta'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0889_000_uk_n_00000000_f_n'+img_s +'0889_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0889_001_uk_n_00000000_f_n'+img_s +'0889_001_uk_n_00000000_f_r'+spans+'crowned shield'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Zamazenta forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
        } else if (i==890){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0890_000_uk_n_00000000_f_n'+img_s +'0890_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0890_001_uk_n_00000000_f_n'+img_s +'0890_001_uk_n_00000000_f_r'+spans+'eternamax'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==892){  
            forms= "single strike style";
            nome='<a class="f-name" href="">'+'Urshifu'+'</a>';
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
            modalbody=modalcol+cardop+'0892_000_mf_n_00000000_f_n'+img_s +'0892_000_mf_n_00000000_f_r'+spans+forms+cardcl+div_+modalcol+cardop+'0892_000_mf_g_00000000_f_n'+img_s +'0892_000_mf_g_00000000_f_r'+spans+forms+'<br>'+giga+cardcl+div_+modalcol+cardop+'0892_001_mf_n_00000000_f_n'+img_s +'0892_001_mf_n_00000000_f_r'+spans+"rapid strike style"+cardcl+div_+modalcol+cardop+'0892_001_mf_g_00000000_f_n'+img_s +'0892_001_mf_g_00000000_f_r'+spans+"rapid strike style<br>"+giga+cardcl+div_;
       
        modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">Urshifu forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
        muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==893){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0893_000_uk_n_00000000_f_n'+img_s +'0893_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0893_001_uk_n_00000000_f_n'+img_s +'0893_001_uk_n_00000000_f_r'+spans+'Dada Zarude'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        } else if (i==898){
            gender= "uk";
            forms= "standard";
            dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+pokemon.name+'Modal';
                modalbody=cardop+'0898_000_uk_n_00000000_f_n'+img_s +'0898_000_uk_n_00000000_f_r'+spans+forms+cardcl+cardop+'0898_001_uk_n_00000000_f_n'+img_s +'0898_001_uk_n_00000000_f_r'+spans+'ice rider'+cardcl+cardop+'0898_002_uk_n_00000000_f_n'+img_s +'0898_002_uk_n_00000000_f_r'+spans+'shadow rider'+cardcl;
           
            modallo= '<div class="modal fade" id="ex'+pokemon.name+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+pokemon.name+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
            muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+'</a>';
            
        }
        else if (i==113 || i==124 || i==238 || i==241 || i==242 || i==314 || i==416 || i==440 || i==478 || i==488 || i==548 || i==549 || i==629 || i==630 || i==758 || i>=761 && i<=763 || i==856 || i==857 || i==868) {
                gender= "fo";
            } else if (i==106 || i==107 || i==128 || i==236 || i==237 || i==313 || i==414 || i==538 || i==539 || i==627 || i==628 || i==859 || i==860) {
                gender= "mo";
            } else if (i==100|| i==101 || i==120|| i==121|| i==132 || i==137 || i==151 || i==233 || i>=243 && i<=245 || i>=249 && i<=251 || i==292|| i==233 || i==337|| i==338|| i==343 || i==344 || i==374 || i==375 || i>=377 && i<=379 || i==385 || i==436|| i==437 || i==462|| i==474|| i>=480 && i<=484 || i==486 || i>=489 && i<=491 || i==494 || i>=599 && i<=601 || i==615 || i==622 || i==623 || i>=638 && i<=640 || i==643 || i==644 || i==703 || i==717 || i==721 || i==781 || i>=785 && i<=799 || i>=802 && i<=808 || i==854 || i==855 || i==870 || i>=880 && i<=883 || i>=894 && i<=897) {
                gender= "uk";
            }
           
                    

            
            //modifiche eventuali ai nomi dell'array
         
           // url immagini   O K    come l'avevo fatto io
        // if (i >= 1 && i <= 9) { 
        //     var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_000"+i+"_000_"+gender+"_n_00000000_f_n.png";
        //     var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_000"+i+"_000_"+gender+"_n_00000000_f_r.png";
        //     smurf='#00';
        // } else if(i>=10 && i<=99){
        //     var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_00"+i+"_000_"+gender+"_n_00000000_f_n.png";
        //     var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_00"+i+"_000_"+gender+"_n_00000000_f_r.png";
        //     smurf='#0';
            
        // }else if(i>=100 && i<=773 || i>=775 && i<=898){
        //     var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_000_"+gender+"_n_00000000_f_n.png";
        //     var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_000_"+gender+"_n_00000000_f_r.png";
        //     smurf='#';
        // };

          //carta   O K    come l'avevo fatta io

        // card+= 
        //         '<div class="f-card" id="'+i+'">'+
        //             '<span class="f-sprite">'+
        //                 '<img class="f-normalimg" src="'+ sprite_n_url+'" alt="sprite">'+
        //                 '<img class="f-shinyimg" src="'+ sprite_s_url+'" alt="sprite-shiny">'+    
        //             '</span>'+
        //             '<br>'+
        //             '<span class="text-muted">'+
        //                 '<small>'+smurf+i+'</small>'+
        //                 '<br>'+nome+ 
        //                 '<br>'+
        //                 muteBtn+
        //             '</span>'+ 
        //         '</div>'+modallo; 

        //FINE carta   O K    by me 

                //href="'+schedaLink+'"
                
                

                //'<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>'
                //'<span class="f-orms">'+forms+dropmenu+'</span>'
                 
        
       //Dave card
                card += buildPokemonCard(i, nome, muteBtn, modallo, gender);
         
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
// $('.f-name').on(click,function newDoc() {
//     window.location.assign("scheda.html")
//   })