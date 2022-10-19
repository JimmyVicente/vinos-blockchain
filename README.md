
# Trazabilidad de vinos Ambrosia TVA

_El proyecto tiene por objetivo implementar un módulo de software para la trazabilidad de vinos Ambrosia por tecnología blockchain. Se utilizó la metodología agile block chain DApp engineering (ABCDE) para el desarrollo de todo el módulo de software, en sus diferentes fases_

## Tabla de contenido

- [Comenzando](#comenzando-)
  - [Pre-requistos](#pre-requisitos-)
  - [Instalación](#instalación-)
- [Despliegue](#despliegue-)
- [Ejecutando las pruebas](#ejecutando-las-pruebas-%EF%B8%8F).
  - [Pruebas unitarias subsistema de contratos inteligentes](#analizar-las-pruebas-unitarias-en-el-subsistema-de-contratos-inteligentes-).
  - [Pruebas unitarias subsistema de aplicaciones](#analizar-las-pruebas-unitarias-en-el-subsistema-de-contratos-inteligentes-).
  - [Pruebas de integración](#analizar-las-pruebas-de-integración-%EF%B8%8F).
- [Construcción](#construido-con-%EF%B8%8F)
- [Autores](#autores-%EF%B8%8F)
- [Licencia](#licencia-)
- [Expresiones de Gratitud](#expresiones-de-gratitud-)



## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

 
### Pre-requisitos 📋

_Estas son las cosas que necesitas para instalar el software y como instalarlas_

* [Node.js](https://nodejs.org/es/download/) - Entorno en tiempo de ejecución multiplataforma, descargar e instalar de acuerdo al sistema operativo.
* [web3](https://rometools.github.io/rome/) - Una colección de bibliotecas de JavaScript, que te permiten interactuar con un nodo de Ethereum local o remoto mediante HTTP, IPC o WebSocket. Instalar con el comando:
```
npm install web3
```
* [Solidity](https://solidity-es.readthedocs.io/es/latest/installing-solidity.html) - Lenguaje de programación orientado a objetos para escribir contratos inteligentes. Instalar con el comando:
```
npm install -g solc
```
* [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) - Paquete de herramientas de código abierto especializado en el desarrollo de aplicaciones sobre la Blockchain de Ethereum. Instalar con el comando:
```
npm install -g truffle
```
Comando para instalar la versión del proyecto: 
```
npm install -g truffle@5.4.29
```
* Navegador web Mozilla Firefox o Chrome
* [MetaMask](https://metamask.io) - Instalar la extensión MetaMask y crear o iniciar sesión en un cuenta. Además de obtener fondos a través de una Ethereum Rinkeby Faucet Testnet, más información de cómo realizarlo [aquí](https://medium.com/@julgq/c%C3%B3mo-enviar-eth-a-metamask-en-la-red-rinkeby-f3bbf388ba54). **NOTA**: Es importante tener fondos para poder realizar las transacciones.

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutándose_

_Una vez clonado el repositorio, en la carpeta raíz ejecutar_

```
npm install
```

_Iniciar subsistema de contratos inteligentes_

```
truffle migrate
```
_Iniciar subsistema de aplicaciones (en **otra consola**, no en la que se ejecutó anteriormente para truffle, desde la carpeta raíz del proyecto)_
```
cd client
npm install
npm run serve
```
**NOTA**: Es importante asegurarse que MetaMask este conectada a la **red localhost**
_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_


"start": "concurrently --kill-others \"npm run serve --prefix client/\" \"npm start --prefix backend/\""


 truffle migrate --network sepolia --reset