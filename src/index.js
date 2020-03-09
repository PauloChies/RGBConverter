$( '.normalizeRGB' ).click(function(e) {
    e.preventDefault();
    var r = parseFloat($('#inputR').val());
    var g = parseFloat($('#inputG').val());
    var b = parseFloat($('#inputB').val());
    var nr =  r / (r + g + b);
    var ng =  r / (r + g + b);
    var nb =  r / (r + g + b);
    $('#inputNR').val(nr);
    $('#inputNG').val(ng);
    $('#inputNB').val(nb);
});

$( '.RGBtoCMYK' ).click(function(e) {
    e.preventDefault();
    var r = parseFloat($('#inputCR').val()) / 255;
    var g = parseFloat($('#inputCG').val()) / 255;
    var b = parseFloat($('#inputCB').val()) / 255;

    var k =  1 - Math.max(r + g + b);
    var c =  (1-r-k) / (1-k);
    var m =  (1-g-k) / (1-k);
    var y =  (1-b-k) / (1-k);

    $('#inputC').val(c);
    $('#inputM').val(m);
    $('#inputY').val(y);
    $('#inputK').val(k);
});

$( '.CMYKtoRGB' ).click(function(e) {
    e.preventDefault();

    var k =  parseFloat($('#inputKCMYK').val());
    var c =  parseFloat($('#inputCCMYK').val());
    var m =  parseFloat($('#inputMCMYK').val());
    var y =  parseFloat($('#inputYCMYK').val());

    var cR =  255 * (1-c) * (1-k);
    var cG =  255 * (1-m) * (1-k);
    var cB =  255 * (1-y) * (1-k);
    $('#inputcR').val(cR);
    $('#inputcG').val(cB);
    $('#inputcB').val(cG);
});

$( '.RGBtoHSV' ).click(function(e) {
    e.preventDefault();
    var computedH = 0;
    var computedS = 0;
    var computedV = 0;

    var r = parseFloat($('#inputHR').val());
    var g = parseFloat($('#inputHG').val());
    var b = parseFloat($('#inputHB').val()); 
   
    r=r/255; g=g/255; b=b/255;
    
    var minRGB = Math.min(r,Math.min(g,b));
    var maxRGB = Math.max(r,Math.max(g,b));
    
    // Black-gray-white
    if (minRGB==maxRGB) {
        computedV = minRGB;
        computedH = 0;
        computedS = 0;
    }
    
    // Colors other than black-gray-white:
    var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
    var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
    computedH = 60*(h - d/(maxRGB - minRGB));
    computedS = (maxRGB - minRGB)/maxRGB;
    computedV = maxRGB;

    $('#inputcH').val(computedH);
    $('#inputcS').val(computedS);
    $('#inputcV').val(computedV);
});

$( '.HSVtoRGB' ).click(function(e) {
    e.preventDefault();
    var r, g, b;

    var h = parseFloat($('#inputHH').val());
    var s = parseFloat($('#inputHS').val());
    var v = parseFloat($('#inputHV').val()); 
  
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
  
    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
  
    $('#inputHSVR').val(r * 255);
    $('#inputHSVG').val(g * 255);
    $('#inputHSVB').val(b * 255);
  });