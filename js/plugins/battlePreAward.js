
function Window_BattlePreAward() {
    this.initialize.apply(this, arguments)
}

Window_BattlePreAward.prototype = Object.create(Window_Base.prototype)
Window_BattlePreAward.prototype.constructor = Window_BattlePreAward

Window_BattlePreAward.prototype.initialize = function () {
    var wight = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, wight, height);
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._showCount = 0;
    this.refresh();
};

Window_BattlePreAward.prototype.windowWidth = function () {
    return 360;
};

Window_BattlePreAward.prototype.windowHeight = function () {
    return this.fittingHeight(1);
};

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
