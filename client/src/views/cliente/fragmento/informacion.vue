<template>
    <section class="container ">
<br><br><br>
        <h1>Información acerca del funcionamiento de la trazabililidad Vinos Ambrosia</h1><br>


        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in preguntas" :key="i">
                <v-expansion-panel-header style="font-size: 18px;">{{ i + 1 }}. {{ item.titulo }}
                </v-expansion-panel-header>
                <v-expansion-panel-content style="color: grey; padding-left: 20px; text-align: start; font-size: 15px;">
                    <div v-html="item.cuerpo"> </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </section>
</template>

<script>

export default {
    name: "Inicio_Informacion",
    components: {},
    data: () => ({
        preguntas: [
            {
                titulo: "¿Qué es Metamask?",
                cuerpo: `MetaMask es una aplicación (extensión web o app móvil) 
                que permite administrar las claves privadas de Ethereum a través de su navegador web. 
                Al hacerlo, se convierte en una billetera para tokens Ether y ERC-20.`
            },
            {
                titulo: "¿Cómo instalar Metamasken Chrome?",
                cuerpo: `
                <ol>
                    <li>Visita <a href="https://metamask.io/" data-wpel-link="external" target="_blank" rel="nofollow external noopener noreferrer">https://metamask.io/</a>.</li>
                    <li>Haz clic en “Descargar”.</li>
                    <li>Haz clic en “Instalar MetaMask”. Se te dirigirá a la extensión de Chrome Web Store.</li>
                    <li>Haz clic en “Agregar a Chrome”.</li>
                    <li>En la ventana emergente, haz clic en “Agregar extensión”.</li>
                </ol>
                <p>Después de agregar la extensión de MetaMask a tu navegador basado en Chrome, 
                    el icono de MetaMask va aparecer en la bara de tu navegador y 
                    puedes hacer Clic sobre él para abrir la billetera de MetaMask./p>
                `
            },
            {
                titulo: "¿Cómo agregar Sepolia Testnet Network a Metamask ?",
                cuerpo: `
                <ol>
                    <li>Visita <a href="https://sepolia.dev" data-wpel-link="external" target="_blank" rel="nofollow external noopener noreferrer">
                        https://sepolia.dev</a> página oficial.</li>
                    <li>Hacer click en "+ ADD TO METAMASk"</li>
                    <li>Se agregará a la lista de redes en Metamask</li>
                </ol>
                `
            },
            {
                titulo: "¿Cómo obtener ETHERS en Sepolia Testnet Network ?",
                cuerpo: `
                <ol>
                    <li>Visita <a href="https://faucet.sepolia.dev" data-wpel-link="external" target="_blank" rel="nofollow external noopener noreferrer">
                        https://faucet.sepolia.dev</a>.</li>
                    <li>Abrir Metamask</li>
                    <li>Copiar dirección de wallet(billetera)</li>
                    <li>Pegar en el formulario de sepolia</li>
                    <li>Lennar el Captcha</li>
                    <li>Hacer click en "Request funds"</li>
                    
                    <p style="font-size: 12px;">Nota: Se enviaran fondos a tu wallet(billetera) en caso de necesitar mas fondos repetir el proceso después de 60 minutos.</p>
                </ol>
                `
            },
            {
                titulo: "¿Para qué me sirve la Trazabilidad Vinos Ambrosia (TVA)?",
                cuerpo: `TVA es las siglas de "Trazabilidad Vinos Ambrosia" siendo un sistema que permite controlar la trazabilidad de los
                7 procesos mas importantes durante la cadena de suministro de producción de vinos tales como: 
                    <ol>
                        <li>Materia Prima</li>
                        <li>Extracción del mosto</li>
                        <li>Pasteurización</li>
                        <li>Fermentación</li>
                        <li>Clarificación</li>
                        <li>Trasiego</li>
                        <li>Envasado</li>
                    </ol>
                    <p>Esto permite tener control de cada una de las botellas producidas con un hash único 
                    que informa al cliente final de toda la trazabilidad perteneciente a la botella comprada</p>
                `
            },
            {
                titulo: "¿Qué es TVA Token?",
                cuerpo: `
                    TVA Token es las siglas de "Trazabilidad Vinos Ambrosia" es un smart contract que 
                    cuenta con una estructura de datos ya preestablecida. Esta estructura está pensada en 
                    facilitar la implementación de diversas funcionalidades sobre la blockchain de Ethereum. <br>
                    Cada vez que un consumidor de vinos Ambrosia compre una botella de vino tendra la capacidad 
                    de leer el codigo qr, y en recompensa se le asignará una única vez un token denominado 
                    <b>TVA Token</b> con el cual podra guardar en su billetera Metamask.
                `
            },
            {
                titulo: "¿Puedo recibir mas de un TVA token por botella?",
                cuerpo: `
                    Una vez que se haya asignado el TVA token de la botella al usuario, ya no habrá la posibilidad 
                    que se vuelva asignar otro token por la misma botella. 
                `
            },
            {
                titulo: "¿Cómo importar TVA Token a mi billetera Metamask?",
                cuerpo: `
                    Se debe llevar a cabo los siguientes procesos.
                    <ol>
                        <li>Abrir la extexión Metamask</li>
                        <li>Hacer click en Agregar Activo</li>
                        <li>Escribir la dirección de contrato:
                            <a href="https://sepolia.etherscan.io/tx/0xeece73a2d51a62f2509a6479493daecf90775ff01b92f35abb35bd097cbba575" 
                            data-wpel-link="external" target="_blank" rel="nofollow external noopener noreferrer">
                            0xeece73a2d51a62f2509a6479493daecf90775ff01b92f35abb35bd097cbba575</a>.
                            </li>
                        <li>Hacer click en añadir token personalizado</li>
                    </ol>
                    Listo podrás ver los tokens que se te hayan asignado en recompensa de comprar tu botella
                `
            },
        ]
    }),
};
</script>
