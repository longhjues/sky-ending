
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
    return this.windowWidth()
};

Window_BattlePreAward.prototype.windowHeight = function () {
    return this.windowHeight()
}

Window_BattlePreAward.prototype.numVisibleRows = function () {
    return 1
};

Window_BattlePreAward.prototype.maxCols = function () {
    return 4
}

Window_BattlePreAward.prototype.maxItems = function () {
    return this._list ? this._list.length : 0
}

// ---


// ---

Window_BattlePreAward.prototype.refresh = function () {
    this.contents.clear()
    this.drawAllItems()
}

Window_BattlePreAward.prototype.drawItem = function (index) {
    this.award[index]
    this.drawBasicArea(this.basicAreaRect(index), actor)
    this.drawGaugeArea(this.gaugeAreaRect(index), actor)
}


Window_BattlePreAward.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this._showCount > 0 && $gameMap.isNameDisplayEnabled()) {
        this.updateFadeIn();
        this._showCount--;
    } else {
        this.updateFadeOut();
    }
};

Window_BattlePreAward.prototype.updateFadeIn = function () {
    this.contentsOpacity += 16;
};

Window_BattlePreAward.prototype.updateFadeOut = function () {
    this.contentsOpacity -= 16;
};

Window_BattlePreAward.prototype.open = function () {
    this.refresh();
    this._showCount = 150;
};

Window_BattlePreAward.prototype.close = function () {
    this._showCount = 0;
};

Window_BattlePreAward.prototype.refresh = function () {
    this.contents.clear();
    if ($gameMap.displayName()) {
        var width = this.contentsWidth();
        this.drawBackground(0, 0, width, this.lineHeight());
        this.drawText($gameMap.displayName(), 0, 0, width, 'center');
    }
};

Window_BattlePreAward.prototype.drawBackground = function (x, y, width, height) {
    var color1 = this.dimColor1();
    var color2 = this.dimColor2();
    this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
    this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
};
