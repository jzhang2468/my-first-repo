
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('demoButton');         
    const messageArea = document.getElementById('messageDisplay');

    let clickCount = 0;

    button.addEventListener('click', function () {
        clickCount++;                      
        console.log('Button was clicked ' + clickCount + ' time(s)');

        const currentTime = new Date().toLocaleTimeString();

        const message = 'Hello! You clicked the button ' + clickCount +
                        ' time(s). Last click at ' + currentTime + '.';

        messageArea.textContent = message;

        messageArea.classList.remove('show');
        void messageArea.offsetWidth;      
        messageArea.classList.add('show');

        button.textContent = 'Thanks for clicking!';

        setTimeout(function () {
            button.textContent = 'Click Me!';
        }, 2000);                            
    });
});