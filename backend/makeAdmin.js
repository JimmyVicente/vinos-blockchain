require('dotenv').config();
const { connect } = require('./database');
const Usuario = require('./modelos/usuario');

async function run() {
    await connect();
    const billetera = '0x992Ac5F908959E740eA8e323dcb5A01eD99Fd59E'; // Tu cuenta generada a partir de tu PRIVATE_KEY
    
    try {
        let user = await Usuario.findOne({ billetera });
        if (user) {
            user.rol = 1;
            user.permisos = JSON.stringify([1,2,3,4,5,6,7,8]);
            await user.save();
            console.log('✅ Tu billetera fue actualizada a Administrador exitosamente.');
        } else {
            await Usuario.create({
                billetera,
                nombre: 'Administrador Principal',
                rol: 1,
                permisos: JSON.stringify([1,2,3,4,5,6,7,8])
            });
            console.log('✅ Tu billetera fue registrada como Administrador exitosamente.');
        }
    } catch(e) {
        console.error('Error al actualizar: ', e);
    }
    process.exit(0);
}
run();
