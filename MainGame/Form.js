class Form{
    constructor(){
this.input = createInput("Name");
this.button = createButton("PLAY");
this.title = createElement('h1');
this.statement = createElement("h2");
this.boy = createButton("BOY");
this.girl = createButton("GIRL");

 }
 hide(){
  this.input.hide();
  this.button.hide();
  this.title.hide();
  this.statement.hide();
  this.boy.hide();
  this.girl.hide();

} 
display(){
  this.button.disabled=true
    this.input.position(displayWidth/2,displayHeight/2-200);
    this.button.position(displayWidth/2,displayHeight-100);
    this.title.html("EduFarm");
    this.title.position(displayWidth/2,0);
    this.statement.html("Choose your character");
    this.statement.position(displayWidth/2-100,displayHeight/2-100);
    this.boy.position(displayWidth/2+205,displayHeight/2+120);
    this.girl.position(displayWidth/2-220,displayHeight/2+120);

    this.girl.mousePressed(()=>{
      this.girl.hide();
      this.boy.hide();
      this.button.disabled=false;
      this.statement.hide();
      //boy.destroy();
     //girl.x=displayWidth/2-400;
     gender="girl";
     console.log(gender)
    })

    this.boy.mousePressed(()=>{
      this.girl.hide();
      this.boy.hide();
      this.button.disabled=false
      this.statement.hide();
      //girl.destroy();
     // boy.x=displayWidth/2-400;
      gender="boy";
    })
  
   this.button.mousePressed(()=>{
      if(!this.button.disabled){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.statement.hide();
        this.boy.hide();
        this.girl.hide();
        name = this.input.value();
        var greeting=createElement('h2');
        var s1= createElement("h4");
        var s2= createElement("h4");
        var s3= createElement("h4");
        var s4= createElement("h4");
        greeting.html("Hello " +name+"!!");
        s1.html("* Rainy Season");
        s2.html("* From June to October");
        s3.html("* Winter Season");
        s4.html("* From November to April");
        greeting.position(displayWidth/2 - 70, displayHeight/4);
        s1.position(displayWidth/2+20, displayHeight/2+20);
        s2.position(displayWidth/2+20, displayHeight/2+80);
        s3.position(displayWidth/2+20, displayHeight/2+220);
        s4.position(displayWidth/2+20, displayHeight/2+280);
        var kharif=createButton("KHARIF SEASON");
         kharif.position(displayWidth/2,displayHeight/2);
         var rabi=createButton("RABI SEASON");
         rabi.position(displayWidth/2,displayHeight/2+200);

         kharif.mousePressed(()=>{
         this.button.hide();
         greeting.hide();
         rabi.hide();
         kharif.hide();
        s1.hide();
        s2.hide();
        s3.hide();
        s4.hide();
        var s5= createElement("h4");
        var s6= createElement("h4");
        var s7= createElement("h4");
        s5.html("* Cotton is soft fiber that grows with the seeds of the cotton plant.It requires black soil and warm climate");
        s6.html("* Paddy,AKA rice paddy, is small, level, flooded field used to cultivate rice.It requires clayey soil to grow.");
        s7.html("* Maize also called corn is the third most important cereal crop in the world.It requires sandy soil to grow.");
        s5.position(200, displayHeight/2+10);
        s6.position(200, displayHeight/2+120);
        s7.position(200, displayHeight/2+200);
        var K= createElement("h2");
        K.html("CHOOSE THE CROP YOU WANNA GROW!!");
        K.position(displayWidth/2 - 70, displayHeight/4);
        var cotton =createButton("Cotton");
        var Paddy =createButton("Paddy");
        var Maize =createButton("Maize");
        cotton.position(displayWidth/2,displayHeight/2);
        Paddy.position(displayWidth/2,displayHeight/2+100);
        Maize.position(displayWidth/2,displayHeight/2+200);

      


cotton.mousePressed(()=>{
  var c1 =new Soil("Cotton");
  c1.display()
  cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();
  s5.hide();
  s6.hide();
  s7.hide();
 
})
Paddy.mousePressed(()=>{
  //form4 kharif
 var c2 = new Soil("Paddy");
 c2.display();
 cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();
  s5.hide();
  s6.hide();
  s7.hide();

})
Maize.mousePressed(()=>{
  var c3 = new Soil("Maize");
  c3.display(); 
  cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();
  s5.hide();
  s6.hide();
  s7.hide();
})
        
         })//kharif

         rabi.mousePressed(()=>{
          this.button.hide();
          greeting.hide();
          rabi.hide();
          kharif.hide();
         s1.hide();
         s2.hide();
         s3.hide();
         s4.hide();
         var s8= createElement("h4");
         var s9= createElement("h4");
         var s10= createElement("h4");
         s8.html("*Oats are a grain that is grown throughout the world.Oats are used mostly to feed farm animals.It requires black soil.");
        s9.html("* Barley seeds are a cereal grain.It is one of mankind's oldest crops. It can be made into flour or beer.It requires Loamy soil.");
        s10.html("* Wheat was one of the first crops that could be easily cultivated on a large scale, and its seeds could be stored for long periods in a dry climate.It requires loamy soil.");
        s8.position(200, displayHeight/2+10);
        s9.position(200, displayHeight/2+120);
        s10.position(200, displayHeight/2+200);
         var R= createElement("h2");
         R.html("CHOOSE THE CROP YOU WANNA GROW!!");
         R.position(displayWidth/2 - 70, displayHeight/4);
         var Oat=createButton("Oat");
         var Barley =createButton("Barley");
         var Wheat =createButton("Wheat");
         Oat.position(displayWidth/2,displayHeight/2);
         Barley.position(displayWidth/2,displayHeight/2+100);
         Wheat.position(displayWidth/2,displayHeight/2+200);

        Oat.mousePressed(()=>{
         var c4= new Soil("Oat");
         c4.display();
         Wheat.hide();
         Barley.hide();
         Oat.hide();
         R.hide();
         s8.hide();
         s9.hide();
         s10.hide();
        })
        Barley.mousePressed(()=>{
          //form4 rabi
          var c5= new Soil("Barley");
          c5.display();
          Wheat.hide();
          Barley.hide();
          Oat.hide();
          R.hide();
          s8.hide();
         s9.hide();
         s10.hide();
        })
        Wheat.mousePressed(()=>{
          //form4 rabi 
          var c6= new Soil("Wheat");   
          c6.display();
          Wheat.hide();
          Barley.hide();
          Oat.hide();
          R.hide();
          s8.hide();
         s9.hide();
         s10.hide();
        })
          })//rabi
        }
        else{
          console.log("Please select the character");
        }
      })//;
    drawSprites();
}
};
