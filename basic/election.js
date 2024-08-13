let p1=document.querySelector('.p1')
let mainn=document.querySelector('.mainn')
p1.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>The Election Commission of India (ECI) is a constitutional body. It was established by the Constitution of India to conduct and regulate elections in the country. Article 324 of the Constitution provides that the power of superintendence, direction, and control of elections to parliament, state legislatures, the office of the president of India, and the office of vice-president of India shall be vested in the election commission. Thus, the Election Commission is an all-India body in the sense that it is common to both the Central government and the state governments.";
});
let p3=document.querySelector('.p3')
p3.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>The Registration service enables the taxpayer to access and track all tax-related activities. 2. Prerequisites for availing this service 3. Step-by-Step Guide Step 1: Go to the e-Filing portal homepage, click Register. Step 2: Enter your PAN under Register as a Taxpayer option and click Validate.";
});
let p4=document.querySelector('.p4')
p4.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>This Website is aimed at demystifying the work relating to the conduct of elections. Elections are the cornerstone of a vibrant democracy.It is, essential that voters are not only aware of the statutory provisions under which the election machinery operates but are also fully knowledgeable about their rights and obligations as electors. The website is designed to fulfill both these objectives.";
});
let p5=document.querySelector('.p5')
p5.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>Election Commission of India is a permanent Constitutional Body. The Election Commission was established in accordance with the Constitution on 25th January 1950. The Commission celebrated its Golden Jubilee in 2001.";
});
let p6=document.querySelector('.p6')
p6.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'> Name:Annapureddy Titooreddy mail:annapureddytitoreddy@gmail.com   phone:1234567890";
});

let inpt=document.querySelector('input')

let but=document.querySelector('.btn2')
but.addEventListener("click",function(){
    const val=inpt.value;
    let s='#'+val;
    location.href=s;
    let a=document.querySelector(s);
    a.innerHTML=val+"<p style='padding-buttom:1000px;color:white'>please click on the image to see the Mp details</p>";
    let b=document.querySelector(s)
    b.addEventListener("click",function(){
        
        let s="C:/Users/annap/OneDrive/Desktop/ballaya/tito/"+val+"/"+val+".html"
        window.location.href=s
    })
})
