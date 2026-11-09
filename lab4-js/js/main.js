  
  console.log( "EXO 1 : ") ; 
  console.log( "") ; 
  let city ="Algeirs" ; 
   let celsius=21.4 ;
    let fahrenheit = celsius*9/5+32 ; 
  console.log(city , ":" , celsius , "`C  =" ,fahrenheit, " F" ) ; 
  
 
  let isWarm = (celsius>20)? true : false ; 
  
  console.log(typeof city, typeof celsius, typeof isWarm     );

	 console.log ( (isWarm)?" warm day " : "cold day ") ; 
	 let  concat = "21.5" + 1 ; 
	 console.log(concat ,  Number("21.5") +1 ) ; 
 
	 	  
  console.log( "") ;  
  console.log( "EXO 2 :" ) ; 
  console.log( "") ; 
  function mention(grade) {
	  if ( grade <0 || grade >20 ) {
	  return "Invalid egrade " }
	   else if (grade <10  ) { return " fail "; }
	    else if (grade <12  ) { return "pass  "; }
	    else if (grade < 14  ) { return " good "; }
	    else if (grade < 16  ) { return "very good  "; }
	   else { return "exellent  "; } 
	  
  }
  console.log(mention(9.5), mention(12), mention(15.75), mention(18 ), mention(21 ) ); 
console.log( "") ;  
  console.log( "EXO 3 :" ) ; 
  console.log( "") ; 
  
  function loop () {
	 let result = ""; 
  for ( let i =1 ; i <= 15 ; i++) {
	 if ( i%5==0  && i%3 ==0 ) {
		 result= result + " FizzBuzz "; 
		
	 } else if (i%3 ==0  ) {
		 result= result + " Fizz "; 
		  
	 }else if (i%5 ==0  ) {
		 result= result + " Buzz "; 
		  
	 }else {
		 result= result + ` ${i}`; 
	 }
	   
	 
  }
  return result ;
  } 
  console.log(loop())  ; 
   
  function bank ( amount , expectedAmount) {
	  let years  = 0 ; 
	  while( amount < expectedAmount) {
		 amount = amount *1.05 ; 
		  years ++ ; 
	  } 
	  return ` ${years} years to double  ( ${Math.round(amount)} Da )  `; 
  }
  
  console.log(bank(10000, 20000 ))   ; 
  
  console.log( "") ;  
  console.log( "EXO 4 :" ) ; 
  console.log( "") ; 
  const  grades = [12 , 8.5, 15 , 17.25  , 9 , 14 ] ;  
  let average = 0 ; 
   for ( let i = 0 ; i<6 ; i++ ) {
	   average = average+ grades[i]/6 ; 
   }
   console.log("AVERAGE : " ,(average).toFixed(2) ) ; 
   console.log( " Best : " , Math.max(...grades) ,  ", worst  : " , Math.min(...grades)) ;   
   console.log( (grades.filter((p)=> p>=10)).length   ,  "  of 6 passed " ) ;
    let copy = [...grades]; 
	copy = copy.sort((a,b)=> b-a) ; 
	console.log ( copy  ) ; 
	console.log(grades) ; 
	console.log(grades.map((p)=>mention(p))) ; 
	console.log( "") ;  
  console.log( "EXO 5 :" ) ; 
  console.log( "") ; 
    const student= {
		name : 
		group : 
		grades : 
		
	} 