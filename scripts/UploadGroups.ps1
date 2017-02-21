$lines = Get-Content D:\Source\cognition\scripts\groups.txt
foreach($l in $lines){
    $p = $l.Split("`t");
    $url = ("http://localhost:1337/api/v1/group/create?pid=" + $p[0] + "&gid=" + $p[1]);
    # $url = ("http://cognition.institute/api/v1/group/create?pid=" + $p[0] + "&gid=" + $p[1]);
    $url
    Invoke-RestMethod -Uri $url -Method Get;
}