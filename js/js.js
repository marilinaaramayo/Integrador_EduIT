
// ****************** MENÚ *****************
function openMenu() {
    let nav = document.querySelector('.body_header_nav')
    if (nav.style.display == 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
    }
  }