function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Arthur', 'Admin');
usuarios.set('Sophia', 'User');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));