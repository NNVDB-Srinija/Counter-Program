let c=0;
document.getElementById("myH1").textContent=c;
document.getElementById("increase").onclick=function()
{
    c=c+1;
    document.getElementById("myH1").textContent=c;
}
document.getElementById("decrease").onclick=function()
{
    c=c-1;
    document.getElementById("myH1").textContent=c;
}