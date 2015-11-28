// add scripts


var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(1200, 410).parent('p5canvas')
        p.x2 = 10;
        p.icons = [];
    }

    p.draw = function () {
        p.background(200);
        p.iconDisplay();
        p.lineDisplay();
        console.log(p.icons)
    }

    var Icon = function (position) {
        this.position = position;
        this.size = 1;

    }

    Icon.prototype.display = function () {
        p.ellipse(this.position, 300, this.size, this.size);
        if (this.size < 100) {
            this.size++;
        }
    }

    p.lineDisplay = function () {
        console.log(p.x2 % 200)
        if (p.x2 === 60 || p.x2 % 200 === 0) {
            p.icons.push(new Icon(p.x2));
        }
        p.line(10, 300, p.x2, 300);
        p.x2++;
    }

    p.iconDisplay = function () {
        for (var i = 0; i < p.icons.length; i++) {
            p.icons[i].display();
        }
    }
}

var myp5 = new p5(sketch);