//register print button
document.querySelector('#printBtn').addEventListener('click', function() {
    window.print();
});

//register theme slider
document.querySelector('#dmSwitch').addEventListener('click', function(event) {
    const checked = event.target.checked;
    const classList = document.documentElement.classList;
    const darkTheme = 'dark-theme';

    checked ?  classList.add(darkTheme) : classList.remove(darkTheme);
});
