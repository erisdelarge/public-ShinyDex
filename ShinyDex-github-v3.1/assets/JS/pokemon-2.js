/*  POKE-API DOCS
<!-- api-url pokemon: https://pokeapi.co/api/v2/pokemon/94 getJSON (data)
    id: data.id
    name: data.name
    height: data.height (in decimeters)
    weight: data.weight (in hectograms)
    abilities=data.abilities; foreach abilities-> ability = abilities.ability; abltName = ability.name; hiddenAblt = abilities.is_hidden (false)
    baseForm: data.forms; foreach baseForm-> baseFormUrl = baseForm.url;
        { api-url pokemon forms: https://pokeapi.co/api/v2/pokemon-form/94/ getJSON (data)
        baseFormName = data.form_name
        baseFormMega = data.is_mega (false)
        baseFormTypes = data.types
        etc
        }
    stats: stats= data.stats; foreach stats-> baseStats= stats.base_stat; effort = stats.effort; statDetails= stats.stat; statName = statDetails.name
    sprites= data.sprites; otherSprites= sprites.other; offArtW=otherSprites.official-artwork; offArt=offArtW.front_default; homeSprites= otherSprites.home; homeDef= homeSprites.front_default; homeDefS = homeSprites.front_shiny; homeFem=homeSprites.front_female; homeFemS=homeSprites.front_shiny_female;
    types: data.types; foreach types-> typeDetails = types.type; typeName = type.name-->
    <!-- api-url pokemon specie: https://pokeapi.co/api/v2/pokemon-species/94/ getJSON (data)
    color= data.color; colorName= color.name
    eggGroups: data.egg_groups; eggGroup = eggGroups.name
    evoChain: data.evolution_chain; evoUrl = evoChain.url
    gender= data.gender_rate (chance of this Pmn being female, in eighths:  -1 = genderless. 0=male.  8=female.  4 = 50/50.  1 = 7:1, male 88.10% fem 11.90%.  2= 3:1. male 75.40% fem 24.60%.  6= 1:3, male 24.60% fem 75.40%.  7= 1:7, male 11.11% fem 88.89% <-es. Litleo )
    genderDiff = data.has_gender_differences (boolean)
    baby= data.is_baby (boolean)
    leggo= data.is_legendary (boolean)
    myth= data.is_mythical (boolean)
    shape = data.shape; shapeName = shape.name (there's no img-url)
    id = data.id
    name = data.name
    altNames = data.names; foreach altNames-> lang = altNames.language; langName = lang.name (es jp is "ja-Hrkt"); langPmname = altNames.name (es in jp is "ゲンガー") // the only altNames I care is "ja-Hrkt" (altNames[0], langPmname = "ゲンガー") and "roomaji" (altNames[1], langPmname = "Gangar") //
    forms = data.varieties; foreach forms-> normalForm = forms[0].is_default (true); formPmn = forms.pokemon; formPmnName = formPmn.name; formPmnUrl = formPmn.url;
        { api-url pokemon varieties: https://pokeapi.co/api/v2/pokemon/10038/ getJSON (data)
        abilities = data.abilities (idem come x le abilities della base form)
        form = data.forms; formName = form.name
        formHeight = data.height
        formStats = data.stats (idem come x le stats della base form)
        formTypes = data.types (idem come x le types della base form)
        formWeight = data.weight
        }
    descr: data.flavor_text_entries; foreach descr-> text = descr.flavor_text;
    textVer = descr.version //the only descr I care is descr[0] (the first pokedex description for that pokemon, in this case: textVer = "red") //
    species: data.genera; foreach species-> specie = species.genus; specieLang = specie.language; specieLangName = specieLang.name // I only care about english specie (specieLangName = "en", in this case specie = "Shadow Pokémon")-->
    <!-- api-url en language: https://pokeapi.co/api/v2/language/9/ -->
<!-- api-url evo chain: https://pokeapi.co/api/v2/evolution-chain/40 --> */

//!!!  COLORI x le STATS:
// red <30 
// orange <60
// yellow <90
// green <120
// darkgreen <150
// emeraldblue <=180

//white spaces in HTMLcode--> &nbsp;

//scrivi a groudon che è razzista

// / !  remember to add Hisuian forms for pokemons (like electrode, sneasel etc)

$(document).ready(function(){

    // showProducts();

    // when a 'read products' button was clicked
    $(document).on('click', '.f-name', function(){
        
        // showProducts();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        console.log(id);
        console.log(name);
        let nameUC = capitalize(name);
        $("#myTitle").html(nameUC);
        console.log("name UC: "+nameUC);
        // $("#shinydex-app").html(nameUC);
        var mypokemonProfile="";


        $.getJSON("https://pokeapi.co/api/v2/pokemon/"+id, function(data) {
                    
                    
            var pokeTypes =data.types;
            console.log("number of types: "+pokeTypes.length);
            // const typeColors=[
            //     "#ffee05",
            //     "#6647b8",
            //     "#9f60e1"
            // ];
            if(pokeTypes.length === 1){
                var typeSlot= pokeTypes[0].type;
                var typeName= typeSlot.name;
                //   var typeColor="#000000";
                //   if(typeName=="electric"){
                //       typeColor=typeColors[0];
                //   }else if(typeName=="ghost"){
                //     typeColor=typeColors[1];
                // }else if(typeName=="poison"){
                //     typeColor=typeColors[2];
                // };
                let typeColor = getTypeColor(typeName);
                var types=`<div class="f-type f-type0 col-12 text-center"><span style="background-color: `+typeColor+`;">`+capitalize(typeName)+`</span></div>`;

            }  else if(pokeTypes.length === 2){
                var typeSlotUno=pokeTypes[0].type;
                var typeSlotDue=pokeTypes[1].type;
                var typeNameUno= typeSlotUno.name;
                let typeColorUno = getTypeColor(typeNameUno);
                var typeNameDue= typeSlotDue.name;
                let typeColorDue = getTypeColor(typeNameDue);
                var types=`<div class="f-type f-type1 col-6 text-end"><span style="background-color: `+typeColorUno+`;">`+capitalize(typeNameUno)+`</span></div>
                <div class="f-type f-type2 col-6 text-start"><span style="background-color: `+typeColorDue+`;">`+capitalize(typeNameDue)+`</span></div>`;
            }else{var types=`<div class="f-type f-type0 col-12 text-center"><span>`+`Neutral`+`</span></div>`;};
                // var name= data.name;
                // let nameUPC = name[0].toUpperCase() + name.substring(1);
                // $("#myTitle").html(nameUC);
                var sprites= data.sprites; var otherSprites= sprites.other;
                var offArtW=otherSprites["official-artwork"]; var offArt=offArtW.front_default; var homeSprites= otherSprites.home; var homeDef= homeSprites.front_default; var homeDefS = homeSprites.front_shiny; var homeFem=homeSprites.front_female; var homeFemS=homeSprites.front_shiny_female;

                var abilities=data.abilities;
                if (abilities.length===1){
                    var ability= abilities[0].ability;
                    var ablt =ability.name;
                    var abltr= ablt.replace('-', ' ');
                    var abltStatus =ability.is_hidden;
                    // if(abltStatus===false){
                        var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalizeAll(abltr)+`</p> <span class="text-muted">Abilities</span> </div>
                    <div class="col-6 col-lg-auto px-lg-5"><p>// </p><span class="text-muted">Hidden abilities</span> </div>`;

                    // }else{
                    //     var abltCard=`<div class="col-6 f-ablt-col"><p>//</p> <span class="text-muted">Abilities</span> </div>
                    // <div class="col-6  "><p>(`+capitalize(abltr)+`)</p><span class="text-muted">Hidden abilities</span> </div>`;

                    // }

                }else if(abilities.length===2){
                    var abilityOne =abilities[0].ability;
                    var abltOne =abilityOne.name;
                    var abltOner= abltOne.replace('-', ' ');
                    // var abltOneStatus =abilityOne.is_hidden;
                    var abilityTwo =abilities[1].ability;
                    var abltTwo =abilityTwo.name;
                    var abltTwor= abltTwo.replace('-', ' ');
                    var abltTwoStatus =abilityTwo.is_hidden;
                    if (abltTwoStatus===false){
                        // nn worka nn legge il false. unico pkmn che su bulbapedia ha 2 abilities e 0 hidden è zygarde 50%
                        var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalizeAll(abltOner)+` | `+capitalizeAll(abltTwor)+`</p> <span class="text-muted">Abilities</span> </div>
                    <div class="col-6 col-lg-auto px-lg-5"><p>// </p><span class="text-muted">Hidden abilities</span> </div>`;

                    }else{
                        var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalizeAll(abltOner)+`</p> <span class="text-muted">Abilities</span> </div>
                    <div class="col-6 col-lg-auto px-lg-5"><p>(`+capitalizeAll(abltTwor)+`) </p><span class="text-muted">Hidden abilities</span> </div>`;

                    }

                }else if(abilities.length===3){
                    var abilOne =abilities[0].ability;
                    var ab1 =abilOne.name;
                    var ab1r =ab1.replace('-', ' ');
                    var abilTwo =abilities[1].ability;
                    var ab2 =abilTwo.name;
                    var ab2r =ab2.replace('-', ' ');
                    var abilThree =abilities[2].ability;
                    var ab3 =abilThree.name;
                    var ab3r =ab3.replace('-', ' ');
                    var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalizeAll(ab1r)+` | `+capitalizeAll(ab2r)+`</p> <span class="text-muted">Abilities</span> </div>
                    <div class="col-6 col-lg-auto px-lg-5"><p>(`+capitalizeAll(ab3r) +`)</p><span class="text-muted">Hidden abilities</span> </div>`;
                };


                var dmheight = data.height;
                var mtheight = zeroPad(dmheight/10,2);
                var cmheight = zeroPad(dmheight*10,2);
                // 4'11"
                var ftheight =cmToFeet(cmheight);
                var hgweight= data.weight;
                var kgweight=zeroPad(hgweight/10,2);

                var pmnStats= data.stats;
                var pmnHP = pmnStats[0].base_stat;
                var pmnAtk = pmnStats[1].base_stat;
                var pmnDef = pmnStats[2].base_stat;
                var pmnSPatk = pmnStats[3].base_stat;
                var pmnSPdef = pmnStats[4].base_stat;
                var pmnSPeed = pmnStats[5].base_stat;
                var totBaseStats= pmnHP + pmnAtk + pmnDef + pmnSPatk + pmnSPdef+ pmnSPeed;

            $.getJSON("https://pokeapi.co/api/v2/pokemon-species/"+id, function(json) {
                var bgcolor=json.color;
                var background=`<img src="assets/img/bg/bg-`+bgcolor.name+`.png" class="card-img-top" alt="pokemon-background">`;
                var altNames = json.names; 
                // foreach altNames-> 
                var jahrktName = altNames[0].name;
                // (es jp is "ja-Hrkt"); 
                var roomajiName = altNames[1].name;
                // ビリリダマ 
                // (es in jp is "ゲンガー") 
                // the only altNames I care is "ja-Hrkt" (altNames[0], langPmname = "ゲンガー") and "roomaji" (altNames[1], langPmname = "Gangar") //

                // pmn category name:
                var genera = json.genera;
                for(i=0; i<genera.length; i++){
                    
                    var generaLanguage=genera[i].language;
                    var generaLang=generaLanguage.name;
                    
                    if(generaLang=="en"){
                        var genus=genera[i].genus;
                       
                        break;
                    }
                    
                }
                // var genus= genera[7].genus;
                console.log("pokemon generais: "+genus);
                var generaSplit= genus.split(" ");
                var genusPokemon=generaSplit.slice(0,-1);
                console.log("pokemongenus is: "+genusPokemon);
                var genusPmn= genusPokemon.toString();
                var categoryPmn= genusPmn.replace(","," ");
                console.log("pokemon category is: "+categoryPmn);
                var genderText= "unset";
                var genderData=[50, 50];
                var bgColorGender='rgb(0, 0, 0)';
                

                // pmn gender rate:
                var gender= json.gender_rate;
                if (gender===1){
                    var genderText= "7 : 1";
                    var genderData=[11.90, 88.10];
                    var bgColorGender= [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                        ];
                        

                }else if (gender===2){
                    var genderText= "3 : 1";
                    var genderData=[24.60, 75.40];
                    var bgColorGender= [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                        ];
                    

                }else if(gender===4){
                    var genderText= "1 : 1";
                    var genderData=[50, 50];
                    var bgColorGender= [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                        ];
                    

                }else if(gender===6){
                    var genderText= "1 : 3";
                    var genderData=[75.40, 24.60];
                    var bgColorGender= [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                        ];
                    

                }else if(gender===7){
                    var genderText= "1 : 7";
                    var genderData=[88.89, 11.11];
                    var bgColorGender= [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                        ];
                    
                }else if(gender===8){
                    var genderText= "100%";
                    var genderData=[100];
                    var bgColorGender= [
                        'rgb(255, 99, 132)'
                        ];
                    

                }else if(gender===0){
                    var genderText= "100%";
                    var genderData=[100];
                    var bgColorGender= [
                        
                        'rgb(54, 162, 235)'
                        ];
                    
                }else if (gender=== -1){
                    var genderText= "?";
                    var genderData=[100];
                    var bgColorGender= [
                        'rgb(192, 192, 192)'
                        ];
                    

                };

                var pokeDescr= json.flavor_text_entries;
                
                for(i=0; i<pokeDescr.length; i++){
                    
                    var descrLanguage=pokeDescr[i].language;
                    var descrLang=descrLanguage.name;
                    
                    if(descrLang=="en"){
                        var descr=pokeDescr[i].flavor_text;
                        var descrVersion=pokeDescr[i].version;
                        var descrVer=descrVersion.name;
                        break;
                    }
                    
                }
                // var descr=pokeDescr[0].flavor_text;
                // var descrVersion=pokeDescr[0].version;
                // var descrVer=descrVersion.name;

                // var descrVers=descrVersion.name;
                // var descrVer= descrVers.replace(/[\u00A0-\uffff]/gu, " ");
               

                var evoChain= json.evolution_chain;
                var evoChainUrl=evoChain.url;
               
                // var evoCard = getEvoChain(evoChainUrl);
                // console.log("this is the evo card: " + evoCard);
                $.getJSON(evoChainUrl, function(jsonObj) {

                    var evoChainUrlNumber=evoChainUrl.replace("https://pokeapi.co/api/v2/evolution-chain/", "");
                    var evoChainUrlN=evoChainUrlNumber.replace("/", "");

                    //burmy-wormadam-mothim, evochain: 213 change form bc of cloak   <--NOT DONE BUT IT'S OK
                    //nincada-ninjask-shedinja evo chain: 144 trigger name: shed   <--DONE                   
                    //cosmog-cosmoem-solgaleo/lunala evoChain: 413  <-- NOT DONE BUT IT'S OK.
                    //milcery-alcremie evo chain: 452 trigger name: spin holding a Sweet (details: //Vanilla Cream- Spin clockwise for less than 5 seconds during the day.	Ruby Cream-	Spin counterclockwise for less than 5 seconds during the day. Matcha Cream-	Spin clockwise for less than 5 seconds at night. Mint Cream- Spin counterclockwise for more than 5 seconds at night. Lemon Cream- Spin clockwise for more than 5 seconds at night. Salted Cream- Spin counterclockwise for less than 5 seconds at night. Ruby Swirl- Spin counterclockwise for more than 5 seconds during the day. Caramel Swirl- Spin clockwise for more than 5 seconds during the day. Rainbow Swirl- Spin counterclockwise for more than 10 seconds between 7:00 PM and 7:59 PM in-game time.
                    // Each form has seven further minor forms based on the Sweet used to evolve it: strawberry, berry, love, star, clover, flower, ribbon)   <-- DONE.
                    //kubfu-urshifu evo chain: 470 trigger: towers of two fists
                    //(single strike style: Interact with Scroll of Darkness; rapid strike style: Interact with Scroll of Waters) <-- DONE.
                    //check pmn which evolves into specific locations (Charjabug ec 379, Magneton ec 34, Nosepass ec 147 , Crabrawler Eevee)    <-- DONE.
                    //feebas-milotic evo chain: 178, JSON file report 2 level-up with beauty, one at lv 171 and the other at 170. delete the first of em.  <-- DONE.
                    //meltan-melmetal are considered by PokeAPI unique solo forms w an evochain different from the other one's (ec 428 - 429)   <-- DONE.
                    //sinistea-polteageist, evochain 449 are considered by PokeAPI w only phony form (evolve w cracked pot)

                    if (evoChainUrlN==7 || evoChainUrlN==10 ||evoChainUrlN==11 || evoChainUrlN==15 || evoChainUrlN==21 || evoChainUrlN==22 || evoChainUrlN==31 || evoChainUrlN==32 || evoChainUrlN==33 || evoChainUrlN==34 || evoChainUrlN==35 || evoChainUrlN==38 || evoChainUrlN==45 || evoChainUrlN==46 || evoChainUrlN==49 || evoChainUrlN==57 || evoChainUrlN==113 || evoChainUrlN==144 || evoChainUrlN==147 || evoChainUrlN==178 || evoChainUrlN==282 || evoChainUrlN==287 || evoChainUrlN==379 || evoChainUrlN==383 || evoChainUrlN==428 || evoChainUrlN==429 || evoChainUrlN==449 || evoChainUrlN==452 || evoChainUrlN==470){
                       var evoCard= getUnusualEvoChain(evoChainUrl, evoChainUrlN);
                       console.log("this is a particular evoChain")
                    }else{
                        console.log("no unusual evo chain found: "+ evoChainUrlN)
                   
                    

                    var chain= jsonObj.chain;
                    var baseEvo=chain.species;
                    var baseEvoName = baseEvo.name;
                    var baseEvoSpecieUrl=baseEvo.url;
                    var baseEvoUrl= baseEvoSpecieUrl.replace("-species", "");
                    console.log("this is base evo url: "+baseEvoUrl);

                    var baseEvoId = "";
                    var baseEvoArt="";
                        $.ajax({
                        url: baseEvoUrl,
                        async: false,
                        dataType: 'json',
                        success: function (json) {
                            baseEvoId = json.id;
                            baseSprites=json.sprites;
                            baseOthers=baseSprites.other;
                            baseOffArt=baseOthers["official-artwork"];
                            baseEvoArt=baseOffArt.front_default;
                        }
                        });
                        console.log("my first evo id: "+baseEvoId);

                    // $.getJSON(baseEvoUrl, function(json) {
                        // var baseEvoId= json.id;
                        // var baseEvoSprites =json.sprites;
                        // var baseEvoOtherSprites=baseEvoSprites.other;
                        // var baseEvoOffArt=baseEvoOtherSprites["official-artwork"];
                        // var baseEvoArt= baseEvoOffArt.front_default;
                        // console.log("this is base evo id: " +baseEvoId);
                        // console.log("this is base evo sprite art url: " +baseEvoArt);

                        //     console.log("evochain base: "+baseEvoName);
                            var evo1= chain.evolves_to;
                            if (evo1.length===0){
                                //evolution chain with ONLY BASE form.
                                //(es. Dunsparce)
                                console.log("evochain with only base form");
                                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                <p>Evolution Line:</p>
                                <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>                                    
                                </div>
                            </div>`;
                            
                            }else if(evo1.length===1){
                                //evolution chain with ONLY ONE first stadium form.   
                                var firstEvo=evo1[0].species;
                                var firstEvoMon= firstEvo.name;
                                console.log("evochain first stadium, 1° evomon: "+firstEvoMon);
                                var firstEvoSpecieUrl=firstEvo.url;
                                var firstEvoUrl= firstEvoSpecieUrl.replace("-species", "");
                                console.log("this is first evo url: "+firstEvoUrl);
                                var firstEvoId = "";
                                var firstEvoArt="";
                                    $.ajax({
                                    url: firstEvoUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        firstEvoId = json.id;
                                        firstEvoSprites=json.sprites;
                                        firstEvoOthers=firstEvoSprites.other;
                                        firstEvoOffArt=firstEvoOthers["official-artwork"];
                                        firstEvoArt=firstEvoOffArt.front_default;
                                    }
                                    });
                                    console.log("my first evo id: "+firstEvoId);

                                    var evoSpan=`<span class="d-flex flex-column col-2 col-xl-1 p-0">
                                    <small>Lv 25</small><i class="fa-solid fa-share"></i></span>`;
                                    let evoDetails=evo1[0].evolution_details;
                                    var evoSpans=`<span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">`;

                                    for(let i = 0; i < evoDetails.length; i++){
                                        
                                        let detailsTrigger=evoDetails[i].trigger;
                                        let detailsTrig=detailsTrigger.name;
                                        console.log("1evo-trigger: "+detailsTrig)
                                            var gender=evoDetails[i].gender;
                                            var held_item=evoDetails[i].held_item;
                                            var item=evoDetails[i].item;
                                            var known_move=evoDetails[i].known_move;
                                            var known_move_type=evoDetails[i].known_move_type;
                                            var location=evoDetails[i].location;
                                            var min_affection=evoDetails[i].min_affection;
                                            var min_beauty=evoDetails[i].min_beauty;
                                            var min_happiness=evoDetails[i].min_happiness;
                                            var min_level=evoDetails[i].min_level;
                                            var needs_overworld_rain=evoDetails[i].needs_overworld_rain;
                                            var party_species=evoDetails[i].party_species;
                                            var party_type=evoDetails[i].party_type;
                                            var relative_physical_stats=evoDetails[i].relative_physical_stats;
                                            var time_of_day=evoDetails[i].time_of_day;
                                            var trade_species=evoDetails[i].trade_species;
                                            var turn_upside_down=evoDetails[i].turn_upside_down;
                                            var conditions=[];
                                            if(min_level>=1 && min_level<=100) {console.log("levelup: "+ min_level + "+");
                                             var minLv=`Lv `+min_level+`+`;
                                            } else{minLv=`Level-up`;} 
                                            if(location!=null){lugar=location.name;luogo=lugar.replace("-"," ");place="in "+capitalizeAll(luogo);console.log("this is the location for the evolution: "+place);conditions.push(place)}else{place=""}  
                                            if(held_item!=null){heldItem=held_item.name;heldItem=heldItem.replace("-"," ");hItem="holding "+capitalizeAll(heldItem);
                                            console.log("this is the item held for the evolution: "+hItem); conditions.push(hItem)}else{hItem=""}  
                                            if(party_species!=null){partySpecies=party_species.name;ptySpecies=capitalize(partySpecies);pSpecies="with "+ptySpecies+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies); conditions.push(pSpecies)}else{pSpecies=""}  
                                            if(trade_species!=null){tradeSpecies=trade_species.name;tdeSpecies=capitalize(tradeSpecies);tSpecies="for a "+tdeSpecies;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies); conditions.push(tSpecies)}else{tSpecies=""}  
                                            if(party_type!=null){partyType=party_type.name;ptyType=capitalize(partyType);pType="with a "+ptyType+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType); conditions.push(pType)}else{pType=""}  
                                            if(item!=null){console.log("this is the item near which pmn can evolve: "+item)}  
                                            if(time_of_day=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day);day=time_of_day; conditions.push(day)}else{day=""}  
                                            if(time_of_day=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day);night=time_of_day; conditions.push(night)}else{night=""}
                                             
                                            if(known_move!=null){console.log("this is the known move for the evolution: "+known_move); knownMove=known_move.name; knowMove=knownMove.replace("-"," "); knwMove="knowing "+capitalizeAll(knowMove);conditions.push(knwMove)}else{knwMove=""}  
                                            if(known_move_type!=null){console.log("this is the known move type for the evolution: "+known_move_type)}  
                                            if(min_affection!=null){console.log("this is the minimum affection lv required for the evolution: "+min_affection); affect= "affection lv: "+min_affection; conditions.push(affect)} else{affect="";}  
                                            if(min_happiness!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness); happi= "high friendship<br>(min. happiness: "+min_happiness+")";conditions.push(happi)} else{happi="";} 
                                            if(min_beauty!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty); beauty= "high beauty<br>(min. beauty: "+min_beauty+")";conditions.push(beauty)} else{beauty="";} 
                                            if(gender==1){console.log("this is the gender♀ for the evolution: "+gender); genre1="female"; conditions.push(genre1)}else{genre1=""}  
                                            if(gender==2){console.log("this is the gender♂ for the evolution: "+gender); genre2="male"; conditions.push(genre2)}else{genre2=""} 
                                            if(turn_upside_down==true){console.log("this is inkay/malamar evolution");
                                            upsideDown="hold game system upside-down"; conditions.push(upsideDown)}else{upsideDown=""} 
                                            if(needs_overworld_rain==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain="while rainy or foggy"; conditions.push(owRain)}else{owRain=""} 
                                            
                                         
                                         conditions= conditions.toString();
                                         conditions=conditions.replace(",","<br>")
                                          
                                         console.log(conditions) ; 
                                            
                                        if (detailsTrig=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails.length-1)){
                                                evoSpan=`
                                                <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{evoSpan=`
                                            <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}

                                        }else if (detailsTrig=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails.length-1)){ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
   
                                        }else if (detailsTrig=="use-item"){
                                            console.log("next item!!");
                                            let nextItem= item.name;
                                            let nItem=nextItem.replace("-"," ");
                                            nItem=capitalizeAll(nItem);
                                            if(i==(evoDetails.length-1)){   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans+=evoSpan;
                                        
                                    };



                                var evo2= evo1[0].evolves_to;
                                if(evo2.length===0){console.log("evochain with no 2° evo form");
                                //evo chain with !! only one !! first stadium forms, and NO second stadiums.
                                //(es. Sandygast, Palossand)
                                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                        <p>Evolution Line:</p>
                                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                            `+evoSpans+`</span>
                                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                            
                                        </div>
                                    </div>`;
                            
                                }else if(evo2.length===1){
                                    //evo chain with !! only one !! first stadium forms, and ONLY ONE ! second stadium.
                                    //(es. Gastly, Haunter, Gengar)
                                    var evostadium2= evo2[0].species;
                                    var evoSt2=evostadium2.name;
                                    console.log("evochain second stadium, 1° evomon: "+evoSt2);


                                    var evoStadium2Url=evostadium2.url;
                                    var evoSt2Url= evoStadium2Url.replace("-species", "");
                                    
                                    var evoSt2Id = "";
                                    var evoSt2Art="";
                                        $.ajax({
                                        url: evoSt2Url,
                                        async: false,
                                        dataType: 'json',
                                        success: function (json) {
                                            evoSt2Id = json.id;
                                            evoSt2Sprites=json.sprites;
                                            evoSt2Others=evoSt2Sprites.other;
                                            evoSt2OffArt=evoSt2Others["official-artwork"];
                                            evoSt2Art=evoSt2OffArt.front_default;
                                        }
                                        });
                                        

                                        var evoSpanfinalEvo=`<span class="d-flex flex-column col-2 col-xl-1 p-0">
                                    <small>Lv 25</small><i class="fa-solid fa-share"></i></span>`;
                                    let evoDetailsfinalEvo=evo2[0].evolution_details;
                                    var evoSpansfinalEvo=`<span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">`;

                                    for(let i = 0; i < evoDetailsfinalEvo.length; i++){
                                        
                                        let detailsTriggerfinalEvo=evoDetailsfinalEvo[i].trigger;
                                        let detailsTrigfinalEvo=detailsTriggerfinalEvo.name;
                                        console.log("1evo-trigger: "+detailsTrigfinalEvo)
                                            var genderfinalEvo=evoDetailsfinalEvo[i].gender;
                                            var held_itemfinalEvo=evoDetailsfinalEvo[i].held_item;
                                            var itemfinalEvo=evoDetailsfinalEvo[i].item;
                                            var known_movefinalEvo=evoDetailsfinalEvo[i].known_move;
                                            var known_move_typefinalEvo=evoDetailsfinalEvo[i].known_move_type;
                                            var locationfinalEvo=evoDetailsfinalEvo[i].location;
                                            var min_affectionfinalEvo=evoDetailsfinalEvo[i].min_affection;
                                            var min_beautyfinalEvo=evoDetailsfinalEvo[i].min_beauty;
                                            var min_happinessfinalEvo=evoDetailsfinalEvo[i].min_happiness;
                                            var min_levelfinalEvo=evoDetailsfinalEvo[i].min_level;
                                            var needs_overworld_rainfinalEvo=evoDetailsfinalEvo[i].needs_overworld_rain;
                                            var party_speciesfinalEvo=evoDetailsfinalEvo[i].party_species;
                                            var party_typefinalEvo=evoDetailsfinalEvo[i].party_type;
                                            var relative_physical_statsfinalEvo=evoDetailsfinalEvo[i].relative_physical_stats;
                                            var time_of_dayfinalEvo=evoDetailsfinalEvo[i].time_of_day;
                                            var trade_speciesfinalEvo=evoDetailsfinalEvo[i].trade_species;
                                            var turn_upside_downfinalEvo=evoDetailsfinalEvo[i].turn_upside_down;
                                            var conditionsfinalEvo=[];
                                            if(min_levelfinalEvo>=1 && min_levelfinalEvo<=100) {console.log("levelup: "+ min_levelfinalEvo + "+");
                                             var minLvfinalEvo=`Lv `+min_levelfinalEvo+`+`;
                                            } else{minLvfinalEvo=`Level-up`;} 
                                            if(locationfinalEvo!=null){lugarfinalEvo=locationfinalEvo.name;luogofinalEvo=lugarfinalEvo.replace("-"," ");placefinalEvo="in "+capitalizeAll(luogofinalEvo);console.log("this is the location for the evolution: "+placefinalEvo);conditionsfinalEvo.push(placefinalEvo)}else{placefinalEvo=""}  
                                            if(held_itemfinalEvo!=null){heldItemfinalEvo=held_itemfinalEvo.name;heldItemfinalEvo=heldItemfinalEvo.replace("-"," ");hItemfinalEvo="holding "+capitalizeAll(heldItemfinalEvo);
                                            console.log("this is the item held for the evolution: "+hItemfinalEvo); conditionsfinalEvo.push(hItemfinalEvo)}else{hItemfinalEvo=""}  
                                            if(itemfinalEvo!=null){console.log("this is the item near which pmn can evolve: "+itemfinalEvo)}  
                                            if(party_speciesfinalEvo!=null){partySpeciesfinEvo=party_speciesfinalEvo.name;ptySpeciesfinEvo=capitalize(partySpeciesfinEvo);pSpeciesfinEvo="with "+ptySpeciesfinEvo+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpeciesfinEvo); conditionsfinalEvo.push(pSpeciesfinEvo)}else{pSpeciesfinEvo=""}
                                            if(trade_speciesfinalEvo!=null){tradeSpeciesfinalEvo=trade_speciesfinalEvo.name;tdeSpeciesfinalEvo=capitalize(tradeSpeciesfinalEvo);tSpeciesfinalEvo="for a "+tdeSpeciesfinalEvo;
                                            console.log("this is the species to trade for the evolution: "+tdeSpeciesfinalEvo); conditionsfinalEvo.push(tSpeciesfinalEvo)}else{tSpeciesfinalEvo=""}  
                                            if(party_typefinalEvo!=null){partyTypefinalEvo=party_typefinalEvo.name;ptyTypefinalEvo=capitalize(partyTypefinalEvo);pTypefinalEvo="with a "+ptyTypefinalEvo+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyTypefinalEvo); conditionsfinalEvo.push(pTypefinalEvo)}else{pTypefinalEvo=""}
                                            if(time_of_dayfinalEvo=="day"){console.log("this is the item near which pmn can evolve: "+time_of_dayfinalEvo);dayfinalEvo=time_of_dayfinalEvo; conditionsfinalEvo.push(dayfinalEvo)}else{dayfinalEvo=""}  
                                            if(time_of_dayfinalEvo=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_dayfinalEvo);nightfinalEvo=time_of_dayfinalEvo; conditionsfinalEvo.push(nightfinalEvo)}else{nightfinalEvo=""}
                                            if(known_movefinalEvo!=null){console.log("this is the known move for the evolution: "+known_movefinalEvo); knownMovefinalEvo=known_movefinalEvo.name; knowMovefinalEvo=knownMovefinalEvo.replace("-"," "); knwMovefinalEvo="knowing "+capitalizeAll(knowMovefinalEvo);conditionsfinalEvo.push(knwMovefinalEvo)}else{knwMovefinalEvo=""}  
                                            if(known_move_typefinalEvo!=null){console.log("this is the known move type for the evolution: "+known_move_typefinalEvo)}  
                                            if(min_affectionfinalEvo!=null){console.log("this is the minimum affection required for the evolution: "+min_affectionfinalEvo); affectfinalEvo= "affection lv: "+min_affectionfinalEvo; conditionsfinalEvo.push(affectfinalEvo)} else{affectfinalEvo="";}
                                            if(min_happinessfinalEvo!=null){console.log("this is the minimum happiness required for the evolution: "+min_happinessfinalEvo); happifinalEvo= "high friendship<br>(min. happiness: "+min_happinessfinalEvo+")";conditionsfinalEvo.push(happifinalEvo)} else{happifinalEvo="";}
                                            if(min_beautyfinalEvo!=null){console.log("this is the minimum beauty required for the evolution: "+min_beautyfinalEvo); beautyfinEvo= "high beauty<br>(min. beauty: "+min_beautyfinalEvo+")";conditionsfinalEvo.push(beautyfinEvo)} else{beautyfinEvo="";}    
                                            if(genderfinalEvo==1){console.log("this is the gender♀ for the evolution: "+genderfinalEvo); genre1finalEvo="female"; conditionsfinalEvo.push(genre1finalEvo)}else{genre1finalEvo=""}  
                                            if(genderfinalEvo==2){console.log("this is the gender♂ for the evolution: "+genderfinalEvo); genre2finalEvo="male"; conditionsfinalEvo.push(genre2finalEvo)}else{genre2finalEvo=""} 
                                            if(turn_upside_downfinalEvo==true){console.log("this is inkay/malamar evolution");
                                            upsideDownfinalEvo="hold game system upside-down"; conditionsfinalEvo.push(upsideDownfinalEvo)}else{upsideDownfinalEvo=""}
                                            if(needs_overworld_rainfinalEvo==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRainfinalEvo="while rainy or foggy"; conditionsfinalEvo.push(owRainfinalEvo)}else{owRainfinalEvo=""}  
                                            
                                         
                                         conditionsfinalEvo= conditionsfinalEvo.toString();
                                         conditionsfinalEvo=conditionsfinalEvo.replace(",","<br>")
                                          
                                         console.log(conditionsfinalEvo) ; 
                                            
                                        if (detailsTrigfinalEvo=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetailsfinalEvo.length-1)){
                                                evoSpanfinalEvo=`
                                                <small>`+minLvfinalEvo+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditionsfinalEvo+`</small>`;
                                            }else{evoSpanfinalEvo=`
                                            <small>`+minLvfinalEvo+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditionsfinalEvo+`</small>`;}

                                        }else if (detailsTrigfinalEvo=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetailsfinalEvo.length-1)){ evoSpanfinalEvo=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditionsfinalEvo+`</small>`;
                                            }else{ evoSpanfinalEvo=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditionsfinalEvo+`</small>`;}
   
                                        }else if (detailsTrigfinalEvo=="use-item"){
                                            console.log("next item!!");
                                            let nextItemfinalEvo= itemfinalEvo.name;
                                            let nItemfinalEvo=nextItemfinalEvo.replace("-"," ");
                                            nItemfinalEvo=capitalizeAll(nItemfinalEvo);
                                            if(i==(evoDetailsfinalEvo.length-1)){   evoSpanfinalEvo=`
                                            <small>`+nItemfinalEvo+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditionsfinalEvo+`</small>`;
                                            }else{   evoSpanfinalEvo=`
                                            <small>`+nItemfinalEvo+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditionsfinalEvo+`</small>`;}
                                         
                                            
                                        }
                                        evoSpansfinalEvo+=evoSpanfinalEvo;
                                        
                                    };


                                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                    <p>Evolution Line:</p>
                                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                            `+evoSpans+`</span>
                                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                            `+evoSpansfinalEvo+`</span>
                                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span></div>
                                        </div>
                                    </div>`;
                                
                                }else if(evo2.length===2){
                                    //evo chain with !! only one !! first stadium forms, and ! TWO !! second stadiums.
                                    //(es Oddish, Gloom, Bellossom/Vileplume  opp.  Poliwag, Poliwhirl, Poliwrath/Politoed)
                                    let firstEvostadium2= evo2[0].species;
                                    let firstSt2=firstEvostadium2.name;
                                    console.log("evochain second stadium, 1° evomon: "+firstSt2);
                                    let secondEvostadium2= evo2[1].species;
                                    let secondSt2=secondEvostadium2.name;
                                    console.log("evochain second stadium, 2° evomon: "+secondSt2);


                                    let firstStadium2Url=firstEvostadium2.url;
                                    let firstSt2Url= firstStadium2Url.replace("-species", "");
                                    
                                    let firstSt2Id = "";
                                    let firstSt2Art="";
                                        $.ajax({
                                        url: firstSt2Url,
                                        async: false,
                                        dataType: 'json',
                                        success: function (json) {
                                            firstSt2Id = json.id;
                                            firstSt2Sprites=json.sprites;
                                            firstSt2Others=firstSt2Sprites.other;
                                            firstSt2OffArt=firstSt2Others["official-artwork"];
                                            firstSt2Art=firstSt2OffArt.front_default;
                                        }
                                        });
                                    let secondStadium2Url=secondEvostadium2.url;
                                    let secondSt2Url= secondStadium2Url.replace("-species", "");
                                    
                                    let secondSt2Id = "";
                                    let secondSt2Art="";
                                        $.ajax({
                                        url: secondSt2Url,
                                        async: false,
                                        dataType: 'json',
                                        success: function (json) {
                                            secondSt2Id = json.id;
                                            secondSt2Sprites=json.sprites;
                                            secondSt2Others=secondSt2Sprites.other;
                                            secondSt2OffArt=secondSt2Others["official-artwork"];
                                            secondSt2Art=secondSt2OffArt.front_default;
                                        }
                                        });





                                        var evoSpan1st=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                        <small>Lv 25</small><i class="fa-solid fa-share pb-5"></i><small class="pt-5">Trade</small><i class="fa-solid fa-share"></i></span>`;
                                        
                                        //evo details for the 2 evo first form
                                        let evoDetails1st=evo2[0].evolution_details;
                                        var evoSpans1st=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                        <span class="pb-3 d-flex flex-column align-self-center">`;
    
                                        for(let i = 0; i < evoDetails1st.length; i++){
                                            
                                            let detailsTrigger1st=evoDetails1st[i].trigger;
                                            let detailsTrig1st=detailsTrigger1st.name;
                                            console.log("1evo-trigger: "+detailsTrig1st)
                                                var gender1st=evoDetails1st[i].gender;
                                                var held_item1st=evoDetails1st[i].held_item;
                                                var item1st=evoDetails1st[i].item;
                                                var known_move1st=evoDetails1st[i].known_move;
                                                var known_move_type1st=evoDetails1st[i].known_move_type;
                                                var location1st=evoDetails1st[i].location;
                                                var min_affection1st=evoDetails1st[i].min_affection;
                                                var min_beauty1st=evoDetails1st[i].min_beauty;
                                                var min_happiness1st=evoDetails1st[i].min_happiness;
                                                var min_level1st=evoDetails1st[i].min_level;
                                                var needs_overworld_rain1st=evoDetails1st[i].needs_overworld_rain;
                                                var party_species1st=evoDetails1st[i].party_species;
                                                var party_type1st=evoDetails1st[i].party_type;
                                                var relative_physical_stats1st=evoDetails1st[i].relative_physical_stats;
                                                var time_of_day1st=evoDetails1st[i].time_of_day;
                                                var trade_species1st=evoDetails1st[i].trade_species;
                                                var turn_upside_down1st=evoDetails1st[i].turn_upside_down;
                                                var conditions1st=[];
                                                if(min_level1st>=1 && min_level1st<=100) {console.log("levelup: "+ min_level1st + "+");
                                                 var minLv1st=`Lv `+min_level1st+`+`;
                                                } else{minLv1st=`Level-up`;} 
                                                if(location1st!=null){lugar1st=location1st.name;luogo1st=lugar1st.replace("-"," ");place1st="in "+capitalizeAll(luogo1st);console.log("this is the location for the evolution: "+place1st);conditions1st.push(place1st)}else{place1st=""}  
                                                if(held_item1st!=null){heldItem1st=held_item1st.name;heldItem1st=heldItem1st.replace("-"," ");hItem1st="holding "+capitalizeAll(heldItem1st);
                                                console.log("this is the item held for the evolution: "+hItem1st); conditions1st.push(hItem1st)}else{hItem1st=""}  
                                                if(item1st!=null){console.log("this is the item near which pmn can evolve: "+item1st)}
                                                if(party_species1st!=null){partySpecies1st=party_species1st.name;ptySpecies1st=capitalize(partySpecies1st);pSpecies1st="with "+ptySpecies1st+" in party";
                                                console.log("this is the species necessary in the party for the evolution: "+ptySpecies1st); conditions1st.push(pSpecies1st)}else{pSpecies1st=""} 
                                                if(trade_species1st!=null){tradeSpecies1st=trade_species1st.name;tdeSpecies1st=capitalize(tradeSpecies1st);tSpecies1st="for a "+tdeSpecies1st;
                                                console.log("this is the species to trade for the evolution: "+tdeSpecies1st); conditions1st.push(tSpecies1st)}else{tSpecies1st=""}  
                                                if(party_type1st!=null){partyType1st=party_type1st.name;ptyType1st=capitalize(partyType1st);pType1st="with a "+ptyType1st+" type in party";
                                                console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType1st); conditions1st.push(pType1st)}else{pType1st=""} 
                                                if(time_of_day1st=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day1st);day1st=time_of_day1st; conditions1st.push(day1st)}else{day1st=""}  
                                                if(time_of_day1st=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day1st);night1st=time_of_day1st; conditions1st.push(night1st)}else{night1st=""}
                                                if(known_move1st!=null){console.log("this is the known move for the evolution: "+known_move1st); knownMove1st=known_move1st.name; knowMove1st=knownMove1st.replace("-"," "); knwMove1st="knowing "+capitalizeAll(knowMove1st);conditions1st.push(knwMove1st)}else{knwMove1st=""} 
                                                if(known_move_type1st!=null){console.log("this is the known move type for the evolution: "+known_move_type1st)}  
                                                if(min_affection1st!=null){console.log("this is the minimum affection required for the evolution: "+min_affection1st); affect1st= "affection lv: "+min_affection1st; conditions1st.push(affect1st)} else{affect1st="";}
                                                if(min_happiness1st!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness1st); happi1st= "high friendship<br>(min. happiness: "+min_happiness1st+")";conditions1st.push(happi1st)} else{happi1st="";}
                                                if(min_beauty1st!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty1st); beauty1st= "high beauty<br>(min. beauty: "+min_beauty1st+")";conditions1st.push(beauty1st)} else{beauty1st="";}    
                                                if(gender1st==1){console.log("this is the gender♀ for the evolution: "+gender1st); genremale="female"; conditions1st.push(genremale)}else{genremale=""}  
                                                if(gender1st==2){console.log("this is the gender♂ for the evolution: "+gender1st); genrefemale="male"; conditions1st.push(genrefemale)}else{genrefemale=""} 
                                                if(turn_upside_down1st==true){console.log("this is inkay/malamar evolution");
                                                upsideDown1st="hold game system upside-down"; conditions1st.push(upsideDown1st)}else{upsideDown1st=""} 
                                                if(needs_overworld_rain1st==true){console.log("this is goomy/sliggoo/goodra evolution");
                                                owRain1st="while rainy or foggy"; conditions1st.push(owRain1st)}else{owRain1st=""} 
                                                
                                             
                                             conditions1st= conditions1st.toString();
                                             conditions1st=conditions1st.replace(",","<br>")
                                              
                                             console.log(conditions1st) ; 
                                                
                                            if (detailsTrig1st=="level-up"){
                                                console.log("level-up!!")
                                                if(i==(evoDetails1st.length-1)){
                                                    evoSpan1st=`
                                                    <small>`+minLv1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                }else{evoSpan1st=`
                                                <small>`+minLv1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
    
                                            }else if (detailsTrig1st=="trade"){
                                                console.log("trade!");
                                                if(i==(evoDetails1st.length-1)){ evoSpan1st=`
                                                <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                }else{ evoSpan1st=`
                                                <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
       
                                            }else if (detailsTrig1st=="use-item"){
                                                console.log("next item!!");
                                                let nextItem1st= item1st.name;
                                                let nItem1st=nextItem1st.replace("-"," ");
                                                nItem1st=capitalizeAll(nItem1st);
                                                if(i==(evoDetails1st.length-1)){   evoSpan1st=`
                                                <small>`+nItem1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                }else{   evoSpan1st=`
                                                <small>`+nItem1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
                                             
                                                
                                            }
                                            evoSpans1st+=evoSpan1st;
                                            
                                        };
    
                                        //evo details for the 2 evo second form          
                                        let evoDetails2nd=evo2[1].evolution_details;
                                        // var evoSpans2=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">`;
                                        evoSpans1st+=`</span>
                                        <span class="pt-3 d-flex flex-column align-self-center">`;
    
                                        for(let i = 0; i < evoDetails2nd.length; i++){
                                            
                                            let detailsTrigger2nd=evoDetails2nd[i].trigger;
                                            let detailsTrig2nd=detailsTrigger2nd.name;
                                            console.log("1evo-trigger: "+detailsTrig2nd)
                                                var gender2nd=evoDetails2nd[i].gender;
                                                var held_item2nd=evoDetails2nd[i].held_item;
                                                var item2nd=evoDetails2nd[i].item;
                                                var known_move2nd=evoDetails2nd[i].known_move;
                                                var known_move_type2nd=evoDetails2nd[i].known_move_type;
                                                var location2nd=evoDetails2nd[i].location;
                                                var min_affection2nd=evoDetails2nd[i].min_affection;
                                                var min_beauty2nd=evoDetails2nd[i].min_beauty;
                                                var min_happiness2nd=evoDetails2nd[i].min_happiness;
                                                var min_level2nd=evoDetails2nd[i].min_level;
                                                var needs_overworld_rain2nd=evoDetails2nd[i].needs_overworld_rain;
                                                var party_species2nd=evoDetails2nd[i].party_species;
                                                var party_type2nd=evoDetails2nd[i].party_type;
                                                var relative_physical_stats2nd=evoDetails2nd[i].relative_physical_stats;
                                                var time_of_day2nd=evoDetails2nd[i].time_of_day;
                                                var trade_species2nd=evoDetails2nd[i].trade_species;
                                                var turn_upside_down2nd=evoDetails2nd[i].turn_upside_down;
                                                var conditions2nd=[];
                                                if(min_level2nd>=1 && min_level2nd<=100) {console.log("levelup: "+ min_level2nd + "+");
                                                 var minLv2nd=`Lv `+min_level2nd+`+`;
                                                } else{minLv2nd=`Level-up`;} 
                                                if(location2nd!=null){lugar2nd=location2nd.name;luogo2nd=lugar2nd.replace("-"," ");place2nd="in "+capitalizeAll(luogo2nd);console.log("this is the location for the evolution: "+place2nd);conditions2nd.push(place2nd)}else{place2nd=""}  
                                                if(held_item2nd!=null){heldItem2nd=held_item2nd.name;heldItem2nd=heldItem2nd.replace("-"," ");hItem2nd="holding "+capitalizeAll(heldItem2nd);
                                                console.log("this is the item held for the evolution: "+hItem2nd); conditions2nd.push(hItem2nd)}else{hItem2nd=""}  
                                                if(item2nd!=null){console.log("this is the item near which pmn can evolve: "+item2nd)}
                                                if(party_species2nd!=null){partySpecies2nd=party_species2nd.name;ptySpecies2nd=capitalize(partySpecies2nd);pSpecies2nd="with "+ptySpecies2nd+" in party";
                                                console.log("this is the species necessary in the party for the evolution: "+ptySpecies2nd); conditions2nd.push(pSpecies2nd)}else{pSpecies2nd=""}
                                                if(trade_species2nd!=null){tradeSpecies2nd=trade_species2nd.name;tdeSpecies2nd=capitalize(tradeSpecies2nd);tSpecies2nd="for a "+tdeSpecies2nd;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies2nd); conditions2nd.push(tSpecies2nd)}else{tSpecies2nd=""}   
                                                if(party_type2nd!=null){partyType2nd=party_type2nd.name;ptyType2nd=capitalize(partyType2nd);pType2nd="with a "+ptyType2nd+" type in party";
                                                console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType2nd); conditions2nd.push(pType2nd)}else{pType2nd=""} 
                                                if(time_of_day2nd=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day2nd);day2nd=time_of_day2nd; conditions2nd.push(day2nd)}else{day2nd=""}  
                                                if(time_of_day2nd=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day2nd);night2nd=time_of_day2nd; conditions2nd.push(night2nd)}else{night2nd=""}
                                                if(known_move2nd!=null){console.log("this is the known move for the evolution: "+known_move2nd); knownMove2nd=known_move2nd.name; knowMove2nd=knownMove2nd.replace("-"," "); knwMove2nd="knowing "+capitalizeAll(knowMove2nd);conditions2nd.push(knwMove2nd)}else{knwMove2nd=""}  
                                                if(known_move_type2nd!=null){console.log("this is the known move type for the evolution: "+known_move_type2nd)}  
                                                if(min_affection2nd!=null){console.log("this is the minimum affection required for the evolution: "+min_affection2nd); affect2nd= "affection lv: "+min_affection2nd; conditions2nd.push(affect2nd)} else{affect2nd="";}
                                                if(min_happiness2nd!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness2nd); happi2nd= "high friendship<br>(min. happiness: "+min_happiness2nd+")";conditions2nd.push(happi2nd)} else{happi2nd="";}
                                                if(min_beauty2nd!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty2nd); beauty2nd= "high beauty<br>(min. beauty: "+min_beauty2nd+")";conditions2nd.push(beauty2nd)} else{beauty2nd="";}    
                                                if(gender2nd==1){console.log("this is the gender♀ for the evolution: "+gender2nd); genreuno="female"; conditions2nd.push(genreuno)}else{genreuno=""}  
                                                if(gender2nd==2){console.log("this is the gender♂ for the evolution: "+gender2nd); genredos="male"; conditions2nd.push(genredos)}else{genredos=""} 
                                                if(turn_upside_down2nd==true){console.log("this is inkay/malamar evolution");
                                                upsideDown2nd="hold game system upside-down"; conditions2nd.push(upsideDown2nd)}else{upsideDown2nd=""}
                                                if(needs_overworld_rain2nd==true){console.log("this is goomy/sliggoo/goodra evolution");
                                                owRain2nd="while rainy or foggy"; conditions2nd.push(owRain2nd)}else{owRain2nd=""}  
                                                
                                             
                                             conditions2nd= conditions2nd.toString();
                                             conditions2nd=conditions2nd.replace(",","<br>")
                                              
                                             console.log(conditions2nd) ; 
                                                
                                            if (detailsTrig2nd=="level-up"){
                                                console.log("level-up!!")
                                                if(i==(evoDetails2nd.length-1)){
                                                    evoSpan2nd=`
                                                    <small>`+minLv2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                }else{evoSpan2nd=`
                                                <small>`+minLv2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
    
                                            }else if (detailsTrig2nd=="trade"){
                                                console.log("trade!");
                                                if(i==(evoDetails2nd.length-1)){ evoSpan2nd=`
                                                <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                }else{ evoSpan2nd=`
                                                <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
       
                                            }else if (detailsTrig2nd=="use-item"){
                                                console.log("next item!!");
                                                let nextItem2nd= item2nd.name;
                                                let nItem2nd=nextItem2nd.replace("-"," ");
                                                nItem2nd=capitalizeAll(nItem2nd);
                                                if(i==(evoDetails2nd.length-1)){   evoSpan2nd=`
                                                <small>`+nItem2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                }else{   evoSpan2nd=`
                                                <small>`+nItem2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
                                             
                                                
                                            }
                                            evoSpans1st+=evoSpan2nd;
                                            
                                        };




                                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                    <p>Evolution Line:</p>
                                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                            `+evoSpans+`</span>
                                                <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                           `+evoSpans1st+`</span></span>
                                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstSt2Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstSt2)+`</span></span>
                                        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondSt2)+`</span></span>
                                        </div>
                                        </div>
                                    </div>`;
                                
                                }else if(evo2.length===3){
                                    //evo chain with !! only one !! first stadium forms, and  !! THREE !!!   second stadiums.
                                    let firstEvostadium2= evo2[0].species;
                                    let firstEvoSt2=firstEvostadium2.name;
                                    console.log("evochain second stadium, 1° evomon: "+firstEvoSt2);
                                    let secondEvostadium2= evo2[1].species;
                                    let secondEvoSt2=secondEvostadium2.name;
                                    console.log("evochain second stadium, 2° evomon: "+secondEvoSt2);
                                    let thirdEvostadium2= evo2[1].species;
                                    let thirdEvoSt2=thirdEvostadium2.name;
                                    console.log("evochain second stadium, 3° evomon: "+thirdEvoSt2);
                                }
                           
                           
                            
                            }else if(evo1.length===2){
                                //evolution chain with !! TWO !! first stadium forms
                                let firstEvo=evo1[0].species;
                                var firstEvoMon= firstEvo.name;
                                let secondEvo=evo1[1].species;
                                var secondEvoMon= secondEvo.name;
                                console.log("evochain first stadium, 1° evomon: "+firstEvoMon);
                                console.log("evochain first stadium, 2° evomon: "+secondEvoMon);
                                var firstEmonUrl=firstEvo.url;
                                var firstEvoMonUrl= firstEmonUrl.replace("-species", "");
                                console.log("this is first evo url: "+firstEvoMonUrl);
                                var firstEvoMonId = "";
                                var firstEvoMonArt="";
                                    $.ajax({
                                    url: firstEvoMonUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        firstEvoMonId = json.id;
                                        firstEvoMonSprites=json.sprites;
                                        firstEvoMonOthers=firstEvoMonSprites.other;
                                        firstEvoMonOffArt=firstEvoMonOthers["official-artwork"];
                                        firstEvoMonArt=firstEvoMonOffArt.front_default;
                                    }
                                    });
                                    console.log("my first evo id: "+firstEvoMonId);
                                var secondEmonUrl=secondEvo.url;
                                var secondEvoMonUrl= secondEmonUrl.replace("-species", "");
                                console.log("this is second evo url: "+secondEvoMonUrl);
                                var secondEvoMonId = "";
                                var secondEvoMonArt="";
                                    $.ajax({
                                    url: secondEvoMonUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        secondEvoMonId = json.id;
                                        secondEvoMonSprites=json.sprites;
                                        secondEvoMonOthers=secondEvoMonSprites.other;
                                        secondEvoMonOffArt=secondEvoMonOthers["official-artwork"];
                                        secondEvoMonArt=secondEvoMonOffArt.front_default;
                                    }
                                    });
                                    console.log("my second evo id: "+secondEvoMonId);


                                    var evoSpan=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                    <small>Lv 25</small><i class="fa-solid fa-share pb-5"></i><small class="pt-5">Trade</small><i class="fa-solid fa-share"></i></span>`;
                                    //evo details for the 1 evo first form
                                    let evoDetails=evo1[0].evolution_details;
                                    var evoSpans=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                    <span class="pb-3 d-flex flex-column align-self-center">`;

                                    for(let i = 0; i < evoDetails.length; i++){
                                        
                                        let detailsTrigger=evoDetails[i].trigger;
                                        let detailsTrig=detailsTrigger.name;
                                        console.log("1evo-trigger: "+detailsTrig)
                                            var gender=evoDetails[i].gender;
                                            var held_item=evoDetails[i].held_item;
                                            var item=evoDetails[i].item;
                                            var known_move=evoDetails[i].known_move;
                                            var known_move_type=evoDetails[i].known_move_type;
                                            var location=evoDetails[i].location;
                                            var min_affection=evoDetails[i].min_affection;
                                            var min_beauty=evoDetails[i].min_beauty;
                                            var min_happiness=evoDetails[i].min_happiness;
                                            var min_level=evoDetails[i].min_level;
                                            var needs_overworld_rain=evoDetails[i].needs_overworld_rain;
                                            var party_species=evoDetails[i].party_species;
                                            var party_type=evoDetails[i].party_type;
                                            var relative_physical_stats=evoDetails[i].relative_physical_stats;
                                            var time_of_day=evoDetails[i].time_of_day;
                                            var trade_species=evoDetails[i].trade_species;
                                            var turn_upside_down=evoDetails[i].turn_upside_down;
                                            var conditions=[];
                                            if(min_level>=1 && min_level<=100) {console.log("levelup: "+ min_level + "+");
                                             var minLv=`Lv `+min_level+`+`;
                                            } else{minLv=`Level-up`;} 
                                            if(location!=null){lugar=location.name;luogo=lugar.replace("-"," ");place="in "+capitalizeAll(luogo);console.log("this is the location for the evolution: "+place);conditions.push(place)}else{place=""}  
                                            if(held_item!=null){heldItem=held_item.name;heldItem=heldItem.replace("-"," ");hItem="holding "+capitalizeAll(heldItem);
                                            console.log("this is the item held for the evolution: "+hItem); conditions.push(hItem)}else{hItem=""}  
                                            if(item!=null){console.log("this is the item near which pmn can evolve: "+item)}  
                                            if(time_of_day=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day);day=time_of_day; conditions.push(day)}else{day=""}  
                                            if(party_species!=null){partySpecies=party_species.name;ptySpecies=capitalize(partySpecies);pSpecies="with "+ptySpecies+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies); conditions.push(pSpecies)}else{pSpecies=""}
                                            if(trade_species!=null){tradeSpecies=trade_species.name;tdeSpecies=capitalize(tradeSpecies);tSpecies="for a "+tdeSpecies;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies); conditions.push(tSpecies)}else{tSpecies=""}  
                                            if(party_type!=null){partyType=party_type.name;ptyType=capitalize(partyType);pType="with a "+ptyType+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType); conditions.push(pType)}else{pType=""}
                                            if(time_of_day=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day);night=time_of_day; conditions.push(night)}else{night=""}
                                            if(known_move!=null){console.log("this is the known move for the evolution: "+known_move); knownMove=known_move.name; knowMove=knownMove.replace("-"," "); knwMove="knowing "+capitalizeAll(knowMove);conditions.push(knwMove)}else{knwMove=""} 
                                            if(known_move_type!=null){console.log("this is the known move type for the evolution: "+known_move_type)}  
                                            if(min_affection!=null){console.log("this is the minimum affection required for the evolution: "+min_affection); affect= "affection lv: "+min_affection; conditions.push(affect)} else{affect="";} 
                                            if(min_happiness!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness); happi= "high friendship<br>(min. happiness: "+min_happiness+")";conditions.push(happi)} else{happi="";} 
                                            if(min_beauty!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty); beauty= "high beauty<br>(min. beauty: "+min_beauty+")";conditions.push(beauty)} else{beauty="";}  
                                            if(gender==1){console.log("this is the gender♀ for the evolution: "+gender); genre1="female"; conditions.push(genre1)}else{genre1=""}  
                                            if(gender==2){console.log("this is the gender♂ for the evolution: "+gender); genre2="male"; conditions.push(genre2)}else{genre2=""} 
                                            if(turn_upside_down==true){console.log("this is inkay/malamar evolution");
                                            upsideDown="hold game system upside-down"; conditions.push(upsideDown)}else{upsideDown=""} 
                                            if(needs_overworld_rain==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain="while rainy or foggy"; conditions.push(owRain)}else{owRain=""} 
                                            
                                         
                                         conditions= conditions.toString();
                                         conditions=conditions.replace(",","<br>")
                                          
                                         console.log(conditions) ; 
                                            
                                        if (detailsTrig=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails.length-1)){
                                                evoSpan=`
                                                <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{evoSpan=`
                                            <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}

                                        }else if (detailsTrig=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails.length-1)){ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
   
                                        }else if (detailsTrig=="use-item"){
                                            console.log("next item!!");
                                            let nextItem= item.name;
                                            let nItem=nextItem.replace("-"," ");
                                            nItem=capitalizeAll(nItem);
                                            if(i==(evoDetails.length-1)){   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans+=evoSpan;
                                        
                                    };

                                    //evo details for the 1 evo second form          
                                    let evoDetails2=evo1[1].evolution_details;
                                    // var evoSpans2=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">`;
                                    evoSpans+=`</span>
                                    <span class="pt-3 d-flex flex-column align-self-center">`;

                                    for(let i = 0; i < evoDetails2.length; i++){
                                        
                                        let detailsTrigger2=evoDetails2[i].trigger;
                                        let detailsTrig2=detailsTrigger2.name;
                                        console.log("1evo-trigger: "+detailsTrig2)
                                            var gender2=evoDetails2[i].gender;
                                            var held_item2=evoDetails2[i].held_item;
                                            var item2=evoDetails2[i].item;
                                            var known_move2=evoDetails2[i].known_move;
                                            var known_move_type2=evoDetails2[i].known_move_type;
                                            var location2=evoDetails2[i].location;
                                            var min_affection2=evoDetails2[i].min_affection;
                                            var min_beauty2=evoDetails2[i].min_beauty;
                                            var min_happiness2=evoDetails2[i].min_happiness;
                                            var min_level2=evoDetails2[i].min_level;
                                            var needs_overworld_rain2=evoDetails2[i].needs_overworld_rain;
                                            var party_species2=evoDetails2[i].party_species;
                                            var party_type2=evoDetails2[i].party_type;
                                            var relative_physical_stats2=evoDetails2[i].relative_physical_stats;
                                            var time_of_day2=evoDetails2[i].time_of_day;
                                            var trade_species2=evoDetails2[i].trade_species;
                                            var turn_upside_down2=evoDetails2[i].turn_upside_down;
                                            var conditions2=[];
                                            if(min_level2>=1 && min_level2<=100) {console.log("levelup: "+ min_level2 + "+");
                                             var minLv2=`Lv `+min_level2+`+`;
                                            } else{minLv2=`Level-up`;} 
                                            if(location2!=null){lugar2=location2.name;luogo2=lugar2.replace("-"," ");place2="in "+capitalizeAll(luogo2);console.log("this is the location for the evolution: "+place2);conditions2.push(place2)}else{place2=""}  
                                            if(held_item2!=null){heldItem2=held_item2.name;heldItem2=heldItem2.replace("-"," ");hItem2="holding "+capitalizeAll(heldItem2);
                                            console.log("this is the item held for the evolution: "+hItem2); conditions2.push(hItem2)}else{hItem2=""}  
                                            if(item2!=null){console.log("this is the item near which pmn can evolve: "+item2)} 
                                            if(party_species2!=null){partySpecies2=party_species2.name;ptySpecies2=capitalize(partySpecies2);pSpecies2="with "+ptySpecies2+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies2); conditions2.push(pSpecies2)}else{pSpecies2=""}
                                            if(trade_species2!=null){tradeSpecies2=trade_species2.name;tdeSpecies2=capitalize(tradeSpecies2);tSpecies2="for a "+tdeSpecies2;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies2); conditions2.push(tSpecies2)}else{tSpecies2=""}   
                                            if(party_type2!=null){partyType2=party_type2.name;ptyType2=capitalize(partyType2);pType2="with a "+ptyType2+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType2); conditions2.push(pType2)}else{pType2=""}
                                            if(time_of_day2=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day2);day2=time_of_day2; conditions2.push(day2)}else{day2=""}  
                                            if(time_of_day2=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day2);night2=time_of_day2; conditions2.push(night2)}else{night2=""}
                                            if(known_move2!=null){console.log("this is the known move for the evolution: "+known_move2); knownMove2=known_move2.name; knowMove2=knownMove2.replace("-"," "); knwMove2="knowing "+capitalizeAll(knowMove2);conditions2.push(knwMove2)}else{knwMove2=""} 
                                            if(known_move_type2!=null){console.log("this is the known move type for the evolution: "+known_move_type2)}  
                                            if(min_affection2!=null){console.log("this is the minimum affection required for the evolution: "+min_affection2); affect2= "affection lv: "+min_affection2; conditions2.push(affect2)} else{affect2="";} 
                                            if(min_happiness2!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness2); happi2= "high friendship<br>(min. happiness: "+min_happiness2+")";conditions2.push(happi2)} else{happi2="";}
                                            if(min_beauty2!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty2); beauty2= "high beauty<br>(min. beauty: "+min_beauty2+")";conditions2.push(beauty2)} else{beauty2="";}   
                                            if(gender2==1){console.log("this is the gender♀ for the evolution: "+gender2); genreone="female"; conditions2.push(genreone)}else{genreone=""}  
                                            if(gender2==2){console.log("this is the gender♂ for the evolution: "+gender2); genretwo="male"; conditions2.push(genretwo)}else{genretwo=""} 
                                            if(turn_upside_down2==true){console.log("this is inkay/malamar evolution");
                                            upsideDown2="hold game system upside-down"; conditions2.push(upsideDown2)}else{upsideDown2=""} 
                                            if(needs_overworld_rain2==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain2="while rainy or foggy"; conditions2.push(owRain2)}else{owRain2=""} 
                                            
                                         
                                         conditions2= conditions2.toString();
                                         conditions2=conditions2.replace(",","<br>")
                                          
                                         console.log(conditions2) ; 
                                            
                                        if (detailsTrig2=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails2.length-1)){
                                                evoSpan2=`
                                                <small>`+minLv2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{evoSpan2=`
                                            <small>`+minLv2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}

                                        }else if (detailsTrig2=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails2.length-1)){ evoSpan2=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{ evoSpan2=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}
   
                                        }else if (detailsTrig2=="use-item"){
                                            console.log("next item!!");
                                            let nextItem2= item2.name;
                                            let nItem2=nextItem2.replace("-"," ");
                                            nItem2=capitalizeAll(nItem2);
                                            if(i==(evoDetails2.length-1)){   evoSpan2=`
                                            <small>`+nItem2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{   evoSpan2=`
                                            <small>`+nItem2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans+=evoSpan2;
                                        
                                    };

                            
                            
                                let evo2from1= evo1[0].evolves_to;
                                let evo2from2= evo1[1].evolves_to;
                                if(evo2from1.length===0 && evo2from2.length===0){
                                    //evolution chain with !! TWO !! first stadium forms and  NO  second stadiums.
                                    //(es. Slowpoke, Slowbro/Slowking  opp.  Scyther, Scizor/Kleavor opp. Nincada, Ninjask/Shedinja )
                                    console.log("evochain with no 2° evo form from 1° stadium mons (each first and second mons) ");
                            
                                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                    <p>Evolution Line:</p>
                                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                        `+evoSpans+`</span></span>
                                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                                        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span>
                                        </div>
                                    </div>
                                </div>`;
                            
                                }else if(evo2from1.length!=0 && evo2from2.length===0) {
                                    if(evo2from1.length===1){
                                        let firstEvostadium2= evo2from1[0].species;
                                        let firstEvoSt2=firstEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 1° evomon: "+firstEvoSt2);
                                    }
                                    else if(evo2from1.length===2){
                                        let firstEvostadium2= evo2from1[0].species;
                                        let firstEvoSt2=firstEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 1° evomon: "+firstEvoSt2);
                                        let secondEvostadium2= evo2from1[1].species;
                                        let secondEvoSt2=secondEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 2° evomon: "+secondEvoSt2);
                                    }
                                    else if(evo2from1.length===3){
                                        let firstEvostadium2= evo2from1[0].species;
                                        let firstEvoSt2=firstEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 1° evomon: "+firstEvoSt2);
                                        let secondEvostadium2= evo2from1[1].species;
                                        let secondEvoSt2=secondEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 2° evomon: "+secondEvoSt2);
                                        let thirdEvostadium2= evo2from1[1].species;
                                        let thirdEvoSt2=thirdEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium first mon--> 3° evomon: "+thirdEvoSt2);
                                    }
                            
                                }else if(evo2from1.length===0 && evo2from2.length!=0) {
                                    if(evo2from2.length===1){
                                        let primaEvostadium2= evo2from2[0].species;
                                        let primaEvoSt2=primaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 1° evomon: "+primaEvoSt2);
                                    }
                                    else if(evo2from2.length===2){
                                        let primaEvostadium2= evo2from2[0].species;
                                        let primaEvoSt2=primaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 1° evomon: "+primaEvoSt2);
                                        let secondaEvostadium2= evo2from2[1].species;
                                        let secondaEvoSt2=secondaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 2° evomon: "+secondaEvoSt2);
                                    }
                                    else if(evo2from2.length===3){
                                        let primaEvostadium2= evo2from2[0].species;
                                        let primaEvoSt2=primaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 1° evomon: "+primaEvoSt2);
                                        let secondaEvostadium2= evo2from2[1].species;
                                        let secondaEvoSt2=secondaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 2° evomon: "+secondaEvoSt2);
                                        let terzaEvostadium2= evo2from2[1].species;
                                        let terzaEvoSt2=terzaEvostadium2.name;
                                        console.log("evochain second stadium from 1stadium second mon--> 3° evomon: "+terzaEvoSt2);
                                    }
                            
                                }else if(evo2from1.length!=0 && evo2from2.length!=0) {
                                    if(evo2from1.length===1 && evo2from2.length===1){
                                                //evolution chain with !! TWO !! first stadium forms and ONE second stadium 4 EACH first stadium mon.
                                                //(es. Wurmple, Silcoon/Cascoon, Beautifly/Dustox  -- Silcoon->Beautifly --  Cascoon->Dustox)
                                        let premierEvoSt2from1= evo2from1[0].species;
                                        let premEvoSt2from1=premierEvoSt2from1.name;
                                        let premierEvoSt2from2= evo2from2[0].species;
                                        let premEvoSt2from2=premierEvoSt2from2.name;
                                        console.log("evochain second stadium (from 1stadium first and second mon)--> 1° evomons: "+premEvoSt2from1+ " and " +premEvoSt2from2);

                                        let st2from1EvoUrl=premierEvoSt2from1.url;
                                        let st2from1Url= st2from1EvoUrl.replace("-species", "");
                                        var st2from1Id = "";
                                        var st2from1Art="";
                                            $.ajax({
                                            url: st2from1Url,
                                            async: false,
                                            dataType: 'json',
                                            success: function (json) {
                                                st2from1Id = json.id;
                                                st2from1Sprites=json.sprites;
                                                st2from1Others=st2from1Sprites.other;
                                                st2from1OffArt=st2from1Others["official-artwork"];
                                                st2from1Art=st2from1OffArt.front_default;
                                            }
                                            });
                                            console.log("my second evo id: "+st2from1Id);

                                            let st2from2EvoUrl=premierEvoSt2from2.url;
                                        let st2from2Url= st2from2EvoUrl.replace("-species", "");
                                        var st2from2Id = "";
                                        var st2from2Art="";
                                            $.ajax({
                                            url: st2from2Url,
                                            async: false,
                                            dataType: 'json',
                                            success: function (json) {
                                                st2from2Id = json.id;
                                                st2from2Sprites=json.sprites;
                                                st2from2Others=st2from2Sprites.other;
                                                st2from2OffArt=st2from2Others["official-artwork"];
                                                st2from2Art=st2from2OffArt.front_default;
                                            }
                                            });
                                            console.log("my second evo id: "+st2from2Id);




                                            var evoSpan1st=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                            <small>Lv 25</small><i class="fa-solid fa-share pb-5"></i><small class="pt-5">Trade</small><i class="fa-solid fa-share"></i></span>`;
                                            
                                            //evo details for the 2 evo from 1 evo first form
                                            let evoDetails1st=evo2from1[0].evolution_details;
                                            var evoSpans1st=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                            <span class="pb-3 d-flex flex-column align-self-center">`;
        
                                            for(let i = 0; i < evoDetails1st.length; i++){
                                                
                                                let detailsTrigger1st=evoDetails1st[i].trigger;
                                                let detailsTrig1st=detailsTrigger1st.name;
                                                console.log("1evo-trigger: "+detailsTrig1st)
                                                    var gender1st=evoDetails1st[i].gender;
                                                    var held_item1st=evoDetails1st[i].held_item;
                                                    var item1st=evoDetails1st[i].item;
                                                    var known_move1st=evoDetails1st[i].known_move;
                                                    var known_move_type1st=evoDetails1st[i].known_move_type;
                                                    var location1st=evoDetails1st[i].location;
                                                    var min_affection1st=evoDetails1st[i].min_affection;
                                                    var min_beauty1st=evoDetails1st[i].min_beauty;
                                                    var min_happiness1st=evoDetails1st[i].min_happiness;
                                                    var min_level1st=evoDetails1st[i].min_level;
                                                    var needs_overworld_rain1st=evoDetails1st[i].needs_overworld_rain;
                                                    var party_species1st=evoDetails1st[i].party_species;
                                                    var party_type1st=evoDetails1st[i].party_type;
                                                    var relative_physical_stats1st=evoDetails1st[i].relative_physical_stats;
                                                    var time_of_day1st=evoDetails1st[i].time_of_day;
                                                    var trade_species1st=evoDetails1st[i].trade_species;
                                                    var turn_upside_down1st=evoDetails1st[i].turn_upside_down;
                                                    var conditions1st=[];
                                                    if(min_level1st>=1 && min_level1st<=100) {console.log("levelup: "+ min_level1st + "+");
                                                     var minLv1st=`Lv `+min_level1st+`+`;
                                                    } else{minLv1st=`Level-up`;} 
                                                    if(location1st!=null){lugar1st=location1st.name;luogo1st=lugar1st.replace("-"," ");place1st="in "+capitalizeAll(luogo1st);console.log("this is the location for the evolution: "+place1st);conditions1st.push(place1st)}else{place1st=""}  
                                                    if(held_item1st!=null){heldItem1st=held_item1st.name;heldItem1st=heldItem1st.replace("-"," ");hItem1st="holding "+capitalizeAll(heldItem1st);
                                                    console.log("this is the item held for the evolution: "+hItem1st); conditions1st.push(hItem1st)}else{hItem1st=""}  
                                                    if(item1st!=null){console.log("this is the item near which pmn can evolve: "+item1st)} 
                                                    if(party_species1st!=null){partySpecies1st=party_species1st.name;ptySpecies1st=capitalize(partySpecies1st);pSpecies1st="with "+ptySpecies1st+" in party";console.log("this is the species necessary in the party for the evolution: "+ptySpecies1st); conditions1st.push(pSpecies1st)}else{pSpecies1st=""} 
                                                    if(trade_species1st!=null){tradeSpecies1st=trade_species1st.name;tdeSpecies1st=capitalize(tradeSpecies1st);tSpecies1st="for a "+tdeSpecies1st;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies1st); conditions1st.push(tSpecies1st)}else{tSpecies1st=""}  
                                                    if(party_type1st!=null){partyType1st=party_type1st.name;ptyType1st=capitalize(partyType1st);pType1st="with a "+ptyType1st+" type in party";console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType1st); conditions1st.push(pType1st)}else{pType1st=""}
                                                    if(time_of_day1st=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day1st);day1st=time_of_day1st; conditions1st.push(day1st)}else{day1st=""}  
                                                    if(time_of_day1st=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day1st);night1st=time_of_day1st; conditions1st.push(night1st)}else{night1st=""}
                                                    if(known_move1st!=null){console.log("this is the known move for the evolution: "+known_move1st); knownMove1st=known_move1st.name; knowMove1st=knownMove1st.replace("-"," "); knwMove1st="knowing "+capitalizeAll(knowMove1st);conditions1st.push(knwMove1st)}else{knwMove1st=""} 
                                                    if(known_move_type1st!=null){console.log("this is the known move type for the evolution: "+known_move_type1st)}  
                                                    if(min_affection1st!=null){console.log("this is the minimum affection required for the evolution: "+min_affection1st); affect1st= "affection lv: "+min_affection1st; conditions1st.push(affect1st)} else{affect1st="";}
                                                    if(min_happiness1st!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness1st); happi1st= "high friendship<br>(min. happiness: "+min_happiness1st+")";conditions1st.push(happi1st)} else{happi1st="";}
                                                    if(min_beauty1st!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty1st); beauty1st= "high beauty<br>(min. beauty: "+min_beauty1st+")";conditions1st.push(beauty1st)} else{beauty1st="";}    
                                                    if(gender1st==1){console.log("this is the gender♀ for the evolution: "+gender1st); genremale="female"; conditions1st.push(genremale)}else{genremale=""}  
                                                    if(gender1st==2){console.log("this is the gender♂ for the evolution: "+gender1st); genrefemale="male"; conditions1st.push(genrefemale)}else{genrefemale=""} 
                                                    if(turn_upside_down1st==true){console.log("this is inkay/malamar evolution");
                                                    upsideDown1st="hold game system upside-down"; conditions1st.push(upsideDown1st)}else{upsideDown1st=""} 
                                                    if(needs_overworld_rain1st==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain1st="while rainy or foggy"; conditions1st.push(owRain1st)}else{owRain1st=""} 
                                                    
                                                 
                                                 conditions1st= conditions1st.toString();
                                                 conditions1st=conditions1st.replace(",","<br>")
                                                  
                                                 console.log(conditions1st) ; 
                                                    
                                                if (detailsTrig1st=="level-up"){
                                                    console.log("level-up!!")
                                                    if(i==(evoDetails1st.length-1)){
                                                        evoSpan1st=`
                                                        <small>`+minLv1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                    }else{evoSpan1st=`
                                                    <small>`+minLv1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
        
                                                }else if (detailsTrig1st=="trade"){
                                                    console.log("trade!");
                                                    if(i==(evoDetails1st.length-1)){ evoSpan1st=`
                                                    <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                    }else{ evoSpan1st=`
                                                    <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
           
                                                }else if (detailsTrig1st=="use-item"){
                                                    console.log("next item!!");
                                                    let nextItem1st= item1st.name;
                                                    let nItem1st=nextItem1st.replace("-"," ");
                                                    nItem1st=capitalizeAll(nItem1st);
                                                    if(i==(evoDetails1st.length-1)){   evoSpan1st=`
                                                    <small>`+nItem1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions1st+`</small>`;
                                                    }else{   evoSpan1st=`
                                                    <small>`+nItem1st+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions1st+`</small>`;}
                                                 
                                                    
                                                }
                                                evoSpans1st+=evoSpan1st;
                                                
                                            };
        
                                            //evo details for the 2 evo from 1 evo second form          
                                            let evoDetails2nd=evo2from2[0].evolution_details;
                                            // var evoSpans2=`<span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">`;
                                            evoSpans1st+=`</span>
                                            <span class="pt-3 d-flex flex-column align-self-center">`;
        
                                            for(let i = 0; i < evoDetails2nd.length; i++){
                                                
                                                let detailsTrigger2nd=evoDetails2nd[i].trigger;
                                                let detailsTrig2nd=detailsTrigger2nd.name;
                                                console.log("1evo-trigger: "+detailsTrig2nd)
                                                    var gender2nd=evoDetails2nd[i].gender;
                                                    var held_item2nd=evoDetails2nd[i].held_item;
                                                    var item2nd=evoDetails2nd[i].item;
                                                    var known_move2nd=evoDetails2nd[i].known_move;
                                                    var known_move_type2nd=evoDetails2nd[i].known_move_type;
                                                    var location2nd=evoDetails2nd[i].location;
                                                    var min_affection2nd=evoDetails2nd[i].min_affection;
                                                    var min_beauty2nd=evoDetails2nd[i].min_beauty;
                                                    var min_happiness2nd=evoDetails2nd[i].min_happiness;
                                                    var min_level2nd=evoDetails2nd[i].min_level;
                                                    var needs_overworld_rain2nd=evoDetails2nd[i].needs_overworld_rain;
                                                    var party_species2nd=evoDetails2nd[i].party_species;
                                                    var party_type2nd=evoDetails2nd[i].party_type;
                                                    var relative_physical_stats2nd=evoDetails2nd[i].relative_physical_stats;
                                                    var time_of_day2nd=evoDetails2nd[i].time_of_day;
                                                    var trade_species2nd=evoDetails2nd[i].trade_species;
                                                    var turn_upside_down2nd=evoDetails2nd[i].turn_upside_down;
                                                    var conditions2nd=[];
                                                    if(min_level2nd>=1 && min_level2nd<=100) {console.log("levelup: "+ min_level2nd + "+");
                                                     var minLv2nd=`Lv `+min_level2nd+`+`;
                                                    } else{minLv2nd=`Level-up`;} 
                                                    if(location2nd!=null){lugar2nd=location2nd.name;luogo2nd=lugar2nd.replace("-"," ");place2nd="in "+capitalizeAll(luogo2nd);console.log("this is the location for the evolution: "+place2nd);conditions2nd.push(place2nd)}else{place2nd=""}  
                                                    if(held_item2nd!=null){heldItem2nd=held_item2nd.name;heldItem2nd=heldItem2nd.replace("-"," ");hItem2nd="holding "+capitalizeAll(heldItem2nd);
                                                    console.log("this is the item held for the evolution: "+hItem2nd); conditions2nd.push(hItem2nd)}else{hItem2nd=""}  
                                                    if(item2nd!=null){console.log("this is the item near which pmn can evolve: "+item2nd)}
                                                    if(party_species2nd!=null){partySpecies2nd=party_species2nd.name;ptySpecies2nd=capitalize(partySpecies2nd);pSpecies2nd="with "+ptySpecies2nd+" in party";console.log("this is the species necessary in the party for the evolution: "+ptySpecies2nd); conditions2nd.push(pSpecies2nd)}else{pSpecies2nd=""} 
                                                    if(trade_species2nd!=null){tradeSpecies2nd=trade_species2nd.name;tdeSpecies2nd=capitalize(tradeSpecies2nd);tSpecies2nd="for a "+tdeSpecies2nd;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies2nd); conditions2nd.push(tSpecies2nd)}else{tSpecies2nd=""}  
                                                    if(party_type2nd!=null){partyType2nd=party_type2nd.name;ptyType2nd=capitalize(partyType2nd);pType2nd="with a "+ptyType2nd+" type in party";
                                                    console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType2nd); conditions2nd.push(pType2nd)}else{pType2nd=""} 
                                                    if(time_of_day2nd=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day2nd);day2nd=time_of_day2nd; conditions2nd.push(day2nd)}else{day2nd=""}  
                                                    if(time_of_day2nd=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day2nd);night2nd=time_of_day2nd; conditions2nd.push(night2nd)}else{night2nd=""}
                                                    if(known_move2nd!=null){console.log("this is the known move for the evolution: "+known_move2nd); knownMove2nd=known_move2nd.name; knowMove2nd=knownMove2nd.replace("-"," "); knwMove2nd="knowing "+capitalizeAll(knowMove2nd);conditions2nd.push(knwMove2nd)}else{knwMove2nd=""}  
                                                    if(known_move_type2nd!=null){console.log("this is the known move type for the evolution: "+known_move_type2nd)}  
                                                    if(min_affection2nd!=null){console.log("this is the minimum affection required for the evolution: "+min_affection2nd); affect2nd= "affection lv: "+min_affection2nd; conditions2nd.push(affect2nd)} else{affect2nd="";} 
                                                    if(min_happiness2nd!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness2nd); happi2nd= "high friendship<br>(min. happiness: "+min_happiness2nd+")";conditions2nd.push(happi2nd)} else{happi2nd="";} 
                                                    if(min_beauty2nd!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty2nd); beauty2nd= "high beauty<br>(min. beauty: "+min_beauty2nd+")";conditions2nd.push(beauty2nd)} else{beauty2nd="";}  
                                                    if(gender2nd==1){console.log("this is the gender♀ for the evolution: "+gender2nd); genreuno="female"; conditions2nd.push(genreuno)}else{genreuno=""}  
                                                    if(gender2nd==2){console.log("this is the gender♂ for the evolution: "+gender2nd); genredos="male"; conditions2nd.push(genredos)}else{genredos=""} 
                                                    if(turn_upside_down2nd==true){console.log("this is inkay/malamar evolution");
                                                    upsideDown2nd="hold game system upside-down"; conditions2nd.push(upsideDown2nd)}else{upsideDown2nd=""}
                                                    if(needs_overworld_rain2nd==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain2nd="while rainy or foggy"; conditions2nd.push(owRain2nd)}else{owRain2nd=""}  
                                                    
                                                 
                                                 conditions2nd= conditions2nd.toString();
                                                 conditions2nd=conditions2nd.replace(",","<br>")
                                                  
                                                 console.log(conditions2nd) ; 
                                                    
                                                if (detailsTrig2nd=="level-up"){
                                                    console.log("level-up!!")
                                                    if(i==(evoDetails2nd.length-1)){
                                                        evoSpan2nd=`
                                                        <small>`+minLv2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                    }else{evoSpan2nd=`
                                                    <small>`+minLv2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
        
                                                }else if (detailsTrig2nd=="trade"){
                                                    console.log("trade!");
                                                    if(i==(evoDetails2nd.length-1)){ evoSpan2nd=`
                                                    <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                    }else{ evoSpan2nd=`
                                                    <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
           
                                                }else if (detailsTrig2nd=="use-item"){
                                                    console.log("next item!!");
                                                    let nextItem2nd= item2nd.name;
                                                    let nItem2nd=nextItem2nd.replace("-"," ");
                                                    nItem2nd=capitalizeAll(nItem2nd);
                                                    if(i==(evoDetails2nd.length-1)){   evoSpan2nd=`
                                                    <small>`+nItem2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2nd+`</small>`;
                                                    }else{   evoSpan2nd=`
                                                    <small>`+nItem2nd+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2nd+`</small>`;}
                                                 
                                                    
                                                }
                                                evoSpans1st+=evoSpan2nd;
                                                
                                            };
                                            



                                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                    <p>Evolution Line:</p>
                                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                                
                                            `+evoSpans+`</span></span>
                                            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                                        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span>
                                        </div>

                                            `+evoSpans1st+`</span></span>
                                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+st2from1Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(st2from1Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(premEvoSt2from1)+`</span></span>3
                                        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+st2from2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(st2from2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(premEvoSt2from2)+`</span></span>
                                        </div>
                                        </div>
                                    </div>`;
                                    
                                    }
                                }  
                            
                            }else if(evo1.length===3){
                                //evolution chain with !!  THREE  !!! first stadium forms
                                //(es. Tyrogue, Hitmonlee/Hitmonchan/Hitmontop)
                                let firstEvo=evo1[0].species;
                                var firstEvoMon= firstEvo.name;
                                let secondEvo=evo1[1].species;
                                var secondEvoMon= secondEvo.name;
                                let thirdEvo=evo1[2].species;
                                var thirdEvoMon= thirdEvo.name;

                                var firstEvUrl=firstEvo.url;
                                var firstEUrl= firstEvUrl.replace("-species", "");
                                console.log("this is first evo url: "+firstEUrl);
                                var firstEId = "";
                                var firstEArt="";
                                    $.ajax({
                                    url: firstEUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        firstEId = json.id;
                                        firstESprites=json.sprites;
                                        firstEOthers=firstESprites.other;
                                        firstEOffArt=firstEOthers["official-artwork"];
                                        firstEArt=firstEOffArt.front_default;
                                    }
                                    });
                                    console.log("my first evo id: "+firstEId);
                                var secondEvUrl=secondEvo.url;
                                var secondEUrl= secondEvUrl.replace("-species", "");
                                console.log("this is second evo url: "+secondEUrl);
                                var secondEId = "";
                                var secondEArt="";
                                    $.ajax({
                                    url: secondEUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        secondEId = json.id;
                                        secondESprites=json.sprites;
                                        secondEOthers=secondESprites.other;
                                        secondEOffArt=secondEOthers["official-artwork"];
                                        secondEArt=secondEOffArt.front_default;
                                    }
                                    });
                                    console.log("my second evo id: "+secondEId);
                                var thirdEvUrl=thirdEvo.url;
                                var thirdEUrl= thirdEvUrl.replace("-species", "");
                                console.log("this is third evo url: "+thirdEUrl);
                                var thirdEId = "";
                                var thirdEArt="";
                                    $.ajax({
                                    url: thirdEUrl,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        thirdEId = json.id;
                                        thirdESprites=json.sprites;
                                        thirdEOthers=thirdESprites.other;
                                        thirdEOffArt=thirdEOthers["official-artwork"];
                                        thirdEArt=thirdEOffArt.front_default;
                                    }
                                    });
                                    console.log("my third evo id: "+thirdEId);

                                        //1 evo first
                                    var evoSpan=`<span class="d-flex flex-column col-3 col-xl-2 p-0">
                                    <small>Lv 25</small><i class="fa-solid fa-share"></i></span>`;
                                    let evoDetails=evo1[0].evolution_details;
                                    var evoSpans=`<span class="d-flex flex-column col-3 col-xl-2 p-0">`;

                                    for(let i = 0; i < evoDetails.length; i++){
                                        
                                        let detailsTrigger=evoDetails[i].trigger;
                                        let detailsTrig=detailsTrigger.name;
                                        console.log("1evo-trigger: "+detailsTrig)
                                            var gender=evoDetails[i].gender;
                                            var held_item=evoDetails[i].held_item;
                                            var item=evoDetails[i].item;
                                            var known_move=evoDetails[i].known_move;
                                            var known_move_type=evoDetails[i].known_move_type;
                                            var location=evoDetails[i].location;
                                            var min_affection=evoDetails[i].min_affection;
                                            var min_beauty=evoDetails[i].min_beauty;
                                            var min_happiness=evoDetails[i].min_happiness;
                                            var min_level=evoDetails[i].min_level;
                                            var needs_overworld_rain=evoDetails[i].needs_overworld_rain;
                                            var party_species=evoDetails[i].party_species;
                                            var party_type=evoDetails[i].party_type;
                                            var relative_physical_stats=evoDetails[i].relative_physical_stats;
                                            var time_of_day=evoDetails[i].time_of_day;
                                            var trade_species=evoDetails[i].trade_species;
                                            var turn_upside_down=evoDetails[i].turn_upside_down;
                                            var conditions=[];
                                            if(min_level>=1 && min_level<=100) {console.log("levelup: "+ min_level + "+");
                                             var minLv=`Lv `+min_level+`+`;
                                            } else{minLv=`Level-up`;} 
                                            if(location!=null){lugar=location.name;luogo=lugar.replace("-"," ");place="in "+capitalizeAll(luogo);console.log("this is the location for the evolution: "+place);conditions.push(place)}else{place=""}  
                                            if(held_item!=null){heldItem=held_item.name;heldItem=heldItem.replace("-"," ");hItem="holding "+capitalizeAll(heldItem);
                                            console.log("this is the item held for the evolution: "+hItem); conditions.push(hItem)}else{hItem=""}  
                                            if(item!=null){console.log("this is the item near which pmn can evolve: "+item)}
                                            if(party_species!=null){partySpecies=party_species.name;ptySpecies=capitalize(partySpecies);pSpecies="with "+ptySpecies+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies); conditions.push(pSpecies)}else{pSpecies=""}
                                            if(trade_species!=null){tradeSpecies=trade_species.name;tdeSpecies=capitalize(tradeSpecies);tSpecies="for a "+tdeSpecies;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies); conditions.push(tSpecies)}else{tSpecies=""}  
                                            if(party_type!=null){partyType=party_type.name;ptyType=capitalize(partyType);pType="with a "+ptyType+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType); conditions.push(pType)}else{pType=""}  
                                            if(time_of_day=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day);day=time_of_day; conditions.push(day)}else{day=""}  
                                            if(time_of_day=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day);night=time_of_day; conditions.push(night)}else{night=""}
                                            if(relative_physical_stats!=null){console.log("this is the relative physical stats for the evolution: "+relative_physical_stats);if(relative_physical_stats==1){/*hitmonlee */rel_ph_stats="atk > def";}else if(relative_physical_stats== -1){/*hitmonchan */rel_ph_stats="atk < def";}else if(relative_physical_stats== 0){/*hitmontop */rel_ph_stats="atk = def";}; conditions.push(rel_ph_stats)}else{rel_ph_stats=""}; 
                                            if(known_move!=null){console.log("this is the known move for the evolution: "+known_move); knownMove=known_move.name; knowMove=knownMove.replace("-"," "); knwMove="knowing "+capitalizeAll(knowMove);conditions.push(knwMove)}else{knwMove=""} 
                                            if(known_move_type!=null){console.log("this is the known move type for the evolution: "+known_move_type)}  
                                            if(min_affection!=null){console.log("this is the minimum affection required for the evolution: "+min_affection); affect= "affection lv: "+min_affection; conditions.push(affect)} else{affect="";}
                                            if(min_happiness!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness); happi= "high friendship<br>(min. happiness: "+min_happiness+")";conditions.push(happi)} else{happi="";}
                                            if(min_beauty!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty); beauty= "high beauty<br>(min. beauty: "+min_beauty+")";conditions.push(beauty)} else{beauty="";}    
                                            if(gender==1){console.log("this is the gender♀ for the evolution: "+gender); genre1="female"; conditions.push(genre1)}else{genre1=""}  
                                            if(gender==2){console.log("this is the gender♂ for the evolution: "+gender); genre2="male"; conditions.push(genre2)}else{genre2=""} 
                                            if(turn_upside_down==true){console.log("this is inkay/malamar evolution");
                                            upsideDown="hold game system upside-down"; conditions.push(upsideDown)}else{upsideDown=""} 
                                            if(needs_overworld_rain==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain="while rainy or foggy"; conditions.push(owRain)}else{owRain=""} 
                                            
                                         
                                         conditions= conditions.toString();
                                         conditions=conditions.replace(",","<br>")
                                          
                                         console.log(conditions) ; 
                                            
                                        if (detailsTrig=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails.length-1)){
                                                evoSpan=`
                                                <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{evoSpan=`
                                            <small>`+minLv+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}

                                        }else if (detailsTrig=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails.length-1)){ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{ evoSpan=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
   
                                        }else if (detailsTrig=="use-item"){
                                            console.log("next item!!");
                                            let nextItem= item.name;
                                            let nItem=nextItem.replace("-"," ");
                                            nItem=capitalizeAll(nItem);
                                            if(i==(evoDetails.length-1)){   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
                                            }else{   evoSpan=`
                                            <small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans+=evoSpan;
                                        
                                    };

                                        //1 evo second
                                    let evoDetails2=evo1[1].evolution_details;
                                    var evoSpans2=`<span class="d-flex flex-column col-3 col-xl-2 p-0">`;

                                    for(let i = 0; i < evoDetails2.length; i++){
                                        
                                        let detailsTrigger2=evoDetails2[i].trigger;
                                        let detailsTrig2=detailsTrigger2.name;
                                        console.log("1evo-trigger: "+detailsTrig2)
                                            var gender2=evoDetails2[i].gender;
                                            var held_item2=evoDetails2[i].held_item;
                                            var item2=evoDetails2[i].item;
                                            var known_move2=evoDetails2[i].known_move;
                                            var known_move_type2=evoDetails2[i].known_move_type;
                                            var location2=evoDetails2[i].location;
                                            var min_affection2=evoDetails2[i].min_affection;
                                            var min_beauty2=evoDetails2[i].min_beauty;
                                            var min_happiness2=evoDetails2[i].min_happiness;
                                            var min_level2=evoDetails2[i].min_level;
                                            var needs_overworld_rain2=evoDetails2[i].needs_overworld_rain;
                                            var party_species2=evoDetails2[i].party_species;
                                            var party_type2=evoDetails2[i].party_type;
                                            var relative_physical_stats2=evoDetails2[i].relative_physical_stats;
                                            var time_of_day2=evoDetails2[i].time_of_day;
                                            var trade_species2=evoDetails2[i].trade_species;
                                            var turn_upside_down2=evoDetails2[i].turn_upside_down;
                                            var conditions2=[];
                                            if(min_level2>=1 && min_level2<=100) {console.log("levelup: "+ min_level2 + "+");
                                             var minLv2=`Lv `+min_level2+`+`;
                                            } else{minLv2=`Level-up`;} 
                                            if(location2!=null){lugar2=location2.name;luogo2=lugar2.replace("-"," ");place2="in "+capitalizeAll(luogo2);console.log("this is the location for the evolution: "+place2);conditions2.push(place2)}else{place2=""}  
                                            if(held_item2!=null){heldItem2=held_item2.name;heldItem2=heldItem2.replace("-"," ");hItem2="holding "+capitalizeAll(heldItem2);
                                            console.log("this is the item held for the evolution: "+hItem2); conditions2.push(hItem2)}else{hItem2=""}  
                                            if(item2!=null){console.log("this is the item near which pmn can evolve: "+item2)} 
                                            if(party_species2!=null){partySpecies2=party_species2.name;ptySpecies2=capitalize(partySpecies2);pSpecies2="with "+ptySpecies2+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies2); conditions2.push(pSpecies2)}else{pSpecies2=""}
                                            if(trade_species2!=null){tradeSpecies2=trade_species2.name;tdeSpecies2=capitalize(tradeSpecies2);tSpecies2="for a "+tdeSpecies2;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies2); conditions2.push(tSpecies2)}else{tSpecies2=""}   
                                            if(party_type2!=null){partyType2=party_type2.name;ptyType2=capitalize(partyType2);pType2="with a "+ptyType2+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType2); conditions2.push(pType2)}else{pType2=""}
                                            if(time_of_day2=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day2);day2=time_of_day2; conditions2.push(day2)}else{day2=""}  
                                            if(time_of_day2=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day2);night2=time_of_day2; conditions2.push(night2)}else{night2=""}
                                            if(relative_physical_stats2!=null){console.log("this is the relative physical stats for the evolution: "+relative_physical_stats2);if(relative_physical_stats2==1){/*hitmonlee */rel_ph_stats2="atk > def";}else if(relative_physical_stats2== -1){/*hitmonchan */rel_ph_stats2="atk < def";}else if(relative_physical_stats2== 0){/*hitmontop */rel_ph_stats2="atk = def";}; conditions2.push(rel_ph_stats2)}else{rel_ph_stats2=""}; 
                                            if(known_move2!=null){console.log("this is the known move for the evolution: "+known_move2); knownMove2=known_move2.name; knowMove2=knownMove2.replace("-"," "); knwMove2="knowing "+capitalizeAll(knowMove2);conditions2.push(knwMove2)}else{knwMove2=""} 
                                            if(known_move_type2!=null){console.log("this is the known move type for the evolution: "+known_move_type2)}  
                                            if(min_affection2!=null){console.log("this is the minimum affection required for the evolution: "+min_affection2); affect2= "affection lv: "+min_affection2; conditions2.push(affect2)} else{affect2="";} 
                                            if(min_happiness2!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness2); happi2= "high friendship<br>(min. happiness: "+min_happiness2+")";conditions2.push(happi2)} else{happi2="";}
                                            if(min_beauty2!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty2); beauty2= "high beauty<br>(min. beauty: "+min_beauty2+")";conditions2.push(beauty2)} else{beauty2="";}   
                                            if(gender2==1){console.log("this is the gender♀ for the evolution: "+gender2); genreuno="female"; conditions2.push(genreuno)}else{genreuno=""}  
                                            if(gender2==2){console.log("this is the gender♂ for the evolution: "+gender2); genredue="male"; conditions2.push(genredue)}else{genredue=""} 
                                            if(turn_upside_down2==true){console.log("this is inkay/malamar evolution");
                                            upsideDown2="hold game system upside-down"; conditions2.push(upsideDown2)}else{upsideDown2=""}
                                            if(needs_overworld_rain2==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain2="while rainy or foggy"; conditions2.push(owRain2)}else{owRain2=""}  
                                            
                                         
                                         conditions2= conditions2.toString();
                                         conditions2=conditions2.replace(",","<br>")
                                          
                                         console.log(conditions2) ; 
                                            
                                        if (detailsTrig2=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails2.length-1)){
                                                evoSpan2=`
                                                <small>`+minLv2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{evoSpan2=`
                                            <small>`+minLv2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}

                                        }else if (detailsTrig2=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails2.length-1)){ evoSpan2=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{ evoSpan2=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}
   
                                        }else if (detailsTrig2=="use-item"){
                                            console.log("next item!!");
                                            let nextItem2= item2.name;
                                            let nItem2=nextItem2.replace("-"," ");
                                            nItem2=capitalizeAll(nItem2);
                                            if(i==(evoDetails2.length-1)){   evoSpan2=`
                                            <small>`+nItem2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions2+`</small>`;
                                            }else{   evoSpan2=`
                                            <small>`+nItem2+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions2+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans2+=evoSpan2;
                                        
                                    };
                                    //1 evo third
                                    let evoDetails3=evo1[2].evolution_details;
                                    var evoSpans3=`<span class="d-flex flex-column col-3 col-xl-2 p-0">`;

                                    for(let i = 0; i < evoDetails3.length; i++){
                                        
                                        let detailsTrigger3=evoDetails3[i].trigger;
                                        let detailsTrig3=detailsTrigger3.name;
                                        console.log("1evo-trigger: "+detailsTrig3)
                                            var gender3=evoDetails3[i].gender;
                                            var held_item3=evoDetails3[i].held_item;
                                            var item3=evoDetails3[i].item;
                                            var known_move3=evoDetails3[i].known_move;
                                            var known_move_type3=evoDetails3[i].known_move_type;
                                            var location3=evoDetails3[i].location;
                                            var min_affection3=evoDetails3[i].min_affection;
                                            var min_beauty3=evoDetails3[i].min_beauty;
                                            var min_happiness3=evoDetails3[i].min_happiness;
                                            var min_level3=evoDetails3[i].min_level;
                                            var needs_overworld_rain3=evoDetails3[i].needs_overworld_rain;
                                            var party_species3=evoDetails3[i].party_species;
                                            var party_type3=evoDetails3[i].party_type;
                                            var relative_physical_stats3=evoDetails3[i].relative_physical_stats;
                                            var time_of_day3=evoDetails3[i].time_of_day;
                                            var trade_species3=evoDetails3[i].trade_species;
                                            var turn_upside_down3=evoDetails3[i].turn_upside_down;
                                            var conditions3=[];
                                            if(min_level3>=1 && min_level3<=100) {console.log("levelup: "+ min_level3 + "+");
                                             var minLv3=`Lv `+min_level3+`+`;
                                            } else{minLv3=`Level-up`;} 
                                            if(location3!=null){lugar3=location3.name;luogo3=lugar3.replace("-"," ");place3="in "+capitalizeAll(luogo3);console.log("this is the location for the evolution: "+place3);conditions3.push(place3)}else{place3=""}  
                                            if(held_item3!=null){heldItem3=held_item3.name;heldItem3=heldItem3.replace("-"," ");hItem3="holding "+capitalizeAll(heldItem3);
                                            console.log("this is the item held for the evolution: "+hItem3); conditions3.push(hItem3)}else{hItem3=""}  
                                            if(item3!=null){console.log("this is the item near which pmn can evolve: "+item3)} 
                                            if(party_species3!=null){partySpecies3=party_species3.name;ptySpecies3=capitalize(partySpecies3);pSpecies3="with "+ptySpecies3+" in party";
                                            console.log("this is the species necessary in the party for the evolution: "+ptySpecies3); conditions3.push(pSpecies3)}else{pSpecies3=""}
                                            if(trade_species3!=null){tradeSpecies3=trade_species3.name;tdeSpecies3=capitalize(tradeSpecies3);tSpecies3="for a "+tdeSpecies3;
                                            console.log("this is the species to trade for the evolution: "+tdeSpecies3); conditions3.push(tSpecies3)}else{tSpecies3=""}  
                                            if(party_type3!=null){partyType3=party_type3.name;ptyType3=capitalize(partyType3);pType3="with a "+ptyType3+" type in party";
                                            console.log("this is the pokemon type necessary in the party for the evolution: "+ptyType3); conditions3.push(pType3)}else{pType3=""} 
                                            if(time_of_day3=="day"){console.log("this is the item near which pmn can evolve: "+time_of_day3);day3=time_of_day3; conditions3.push(day3)}else{day3=""}  
                                            if(time_of_day3=="night"){console.log("this is the time of day when pmn can evolve: "+time_of_day3);night3=time_of_day3; conditions3.push(night3)}else{night3=""}
                                            if(relative_physical_stats3!=null){console.log("this is the relative physical stats for the evolution: "+relative_physical_stats3);if(relative_physical_stats3==1){/*hitmonlee */rel_ph_stats3="atk > def";}else if(relative_physical_stats3== -1){/*hitmonchan */rel_ph_stats3="atk < def";}else if(relative_physical_stats3== 0){/*hitmontop */rel_ph_stats3="atk = def";}; conditions3.push(rel_ph_stats3)}else{rel_ph_stats3=""}; 
                                            if(known_move3!=null){console.log("this is the known move for the evolution: "+known_move3); knownMove3=known_move3.name; knowMove3=knownMove3.replace("-"," "); knwMove3="knowing "+capitalizeAll(knowMove3);conditions3.push(knwMove3)}else{knwMove3=""} 
                                            if(known_move_type3!=null){console.log("this is the known move type for the evolution: "+known_move_type3)}  
                                            if(min_affection3!=null){console.log("this is the minimum affection required for the evolution: "+min_affection3); affect3= "affection lv: "+min_affection3; conditions3.push(affect3)} else{affect3="";}  
                                            if(min_happiness3!=null){console.log("this is the minimum happiness required for the evolution: "+min_happiness3); happi3= "high friendship<br>(min. happiness: "+min_happiness3+")";conditions3.push(happi3)} else{happi3="";}
                                            if(min_beauty3!=null){console.log("this is the minimum beauty required for the evolution: "+min_beauty3); beauty3= "high beauty<br>(min. beauty: "+min_beauty3+")";conditions3.push(beauty3)} else{beauty3="";}  
                                            if(gender3==1){console.log("this is the gender♀ for the evolution: "+gender3); genre13="female"; conditions3.push(genre13)}else{genre13=""}  
                                            if(gender3==2){console.log("this is the gender♂ for the evolution: "+gender3); genre23="male"; conditions3.push(genre23)}else{genre23=""} 
                                            if(turn_upside_down3==true){console.log("this is inkay/malamar evolution");
                                            upsideDown3="hold game system upside-down"; conditions3.push(upsideDown3)}else{upsideDown3=""} 
                                            if(needs_overworld_rain3==true){console.log("this is goomy/sliggoo/goodra evolution");
                                            owRain3="while rainy or foggy"; conditions3.push(owRain3)}else{owRain3=""} 
                                            
                                         
                                         conditions3= conditions3.toString();
                                         conditions3=conditions3.replace(",","<br>")
                                          
                                         console.log(conditions3) ; 
                                            
                                        if (detailsTrig3=="level-up"){
                                            console.log("level-up!!")
                                            if(i==(evoDetails3.length-1)){
                                                evoSpan3=`
                                                <small>`+minLv3+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions3+`</small>`;
                                            }else{evoSpan3=`
                                            <small>`+minLv3+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions3+`</small>`;}

                                        }else if (detailsTrig3=="trade"){
                                            console.log("trade!");
                                            if(i==(evoDetails3.length-1)){ evoSpan3=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions3+`</small>`;
                                            }else{ evoSpan3=`
                                            <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions3+`</small>`;}
   
                                        }else if (detailsTrig3=="use-item"){
                                            console.log("next item!!");
                                            let nextItem3= item3.name;
                                            let nItem3=nextItem3.replace("-"," ");
                                            nItem3=capitalizeAll(nItem3);
                                            if(i==(evoDetails3.length-1)){   evoSpan3=`
                                            <small>`+nItem3+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions3+`</small>`;
                                            }else{   evoSpan3=`
                                            <small>`+nItem3+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions3+`</small>`;}
                                         
                                            
                                        }
                                        evoSpans3+=evoSpan3;
                                        
                                    };


                                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                <p>Evolution Line:</p>
                                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                        <div class="p-0 col-12 pb-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                        <div class="row justify-content-center col-12">
                                        `+evoSpans+`</span>
                                            `+evoSpans2+`</span>
                                            `+evoSpans3+`</span>
                                        </div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                        
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEArt+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span></div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+thirdEArt+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(thirdEId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(thirdEvoMon)+`</span></span></div>
                                    </div>
                                </div>`;
                                
                                console.log("evochain first stadium, 1° evomon: "+firstEvoMon);
                                console.log("evochain first stadium, 2° evomon: "+secondEvoMon);
                                console.log("evochain first stadium, 3° evomon: "+thirdEvoMon);
                            console.log("se questi first stadium hanno dei second stadium... suicidati.")
                            
                            }
                            else if(evo1.length===8){
                                //evolution chain with   !!  E I G H T  !! !   first stadium forms
                                //(es. Eevee, Vaporeon/Jolteon/Flareon/Umbreon/Espeon/Glaceon/Leafeon/Sylveon)
                                let firstEevee=evo1[0].species;
                                var firstEeveeMon= firstEevee.name;
                                let secondEevee=evo1[1].species;
                                var secondEeveeMon= secondEevee.name;
                                let thirdEevee=evo1[2].species;
                                var thirdEeveeMon= thirdEevee.name;
                                let fourthEevee=evo1[3].species;
                                var fourthEeveeMon= fourthEevee.name;
                                let fifthEevee=evo1[4].species;
                                var fifthEeveeMon= fifthEevee.name;
                                let sixthEevee=evo1[5].species;
                                var sixthEeveeMon= sixthEevee.name;
                                let seventhEevee=evo1[6].species;
                                var seventhEeveeMon= seventhEevee.name;
                                let eighthEevee=evo1[7].species;
                                var eighthEeveeMon= eighthEevee.name;

                                var eeveeUnoUrl=firstEevee.url;
                                var eevee1Url= eeveeUnoUrl.replace("-species", "");
                                var eevee1Id = "";
                                var eevee1Art="";
                                    $.ajax({
                                    url: eevee1Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee1Id = json.id;
                                        eevee1Sprites=json.sprites;
                                        eevee1Others=eevee1Sprites.other;
                                        eevee1OffArt=eevee1Others["official-artwork"];
                                        eevee1Art=eevee1OffArt.front_default;
                                    }
                                    });
                                    
                                var eeveeDueUrl=secondEevee.url;
                                var eevee2Url= eeveeDueUrl.replace("-species", "");
                                var eevee2Id = "";
                                var eevee2Art="";
                                    $.ajax({
                                    url: eevee2Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee2Id = json.id;
                                        eevee2Sprites=json.sprites;
                                        eevee2Others=eevee2Sprites.other;
                                        eevee2OffArt=eevee2Others["official-artwork"];
                                        eevee2Art=eevee2OffArt.front_default;
                                    }
                                    });
                                    
                                var eeveeTreUrl=thirdEevee.url;
                                var eevee3Url= eeveeTreUrl.replace("-species", "");
                                var eevee3Id = "";
                                var eevee3Art="";
                                    $.ajax({
                                    url: eevee3Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee3Id = json.id;
                                        eevee3Sprites=json.sprites;
                                        eevee3Others=eevee3Sprites.other;
                                        eevee3OffArt=eevee3Others["official-artwork"];
                                        eevee3Art=eevee3OffArt.front_default;
                                    }
                                    });
                                    
                                var eeveeQuattroUrl=fourthEevee.url;
                                var eevee4Url= eeveeQuattroUrl.replace("-species", "");
                                var eevee4Id = "";
                                var eevee4Art="";
                                    $.ajax({
                                    url: eevee4Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee4Id = json.id;
                                        eevee4Sprites=json.sprites;
                                        eevee4Others=eevee4Sprites.other;
                                        eevee4OffArt=eevee4Others["official-artwork"];
                                        eevee4Art=eevee4OffArt.front_default;
                                    }
                                    });
                                   
                                var eeveeCinqueUrl=fifthEevee.url;
                                var eevee5Url= eeveeCinqueUrl.replace("-species", "");
                                var eevee5Id = "";
                                var eevee5Art="";
                                    $.ajax({
                                    url: eevee5Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee5Id = json.id;
                                        eevee5Sprites=json.sprites;
                                        eevee5Others=eevee5Sprites.other;
                                        eevee5OffArt=eevee5Others["official-artwork"];
                                        eevee5Art=eevee5OffArt.front_default;
                                    }
                                    });
                                   
                                var eeveeSeiUrl=sixthEevee.url;
                                var eevee6Url= eeveeSeiUrl.replace("-species", "");
                                var eevee6Id = "";
                                var eevee6Art="";
                                    $.ajax({
                                    url: eevee6Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee6Id = json.id;
                                        eevee6Sprites=json.sprites;
                                        eevee6Others=eevee6Sprites.other;
                                        eevee6OffArt=eevee6Others["official-artwork"];
                                        eevee6Art=eevee6OffArt.front_default;
                                    }
                                    });
                                    
                                var eeveeSetteUrl=seventhEevee.url;
                                var eevee7Url= eeveeSetteUrl.replace("-species", "");
                                var eevee7Id = "";
                                var eevee7Art="";
                                    $.ajax({
                                    url: eevee7Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee7Id = json.id;
                                        eevee7Sprites=json.sprites;
                                        eevee7Others=eevee7Sprites.other;
                                        eevee7OffArt=eevee7Others["official-artwork"];
                                        eevee7Art=eevee7OffArt.front_default;
                                    }
                                    });
                                    
                                var eeveeOttoUrl=eighthEevee.url;
                                var eevee8Url= eeveeOttoUrl.replace("-species", "");
                                var eevee8Id = "";
                                var eevee8Art="";
                                    $.ajax({
                                    url: eevee8Url,
                                    async: false,
                                    dataType: 'json',
                                    success: function (json) {
                                        eevee8Id = json.id;
                                        eevee8Sprites=json.sprites;
                                        eevee8Others=eevee8Sprites.other;
                                        eevee8OffArt=eevee8Others["official-artwork"];
                                        eevee8Art=eevee8OffArt.front_default;
                                    }
                                    });
                                    
                                
//if(i==(evoDetails.length-1)){   evoSpan=`<small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">`+conditions+`</small>`;
/*}else{   evoSpan=`
<small>`+nItem+`</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">`+conditions+`</small>`;} */


                                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                <p>Evolution Line:</p>
                                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                    <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee1Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee1Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEeveeMon)+`</span></span></div>
                                        
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee3Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee3Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(thirdEeveeMon)+`</span></span></div>
                                        <div class="row justify-content-center col-12 mt-2 mb-3">
                                        <span class="d-flex flex-column col-2 mx-xl-3 p-0">
                                            <small>Water Stone</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-2 mx-xl-3 p-0"><small>Thunder Stone</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-2 mx-xl-3 p-0"><small>Fire Stone</small><i class="fa-solid fa-share"></i></span>
                                            
                                        </div>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee4Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee4Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(fourthEeveeMon)+`</span></span></div>
                                        <span class="d-flex flex-column align-self-center col-1 p-0"><small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">day<br>high friendship<br>(min. happiness: 160)</small></span>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                        <span class="d-flex flex-column align-self-center col-1 p-0"><small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">night<br>high friendship<br>(min. happiness: 160)</small></span>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee5Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee5Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(fifthEeveeMon)+`</span></span></div>

                                        <div class="row justify-content-center col-12 mt-3 mb-2">
                                        <span class="d-flex flex-column col-2 mx-xl-3 p-0">
                                            <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">near Moss Rock</small><small>Leaf Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                                            <span class="d-flex flex-column col-2 mx-xl-3 p-0"><small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">near Ice Rock</small><small>Ice Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                                            <span class="d-flex flex-column col-2 mx-xl-3 p-0"><small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">high affection<br>(min. affection: 2)<br>knowing Fairy type move</small></span>     
                                        </div>

                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee6Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee6Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(sixthEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee7Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee7Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(seventhEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+eevee8Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(eevee8Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(eighthEeveeMon)+`</span></span></div>
                                    </div>
                                </div>`;
                                
                                console.log("this is Eevee; it has 8 evo forms: "+firstEeveeMon+" "+secondEeveeMon+" "+thirdEeveeMon+" "+fourthEeveeMon+ " " +fifthEeveeMon+" "+ sixthEeveeMon+" "+ seventhEeveeMon+" "+ eighthEeveeMon)
                            }
                        }
                        
                        
                        

                            // $.getJSON("https://pokeapi.co/api/v2/pokemon/"+id, function(data) {
                                
                                
                            // var pokeTypes =data.types;
                            // console.log("number of types: "+pokeTypes.length);
                            // // const typeColors=[
                            // //     "#ffee05",
                            // //     "#6647b8",
                            // //     "#9f60e1"
                            // // ];
                            // if(pokeTypes.length === 1){
                            //     var typeSlot= pokeTypes[0].type;
                            //     var typeName= typeSlot.name;
                            //     //   var typeColor="#000000";
                            //     //   if(typeName=="electric"){
                            //     //       typeColor=typeColors[0];
                            //     //   }else if(typeName=="ghost"){
                            //     //     typeColor=typeColors[1];
                            //     // }else if(typeName=="poison"){
                            //     //     typeColor=typeColors[2];
                            //     // };
                            //     let typeColor = getTypeColor(typeName);
                            //     var types=`<div class="f-type f-type0 col-12 text-center"><span style="background-color: `+typeColor+`;">`+capitalize(typeName)+`</span></div>`;

                            // }  else if(pokeTypes.length === 2){
                            //     var typeSlotUno=pokeTypes[0].type;
                            //     var typeSlotDue=pokeTypes[1].type;
                            //     var typeNameUno= typeSlotUno.name;
                            //     let typeColorUno = getTypeColor(typeNameUno);
                            //     var typeNameDue= typeSlotDue.name;
                            //     let typeColorDue = getTypeColor(typeNameDue);
                            //     var types=`<div class="f-type f-type1 col-6 text-end"><span style="background-color: `+typeColorUno+`;">`+capitalize(typeNameUno)+`</span></div>
                            //     <div class="f-type f-type2 col-6 text-start"><span style="background-color: `+typeColorDue+`;">`+capitalize(typeNameDue)+`</span></div>`;
                            // }else{var types=`<div class="f-type f-type0 col-12 text-center"><span>`+`Neutral`+`</span></div>`;};
                            //     // var name= data.name;
                            //     // let nameUPC = name[0].toUpperCase() + name.substring(1);
                            //     // $("#myTitle").html(nameUC);
                            //     var sprites= data.sprites; var otherSprites= sprites.other;
                            //     var offArtW=otherSprites["official-artwork"]; var offArt=offArtW.front_default; var homeSprites= otherSprites.home; var homeDef= homeSprites.front_default; var homeDefS = homeSprites.front_shiny; var homeFem=homeSprites.front_female; var homeFemS=homeSprites.front_shiny_female;

                            //     var abilities=data.abilities;
                            //     if (abilities.length===1){
                            //         var ability= abilities[0].ability;
                            //         var ablt =ability.name;
                            //         var abltr= ablt.replace('-', ' ');
                            //         var abltStatus =ability.is_hidden;
                            //         // if(abltStatus===false){
                            //             var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalize(abltr)+`</p> <span class="text-muted">Abilities</span> </div>
                            //         <div class="col-6 col-lg-auto px-lg-5"><p>// </p><span class="text-muted">Hidden abilities</span> </div>`;

                            //         // }else{
                            //         //     var abltCard=`<div class="col-6 f-ablt-col"><p>//</p> <span class="text-muted">Abilities</span> </div>
                            //         // <div class="col-6  "><p>(`+capitalize(abltr)+`)</p><span class="text-muted">Hidden abilities</span> </div>`;

                            //         // }

                            //     }else if(abilities.length===2){
                            //         var abilityOne =abilities[0].ability;
                            //         var abltOne =abilityOne.name;
                            //         var abltOner= abltOne.replace('-', ' ');
                            //         // var abltOneStatus =abilityOne.is_hidden;
                            //         var abilityTwo =abilities[1].ability;
                            //         var abltTwo =abilityTwo.name;
                            //         var abltTwor= abltTwo.replace('-', ' ');
                            //         var abltTwoStatus =abilityTwo.is_hidden;
                            //         if (abltTwoStatus===false){
                            //             // nn worka nn legge il false. unico pkmn che su bulbapedia ha 2 abilities e 0 hidden è zygarde 50%
                            //             var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalize(abltOner)+` | `+capitalize(abltTwor)+`</p> <span class="text-muted">Abilities</span> </div>
                            //         <div class="col-6 col-lg-auto px-lg-5"><p>// </p><span class="text-muted">Hidden abilities</span> </div>`;

                            //         }else{
                            //             var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalize(abltOner)+`</p> <span class="text-muted">Abilities</span> </div>
                            //         <div class="col-6 col-lg-auto px-lg-5"><p>(`+capitalize(abltTwor)+`) </p><span class="text-muted">Hidden abilities</span> </div>`;

                            //         }

                            //     }else if(abilities.length===3){
                            //         var abilOne =abilities[0].ability;
                            //         var ab1 =abilOne.name;
                            //         var ab1r =ab1.replace('-', ' ');
                            //         var abilTwo =abilities[1].ability;
                            //         var ab2 =abilTwo.name;
                            //         var ab2r =ab2.replace('-', ' ');
                            //         var abilThree =abilities[2].ability;
                            //         var ab3 =abilThree.name;
                            //         var ab3r =ab3.replace('-', ' ');
                            //         var abltCard=`<div class="col-6 col-lg-auto px-lg-5 f-ablt-col"><p>`+capitalize(ab1r)+` | `+capitalize(ab2r)+`</p> <span class="text-muted">Abilities</span> </div>
                            //         <div class="col-6 col-lg-auto px-lg-5"><p>(`+capitalize(ab3r) +`)</p><span class="text-muted">Hidden abilities</span> </div>`;
                            //     };


                            //     var dmheight = data.height;
                            //     var mtheight = zeroPad(dmheight/10,2);
                            //     var cmheight = zeroPad(dmheight*10,2);
                            //     // 4'11"
                            //     var ftheight =cmToFeet(cmheight);
                            //     var hgweight= data.weight;
                            //     var kgweight=zeroPad(hgweight/10,2);

                            //     var pmnStats= data.stats;
                            //     var pmnHP = pmnStats[0].base_stat;
                            //     var pmnAtk = pmnStats[1].base_stat;
                            //     var pmnDef = pmnStats[2].base_stat;
                            //     var pmnSPatk = pmnStats[3].base_stat;
                            //     var pmnSPdef = pmnStats[4].base_stat;
                            //     var pmnSPeed = pmnStats[5].base_stat;
                            //     var totBaseStats= pmnHP + pmnAtk + pmnDef + pmnSPatk + pmnSPdef+ pmnSPeed;
                                
                                // The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.



                                var myPokemonProfile= `<div id="poke-content" class="container-md px-0 px-md-5">
                                <div class="card">
                                <div class="d-flex retry-section">
                                        <a class="h1 d-flex f-retry f-retry-color" href="index.html">
                                            <!-- href="javascript:history.go(-1)" -->
                                            <i class="f-retry-icon fa-solid fa-chevron-left"></i>
                                            <h4>ShinyDex</h4>
                                                </a>
                                        
                                </div>
                                <div class="container-md f-card-title">
                                    <div class="f-pmn-name f-titles-color"><h1>`+nameUC+`</h1><h1>#</h1></div>
                                    <div class="f-pmn-name-span f-titles-color"><span>`+padPokemonNumber(data.id, 4)+`</span></div>
                                </div>
                                <!-- src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png" -->
                                <!-- src="assets/img/arceus-hisui-100-s.png" -->
                                <!-- https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/100.png-->
                                <img class="pmn-artwork" src="`+offArt+`" alt="pokémon-artwork">
                                    <!--img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/100.png"
                                    <h5 class="card-title pmn-title">Hello</h5>
                                    <h5 id="pmName"></h5> -->
                                    `+background+`
                                <div class="card-body f-card-body">
                                    
                                        <div class="row">
                                            `+types+`
                                            <div class="row f-spcf-row">
                                                <div class="f-pmn-categ col-6 text-center"><p>`+categoryPmn+`</p><span class="text-muted">Pokémon </span></div>
                                                <div class="f-pmn-roomaji col-6 text-center"><p>`+jahrktName+`</p><span class="text-muted">'`+roomajiName+`'</span> </div>
                                            </div>
                                            <div class="f-row-wrapper m-0 p-0">
                                                <div class="row mx-auto mx-md-2 f-ablt-row text-center mt-4">
                                                    <!--<div class="col-6 f-ablt-col"><p>Cursed Body | Shadow Tag</p> <span class="text-muted">Abilities</span> </div>
                                                    <div class="col-6  "><p>Levitate </p><span class="text-muted">Hidden abilities</span> </div>-->
                                                    `+abltCard+`
                                                </div>
                                                <div class="row mx-auto mx-md-2 f-ablt-row text-center mt-4">
                                                    <div class="col-auto f-padding px-lg-4 col-lg-auto f-ablt-col"> <canvas id="genre-canvas" width="50" height="50" aria-label="genre percentage"></canvas>
                                                    <p class="genre-canvas-label">`+genderText+`</p><span class="text-muted genre-text-muted">(gender ratio)</span></div>
                                                    <!--<div class="col-4 f-ablt-col"> <p>50/50</p><span class="text-muted">(gender ratio)</span></div>-->
                                                    <div class="col-4 col-lg-auto pt-3 px-lg-4 f-ablt-col"><p>`+mtheight+` mt</p><span class="text-muted">(height)</span></div>
                                                    <div class="col-4 col-lg-auto pt-3 px-lg-4"><p>`+kgweight+` kg</p><span class="text-muted">(weight)</span></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-8 col-xl-6 f-stats"><p class="px-5 m-0">Stats:</p>
                                                    <table class="table">
                                                    
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">HP</th>
                                                            <td>`+pmnHP+`</td>
                                                            <td class="f-td-bar"><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnHP)+`" style="width: `+statsRangeBar(pmnHP)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinHP(pmnHP)+`</td>
                                                            <td>`+calculateMaxHP(pmnHP)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th scope="row">ATK</th>
                                                            <td>`+pmnAtk+`</td>
                                                            <td class="f-td-bar"><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnAtk)+`" style="width: `+statsRangeBar(pmnAtk)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinStats(pmnAtk)+`</td>
                                                            <td>`+calculateMaxStats(pmnAtk)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th scope="row">DEF</th>
                                                            <td>`+pmnDef+`</td>
                                                            <td class="f-td-bar"><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnDef)+`" style="width: `+statsRangeBar(pmnDef)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinStats(pmnDef)+`</td>
                                                            <td>`+calculateMaxStats(pmnDef)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th scope="row">SP.ATK</th>
                                                            <td>`+pmnSPatk+`</td>
                                                            <td class="f-td-bar"><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnSPatk)+`" style="width: `+statsRangeBar(pmnSPatk)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinStats(pmnSPatk)+`</td>
                                                            <td>`+calculateMaxStats(pmnSPatk)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th scope="row">SP.DEF</th>
                                                            <td>`+pmnSPdef+`</td>
                                                            <td class="f-td-bar"><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnSPdef)+`" style="width: `+statsRangeBar(pmnSPdef)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinStats(pmnSPdef)+`</td>
                                                            <td>`+calculateMaxStats(pmnSPdef)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th scope="row">SPEED</th>
                                                            <td>`+pmnSPeed+`</td>
                                                            <td><div class="myProgressBar" >
                                                        <div class="myBar `+defineBarColor(pmnSPeed)+`" style="width: `+statsRangeBar(pmnSPeed)+`%;"></div>
                                                    </div></td>
                                                            <td>`+calculateMinStats(pmnSPeed)+`</td>
                                                            <td>`+calculateMaxStats(pmnSPeed)+`</td>
                                                        </tr> 
                                                        <tr>
                                                            <th class="f-last-td" scope="row">TOT</th>
                                                            <td class="f-last-td fw-bold text-danger">`+totBaseStats+`</td>
                                                            <td class="f-last-td"></td>
                                                            <td class="f-last-td text-muted" text-muted>min</td>
                                                            <td class="f-last-td text-muted">max</td>
                                                        </tr> 
                                                        </tbody>

                                                    </table>
                                                    

                                                </div>
                                            </div>
                                            
                                            
                                            `+evoCard+`
                                            <div class="f-poke-descr"><p class="px-5 m-0 f-poke-descr-p">Pokédex description:</p>
                                            <div class="f-poke-voice f-border-red">
                                            <p>`+descr+`<span>Pokémon `+descrVer+` ~  </span></p>
                                            <!--<p>Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.<span>Pokémon Red ~  </span></p>-->
                                            </div></div>
                                        </div>
                                    
                                </div>
                                </div>


                                </div>`;
                                
                                $("title").html("ShinyDex - "+ nameUC);
                                
                                $("#shinydex-app").html(myPokemonProfile);
                                
                                // call the funct to fill the genre-canvas w chart.js doughnut chart 
                                genreCanvas(genderData, bgColorGender);

                    // });
                });
            // let myContainer= `<div class="container-md">
            // </div>`;
            });
            
        });
        
    });
   

});

function capitalize(string){
    let newString= string[0].toUpperCase() + string.substring(1);
    return newString;

}
function capitalizeAll(string){
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    var newString= words.join(" ");
    return newString
}
const typeColors=[
    "#ffee05",
    "#6647b8",
    "#9f60e1",
    "#0ECC00",
    "#FF8B0D",
    "#00C7F2",
    "#CDCDCD",
    "#869AEB",
    "#8FCC00",
    "#C66E00",
    "#D8CB7F",
    "#BC0C0C",
    "#82F2F1",
    "#1345CE",
    "#FFBEFD",
    "#F97F7F",
    "#5DB3A7",
    "#16123E"
];
// dark. "#061233"  
// fighting. "#C51132"
function getTypeColor(typeName){
    let typeColor="#000000";
    if(typeName=="electric"){
        typeColor=typeColors[0];
    }else if(typeName=="ghost"){
      typeColor=typeColors[1];
  }else if(typeName=="poison"){
      typeColor=typeColors[2];
  }else if(typeName=="grass"){
    typeColor=typeColors[3];
}else if(typeName=="fire"){
    typeColor=typeColors[4];
}else if(typeName=="water"){
    typeColor=typeColors[5];
}else if(typeName=="normal"){
    typeColor=typeColors[6];
}else if(typeName=="flying"){
    typeColor=typeColors[7];
}else if(typeName=="bug"){
    typeColor=typeColors[8];
}else if(typeName=="ground"){
    typeColor=typeColors[9];
}else if(typeName=="rock"){
    typeColor=typeColors[10];
}else if(typeName=="fighting"){
    typeColor=typeColors[11];
}else if(typeName=="ice"){
    typeColor=typeColors[12];
}else if(typeName=="dragon"){
    typeColor=typeColors[13];
}else if(typeName=="fairy"){
    typeColor=typeColors[14];
}else if(typeName=="psychic"){
    typeColor=typeColors[15];
}else if(typeName=="steel"){
    typeColor=typeColors[16];
}else if(typeName=="dark"){
    typeColor=typeColors[17];
};
  return typeColor;
}
var cmToFeet = function (cmNum) {
    var feetNum = cmNum*0.032808;
    return feetNum;
  }
var zeroPad = function(num, pad){
    var pd = Math.pow(10,pad);
    return Math.floor(num*pd)/pd; 
  }
//   alert(zeroPad(1.32878,3)); // outputs 1,328
//   alert(zeroPad(1.32878,1)); // outputs 1,3
// alert(mt); // outputs 1613.841
const genreCanvas= (givenGenderData, givenBgColorGender)=>{
    
      
        const data = {
         
          datasets: [{
            label: 'My First dataset',
            data: givenGenderData,
            backgroundColor: givenBgColorGender,
            
            hoverOffset: 4
          }]
        };
      
        const config = {
            type: 'doughnut',
            data: data,
            options: {
                cutout: 25,
                plugins: {
        
                    
                }
            }
        };
        const myChart = new Chart(
          document.getElementById('genre-canvas'),
          config
        );
}
const defineBarColor=(baseStat)=>{
    var rangeBarColor= "blueBar";
    if(baseStat>=0 && baseStat<30){
        var rangeBarColor= "redBar";
    }else if(baseStat>=30 && baseStat<60){
        var rangeBarColor= "orangeBar";
    }else if(baseStat>=60 && baseStat<90){
        var rangeBarColor= "yellowBar";
    }else if(baseStat>=90 && baseStat<120){
        var rangeBarColor= "greenBar";
    }else if(baseStat>=120 && baseStat<150){
        var rangeBarColor= "greenerBar";
    }else if(baseStat>=150 && baseStat<180){
        var rangeBarColor= "cyanBar";
    }else if(baseStat>=180){
        var rangeBarColor= "violetBar";
    };
    return rangeBarColor
}
const calculateMaxStats = (baseStat)=>{
    var maxStat= Math.floor(Math.floor(((((2*baseStat)+31+63)*100)/100)+5)*1.1);
    return maxStat
    
    }
    const calculateMaxHP = (baseStat)=>{
    var maxStat= Math.floor(((((2*baseStat)+31+63)*100)/100)+100+10);
    return maxStat
    
    }
    const calculateMinStats = (baseStat)=>{
    var minStat= Math.floor(Math.floor(((((2*baseStat)+0+0)*100)/100)+5)*0.9);
    return minStat
    
    }
    const calculateMinHP = (baseStat)=>{
    var minStat= Math.floor(((((2*baseStat)+0+0)*100)/100)+100+10);
    return minStat
    
    }

    const statsRangeBar =(baseStat)=>{
        var rangeDivider=180/baseStat;
        var rangeBar =100/rangeDivider;
        if(baseStat>180){
            rangeDivider=baseStat/baseStat;
            rangeBar =100/rangeDivider;
        }
        return rangeBar

    }
    
    
//   const  getFirstEvoArt=(url)=>{


//      $.ajax({
//         type: 'GET',
//         url: url,
//         success: function(response) {

//           var evoId = response.id; 
//          console.log("ajax work: "+evoId);
//         return evoId
          
//         },
//         error: function(error) {
//             console.log('not implemented');
//         }
//       });
//   }

const getUnusualEvoChain=(url, urlNumber)=>{
    console.log("this is an unusual evo chain!" +url, urlNumber);
    var baseEvoUrl="";
    $.ajax({
        url: url,
        async: false,
        dataType: 'json',
        success: function (json) {
            chain= json.chain;
            baseEvo=chain.species;
            baseEvoName = baseEvo.name;
            baseEvoSpecieUrl=baseEvo.url;
            baseEvoUrl= baseEvoSpecieUrl.replace("-species", "");
            console.log("this is base evo url: "+baseEvoUrl);
        }
        });
        var baseEvoId = "";
    var baseEvoArt="";
        $.ajax({
        url: baseEvoUrl,
        async: false,
        dataType: 'json',
        success: function (json) {
            baseEvoId = json.id;
            baseSprites=json.sprites;
            baseOthers=baseSprites.other;
            baseOffArt=baseOthers["official-artwork"];
            baseEvoArt=baseOffArt.front_default;
        }
        });
        console.log("my first evo id: "+baseEvoId);
        var evo1= chain.evolves_to;
        if (evo1.length===1){ 
            //evo chain with !! only one !! first stadium forms, and NO second stadiums.
                                //(es. Rattata, Raticate - evo chain 7)
              var firstEvo=evo1[0].species;
            var firstEvoMon= firstEvo.name;
            console.log("evochain first stadium, 1° evomon: "+firstEvoMon);
            var firstEvoSpecieUrl=firstEvo.url;
            var firstEvoUrl= firstEvoSpecieUrl.replace("-species", "");
            console.log("this is first evo url: "+firstEvoUrl);
            var firstEvoId = "";
            var firstEvoArt="";
                $.ajax({
                url: firstEvoUrl,
                async: false,
                dataType: 'json',
                success: function (json) {
                    firstEvoId = json.id;
                    firstEvoSprites=json.sprites;
                    firstEvoOthers=firstEvoSprites.other;
                    firstEvoOffArt=firstEvoOthers["official-artwork"];
                    firstEvoArt=firstEvoOffArt.front_default;
                }
                });
                console.log("my first evo id: "+firstEvoId);
                var evo2= evo1[0].evolves_to;
                if(evo2.length===1){
                    //evo chain with !! only one !! first stadium forms, and ONLY ONE ! second stadium.
                    //(es. Pichu, Pikachu, Raichu - evo chain 10)
                    var evostadium2= evo2[0].species;
                    var evoSt2=evostadium2.name;
                    console.log("evochain second stadium, 1° evomon: "+evoSt2);


                    var evoStadium2Url=evostadium2.url;
                    var evoSt2Url= evoStadium2Url.replace("-species", "");
                    
                    var evoSt2Id = "";
                    var evoSt2Art="";
                        $.ajax({
                        url: evoSt2Url,
                        async: false,
                        dataType: 'json',
                        success: function (json) {
                            evoSt2Id = json.id;
                            evoSt2Sprites=json.sprites;
                            evoSt2Others=evoSt2Sprites.other;
                            evoSt2OffArt=evoSt2Others["official-artwork"];
                            evoSt2Art=evoSt2OffArt.front_default;
                        }
                        });
                }else if(evo2.length===2){
                    //evo chain with !! only one !! first stadium forms, and ! TWO !! second stadiums.
                    //(es Cosmog, Cosmoem, Solgaleo/Lunala - evo chain 413 !!! NON so se SERVIRA' !!)
                    let firstEvostadium2= evo2[0].species;
                    let firstSt2=firstEvostadium2.name;
                    console.log("evochain second stadium, 1° evomon: "+firstSt2);
                    let secondEvostadium2= evo2[1].species;
                    let secondSt2=secondEvostadium2.name;
                    console.log("evochain second stadium, 2° evomon: "+secondSt2);


                    let firstStadium2Url=firstEvostadium2.url;
                    let firstSt2Url= firstStadium2Url.replace("-species", "");
                    
                    let firstSt2Id = "";
                    let firstSt2Art="";
                        $.ajax({
                        url: firstSt2Url,
                        async: false,
                        dataType: 'json',
                        success: function (json) {
                            firstSt2Id = json.id;
                            firstSt2Sprites=json.sprites;
                            firstSt2Others=firstSt2Sprites.other;
                            firstSt2OffArt=firstSt2Others["official-artwork"];
                            firstSt2Art=firstSt2OffArt.front_default;
                        }
                        });
                    let secondStadium2Url=secondEvostadium2.url;
                    let secondSt2Url= secondStadium2Url.replace("-species", "");
                    
                    let secondSt2Id = "";
                    let secondSt2Art="";
                        $.ajax({
                        url: secondSt2Url,
                        async: false,
                        dataType: 'json',
                        success: function (json) {
                            secondSt2Id = json.id;
                            secondSt2Sprites=json.sprites;
                            secondSt2Others=secondSt2Sprites.other;
                            secondSt2OffArt=secondSt2Others["official-artwork"];
                            secondSt2Art=secondSt2OffArt.front_default;
                        }
                        });
                }
        }else if(evo1.length===2){
            //evolution chain with !! TWO !! first stadium forms 
            //(es. Slowpoke, Slowbro/Slowking - evo chain 33)
            let firstEvoDetails= evo1[0].evolution_details;
            let firstEvo=evo1[0].species;
            var firstEvoMon= firstEvo.name;
            let secondEvo=evo1[1].species;
            var secondEvoMon= secondEvo.name;
            console.log("evochain first stadium, 1° evomon: "+firstEvoMon);
            console.log("evochain first stadium, 2° evomon: "+secondEvoMon);
            var firstEmonUrl=firstEvo.url;
            var firstEvoMonUrl= firstEmonUrl.replace("-species", "");
            console.log("this is first evo url: "+firstEvoMonUrl);
            var firstEvoMonId = "";
            var firstEvoMonArt="";
                $.ajax({
                url: firstEvoMonUrl,
                async: false,
                dataType: 'json',
                success: function (json) {
                    firstEvoMonId = json.id;
                    firstEvoMonSprites=json.sprites;
                    firstEvoMonOthers=firstEvoMonSprites.other;
                    firstEvoMonOffArt=firstEvoMonOthers["official-artwork"];
                    firstEvoMonArt=firstEvoMonOffArt.front_default;
                }
                });
                console.log("my first evo id: "+firstEvoMonId);
            var secondEmonUrl=secondEvo.url;
            var secondEvoMonUrl= secondEmonUrl.replace("-species", "");
            console.log("this is second evo url: "+secondEvoMonUrl);
            var secondEvoMonId = "";
            var secondEvoMonArt="";
                $.ajax({
                url: secondEvoMonUrl,
                async: false,
                dataType: 'json',
                success: function (json) {
                    secondEvoMonId = json.id;
                    secondEvoMonSprites=json.sprites;
                    secondEvoMonOthers=secondEvoMonSprites.other;
                    secondEvoMonOffArt=secondEvoMonOthers["official-artwork"];
                    secondEvoMonArt=secondEvoMonOffArt.front_default;
                }
                });
                console.log("my second evo id: "+secondEvoMonId);
        
        
            // let evo2from1= evo1[0].evolves_to;
            // let evo2from2= evo1[1].evolves_to;
        }
 
if(urlNumber==7){
  //rattata-raticate 
var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
    <p>Evolution Line:</p>
    <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
            <small>Lv 20+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
        
    </div>
    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
            <small>Lv 20+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">night</small></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
        
    </div>
</div>`;

}else if(urlNumber==10){
    //pichu-pikachu-raichu
    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
    <p>Evolution Line:</p>
        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
        <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">high friendship<br>(min. happiness: 160)</small></span>
                <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                <span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                <span class="pb-3 d-flex flex-column align-self-center"><small>Thunder Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <span class="pt-3 d-flex flex-column align-self-center">
                <small>Thunder Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">(Alola)</small>
                </span></span>
        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span>
        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span>
        </div>
        </div>
    </div>`;
}else if(urlNumber==11){
    //sandshrew-sandslash
    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
    <p>Evolution Line:</p>
    <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
        <small>Lv 22+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
        
    </div>
    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
        <small>Ice Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
        
    </div>
</div>`;
    
    }else if(urlNumber==15){
        //vulpix-ninetales
        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
        <p>Evolution Line:</p>
        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                <small>Fire Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
            
        </div>
        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                <small>Ice Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
            
        </div>
    </div>`;
        
        }else if(urlNumber==21){
            //diglett-dugtrio
            var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                   <small>Lv 26+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                
            </div>
            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                   <small>Lv 26+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                
            </div>
        </div>`;
            
            
        }else if(urlNumber==22){
            //meowth-persian-perrserker
            var evoCard=`<div class="row f-evo-line mt-4 pt-2 text-center">
                <p>Evolution Line:</p>
                <div class="col-12 col-lg-6 row justify-content-center mb-3 p-0">
                    <div class="p-0 col-2 col-lg-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 p-0">
                        <small>Lv 28+</small><i class="fa-solid fa-share"></i></span>
                    <div class="p-0 col-2 col-lg-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                   
                </div>
                <div class="col-12 col-lg-6 row justify-content-center mb-3 p-0">
                    <div class="p-0 col-2 col-lg-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 p-0">
                        <small>Lv 28+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">high friendship<br>(min. happiness: 160)</small></span>
                    <div class="p-0 col-2 col-lg-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                   
                </div>
                <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                        <small>Lv 28+</small><i class="fa-solid fa-share"></i></span>
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span></div>
                   
                </div>
            </div>`;
            
            }else if(urlNumber==31){
                //geodude-graveler-golem
                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                <p>Evolution Line:</p>
                    <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Lv 25+</small><i class="fa-solid fa-share"></i></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Trade</small><i class="fa-solid fa-share"></i></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span></div>
                    </div>
                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Lv 25+</small><i class="fa-solid fa-share"></i></span>
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Trade</small><i class="fa-solid fa-share"></i></span>
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span></div>
                </div>
                </div>`;
            
            
        }else if(urlNumber==32){
            //ponyta-rapidash
            var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                <small>Lv 40+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                
            </div>
            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                <small>Lv 40+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                
            </div>
        </div>`;
            
            
        }else if(urlNumber==33){
            //slowpoke-slowbro-slowking
            var evoCard=`<div class="row f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="col-12 col-lg-6 row justify-content-center mb-3 my-lg-0 p-0">
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 align-self-center p-0">
                <span class="pb-3 d-flex flex-column align-self-center"><small>Lv 37+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <span class="pt-3 d-flex flex-column align-self-center">
                <small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">holding Kings Rock</small>
                </span></span>
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span>
                </div>
            </div>
            <div class="col-12 col-lg-6 row justify-content-center my-0 p-0">
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 align-self-center p-0">
                <span class="pb-3 d-flex flex-column align-self-center"><small>Galarica Cuff</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <span class="pt-3 d-flex flex-column align-self-center">
                <small>Galarica Wreath</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small>
                </span></span>
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span>
                </div>
            </div>
        </div>`;           
            }else if(urlNumber==34){
                //magnemite-magneton-magnezone
                //in a special magneitc field
                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                <p>Evolution Line:</p>
                    <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Lv 30+</small><i class="fa-solid fa-share"></i></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
<small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">in a special magneitc field</small></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span></div>
                    </div>
                    
                </div>`;
            }else if(urlNumber==35){
                //farfetch'd / galarian farfetch'd-sirfetch'd
                //Land three critical hits in one battle
                var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                <p>Evolution Line:</p>
                <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">Farfetch'd</span></span></div>                                    
                </div>
                <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">Farfetch'd</span></span></div>
                    <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                         <small></small><i class="fa-solid fa-share"></i><small style="font-size:9px;">Land three critical hits<br>in one battle</small></span>
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">Sirfetch'd</span></span></div>
                    
                </div>
            </div>`;
            
                
                }else if(urlNumber==38){
                    //grimer-muk
                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                    <p>Evolution Line:</p>
                    <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                            <small>Lv 38+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                        
                    </div>
                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                        <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                            <small>Lv 38+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                        
                    </div>
                </div>`;
                    
                    }else if(urlNumber==45){
                        //exeggcute-exeggutor
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="row justify-content-center my-0 py-0 my-lg-0 p-0">
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 align-self-center p-0">
                <span class="pb-3 d-flex flex-column align-self-center"><small>Leaf Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <span class="pt-3 d-flex flex-column align-self-center">
                <small>Leaf Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">(Alola)</small>
                </span></span>
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                </div>
            </div>`;     
                    }else if(urlNumber==46){
                        //cubone-marowak
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="row justify-content-center my-0 py-0 my-lg-0 p-0">
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 align-self-center p-0">
                <span class="pb-3 d-flex flex-column align-self-center"><small>Lv 28+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                <span class="pt-3 d-flex flex-column align-self-center">
                <small>Lv 28+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">night<br>(Alola)</small>
                </span></span>
                <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                </div>
            </div>`;          
                    }else if(urlNumber==49){
                        //koffing-weezing
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center my-0 py-0 my-lg-0 p-0">
                            <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column col-2 align-self-center p-0">
                            <span class="pb-3 d-flex flex-column align-self-center"><small>Lv 35+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <span class="pt-3 d-flex flex-column align-self-center">
                            <small>Lv 35+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">(Galar)</small>
                            </span></span>
                            <div class="p-0 col-2 col-lg-3 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                            <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                            </div>
                        </div>`;
                    }else if(urlNumber==57){
                        //mime jr-mr.mime-mr.rime
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">Mime Jr.</span></span></div>
                                <span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                                <span class="pb-3 d-flex flex-column align-self-center"><small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">knowing Mimic</small></span>
                                <span class="pt-3 d-flex flex-column align-self-center">
                                <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">knowing Mimic<br>(Galar)</small>
                                </span></span>
                                <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">Mr. Mime</span></span>
                            <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">Mr. Mime</span></span>
                            </div>

                            <span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                            <span class="pb-3 d-flex flex-column align-self-center invisible"><small>Lv 42+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <span class="pt-3 d-flex flex-column align-self-center"><small>Lv 42+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small>
                            </span></span>
                            <div class="p-0 col-2 align-self-center"><span class="invisible"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2 invisible"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">Mr. Rime</span></span>
                            <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">Mr. Rime</span></span>
                            </div>
                            </div>
                        </div>`;      
                    }else if(urlNumber==113){
                        //corsola-cursola
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                    <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>                                    
                </div>
                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Lv 38+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                    </div>`;
                    }else if(urlNumber==144){
                        //nincada-ninjask-shedinja
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Lv 20+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class="invisible"><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column invisible"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small></small><i class="fa-solid fa-share"></i><small style="font-size:9px;">if an empty slot<br>in party and a regular Poké Ball<br>in bag</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span></div>
                            
                        </div>
                    </div>`;
                }else if(urlNumber==147){
                    //nosepass-probopass
                    //in a special magneitc field
                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">in a special magneitc field</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        
                    </div>`;
                }else if(urlNumber==178){
                    //feebas-milotic
                    //Level-up - high beauty<br>(min. beauty: 170) // Trade - holding Prism Scale
                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                            <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">high beauty<br>(min. beauty: 170)</small><small>Trade</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">holding Prism Scale</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        
                    </div>`;
                        
                    }else if(urlNumber==282){
                        //darumaka-darmanitan
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Lv 35+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Ice Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                    </div>`;
                    }else if(urlNumber==287){
                        //yamask-cofagrigus / galarian yamask-runerigus
                        //Travel under the stone bridge in Dusty Bowl after taking at least 49 HP in damage from attacks without fainting
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>Lv 34+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small></small><i class="fa-solid fa-share"></i><small style="font-size:9px;">Travel under the stone bridge<br>in Dusty Bowl after taking at least<br>49 HP in damage<br>from attacks without fainting</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+secondEvoMonArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(secondEvoMonId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span></div>
                            
                        </div>
                    </div>`;
                }else if(urlNumber==379){
                    //grubbin-charjabug-vikavolt
                    //in a special magneitc field
                    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                    <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
    <small>Lv 20+</small><i class="fa-solid fa-share"></i></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                            <small>Level-up</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">in a special magnetic field</small><small>Thunder Stone</small><i class="fa-solid fa-share"></i><small style="font-size:9px;"></small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+evoSt2Art+`" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(evoSt2Id,4)+`</small><span class="f-evo-sprite-name">`+capitalize(evoSt2)+`</span></span></div>
                        </div>
                        
                    </div>`;
                        
                    }else if(urlNumber==383){
                        //rockruff-lycanroc
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                <div class="p-0 col-12 pb-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                <div class="row justify-content-center col-12">
                                <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Lv 25+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">day</small>
                                </span>
                                <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Lv 25+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">night</small>
                                </span>
                                <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Lv 25+</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">dusk<br>ability: Own Tempo</small>
                                </span>
                                </div>
                                <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                
                                <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10126.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                                <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10152.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            </div>
                        </div>`;
                    }else if(urlNumber==428 || urlNumber==429){
                        //meltan-melmetal
                        //Meltan Candy - in Pokémon GO
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3 mx-lg-5 px-lg-5">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#808</small><span class="f-evo-sprite-name">Meltan</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small>400+<br>Meltan Candy</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">in Pokémon GO</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#809</small><span class="f-evo-sprite-name">Melmetal</span></span></div>
                            
                        </div>
                        
                    </div>`;
                    
                    }else if(urlNumber==449){
                        //sinistea-polteageist
                        //
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                            <small>Cracked Pot</small><i class="fa-solid fa-share"></i><small style="font-size:9px;" class="f-evospan-border">(Phony Form)</small><small>Chipped Pot</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">(Antique Form)</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        
                    </div>`;
                    }else if(urlNumber==452){
                        //milcery-alcremie
                        //holding a Sweet when/while the player spins and strikes a pose while Milcery holds a Sweet.
                        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                        <p>Evolution Line:</p>
                        <div class="row justify-content-center mb-3">
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                            <span class="d-flex flex-column align-self-center col-2 col-xl-1 p-0">
                                <small></small><i class="fa-solid fa-share"></i><small style="font-size:9px;">holding a Sweet<br>while the player spins and strikes a pose</small></span>
                            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                            
                        </div>
                        
                    </div>`;
                    }else if(urlNumber==470){
                        //kubfu-urshifu
                        //trigger: towers of two fists
                    //(single strike style: Interact with Scroll of Darkness; rapid strike style: Interact with Scroll of Waters)
                    var evoCard=`<div class="row f-evo-line mt-4 pt-2 text-center">
                    <p>Evolution Line:</p>
                 
                    <div class="row justify-content-center my-0 py-0">
                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+baseEvoArt+`" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(baseEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                        <span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                        <span class="pb-3 d-flex flex-column align-self-center"><small>Towers of<br>Two Fists</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">interact with<br>Scroll of Darkness</small></span>
                        <span class="pt-3 d-flex flex-column align-self-center">
                        <small>Towers of<br>Two Fists</small><i class="fa-solid fa-share"></i><small style="font-size:9px;">interact with<br>Scroll of Waters</small>
                        </span></span>
                        <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="`+firstEvoArt+`" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                        <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10191.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#`+padPokemonNumber(firstEvoId,4)+`</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
                        </div>
                    </div>
                </div>`;  
                        
                    }
return evoCard
};

function colorPokedexDescription() {

}
