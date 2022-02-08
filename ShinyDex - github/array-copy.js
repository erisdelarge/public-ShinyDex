

$('#nat-btn').on('click', function() {
    document.getElementById("nationalPokedex").classList.toggle('show');

}) ;

/// e n d   b u t t o n s

    ///   N A T I O N A L    P O K E D E X

      
pokedex_url ="https://pokeapi.co/api/v2/pokemon?limit=899";

$.getJSON(pokedex_url, function(jsonObj) {
    var pkmnList = jsonObj.results; 
    myArray=[0];

    $.each(pkmnList, function(index, object) { 
        var card ="";
        
        var pkmn = object.name;
        myArray.push(pkmn);
        
        var smurf='';
        var zeros= "000";

        for (var i = 1; i <= 898; i++) {
         
        

        var gender = "mf";
            var forms="-";
            var dropmenu ="";
            muteBtn='<span>'+forms+dropmenu+'</span>';
            // var schedaLink="";
            var dropBtn=""; 
            var modalbody="";
            var modallo="";
            modalcont='<div class="container-fluid">';
            modalrow= '<div class="row">';
            modalcol='<div class="col-md-4 col-lg-3">';
                     //struttura di una table forms
                    
         div='<div class="dropdown-content">';
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
                    
         

         nome='<a class="f-name" href="">'+ myArray[i]+'</a>';
          
            if (i==3) {
                gender= "md";
                forms= "male";
                // schedaLink ='scheda.html" target="_blank';
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody= cardop+'0003_000_fd_n_00000000_f_n'+img_s +'0003_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0003_001_mf_n_00000000_f_n'+img_s+'0003_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0003_000_mf_g_00000000_f_n'+img_s+'0003_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';

            } else if (i==6) {
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody= cardop+'0006_001_mf_n_00000000_f_n'+img_s +'0006_001_mf_n_00000000_f_r'+spans+mx+cardcl+cardop+'0006_002_mf_n_00000000_f_n'+img_s+'0006_002_mf_n_00000000_f_r'+spans+my+cardcl+cardop+'0006_000_mf_g_00000000_f_n'+img_s+'0006_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
      
            } else if(i==9){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0009_001_mf_n_00000000_f_n'+img_s+'0009_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0009_000_mf_g_00000000_f_n'+img_s+'0009_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==12){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0012_000_fd_n_00000000_f_n'+img_s +'0012_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0012_000_mf_g_00000000_f_n'+img_s+'0012_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==15){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0015_001_mf_n_00000000_f_n'+img_s +'0015_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==18){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0018_001_mf_n_00000000_f_n'+img_s +'0018_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==19){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0019_000_fd_n_00000000_f_n'+img_s +'0019_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0019_001_mf_n_00000000_f_n'+img_s +'0019_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';

            } else if (i==20){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0020_000_fd_n_00000000_f_n'+img_s +'0020_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0020_001_mf_n_00000000_f_n'+img_s +'0020_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                dropmenu= div+modalbody+div_;
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';

            } else if(i==25){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=modalcol+cardop+'0025_000_fd_n_00000000_f_n'+img_s +'0025_000_fd_n_00000000_f_r'+spans+fem+cardcl+div_+modalcol+cardop+'0025_001_mo_n_00000000_f_n'+img_s +'0025_001_mo_n_00000000_f_r'+spans+'Original cap'+cardcl+div_+modalcol+cardop+'0025_002_mo_n_00000000_f_n'+img_s +'0025_002_mo_n_00000000_f_r'+spans+'Hoenn cap'+cardcl+div_+modalcol+cardop+'0025_003_mo_n_00000000_f_n'+img_s +'0025_003_mo_n_00000000_f_r'+spans+'Sinnoh cap'+cardcl+div_+modalcol+cardop+'0025_004_mo_n_00000000_f_n'+img_s +'0025_004_mo_n_00000000_f_r'+spans+'Unova cap'+cardcl+div_+modalcol+cardop+'0025_005_mo_n_00000000_f_n'+img_s +'0025_005_mo_n_00000000_f_r'+spans+'Kalos cap'+cardcl+div_+modalcol+cardop+'0025_006_mo_n_00000000_f_n'+img_s +'0025_006_mo_n_00000000_f_r'+spans+'Alola cap'+cardcl+div_+modalcol+cardop+'0025_007_mo_n_00000000_f_n'+img_s +'0025_007_mo_n_00000000_f_r'+spans+'Johto cap<br>Partner cap'+cardcl+div_+modalcol+cardop+'0025_009_mo_n_00000000_f_n'+img_s +'0025_009_mo_n_00000000_f_r'+spans+'World cap'+cardcl+div_+modalcol+cardop+'0025_000_mf_g_00000000_f_n'+img_s +'0025_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                
                dropmenu= div+cardop+'0025_000_fd_n_00000000_f_n'+img_s +'0025_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0025_001_mo_n_00000000_f_n'+img_s +'0025_001_mo_n_00000000_f_r'+spans+'Original cap'+cardcl+cardop+'0025_000_mf_g_00000000_f_n'+img_s +'0025_000_mf_g_00000000_f_r'+spans+giga+cardcl+div_;
                //+cardop+'0025_002_mo_n_00000000_f_n'+img_s +'0025_002_mo_n_00000000_f_r'+spans+'Hoenn cap'+cardcl+cardop+'0025_003_mo_n_00000000_f_n'+img_s +'0025_003_mo_n_00000000_f_r'+spans+'Sinnoh cap'+cardcl+cardop+'0025_004_mo_n_00000000_f_n'+img_s +'0025_004_mo_n_00000000_f_r'+spans+'Unova cap'+cardcl+cardop+'0025_005_mo_n_00000000_f_n'+img_s +'0025_005_mo_n_00000000_f_r'+spans+'Kalos cap'+cardcl+cardop+'0025_006_mo_n_00000000_f_n'+img_s +'0025_006_mo_n_00000000_f_r'+spans+'Alola cap'+cardcl+cardop+'0025_007_mo_n_00000000_f_n'+img_s +'0025_007_mo_n_00000000_f_r'+spans+'Johto cap<br>Partner cap'+cardcl+cardop+'0025_009_mo_n_00000000_f_n'+img_s +'0025_009_mo_n_00000000_f_r'+spans+'World cap'+cardcl
                 
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+modalcont+modalrow+modalbody+div_+div_+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==26){
                gender= "md";
                forms= "male";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0026_000_fd_n_00000000_f_n'+img_s +'0026_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0026_001_mf_n_00000000_f_n'+img_s +'0026_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==27){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0027_001_mf_n_00000000_f_n'+img_s +'0027_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==28){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0028_001_mf_n_00000000_f_n'+img_s +'0028_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==37){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0037_001_mf_n_00000000_f_n'+img_s +'0037_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==38){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0038_001_mf_n_00000000_f_n'+img_s +'0038_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==41){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0041_000_fd_n_00000000_f_n'+img_s +'0041_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==42){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0042_000_fd_n_00000000_f_n'+img_s +'0042_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==44){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0044_000_fd_n_00000000_f_n'+img_s +'0044_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==45){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0045_000_fd_n_00000000_f_n'+img_s +'0045_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==50){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0050_001_mf_n_00000000_f_n'+img_s +'0050_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==51){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0051_001_mf_n_00000000_f_n'+img_s +'0051_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==52){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0052_001_mf_n_00000000_f_n'+img_s +'0052_001_mf_n_00000000_f_r'+spans+alola+cardcl+cardop+'0052_002_mf_n_00000000_f_n'+img_s +'0052_002_mf_n_00000000_f_r'+spans+galar+cardcl+cardop+'0052_000_mf_g_00000000_f_n'+img_s +'0052_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==53){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0053_001_mf_n_00000000_f_n'+img_s +'0053_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==64){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0064_000_fd_n_00000000_f_n'+img_s +'0064_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==65){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0065_000_fd_n_00000000_f_n'+img_s +'0065_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0065_001_mf_n_00000000_f_n'+img_s +'0065_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==68){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0068_000_mf_g_00000000_f_n'+img_s +'0068_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==74){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0074_001_mf_n_00000000_f_n'+img_s +'0074_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==75){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0075_001_mf_n_00000000_f_n'+img_s +'0075_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==76){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0076_001_mf_n_00000000_f_n'+img_s +'0076_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==77){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0077_001_mf_n_00000000_f_n'+img_s +'0077_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==78){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0078_001_mf_n_00000000_f_n'+img_s +'0078_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==79){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0079_001_mf_n_00000000_f_n'+img_s +'0079_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==80){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0080_001_mf_n_00000000_f_n'+img_s +'0080_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0080_002_mf_n_00000000_f_n'+img_s +'0080_002_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==83){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0083_001_mf_n_00000000_f_n'+img_s +'0083_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==84){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0084_000_fd_n_00000000_f_n'+img_s +'0084_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==85){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0085_000_fd_n_00000000_f_n'+img_s +'0085_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==88){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0088_001_mf_n_00000000_f_n'+img_s +'0088_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==89){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0089_001_mf_n_00000000_f_n'+img_s +'0089_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if(i==94){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0094_001_mf_n_00000000_f_n'+img_s +'0094_001_mf_n_00000000_f_r'+spans+mega+cardcl+cardop+'0094_000_mf_g_00000000_f_n'+img_s +'0094_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==97) {
                    gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0097_000_fd_n_00000000_f_n'+img_s +'0097_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
                   
                } else if (i>=29 && i<=31) {
                    gender= "fo";
                } else if (i>=32 && i<=34) {
                    gender= "mo";
                } else if (i==81|| i==82) {
                    gender= "uk";
                } else if (i==99) {
                    forms= "standard";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0099_000_mf_g_00000000_f_n'+img_s +'0099_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
                   
                } else if(i==29){
                nome='<a class="f-name" href="">'+'Nidoran♀'+'</a>';
            }
            else if (i==32){
                nome='<a class="f-name" href="">'+'Nidoran♂'+'</a>';
            } else if (i==103){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0103_001_mf_n_00000000_f_n'+img_s +'0103_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==105){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0105_001_mf_n_00000000_f_n'+img_s +'0105_001_mf_n_00000000_f_r'+spans+alola+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==110){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0110_001_mf_n_00000000_f_n'+img_s +'0110_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==111){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0111_000_fd_n_00000000_f_n'+img_s +'0111_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==112){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0112_000_fd_n_00000000_f_n'+img_s +'0112_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==115){
                gender= "fo";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0115_001_fo_n_00000000_f_n'+img_s +'0115_001_fo_n_00000000_f_r'+spans+mega+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==118){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0118_000_fd_n_00000000_f_n'+img_s +'0118_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==119){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0119_000_fd_n_00000000_f_n'+img_s +'0119_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==122){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0122_001_mf_n_00000000_f_n'+img_s +'0122_001_mf_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==123){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0123_000_fd_n_00000000_f_n'+img_s +'0123_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==127){
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0127_001_mf_n_00000000_f_n'+img_s +'0127_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==129){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0129_000_fd_n_00000000_f_n'+img_s +'0129_000_fd_n_00000000_f_r'+spans+fem+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==130){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0130_000_fd_n_00000000_f_n'+img_s +'0130_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0130_001_mf_n_00000000_f_n'+img_s +'0130_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==131) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0131_000_mf_g_00000000_f_n'+img_s +'0131_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
               
            } else if (i==133){
                gender= "md";
                    forms= "male";
                    dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0133_000_fd_n_00000000_f_n'+img_s +'0133_000_fd_n_00000000_f_r'+spans+fem+cardcl+cardop+'0133_000_mf_g_00000000_f_n'+img_s +'0133_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==142){
                gender= "mf";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0142_001_mf_n_00000000_f_n'+img_s +'0142_001_mf_n_00000000_f_r'+spans+mega+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==143) {
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0143_000_mf_g_00000000_f_n'+img_s +'0143_000_mf_g_00000000_f_r'+spans+giga+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
               
            } else if (i==144){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0144_001_uk_n_00000000_f_n'+img_s +'0144_001_uk_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==145){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0145_001_uk_n_00000000_f_n'+img_s +'0145_001_uk_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==146){
                gender= "uk";
                forms= "standard";
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                    modalbody=cardop+'0146_001_uk_n_00000000_f_n'+img_s +'0146_001_uk_n_00000000_f_r'+spans+galar+cardcl;
                    dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
            } else if (i==150) {
                gender= "uk";
                forms= "standard"; 
                dropBtn= 'f-dropdown" data-bs-toggle="modal" data-bs-target="#ex'+myArray[i]+'Modal';
                modalbody=cardop+'0150_001_uk_n_00000000_f_n'+img_s +'0150_001_uk_n_00000000_f_r'+spans+mx+cardcl+cardop+'0150_002_uk_n_00000000_f_n'+img_s+'0150_002_uk_n_00000000_f_r'+spans+my+cardcl;
                dropmenu= div+modalbody+div_;
                
                // modallo= '<div class="modal fade" id="ex'+myArray[i]+'Modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel">'+myArray[i]+' forms</h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body d-flex">'+modalbody+'</div></div></div></div>';
                muteBtn='<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>';
                  
            } else if ( i==154 || i==165 || i==166 || i==178 || i==185 || i==186 || i==190 || i==194 || i==195 || i==198 || i==202 || i==203 || i==207 || i==208 || i==212 || i==214 || i==215 || i==217 || i==221 || i==224 || i==229 || i==232 || i==256 || i==257 || i==267 || i==269 || i==272 || i==274 || i==275 || i==307 || i==308 || i==315 || i==316 || i==317 || i==322 || i==323 || i==332 || i==350 || i==369 || i>=396 && i<=405 || i==407 || i==415 || i>=417 && i<=419 || i==424 || i==443 || i==444 || i==445 || i==449 || i==450 || i==453 || i==454 || i==456 || i==457 || i>=459 && i<=461 || i==464 || i==465 || i==473 || i==521 || i==592 || i==593 || i==668) {
                gender= "md";
                forms= "male";
               
            } else if (i==255) {
                gender= "fd";
            } else if (i==113 || i==124 || i==238 || i==241 || i==242 || i==314 || i==416 || i==440 || i==478 || i==488 || i==548 || i==549 || i==629 || i==630 || i==758 || i>=761 && i<=763 || i==856 || i==857 || i==868) {
                gender= "fo";
            } else if (i==106 || i==107 || i==128 || i==236 || i==237 || i==313 || i==414 || i==538 || i==539 || i==627 || i==628 || i==678 || i==859 || i==860) {
                gender= "mo";
            } else if (i==100|| i==101 || i==120|| i==121|| i==132 || i==137 || i==151 || i==233 || i>=243 && i<=245 || i>=249 && i<=251 || i==292|| i==233 || i==337|| i==338|| i==343 || i==344 || i==374 || i==375 || i>=377 && i<=379 || i==385 || i==436|| i==437 || i==462|| i==474|| i>=480 && i<=484 || i==486 || i>=489 && i<=491 || i==494 || i>=599 && i<=601 || i==615 || i==622 || i==623 || i>=638 && i<=640 || i==643 || i==644 || i==703 || i==717 || i==721 || i==772 || i==781 || i>=785 && i<=799 || i>=802 && i<=808 || i==854 || i==855 || i==870 || i>=880 && i<=883 || i>=894 && i<=897) {
                gender= "uk";
            } else if (i==181 || i==199 || i==222 || i==248 || i==254 || i==260 || i==263 || i==264 || i==282 || i==302 || i==303 || i==306 || i==310 || i==319 || i==327 || i==334 || i==351 || i==354 || i==359 || i==362 || i==373 || i==428 || i==448 || i==531 || i==554 || i==555 || i==562 || i==569 || i==618 || i==658 || i==812 || i==870 || i==815 || i==818 || i==823 || i==826 || i==834 || i==839 || i==841 || i==844 || i==845 || i==851 || i==879 || i==884){
                forms= "standard";
                
            }
            else if (i==380 || i==858){
                gender= "fo";
                forms= "standard";
                
            }
            else if (i==381 || i==475 || i==861){
                gender= "mo";
                forms= "standard";
                
            }
            else if (i==376 || i>=382 && i<=384 || i==386 || i==479 || i==646 || i==649 || i==719 || i==800 || i==801 || i==809 || i==890 || i==893 || i==898){
                gender= "uk";
                forms= "standard";
                
            } 
            else if (i==201){
                gender= "uk";
                forms= "A";
                
            } else if (i==412){
                forms= "plant cloak";
                
            } else if (i==413){
                gender= "fo";
                forms= "plant cloak";
                
            } else if (i==421){
                forms= "overcast form";
                
            } else if (i==422 || i==423){
                forms= "west sea";
                
            } else if (i==487){
                gender= "uk";
                forms= "altered forme";
                
            } else if (i==492){
                gender= "uk";
                forms= "land forme";
                
            } else if (i==493 || i==773){
                gender= "uk";
                forms= "normal type";
                
            } else if (i==550){
                forms= "red-striped";
                
            } else if (i==585 || i==586){
                forms= "spring form";
                
            } else if (i==641 || i==642 || i==645){
                gender= "mo";
                forms= "incarnate forme";
                
            } else if (i==647){
                gender= "uk";
                forms= "ordinary form";
                
            } else if (i==648){
                gender= "uk";
                forms= "aria forme";
                
            } else if (i==666){
                forms= "icy snow";
                
            } else if (i>=669 && i<=671){
                gender= "fo";
                forms= "red flower";
                
            } else if (i==676){ 
                forms= "natural form";
                
            } else if (i==681){ 
                forms= "shield forme";
                
            } else if (i==710 || i==711){ 
                forms= "average size";
                
            } else if (i==716){ 
                gender= "uk";
                forms= "neutral mode";
                
            } else if (i==718){ 
                gender= "uk";
                forms= "50% forme";
                
            } else if (i==720){ 
                gender= "uk";
                forms= "confined";
                
            } else if (i==741){ 
                forms= "baile style";
                
            } else if (i==745){ 
                forms= "miday form";
                
            } else if (i==746){ 
                forms= "solo form";
                
            } else if (i==774){ 
                gender= "uk";
                forms= "core";
                zeros= "007";
                
            } else if (i==778){ 
                forms= "disguised form";
                
            } else if (i==849){ 
                forms= "amped form";
                
            } else if (i==869){ 
                gender= "fo";
                forms= "vanilla cream<br>strawberry sweet";
                
            } else if (i==875){  
                forms= "ice face";
                
            } else if (i==876){  
                gender= "mo";
                forms= "male";
                
            } else if (i==877){  
                forms= "full belly mode";
                
            } else if (i==888 || i==889){  
                gender= "uk";
                forms= "hero of<br>many battles";
                
            } else if (i==892){  
                forms= "single strike style";
                
            };
                    

            
            //modifiche eventuali ai nomi dell'array
            
            
            if(i==386){
                nome='<a class="f-name" href="">'+'Deoxys'+'</a>';
            }else if(i==413){
                nome='<a class="f-name" href="">'+'Wormadam'+'</a>';
            }else if(i==487){
                nome='<a class="f-name" href="">'+'Giratina'+'</a>';
            }else if(i==492){
                nome='<a class="f-name" href="">'+'Shaymin'+'</a>';
            }else if(i==550){
                nome='<a class="f-name" href="">'+'Basculin'+'</a>';
            }else if(i==555){
                nome='<a class="f-name" href="">'+'Darmanitan'+'</a>';
            }else if(i==641){
                nome='<a class="f-name" href="">'+'Tornadus'+'</a>';
            }else if(i==642){
                nome='<a class="f-name" href="">'+'Thundurus'+'</a>';
            }else if(i==645){
                nome='<a class="f-name" href="">'+'Landorus'+'</a>';
            }else if(i==647){
                nome='<a class="f-name" href="">'+'Keldeo'+'</a>';
            }else if(i==648){
                nome='<a class="f-name" href="">'+'Meloetta'+'</a>';
            }else if(i==669){
                nome='<a class="f-name" href="">'+'Flabébé'+'</a>';
            }else if(i==678){
                nome='<a class="f-name" href="">'+'Meowstic'+'</a>';
            }else if(i==681){
                nome='<a class="f-name" href="">'+'Aegislash'+'</a>';
            }else if(i==710){
                nome='<a class="f-name" href="">'+'Pumpkaboo'+'</a>';
            }else if(i==711){
                nome='<a class="f-name" href="">'+'Gourgeist'+'</a>';
            }else if(i==741){
                nome='<a class="f-name" href="">'+'Oricorio'+'</a>';
            }else if(i==745){
                nome='<a class="f-name" href="">'+'Lycanroc'+'</a>';
            }else if(i==746){
                nome='<a class="f-name" href="">'+'Wishiwashi'+'</a>';
            }else if(i==774){
                nome='<a class="f-name" href="">'+'Minior'+'</a>';
            }else if(i==778){
                nome='<a class="f-name" href="">'+'Mimikyu'+'</a>';
            }else if(i==849){
                nome='<a class="f-name" href="">'+'Toxtricity'+'</a>';
            }else if(i==875){
                nome='<a class="f-name" href="">'+'Eiscue'+'</a>';
            }else if(i==876){
                nome='<a class="f-name" href="">'+'Indeedee'+'</a>';
            }else if(i==888){
                nome='<a class="f-name" href="">'+'Zacian'+'</a>';
            }else if(i==889){
                nome='<a class="f-name" href="">'+'Zamazenta'+'</a>';
            }else if(i==892){
                nome='<a class="f-name" href="">'+'Urshifu'+'</a>';
            };

        
        if (i >= 1 && i <= 9) { 
            var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_000"+i+"_000_"+gender+"_n_00000000_f_n.png";
            var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_000"+i+"_000_"+gender+"_n_00000000_f_r.png";
            smurf='#00';
        } else if(i>=10 && i<=99){
            var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_00"+i+"_000_"+gender+"_n_00000000_f_n.png";
            var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_00"+i+"_000_"+gender+"_n_00000000_f_r.png";
            smurf='#0';
            
        }else if(i>=100 && i<=898){
            var sprite_n_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_"+zeros+"_"+gender+"_n_00000000_f_n.png";
            var sprite_s_url = "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0"+i+"_"+zeros+"_"+gender+"_n_00000000_f_r.png";
            smurf='#';
        };

          
        card+= 
                '<div class="f-card" id="'+i+'">'+
                    '<span class="f-sprite">'+
                        '<img class="f-normalimg" src="'+ sprite_n_url+'" alt="sprite">'+
                        '<img class="f-shinyimg" src="'+ sprite_s_url+'" alt="sprite-shiny">'+    
                    '</span>'+
                    '<br>'+
                    '<span class="text-muted">'+
                        '<small>'+smurf+i+'</small>'+
                        '<br>'+nome+ 
                        '<br>'+
                        muteBtn+
                    '</span>'+ 
                '</div>'+modallo; 

                //href="'+schedaLink+'"
                
                

                //'<a class="f-orms '+dropBtn+'" href="">'+forms+dropmenu+'</a>'
                //'<span class="f-orms">'+forms+dropmenu+'</span>'
                 
        
       
       
         
        }
        $('#nationalPokedex').html(card);
        // $('#kanto-btn').on('click', function() {
        
        //     $('.f-card').each(function(){
                

        //         $(this).toggleClass('d-none');
                
                
        //     });
        

        // }) ;
        

    });
});


