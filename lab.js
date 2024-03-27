let friends = ['courtney', 'tiffany', 'joseph', 'victoria', 'david'];

for (let f=0; f < friends.length; f++){ // because we are incrementing f in the beginning here, everything below this point needs to be completed before f is looped around again. THIS IS WHY f DOESNT INCREASE AT THE SAME RATE THAT i DECREASES!!!!
    
    for (let i=99; i >= 0; i--) { //start i at 99, then when i is greater than or equal to 0, subtract one
        if(i>1){ //if there is anythign higher than one in place of i do this 
    console.log(i + ' lines of code in the file,'+ i +' lines of code;'+ friends[f] +' strikes one out, clears it all out,'+ (i-1) + ' lines of code in the file')
        } else if (i===1)
        //three equals signs for is equal to 
        { console.log(i 
            + //gotta add this plus in there because we are combining a string with a variable 
             ' lines of code in the file,'+ i +' lines of code;'+ friends[f] +' strikes one out, clears it all out, no more lines of code in the file')}
}
}
