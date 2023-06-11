console.log('Hello World!');

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">

  
</script>


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

  
    $(function() {
      // This code will be executed when the DOM is ready
      var content = `
        <h1> Welcome to my website!
        مرحبا بكم في موقع الويب الخاص بي!
        </h1>
        
        <<h1>اهلا</h1>  
        
        <p1>اود ان اخذكم في رحله عبر عدة سفن وكل سفينه لها طريقه مميزه في الآبحار اود ان تستمتعون في الرحله </p1>
        
        <h1> سفينة هزيم 
       </h1>
       
      <h1> سفينة صوت الرعد </h1>
      
      <h1> سفينة اكليل </h1>
      
      <h1> سفينة الزعيم </h1>
      
      <h1> </h1>
      
      <p1> تتميز كل سفينه بطريقه فريده في اخذ طريقها عبر امواج البحار وتستخدم في ذالك قدراتها الخارقه والفريده لآجتياز وتخطي المسافات الطويله والترق الصعبه بكل يسر وسهوله  <p1>
        
        <p> This is my website. I use it to share my thoughts and ideas with the world. 
   
        هذا هو موقع الويب الخاص بي.  أستخدمه لمشاركة أفكاري وأفكاركم من حول  العالم.
        </p>
      `;
      $("#content").html(content);
    });
    


  