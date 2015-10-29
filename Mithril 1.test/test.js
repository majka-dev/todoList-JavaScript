/*var app = {};

app.view = function () {
	return m('h1', 'Heloo World');
};

m.mount(document.body, app);

console.log("sdfdfdfdfsdfs");

var app = {};

app.PageList = function() {  
  return m.request({ method: 'GET', url: 'pages.json' });
};

app.controller = function() {  
  var pages = app.PageList();
  return {
    pages: pages,
    rotate: function() {
      pages().push(pages().shift());
    }
  }
};

app.view = function(ctrl) {  
  return [
    ctrl.pages().map(function(page) {
      return m('a', { href: page.url }, page.title);
    }),
    m('button', { onclick: ctrl.rotate }, 'Rotate links')
  ];
};

m.module(document.getElementById('example'), app);  

// A data store
var name = m.prop('');

// binding the data store in a view
m('input', { oninput: m.withAttr('value', name), value: name() });  */