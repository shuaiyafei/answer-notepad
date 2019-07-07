const indexAction = require('../controller/indexAction');
const testAction = require('../controller/testAction');
const notepadAction = require('../controller/notepadAction');

module.exports = (router) => {
  // router.get('/', indexAction.renderPage);
  // router.get('/notepad', notepadAction.renderPage);
  router.get('/test', testAction.renderPage);
  router.get('/', notepadAction.renderPage);
};