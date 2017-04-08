var fs = require('fs');
//constructor for cloze cards
ClozeCard = function(text,cloze) {
     if (this instanceof ClozeCard ) {

         var lowerText = text.toLowerCase();
         var lowerCloze = cloze.toLowerCase();

        this.fullText = text;
        this.cloze = cloze;
        this.partial = text.replace(cloze, '...');


    if (!lowerText.includes(lowerCloze)) {
		console.log('CLOZE IS NOT IN TEXT');
		return;
	}
        var card = {
            text: this.fullText,
            cloze: this.cloze,
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(card) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });

    } else {
        return new BasicCard(text,cloze);
    }
}



module.exports = ClozeCard;
