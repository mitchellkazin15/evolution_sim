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
