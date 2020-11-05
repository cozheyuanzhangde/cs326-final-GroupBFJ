window.addEventListener('load',createCourse);
window.addEventListener('load',createComments);

function starRating(n,element){
    let div = document.createElement('div');
    let count = 0;
    for(let i = 0; i < 5; i++){
        let node = document.createElement('span');
        if(count < n){
            // node.classList.add('fa fa-star full');
            node.setAttribute('class','fa fa-star full');
            count ++;
        }
        else{
            node.setAttribute('class','fa fa-star');
        }
        div.appendChild(node);
    }
    element.appendChild(div);
}

function createDiv(courseName, professor, easy, time, overall){
    // for(let i = 0; i < num; i++){
    let bigDiv = document.createElement('div');
    bigDiv.classList.add('row');
    let node1 = document.createElement('div');
    node1.classList.add('col-sm');
    node1.innerHTML = courseName;
    let node2 = document.createElement('div');
    node2.classList.add('col-sm');
    node2.innerHTML = professor;
    let node3 = document.createElement('div');
    node3.classList.add('col-sm');
    starRating(easy,node3);
    let node4 = document.createElement('div');
    node4.classList.add('col-sm');
    starRating(time,node4);
    let node5 = document.createElement('div');
    node5.classList.add('col-sm');
    starRating(overall,node5);
    bigDiv.appendChild(node1);
    bigDiv.appendChild(node2);
    bigDiv.appendChild(node3);
    bigDiv.appendChild(node4);
    bigDiv.appendChild(node5);
    return bigDiv;

}


function createCourse(){
    const theDiv = document.getElementById('courseInfo');
    theDiv.appendChild(createDiv('cs 326','emery', 3, 3, 4));
}

function createComments(){
    const theDiv = document.getElementById('comments');
    for(let i = 0; i < 5; i++){
        theDiv.appendChild(createDiv('Jenny',"This is a great course, recommend to take it!", 3, 3, 4));
    }
}

function getURLParam(paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

let schoolName = getURLParam("schoolname");
let courseSubject = getURLParam("coursesubject");
let courseNumber = getURLParam("coursenumber");
console.log(schoolName);
console.log(courseSubject);
console.log(courseNumber);