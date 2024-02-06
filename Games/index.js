var express = require('express'); 

var Connect4 = require('./routes/Connect4'); 
var Memory = require('./routes/Memory');
var Snake = require('./routes/Snake');
var Tetris = require('./routes/Tetris');
var Mole = require('./routes/Mole');

var app = express(); 

app.use('/connect4',Connect4); 
app.use('/Memory',Memory);    
app.use('/Snake',Snake);   
app.use('/Tetris',Tetris);   
app.use('/Mole',Mole);     

app.listen(4000);