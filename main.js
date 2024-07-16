
document.getElementById('emailButton').addEventListener('click', sendMail);

function sendMail (e) {
  
    e.preventDefault(); 
   
    const mail = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;
    const name = document.getElementById('nome').value;

    if (mail && message && name) {
      
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "karla_vnascimento@hotmail.com",
            Password: "DEC2D639F495E62FA13560F08BE5F405E6B8",
            To: "karlanascimento14@outlook.com",
            From: "karla_vnascimento@hotmail.com",
            Subject: `${name} Enviando E-mail Com Javascript`,
            Body: `Email: ${mail} \n \n ${message}`,
          }).then(() => {
           
            alert('Mensagem enviada!');
          
            location.reload();
          });
    } else {
       
        alert('Preencha todos os campos!');
    }    
}