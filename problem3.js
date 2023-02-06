// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

function countGreaterFive ( array ){

    let count = 0;

    for(var i = 0; i < array.length; i++){
        let number = array[i];

       if ( number > 5){
        //  count = count + 1;
        count++;



      
       }

    }
    console.log(count);
 

}

countGreaterFive( [-1,2,-3,4,5,6,-7,8,-9,10])