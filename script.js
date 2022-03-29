
// CURSOR

(function () {

  const link = document.querySelectorAll('nav > .hover-this');
  const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);

})();

// OLHINHOS

const eye1 = document.querySelector('#eye1')
const eye2 = document.querySelector('#eye2')
window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 2 - evt.pageY) / 160;
    eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  
  

// SCRIPT DE IDIOMA
 $('[lang="fr"]').$("h1").css("align-text:justify");

// PADRÃO HOMEPAGE PORTUGUES
$('#switch-pt').hide();
    $('[lang="esp"]').hide();
    $('[lang="en"]').hide();
    $('[lang="pt"]').show();
    $('[lang="fr"]').hide();

    //PÁGINA ESPANHOL
    $('#switch-es').click(function () {
      $('#switch-es').hide(); //desativa botao esp
      $('#switch-pt').show(); //mostra outros botoes
      $('#switch-en').show();
      $('#switch-fr').show();

      $('#lang-display').html('ES') //tag ES
      $('[lang="esp"]').show(); //mostra conteudo espanhol/esconde conteudo outras linguas
      $('[lang="en"]').hide();
      $('[lang="pt"]').hide();
      $('[lang="fr"]').hide();
    });

    //PAGINA PORTUGUES

    $('#switch-pt').click(function () {
      $('#switch-pt').hide(); //esconde botao pt e mostra outros
      $('#switch-en').show();
      $('#switch-es').show();
      $('#switch-fr').show();

      $('#lang-display').html('PT') //tag PT
      $('[lang="esp"]').hide();
      $('[lang="en"]').hide();
      $('[lang="pt"]').show(); //mostra conteudo PT
      $('[lang="fr"]').hide();
    });

    //PAGINA INGLES

    $('#switch-en').click(function () {
      $('#switch-en').hide();
      $('#switch-pt').show();
      $('#switch-es').show();
      $('#switch-fr').show();

      $('#lang-display').html('EN')
      $('[lang="esp"]').hide();
      $('[lang="en"]').show();
      $('[lang="pt"]').hide();
      $('[lang="fr"]').hide();
    });

    //pagina FRances

    $('#switch-fr').click(function () {
      $('#switch-en').show();
      $('#switch-pt').show();
      $('#switch-es').show();
      $('#switch-fr').hide();

      $('#lang-display').html('FR')
      $('[lang="esp"]').hide();
      $('[lang="en"]').hide();
      $('[lang="pt"]').hide();
      $('[lang="fr"]').show();
    });