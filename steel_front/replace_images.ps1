$filePath = "d:\future\Doo\steel_front\index.html"
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

$imageCounter = 1

# 替换所有trae-api链接
$content = $content -replace 'https://trae-api-cn\.mchost\.guru/api/ide/v1/text_to_image\?[^"]+', {
    $script:imageCounter++
    "https://picsum.photos/seed/card-$($script:imageCounter - 1)/400/400"
}

# 替换所有doubao-search链接
$content = $content -replace 'https://p\d+-doubao-search-sign\.byteimg\.com/[^"]+', {
    $script:imageCounter++
    "https://picsum.photos/seed/card-$($script:imageCounter - 1)/400/400"
}

Set-Content -Path $filePath -Value $content -Encoding UTF8

Write-Host "Successfully replaced $($imageCounter - 1) image links!"
