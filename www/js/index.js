window.onload=function()
{
   
//Création et configuration de la Procédure Ajoutbouton
    AjoutTache.onclick=function()
    {
        let NouvelleTache = document.createElement('li');
        NouvelleTache.innerText = Tache.value;
               
        Tasklist.appendChild(NouvelleTache);
        Tache.select();
        Tache.focus();
        $("#Tasklist").listview("refresh");
        
        $(NouvelleTache).on("swipeleft",function()

            {
                $(this).css("text-decoration","line-through")
            }
        )
    
    } // Fin Procèdure Ajout

//Création et configuration de la Procédure Initialiserbouton
    InialiserTache.onclick=function()
    {
        Tasklist.innerHTML="";

    } //Fin Procédure Initialiserbouton

InialiserTacheBis.onclick=function()
{
    Tasklist.innerHTML="";

} //Fin Procédure Initialiserbouton

}
