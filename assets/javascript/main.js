// Screen
let screen = document.querySelectorAll('.screen');

// Menu Slider-Bar
let tongle = document.querySelector('.header_btn-toggle');
let sliderbar = document.querySelector('.header_sliderbar');
let main = document.querySelector('.main');
let overlay = document.querySelector('.overlay');
let tableChecks = document.querySelectorAll('.table-value-col-check');
let checkBtns = document.querySelectorAll('.btn-icon--check');

function unOverlay () {
    sliderbar.classList.remove('active');
    overlay.classList.remove('active');
}

function ShowItem () {
    for (var checkBtn of checkBtns){
        checkBtn.classList.toggle('show');
    }
}



tongle.onclick = function() {
    sliderbar.classList.toggle('active');
    main.classList.toggle('active');
    overlay.classList.toggle('active');
}

overlay.addEventListener('click', unOverlay);

for (var tableCheck of tableChecks){
    tableCheck.addEventListener('click', ShowItem)
}



// Select-Options
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "select-options":*/
x = document.getElementsByClassName("select-options");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);





// Table-Filter
let btnActiveFilters = document.querySelectorAll('.btn-tools-filter');
let btnCloseFilters = document.querySelectorAll('.table-filter-btn--close');
let Filters = document.querySelectorAll('.table-filter-btn--filter');
let tableFilters = document.querySelectorAll('.table-filter');

function ShowTableFilter() {
  for (var screenItem of screen) {
    screenItem.classList.add('show');
  }
  for(var tableFilter of tableFilters) {
    tableFilter.classList.add('table-filter--show');
  }
}

function CloseTableFilter() {
  for (var screenItem of screen) {
    screenItem.classList.remove('show');
  }
  for(var tableFilter of tableFilters) {
    tableFilter.classList.remove('table-filter--show');
  }
}

for(var btnActiveFilter of btnActiveFilters) {
  btnActiveFilter.addEventListener('click', ShowTableFilter);
}
for (var Filter of Filters) {
  Filter.addEventListener('click', CloseTableFilter);
}
for (var btnCloseFilter of btnCloseFilters) {
  btnCloseFilter.addEventListener('click', CloseTableFilter);
}
for (var screenItem of screen) {
  screenItem.addEventListener('click', CloseTableFilter);
}

// Form Add, Edit
let toolEdit = document.querySelector('.btn-tools-edit');
let toolAdd = document.querySelector('.btn-tools-add');
let closeForms = document.querySelectorAll('.frm__header-close');
let formAdd =  document.querySelector('.frm--add');
let formEdit =  document.querySelector('.frm--edit');
let forms = document.querySelectorAll('.frm');
let formCtns = document.querySelectorAll('.frm__container');

function ShowFormEdit() {
  formEdit.classList.add('show-frm');
}

function ShowFormAdd() {
  formAdd.classList.add('show-frm');
}

function CloseForm() {
  for (var form of forms){
    form.classList.remove('show-frm');
  }
}

toolEdit.addEventListener('click', ShowFormEdit);
toolAdd.addEventListener('click', ShowFormAdd);
for(var closeForm of closeForms){
  closeForm.addEventListener('click', CloseForm)
}
for (var form of forms){
  form.addEventListener('click',CloseForm);
}

for (var formCtn of formCtns) {
  formCtn.addEventListener('click', function(event) {
    event.stopPropagation();
  })
}

// Show Table
let categoryActive = document.querySelectorAll('.category-item');
let dataSheet = document.querySelectorAll('.data-sheet'); 


function activeTabTable() {
  categoryActive.forEach((item) =>
  item.classList.remove('category-item--active'));
  this.classList.add('category-item--active');
  var curClass;
  this.classList.forEach((item, index) => {
    if(index == 1) {
      return curClass = item;
    }
  })

  dataSheet.forEach((dataItem) => {
    var curClassTable;
    dataItem.classList.forEach((item,index) => {
      if(index == 2) {
        curClassTable = item;
      }
    })
    if (curClassTable == 'tab-table1' && curClass == 'tab-table1') {
      return dataItem.classList.add('show')
    }
    else if (curClassTable == 'tab-table2' && curClass == 'tab-table2') {
      return dataItem.classList.add('show')
    }
    else if (curClassTable == 'tab-table3' && curClass == 'tab-table3') {
      return dataItem.classList.add('show')
    }
    else if (curClassTable == 'tab-table4' && curClass == 'tab-table4') {
      return dataItem.classList.add('show')
    }
    else if (curClassTable == 'tab-table5' && curClass == 'tab-table5') {
      return dataItem.classList.add('show')
    }
    else if (curClassTable == 'tab-table6' && curClass == 'tab-table6') {
      return dataItem.classList.add('show')
    }
    else {
      return dataItem.classList.remove('show');
    }
  })
}
categoryActive.forEach((item) =>
item.addEventListener('click', activeTabTable));

// Show Dropdown
let btnDropdowns = document.querySelectorAll('.check-show-dropdown');
let dropdownLists = document.querySelectorAll('.dropdown-list');

function ShowDropdownList() {
  for(var dropdownList of dropdownLists) {
    dropdownList.classList.toggle('show');
  }
}

for(var btnDropdown of btnDropdowns) {
  btnDropdown.addEventListener('click', ShowDropdownList)
}

