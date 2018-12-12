var template = `
    <div class="recept-1">
       
    <a href="$PAGE$" class="overlay">
    
    </a>
    <div class="text-1">
        <div class="bild">
            <img src="$BILD$" class="img">
        </div>

        <div class="box_container">
            <div class="box border">
                <header>$TITLE$</header>
                <ul>
                    $INGREDIENTS$
                </ul>
            </div>
            <div class="box">
                $DESCRIPTION$
            </div>
        </div>
        <div class="ratings">
           
        </div>

    </div>
    </div>`;





$.getJSON("data/data.json", function(data) {

    var length = Object.keys(data).length;

    for(var i = 1; i <= length; i++) {
        var current = data[i];

        var namn = current["namn"];
        var beskrivning = current["beskrivning"];
        var bild = current["bild"];
        var page = current["page"];
        var ingredienser = "";

        for(var j = 0; j < current["ingredienser"].length; j++) {
            ingredienser += "<li>" + current["ingredienser"][j] + "</li>";
        }

        $("body main").append(
            template.replace("$BILD$", bild)
                .replace("$TITLE$", namn)
                .replace("$INGREDIENTS$", ingredienser)
                .replace("$DESCRIPTION$", beskrivning)
                .replace("$PAGE$", "recepter/" + page)
        );
    }


})