 // INICIALIZAÇÃO 
 $(document).ready(function(){
    // MENU MOBILE
    $(".button-collapse").sideNav();
    // LINK INTERNO
    $(".scrollspy").scrollSpy({
        scrollOffset: 0
    });
    // CAROUSEL
    $(".carousel.carousel-slider").carousel({
        fullWidth:true
    });
    // MODAL
    $(".modal").modal();
    // TABS
    $("ul.tabs").tabs();
    // ESCONDER MENU AO CLICAR
    $(".hide-menu").click(function(){
        $(".button-collapse").sideNav("hide");
    });
    // AUTOPLAY
    function autoplay() {
        $(".carousel").carousel("next");
        setTimeout(autoplay, 4500);
    }

    autoplay();

});        
// ADICIONANDO NAVCOLOR
$(window).on("scroll", function(){
    if($(window).scrollTop() > 100) {
        $(".navbar").addClass("nav-color");
    } else {
        $(".navbar").removeClass("nav-color");
    }
});

// o push() e para gerar uma chave padrao no firebase
var dbRefObject = firebase.database().ref('User').push();

function confirmUpload() {
    
    if(document.getElementById("name").value == ""){
        alert('Por favor, preencha o campo Nome');
    return false	
    } else if(document.getElementById("email").value == ""){
        alert('Por favor, preencha o campo Email');
    return false	
    } else if(document.getElementById("telephone").value == ""){
        alert('Por favor, preencha o campo WhatsApp');
    return false	
    } else if(document.getElementById("message").value == ""){
        alert('Por favor, preencha o campo Mensagem');
    return false	
    } else {
			var nome = document.getElementById("name").value;
	        var email = document.getElementById("email").value;
	        var tele = document.getElementById("telephone").value;
            var mensa = document.getElementById("message").value;
	        //essa linha e para salvar a chave gerado no firebase no banco
            var chave = dbRefObject.getKey();
			dbRefObject.child("/chave").set(chave);
			dbRefObject.child("/nome").set(nome);
			dbRefObject.child("/email").set(email);
			dbRefObject.child("/whatsapp").set(tele);
			dbRefObject.child("/mensagem").set(mensa);
			alert('Seu Pedido foi Enviado com Sucesso!'); 
    }
}