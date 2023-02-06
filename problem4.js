// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।



function largestNameReversed (friend1,friend2){

    
if(friend1.length > friend2.length){
    console.log(friend1.split("").reverse().join(""));
}
else {
    console.log(friend2.split("").reverse().join(""));
}
}

largestNameReversed("Mac","Alister");