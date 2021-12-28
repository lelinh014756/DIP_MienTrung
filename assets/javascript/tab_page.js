var btnTabPage = document.querySelectorAll('.header_pagebar-item');
var bodyPage = document.querySelectorAll('.body');

function activeTab() {
    btnTabPage.forEach((item)=>
    item.classList.remove('header_pagebar-item--current'))
    this.classList.add('header_pagebar-item--current');
    var curClass;
    this.classList.forEach((classItem, index) => {
        if(index == 1) {
            return curClass = classItem;
        }
    });
    bodyPage.forEach((bodyItem, index) => {
        var curBodyItem;
        bodyItem.classList.forEach((item, index) => {
            if(index == 1) {
                curBodyItem = item
            }
        })
        if(curBodyItem == "bodypage1" && curClass == "tab1") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage2" && curClass == "tab2") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage3" && curClass == "tab3") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage4" && curClass == "tab4") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage5" && curClass == "tab5") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage6" && curClass == "tab6") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage7" && curClass == "tab7") {
            return bodyItem.classList.add('showpage')
        }
        else if(curBodyItem == "bodypage8" && curClass == "tab8") {
            return bodyItem.classList.add('showpage')
        }
        else {
            return bodyItem.classList.remove('showpage')
        }
    })
}

btnTabPage.forEach((item)=>
item.addEventListener('click', activeTab))