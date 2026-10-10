Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
Function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

[Windows.Media.Ocr.OcrEngine, Windows.Foundation.Diagnostics, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()

function Get-OcrText($path) {
    try {
        $file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($path)) ([Windows.Storage.StorageFile])
        $stream = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        $decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $ocrResult = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
        return $ocrResult.Text
    } catch {
        return ""
    }
}

$imgDir = "C:\Users\Alves King Edition\Videos\XenderDownload\phone\image\2026-10"
$allImages = Get-ChildItem $imgDir -Filter *.jpg | Sort-Object Name

Write-Host "Scanning $($allImages.Count) images for client keywords (Movitel, Standard Bank, Frelimo, Renamo, CAD, etc.)..."

$keywords = @(
    "movitel", "standard", "bank", "frelimo", "chapo", "renamo", "cad", "podemos",
    "mondlane", "venancio", "vodacom", "tmcel", "mera", "g4s", "tropigalia", "albany",
    "elaxo", "karina", "box2box", "soges", "caterpillar", "cat", "ati", "humaniti"
)

$results = @{}
$matchCount = 0

for ($i = 0; $i -lt $allImages.Count; $i++) {
    $img = $allImages[$i]
    $text = Get-OcrText $img.FullName
    if ($text) {
        $lower = $text.ToLower()
        $found = @()
        foreach ($k in $keywords) {
            if ($lower.Contains($k)) {
                $found += $k
            }
        }
        if ($found.Count -gt 0) {
            $matchCount++
            $results[$img.Name] = @{
                "file" = $img.Name
                "keywords" = $found
                "ocr" = $text.Substring(0, [Math]::Min(120, $text.Length))
            }
            Write-Host "[$matchCount] $($img.Name): $($found -join ', ') -> $($text.Replace("`n", ' ').Substring(0, [Math]::Min(60, $text.Length)))"
        }
    }
}

$outPath = Join-Path $PSScriptRoot "..\scratch_ocr_results.json"
$results | ConvertTo-Json -Depth 3 | Set-Content -Path $outPath -Encoding UTF8
Write-Host "`nCompleted! Found $matchCount matching images. Saved to $outPath"
