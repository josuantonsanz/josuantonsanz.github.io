function colorCell (x1,y1,x2,y2, turno){
      if (turno == 1){
        texto = "<i class='fa fa-circle-o mark'></i>";
      }else{
        texto = "<i class='fa fa-times mark'></i>";
      }

      selector = "#" + x1 + y1 + x2 + y2;
      console.debug(selector);
      $(selector).html(texto);

}

function Tabla(){
      this.state = 0;

      this.celdas = {
        "11": 0,
        "12": 0,
        "13": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "31": 0,
        "32": 0,
        "33": 0
      };

      this.comprobarEstado = function(){
        if (this.state != 0){
          console.debug("Premio 1");
          return this.state;
        };
        for (i=1; i<4; i++){
          if (this.celdas[""+i+"1"] == 1 && this.celdas[""+i+"2"] == 1 && this.celdas[""+i+"3"] == 1){
            this.state = 1;
            console.debug("Premio 3");
            return this.state;
          }
          if (this.celdas[""+i+"1"] == -1 && this.celdas[""+i+"2"] == -1 && this.celdas[""+i+"3"] == -1){
            this.state = -1;
            console.debug("Premio 4");
            return this.state;
          }
        };
        for (j=1; j<4; j++){
          if (this.celdas[""+"1"+j] == 1 && this.celdas[""+"2"+j] == 1 && this.celdas[""+"3"+j] == 1){
            this.state = 1;
            console.debug("Premio 5");
            return this.state;
          }
          if (this.celdas[""+"1"+j] == -1 && this.celdas[""+"2"+j] == -1 && this.celdas[""+"3"+j] == -1){
            this.state = -1;
            console.debug("Premio 6");
            return this.state;
          }
        }

        if (this.celdas["11"] == 1 && this.celdas["22"] == 1 && this.celdas["33"] == 1){
          this.state = 1;
          console.debug("Premio 2");
          return this.state;
        }
        if (this.celdas["11"] == -1 && this.celdas["22"] == -1 && this.celdas["33"] == -1){
          this.state = -1;
          console.debug("Premio 7");
          return this.state;
        }

        if (this.celdas["13"] == 1 && this.celdas["22"] == 1 && this.celdas["31"] == 1){
          this.state = 1;
          console.debug("Premio 8");
          return this.state;
        }
        if (this.celdas["13"] == -1 && this.celdas["22"] == -1 && this.celdas["31"] == -1){
          this.state = -1;
          console.debug("Premio 9");
          return this.state;
        }
        return this.state;

      };

      this.checkState = function(x2, y2){
        return this.celdas["" + x2 + y2];
      };

      this.setState = function(x2, y2, turno){
        this.celdas["" + x2 + y2] = turno;
      };
}


function Juego () {

      this.usuario = 0;
      this.state = 0;
      this.activeCell = "any";
      this.turno = 1;
      this.tablas = {
        "11": new Tabla(),
        "12": new Tabla(),
        "13": new Tabla(),
        "21": new Tabla(),
        "22": new Tabla(),
        "23": new Tabla(),
        "31": new Tabla(),
        "32": new Tabla(),
        "33": new Tabla()
      };

      this.ganadoTabla = function(x1, y1) {
        tempTabla = this.tablas[""+x1+y1];
        if (tempTabla.state == 0){
          estado = tempTabla.comprobarEstado();
          console.debug("Tabla ganada:");
          console.debug(estado);
          if (estado !=0){
            this.activeCell = "any";
            $(".tabla").addClass("activa");
            $("#"+x1+y1).removeClass("activa");
            if (this.turno == 1){
              texto = "<i class='fa fa-circle-o mark fa-3x'></i>";
            }else{
              texto = "<i class='fa fa-times mark fa-3x'></i>";
            }
            $("#"+x1+y1).html(texto);
          }
        }else{
          this.activeCell = "any";
          $(".tabla").addClass("activa");
          $("#"+x1+y1).removeClass("activa");
        }


      };


      this.comprobarJuegoTerminado = function(){
        for (i=1; i<4; i++){
          if (this.tablas[""+i+"1"].state == 1 && this.tablas[""+i+"2"].state == 1 &&
          this.tablas[""+i+"3"].state == 1){
            this.state = 1;
            console.debug("Premio 3");
            return this.state;
          }
          if (this.tablas[""+i+"1"].state == -1 && this.tablas[""+i+"2"].state == -1 &&
          this.tablas[""+i+"3"].state == -1){
            this.state = -1;
            console.debug("Premio 4");
            return this.state;
          }
        };
        for (j=1; j<4; j++){
          if (this.tablas[""+"1"+j].state == 1 && this.tablas[""+"2"+j].state == 1 &&
          this.tablas[""+"3"+j].state == 1){
            this.state = 1;
            console.debug("Premio 5");
            return this.state;
          }
          if (this.tablas[""+"1"+j].state == -1 && this.tablas[""+"2"+j].state == -1 &&
          this.tablas[""+"3"+j].state == -1){
            this.state = -1;
            console.debug("Premio 6");
            return this.state;
          }
        }

        if (this.tablas["11"].state == 1 && this.tablas["22"].state == 1 &&
        this.tablas["33"].state == 1){
          this.state = 1;
          console.debug("Premio 2");
          return this.state;
        }
        if (this.tablas["11"].state == -1 && this.tablas["22"].state == -1 &&
        this.tablas["33"].state == -1){
          this.state = -1;
          console.debug("Premio 7");
          return this.state;
        }

        if (this.tablas["13"].state == 1 && this.tablas["22"].state == 1 &&
        this.tablas["31"].state == 1){
          this.state = 1;
          console.debug("Premio 8");
          return this.state;
        }
        if (this.tablas["13"].state == -1 && this.tablas["22"].state == -1 &&
        this.tablas["31"].state == -1){
          this.state = -1;
          console.debug("Premio 9");
          return this.state;
        }
        return this.state;
      }


      this.setActiveCell = function(x1, y1){
        tablaTemp = this.tablas["" + x1 + y1];
        if (tablaTemp.comprobarEstado() != 0){
          this.ganadoTabla(x1,y1);
        }else{
          this.activeCell = ""+x1+y1;
          $(".tabla").removeClass("activa");
          $("#"+x1+y1).addClass("activa");
        }


      }

      this.clickCelda = function(x1, y1, x2, y2){
        tablaTemp = this.tablas["" + x1 + y1];
        state = tablaTemp.checkState(x2, y2);
        console.debug(state);
        if (state==0 && tablaTemp.comprobarEstado() == 0){
          if (this.activeCell == ""+x1+y1 || this.activeCell == "any"){
            console.debug("FUnciones?")
            colorCell(x1, y1, x2, y2, this.turno);
            tablaTemp.setState(x2, y2, this.turno);
            this.ganadoTabla(x1,y1);
            this.setActiveCell(x2, y2);

            terminado = this.comprobarJuegoTerminado();
            if (terminado != 0){
              this.activeCell = "0";
              $(".tabla").removeClass("activa");
              if (this.state == this.usuario){
                texto = "<h1>Has ganado!</h1>";
              }else{
                texto = "<h2>Has perdido!</h2>";
              }
              $("body").html(texto);
            }
            this.turno *= -1;

          }

        }
      }

}

var partida = new Juego();
var conna;
function clickCell(x1, y1, x2, y2){
    console.debug("pulsado");
    if (partida.usuario == partida.turno){
      partida.clickCelda(x1, y1, x2, y2);
      conna.send({x1,y1,x2,y2});
    }

}


var minNumber = 0;
var maxNumber = 40


function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var randomNumber = randomNumberFromRange(minNumber, maxNumber);


var peer = new Peer(randomNumber,{key: 'lu721h43mz08uxr'});

function iniciar(){
    texto = $("#idComp").val();
    console.debug(texto);
    conna = peer.connect(texto);
    partida.usuario = 1;
    conna.on('data', function(data) {
      console.debug(data['x1']);
      console.debug('Received', data);
      partida.clickCelda(data['x1'], data['y1'], data['x2'], data['y2'])
    });

    $(".datos").html("<p>Ya tienes compañero</p>")
    $(".tabla").addClass("activa");
}



peer.on('open', function(id) {
  $("#idMio").text(id);
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(conn) {
  conna = conn;
  partida.usuario = -1;
    $(".datos").html("<p>Ya tienes compañero</p>");
    $(".tabla").addClass("activa");
  conna.on('data', function(data) {
    console.debug(data['x1']);
    console.debug('Received', data);
    partida.clickCelda(data['x1'], data['y1'], data['x2'], data['y2']);


  });
});
