console.log('Hola mundo');


hierarchicalAlgorithm = {
	numOfPins : 20,
	pins : {},
	pinTemplate : '<div id="hierarchicalPin__NUMPIN__" class="hierarchical__plane__pin" style="bottom: __BOTTOM__%;left: __LEFT__%;"></div>',
	generatePin : function()
	{
		console.log('generar pines');
		for( i =0; i < this.numOfPins; i++ )
		{
			//console.log('pin: '+ i)
			xAxis = this.numeroAletorio(0, 100);
			yAxis = this.numeroAletorio(0, 100);

			this.pins[i] = [ xAxis, yAxis ];
			this.insertPin(i, xAxis, yAxis);
		}
	},
	insertPin: function(numPin, xAxis, yAxis)
	{
		template = this.pinTemplate;
		template = template.replace('__NUMPIN__', numPin);
		template = template.replace('__LEFT__', xAxis - 1);
		template = template.replace('__BOTTOM__', yAxis - 1)

		planeElement = document.getElementById("hierarchical__plane");
		planeElement.innerHTML += template;
	},
	numeroAletorio : function(inferior, superior)
	{
		var numPosibilidades = superior - inferior
	    var aleat = Math.random() * numPosibilidades
	    aleat = Math.round(aleat)
	    return parseInt(inferior) + aleat
	}
}