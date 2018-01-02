export default function setPosition() {
    var oFrag=document.createDocumentFragment();
    for(var i=1;i<5;i++) {
        var ob = document.createElement('div');
        ob.classList.add('time-border', 'time-border-' + i + '');
        oFrag.appendChild(ob);
    }
    return oFrag;
}