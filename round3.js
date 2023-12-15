
  
    function checkLetter(letter, boxIndex) {
        const box = document.getElementById(`box${boxIndex}`);
      
        switch (boxIndex) {
            case 1:
                const box3 = document.getElementById('box3');
                if (letter.toLowerCase() === 's') {
                box3.style.backgroundColor = 'green';
                box3.style.backgroundImage = 'url("4.jpg")';
                box3.style.backgroundSize = 'cover';
              } else {
                box3.style.backgroundColor = 'red';
                box3.style.backgroundImage = 'none';
              }
              break;
            case 2:
              const box6 = document.getElementById('box6');
              if (letter.toLowerCase() === 'o') {
              box6.style.backgroundColor = 'green';
              box6.style.backgroundImage = 'url("6.jpg")';
              box6.style.backgroundSize = 'cover';
            } else {
              box6.style.backgroundColor = 'red';
              box6.style.backgroundImage = 'none';
            }
            break;
            case 3:
              const box9 = document.getElementById('box9');
              if (letter.toLowerCase() === 'k') {
              box9.style.backgroundColor = 'green';
              box9.style.backgroundImage = 'url("7.jpg")';
              box9.style.backgroundSize = 'cover';
            } else {
              box9.style.backgroundColor = 'red';
              box9.style.backgroundImage = 'none';
            }
            break;
            case 4:
              const box8 = document.getElementById('box8');
              if (letter.toLowerCase() === 'h') {
              box8.style.backgroundColor = 'green';
              box8.style.backgroundImage = 'url("1.jpg")';
              box8.style.backgroundSize = 'cover';
            } else {
              box8.style.backgroundColor = 'red';
              box8.style.backgroundImage = 'none';
            }
            break;
            case 5:
              const box7 = document.getElementById('box7');
              if (letter.toLowerCase() === 'r') {
              box7.style.backgroundColor = 'green';
              box7.style.backgroundImage = 'url("8.jpg")';
              box7.style.backgroundSize = 'cover';
            } else {
              box7.style.backgroundColor = 'red';
              box7.style.backgroundImage = 'none';
            }
            break;
            case 6:
              const box5 = document.getElementById('box5');
              if (letter.toLowerCase() === 'a') {
              box5.style.backgroundColor = 'green';
              box5.style.backgroundImage = 'url("2.jpg")';
              box5.style.backgroundSize = 'cover';
            } else {
              box5.style.backgroundColor = 'red';
              box5.style.backgroundImage = 'none';
            }
            break;
            case 7:
              const box2 = document.getElementById('box2');
              if (letter.toLowerCase() === 'n') {
              box2.style.backgroundColor = 'green';
              box2.style.backgroundImage = 'url("5.jpg")';
              box2.style.backgroundSize = 'cover';
            } else {
              box2.style.backgroundColor = 'red';
              box2.style.backgroundImage = 'none';
            }
            break;
            case 8:
              const box1 = document.getElementById('box1');
              if (letter.toLowerCase() === 'i') {
              box1.style.backgroundColor = 'green';
              box1.style.backgroundImage = 'url("3.jpg")';
              box1.style.backgroundSize = 'cover';
            } else {
              box1.style.backgroundColor = 'red';
              box1.style.backgroundImage = 'none';
            }
            break;
            case 9:
              const box4 = document.getElementById('box4');
              if (letter.toLowerCase() === 'x') {
              box4.style.backgroundColor = 'green';
              box4.style.backgroundImage = 'url("9.jpg")';
              box4.style.backgroundSize = 'cover';
            } else {
              box4.style.backgroundColor = 'red';
              box4.style.backgroundImage = 'none';
            }
            break;
            default:
                break;
        }
      }

      const input1 = document.getElementById('input1');
      input1.addEventListener('input', function () {
        checkLetter(input1.value, 1);
      });
      
      const input2 = document.getElementById('input2');
      input2.addEventListener('input', function () {
        checkLetter(input2.value, 2);
        checkGreen();
      });
      
      const input3 = document.getElementById('input3');
      input3.addEventListener('input', function () {
        checkLetter(input3.value, 3);
        checkGreen();
      });
      

      const input4 = document.getElementById('input4');
      input4.addEventListener('input', function () {
        checkLetter(input4.value, 4);
        checkGreen();
      });
      
      const input5 = document.getElementById('input5');
      input5.addEventListener('input', function () {
        checkLetter(input5.value, 5);
        checkGreen();
      });
      
      const input6 = document.getElementById('input6');
      input6.addEventListener('input', function () {
        checkLetter(input6.value, 6);
        checkGreen();
      });
      
      const input7 = document.getElementById('input7');
      input7.addEventListener('input', function () {
        checkLetter(input7.value, 7);
        checkGreen();
      });
      
      const input8 = document.getElementById('input8');
      input8.addEventListener('input', function () {
        checkLetter(input8.value, 8);
        checkGreen();
      });
      
      const input9 = document.getElementById('input9');
      input9.addEventListener('input', function () {
        checkLetter(input9.value, 9);
        checkGreen();
      });
      

        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');
        const box4 = document.getElementById('box4');
        const box5 = document.getElementById('box5');
        const box6 = document.getElementById('box6');
        const box7 = document.getElementById('box7');
        const box8 = document.getElementById('box8');
        const box9 = document.getElementById('box9');


    function checkGreen(){
      if(box1.style.backgroundColor === 'green'     &&
         box2.style.backgroundColor === 'green'     && 
         box3.style.backgroundColor === 'green'     &&
         box4.style.backgroundColor === 'green'     &&
         box5.style.backgroundColor === 'green'     &&
         box6.style.backgroundColor === 'green'     &&
         box7.style.backgroundColor === 'green'     &&
         box8.style.backgroundColor === 'green'     &&
         box9.style.backgroundColor === 'green'     )
         
         {
            box5.style.backgroundColor = 'blue'
         }
   
        }


        



    