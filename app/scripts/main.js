var langOptions = ['swedish', 'english'],
    lang = langOptions[0];

function rotateLanguage() {
    if (langOptions.indexOf(lang) >= langOptions.length - 1) {
        lang = langOptions[0];
    } else {
        lang = langOptions[langOptions.indexOf(lang) + 1];
    }

    for (var l in langOptions) {
        var lStr = langOptions[l];
        if (lStr === lang) {
            $('.' + lStr).show();
        } else {
            $('.' + lStr).hide();
        }
    }
}

$(document).ready(function () {
    $('.' + langOptions[1]).hide();

    $(".glyph-lang-image").on('click', function () {
        rotateLanguage();
    });
});
