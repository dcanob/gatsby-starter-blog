if ("fonts" in document) {
    fontLoaded = (fontFace) => {
        console.log(fontFace.family, fontFace.style, fontFace.weight, 'loaded successfully.');
    }

    var montserrat_900 = new FontFace(
        "Montserrat Black",
        "url('/fonts/montserrat-latin-900-58cd789700850375b834e8b6776002eb.woff2')",
        {
            style: 'normal',
            weight: '900',
            display: 'swap',
        }
    );
    montserrat_900.loaded.then(fontLoaded);
    document.fonts.add(montserrat_900);

    var merriweather_400 = new FontFace(
        "Merriweather Regular",
        "url('/fonts/merriweather-latin-400-8276fdb72ae8f4714d4e6eba704cc39f.woff2')",
        {
            style: 'normal',
            weight: '400',
            display: 'swap',
        }
    );
    merriweather_400.loaded.then(fontLoaded);
    document.fonts.add(merriweather_400);

    var merriweather_700 = new FontFace(
        "Inconsolata",
        "url('/fonts/merriweather-latin-700-fa534be7ffa380e39a7f6e03bf9a5e03.woff2')",
        {
            style: 'normal',
            weight: '700',
            display: 'swap',
        }
    );
    merriweather_700.loaded.then(fontLoaded);
    document.fonts.add(merriweather_700);

    var montserrat_400 = new FontFace(
        "Montserrat",
        "url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2)",
        {
            style: 'normal',
            weight: '400',
            display: 'swap',
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
        }
    );
    montserrat_400.loaded.then(fontLoaded);
    document.fonts.add(montserrat_400);

    var montserrat_700 = new FontFace(
        "Montserrat",
        "url('/fonts/montserrat-latin-700-39d93cf678c740f9f6b2b1cfde34bee3.woff2')",
        {
            style: 'normal',
            weight: '700',
            display: 'swap',
        }
    );
    montserrat_700.loaded.then(fontLoaded);
    document.fonts.add(montserrat_700);

    document.fonts.ready.then(() => {
        console.log('There are', document.fonts.size, 'FontFaces loaded.\n');
    }).catch((error) => {
        console.log(error);
    });


} else {
    console.log("FontFace not supported");
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/css/fonts.css';
    link.media = 'all';
    head.appendChild(link);
}