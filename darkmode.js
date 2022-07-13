const gray = "#c8c8c8";
const mainColor = "#121212";
const subColor = "#1F1B24";
const accentColor = "#063672";

var element = document.createElement('style');
document.head.appendChild(element);

//nav bar
element.sheet.insertRule(".nav-tabs>li.active a, .nav-tabs>li.active a:hover { background-color: "+mainColor+"; color: "+gray+" }");
element.sheet.insertRule(".nav-tabs>li a:hover { background-color: "+subColor+"; color: "+gray+" }");

element.sheet.insertRule("body, .table .table, .table-stripes > tbody > tr { background-color: "+mainColor+"; }");
element.sheet.insertRule(".table .table tr:nth-child(odd), #charm-table .table tr:nth-child(odd) { background-color: "+subColor+"; }");
element.sheet.insertRule("label, div, h1, button { color: "+gray+"; }");
element.sheet.insertRule("button, input { background-color: "+accentColor+"; }");
element.sheet.insertRule("#results-table > tbody:hover, #results-table > tbody > tr:hover { background-color: "+subColor+"; }");
element.sheet.insertRule(".panel-body { background-color: "+subColor+"; color: "+gray+" }");
element.sheet.insertRule(".panel { border-color: "+subColor+";}");subColor

//general top borders
element.sheet.insertRule(".table>tbody+tbody, .table>tbody>tr>td, .table>thead>tr>th {border-top: 2px solid "+subColor+";}");

//charms tab
element.sheet.insertRule("#ui > div > div > div select { background-color: "+accentColor+"; color: "+gray+"}");
element.sheet.insertRule("textarea { background-color: "+subColor+"; color: "+gray+"}");

//eq tab
element.sheet.insertRule(".panel-body > select { background-color: "+accentColor+"; color: "+gray+"}");
element.sheet.insertRule(".panel .panel-heading { background-color: "+subColor+"; color: "+gray+"}");

//warning
element.sheet.insertRule(".alert{ background-color: "+accentColor+"; color: "+gray+"; border-color: "+gray+";}");

//progress bar
element.sheet.insertRule(".progress-bar { background-color: "+accentColor+";}");
element.sheet.insertRule(".progress { background-color: "+subColor+";}");

//button on "more skills"
element.sheet.insertRule(".btn { background-color: "+subColor+"; color: "+gray+" ; border-color: black;}");
element.sheet.insertRule(".btn:hover { background-color: "+accentColor+"; color: "+gray+" }");

//skills
const sf = (e) => {
    e.style.backgroundColor = (e.value.length != 0)? accentColor: subColor;
	e.style.color = gray;
    e.style.borderColor = subColor;
}

var se = [...document.getElementsByTagName("select")];
se.forEach((e)=>{
    sf(e); //on load
    e.addEventListener("change", () => {
        setTimeout(function (){ // replace colors after original onchange
            sf(e);
        }, 1);
    });
});
