const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// respond with "hello world" when a GET request is made to the homepage
app.get('/siswa', (request, response)=>{
  response.end('menampilkan siswa')

});
app.get('/siswa/:nama',(request,response)=>{
let namasiswa = request.params.nama;
response.end('siswa dengan nama :  '+ namasiswa);


});
app.post('/siswa/:nama',(request,response)=>{
  let namasiswa = request.body.nama;
  let alamatsiswa = request.body.alamat;
  response.end("siswa baru :  " + namasiswa +"alamat : " + alamatsiswa);
});
app.delete('/siswa',(request,response)=>{
  let namasiswa = request.params.nama;
  response.end("siswa :  " + namasiswa + "akan dihapus" );});

  app.put('/siswa/:id',(request,response)=>{
    let id = request.params.nama;
    let namasiswa = request.body.nama;
    let alamatsiswa = request.body.alamat;
    response.end("siswa diupdate " +id );
  });

app.listen('8080',(e)=>{
  console.log(e)
});