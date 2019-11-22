var SerialPort = require('serialport');
var Express = require('express');
var ReadLine = require('@serialport/parser-readline');

const app = Express();
const parser = new ReadLine({ delimiter: '\n', lock: false})

var port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600,
});

port.on('open', function(){
    console.log('Conectado ao Arduino.');
});

port.pipe(parser);

app.get('/:count', (req, res) => {
    if (req.params.count) {
        //Enviar codigo para o Arduino aqui!
        port.write(`${req.params.count}\n`, (err) => {
            if (err) return res.send({ msg: 'Erro ao enviar comando'});;
            res.send({ msg: 'Comando recebido com sucesso!'})
        })
    }
});

app.listen(3000, () => console.log('Server rodando'))