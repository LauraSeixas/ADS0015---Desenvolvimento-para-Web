document.getElementById('contatoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;

  

fetch('url_do_servidor', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome: nome, email: email, mensagem: mensagem })
  })
  .then(function(response) {
           console.log('Dados enviados com sucesso');
  })
  .catch(function(error) {
      console.error('Ocorreu um erro ao enviar os dados:', error);
  });
});