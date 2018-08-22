function begin() {


  var score = 0;


  if (document.getElementById('Q1-A2').checked) {
    score += 2;
  } else if (document.getElementById('Q1-A1').checked) {
    score += 1;
  }



  if (document.getElementById('Q2-A2').checked) {
    score += 2;
  } else if (document.getElementById('Q2-A1').checked)  {
      score += 1;
  }


  if (document.getElementById('Q3-A2').checked) {
      score += 2;
  } else if (document.getElementById('Q3-A1').checked) {
      score += 1;
  }

  ;

  if (document.getElementById('Q4-A2').checked) {
        score += 2;
  } else if (document.getElementById('Q4-A1').checked) {
      score += 1;
  }


  if (document.getElementById('Q5-A2').checked) {
      score += 2;
  } else if(document.getElementById('Q5-A1').checked)    {
    score += 1
  }

  if (score == 5){
    alert('You are the perfect candidate to use paper');
  } else if (score == 6) {
    alert('Use Paper to Take Notes');
  } else if (score == 7) {
    alert('Use Paper to Take Notes');
  } else if (score == 8) {
    alert('Take notes Digitally');
  } else if (score == 9) {
    alert('Take notes digitally');
  } else if (score == 10) {
    alert ('You are the perfect candidate for digital notetaking');
}
}
