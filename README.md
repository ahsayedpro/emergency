

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
getElementById it's used for select only one element by id name. and id name is unique. so easy to select but can't create id more than once.
getElementByClassName it's used for select all element by it's class name.
querySelector can select the first element. it can select all kind of element like id, class, div etc.
querySelectorAll can select all the element.

2. How do you **create and insert a new element into the DOM**?
document.createElement() লিখে নতুন element তৈরি করতে হবে প্রথমে। তারপরে সেই এলিমেন্টে এট্রিবিউট এড করতে হবে। চাইলে পূর্বে থেকে থাকা যে কোন এলিমেন্টে এট্রিবিউট এড করা যায়। appendChild() কে যে কোনো element-এর শেষে বসানো যায়। prepend() কে যে কোনো element-এর শুরুতে বসানো যায়। before() কে যে কোনো element-এর আগে বসানো যায়। after() কে কোনো element-এর পরে বসানো যায়। replaceWith() কে কোনো element-কে নতুন element দিয়ে বদলে দেয়া যায়। 
3. What is **Event Bubbling** and how does it work?
JavaScript-এ যখন কোনো element-এ event (যেমন click) ঘটে, তখন সেটা শুধু ওই element-এই থেমে যায় না। Event টি ভেতর থেকে বাইরের দিকে (child → parent → grandparent → ... → document) এক এক করে উপরের element-গুলোতেও ছড়িয়ে পড়ে। এই ছড়িয়ে পড়াকে বলে Event Bubbling। 
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation দিয়ে চাইলে আমরা অনেকগুলো child element-এর জন্য আলাদা আলাদা event listener না ব্যবহার করে, তাদের parent element-এ একটা listener ব্যবহার করি, আর event bubbling ব্যবহার করে বুঝি কোন child-এ event ঘটেছে। 
5. What is the difference between **preventDefault() and stopPropagation()** methods?
দিয়ে ব্রাউজারের ডিফল্ট কাজ আটকানো যায়। আর stopPropagation() দিয়ে event উপরের element-এ যাওয়া আটকানো যায়।

