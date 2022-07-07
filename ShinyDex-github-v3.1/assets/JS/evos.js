var chain= jsonObj.chain;
var baseEvo=chain.species;
var baseEvoName = baseEvo.name;
console.log("evochain base: "+baseEvoName);
var evo1= chain.evolves_to;
if (evo1.length===0){
    //evolution chain with ONLY BASE form.
    //(es. Dunsparce)
    console.log("evochain with only base form");
    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
    <p>Evolution Line:</p>
    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
        <!--<span class="d-flex flex-column col-2 col-xl-1 p-0">
            <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">Nothing</span></span></div>
        <span class="d-flex flex-column col-2 col-xl-1 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
        <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">Null</span></span></div>-->
    </div>
</div>`;

}else if(evo1.length===1){
    //evolution chain with ONLY ONE first stadium form.   
    var firstEvo=evo1[0].species;
    var firstEvoMon= firstEvo.name;
    console.log("evochain first stadium, 1° evomon: "+firstEvoMon);

    var evo2= evo1[0].evolves_to;
    if(evo2.length===0){console.log("evochain with no 2° evo form");
    //evo chain with !! only one !! first stadium forms, and NO second stadiums.
    //(es. Sandygast, Palossand)
        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
            <p>Evolution Line:</p>
            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 col-xl-1 p-0">
                    <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                <!--<span class="d-flex flex-column col-2 col-xl-1 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">Null</span></span></div>-->
            </div>
        </div>`;

    }else if(evo2.length===1){
        //evo chain with !! only one !! first stadium forms, and ONLY ONE ! second stadium.
        //(es. Gastly, Haunter, Gengar)
        var firstEvostadium2= evo2[0].species;
        var firstEvoSt2=firstEvostadium2.name;
        console.log("evochain second stadium, 1° evomon: "+firstEvoSt2);
        var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
        <p>Evolution Line:</p>
            <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                <span class="d-flex flex-column col-2 col-xl-1 p-0">
                    <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
                <span class="d-flex flex-column col-2 col-xl-1 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(firstEvoSt2)+`</span></span></div>
            </div>
        </div>`;
    
    }else if(evo2.length===2){
        //evo chain with !! only one !! first stadium forms, and ! TWO !! second stadiums.
        //(es Oddish, Gloom, Bellossom/Vileplume  opp.  Poliwag, Poliwhirl, Poliwrath/Politoed)
        let firstEvostadium2= evo2[0].species;
        let firstEvoSt2=firstEvostadium2.name;
        console.log("evochain second stadium, 1° evomon: "+firstEvoSt2);
        let secondEvostadium2= evo2[1].species;
        let secondEvoSt2=secondEvostadium2.name;
        console.log("evochain second stadium, 2° evomon: "+secondEvoSt2);
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


    let evo2from1= evo1[0].evolves_to;
    let evo2from2= evo1[1].evolves_to;
    if(evo2from1.length===0 && evo2from2.length===0){
        //evolution chain with !! TWO !! first stadium forms and  NO  second stadiums.
        //(es. Slowpoke, Slowbro/Slowking  opp.  Scyther, Scizor/Kleavor opp. Nincada, Ninjask/Shedinja )
        console.log("evochain with no 2° evo form from 1° stadium mons (each first and second mons) ");

    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
        <p>Evolution Line:</p>
        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
            <span class="d-flex flex-column col-2 col-xl-1 align-self-center p-0">
                <small>Lv 25</small><i class="fa-solid fa-share pb-5"></i><small class="pt-5">Trade</small><i class="fa-solid fa-share"></i></span>
            <div class="p-0 col-2 align-self-center"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column pb-2"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span>
            <span class="pt-2"><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span>
            </div>
            <!--<span class="d-flex flex-column col-2 col-xl-1 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">Nobody</span></span></div>-->
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
    var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
    <p>Evolution Line:</p>
        <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
            <div class="p-0 col-12"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
            <div class="row justify-content-center col-12">
            <span class="d-flex flex-column col-4 col-xl-2 p-0">
                <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
                <span class="d-flex flex-column col-4 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                <span class="d-flex flex-column col-4 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
            </div>
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(firstEvoMon)+`</span></span></div>
            
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(secondEvoMon)+`</span></span></div>
            <div class="p-0 col-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(thirdEvoMon)+`</span></span></div>
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
    let firstEvo=evo1[0].species;
    var firstEvoMon= firstEvo.name;
    let secondEvo=evo1[1].species;
    var secondEvoMon= secondEvo.name;
    let thirdEvo=evo1[2].species;
    var thirdEvoMon= thirdEvo.name;
    let fourthEvo=evo1[3].species;
    var fourthEvoMon= fourthEvo.name;
    let fifthEvo=evo1[4].species;
    var fifthEvoMon= fifthEvo.name;
    let sixthEvo=evo1[5].species;
    var sixthEvoMon= sixthEvo.name;
    let seventhEvo=evo1[6].species;
    var seventhEvoMon= seventhEvo.name;
    let eighthEvo=evo1[7].species;
    var eighthEvoMon= eighthEvo.name;
    
    console.log("this is Eevee; it has 8 evo forms: "+firstEvoMon+" "+secondEvoMon+" "+thirdEvoMon+" "+fourthEvoMon+ " " +fifthEvoMon+" "+ sixthEvoMon+" "+ seventhEvoMon+" "+ eighthEvoMon)
}



//EEVEE EVO CHAIN

var evoCard=`<div class="f-evo-line mt-4 pt-2 text-center">
                                <p>Evolution Line:</p>
                                    <div class="row justify-content-center my-0 py-0 mx-lg-5 px-lg-5">
                                        <div class="p-0 col-12 pb-3"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/92aw.png" alt="base sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#092</small><span class="f-evo-sprite-name">`+capitalize(baseEvoName)+`</span></span></div>
                                        <div class="row justify-content-center col-12">
                                        <span class="d-flex flex-column col-3 col-xl-2 p-0">
                                            <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                        </div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(firstEeveeMon)+`</span></span></div>
                                        
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(secondEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(thirdEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/93aw.png" alt="stadium one sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#093</small><span class="f-evo-sprite-name">`+capitalize(fourthEeveeMon)+`</span></span></div>
                                        <div class="row justify-content-center col-12  pt-3">
                                        <span class="d-flex flex-column col-3 col-xl-2 p-0">
                                            <small>Lv 25</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                            <span class="d-flex flex-column col-3 col-xl-2 p-0"><small>Trade</small><i class="fa-solid fa-share"></i></span>
                                        </div>
                                        
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(fifthEeveeMon)+`</span></span></div>
                                        
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(sixthEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(seventhEeveeMon)+`</span></span></div>
                                        <div class="p-0 col-3 col-xl-2"><span class=""><a href=""><img class="img-fixed f-pmn-evosprite" src="assets/img/94aw.png" alt="stadium 2 sprite"></a></span><span class="d-flex flex-column"><small class="text-muted f-evo-index-number">#094</small><span class="f-evo-sprite-name">`+capitalize(eighthEeveeMon)+`</span></span></div>
                                    </div>
                                </div>`;