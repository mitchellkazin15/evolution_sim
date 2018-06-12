function creature(){
  this.speed = Math.round(Math.random()*5);
  this.energy = Math.round(Math.random()* 100) + 100;
  this.size = Math.round(Math.random()*3) + 1;
  this.x = Math.floor(Math.random()*canvasSize);
  this.y = Math.floor(Math.random()*canvasSize);
  this.r = Math.floor(Math.random()*255);
  this.g = Math.floor(Math.random()*255);
  this.b = Math.floor(Math.random()*255);
				
  this.update = function() {
    this.x = Math.max(0,Math.min(canvasSize,this.x + this.speed * Math.round(1 - Math.random()*2)));
    this.y = Math.max(0,Math.min(canvasSize,this.y + this.speed * Math.round(1 - Math.random()*2)));
    ctx = myGameArea.creaturesContext;
    ctx.fillStyle = rgbToHex(this.r,this.g,this.b);
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
  }
}

function sigmoidNeuron() {
  this.inputs = new Array();
  this.output = 0;
  this.bias = 0;
  this.fire = function() {
    var sum = 0;
    for(var i = 0; i < this.inputs.length; ++i){
      sum += this.inputs[i].weight * this.inputs[i].neuron.output;
    }
    sum += this.bias;
    this.output = 1 / (1 + Math.exp(-sum));
  }
}

function connection(inputNeuron) {
  this.weight = 0;
  this.neuron = inputNeuron;
}

function network(numInputs,numOutputs,numHiddenLayers,hiddenSize){
  this.layers = new Array(numHiddenLayers + 2);
  for(var i = 0; i < this.layers.length; ++i){
    
  }
}

