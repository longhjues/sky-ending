
function Window_BattlePreAward() {
    this.initialize.apply(this, arguments)
}

Window_BattlePreAward.prototype = Object.create(Window_Selectable.prototype)
Window_BattlePreAward.prototype.constructor = Window_BattlePreAward

Window_BattlePreAward.prototype.award = []

Window_BattlePreAward.prototype.initialize = function (x, y) {
    var wight = this.windowWidth()
    var height = this.windowHeight()
    Window_Selectable.prototype.initialize.call(this, x, y, wight, height)
    this.opacity = 0
    this.contentsOpacity = 0
    this._showCount = 0
    this.refresh()
    // this.activate();
}

Window_BattlePreAward.prototype.windowWidth = function () {
    return Graphics.boxWidth
};

Window_BattlePreAward.prototype.windowHeight = function () {
    return Graphics.boxHeight
}

Window_BattlePreAward.prototype.numVisibleRows = function () {
    return 1
};

Window_BattlePreAward.prototype.maxCols = function () {
    return 4
}

Window_BattlePreAward.prototype.maxItems = function () {
    return this.award ? this.award.length : 0
}

Window_BattlePreAward.prototype.itemHeight = function () {
    var clientHeight = this.height - this.padding * 2;
    return Math.floor(clientHeight / this.numVisibleRows());
};


Window_BattlePreAward.prototype.refresh = function () {
    this.contents.clear()
    this.drawAllItems()
}

Window_BattlePreAward.prototype.drawItem = function (index) {
    this.award[index]
    this.drawBasicArea(index)
}

Window_BattlePreAward.prototype.loadImages = function () {
    this.award[0] = ImageManager.loadSystem("PreAward0")
    this.award[1] = ImageManager.loadSystem("PreAward1")
    this.award[2] = ImageManager.loadSystem("PreAward2")
    this.award[3] = ImageManager.loadSystem("PreAward3")
    // this.award[4] = ImageManager.loadSystem("PreAward4")
}

Window_BattlePreAward.prototype.drawBasicArea = function (index) {
    var bitmap = this.award[index]
    // var dx = (this.windowWidth() - this.padding * 2) / this.maxCols()
    var dx = 100 * index
    var dy = 50
    this.contents.blt(bitmap, 0, 0, 100, this.itemHeight(), dx, dy, this.itemHeight(), 100);
}


// Window_BattlePreAward.prototype.update = function () {
//     Window_Selectable.prototype.update.call(this);
//     if (this._showCount > 0 && $gameMap.isNameDisplayEnabled()) {
//         this.updateFadeIn();
//         this._showCount--;
//     } else {
//         this.updateFadeOut();
//     }
// };

// Window_BattlePreAward.prototype.updateFadeIn = function () {
//     this.contentsOpacity += 16;
// };

// Window_BattlePreAward.prototype.updateFadeOut = function () {
//     this.contentsOpacity -= 16;
// };

// Window_BattlePreAward.prototype.open = function () {
//     this.refresh();
//     this._showCount = 150;
// };

// Window_BattlePreAward.prototype.close = function () {
//     this._showCount = 0;
// };

// Window_BattlePreAward.prototype.refresh = function () {
//     this.contents.clear();
//     if ($gameMap.displayName()) {
//         var width = this.contentsWidth();
//         this.drawBackground(0, 0, width, this.lineHeight());
//         this.drawText($gameMap.displayName(), 0, 0, width, 'center');
//     }
// };

// Window_BattlePreAward.prototype.drawBackground = function (x, y, width, height) {
//     var color1 = this.dimColor1();
//     var color2 = this.dimColor2();
//     this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
//     this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
// };
