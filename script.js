document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      document.getElementById('successMessage').classList.remove('hidden');
      document.getElementById('signupForm').reset(); // Limpa o formulário
    }
  });
  