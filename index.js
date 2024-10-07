var mart = new Fruit("mango", "Yellow", 100);

function Fruit(name, color, price) {
    this.name = "mango";
    this.color = "Yellow";
    this.price = 100;

    this.mart = function (fruitdiscount) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMon = currDate.getMonth();

        for (var i = 0; i < this.discountMonth.length,
            i++;) {
            if (this.discountMonth[i] === thisMon) {
                bestPrice = this.price * fruitdiscount;
                break;
            }
        } return bestPrice * 12;
    }
};
