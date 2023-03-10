document.onreadystatechange = function (e) {
    localStorage.setItem('currentURL', window.location.href)
    if (!localStorage.getItem('accessToken')) {
        try {
            window.stop();
        }
        catch (e) {
            document.execCommand('Stop');
        }
        document.location.replace("/login.html");
    }
};