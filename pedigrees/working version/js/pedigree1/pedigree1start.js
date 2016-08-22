

var 

	canvasCompletePedigree = document.getElementById("completePedigree"),
    canvasCompletePedigreeDraw = canvasCompletePedigree.getContext("2d"),
	canvasCompletePedigreeLegend = document.getElementById("completePedigreeLegend"),
    canvasCompletePedigreeDrawLegend = canvasCompletePedigreeLegend.getContext("2d"),
	

	females = [],
	males = [],
	numberOfMAles = 0,
imgSprite = new Image();
imgSprite.src = "images/sprite1.png";
imgSprite.addEventListener("load", init, true);

var canvasCompletePedigreeDrawWidth = canvasCompletePedigree.width -35;
var canvasCompletePedigreeDrawHeight = canvasCompletePedigree.height-25;

var canvasCompletePedigreeDrawLegendWidth = canvasCompletePedigreeLegend.width;
var canvasCompletePedigreeDrawLegendHeight = canvasCompletePedigreeLegend.height-8;


function Legend(){
	

	canvasCompletePedigreeDrawLegend.fillStyle = 'orange';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.rect(10, 10, 40, 40);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
	canvasCompletePedigreeDrawLegend.fill();

	canvasCompletePedigreeDrawLegend.fillStyle = 'orange';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.arc(100, 30, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
    canvasCompletePedigreeDrawLegend.fill();
	
	
    canvasCompletePedigreeDrawLegend.fill();
	canvasCompletePedigreeDrawLegend.fillStyle = "black";
	canvasCompletePedigreeDrawLegend.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('Disease Present. Imputed Negative Genotype.', 160 +canvasCompletePedigreeDrawLegendWidth/4.1, canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend.fillStyle = 'yellow';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.rect(10, 10+ canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
	canvasCompletePedigreeDrawLegend.fill();
	
	canvasCompletePedigreeDrawLegend.fillStyle = 'yellow';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.arc(100, 30 + canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
    canvasCompletePedigreeDrawLegend.fill();
	
    canvasCompletePedigreeDrawLegend.fill();
	canvasCompletePedigreeDrawLegend.fillStyle = "black";
	canvasCompletePedigreeDrawLegend.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('No Disease. Imputed Negative Genotype.', 145 +canvasCompletePedigreeDrawLegendWidth/4.1, 2*canvasCompletePedigreeDrawLegendHeight/6);
	

	canvasCompletePedigreeDrawLegend.fillStyle = 'blue';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.rect(10, 10+ 2*canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
	canvasCompletePedigreeDrawLegend.fill();
	
	canvasCompletePedigreeDrawLegend.fillStyle = 'blue';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.arc(100, 30 + 2*canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
    canvasCompletePedigreeDrawLegend.fill();
	
    canvasCompletePedigreeDrawLegend.fill();
	canvasCompletePedigreeDrawLegend.fillStyle = "black";
	canvasCompletePedigreeDrawLegend.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('Disease Present. Tested Negative Genotype.',160 +canvasCompletePedigreeDrawLegendWidth/4.1, 3*canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend.fillStyle = 'green';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.rect(10, 10+ 3*canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
	canvasCompletePedigreeDrawLegend.fill();
	
	canvasCompletePedigreeDrawLegend.fillStyle = 'green';
	canvasCompletePedigreeDrawLegend.beginPath();
    canvasCompletePedigreeDrawLegend.arc(100, 30 + 3*canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend.lineWidth = 4;
    canvasCompletePedigreeDrawLegend.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend.stroke();
	canvasCompletePedigreeDrawLegend.closePath();
    canvasCompletePedigreeDrawLegend.fill();
	
    canvasCompletePedigreeDrawLegend.fill();
	canvasCompletePedigreeDrawLegend.fillStyle = "black";
	canvasCompletePedigreeDrawLegend.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('No Disease. Tested Negative Genotype.',145 +canvasCompletePedigreeDrawLegendWidth/4.1, 4*canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend.font = "13pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('MALE',29, 4.8*canvasCompletePedigreeDrawLegendHeight/5.2);
	
	canvasCompletePedigreeDrawLegend.font = "13pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend.textAlign = "center";
	canvasCompletePedigreeDrawLegend.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend.fillText('FEMALE',109, 4.8*canvasCompletePedigreeDrawLegendHeight/5.2);
	

	

	
}

var malesArray = [];

//malesArray.push(new Males2(1,2,0,0,1,50,0,0,2,2,1,'?','/','?','black','black','2','white'));
function Males2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textMaleGene1,textMaleDash,textMaleGene2,textMaleGene1Color,textMaleGene2Color,textMaleIdentifier, maleFillColor ) {
   	this.famid = famid;
	this.id = id;
	this.momid = momid;
	this.dadid = dadid;
	this.affection = affection;
	this.age = age;
	this.proband = proband;
	this.female = female;
	this.genotype = genotype;
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/4.1;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/3.5;
	this.x_file = x;
	this.y_file = y;
	this.textMaleGene1 = textMaleGene1;
	this.textMaleDash = textMaleDash;
	this.textMaleGene2 = textMaleGene2 ;
	this.textMaleGene1Color = textMaleGene1Color;
	this.textMaleGene2Color = textMaleGene2Color;
	this.textMaleIdentifier = textMaleIdentifier;
	this.maleFillColor = maleFillColor;   
	this.width = 79;
    this.height = 79;
	this.end_x = this.drawX + this.width;
	this.end_y = (this.drawY + this.height)/2;
	this.begining_x = this.drawX;
	this.end_y = (this.drawY + this.height)/2;
}

Males2.prototype.draw = function () {
    canvasCompletePedigreeDraw.fillStyle = this.maleFillColor;
	canvasCompletePedigreeDraw.beginPath();
    canvasCompletePedigreeDraw.rect(this.drawX, this.drawY, this.width, this.height);
	canvasCompletePedigreeDraw.lineWidth = 4;
    canvasCompletePedigreeDraw.strokeStyle = '#003300';
    canvasCompletePedigreeDraw.stroke();
	canvasCompletePedigreeDraw.closePath();
    canvasCompletePedigreeDraw.fill();
	canvasCompletePedigreeDraw.fillStyle = "black";
	canvasCompletePedigreeDraw.font = "15pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textMaleIdentifier, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	

	
	canvasCompletePedigreeDraw.fillStyle = 'white';
	canvasCompletePedigreeDraw.beginPath();
    canvasCompletePedigreeDraw.rect(this.drawX +this.width-this.width/3, this.drawY + 1.15*this.height, 60, 25);
	canvasCompletePedigreeDraw.lineWidth = 1;
    canvasCompletePedigreeDraw.strokeStyle = '#003300';
    canvasCompletePedigreeDraw.stroke();
	canvasCompletePedigreeDraw.closePath();
	
	
	canvasCompletePedigreeDraw.fillStyle = this.textMaleGene1Color;
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textMaleGene1, this.drawX +this.width-this.width/5, this.drawY + 1.32*this.height);
	
	canvasCompletePedigreeDraw.fillStyle = "black";
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textMaleDash, this.drawX +this.width-this.width/20, this.drawY + 1.32*this.height);
	
	canvasCompletePedigreeDraw.fillStyle = this.textMaleGene2Color;
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textMaleGene2, this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height);
};

function initFamily() {
femaleArray.push(new Females2(1,1,0,0,2,50,0,1,2,3,1,'?','/','?','black','black','1','white'));
arrayRelationship.push(new Relationship2(1,0,0,1,3,1));
malesArray.push(new Males2(1,2,0,0,1,50,0,0,2,2,1,'?','/','?','black','black','2','white'));
arrayRelationship.push(new Relationship2(2,0,0,0,2,1));
femaleArray.push(new Females2(1,3,1,2,2,50,0,1,2,1.5,2,'?','/','?','black','black','3','white'));
arrayRelationship.push(new Relationship2(3,1,2,1,1.5,2));
malesArray.push(new Males2(1,4,0,0,1,50,0,0,2,0.5,2,'?','/','?','black','black','4','white'));
arrayRelationship.push(new Relationship2(4,0,0,0,0.5,2));
femaleArray.push(new Females2(1,5,1,2,2,50,0,1,2,3.5,2,'?','/','?','black','black','5','white'));
arrayRelationship.push(new Relationship2(5,1,2,1,3.5,2));
malesArray.push(new Males2(1,6,0,0,1,50,0,0,2,2.5,2,'?','/','?','black','black','6','white'));
arrayRelationship.push(new Relationship2(6,0,0,0,2.5,2));
malesArray.push(new Males2(1,7,3,4,1,50,0,0,2,0,3,'?','/','?','black','black','7','white'));
arrayRelationship.push(new Relationship2(7,3,4,0,0,3));
malesArray.push(new Males2(1,8,5,6,2,50,1,0,2,3,3,'-','/','-','blue','blue','8','blue'));
arrayRelationship.push(new Relationship2(8,5,6,0,3,3));
malesArray.push(new Males2(1,9,3,4,1,50,0,0,2,1,3,'?','/','?','black','black','9','white'));
arrayRelationship.push(new Relationship2(9,3,4,0,1,3));
femaleArray.push(new Females2(1,10,3,4,2,50,0,1,2,2,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(10,3,4,1,2,3));

}

function drawAllMales2() {
    for (var i = 0; i < malesArray.length; i++) {
        malesArray[i].draw();
		

    }
}



var femaleArray = [];
function Females2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textFemaleGene1,textFemaleDash,textFemaleGene2,textFemaleGene1Color,textFemaleGene2Color,textFemaleIdentifier, femaleFillColor ) {
   	this.famid = famid;
	this.id = id;
	this.momid = momid;
	this.dadid = dadid;
	this.affection = affection;
	this.age = age;
	this.proband = proband;
	this.female = female;
	this.genotype = genotype;
	this.x_file = x;
	this.y_file = y;
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/4.1;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/3.5;
	this.drawX_cirlce = (x+0.1)*canvasCompletePedigreeDrawWidth/4.1 +45;
	this.drawY_circle = (y-0.1)*canvasCompletePedigreeDrawHeight/3.5 +42;
	this.textFemaleGene1 = textFemaleGene1;
	this.textFemaleDash = textFemaleDash;
	this.textFemaleGene2 = textFemaleGene2 ;
	this.textFemaleGene1Color = textFemaleGene1Color;
	this.textFemaleGene2Color = textFemaleGene2Color;
	this.textFemaleIdentifier = textFemaleIdentifier;
	this.femaleFillColor = femaleFillColor;   
	this.radius = 42;
    this.width_circle = this.radius * 2;
    this.height_circle = this.radius * 2;
	this.width = 79;
    this.height = 79;

}

Females2.prototype.draw = function () {
    canvasCompletePedigreeDraw.fillStyle = this.femaleFillColor;
	canvasCompletePedigreeDraw.beginPath();
    canvasCompletePedigreeDraw.arc(this.drawX_cirlce, this.drawY_circle, this.radius, 0, Math.PI * 2, false);
	canvasCompletePedigreeDraw.lineWidth = 4;
    canvasCompletePedigreeDraw.strokeStyle = '#003300';
    canvasCompletePedigreeDraw.stroke();
	canvasCompletePedigreeDraw.closePath();
    canvasCompletePedigreeDraw.fill();
	
	canvasCompletePedigreeDraw.fillStyle = "black";
	canvasCompletePedigreeDraw.font = "15pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textFemaleIdentifier, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	

	
	canvasCompletePedigreeDraw.fillStyle = 'white';
	canvasCompletePedigreeDraw.beginPath();
    canvasCompletePedigreeDraw.rect(this.drawX +this.width-this.width/3, this.drawY + 1.15*this.height, 60, 25);
	canvasCompletePedigreeDraw.lineWidth = 1;
    canvasCompletePedigreeDraw.strokeStyle = '#003300';
    canvasCompletePedigreeDraw.stroke();
	canvasCompletePedigreeDraw.closePath();
	
	
	canvasCompletePedigreeDraw.fillStyle = this.textFemaleGene1Color;
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textFemaleGene1, this.drawX +this.width-this.width/5, this.drawY + 1.32*this.height);
	
	canvasCompletePedigreeDraw.fillStyle = "black";
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textFemaleDash, this.drawX +this.width-this.width/20, this.drawY + 1.32*this.height);
	
	canvasCompletePedigreeDraw.fillStyle = this.textFemaleGene2Color;
	canvasCompletePedigreeDraw.font = "20pt Arial, sans-serif";
	canvasCompletePedigreeDraw.textAlign = "center";
	canvasCompletePedigreeDraw.textBaseline = "middle";
	canvasCompletePedigreeDraw.fillText(this.textFemaleGene2, this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height);
};


function drawAllFemales2() {
    for (var i = 0; i < femaleArray.length; i++) {
        femaleArray[i].draw();
		

    }
}






function updateDropdownMenuTwo() {

		$('#trait-list2').append("<li id = '1'><a href='#' onclick='testOption(0)'>Test </a></li>");	
		$('#trait-list2').append("<li id = '2'><a href='#' onclick='testOption(1)'> some other option </a></li>");
		$('#trait-list2').css('top',  130 - 20+(malesArray[0].drawY + 1.32*malesArray[0].height)); //or wherever you want it
		$('#trait-list2').css('left', 800+ 0.98*(malesArray[0].drawX +malesArray[0].width-malesArray[0].width/20 +10)); //or wherever you want it
		$('#trait-list2').css('z-index', 2);
		$('#trait-list2 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}


CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};
//malesArray.push(new Males2(1,2,0,0,1,50,0,0,2,2,1,'?','/','?','black','black','2','white'));
//function Males2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textMaleGene1,textMaleDash,textMaleGene2,textMaleGene1Color,textMaleGene2Color,textMaleIdentifier, maleFillColor ) {
	
//function Females2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textFemaleGene1,textFemaleDash,textFemaleGene2,textFemaleGene1Color,textFemaleGene2Color,textFemaleIdentifier, femaleFillColor )
var individual_tested =0;
var individual_tested_html;
function testOption(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[0].maleFillColor = 'green';
		malesArray[0].textMaleGene1 = '-';
		malesArray[0].textMaleGene2 = '-';
		malesArray[0].textMaleGene1Color = 'blue';
		malesArray[0].textMaleGene2Color = 'blue';
		femaleArray[0].femaleFillColor = 'orange';
		femaleArray[0].textFemaleGene1 = '-';
		femaleArray[0].textFemaleGene2 = '-';
		femaleArray[0].textFemaleGene1Color = 'blue';
		femaleArray[0].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#1').remove();
		$('#2').remove();		
		$('#trait-list2').append("<li id = '1'>This patient has been tested</li>");	
		$('#trait-list2').append("<li id = '2'>Patient is Negative for mutation</li>");
		$("#info-label1").append('<br>'+ " *** Patient # 2 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 2 is negative for mutation" );
		$('#one_1').remove();
		$('#one_2').remove();		
		$('#trait-list1').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list1').append("<li id = '2'>based on the test of individual #2</li>");
		$("#info-label1").text('<br>'+ " *** Imputed genotype of individual # 1 is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 1 has a disease");
		$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		//$("#info-label3").html("Click on the blue triangle in small box to test someone." );
		//$("#info-label4").html("Click on the blue triangle in small box to test someone." );
		
	}
}


function updateDropdownMenuOne() {

		$('#trait-list1').append("<li id = 'one_1'><a href='#' onclick='testOptionOne(0)'>Test </a></li>");
		$('#trait-list1').append("<li id = 'one_2'><a href='#' onclick='testOptionOne(1)'> some other option </a></li>");
		$('#trait-list1').css('top',  130 -20+(femaleArray[0].drawY + 1.32*femaleArray[0].height)); //or wherever you want it
		$('#trait-list1').css('left', 800+ 0.98*(femaleArray[0].drawX +femaleArray[0].width-femaleArray[0].width/20 +10)); //or wherever you want it
		$('#trait-list1').css('z-index', 2);
		$('#trait-list1 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionOne(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[0].maleFillColor = 'yellow';
		malesArray[0].textMaleGene1 = '-';
		malesArray[0].textMaleGene2 = '-';
		malesArray[0].textMaleGene1Color = 'blue';
		malesArray[0].textMaleGene2Color = 'blue';
		femaleArray[0].femaleFillColor = 'blue';
		femaleArray[0].textFemaleGene1 = '-';
		femaleArray[0].textFemaleGene2 = '-';
		femaleArray[0].textFemaleGene1Color = 'blue';
		femaleArray[0].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#1').remove();
		$('#2').remove();		
		$('#trait-list1').append("<li id = 'one_1'>This patient has been tested</li>");	
		$('#trait-list1').append("<li id = 'one_2'>Patient is Negative for mutation</li>");
		$("#info-label1").text('<br>'+ " *** Patient # 1 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 1 is negative for mutation" );
		$('#one_1').remove();
		$('#one_2').remove();		
		$('#trait-list2').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list2').append("<li id = '2'>based on the test of individual #1</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 2 is Neg for mutation");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}


function updateDropdownMenuThree() {

		$('#trait-list3').append("<li id = 'three_1'><a href='#' onclick='testOptionThree(0)'>Test </a></li>");
		$('#trait-list3').append("<li id = 'three_2'><a href='#' onclick='testOptionThree(1)'> some other option </a></li>");
		$('#trait-list3').css('top',  130 - 20+(femaleArray[1].drawY + 1.32*femaleArray[1].height)); //or wherever you want it
		$('#trait-list3').css('left', 800+ 0.98*(femaleArray[1].drawX +femaleArray[1].width-femaleArray[1].width/20 +10)); //or wherever you want it
		$('#trait-list3').css('z-index', 2);
		$('#trait-list3 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionThree(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[1].maleFillColor = 'yellow';
		malesArray[1].textMaleGene1 = '-';
		malesArray[1].textMaleGene2 = '-';
		malesArray[1].textMaleGene1Color = 'blue';
		malesArray[1].textMaleGene2Color = 'blue';
		femaleArray[1].femaleFillColor = 'blue';
		femaleArray[1].textFemaleGene1 = '-';
		femaleArray[1].textFemaleGene2 = '-';
		femaleArray[1].textFemaleGene1Color = 'blue';
		femaleArray[1].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#three_1').remove();
		$('#three_2').remove();		
		$('#trait-list3').append("<li id = 'three_1'>This patient has been tested</li>");	
		$('#trait-list3').append("<li id = 'three_2'>Patient is Negative for mutation</li>");
		$('#trait-list3').append("<li id = 'three_3'>However, we know that patient has a disease</li>");
		$("#info-label1").text('<br>'+ "***  We know that patient 3 has a disease" );
		$("#info-label1").append('<br>'+ " *** Patient # 3 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 3 is negative for mutation" );
		$('#four_1').remove();
		$('#four_2').remove();		
		$('#trait-list4').append("<li id = 'four_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list4').append("<li id = 'four_2'>based on the test of individual #3</li>");
		$('#trait-list4').append("<li id = 'four_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 4 is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 4 does not have a disease");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuFour() {

		$('#trait-list4').append("<li id = 'four_1'><a href='#' onclick='testOptionFour(0)'>Test </a></li>");
		$('#trait-list4').append("<li id = 'four_2'><a href='#' onclick='testOptionFour(1)'> some other option </a></li>");
		$('#trait-list4').css('top',  130 -20+(malesArray[1].drawY + 1.32*malesArray[1].height)); //or wherever you want it
		$('#trait-list4').css('left', 800+ 0.98*(malesArray[1].drawX +malesArray[1].width-malesArray[1].width/20 +10)); //or wherever you want it
		$('#trait-list4').css('z-index', 2);
		$('#trait-list4 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}


function testOptionFour(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[1].maleFillColor = 'green';
		malesArray[1].textMaleGene1 = '-';
		malesArray[1].textMaleGene2 = '-';
		malesArray[1].textMaleGene1Color = 'blue';
		malesArray[1].textMaleGene2Color = 'blue';
		femaleArray[1].femaleFillColor = 'orange';
		femaleArray[1].textFemaleGene1 = '-';
		femaleArray[1].textFemaleGene2 = '-';
		femaleArray[1].textFemaleGene1Color = 'blue';
		femaleArray[1].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#three_1').remove();
		$('#three_2').remove();		
		$('#trait-list3').append("<li id = 'three_1'>Results were imputed from testing patient # 4</li>");	
		$('#trait-list3').append("<li id = 'three_2'>Patient is Negative for mutation</li>");
		$('#trait-list3').append("<li id = 'three_3'>However, we know that patient has a disease</li>");
		$("#info-label1").text('<br>'+ "***  We know that patient 3 has a disease" );
		$("#info-label1").append('<br>'+ " *** Patient # 3 results were imputed from testing #4");
		$("#info-label1").append('<br>'+ "***  Patient # 3 is negative for mutation" );
		$('#four_1').remove();
		$('#four_2').remove();		
		$('#trait-list4').append("<li id = 'four_1'>Patient #4 was tested</li>");	
		$('#trait-list4').append("<li id = 'four_2'>Patient #4 is negative for mutation</li>");
		$('#trait-list4').append("<li id = 'four_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Patient # 4 was tested and is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 4 does not have a disease");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuFive() {

		$('#trait-list5').append("<li id = 'five_1'><a href='#' onclick='testOptionFive(0)'>Test </a></li>");
		$('#trait-list5').append("<li id = 'five_2'><a href='#' onclick='testOptionFive(1)'> some other option </a></li>");
		$('#trait-list5').css('top',  130 - 20+(femaleArray[2].drawY + 1.32*femaleArray[2].height)); //or wherever you want it
		$('#trait-list5').css('left', 650+ 0.98*(femaleArray[2].drawX +femaleArray[2].width-femaleArray[2].width/20 +10)); //or wherever you want it
		$('#trait-list5').css('z-index', 2);
		$('#trait-list5 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionFive(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[2].maleFillColor = 'yellow';
		malesArray[2].textMaleGene1 = '-';
		malesArray[2].textMaleGene2 = '-';
		malesArray[2].textMaleGene1Color = 'blue';
		malesArray[2].textMaleGene2Color = 'blue';
		femaleArray[2].femaleFillColor = 'blue';
		femaleArray[2].textFemaleGene1 = '-';
		femaleArray[2].textFemaleGene2 = '-';
		femaleArray[2].textFemaleGene1Color = 'blue';
		femaleArray[2].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#five_1').remove();
		$('#five_2').remove();		
		$('#trait-list5').append("<li id = 'five_1'>This patient has been tested</li>");	
		$('#trait-list5').append("<li id = 'five_2'>Patient is Negative for mutation</li>");
		$('#trait-list5').append("<li id = 'five_3'>However, we know that patient has a disease</li>");
		$("#info-label1").text('<br>'+ "***  We know that patient 3 has a disease" );
		$("#info-label1").append('<br>'+ " *** Patient # 5 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 5 is negative for mutation" );
		$('#six_1').remove();
		$('#six_2').remove();		
		$('#trait-list6').append("<li id = 'six_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list6').append("<li id = 'six_2'>based on the test of individual #5</li>");
		$('#trait-list6').append("<li id = 'six_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 6 is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 6 does not have a disease");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}


function updateDropdownMenuSix() {

		$('#trait-list6').append("<li id = 'six_1'><a href='#' onclick='testOptionSix(0)'>Test </a></li>");
		$('#trait-list6').append("<li id = 'six_2'><a href='#' onclick='testOptionSix(1)'> some other option </a></li>");
		$('#trait-list6').css('top',  130 -20+(malesArray[2].drawY + 1.32*malesArray[2].height)); //or wherever you want it
		$('#trait-list6').css('left', 800+ 0.98*(malesArray[2].drawX +malesArray[2].width-malesArray[2].width/20 +10)); //or wherever you want it
		$('#trait-list6').css('z-index', 2);
		$('#trait-list6 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionSix(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[2].maleFillColor = 'green';
		malesArray[2].textMaleGene1 = '-';
		malesArray[2].textMaleGene2 = '-';
		malesArray[2].textMaleGene1Color = 'blue';
		malesArray[2].textMaleGene2Color = 'blue';
		femaleArray[2].femaleFillColor = 'orange';
		femaleArray[2].textFemaleGene1 = '-';
		femaleArray[2].textFemaleGene2 = '-';
		femaleArray[2].textFemaleGene1Color = 'blue';
		femaleArray[2].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#five_1').remove();
		$('#five_2').remove();		
		$('#trait-list5').append("<li id = 'five_1'>Results were imputed from testing patient # 6</li>");	
		$('#trait-list5').append("<li id = 'five_2'>Patient is Negative for mutation</li>");
		$('#trait-list5').append("<li id = 'five_3'>However, we know that patient has a disease</li>");
		$("#info-label1").text('<br>'+ "***  We know that patient 5 has a disease" );
		$("#info-label1").append('<br>'+ " *** Patient # 5 results were imputed from testing #6");
		$("#info-label1").append('<br>'+ "***  Patient # 5 is negative for mutation" );
		$('#six_1').remove();
		$('#six_2').remove();		
		$('#trait-list6').append("<li id = 'six_1'>Patient #6 was tested</li>");	
		$('#trait-list6').append("<li id = 'six_2'>Patient #6 is negative for mutation</li>");
		$('#trait-list6').append("<li id = 'six_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Patient # 6 was tested and is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 6 does not have a disease");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
function updateDropdownMenuSeven() {

		$('#trait-list7').append("<li id = 'seven_1'><a href='#' onclick='testOptionSeven(0)'>Test </a></li>");
		$('#trait-list7').append("<li id = 'seven_2'><a href='#' onclick='testOptionSeven(1)'> some other option </a></li>");
		$('#trait-list7').css('top',  130 - 20+(malesArray[3].drawY + 1.32*malesArray[3].height)); //or wherever you want it
		$('#trait-list7').css('left', 800+ 0.98*(malesArray[3].drawX +malesArray[3].width-malesArray[3].width/20 -20)); //or wherever you want it
		$('#trait-list7').css('z-index', 2);
		$('#trait-list7 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionSeven(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[3].maleFillColor = 'green';
		malesArray[3].textMaleGene1 = '-';
		malesArray[3].textMaleGene2 = '-';
		malesArray[3].textMaleGene1Color = 'blue';
		malesArray[3].textMaleGene2Color = 'blue';
		malesArray[5].maleFillColor = 'yellow';
		malesArray[5].textMaleGene1 = '-';
		malesArray[5].textMaleGene2 = '-';
		malesArray[5].textMaleGene1Color = 'blue';
		malesArray[5].textMaleGene2Color = 'blue';
		femaleArray[3].femaleFillColor = 'orange';
		femaleArray[3].textFemaleGene1 = '-';
		femaleArray[3].textFemaleGene2 = '-';
		femaleArray[3].textFemaleGene1Color = 'blue';
		femaleArray[3].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#seven_1').remove();
		$('#seven_2').remove();	
		$('#nine_1').remove();
		$('#nine_2').remove();		
		$('#ten_1').remove();
		$('#ten_2').remove();				
		$('#trait-list7').append("<li id = 'seven_1'>This patient has been tested</li>");	
		$('#trait-list7').append("<li id = 'seven_2'>Patient is Negative for mutation</li>");
		$("#info-label1").text('<br>'+ " *****************************");
		$("#info-label1").append('<br>'+ " *** Patient # 7 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 7 is negative for mutation" );
		$('#trait-list10').append("<li id = 'ten_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list10').append("<li id = 'ten_2'>based on the test of individual #7</li>");
		$('#trait-list10').append("<li id = 'ten_3'>We know that this individual  have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 10 is Neg for mutation");
		$('#trait-list9').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list9').append("<li id = 'seven_2'>based on the test of individual #7</li>");
		$('#trait-list9').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 9 is Neg for mutation");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuEight() {

		$('#trait-list8').append("<li><a href='#' onclick='traitSelected(0)'>This patient was tested already</a></li>");
		$('#trait-list8').append('<li><a href="#" onclick="traitSelected(1)"> The patient has a disease </a></li>');		
		$('#trait-list8').append('<li><a href="#" onclick="traitSelected(1)"> The patient does not have any mutations </a></li>');
		$('#trait-list8').css('top',  130 - 20+(malesArray[4].drawY + 1.32*malesArray[4].height)); //or wherever you want it
	    $('#trait-list8').css('left', 650+ 0.98*(malesArray[4].drawX +malesArray[4].width-malesArray[4].width/20 -20)); //or wherever you want it
		$('#trait-list8').css('z-index', 2);
		$('#trait-list8 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function updateDropdownMenuNine() {

		$('#trait-list9').append("<li id = 'nine_1'><a href='#' onclick='testOptionNine(0)'>Test </a></li>");
		$('#trait-list9').append("<li id = 'nine_2'><a href='#' onclick='testOptionNine(1)'> some other option </a></li>");
		$('#trait-list9').css('top',  130 - 20+(malesArray[5].drawY + 1.32*malesArray[5].height)); //or wherever you want it
		$('#trait-list9').css('left', 800+ 0.98*(malesArray[5].drawX +malesArray[5].width-malesArray[5].width/20 -23)); //or wherever you want it
		$('#trait-list9').css('z-index', 2);
		$('#trait-list9 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}
function testOptionNine(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[3].maleFillColor = 'yellow';
		malesArray[3].textMaleGene1 = '-';
		malesArray[3].textMaleGene2 = '-';
		malesArray[3].textMaleGene1Color = 'blue';
		malesArray[3].textMaleGene2Color = 'blue';
		malesArray[5].maleFillColor = 'green';
		malesArray[5].textMaleGene1 = '-';
		malesArray[5].textMaleGene2 = '-';
		malesArray[5].textMaleGene1Color = 'blue';
		malesArray[5].textMaleGene2Color = 'blue';
		femaleArray[3].femaleFillColor = 'orange';
		femaleArray[3].textFemaleGene1 = '-';
		femaleArray[3].textFemaleGene2 = '-';
		femaleArray[3].textFemaleGene1Color = 'blue';
		femaleArray[3].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#seven_1').remove();
		$('#seven_2').remove();	
		$('#nine_1').remove();
		$('#nine_2').remove();		
		$('#ten_1').remove();
		$('#ten_2').remove();				
		$('#trait-list9').append("<li id = 'nine_1'>This patient has been tested</li>");	
		$('#trait-list9').append("<li id = 'nine_2'>Patient is Negative for mutation</li>");
		$("#info-label1").append('<br>'+ " *****************************");
		$("#info-label1").append('<br>'+ " *** Patient # 9 has been tested");
		$("#info-label1").text('<br>'+ "***  Patient # 9 is negative for mutation" );
		$('#trait-list10').append("<li id = 'ten_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list10').append("<li id = 'ten_2'>based on the test of individual #9</li>");
		$('#trait-list10').append("<li id = 'ten_3'>We know that this individual  have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 10 is Neg for mutation");
		$('#trait-list7').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list7').append("<li id = 'seven_2'>based on the test of individual #9</li>");
		$('#trait-list7').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 7 is Neg for mutation");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
function updateDropdownMenuTen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTen(1)'> some other option </a></li>");
		$('#trait-list10').css('top',  130 - 20+(femaleArray[3].drawY + 1.32*femaleArray[3].height)); //or wherever you want it
		$('#trait-list10').css('left', 800+ 0.98*(femaleArray[3].drawX +femaleArray[3].width-femaleArray[3].width/20 -23)); //or wherever you want it
		$('#trait-list10').css('z-index', 2);
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTen(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[3].maleFillColor = 'yellow';
		malesArray[3].textMaleGene1 = '-';
		malesArray[3].textMaleGene2 = '-';
		malesArray[3].textMaleGene1Color = 'blue';
		malesArray[3].textMaleGene2Color = 'blue';
		malesArray[5].maleFillColor = 'yellow';
		malesArray[5].textMaleGene1 = '-';
		malesArray[5].textMaleGene2 = '-';
		malesArray[5].textMaleGene1Color = 'blue';
		malesArray[5].textMaleGene2Color = 'blue';
		femaleArray[3].femaleFillColor = 'blue';
		femaleArray[3].textFemaleGene1 = '-';
		femaleArray[3].textFemaleGene2 = '-';
		femaleArray[3].textFemaleGene1Color = 'blue';
		femaleArray[3].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#seven_1').remove();
		$('#seven_2').remove();	
		$('#nine_1').remove();
		$('#nine_2').remove();		
		$('#ten_1').remove();
		$('#ten_2').remove();				
		$('#trait-list10').append("<li id = 'ten_1'>This patient has been tested</li>");	
		$('#trait-list10').append("<li id = 'ten_2'>Patient is Negative for mutation</li>");
		$('#trait-list10').append("<li id = 'ten_3'>However, we know that patient has a disease</li>");
		$("#info-label1").text('<br>'+ " *****************************");
		$("#info-label1").append('<br>'+ " *** Patient # 10 has been tested");
		$("#info-label1").append('<br>'+ "***  Patient # 10 is negative for mutation" );
		$('#trait-list7').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list7').append("<li id = 'seven_2'>based on the test of individual #10</li>");
		$('#trait-list7').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 7 is Neg for mutation");
		$('#trait-list9').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list9').append("<li id = 'seven_2'>based on the test of individual #10</li>");
		$('#trait-list9').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 9 is Neg for mutation");
				$("#info-label1").append('<br>'+ " *** Click on the triangle for more information");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}


function traitSelected(selectedTraitIndex) {
	if (exists(selectedTraitIndex)) {
		if (!pedigree.constant.teachMode) {
			// determine if student answer is correct
			if (selectedTraitIndex === currentTrait) {
				alert("Correct!  Here's a new trait...");
				nextTrait();
			} else {
				alert("Incorrect.  Please try again.")
			}
		} else { // teach mode
			$("#combo-box").html(pedigree.constant.traitChoices[selectedTraitIndex]);
			currentTrait = selectedTraitIndex;
		}
		//nextPedigree(selectedTraitIndex);
	}
}

function init() {


	/*
	$(document).ready(function() {
    $.ajax({
		url: "/~vlaskint/randome/eracle/js/pedigree1/pedigree1.txt",
        type: "GET",
        //url: "pedigree1.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});
*/
initFamily();
drawAllMales2();
drawAllFemales2();
//checkRelationships();
addConnection();
drawConnection2();
Legend();
//document.getElementById("male_number").innerHTML = numberOfMAles;
	$("#info-label1").html("Click on the blue triangle in small box to test someone or see detailed result of the test" );
	$("#pedigree_message").html("You have a medically important genetic variant ");
	$("#combo-box2").html("  &#x25BC;");
	//test box for ID 1
	//$(document).ready(function() {
		//drop down for the second individual
	$("#combo-box2").css('position', 'absolute');
	//$("#combo-box2").css('top',  100+(malesArray[0].drawY + 1.32*malesArray[0].height)); //or wherever you want it
	$("#combo-box2").css('top',  100-20+(malesArray[0].drawY + 1.32*malesArray[0].height)); //or wherever you want it
	$("#combo-box2").css('left', 800+ 0.98*(malesArray[0].drawX +malesArray[0].width-malesArray[0].width/20 +10)); //or wherever you want it
	$("#combo-box2").css('z-index', 2); //or wherever you want it
	//dropdown menu for id #1
	$("#combo-box1").html("  &#x25BC;");
	//test box for ID 1
	//$(document).ready(function() {
	$("#combo-box1").css('position', 'absolute');
	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#combo-box1").css('top',  100 - 20+(femaleArray[0].drawY + 1.32*femaleArray[0].height)); //or wherever you want it
	$("#combo-box1").css('left', 800+ 0.98*(femaleArray[0].drawX +femaleArray[0].width-femaleArray[0].width/20 +10)); //or wherever you want it
	$("#combo-box1").css('z-index', 2); //or wherever you want it
	
	$("#combo-box4").html("  &#x25BC;");
	$("#combo-box4").css('position', 'absolute');
	$("#combo-box4").css('top',  100-20+(malesArray[1].drawY + 1.32*malesArray[1].height)); //or wherever you want it
	$("#combo-box4").css('left', 800+ 0.96*(malesArray[1].drawX +malesArray[1].width-malesArray[1].width/20 +10)); //or wherever you want it
	$("#combo-box4").css('z-index', 2); //or wherever you want it
	
	$("#combo-box3").html("  &#x25BC;");
	$("#combo-box3").css('position', 'absolute');
	$("#combo-box3").css('top',  100 - 20+(femaleArray[1].drawY + 1.32*femaleArray[1].height)); //or wherever you want it
	$("#combo-box3").css('left', 800+ 0.98*(femaleArray[1].drawX +femaleArray[1].width-femaleArray[1].width/20 +10)); //or wherever you want it
	$("#combo-box3").css('z-index', 2); //or wherever you want it
	
	$("#combo-box6").html("  &#x25BC;");
	$("#combo-box6").css('position', 'absolute');
	$("#combo-box6").css('top',  100-20+(malesArray[2].drawY + 1.32*malesArray[2].height)); //or wherever you want it
	$("#combo-box6").css('left', 800+ 0.98*(malesArray[2].drawX +malesArray[2].width-malesArray[2].width/20 +10)); //or wherever you want it
	$("#combo-box6").css('z-index', 2); //or wherever you want it
	
	$("#combo-box5").html("  &#x25BC;");
	$("#combo-box5").css('position', 'absolute');
	$("#combo-box5").css('top',  100 - 20+(femaleArray[2].drawY + 1.32*femaleArray[2].height)); //or wherever you want it
	$("#combo-box5").css('left', 800+ 0.98*(femaleArray[2].drawX +femaleArray[2].width-femaleArray[2].width/20 +10)); //or wherever you want it
	$("#combo-box5").css('z-index', 2); //or wherever you want it
	
	$("#combo-box7").html("  &#x25BC;");
	$("#combo-box7").css('position', 'absolute');
	$("#combo-box7").css('top',  100 - 20+(malesArray[3].drawY + 1.32*malesArray[3].height)); //or wherever you want it
	$("#combo-box7").css('left', 800+ 0.94*(malesArray[3].drawX +malesArray[3].width-malesArray[3].width/20 +10)); //or wherever you want it
	$("#combo-box7").css('z-index', 2); //or wherever you want it
	
	$("#combo-box8").html("  &#x25BC;");
	$("#combo-box8").css('position', 'absolute');
	$("#combo-box8").css('top',  100 - 20+(malesArray[4].drawY + 1.32*malesArray[4].height)); //or wherever you want it
	$("#combo-box8").css('left', 800+ 0.98*(malesArray[4].drawX +malesArray[4].width-malesArray[4].width/20 +10)); //or wherever you want it
	$("#combo-box8").css('z-index', 2); //or wherever you want it
	
	$("#combo-box9").html("  &#x25BC;");
	$("#combo-box9").css('position', 'absolute');
	$("#combo-box9").css('top',  100 - 20+(malesArray[5].drawY + 1.32*malesArray[5].height)); //or wherever you want it
	$("#combo-box9").css('left', 800+ 0.98*(malesArray[5].drawX +malesArray[5].width-malesArray[5].width/20 +10)); //or wherever you want it
	$("#combo-box9").css('z-index', 2); //or wherever you want it
	
	
	$("#combo-box10").html("  &#x25BC;");
	$("#combo-box10").css('position', 'absolute');
	$("#combo-box10").css('top',  100 - 20+(femaleArray[3].drawY + 1.32*femaleArray[3].height)); //or wherever you want it
	$("#combo-box10").css('left', 800+ 0.98*(femaleArray[3].drawX +femaleArray[3].width-femaleArray[3].width/20 +10)); //or wherever you want it
	$("#combo-box10").css('z-index', 2); //or wherever you want it

updateDropdownMenuTwo();
updateDropdownMenuOne();
updateDropdownMenuThree();
updateDropdownMenuFour();
updateDropdownMenuFive();
updateDropdownMenuSix();
updateDropdownMenuSeven();
updateDropdownMenuEight();
updateDropdownMenuNine();
updateDropdownMenuTen();
}

//malesArray[0].drawX +malesArray[0].width-malesArray[0].width/20 +10, malesArray[0].drawY + 1.32*malesArray[0].height



function Connection2(startX, startY, stopX, stopY) {

    this.startX = startX;
    this.startY = startY;
	this.stopX = stopX;
	this.stopY = stopY;
}


Connection2.prototype.draw = function () {
    canvasCompletePedigreeDraw.fillStyle = "black";
	canvasCompletePedigreeDraw.beginPath();
	//canvasCompletePedigreeDraw.lineWidth = 1;
    //canvasCompletePedigreeDraw.strokeStyle = '#003300';
	canvasCompletePedigreeDraw.moveTo(this.startX,this.startY);
	canvasCompletePedigreeDraw.lineTo(this.stopX, this.stopY);
	canvasCompletePedigreeDraw.stroke();
    canvasCompletePedigreeDraw.closePath();
	canvasCompletePedigreeDraw.fill();
}


function drawConnection2() {
    for (var i = 0; i < arrayConnections.length; i++) {
        arrayConnections[i].draw();
		

    }
}



var arrayRelationship = [];
function Relationship2(id, momid, dadid, gender, x, y) {
	this.id =id;
	this.momid = momid;
	this.dadid = dadid;
	this.gender = gender;
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/4.1;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/3.5;
	this.x_file = x;
	this.y_file = y;
	this.width = 79;
    this.height = 79;
	this.end_x = this.drawX + this.width;
	this.end_y = (this.drawY + this.height)/2;
	this.begining_x = this.drawX;
	//if male
	if (this.gender == 0){
		//vertical connection
	this.begining_y_middle_vertical = (this.drawY + this.height)/2;
	this.begining_x_middle_vertical = this.drawX+(this.width)/2.1;
	this.begining_y_middle_horizonal = (this.drawY) + (this.height)/2;
	this.begining_x_middle_horizontal = this.drawX+this.width;
	}
	//if female
	else if (this.gender == 1){
		//vertical connection
	this.begining_y_middle_vertical = (this.drawY + this.height)/2;
	this.begining_x_middle_vertical = this.drawX+7+(this.width)/2.1;
	this.begining_y_middle_horizonal = (this.drawY) + (this.height)/2;
	this.begining_x_middle_horizontal = this.drawX+7+(this.width)/2.1;
	}
}

//arrayConnections.push(new Connection2(gen1Center, gridY, gen1Center, gridY * 2 - headY));
/*
function checkRelationships(){
		for (var i = 0; i < arrayRelationship.length-1; i++) {
			for (var m = 0; m < arrayRelationship.length-1; m++) {
			if ((arrayRelationship[i].momid == arrayRelationship[m].momid) && (arrayRelationship[i].momid != 0) && (arrayRelationship[i].y_file == arrayRelationship[m].y_file)){
				arrayConnections.push(new Connection2(arrayRelationship[i].begining_x_middle, arrayRelationship[i].drawY, arrayRelationship[i].begining_x_middle, (arrayRelationship[i].drawY -20)));

			}
			
			}

		
}
	
}

*/
//connections will be hardcoded, need to come up with a way to automatically draw connections
var arrayConnections = [];
var SEPARATION = 86;
//famid id momid dadid affection age proband female genotype x y textMaleGene1 textMaleDash textMaleGene2 textMaleGene1Color textMaleGene2Color textMaleIdentifier maleFillColor
function addConnection(){
		//draw relationship between spouses
		var gridX = SEPARATION;
		var gridY = SEPARATION*1.5;
		var headY = SEPARATION/2;

		//var gen1 = this.children.length;
		//var gen2 = this.grandchildren.length;

		var gen1Center = Math.floor(0.45 * canvasCompletePedigreeDrawWidth);

		// draw father/mother pairing T
		//canvasCompletePedigreeDraw.drawLine(gen1Center - gridX / 2, gridY, gen1Center + gridX / 2, gridY, 1);
		//canvasCompletePedigreeDraw.drawLine(gen1Center, gridY, gen1Center, gridY * 2 - headY, 1);

		//draw horizontal part of connection spouses
		arrayConnections.push(new Connection2(arrayRelationship[1].begining_x_middle_horizontal, arrayRelationship[1].begining_y_middle_horizonal, arrayRelationship[1].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[1].begining_y_middle_horizonal)));
		arrayConnections.push(new Connection2(arrayRelationship[3].begining_x_middle_horizontal, arrayRelationship[3].begining_y_middle_horizonal, arrayRelationship[3].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[3].begining_y_middle_horizonal)));
		arrayConnections.push(new Connection2(arrayRelationship[5].begining_x_middle_horizontal, arrayRelationship[5].begining_y_middle_horizonal, arrayRelationship[5].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[5].begining_y_middle_horizonal)));
		
		//draw vertical part of connection spouses
		arrayConnections.push(new Connection2((arrayRelationship[1].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[1].begining_y_middle_horizonal, (arrayRelationship[1].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[4].drawY -30)));
		arrayConnections.push(new Connection2((arrayRelationship[3].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[3].begining_y_middle_horizonal, (arrayRelationship[3].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[8].drawY));
		arrayConnections.push(new Connection2((arrayRelationship[5].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[5].begining_y_middle_horizonal, (arrayRelationship[5].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[7].drawY));
		 //draw vertical part of connection for siblings
		 arrayConnections.push(new Connection2(arrayRelationship[2].begining_x_middle_vertical, arrayRelationship[2].drawY, arrayRelationship[2].begining_x_middle_vertical, (arrayRelationship[2].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[4].begining_x_middle_vertical, arrayRelationship[4].drawY, arrayRelationship[4].begining_x_middle_vertical, (arrayRelationship[4].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[6].begining_x_middle_vertical, arrayRelationship[6].drawY, arrayRelationship[6].begining_x_middle_vertical, (arrayRelationship[6].drawY -30)));
		 //arrayConnections.push(new Connection2(arrayRelationship[8].begining_x_middle_vertical, arrayRelationship[8].drawY, arrayRelationship[8].begining_x_middle_vertical, (arrayRelationship[8].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[9].begining_x_middle_vertical, arrayRelationship[9].drawY, arrayRelationship[9].begining_x_middle_vertical, (arrayRelationship[9].drawY -30)));
		 //draw horizontal connections for siblings
		 arrayConnections.push(new Connection2(arrayRelationship[6].begining_x_middle_vertical, arrayRelationship[9].drawY -30, arrayRelationship[9].begining_x_middle_vertical, (arrayRelationship[9].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[2].begining_x_middle_vertical, arrayRelationship[4].drawY -30, arrayRelationship[4].begining_x_middle_vertical, (arrayRelationship[4].drawY -30)));

	
	
}



