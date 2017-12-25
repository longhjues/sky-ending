
//--------------------

// 添加命令
// 显示的ICON 显示的命令名 命令代号（用于回调） 是否可以点击 额外参数
Window_Command.prototype.addCommandText = function (iconIndex, name, symbol, enabled, ext) {
    if (enabled === undefined) {
        enabled = true;
    }
    if (ext === undefined) {
        ext = null;
    }
    if (iconIndex === undefined) {
        iconIndex = -1
    }
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext, iconIndex: iconIndex });
};

Window_Command.prototype.addCommand = function (name, symbol, enabled, ext, iconIndex) {
    if (enabled === undefined) {
        enabled = true;
    }
    if (ext === undefined) {
        ext = null;
    }
    if (iconIndex === undefined) {
        iconIndex = -1
    }
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext, iconIndex: -1 });
};

// 绘制单个选项
Window_Command.prototype.drawItem = function (index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    if (this._list[index].iconIndex >= 0) {
        this.processDrawIcon(this._list[index].iconIndex, rect)
    }
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

//--------------------

Window_PartyCommand.prototype.initialize = function () {
    var y = (Graphics.boxHeight - this.windowHeight()) / 2;
    Window_Command.prototype.initialize.call(this, 0, y);
    this.openness = 0;
    this.deactivate();
};

Window_PartyCommand.prototype.numVisibleRows = function () {
    return 2;
};

Window_PartyCommand.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};

Window_PartyCommand.prototype.itemTextAlign = function () {
    return 'center';
};

//--------------------

Window_BattleStatus.prototype.initialize = function () {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var y = Graphics.boxHeight - height;
    Window_Selectable.prototype.initialize.call(this, 0, y, width, height);
    this.refresh();
    this.openness = 0;
}

Window_BattleStatus.prototype.windowWidth = function () {
    return Graphics.boxWidth
}

Window_BattleStatus.prototype.numVisibleRows = function () {
    return 3
}

//--------------------

// 取消状态窗口移动
Scene_Battle.prototype.updateWindowPositions = function () { };

//--------------------

Window_ActorCommand.prototype.addAttackCommand = function () {
    this.addCommandText(78, TextManager.attack, 'attack', this._actor.canAttack());
};

Window_ActorCommand.prototype.addSkillCommands = function () {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function (a, b) {
        return a - b;
    });
    skillTypes.forEach(function (stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommandText(79, name, 'skill', true, stypeId);
    }, this);
};

Window_ActorCommand.prototype.addGuardCommand = function () {
    this.addCommandText(81, TextManager.guard, 'guard', this._actor.canGuard());
};

Window_ActorCommand.prototype.addItemCommand = function () {
    this.addCommandText(80, TextManager.item, 'item');
};

//--------------------

Window_ActorCommand.prototype.initialize = function () {
    var x = Graphics.boxWidth - this.windowWidth()
    var y = Graphics.boxHeight - this.windowHeight() - 144
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
}

Window_ActorCommand.prototype.numVisibleRows = function () {
    return 3
}

//--------------------

Window_BattleEnemy.prototype.windowWidth = function () {
    return Graphics.boxWidth
};

Window_BattleEnemy.prototype.numVisibleRows = function () {
    return 2
};

Window_BattleEnemy.prototype.maxCols = function () {
    return 4
};

//--------------------

Window_MenuCommand.prototype.addMainCommands = function () {
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('item')) {
        this.addCommandText(80, TextManager.item, 'item', enabled);
    }
    if (this.needsCommand('skill')) {
        this.addCommandText(79, TextManager.skill, 'skill', enabled);
    }
    if (this.needsCommand('equip')) {
        this.addCommandText(81, TextManager.equip, 'equip', enabled);
    }
    if (this.needsCommand('status')) {
        this.addCommandText(84, TextManager.status, 'status', enabled);
    }
};

// 整队
Window_MenuCommand.prototype.addFormationCommand = function () {
    if (this.needsCommand('formation')) {
        var enabled = this.isFormationEnabled();
        this.addCommandText(75, TextManager.formation, 'formation', enabled);
    }
};

Window_MenuCommand.prototype.addOriginalCommands = function () {
};

Window_MenuCommand.prototype.addOptionsCommand = function () {
    if (this.needsCommand('options')) {
        var enabled = this.isOptionsEnabled();
        this.addCommandText(83, TextManager.options, 'options', enabled);
    }
};

Window_MenuCommand.prototype.addSaveCommand = function () {
    if (this.needsCommand('save')) {
        var enabled = this.isSaveEnabled();
        this.addCommandText(73, TextManager.save, 'save', enabled);
    }
};

Window_MenuCommand.prototype.addGameEndCommand = function () {
    var enabled = this.isGameEndEnabled();
    this.addCommandText(74, TextManager.gameEnd, 'gameEnd', enabled);
};
