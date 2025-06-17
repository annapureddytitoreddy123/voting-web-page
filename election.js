let p1=document.querySelector('.p1')
let mainn=document.querySelector('.mainn')
p1.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>The Election Commission of India (ECI) is a constitutional body. It was established by the Constitution of India to conduct and regulate elections in the country. Article 324 of the Constitution provides that the power of superintendence, direction, and control of elections to parliament, state legislatures, the office of the president of India, and the office of vice-president of India shall be vested in the election commission. Thus, the Election Commission is an all-India body in the sense that it is common to both the Central government and the state governments.";
});

let p2=document.querySelector('.p2')
p2.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'> pdf elective roll";
});
let p3=document.querySelector('.p3')
p3.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'> registration";
});
let p4=document.querySelector('.p4')
p4.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'> officer dtails";
});
let p5=document.querySelector('.p5')
p5.addEventListener('click',function(){
    mainn.innerHTML="<p style= 'padding-top: 50px; padding-left:10px;font-size:18px ;color:green'>about us";
});

let inpt=document.querySelector('input')

let but=document.querySelector('.btn2')
but.addEventListener("click",function(){
    const val=inpt.value;
    let s='#'+val;
    location.href=s;
    let a=document.querySelector(s);
    a.innerHTML=val+"<p style='padding-buttom:1000px;color:white'>please click on the image to see the MLA details</p>";
    let b=document.querySelector(s)
    b.addEventListener("click",function(){
        
        let s="file:///C:/Users/Jayanth/Desktop/tito/"+val+"/"+val+".html"

        window.location.href=s
    })

})
