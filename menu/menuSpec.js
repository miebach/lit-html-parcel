const assert = require('assert');

const MenuModule = require('./menu')

describe('MenuModule', function(){
  it('should create a menu and identify it as a menu', function(){
    const menu = MenuModule.createMenu();
    assert(MenuModule.checkMenu(menu));
  });
})

