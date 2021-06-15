let screen=document.getElementById("screen");
btns=document.querySelectorAll("button");
for (const btn of btns) {
    btn.addEventListener('click', function() {
      var pressed=btn.innerHTML;
      var eq=screen.value;
      if(pressed=='AC'){
          screen.value="";
          eq=screen.value;
      }
      else if(pressed=="C"){
        eq=eq.slice(0,eq.length-1);
        screen.value=eq;
     }
      else if(pressed=="+/-"){
         eq="-"+eq;
         screen.value=eq;
      }
      else if(pressed=='='){
          screen.value=eval(eq);
           eq=val(eq);
      }
      else{
        screen.value+=pressed;
        eq=screen.value;
      }
    });
  }