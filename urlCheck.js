function urlCheck(url) {
    let isCorrectFormat = false;

    if (typeof(url) === 'number') {
        return null
    } else {
        let urld = new URL(url);
        let urlSeparate = urld.hostname.split('.');

        if (urlSeparate.includes('es') || urlSeparate.includes('com')) {
            for (let i = 0; i < urlSeparate.length; i++) {
                if (urlSeparate[i] === 'es' || urlSeparate[i] === 'com') {
                    return urlSeparate[i];
                }
            }
        }
    }

}

module.exports = urlCheck