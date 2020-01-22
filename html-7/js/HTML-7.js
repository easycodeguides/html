let links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i ++) {
    links[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = "white";
    });
    links[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = "green";
    });
}