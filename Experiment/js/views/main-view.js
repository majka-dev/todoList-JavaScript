var app = app || {};

(function () {
    'use strict';
    
    app.view = function(ctrl) {
        return [
            m('header#header', [
                m('h1', 'My Todo List'),
                m('input#new-todo[placeholder="What needs to be done?"]', { 
                    onkeypress: app.watchInput(
                        m.withAttr('value', ctrl.title),
                        ctrl.add.bind(ctrl, ctrl.title),
                        ctrl.clearTitle.bind(ctrl)
                    ),
                    value: ctrl.title()
                })
            ]),
            m('section#main', [
                //m('input#toggle-all[type=checkbox]'),
                m('ul#todo-list', [
                    ctrl.list.filter(ctrl.isVisible.bind(ctrl)).map(function(task, index) {
                        return m('li', { class: task.completed() ? 'completed' : ''}, [
                            m('.view', [
                                m('input.toggle[type=checkbox]', {
                                    onclick: m.withAttr('checked', task.completed),
                                    checked: task.completed()
                                }),
                                m('label', task.title()),
                            ]),
                            m('button.destroy', { onclick: ctrl.remove.bind(ctrl, index)})
                            //todo: how to write m('p', 'x') inside button
                            //m('input.edit')
                        ])
                     })
                ])
            ]),
            ctrl.list.length == 0 ? '' : app.footer(ctrl)
            //varname = (condition) ? value1 : value2
        ];
    };

})();

//Input by pressing ENTER or ESC key
app.watchInput = function(ontype, onenter, onescape) {
    return function(e) {
        ontype(e);
        if (e.keyCode == app.ENTER_KEY) onenter();
        //if (e.keyCode == app.ESC_KEY) onescape()
    }
};


app.footer = function(ctrl) {
    return m('footer#footer', [
        //Counter of tasks in todos list
        m('span#todo-count', [
            m('strong', ctrl.list.length), ' item' + (ctrl.list.length > 1 ? 's' : '') + ' left'
        ]),

        //Delete all tagged tasks
        ctrl.amountCompleted() == 0 ? '' : m('button#clear-completed', {
            onclick: ctrl.clearCompleted.bind(ctrl)
        }, 'Clear completed (' + ctrl.amountCompleted() + ')')
    ]);
};