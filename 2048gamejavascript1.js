//2048game code
var game=(function(){
    var score=0;
	var grid=new Array(4);
   for(var j=0;j<4;j++)
   	grid[j]=new Array(4);
    for(var i=0;i<4;i++)
    {
    	for(var j=0;j<4;j++)
    	{
    		grid[i][j]=0;

    	}
    }
   
 function display(){
  for(var i=0;i<4;i++)
	  {
		  	for(var j=0;j<4;j++)
		  	{
		  		var x="class"+grid[i][j];
		  		console.log(x);
		  		var k=(4*i)+j+1;
		  		var ele=document.getElementById(k);
		  		ele.setAttribute("class",x);

		  	}
	   }
 }
 
function left(){
	var flag=0;
 for(var i=0;i<4;i++)
    {
        for(var j=1;j<4;j++)
        {
            while(j<4 && j>0 && grid[i][j-1]===0 && grid[i][j]!==0 )
            {
                grid[i][j-1]=grid[i][j];
                grid[i][j]=0;
                j--;
                flag=1;
            }
            while(j>0 && j<4 && grid[i][j]===grid[i][j-1] && grid[i][j]!=0)
            {
                grid[i][j-1]*=2;
                grid[i][j]=0;
                j--;
                flag=1;
            }
        }
    }
    if(flag===1){
    mov();
    display();}
}
 function top(){
 	var flag=0;
 	display();
    for(var j=0;j<4;j++)
    {
        for(var i=1;i<4;i++)
        {


            while(i<4 && i>0 && grid[i-1][j]===0 && grid[i][j]!==0)
            {
             
                grid[i-1][j]=grid[i][j];
                grid[i][j]=0;
                console.log(i);
                i--;
                flag=1;
            }
             
              
            while(i<4 && i>0 && grid[i-1][j]===grid[i][j] && grid[i][j]!==0)
            {
                grid[i-1][j]*=2;
               grid[i][j]=0;
                i--;
                flag=1;

            }
        }
    }
    if(flag===1)
     {mov();
    display();}
}

function right()
{   var flag=0;
    for(var i=0;i<4;i++)
    {
        for(var j=2;j>=0;j--)
        {
            while(j>=0 && j<3 && grid[i][j+1]==0 && grid[i][j]!=0)
            {
                grid[i][j+1]=grid[i][j];
                grid[i][j]=0;
                j++;
                flag=1;

            }
            while(j>=0 && j<3 && grid[i][j]==grid[i][j+1] && grid[i][j]!=0)
            {
                grid[i][j+1]*=2;
                grid[i][j]=0;
                j++;
                flag=1;
            }

        }
    }
    if(flag===1){
     mov();
    display();}
}

function down(){
	flag=0;
    for(var j=0;j<4;j++)
    {
        for(var i=2;i>=0;i--)
        {
            while(i>=0 && i<=2 && grid[i+1][j]==0&& grid[i][j]!=0)
            {
                grid[i+1][j]=grid[i][j];
                grid[i][j]=0;
                i++;
                flag=1;
            }
            while(i>=0 && i<=2 && grid[i][j]==grid[i+1][j] && grid[i][j]!=0)
            {
                grid[i+1][j]*=2;
                grid[i][j]=0;
                i++;
                flag=1;
            }
        }

    }
    if(flag===1)
     {mov();
    display();}
}
function mov(){
   var s;
   var a;
   while(1)
   {
     s=Math.floor((Math.random()*1000)%4);
     a=Math.floor((Math.random()*1000)%4);
     console.log(grid[s][a])
     
     if(grid[s][a]===0)
     {
     	console.log("enetered in if of mov")
     	var l=Math.floor((Math.random()*1000)%10);
     	if(l<5)
     		grid[s][a]=4;
     	else
     		grid[s][a]=2;
     	break;


     }

   }

}
function key(e){
 switch(e.which)
 {
 	case 65:{
 		     left();
 	         break;
 	         }
 	case 87:{
 		        top();
                break;
               } 
 	case 68:{ right();
 		        break;}
 	case 83:{
 		       down();
 		       break;
 		      }
 }

}

return{
	init:function(){
		 mov();
       display();
		window.addEventListener("keydown",key);
	}

}
}());

