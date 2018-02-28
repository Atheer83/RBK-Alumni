	var studentsInfo = [];

$(function() {
$("body").css("background-color","lightblue")
$("h1").css("text-align", "center")
$(".sImage").css({
	"height" : "300px",
    "width": "100%"})
$('.slideShow').css({
	"margin": "0 auto",
    "width": "55%",
    "border": "3px solid green",
    "padding": "10px"});

$('.gallary').css({
	"margin": " auto",
    "width": "95%",
    "padding": "10px"});


var gallaryImage = $(".slideShow").find("img").first();

var image= [
		"images/student1.jpg",
		"images/student2.jpg",
		"images/student3.jpg",
		"images/student4.jpg",
		"images/student5.jpg",
		"images/student6.jpg"
		];

	var i =0;
	
	setInterval(function(){
		i = (i+1)%image.length;
		gallaryImage.fadeOut(function(){
			$(this).attr("src",image[i]);
			$(this).fadeIn();
		});
	},3000);

var gallaryItems = $(".gallary").find("img");
	gallaryItems.css("width","24%").css("opacity","0.7");
	gallaryItems.mouseenter(function(){
		$(this).stop().fadeTo("500","1")
		
	});

	gallaryItems.mouseleave(function(){
		$(this).stop().fadeTo("500","0.7")
	});

	gallaryItems.click(function(){ 
		var source = $(this).attr("src");
		var imageI = $("<img>").attr("src", source).css("width","100%");
		
		$(".lightbox").empty().append(imageI).fadeIn(2000);
		$(imageI).css({paddingTop: "20px"})
	});

		$(".lightbox").click(function(){ 

		$(this).stop().fadeOut();
	});


	//========= students.html ==========/
	

	$("#addStudent").click(function() {
	var name = $("#name").val();
	var age = $("#age").val();
	var fWhere = $("#fWhere").val();
	var work = $("#work").val();
	var index = $("#index").val()
	var idx = Number (index)

	function addInfo(name, age, fWhere, work) {
		return {
			name: name,
			age: age,
			fWhere: fWhere,
			work: work,
		}
	
	};
		console.log(idx)

	var student = "student" + idx;
		console.log(student)

		student =addInfo(name, age, fWhere, work)
		console.log(student)
		studentsInfo[idx - 1] =student;
		console.log(studentsInfo)
	
	$("#info").find("input:text").val('');
		idx = idx + 1 ;
		index = $("#index").val(idx);
	});



});

// 	document.getElementById('getval').addEventListener('change', readURL, true);
// 	function readURL(){
// 	   var file = document.getElementById("getval").files[0];
// 	   var reader = new FileReader();
//    reader.onloadend = function(){
//       document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";        
//    }
//    if(file){
//       reader.readAsDataURL(file);
//     }else{
//     }
// }




