$filePath = "d:\future\Doo\steel_front\index.html"
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# 匹配所有图片链接并修正它们
# 首先修复坦克卡图片
$content = $content -replace 'image: "https://loremflickr.com/400/400/tiger-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/tiger,tank,ww2,german,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/panther-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/panther,tank,ww2,german,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/t34-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/t34,tank,ww2,soviet,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/sherman-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/sherman,tank,ww2,american,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/pershing-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/pershing,tank,ww2,american,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/china-card-[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/chinese,tank,pla,military"'

# 修复指挥官图片
$content = $content -replace 'image: "https://loremflickr.com/400/400/american-general/400/400"', 'image: "https://loremflickr.com/400/400/general,american,military,uniform"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/russian-general/400/400"', 'image: "https://loremflickr.com/400/400/general,russian,military,uniform"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/german-general/400/400"', 'image: "https://loremflickr.com/400/400/general,german,military,uniform"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/chinese-general/400/400"', 'image: "https://loremflickr.com/400/400/general,chinese,pla,military,uniform"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/french-general/400/400"', 'image: "https://loremflickr.com/400/400/general,french,military,uniform"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/british-general/400/400"', 'image: "https://loremflickr.com/400/400/general,british,military,uniform"'

# 修复效果牌图片
$content = $content -replace 'image: "https://loremflickr.com/400/400/tank[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/tank,gun,firing,military"'

# 修复地形和时间图片
$content = $content -replace 'image: "https://loremflickr.com/400/400/battlefield[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/battlefield,tanks,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/military[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/military,battlefield,tanks"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/desert[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/desert,tanks,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/snow[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/snow,winter,tanks,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/urban[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/urban,city,tanks,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/mountain[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/mountain,hills,tanks,military"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/sunrise[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/sunrise,dawn,battlefield"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/bright[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/sunny,day,battlefield"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/sunset[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/sunset,dusk,battlefield"'
$content = $content -replace 'image: "https://loremflickr.com/400/400/night[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/night,moon,battlefield"'

# 最后，修复所有其他错误格式的图片链接
$content = $content -replace 'image: "https://loremflickr.com/400/400/[^/"]+/400/400"', 'image: "https://loremflickr.com/400/400/military,tank"'

Set-Content -Path $filePath -Value $content -Encoding UTF8

Write-Host "Image links fixed successfully!"
