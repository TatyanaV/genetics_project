
var CANVAS_TOP_POSITION = 120;
var CANVAS_LEFT_POSITION = 100;
var DROP_DOWN_TOP_POSITION_ADJUSTMENT = 0.8;
var DROP_DOWN_LEFT_POSITION_ADJUSTMENT = 0.742;
var MAX_INDIVIDUALS_X = 6.1;
var NUMBER_GENERATION = 4.5;
var 

	canvasCompletePedigree = document.getElementById("completePedigree"),
	elemLeft = canvasCompletePedigree.offsetLeft,
    elemTop = canvasCompletePedigree.offsetTop,
    canvasCompletePedigreeDraw = canvasCompletePedigree.getContext("2d"),
	canvasCompletePedigreeLegend = document.getElementById("completePedigreeLegend"),
    canvasCompletePedigreeDrawLegend = canvasCompletePedigreeLegend.getContext("2d"),
	
	canvasCompletePedigreeLegend2 = document.getElementById("completePedigreeLegend2"),
    canvasCompletePedigreeDrawLegend2 = canvasCompletePedigreeLegend2.getContext("2d"),
	

	females = [],
	males = [],
	numberOfMAles = 0,
imgSprite = new Image();
imgSprite.src = "images/sprite1.png";
imgSprite.addEventListener("load", init, true);

var canvasCompletePedigreeDrawWidth;
var canvasCompletePedigreeDrawHeight;

//var canvasCompletePedigreeDrawWidth = 700 -35;
//var canvasCompletePedigreeDrawHeight = 600-25;

var canvasCompletePedigreeDrawLegendWidth = canvasCompletePedigreeLegend.width;
var canvasCompletePedigreeDrawLegendHeight = canvasCompletePedigreeLegend.height-8;
var canvasCompletePedigreeDrawLegendWidth2 = canvasCompletePedigreeLegend2.width;
var canvasCompletePedigreeDrawLegendHeight2 = canvasCompletePedigreeLegend2.height-8;


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
function Legend2(){	

	canvasCompletePedigreeDrawLegend2.fillStyle = 'pink';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.rect(10, 10, 40, 40);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
	canvasCompletePedigreeDrawLegend2.fill();

	canvasCompletePedigreeDrawLegend2.fillStyle = 'pink';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.arc(100, 30, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
    canvasCompletePedigreeDrawLegend2.fill();
	
	
    canvasCompletePedigreeDrawLegend2.fill();
	canvasCompletePedigreeDrawLegend2.fillStyle = "black";
	canvasCompletePedigreeDrawLegend2.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('Disease Present. Imputed Positive Genotype.', 160 +canvasCompletePedigreeDrawLegendWidth/4.1, canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend2.fillStyle = 'lavender';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.rect(10, 10+ canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
	canvasCompletePedigreeDrawLegend2.fill();
	
	canvasCompletePedigreeDrawLegend2.fillStyle = 'lavender';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.arc(100, 30 + canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
    canvasCompletePedigreeDrawLegend2.fill();
	
    canvasCompletePedigreeDrawLegend2.fill();
	canvasCompletePedigreeDrawLegend2.fillStyle = "black";
	canvasCompletePedigreeDrawLegend2.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('No Disease. Imputed Positive Genotype.', 145 +canvasCompletePedigreeDrawLegendWidth/4.1, 2*canvasCompletePedigreeDrawLegendHeight/6);
	

	canvasCompletePedigreeDrawLegend2.fillStyle = 'red';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.rect(10, 10+ 2*canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
	canvasCompletePedigreeDrawLegend2.fill();
	
	canvasCompletePedigreeDrawLegend2.fillStyle = 'red';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.arc(100, 30 + 2*canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
    canvasCompletePedigreeDrawLegend2.fill();
	
    canvasCompletePedigreeDrawLegend2.fill();
	canvasCompletePedigreeDrawLegend2.fillStyle = "black";
	canvasCompletePedigreeDrawLegend2.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('Disease Present. Tested Positive Genotype.',160 +canvasCompletePedigreeDrawLegendWidth/4.1, 3*canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend2.fillStyle = 'purple';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.rect(10, 10+ 3*canvasCompletePedigreeDrawLegendHeight/5, 40, 40);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
	canvasCompletePedigreeDrawLegend2.fill();
	
	canvasCompletePedigreeDrawLegend2.fillStyle = 'purple';
	canvasCompletePedigreeDrawLegend2.beginPath();
    canvasCompletePedigreeDrawLegend2.arc(100, 30 + 3*canvasCompletePedigreeDrawLegendHeight/5.2, 20.5, 0, Math.PI * 2, false);
	canvasCompletePedigreeDrawLegend2.lineWidth = 4;
    canvasCompletePedigreeDrawLegend2.strokeStyle = '#003300';
    canvasCompletePedigreeDrawLegend2.stroke();
	canvasCompletePedigreeDrawLegend2.closePath();
    canvasCompletePedigreeDrawLegend2.fill();
	
    canvasCompletePedigreeDrawLegend2.fill();
	canvasCompletePedigreeDrawLegend2.fillStyle = "black";
	canvasCompletePedigreeDrawLegend2.font = "12pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('No Disease. Tested Positive Genotype.',145 +canvasCompletePedigreeDrawLegendWidth/4.1, 4*canvasCompletePedigreeDrawLegendHeight/6);
	
	canvasCompletePedigreeDrawLegend2.font = "13pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('MALE',29, 4.8*canvasCompletePedigreeDrawLegendHeight/5.2);
	
	canvasCompletePedigreeDrawLegend2.font = "13pt Arial, sans-serif";
	canvasCompletePedigreeDrawLegend2.textAlign = "center";
	canvasCompletePedigreeDrawLegend2.textBaseline = "middle";
	canvasCompletePedigreeDrawLegend2.fillText('FEMALE',109, 4.8*canvasCompletePedigreeDrawLegendHeight/5.2);
	
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
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/MAX_INDIVIDUALS_X;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/NUMBER_GENERATION;
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
	canvasCompletePedigreeDraw.fillText(this.id, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	//canvasCompletePedigreeDraw.fillText(this.textMaleIdentifier, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	

	
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
	//$('#completePedigree').css('height', 1000); //or wherever you want it		
	//$('#completePedigree').height('600px');
	
	canvasCompletePedigreeDrawWidth = canvasCompletePedigree.width -35;
 canvasCompletePedigreeDrawHeight = canvasCompletePedigree.height-25;
//femaleArray.push(new Females2(1,10,3,4,2,50,0,1,2,2,3,'?','/','?','black','black','10','white'));
femaleArray.push(new Females2(1,1,1,1,1,55.965,0,1,1,3,1,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(1,1,1,1,3,1));
malesArray.push(new Males2(1,2,1,1,1,59.816,0,0,0,2,1,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(2,1,1,0,2,1));
malesArray.push(new Males2(1,3,1,2,2,71,1,0,1,1.5,2,'+','/','-','red','blue','10','red'));
arrayRelationship.push(new Relationship2(3,1,2,0,1.5,2));
malesArray.push(new Males2(1,4,1,2,2,66,0,0,0,3.5,2,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(4,1,2,0,3.5,2));
femaleArray.push(new Females2(1,5,1,1,2,69,0,1,0,2.5,2,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(5,1,1,1,2.5,2));
femaleArray.push(new Females2(1,6,1,1,2,63,0,1,0,4.5,2,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(6,1,1,1,4.5,2));
malesArray.push(new Males2(1,7,5,3,3,50,0,0,1,0,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(7,5,3,0,0,3));
femaleArray.push(new Females2(1,8,5,3,3,45,0,1,0,3,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(8,5,3,1,3,3));
femaleArray.push(new Females2(1,9,6,4,3,31,0,1,0,4,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(9,6,4,1,4,3));
femaleArray.push(new Females2(1,10,6,4,3,37,0,1,0,5,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(10,6,4,1,5,3));
femaleArray.push(new Females2(1,11,1,1,3,47,0,1,0,1,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(11,1,1,1,1,3));
malesArray.push(new Males2(1,12,1,1,3,52,0,0,0,2,3,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(12,1,1,0,2,3));
femaleArray.push(new Females2(1,13,11,7,4,27,0,1,0,0,4,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(13,11,7,1,0,4));
femaleArray.push(new Females2(1,14,11,7,4,14,0,1,1,1,4,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(14,11,7,1,1,4));
femaleArray.push(new Females2(1,15,8,12,4,18,0,1,0,2,4,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(15,8,12,1,2,4));
malesArray.push(new Males2(1,16,8,12,4,14,0,0,0,3,4,'?','/','?','black','black','10','white'));
arrayRelationship.push(new Relationship2(16,8,12,0,3,4));



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
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/MAX_INDIVIDUALS_X;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/NUMBER_GENERATION;
	this.drawX_cirlce = (x+0.1)*canvasCompletePedigreeDrawWidth/MAX_INDIVIDUALS_X +45;
	this.drawY_circle = (y-0.1)*canvasCompletePedigreeDrawHeight/NUMBER_GENERATION +42;
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
	canvasCompletePedigreeDraw.fillText(this.id, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	//canvasCompletePedigreeDraw.fillText(this.textFemaleIdentifier, this.drawX +this.width/3.8, this.drawY + 1.3*this.height);
	

	
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




var CANVAS_TOP_POSITION_ARROW = CANVAS_TOP_POSITION+30;

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

function updateDropdownMenuTwo() {

		$('#trait-list2').append("<li id = '1'><a href='#' onclick='testOptionTwo(0)'>Test </a></li>");	
		$('#trait-list2').append("<li id = '2'><a href='#' onclick='testOptionTwo(1)'> some other option </a></li>");
		$('#trait-list2 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}



//malesArray.push(new Males2(1,2,0,0,1,50,0,0,2,2,1,'?','/','?','black','black','2','white'));
//function Males2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textMaleGene1,textMaleDash,textMaleGene2,textMaleGene1Color,textMaleGene2Color,textMaleIdentifier, maleFillColor ) {
	
//function Females2(famid, id, momid, dadid, affection, age, proband, female, genotype, x, y, textFemaleGene1,textFemaleDash,textFemaleGene2,textFemaleGene1Color,textFemaleGene2Color,textFemaleIdentifier, femaleFillColor )
var individual_tested =0;
var individual_tested_html;
//Female is the second one
//test female- green
//male is lavender impused +
function testOptionTwo(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[0].maleFillColor = 'lavender';
		malesArray[0].textMaleGene1 = '+';
		malesArray[0].textMaleGene2 = '-';
		malesArray[0].textMaleGene1Color = 'red';
		malesArray[0].textMaleGene2Color = 'blue';
		femaleArray[0].femaleFillColor = 'green';
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
		$( "#info-label1" ).text( " Patient # 2 test result is Negative.       " + "Patient # 1 imputed genotype is POS.             " +  "Click on the triangle for details" );		
		$('#one_1').remove();
		$('#one_2').remove();		
		$('#trait-list1').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list1').append("<li id = '2'>based on the test of individual #2</li>");
		$("#trait-list1").append('<br>'+ " *** Imputed genotype of individual # 1 is Pos for mutation");
		$("#trait-list1").append('<br>'+ " *** Individual # 1 does not have a disease");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		//$("#info-label3").html("Click on the blue triangle in small box to test someone." );
		//$("#info-label4").html("Click on the blue triangle in small box to test someone." );
		
	}
}


function updateDropdownMenuOne() {

		$('#trait-list1').append("<li id = 'one_1'><a href='#' onclick='testOptionOne(0)'>Test </a></li>");
		$('#trait-list1').append("<li id = 'one_2'><a href='#' onclick='testOptionOne(1)'> some other option </a></li>");
		//$("#trait-list1").css('top',  CANVAS_TOP_POSITION+30-20+(malesArray[0].drawY + 1.32*malesArray[0].height)); //or wherever you want it
		//$("#trait-list1").css('left', CANVAS_LEFT_POSITION+ malesArray[0].drawX +malesArray[0].width); //or wherever you want it
		//$("#trait-list1").css('z-index', 2); //or wherever you want it
		$('#trait-list1 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionOne(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[0].maleFillColor = 'purple';
		malesArray[0].textMaleGene1 = '+';
		malesArray[0].textMaleGene2 = '-';
		malesArray[0].textMaleGene1Color = 'red';
		malesArray[0].textMaleGene2Color = 'blue';
		femaleArray[0].femaleFillColor = 'yellow';
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
		$('#trait-list1').append("<li id = 'one_1'>Patient #1 result is POS</li>");	
		$('#trait-list1').append("<li id = 'one_2'>Patient is POS for mutation</li>");
		$( "#info-label1" ).text( " Patient # 1 test result is Positive.       " + "Patient # 2 imputed genotype is Neg.             "  );	
		$("#info-label1").append('<br>'+ " ***Click on the triangle for details");		
		$('#one_1').remove();
		$('#one_2').remove();		
		$('#trait-list2').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list2').append("<li id = '2'>based on the test of individual #1</li>");
	
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}


function updateDropdownMenuThree() {

		$('#trait-list3').append("<li id = 'three_1'><a href='#' onclick='testOptionThree(0)'>Test </a></li>");
		$('#trait-list3').append("<li id = 'three_2'><a href='#' onclick='testOptionThree(1)'> some other option </a></li>");
		$('#trait-list3 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

//female
function testOptionThree(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[1].maleFillColor = 'yellow';
		malesArray[1].textMaleGene1 = '-';
		malesArray[1].textMaleGene2 = '-';
		malesArray[1].textMaleGene1Color = 'blue';
		malesArray[1].textMaleGene2Color = 'blue';
		femaleArray[1].femaleFillColor = 'purple';
		femaleArray[1].textFemaleGene1 = '+';
		femaleArray[1].textFemaleGene2 = '-';
		femaleArray[1].textFemaleGene1Color = 'red';
		femaleArray[1].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#three_1').remove();
		$('#three_2').remove();
		$('#trait-list3').append("<li id = '1'>This patient has been tested</li>");	
		$('#trait-list3').append("<li id = '2'>Patient is Positive for mutation</li>");
		$( "#info-label1" ).text( " Patient # 3 test result is Positive.       " + "Patient # 4 imputed genotype is Neg.             "  );	
		$("#info-label1").append('<br>'+ " ***Click on the triangle for details");	
		$('#four_1').remove();
		$('#four_2').remove();		
		$('#trait-list4').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list4').append("<li id = '2'>based on the test of individual #3</li>");
		$("#trait-list4").append('<br>'+ " *** Imputed genotype of individual # 4 is NEG for mutation");
		$("#trait-list4").append('<br>'+ " *** Individual # 4 does not have a disease");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		//$("#info-label3").html("Click on the blue triangle in small box to test someone." );
		//$("#info-label4").html("Click on the blue triangle in small box to test someone." );
		
	}
}
function updateDropdownMenuFour() {

		$('#trait-list4').append("<li id = 'four_1'><a href='#' onclick='testOptionFour(0)'>Test </a></li>");
		$('#trait-list4').append("<li id = 'four_2'><a href='#' onclick='testOptionFour(1)'> some other option </a></li>");
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
		femaleArray[1].femaleFillColor = 'lavender';
		femaleArray[1].textFemaleGene1 = '+';
		femaleArray[1].textFemaleGene2 = '-';
		femaleArray[1].textFemaleGene1Color = 'red';
		femaleArray[1].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#three_1').remove();
		$('#three_2').remove();
		$('#trait-list4').append("<li id = '1'>This patient has been tested</li>");	
		$('#trait-list4').append("<li id = '2'>Patient is Neg for mutation</li>");
		$( "#info-label1" ).text( " Patient # 4 test result is Neg.       " + "Patient # 3 imputed genotype is Pos.             "  );	
		$("#info-label1").append('<br>'+ " ***Click on the triangle for details");	
		$('#four_1').remove();
		$('#four_2').remove();		
		$('#trait-list3').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list3').append("<li id = '2'>based on the test of individual #4</li>");
		$("#trait-list3").append('<br>'+ " *** Imputed genotype of individual # 3 is POS for mutation");
		$("#trait-list3").append('<br>'+ " *** Individual # 3 does not have a disease");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		//$("#info-label3").html("Click on the blue triangle in small box to test someone." );
		//$("#info-label4").html("Click on the blue triangle in small box to test someone." );
		
	}
}

function updateDropdownMenuFive() {

		$('#trait-list5').append("<li id = 'five_1'><a href='#' onclick='testOptionFive(0)'>Test </a></li>");
		$('#trait-list5').append("<li id = 'five_2'><a href='#' onclick='testOptionFive(1)'> some other option </a></li>");
		$('#trait-list5 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

//female
function testOptionFive(selectedTraitIndex) {
	if (selectedTraitIndex == 0) {
		malesArray[2].maleFillColor = 'lavender';
		malesArray[2].textMaleGene1 = '+';
		malesArray[2].textMaleGene2 = '-';
		malesArray[2].textMaleGene1Color = 'red';
		malesArray[2].textMaleGene2Color = 'blue';
		femaleArray[2].femaleFillColor = 'green';
		femaleArray[2].textFemaleGene1 = '-';
		femaleArray[2].textFemaleGene2 = '-';
		femaleArray[2].textFemaleGene1Color = 'blue';
		femaleArray[2].textFemaleGene2Color = 'blue';
		
		femaleArray[3].femaleFillColor = 'pink';
		femaleArray[3].textFemaleGene1 = '+';
		femaleArray[3].textFemaleGene2 = '-';
		femaleArray[3].textFemaleGene1Color = 'red';
		femaleArray[3].textFemaleGene2Color = 'blue';
		
		femaleArray[4].femaleFillColor = 'pink';
		femaleArray[4].textFemaleGene1 = '+';
		femaleArray[4].textFemaleGene2 = '-';
		femaleArray[4].textFemaleGene1Color = 'red';
		femaleArray[4].textFemaleGene2Color = 'blue';
		canvasCompletePedigreeDraw.clear();		
		drawAllMales2();
		drawAllFemales2();
		addConnection();
		drawConnection2();
		$('#five_1').remove();
		$('#five_2').remove();
		$('#trait-list5').append("<li id = '1'>This patient has been tested</li>");	
		$('#trait-list5').append("<li id = '2'>Patient is Positive for mutation</li>");
		$( "#info-label1" ).text( " next text" );	
		$("#info-label1").append('<br>'+ " ***Click on the triangle for details");	
		$('#six_1').remove();
		$('#six_2').remove();	
		$('#seven_1').remove();
		$('#seven_2').remove();		
		$('#eight_1').remove();
		$('#eight_2').remove();			
		$('#trait-list6').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list6').append("<li id = '2'>based on the test of individual #5</li>");
		$("#trait-list6").append('<br>'+ " *** Imputed genotype of individual # 6 is POS for mutation");
		$("#trait-list6").append('<br>'+ " *** Individual # 6 does not have a disease");
		$('#trait-list7').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list7').append("<li id = '2'>based on the test of individual #5</li>");
		$("#trait-list7").append('<br>'+ " *** Imputed genotype of individual # 7 is POS for mutation");
		$("#trait-list7").append('<br>'+ " *** Individual # 7 has a disease");
		$('#trait-list8').append("<li id = '1'>Genotype of this individual was imputed</li>");	
		$('#trait-list8').append("<li id = '2'>based on the test of individual #5</li>");
		$("#trait-list8").append('<br>'+ " *** Imputed genotype of individual # 8 is POS for mutation");
		$("#trait-list8").append('<br>'+ " *** Individual # 8 has a disease");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		//$("#info-label3").html("Click on the blue triangle in small box to test someone." );
		//$("#info-label4").html("Click on the blue triangle in small box to test someone." );
		
	}
}


function updateDropdownMenuSix() {

		$('#trait-list6').append("<li id = 'six_1'><a href='#' onclick='testOptionSix(0)'>Test </a></li>");
		$('#trait-list6').append("<li id = 'six_2'><a href='#' onclick='testOptionSix(1)'> some other option </a></li>");
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
		$("#info-label1").append('<br>'+ "***  We know that patient 5 has a disease" );
		$("#info-label1").append('<br>'+ " *** Patient # 5 results were imputed from testing #6");
		$("#info-label1").append('<br>'+ "***  Patient # 5 is negative for mutation" );
		$('#six_1').remove();
		$('#six_2').remove();		
		$('#trait-list6').append("<li id = 'six_1'>Patient #6 was tested</li>");	
		$('#trait-list6').append("<li id = 'six_2'>Patient #6 is negative for mutation</li>");
		$('#trait-list6').append("<li id = 'six_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Patient # 6 was tested and is Neg for mutation");
		$("#info-label1").append('<br>'+ " *** Individual # 6 does not have a disease");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
function updateDropdownMenuSeven() {

		$('#trait-list7').append("<li id = 'seven_1'><a href='#' onclick='testOptionSeven(0)'>Test </a></li>");
		$('#trait-list7').append("<li id = 'seven_2'><a href='#' onclick='testOptionSeven(1)'> some other option </a></li>");
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuEight() {
		$('#trait-list8').append("<li id = 'eight_1'><a href='#' onclick='testOptionEight(0)'>Test </a></li>");
		$('#trait-list8').append("<li id = 'eight_2'><a href='#' onclick='testOptionEight(1)'> some other option </a></li>");
		$('#trait-list8 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
	

}
function testOptionEight(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ "***  Patient # 9 is negative for mutation" );
		$('#trait-list10').append("<li id = 'ten_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list10').append("<li id = 'ten_2'>based on the test of individual #9</li>");
		$('#trait-list10').append("<li id = 'ten_3'>We know that this individual  have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 10 is Neg for mutation");
		$('#trait-list7').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list7').append("<li id = 'seven_2'>based on the test of individual #9</li>");
		$('#trait-list7').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 7 is Neg for mutation");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
function updateDropdownMenuNine() {

		$('#trait-list9').append("<li id = 'nine_1'><a href='#' onclick='testOptionNine(0)'>Test </a></li>");
		$('#trait-list9').append("<li id = 'nine_2'><a href='#' onclick='testOptionNine(1)'> some other option </a></li>");
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
		$("#info-label1").append('<br>'+ "***  Patient # 9 is negative for mutation" );
		$('#trait-list10').append("<li id = 'ten_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list10').append("<li id = 'ten_2'>based on the test of individual #9</li>");
		$('#trait-list10').append("<li id = 'ten_3'>We know that this individual  have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 10 is Neg for mutation");
		$('#trait-list7').append("<li id = 'seven_1'>Genotype of this individual was imputed</li>");	
		$('#trait-list7').append("<li id = 'seven_2'>based on the test of individual #9</li>");
		$('#trait-list7').append("<li id = 'seven_3'>We know that this individual does not have a disease</li>");
		$("#info-label1").append('<br>'+ " *** Imputed genotype of individual # 7 is Neg for mutation");
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
function updateDropdownMenuTen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTen(1)'> some other option </a></li>");
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}
//////////////////////////////////
function updateDropdownMenuEleven() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionEleven(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionEleven(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionEleven(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwelve() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwelve(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwelve(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwelve(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuThirteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionThirteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionThirteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionThirteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuFourteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionFourteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionFourteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionFourteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuFifteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionFifteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionFifteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionFifteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuSixteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionSixteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionSixteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionSixteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuSeventeen() {
		$('#trait-list17').append("<li><a href='#' '>This patient was tested already</a></li>");
		$('#trait-list17').append('<li><a href="#" "> The patient has a disease </a></li>');		
		$('#trait-list17').append('<li><a href="#" "> The patient has a mutation </a></li>');
		$('#trait-list17 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}



function updateDropdownMenuEighteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionEighteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionEighteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionEighteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuNineteen() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionNineteen(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionNineteen(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionNineteen(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwenty() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwenty(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwenty(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwenty(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyOne() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyOne(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyOne(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyOne(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyTwo() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyTwo(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyTwo(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyTwo(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyThee() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyThee(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyThee(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyThee(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyFour() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyFour(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyFour(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyFour(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyFive() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyFive(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyFive(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyFive(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentySix() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentySix(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentySix(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentySix(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentySeven() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentySeven(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentySeven(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentySeven(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyEight() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyEight(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyEight(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyEight(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuTwentyNine() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionTwentyNine(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionTwentyNine(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionTwentyNine(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuThirty() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionThirty(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionThirty(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionThirty(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}

function updateDropdownMenuThirtyOne() {
		$('#trait-list10').append("<li id = 'ten_1'><a href='#' onclick='testOptionThirtyOne(0)'>Test </a></li>");
		$('#trait-list10').append("<li id = 'ten_2'><a href='#' onclick='testOptionThirtyOne(1)'> some other option </a></li>");
		$('#trait-list10 li').on('click', function(){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
}

function testOptionThirtyOne(selectedTraitIndex) {
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
		$("#info-label1").append('<br>'+ " *****************************");
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
		individual_tested = individual_tested +1;
		document.getElementById("individuals_tested").innerHTML = individual_tested;
		
	}
}





var canvas = $('#completePedigree');

// calculate position of the canvas DOM element on the page

var canvasPosition = {
    x_canvas: canvas.offset().left,
    y_canvas: canvas.offset().top
};
function init() {
	initFamily();
	drawAllMales2();
	drawAllFemales2();
	addConnection();
	drawConnection2();
	Legend();
	Legend2();

		$("#info-label1").html("Click on the blue triangle in small box to test someone or see detailed result of the test" );
	$("#pedigree_message").html("You have a medically important genetic variant ");
	$("#combo-box1").html("  &#x25BC;");
	$("#combo-box1").css('position', 'absolute');
	$("#combo-box1").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[0].drawY + 1.32*femaleArray[0].height)); //or wherever you want it
	$("#combo-box1").css('left', CANVAS_LEFT_POSITION+ femaleArray[0].drawX +femaleArray[0].width); //or wherever you want it
	$("#combo-box1").css('z-index', 2); //or wherever you want it
	//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box5").html("  &#x25BC;");
	$("#combo-box5").css('position', 'absolute');
	$("#combo-box5").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[1].drawY + 1.32*femaleArray[1].height)); //or wherever you want it
	$("#combo-box5").css('left', CANVAS_LEFT_POSITION+ femaleArray[1].drawX +femaleArray[1].width); //or wherever you want it
	$("#combo-box5").css('z-index', 2); //or wherever you want it
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#combo-box6").html("  &#x25BC;");
	$("#combo-box6").css('position', 'absolute');
	$("#combo-box6").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[2].drawY + 1.32*femaleArray[2].height)); //or wherever you want it
	$("#combo-box6").css('left', CANVAS_LEFT_POSITION+ femaleArray[2].drawX +femaleArray[2].width); //or wherever you want it
	$("#combo-box6").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box8").html("  &#x25BC;");
	$("#combo-box8").css('position', 'absolute');
	$("#combo-box8").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[3].drawY + 1.32*femaleArray[3].height)); //or wherever you want it
	$("#combo-box8").css('left', CANVAS_LEFT_POSITION+ femaleArray[3].drawX +femaleArray[3].width); //or wherever you want it
	$("#combo-box8").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box9").html("  &#x25BC;");
	$("#combo-box9").css('position', 'absolute');
	$("#combo-box9").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[4].drawY + 1.32*femaleArray[4].height)); //or wherever you want it
	$("#combo-box9").css('left', CANVAS_LEFT_POSITION+ femaleArray[4].drawX +femaleArray[4].width); //or wherever you want it
	$("#combo-box9").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box10").html("  &#x25BC;");
	$("#combo-box10").css('position', 'absolute');
	$("#combo-box10").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[5].drawY + 1.32*femaleArray[5].height)); //or wherever you want it
	$("#combo-box10").css('left', CANVAS_LEFT_POSITION+ femaleArray[5].drawX +femaleArray[5].width); //or wherever you want it
	$("#combo-box10").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box11").html("  &#x25BC;");
	$("#combo-box11").css('position', 'absolute');
	$("#combo-box11").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[6].drawY + 1.32*femaleArray[6].height)); //or wherever you want it
	$("#combo-box11").css('left', CANVAS_LEFT_POSITION+ femaleArray[6].drawX +femaleArray[6].width); //or wherever you want it
	$("#combo-box11").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box13").html("  &#x25BC;");
	$("#combo-box13").css('position', 'absolute');
	$("#combo-box13").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[7].drawY + 1.32*femaleArray[7].height)); //or wherever you want it
	$("#combo-box13").css('left', CANVAS_LEFT_POSITION+ femaleArray[7].drawX +femaleArray[7].width); //or wherever you want it
	$("#combo-box13").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6
	$("#combo-box14").html("  &#x25BC;");
	$("#combo-box14").css('position', 'absolute');
	$("#combo-box14").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[8].drawY + 1.32*femaleArray[8].height)); //or wherever you want it
	$("#combo-box14").css('left', CANVAS_LEFT_POSITION+ femaleArray[8].drawX +femaleArray[8].width); //or wherever you want it
	$("#combo-box14").css('z-index', 2); //or wherever you want it
	

	

	//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box15").html("  &#x25BC;");
	$("#combo-box15").css('position', 'absolute');
	$("#combo-box15").css('top',  CANVAS_TOP_POSITION+30 - 20+(femaleArray[9].drawY + 1.32*femaleArray[9].height)); //or wherever you want it
	$("#combo-box15").css('left', CANVAS_LEFT_POSITION+ 0.98*(femaleArray[9].drawX +femaleArray[9].width-femaleArray[9].width/20 +12)); //or wherever you want it
	$("#combo-box15").css('z-index', 2); //or wherever you want it
		//arrowr for females


	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box2").html("  &#x25BC;");
	$("#combo-box2").css('position', 'absolute');
	$("#combo-box2").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[0].drawY + 1.32*malesArray[0].height)); //or wherever you want it
	$("#combo-box2").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[0].drawX +malesArray[0].width-malesArray[0].width/20 +8)); //or wherever you want it
	$("#combo-box2").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box3").html("  &#x25BC;");
	$("#combo-box3").css('position', 'absolute');
	$("#combo-box3").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[1].drawY + 1.32*malesArray[1].height)); //or wherever you want it
	$("#combo-box3").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[1].drawX +malesArray[1].width-malesArray[1].width/20 +13)); //or wherever you want it
	$("#combo-box3").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box4").html("  &#x25BC;");
	$("#combo-box4").css('position', 'absolute');
	$("#combo-box4").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[2].drawY + 1.32*malesArray[2].height)); //or wherever you want it
	$("#combo-box4").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[2].drawX +malesArray[2].width-malesArray[2].width/20 +25)); //or wherever you want it
	$("#combo-box4").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box7").html("  &#x25BC;");
	$("#combo-box7").css('position', 'absolute');
	$("#combo-box7").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[3].drawY + 1.32*malesArray[3].height)); //or wherever you want it
	$("#combo-box7").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[3].drawX +malesArray[3].width-malesArray[3].width/20 +10)); //or wherever you want it
	$("#combo-box7").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
		$("#combo-box12").html("  &#x25BC;");
	$("#combo-box12").css('position', 'absolute');
	$("#combo-box12").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[4].drawY + 1.32*malesArray[4].height)); //or wherever you want it
	$("#combo-box12").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[4].drawX +malesArray[4].width-malesArray[4].width/20 +10)); //or wherever you want it
	$("#combo-box12").css('z-index', 2); //or wherever you want it
		//arrowr for females
		$("#combo-box16").html("  &#x25BC;");
	$("#combo-box16").css('position', 'absolute');
	$("#combo-box16").css('top',  CANVAS_TOP_POSITION+30 - 20+(malesArray[5].drawY + 1.32*malesArray[5].height)); //or wherever you want it
	$("#combo-box16").css('left', CANVAS_LEFT_POSITION+ 0.98*(malesArray[5].drawX +malesArray[5].width-malesArray[5].width/20 +10)); //or wherever you want it
	$("#combo-box16").css('z-index', 2); //or wherever you want it
		//arrowr for females

	
	
	
	//////////////////////////
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
updateDropdownMenuEleven();
updateDropdownMenuTwelve();
updateDropdownMenuThirteen();
updateDropdownMenuFourteen();
updateDropdownMenuFifteen();
updateDropdownMenuSixteen();



	$("#trait-list1").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[0].drawY + 1.32*femaleArray[0].height)); //or wherever you want it
	$("#trait-list1").css('left', CANVAS_LEFT_POSITION+ femaleArray[0].drawX +femaleArray[0].width); //or wherever you want it
	$("#trait-list1").css('z-index', 2); //or wherever you want it
	//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list4").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[1].drawY + 1.32*femaleArray[1].height)); //or wherever you want it
	$("#trait-list4").css('left', CANVAS_LEFT_POSITION+ femaleArray[1].drawX +femaleArray[1].width); //or wherever you want it
	$("#trait-list4").css('z-index', 2); //or wherever you want it
		//4*canvasCompletePedigreeDrawLegendHeight/6


	$("#trait-list6").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[2].drawY + 1.32*femaleArray[2].height)); //or wherever you want it
	$("#trait-list6").css('left', CANVAS_LEFT_POSITION+ femaleArray[2].drawX +femaleArray[2].width); //or wherever you want it
	$("#trait-list6").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list10").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[3].drawY + 1.32*femaleArray[3].height)); //or wherever you want it
	$("#trait-list10").css('left', CANVAS_LEFT_POSITION+ femaleArray[3].drawX +femaleArray[3].width); //or wherever you want it
	$("#trait-list10").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list7").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[4].drawY + 1.32*femaleArray[4].height)); //or wherever you want it
	$("#trait-list7").css('left', CANVAS_LEFT_POSITION+ femaleArray[4].drawX +femaleArray[4].width); //or wherever you want it
	$("#trait-list7").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list8").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[5].drawY + 1.32*femaleArray[5].height)); //or wherever you want it
	$("#trait-list8").css('left', CANVAS_LEFT_POSITION+ femaleArray[5].drawX +femaleArray[5].width); //or wherever you want it
	$("#trait-list8").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list9").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[6].drawY + 1.32*femaleArray[6].height)); //or wherever you want it
	$("#trait-list9").css('left', CANVAS_LEFT_POSITION+ femaleArray[6].drawX +femaleArray[6].width); //or wherever you want it
	$("#trait-list9").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list10").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[7].drawY + 1.32*femaleArray[7].height)); //or wherever you want it
	$("#trait-list10").css('left', CANVAS_LEFT_POSITION+ femaleArray[7].drawX +femaleArray[7].width); //or wherever you want it
	$("#trait-list10").css('z-index', 2); //or wherever you want it
	
		//4*canvasCompletePedigreeDrawLegendHeight/6

	$("#trait-list13").css('top',  CANVAS_TOP_POSITION+30-20+(femaleArray[8].drawY + 1.32*femaleArray[8].height)); //or wherever you want it
	$("#trait-list13").css('left', CANVAS_LEFT_POSITION+ femaleArray[8].drawX +femaleArray[8].width); //or wherever you want it
	$("#trait-list13").css('z-index', 2); //or wherever you want it
	

	

	//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list14").css('top',  CANVAS_TOP_POSITION+30 - 20+(femaleArray[9].drawY + 1.32*femaleArray[9].height)); //or wherever you want it
	$("#trait-list14").css('left', CANVAS_LEFT_POSITION+ 0.98*(femaleArray[9].drawX +femaleArray[9].width-femaleArray[9].width/20 +12)); //or wherever you want it
	$("#trait-list14").css('z-index', 2); //or wherever you want it
		//arrowr for females

		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list2").css('top',  CANVAS_TOP_POSITION+30 - 20+(maleArray[0].drawY + 1.32*maleArray[0].height)); //or wherever you want it
	$("#trait-list2").css('left', CANVAS_LEFT_POSITION+ 0.98*(maleArray[0].drawX +maleArray[0].width-maleArray[0].width/20 +8)); //or wherever you want it
	$("#trait-list2").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list3").css('top',  CANVAS_TOP_POSITION+30 - 20+(maleArray[1].drawY + 1.32*maleArray[1].height)); //or wherever you want it
	$("#trait-list3").css('left', CANVAS_LEFT_POSITION+ 0.98*(maleArray[1].drawX +femaleArray[3].width-maleArray[1].width/20 +13)); //or wherever you want it
	$("#trait-list3").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list4").css('top',  CANVAS_TOP_POSITION+30 - 20+(maleArray[2].drawY + 1.32*maleArray[2].height)); //or wherever you want it
	$("#trait-list4").css('left', CANVAS_LEFT_POSITION+ 0.98*(maleArray[2].drawX +femaleArray[4].width-maleArray[2].width/20 +25)); //or wherever you want it
	$("#trait-list4").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list7").css('top',  CANVAS_TOP_POSITION+30 - 20+(maleArray[3].drawY + 1.32*maleArray[3].height)); //or wherever you want it
	$("#trait-list7").css('left', CANVAS_LEFT_POSITION+ 0.98*(maleArray[3].drawX +maleArray[3].width-maleArray[3].width/20 +10)); //or wherever you want it
	$("#trait-list7").css('z-index', 2); //or wherever you want it
		//arrowr for females

	//this.drawX +this.width-this.width/20 +10, this.drawY + 1.32*this.height
	$("#trait-list16").css('top',  CANVAS_TOP_POSITION+30 - 20+(maleArray[4].drawY + 1.32*maleArray[4].height)); //or wherever you want it
	$("#trait-list16").css('left', CANVAS_LEFT_POSITION+ 0.98*(maleArray[4].drawX +femaleArray[6].width-maleArray[4].width/20 +10)); //or wherever you want it
	$("#trait-list16").css('z-index', 2); //or wherever you want it
		//arrowr for females


	



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
	this.drawX = (x+0.1)*canvasCompletePedigreeDrawWidth/MAX_INDIVIDUALS_X;
	this.drawY = (y-0.1)*canvasCompletePedigreeDrawHeight/NUMBER_GENERATION;
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
	this.begining_y_middle_horizo1l = (this.drawY) + (this.height)/2;
	this.begining_x_middle_horizontal = this.drawX+this.width;
	}
	//if female
	else if (this.gender == 1){
		//vertical connection
	this.begining_y_middle_vertical = (this.drawY + this.height)/2;
	this.begining_x_middle_vertical = this.drawX+7+(this.width)/2.1;
	this.begining_y_middle_horizo1l = (this.drawY) + (this.height)/2;
	this.begining_x_middle_horizontal = this.drawX+7+(this.width)/2.1;
	}
}

var arrayConnections = [];
var SEPARATION = 79.5;
//famid id momid dadid affection age proband female genotype x y textMaleGene1 textMaleDash textMaleGene2 textMaleGene1Color textMaleGene2Color textMaleIdentifier maleFillColor
function addConnection(){


		//draw horizontal part of connection spouses
		arrayConnections.push(new Connection2(arrayRelationship[1].begining_x_middle_horizontal, arrayRelationship[1].begining_y_middle_horizo1l, arrayRelationship[1].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[1].begining_y_middle_horizo1l)));
		arrayConnections.push(new Connection2(arrayRelationship[2].begining_x_middle_horizontal, arrayRelationship[2].begining_y_middle_horizo1l, arrayRelationship[2].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[2].begining_y_middle_horizo1l)));
		arrayConnections.push(new Connection2(arrayRelationship[3].begining_x_middle_horizontal, arrayRelationship[3].begining_y_middle_horizo1l, arrayRelationship[3].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[3].begining_y_middle_horizo1l)));
		arrayConnections.push(new Connection2(arrayRelationship[6].begining_x_middle_horizontal, arrayRelationship[6].begining_y_middle_horizo1l, arrayRelationship[6].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[6].begining_y_middle_horizo1l)));
		arrayConnections.push(new Connection2(arrayRelationship[11].begining_x_middle_horizontal, arrayRelationship[11].begining_y_middle_horizo1l, arrayRelationship[11].begining_x_middle_horizontal + SEPARATION, (arrayRelationship[11].begining_y_middle_horizo1l)));

		
		 //draw vertical part of connection for siblings
		 arrayConnections.push(new Connection2(arrayRelationship[2].begining_x_middle_vertical, arrayRelationship[2].drawY, arrayRelationship[2].begining_x_middle_vertical, (arrayRelationship[2].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[3].begining_x_middle_vertical, arrayRelationship[3].drawY, arrayRelationship[3].begining_x_middle_vertical, (arrayRelationship[3].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[6].begining_x_middle_vertical, arrayRelationship[6].drawY, arrayRelationship[6].begining_x_middle_vertical, (arrayRelationship[6].drawY -30)));
		 //arrayConnections.push(new Connection2(arrayRelationship[8].begining_x_middle_vertical, arrayRelationship[8].drawY, arrayRelationship[8].begining_x_middle_vertical, (arrayRelationship[8].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[7].begining_x_middle_vertical, arrayRelationship[7].drawY, arrayRelationship[7].begining_x_middle_vertical, (arrayRelationship[7].drawY -30)));

		 arrayConnections.push(new Connection2(arrayRelationship[8].begining_x_middle_vertical, arrayRelationship[8].drawY, arrayRelationship[8].begining_x_middle_vertical, (arrayRelationship[8].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[12].begining_x_middle_vertical, arrayRelationship[12].drawY, arrayRelationship[12].begining_x_middle_vertical, (arrayRelationship[12].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[13].begining_x_middle_vertical, arrayRelationship[13].drawY, arrayRelationship[13].begining_x_middle_vertical, (arrayRelationship[13].drawY -30)));
		 //arrayConnections.push(new Connection2(arrayRelationship[8].begining_x_middle_vertical, arrayRelationship[8].drawY, arrayRelationship[8].begining_x_middle_vertical, (arrayRelationship[8].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[14].begining_x_middle_vertical, arrayRelationship[14].drawY, arrayRelationship[14].begining_x_middle_vertical, (arrayRelationship[14].drawY -30)));		 

		 arrayConnections.push(new Connection2(arrayRelationship[15].begining_x_middle_vertical, arrayRelationship[15].drawY, arrayRelationship[15].begining_x_middle_vertical, (arrayRelationship[15].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[9].begining_x_middle_vertical, arrayRelationship[9].drawY, arrayRelationship[9].begining_x_middle_vertical, (arrayRelationship[9].drawY -30)));


		//draw horizontal connections for siblings
		 arrayConnections.push(new Connection2(arrayRelationship[2].begining_x_middle_vertical, arrayRelationship[3].drawY -30, arrayRelationship[3].begining_x_middle_vertical, (arrayRelationship[3].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[6].begining_x_middle_vertical, arrayRelationship[7].drawY -30, arrayRelationship[7].begining_x_middle_vertical, (arrayRelationship[7].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[8].begining_x_middle_vertical, arrayRelationship[9].drawY -30, arrayRelationship[9].begining_x_middle_vertical, (arrayRelationship[9].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[12].begining_x_middle_vertical, arrayRelationship[13].drawY -30, arrayRelationship[13].begining_x_middle_vertical, (arrayRelationship[13].drawY -30)));
		 arrayConnections.push(new Connection2(arrayRelationship[14].begining_x_middle_vertical, arrayRelationship[15].drawY -30, arrayRelationship[15].begining_x_middle_vertical, (arrayRelationship[15].drawY -30)));
	
		//draw vertical part of connection FOR SPOUSES
		arrayConnections.push(new Connection2((arrayRelationship[1].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[1].begining_y_middle_horizo1l, (arrayRelationship[1].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[2].drawY-30)));
		arrayConnections.push(new Connection2((arrayRelationship[2].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[2].begining_y_middle_horizo1l, (arrayRelationship[2].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[6].drawY -30)));
		
		arrayConnections.push(new Connection2((arrayRelationship[6].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[6].begining_y_middle_horizo1l, (arrayRelationship[6].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[12].drawY -30)));

		arrayConnections.push(new Connection2((arrayRelationship[11].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[11].begining_y_middle_horizo1l, (arrayRelationship[11].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[14].drawY -30)));
		

		arrayConnections.push(new Connection2((arrayRelationship[3].begining_x_middle_horizontal+(SEPARATION)/2), arrayRelationship[3].begining_y_middle_horizo1l, (arrayRelationship[3].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[8].drawY -90)));
				arrayConnections.push(new Connection2((arrayRelationship[3].begining_x_middle_horizontal+(SEPARATION)/2), (arrayRelationship[8].drawY -90),arrayRelationship[8].begining_x_middle_vertical+80, arrayRelationship[8].drawY -30));
				
				
}



