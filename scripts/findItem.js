//Under construction with testing ways to find the the h1 and p associated with the parent article, and that only
console.log("findItem.js loaded")
var syncItem = ['itemType', 'itemName', 'itemColor', 'searchItem'];
var supremeURL = "https://www.supremenewyork.com";
var i = 0;
var items = document.getElementsByTagName("article");
var productURL = '';
var someh1match = true;
chrome.storage.sync.get(syncItem, function (res) {
    var productName = res.itemName;
    var productSection = res.itemType;
    var searchForItem = true;
    console.log(res)
    if (searchForItem === true) {
        $("h1").each(function () {
            if ($(this).is(':contains("Tagless Tees")')) {
                $(this).parent().css("border", "2px solid #ffff00");
                $("p").each(function () {
                    if ($(this).is(':contains("Black")')) {
                        $(this).parent().css("border", "2px solid #000");
                    }
                })
            } else {
                //console.log("Failed");
            }
        });
        else {
            console.log("Search for item is turned off");
        };
    }

    /*    $(".inner-article").each(function (index) {
            if (productName.toLowerCase() == $(this) find('h1').text().toLowerCase()) {
                productURL = $(this).find('a').attr("href");
                window.open(supremeURL + productURL)
            };
        });*/

});
$.expr[':'].textEquals = function (a, i, m) {
    return $(a).text().match("^" + m[3] + "$");
};
$("a:textEquals('Tagless Tees')");

$("h1:contains('Tagless Tees')").parent().css("border", "2px solid #ffff00");
var item = "Tagless Tees";
var color = "Black";
$("h1:contains('Tagless Tees')").filter('["h1:contains('
    item ')"],["p:contains('
    color ')"]').parent().css("border", "2px solid #ffff00");

$("h1").each(function () {
    if ($("h1:contains('Tagless Tees')") && $("p:contains('Black')")) {
        $(this).css("border", "2px solid #ffff00");
    }
});

$("article").each(function () {
    if ($('this > * > h1').is(':contains("Tagless Tees")')) {
        $(this).parent().css("border", "2px solid #ffff00");
        $("p").each(function () {
            if ($(this).is(':contains("Black")')) {
                $(this).parent().css("border", "2px solid #000");
            }
        })
    } else {
        //console.log("Failed");
    }
});
else {
    console.log("Search for item is turned off");
};
