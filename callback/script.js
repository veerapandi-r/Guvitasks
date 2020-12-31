var count=10
function callback()
{
    let li='<h1>Callback</h1>';
        let body=document.body;
        li+=`<p>${count}</p>`;
        body.innerHTML=li;
        count--;
        if(count==-1)
        {
            alert("Happy Independence Day")
            return stop;
        }   
        var timer=setTimeout(callback, 1000);
}

 
    function stop() {
        if (timer) {
            clearTimeout(timer)
            timer = 0;
        }
    }
    callback()