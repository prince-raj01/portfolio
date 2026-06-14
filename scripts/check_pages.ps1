$uri = 'https://prince-group2190524.gitlab.io/prince-project/'
$max = 15
for ($i = 1; $i -le $max; $i++) {
  try {
    $r = Invoke-WebRequest -Uri $uri -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Output "OK $($r.StatusCode)"
    exit 0
  } catch {
    Write-Output ('TRY {0}: not ready' -f $i)
  }
  Start-Sleep -Seconds 20
}
Write-Output "TIMEOUT"
exit 2
