import re

file_path = r'd:\future\Doo\steel_front\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

image_counter = 1

# 替换所有trae-api链接
def replace_trae(match):
    global image_counter
    result = f'https://picsum.photos/seed/card-{image_counter}/400/400'
    image_counter += 1
    return result

content = re.sub(r'https://trae-api-cn\.mchost\.guru/api/ide/v1/text_to_image\?[^"]+', replace_trae, content)

# 替换所有doubao-search链接
content = re.sub(r'https://p\d+-doubao-search-sign\.byteimg\.com/[^"]+', replace_trae, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Successfully replaced {image_counter - 1} image links!')
