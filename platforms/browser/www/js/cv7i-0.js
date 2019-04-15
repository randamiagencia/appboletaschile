cv0=" "; cv1=" = ";
function cvr() {
var vorg, vnew, nnew, rev;
rev = document.conv.vin.value;
rev = revin(rev);
rev = parseFloat(rev);
if (isNaN(rev)) rev = 1;

vorg = document.conv.nin[document.conv.nin.selectedIndex].value;
vnew = document.conv.nout[document.conv.nout.selectedIndex].value;

nnew = document.conv.nout.options[document.conv.nout.selectedIndex].text;
document.conv.vout.value = rev+cv0+cv1+recval(rev,vorg,vnew)+cv0+nnew;
}
function clout() {document.conv.vout.value = "";}
function recval(tv,vi,vn){
var tval = cvv[vn] / cvv[vi];
tv *= tval;
tv = Math.round(tv *1)/1;
return sep(tv);
}
function revin(string) {
for (var i=0, output='', valid="eE-0123456789."; i<string.length; i++)
if (valid.indexOf(string.charAt(i)) != -1)
output += string.charAt(i)
return output;
} 
function sep(av) {
var pv = Math.floor(av); var tc = av + ""; var tsp = ""
if (tc.indexOf('.',0) > -1){tsp = tc.substring(tc.indexOf('.',0),tc.length);}
var an=new Array('0'), i=0; 
while (pv>0) {an[i]=''+pv%1000; pv=Math.floor(pv/1000); i++;}
an=an.reverse();
for (var i in an) if (i>0)
while (an[i].length<3) an[i]='0'+an[i];
return an.join() + tsp;
}