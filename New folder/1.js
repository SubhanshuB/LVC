function fun()
{
    var a1=document.getElementsByName("q1");
    var a2=document.getElementsByName("q2");
    var ans=0;
    if(a1[0].checked)
        ans+=2;
    if(a2[1].checked)
        ans+=2;
    alert("You got "+ans+" marks!" );
}