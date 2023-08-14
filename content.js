console.log("working");
//ページが読み込まれたら実行
window.onload = function () {
    function replaceMicroWithMain() {
        // すべてのIMGタグを取得
        const imgElements = document.querySelectorAll('img');

        // すべてのsourceタグを取得
        const sourceElements = document.querySelectorAll('source');

        // IMGタグの要素をループで処理
        imgElements.forEach(img => {
            // "src"属性の値を取得
            const srcValue = img.getAttribute('src');

            // "data-src"属性の値を取得
            const dataSrcValue = img.getAttribute('data-src');

            // "src"属性に"micro"という文字列が含まれているかチェック
            if (srcValue.includes('micro') && !srcValue.includes('cc.fantia.jp')) {
                // "src"属性の値を"micro"を"main"に置換して更新
                img.setAttribute('src', srcValue.replace('micro', 'main'));
                console.log(img);
            }

            // "data-src"属性に"micro"という文字列が含まれているかチェック
            if (dataSrcValue && dataSrcValue.includes('micro') && !dataSrcValue.includes('cc.fantia.jp')) {
                // "data-src"属性の値を"micro"を"main"に置換して更新
                img.setAttribute('data-src', dataSrcValue.replace('micro', 'main'));
                console.log(img);
            }
        });

        // sourceタグの要素をループで処理
        sourceElements.forEach(source => {
            // "srcset"属性の値を取得
            const srcsetValue = source.getAttribute('srcset');

            // "srcset"属性に"micro"という文字列が含まれているかチェック
            if (srcsetValue && srcsetValue.includes('micro') && !srcsetValue.includes('cc.fantia.jp')) {
                // "srcset"属性の値を"micro"を"main"に置換して更新
                source.setAttribute('srcset', srcsetValue.replace('micro', 'main'));
                console.log(source);
            }
        });
    }

    // 一定の間隔（1秒ごと）で置き換えを実行
    setInterval(replaceMicroWithMain, 1000); // 1000ミリ秒 = 1秒


}