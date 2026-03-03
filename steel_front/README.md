# 钢铁阵线：全球坦克风云

一个坦克主题的卡牌游戏项目。

## 文件说明

- `index.html` - 主游戏页面（HTML/CSS/JavaScript）
- `tank_data_generator.py` - Python脚本，用于生成坦克卡牌数据
- `inject_tank_cards.js` - 自动生成的JavaScript文件，包含坦克卡牌数据

## 如何运行

### 1. 直接运行游戏

直接在浏览器中打开 `index.html` 文件即可游玩。

### 2. 生成坦克卡牌数据（可选）

如果你有Python环境，可以运行以下命令重新生成卡牌数据：

```bash
# 生成JSON格式的数据
python tank_data_generator.py json

# 生成JavaScript注入脚本
python tank_data_generator.py js
```

## 项目结构

- `index.html` - 包含完整的游戏界面和逻辑
- `tank_data_generator.py` - Python数据生成脚本
- `inject_tank_cards.js` - 坦克卡牌数据
