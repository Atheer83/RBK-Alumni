
$(function() {
$("body").css("background-color","white")
$(".sImage").css({
	"height" : "500px",
    "width": "100%"})
$('.slideShow').css({
	"margin": "auto",
	"margin-top":"100px",
	"margin-bottom":"70px",
    "width": "65%",
    "border": "3px solid #4CAF50",
    "padding": "10px"});


//local storge
var studentsInfos = localStorage.getItem("studentsInfo");
studentsInfos = JSON.parse(studentsInfos);
//slide show and students array info
var gallaryImage = $(".slideShow").find("img").first();
var newArr = [];
var arrName =[];
var arrfWhere=[];
var arrAge =[];
var arrWork =[];
var image= [
		"slideshow/slide1.jpg",
		"slideshow/slide2.jpg",
		"slideshow/slide3.jpg",
		"slideshow/slide4.jpg",
		"slideshow/slide5.jpg",
		"slideshow/slide6.jpg"
		];

	var i =0;
	setInterval(function(){
		i = (i+1)%image.length;
		gallaryImage.fadeOut(function(){
			$(this).attr("src",image[i]);
			$(this).fadeIn();
		});
	},3000);
// Factory functions
function makeGallary(array) {
	
	for (var i =0; i< array.length; i++) {
		newArr.push(array[i].photo);
		$('.gallary').append("<div id='fix'><img src='" + array[i].photo + "'/></div>");
	}
	return newArr;
}

function makeName(array) {
	
	for (var i =0; i< array.length; i++) {
		arrName.push(array[i].name);
		$('.gallary img').eq(i).after("<div><strong>" + array[i].name + "</strong><br></div> ");
	}
	return arrName;
}
function makefWhere(array) {
	
	for (var i =0; i< array.length; i++) {
		arrfWhere.push(array[i].fWhere);
		$('.gallary #fix div').eq(i).append("<em>" + array[i].fWhere + "</em><br>");
	}
	return arrfWhere;
}
function makeAge(array) {
	
	for (var i =0; i< array.length; i++) {
		arrAge.push(array[i].age);
		$('.gallary #fix div').eq(i).append("<b>" + array[i].age + "</b><br>");
	}
	return arrfWhere;
}
function makeWork(array) {
	
	for (var i =0; i< array.length; i++) {
		arrWork.push(array[i].work);
		$('.gallary #fix div').eq(i).append("<b>" + array[i].work + "</b>");
	}
	return arrfWhere;
}

makeGallary(studentsInfos);
makeName(studentsInfos);
makefWhere(studentsInfos);
makeAge(studentsInfos);
makeWork(studentsInfos);



//photo profile
var gallaryItems = $(".gallary").find("img");
	gallaryItems.css("width", "100%")

	gallaryItems.mouseenter(function(){
		$(this).stop().fadeTo("500","1")
		
	});

	gallaryItems.mouseleave(function(){
		$(this).stop().fadeTo("500","0.7")
	});

	gallaryItems.click(function(){ 
		var source = $(this).attr("src");
		var imageI = $("<img>").attr("src", source).css("width","100%").css("border-radius","50%");
		
		$(".lightbox").empty().append(imageI).fadeIn(2000);
	});

		$(".lightbox").click(function(){ 

		$(this).stop().fadeOut();
	});


	//========= students Alumni ==========/
	
	var studentsInfo = [];

	$("#addStudent").click(function() {
	var name = $("#name").val();
	var age = $("#age").val();
	var fWhere = $("#fWhere").val();
	var work = $("#work").val();
	var index = $("#index").val();
	var photo = "images/" + $('input[type=file]').val().split('\\').pop();
	console.log(photo)

	var idx = Number (index);

	function addInfo(name, age, fWhere, work, photo) {
		return {
			name: name,
			age: age,
			fWhere: fWhere,
			work: work,
			photo: photo,
		}
	
	};

	var student = "student" + idx;

		student =addInfo(name, age, fWhere, work, photo)
		studentsInfo[idx - 1] =student;
		localStorage.setItem("studentsInfo", JSON.stringify(studentsInfo));
	
	$("#info").find("input:text").val('');
		idx = idx + 1 ;
		index = $("#index").val(idx);
	});

});




