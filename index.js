let bool = true;
function subnv()
{
    if(bool)
    {
        document.getElementById("navBar").style.animation = "bounceDown 1 0.4s forwards ease-out";
    }
    else
    {
        document.getElementById("navBar").style.animation = "bounceUp 1 0.4s forwards ease-out";
    }
    bool  = !bool;
} 
