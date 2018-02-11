var myArray = [1,2,3,4,5,6,7,8,9,0]

shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var numRandom = shuffle(myArray).slice(0,4).toString().replace(/,/g, '');

console.log ("este es mi número random " + numRandom)


    $('input').keyup(function(e){

        if(e.keyCode===13){

        var value = $('input').val()

        var isANumber = isNaN(value)

        var sameLength = value.length != 4

        var numberRepeat = value.split("").some(function(v,i,a){
           return a.lastIndexOf(v)!=i;
         });

         // Set validation function
       function validate(){
         return isANumber  || sameLength || numberRepeat
       }

       function clean() {
         $('table').val('');
         $('table').focus();
       }

       if(validate()) {
         $(".user").addClass("has-error")
         $("p").css("color", "red")
       }

       else {
         $(".user").removeClass("has-error")
         $("p").css("color", "purple")
         comparation = calculation(numRandom, value)


         $("table").append('<tr><td>' + value + '</td><td>' + comparation[0] + '</td><td>' + comparation[1] + '</td></tr>')
         clean()
       }
     }
    })

          function calculation(point, turn){
        var picas = 0
        var fijas = 0

        for(var i = 0; i < point.length; i++){
          if (point[i] === turn[i]){
            fijas += 1
          }
        }
        for (var i = 0; i < point.length; i++) {
          if (point.indexOf(turn[i]) > -1 && turn[i] !== point[i]) {
            picas +=1
          }
        }
        if(fijas === 4) {
          wonPlay()
          alert("ganaste!!")
          won=1;
          // alert("entro!")
        }

        return [picas, fijas]
      }

    js_won = null;

    $(function() {
            function jq_won() {
                $('.result.won').show();
             }
            js_won = jq_won;
     })

     function wonPlay() {
           js_won();
    }


    $('.play').on('click', function(){
      window.location = "https://avanegasp.github.io/rompecabezas1/";
    })
