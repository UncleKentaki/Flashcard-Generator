var fs = require('fs');
//constructor for basic cards
BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;

        var card = {
            front: this.front,
            back: this.back,
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(card) + ';', "utf8", function (error) {
            
            if (error) {
                console.log(error);
            }
        });

    } else {
        return new BasicCard(front, back);
    }

}

module.exports = BasicCard;