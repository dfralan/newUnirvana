// #Colorama card
$(document).ready(function() {

  //Get contrast
  function getContrast(hexcolor){
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  
  //Gen random color
  randomColorHex = "#fd196f"
  const colorItself = document.getElementById("colorItself")
  const coloramaName = document.getElementById("colorItself")

  const randomHex = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    randomColor = n.slice(0, 6);
    randomColorHex = '#' + randomColor;
    randomContrast = getContrast(randomColor);
    coloramaName.style.opacity = "0";
    colorItself.style.boxShadow = "inset 0 0 50px rgba(0, 0, 0, .7)";
    coloramaName.style.transition = ".3s";
    setTimeout(function(){
      colorItself.style.boxShadow = "inset 0 0 20px rgba(0, 0, 0, .3)";
      colorItself.style.background = randomColorHex;
    }, 300);
    setTimeout(function(){
      coloramaName.style.opacity = "1";
      coloramaName.style.transition = "1s";
    }, 300);
    setTimeout(function(){
      coloramaName.innerHTML = `<b>${randomColorHex}</b>`;
    }, 300);
    };

  setInterval(function(){ randomHex(); }, 5000);
  
  // Card interactive animation
  var setCardStyle = function(){

    var card = $('.card');
    var cardWidth = card.width();
    var cardHeight = cardWidth/2.5;
    
    // Set scale 
    var cardContentScale = cardWidth/700;
    card.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale('+cardContentScale+')');
    
    // Set height
    card.height(cardHeight);
    
    // Generate hover effect
    card
      .mouseover(function(){
        card.mousemove(function(e){
          // Find mouse X position in card
          mouseScreenPositionX = e.pageX;
          cardLeftPosition = card.offset().left;
          mousePosX = ((mouseScreenPositionX - cardLeftPosition)/cardWidth);
          // Calculate maxtrix3d X value
          matrix3dX = ((mousePosX/10000)*1.5)-0.0001;
          
          // Find mouse Y position in card
          mouseScreenPositionY = e.pageY;
          cardTopPosition = card.offset().top;
          mousePosY = ((mouseScreenPositionY-cardTopPosition)/cardHeight);
          // Calculate maxtrix3d Y value
          matrix3dY = ((mousePosY/10000)*1.65)-0.0001;
          
          // Set CSS
          card.css('transform', 'translate3d(0,-5px,0) matrix3d(1,0,0.00,'+matrix3dX+',0.00,1,0.00,'+matrix3dY+',0,0,1,0,0,0,0,1) scale('+cardContentScale*1.2+')');
        });
      })
      .mouseout(function(){
        // Unset CSS on mouseleave
        card.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale('+cardContentScale+')');
      });
  }
  
  // Execute function
  setCardStyle();
  $(window).on('resize', function(){
      setCardStyle();
  })
});