$lines = Get-Content D:\Source\cognition\scripts\sentences.txt
foreach($l in $lines){
    $p = $l.Split("`t");
    $url = ("http://cognition.institute/api/v1/sentence/create?text=" + $p[0] + "&response=" + $p[1].ToLower());
    $url
    Invoke-RestMethod -Uri $url -Method Get;
}