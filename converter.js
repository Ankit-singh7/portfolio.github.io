function kg()
{
var a=document.getElementById("kg").value;
document.getElementById("hg").value=a*10;
document.getElementById("Dg").value=a*100;
document.getElementById("g").value=a*1000;
document.getElementById("dg").value=a*10000;
document.getElementById("cg").value=a*100000;
document.getElementById("mg").value=a*1000000;
}
function hg()
{
var b=document.getElementById("hg").value;
document.getElementById("kg").value=b/10;
document.getElementById("Dg").value=b*10;
document.getElementById("g").value=a*100;
document.getElementById("dg").value=a*1000;
document.getElementById("cg").value=a*10000;
document.getElementById("mg").value=a*100000;
}
function Dg()
{
var c=document.getElementById("Dg").value;
document.getElementById("kg").value=c/100;
document.getElementById("hg").value=c/10;
document.getElementById("g").value=c*10;
document.getElementById("dg").value=c*100;
document.getElementById("cg").value=c*1000;
document.getElementById("mg").value=c*10000;
}
function g()
{
var d=document.getElementById("g").value;
document.getElementById("kg").value=d/1000;
document.getElementById("hg").value=d/100;
document.getElementById("Dg").value=d/10;
document.getElementById("dg").value=d*10;
document.getElementById("cg").value=d*100;
document.getElementById("mg").value=d*1000;
}
function dg()
{
var e=document.getElementById("dg").value;
document.getElementById("kg").value=e/10000;
document.getElementById("hg").value=e/1000;
document.getElementById("Dg").value=e/100;
document.getElementById("g").value=e/10;
document.getElementById("cg").value=e*10;
document.getElementById("mg").value=e*100;
}
function cg()
{
var f=document.getElementById("cg").value;
document.getElementById("kg").value=f/100000;
document.getElementById("hg").value=f/10000;
document.getElementById("Dg").value=f/1000;
document.getElementById("g").value=f/100;
document.getElementById("dg").value=f/10;
document.getElementById("mg").value=f*10;
}
function mg()
{
var g=document.getElementById("mg").value;
document.getElementById("kg").value=g/1000000;
document.getElementById("hg").value=g/100000;
document.getElementById("Dg").value=g/10000;
document.getElementById("g").value=g/1000;
document.getElementById("dg").value=g/100;
document.getElementById("cg").value=g/10;

}