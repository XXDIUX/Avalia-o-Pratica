
let usuarios = [];
function adicionarUsuario(nome, idade, email) {
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        console.log('Nome inválido.');
        return;
    }

    if (!idade || typeof idade !== 'number' || idade <= 0) {
        console.log('Idade inválida.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
        console.log('Email inválido.');
        return;
    }

    usuarios.push({ nome, idade, email });
    console.log('Usuário adicionado com sucesso.');
}
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    console.log('Usuários cadastrados:');
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}

adicionarUsuario('João Silva', 30, 'joao.silva@example.com');
adicionarUsuario('Maria Oliveira', 25, 'maria.oliveira@example.com');
adicionarUsuario('', 25, 'maria.oliveira@example.com'); 
adicionarUsuario('Ana Costa', -5, 'ana.costa@example.com'); 
adicionarUsuario('Carlos Pereira', 40, 'carlos.pereira@com'); 
listarUsuarios();