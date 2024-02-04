# Dom => document object model

# 4 pillar of dom =>

1.Selection of an element
2.Changing HTML
3.CHanging CSS
4.Event Listener

1.selection of an element
var a = document.querySelector("h");
console.log(a);

2.Changing HTML
var a = document.querySelector("h1");
a.innerHTML = "Changed hehe";
same
document.querySelector("h1").innerHTML = "changed";

3.changing css => css ko naam j vaye pani style nai lekhnu parxa + css kei property style. paxi in camel case
var a = document.querySelector("h1");
a.innerHTML = "Hello";
a.style.color = "Green";
a.style.backgroundColor = "black";

4.Event Listener
var a = document.querySelector("h1");
a.addEventListener("click", function () {
a.innerHTML = "Hi hello i am diwas";
a.style.color = "Grey";
a.style.backgroundColor = "purple";
});

# Css => center(euta div ma duita kura xa ra jamma euta specific lai center garna lai)

parent=position: relative
center garne lai= position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

in custom cursor, you can write anything instead of event
