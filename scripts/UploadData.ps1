$lines = Get-Content D:\Source\Github\cognition.insitute\cognition.institute\scripts\sentences.txt
foreach($l in $lines){
    $p = $l.Split("`t");
    $url = ("http://localhost:1337/api/v1/sentence/create?text=" + $p[0] + "&response=" + $p[1].ToLower());
    $url
    Invoke-RestMethod -Uri $url -Method Get;
}