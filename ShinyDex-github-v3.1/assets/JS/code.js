$(document).ready(function(){

    // app html
    var app_html=`
    <div id="myHeader" class="header mt-5 ms-3"><h1 id="myTitle"></h1></div>
   
    <div id="test"></div>
    <div id="buttonsContainer" class="my-5 container-fluid"></div>
    <div id="nationalPokedex" class="f-grid collapse show active"></div>
    <div id="fixed-btn" class="fixed">
        
    </div>
    
        <!-- big-modal -->
    <div class="modal bs-example-modal-md fade" id="myModal" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title f-modal-tit" id="exampleModalLabel"></h5><button type="button" class="btn-close f-modalcloser" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"></div></div></div></div>`;

    // inject to 'app' in index.html
    $("#shinydex-app").html(app_html);

});

// change page title
function changePageTitle(page_title){

    // change page title
    $('#page-title').text(page_title);

    // change title tag
    document.title=page_title;
}


