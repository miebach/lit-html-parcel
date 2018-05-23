
function createMenu() {
  return {
    dataType: 'menu'
  }
}

function checkMenu(x) {
  return x.dataType && x.dataType === 'menu';
}

module.exports = {
  createMenu:  createMenu,
  checkMenu: checkMenu
}