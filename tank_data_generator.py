#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
坦克卡牌数据生成器
用于生成《钢铁阵线：全球坦克风云》游戏的坦克卡牌数据
"""

import json
import random
from datetime import datetime

# 定义国家列表
NATIONS = {
    "germany": "德国",
    "soviet": "苏联",
    "america": "美国",
    "china": "中国",
    "france": "法国",
    "britain": "英国",
    "japan": "日本",
    "italy": "意大利",
    "poland": "波兰",
    "sweden": "瑞典",
    "israel": "以色列",
    "korea": "韩国",
    "india": "印度",
    "switzerland": "瑞士"
}

# 定义年代列表
ERAS = {
    "ww1": "一战",
    "interwar": "战间期",
    "ww2": "二战",
    "coldwar_early": "冷战早期",
    "coldwar_late": "冷战后期",
    "modern": "现代"
}

# 定义稀有度列表
RARITIES = ["common", "rare", "epic", "legendary"]

# 坦克卡牌数据
tank_cards = []

# 一战时期坦克
ww1_tanks = [
    {
        "id": "britain_mk_i",
        "name": "马克I型坦克",
        "type": "tank",
        "nation": "britain",
        "era": "ww1",
        "cost": 2,
        "attack": 2,
        "health": 3,
        "effect": {
            "type": "pioneer",
            "value": 1,
            "description": "坦克先驱：作为第一种投入实战的坦克，具有历史意义，所有友方坦克生命值+1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/72040e8adbf24180be5b3bdfebc9011c~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=%2BZ9IQ5RwYelo3wlaqqb8mJu9v8w%3D",
        "flavorText": "马克I型是世界上第一种投入实战的坦克，于1916年索姆河战役中首次亮相。",
        "rarity": "legendary"
    },
    {
        "id": "france_ft_17",
        "name": "FT-17轻型坦克",
        "type": "tank",
        "nation": "france",
        "era": "ww1",
        "cost": 1,
        "attack": 1,
        "health": 2,
        "effect": {
            "type": "revolutionary",
            "value": 1,
            "description": "革命性设计：旋转炮塔的先驱，所有后续法国坦克攻击力+1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/d384a9d83167448e90b7782dcb6476ae~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=meriif88ipkMW8KENSY0oNLmTaY%3D",
        "flavorText": "FT-17是世界上第一种安装旋转炮塔的坦克，其设计理念影响了后世所有坦克。",
        "rarity": "epic"
    },
    {
        "id": "germany_a7v",
        "name": "A7V坦克",
        "type": "tank",
        "nation": "germany",
        "era": "ww1",
        "cost": 3,
        "attack": 2,
        "health": 4,
        "effect": {
            "type": "multi_gun",
            "value": 1,
            "description": "多武器系统：攻击时对敌方所有单位造成1点溅射伤害。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "A7V是德国第一种投入实战的坦克，装备了6挺机枪和1门57毫米火炮。",
        "rarity": "rare"
    },
    {
        "id": "america_m1917",
        "name": "M1917轻型坦克",
        "type": "tank",
        "nation": "america",
        "era": "ww1",
        "cost": 1,
        "attack": 1,
        "health": 2,
        "effect": {
            "type": "licensed_production",
            "value": 1,
            "description": "授权生产：上场时可抽1张牌，本回合内无法攻击。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/9b6f619c5dc040599714d2b2a2a541ba~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XNGx6pfQXKvNwP1cSnJswpSBWq0%3D",
        "flavorText": "M1917是美国第一种量产的坦克，基于法国FT-17设计。",
        "rarity": "common"
    }
]

# 战间期坦克
interwar_tanks = [
    {
        "id": "britain_vickers_mk1",
        "name": "维克斯MK.I中型坦克",
        "type": "tank",
        "nation": "britain",
        "era": "interwar",
        "cost": 2,
        "attack": 2,
        "health": 3,
        "effect": {
            "type": "export_model",
            "value": 1,
            "description": "外贸标杆：场上每有1个不同国家的坦克，本卡攻击力+1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/c6735dd339a646acbbb1e23357ed8611~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=GGDjZ6BhBouZLUOlbgfCBWKYOHI%3D",
        "flavorText": "维克斯MK.I是英国在战间期研制的中型坦克，广泛出口到多个国家。",
        "rarity": "common"
    },
    {
        "id": "germany_pzkpfw_i",
        "name": "一号坦克",
        "type": "tank",
        "nation": "germany",
        "era": "interwar",
        "cost": 1,
        "attack": 1,
        "health": 2,
        "effect": {
            "type": "blitzkrieg_pioneer",
            "value": 1,
            "description": "闪击先驱：上场时可让1张后续打出的德国坦克燃油消耗-1。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/pgc-image/474d689f3920484fa7c382690ad1329f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=2eTDO%2BILzVd9LuUVAeXAwiE2C2g%3D",
        "flavorText": "一号坦克是德国在战间期研制的轻型坦克，是德国装甲部队的开端。",
        "rarity": "common"
    },
    {
        "id": "soviet_t26",
        "name": "T-26轻型坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "interwar",
        "cost": 2,
        "attack": 2,
        "health": 3,
        "effect": {
            "type": "mass_production",
            "value": 1,
            "description": "量产之王：可在1回合内召唤2张同名卡，每张同名卡为场上所有苏联坦克+0.5攻击力。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/d5e7f794330c927236b9f1fb1dad7d5f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XyyEJHp9kclK2wEEXp6hHDoT%2F0o%3D",
        "flavorText": "T-26是苏联在战间期研制的轻型坦克，是苏联早期装甲部队的主力。",
        "rarity": "common"
    },
    {
        "id": "france_somua_s35",
        "name": "索玛S-35坦克",
        "type": "tank",
        "nation": "france",
        "era": "interwar",
        "cost": 3,
        "attack": 3,
        "health": 4,
        "effect": {
            "type": "cast_armor",
            "value": 1,
            "description": "铸造装甲：受到的伤害-1，每回合结束时恢复1点生命值。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "索玛S-35是法国在战间期研制的中型坦克，被认为是当时最优秀的坦克之一。",
        "rarity": "rare"
    }
]

# 二战时期坦克
ww2_tanks = [
    # 德国坦克
    {
        "id": "germany_tiger_i",
        "name": "虎式坦克",
        "type": "tank",
        "nation": "germany",
        "era": "ww2",
        "cost": 6,
        "attack": 4,
        "health": 6,
        "effect": {
            "type": "armor_reinforce",
            "value": 1,
            "description": "装甲强化：受到的物理伤害-1。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "虎式坦克是二战期间德国最著名的重型坦克之一，以其强大的火力和厚重的装甲而闻名。",
        "rarity": "legendary"
    },
    {
        "id": "germany_panther",
        "name": "黑豹坦克",
        "type": "tank",
        "nation": "germany",
        "era": "ww2",
        "cost": 5,
        "attack": 4,
        "health": 5,
        "effect": {
            "type": "precision_shot",
            "value": 1,
            "description": "精准射击：无视敌方1点护甲。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/labis/da94210f40af921fda20f9a253d456a8~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=HNmiY%2Fsscr71%2FRvQJbXKy2EDehY%3D",
        "flavorText": "黑豹坦克是二战中德国最成功的中型坦克，结合了良好的火力、防护和机动性。",
        "rarity": "epic"
    },
    {
        "id": "germany_tiger_ii",
        "name": "虎王坦克",
        "type": "tank",
        "nation": "germany",
        "era": "ww2",
        "cost": 8,
        "attack": 5,
        "health": 8,
        "effect": {
            "type": "heavy_armor",
            "value": 2,
            "description": "重型装甲：受到的物理伤害-2。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/bb95eacef8504210999d4e4c34445581~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=C5yXGpS1t%2F0NgEdMDmwFzqBKeUw%3D",
        "flavorText": "虎王坦克是二战期间德国最强大的重型坦克，装备了88毫米火炮和厚重的装甲。",
        "rarity": "legendary"
    },
    {
        "id": "germany_pzkpfw_iv",
        "name": "四号坦克",
        "type": "tank",
        "nation": "germany",
        "era": "ww2",
        "cost": 4,
        "attack": 3,
        "health": 4,
        "effect": {
            "type": "workhorse",
            "value": 1,
            "description": "军马：场上每有1张德国坦克，本卡生命值+1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/c6735dd339a646acbbb1e23357ed8611~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=GGDjZ6BhBouZLUOlbgfCBWKYOHI%3D",
        "flavorText": "四号坦克是德国在二战期间产量最多的坦克之一，被称为'德国装甲部队的军马'。",
        "rarity": "common"
    },
    
    # 苏联坦克
    {
        "id": "soviet_t34_76",
        "name": "T-34/76坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "ww2",
        "cost": 4,
        "attack": 3,
        "health": 4,
        "effect": {
            "type": "sloped_armor",
            "value": 1,
            "description": "倾斜装甲：受到攻击时有30%几率闪避伤害。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/pgc-image/474d689f3920484fa7c382690ad1329f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=2eTDO%2BILzVd9LuUVAeXAwiE2C2g%3D",
        "flavorText": "T-34/76是苏联在二战期间研制的中型坦克，其倾斜装甲设计对后世坦克产生了深远影响。",
        "rarity": "epic"
    },
    {
        "id": "soviet_t34_85",
        "name": "T-34/85坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "ww2",
        "cost": 5,
        "attack": 4,
        "health": 5,
        "effect": {
            "type": "soviet_synergy",
            "value": 1,
            "description": "协同作战：场上每有1个其他苏联坦克，攻击力+1，最高可+4。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/d5e7f794330c927236b9f1fb1dad7d5f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XyyEJHp9kclK2wEEXp6hHDoT%2F0o%3D",
        "flavorText": "T-34/85是T-34系列的改进型，装备了85毫米火炮，是二战后期苏联装甲部队的主力。",
        "rarity": "epic"
    },
    {
        "id": "soviet_is_2",
        "name": "IS-2重型坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "ww2",
        "cost": 7,
        "attack": 5,
        "health": 7,
        "effect": {
            "type": "anti_heavy",
            "value": 2,
            "description": "反重甲：对敌方重型坦克伤害+3，攻击后本回合无法反击。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "IS-2是苏联在二战期间研制的重型坦克，以约瑟夫·斯大林命名，装备了122毫米火炮。",
        "rarity": "legendary"
    },
    
    # 美国坦克
    {
        "id": "america_m4_sherman",
        "name": "M4谢尔曼坦克",
        "type": "tank",
        "nation": "america",
        "era": "ww2",
        "cost": 4,
        "attack": 3,
        "health": 4,
        "effect": {
            "type": "reliability",
            "value": 1,
            "description": "可靠性：不会受到任何降低属性的效果影响，每回合结束时恢复1点生命值。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "M4谢尔曼是美国在二战期间生产最多的坦克，以其可靠性和易于维护而闻名。",
        "rarity": "common"
    },
    {
        "id": "america_m26_pershing",
        "name": "M26潘兴重型坦克",
        "type": "tank",
        "nation": "america",
        "era": "ww2",
        "cost": 6,
        "attack": 4,
        "health": 6,
        "effect": {
            "type": "anti_tiger",
            "value": 1,
            "description": "反虎式：对德国重型坦克伤害+2，受到的德国坦克伤害-1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/labis/da94210f40af921fda20f9a253d456a8~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=HNmiY%2Fsscr71%2FRvQJbXKy2EDehY%3D",
        "flavorText": "M26潘兴是美国在二战末期研制的重型坦克，专门为对抗德国的虎式和虎王坦克而设计。",
        "rarity": "rare"
    },
    
    # 英国坦克
    {
        "id": "britain_centurion",
        "name": "百夫长主战坦克",
        "type": "tank",
        "nation": "britain",
        "era": "ww2",
        "cost": 5,
        "attack": 4,
        "health": 6,
        "effect": {
            "type": "reliable",
            "value": 1,
            "description": "可靠性高：在各种地形上都能保持良好性能，不受地形减益影响。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/bb95eacef8504210999d4e4c34445581~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=C5yXGpS1t%2F0NgEdMDmwFzqBKeUw%3D",
        "flavorText": "百夫长是英国二战后研制的主战坦克，以其出色的可靠性和适应性著称。",
        "rarity": "rare"
    },
    {
        "id": "britain_churchill",
        "name": "丘吉尔步兵坦克",
        "type": "tank",
        "nation": "britain",
        "era": "ww2",
        "cost": 5,
        "attack": 3,
        "health": 7,
        "effect": {
            "type": "infantry_support",
            "value": 1,
            "description": "步兵支援：场上所有己方轻型/中型坦克生命值+1，自身受到的伤害-2。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/c6735dd339a646acbbb1e23357ed8611~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=GGDjZ6BhBouZLUOlbgfCBWKYOHI%3D",
        "flavorText": "丘吉尔步兵坦克是英国在二战期间研制的重型坦克，以其厚重的装甲和良好的越野性能而闻名。",
        "rarity": "common"
    },
    
    # 其他国家坦克
    {
        "id": "japan_type_97",
        "name": "九七式中型坦克",
        "type": "tank",
        "nation": "japan",
        "era": "ww2",
        "cost": 3,
        "attack": 2,
        "health": 3,
        "effect": {
            "type": "island_combat",
            "value": 1,
            "description": "岛屿作战：在森林/城市地形中闪避率+30%，可攻击隐藏目标。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/pgc-image/474d689f3920484fa7c382690ad1329f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=2eTDO%2BILzVd9LuUVAeXAwiE2C2g%3D",
        "flavorText": "九七式是日本在二战期间的主力坦克，主要用于亚洲战场。",
        "rarity": "common"
    },
    {
        "id": "italy_m13_40",
        "name": "M13/40中型坦克",
        "type": "tank",
        "nation": "italy",
        "era": "ww2",
        "cost": 3,
        "attack": 3,
        "health": 3,
        "effect": {
            "type": "desert_combat",
            "value": 1,
            "description": "沙漠作战：在沙漠地形中攻击力+1，机动性提升。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/d5e7f794330c927236b9f1fb1dad7d5f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XyyEJHp9kclK2wEEXp6hHDoT%2F0o%3D",
        "flavorText": "M13/40是意大利二战期间的主力坦克，主要在北非战场作战。",
        "rarity": "common"
    },
    {
        "id": "poland_7tp",
        "name": "7TP轻型坦克",
        "type": "tank",
        "nation": "poland",
        "era": "ww2",
        "cost": 2,
        "attack": 2,
        "health": 2,
        "effect": {
            "type": "swift",
            "value": 1,
            "description": "迅捷：可以快速部署，上场后立即可以攻击。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "7TP是波兰在二战前研制的轻型坦克，是当时波兰陆军的主力装备。",
        "rarity": "common"
    },
    {
        "id": "sweden_strv_m42",
        "name": "Strv m/42中型坦克",
        "type": "tank",
        "nation": "sweden",
        "era": "ww2",
        "cost": 4,
        "attack": 3,
        "health": 4,
        "effect": {
            "type": "winter_combat",
            "value": 2,
            "description": "冬季作战：在雪地地形中攻击力+2，不受雪地减速影响。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/9b6f619c5dc040599714d2b2a2a541ba~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XNGx6pfQXKvNwP1cSnJswpSBWq0%3D",
        "flavorText": "Strv m/42是瑞典在二战期间研制的中型坦克，特别适合在严寒的北欧气候中作战。",
        "rarity": "common"
    }
]

# 冷战早期坦克
coldwar_early_tanks = [
    {
        "id": "soviet_t54_55",
        "name": "T-54/55主战坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "coldwar_early",
        "cost": 5,
        "attack": 4,
        "health": 5,
        "effect": {
            "type": "global_production",
            "value": 1,
            "description": "全球量产：场上每有1张同名卡，所有苏联坦克攻击力+1，燃油消耗-1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/d384a9d83167448e90b7782dcb6476ae~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=meriif88ipkMW8KENSY0oNLmTaY%3D",
        "flavorText": "T-54/55是苏联在冷战早期研制的主战坦克，是世界上产量最多的坦克之一。",
        "rarity": "epic"
    },
    {
        "id": "america_m60",
        "name": "M60主战坦克",
        "type": "tank",
        "nation": "america",
        "era": "coldwar_early",
        "cost": 6,
        "attack": 4,
        "health": 6,
        "effect": {
            "type": "all_weather",
            "value": 1,
            "description": "全天候作战：攻击力+1，生命值+1，不受任何地形卡负面影响。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/72040e8adbf24180be5b3bdfebc9011c~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=%2BZ9IQ5RwYelo3wlaqqb8mJu9v8w%3D",
        "flavorText": "M60是美国在冷战期间研制的主战坦克，是美国陆军的主力装备之一。",
        "rarity": "rare"
    },
    {
        "id": "germany_leopard_1",
        "name": "豹1主战坦克",
        "type": "tank",
        "nation": "germany",
        "era": "coldwar_early",
        "cost": 5,
        "attack": 4,
        "health": 4,
        "effect": {
            "type": "high_mobility",
            "value": 1,
            "description": "高机动性：获得「突袭」效果，攻击时无视敌方1点装甲，闪避率+20%。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "豹1是德国在冷战早期研制的主战坦克，强调机动性和火力，是欧洲多国的主力装备。",
        "rarity": "rare"
    },
    {
        "id": "china_type_59",
        "name": "59式中型坦克",
        "type": "tank",
        "nation": "china",
        "era": "coldwar_early",
        "cost": 4,
        "attack": 3,
        "health": 5,
        "effect": {
            "type": "china_beginning",
            "value": 1,
            "description": "国产开端：场上每有1张中国坦克，本卡攻击力和生命值各+1。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "59式是中国仿制苏联T-54A的中型坦克，是中国坦克工业的开端。",
        "rarity": "common"
    },
    {
        "id": "france_amx_30",
        "name": "AMX-30主战坦克",
        "type": "tank",
        "nation": "france",
        "era": "coldwar_early",
        "cost": 6,
        "attack": 5,
        "health": 5,
        "effect": {
            "type": "french_mobility",
            "value": 2,
            "description": "高机动性：移动速度快，可以快速抢占有利地形，攻击力+2。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/labis/da94210f40af921fda20f9a253d456a8~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=HNmiY%2Fsscr71%2FRvQJbXKy2EDehY%3D",
        "flavorText": "AMX-30是法国第二代主战坦克，强调机动性和火力，适合快速机动作战。",
        "rarity": "rare"
    }
]

# 冷战后期坦克
coldwar_late_tanks = [
    {
        "id": "soviet_t72",
        "name": "T-72主战坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "coldwar_late",
        "cost": 6,
        "attack": 5,
        "health": 6,
        "effect": {
            "type": "soviet_flood",
            "value": 1,
            "description": "量产洪流：当场上有3个及以上苏联坦克时，本卡燃油消耗-2，攻击力+1。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/bb95eacef8504210999d4e4c34445581~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=C5yXGpS1t%2F0NgEdMDmwFzqBKeUw%3D",
        "flavorText": "T-72是苏联在冷战后期研制的主战坦克，是世界上产量最多的第三代主战坦克之一。",
        "rarity": "epic"
    },
    {
        "id": "america_m1_abrams",
        "name": "M1艾布拉姆斯主战坦克",
        "type": "tank",
        "nation": "america",
        "era": "coldwar_late",
        "cost": 7,
        "attack": 5,
        "health": 7,
        "effect": {
            "type": "depleted_uranium",
            "value": 1,
            "description": "贫铀装甲：受到的穿甲伤害-2，首发攻击必定命中，无视闪避。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/c6735dd339a646acbbb1e23357ed8611~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=GGDjZ6BhBouZLUOlbgfCBWKYOHI%3D",
        "flavorText": "M1艾布拉姆斯是美国在冷战后期研制的主战坦克，以其先进的火控系统和防护性能而闻名。",
        "rarity": "legendary"
    },
    {
        "id": "germany_leopard_2",
        "name": "豹2主战坦克",
        "type": "tank",
        "nation": "germany",
        "era": "coldwar_late",
        "cost": 7,
        "attack": 6,
        "health": 6,
        "effect": {
            "type": "fire_control",
            "value": 1,
            "description": "火控标杆：攻击时100%命中，每回合可额外攻击1次，无冷却。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/pgc-image/474d689f3920484fa7c382690ad1329f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=2eTDO%2BILzVd9LuUVAeXAwiE2C2g%3D",
        "flavorText": "豹2是德国在冷战后期研制的主战坦克，以其优秀的火控系统和机动性而闻名。",
        "rarity": "legendary"
    },
    {
        "id": "britain_challenger_1",
        "name": "挑战者1主战坦克",
        "type": "tank",
        "nation": "britain",
        "era": "coldwar_late",
        "cost": 7,
        "attack": 5,
        "health": 8,
        "effect": {
            "type": "chobham_armor",
            "value": 1,
            "description": "乔巴姆装甲：受到的所有伤害-3，无法被暴击。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/d5e7f794330c927236b9f1fb1dad7d5f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XyyEJHp9kclK2wEEXp6hHDoT%2F0o%3D",
        "flavorText": "挑战者1是英国在冷战后期研制的主战坦克，装备了世界领先的乔巴姆复合装甲。",
        "rarity": "rare"
    },
    {
        "id": "japan_type_74",
        "name": "74式主战坦克",
        "type": "tank",
        "nation": "japan",
        "era": "coldwar_late",
        "cost": 5,
        "attack": 4,
        "health": 5,
        "effect": {
            "type": "hydropneumatic",
            "value": 1,
            "description": "液气悬挂：可以调整车体高度，适应不同地形，攻击时有20%几率造成额外伤害。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "74式是日本自研的主战坦克，装备了先进的液气悬挂系统，适合在日本的山地地形作战。",
        "rarity": "common"
    }
]

# 现代坦克
modern_tanks = [
    # 德国现代坦克
    {
        "id": "germany_leopard_2a7",
        "name": "豹2A7主战坦克",
        "type": "tank",
        "nation": "germany",
        "era": "modern",
        "cost": 8,
        "attack": 7,
        "health": 7,
        "effect": {
            "type": "king_of_tanks",
            "value": 1,
            "description": "全能王者：受到的伤害-2，攻击力+3，无视敌方2点装甲，火控系统可锁定2个目标。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "豹2A7是德国豹2系列的最新型号，被认为是世界上最先进的主战坦克之一。",
        "rarity": "legendary"
    },
    {
        "id": "germany_kf51",
        "name": "KF-51黑豹主战坦克",
        "type": "tank",
        "nation": "germany",
        "era": "modern",
        "cost": 9,
        "attack": 8,
        "health": 8,
        "effect": {
            "type": "future_tank",
            "value": 1,
            "description": "未来坦克：攻击力+5，上场时直接摧毁敌方1个坦克，无人机协同可查看对手所有手牌。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/labis/da94210f40af921fda20f9a253d456a8~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=HNmiY%2Fsscr71%2FRvQJbXKy2EDehY%3D",
        "flavorText": "KF-51黑豹是德国最新研制的第四代主战坦克概念车，装备了130毫米主炮和先进的无人机系统。",
        "rarity": "legendary"
    },
    
    # 美国现代坦克
    {
        "id": "america_m1a2_sep_v4",
        "name": "M1A2 SEPv4艾布拉姆斯",
        "type": "tank",
        "nation": "america",
        "era": "modern",
        "cost": 8,
        "attack": 7,
        "health": 8,
        "effect": {
            "type": "information_king",
            "value": 1,
            "description": "信息化王者：每回合可额外使用1张支援卡，热成像瞄准可攻击隐藏目标。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/bb95eacef8504210999d4e4c34445581~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=C5yXGpS1t%2F0NgEdMDmwFzqBKeUw%3D",
        "flavorText": "M1A2 SEPv4是M1系列的最新型号，装备了最新的信息化系统和防护技术。",
        "rarity": "legendary"
    },
    
    # 俄罗斯现代坦克
    {
        "id": "russia_t90m",
        "name": "T-90M主战坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "modern",
        "cost": 7,
        "attack": 6,
        "health": 7,
        "effect": {
            "type": "cost_effective",
            "value": 1,
            "description": "性价比之王：燃油消耗-1，爆炸反应装甲有50%几率完全闪避穿甲弹攻击。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/c6735dd339a646acbbb1e23357ed8611~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=GGDjZ6BhBouZLUOlbgfCBWKYOHI%3D",
        "flavorText": "T-90M是俄罗斯T-90系列的最新型号，装备了先进的爆炸反应装甲和火控系统。",
        "rarity": "epic"
    },
    {
        "id": "russia_t14_armata",
        "name": "T-14阿玛塔主战坦克",
        "type": "tank",
        "nation": "soviet",
        "era": "modern",
        "cost": 9,
        "attack": 7,
        "health": 9,
        "effect": {
            "type": "unmanned_turret",
            "value": 1,
            "description": "无人炮塔：受到攻击时有50%几率减少3点伤害，主动防御系统可拦截所有来袭炮弹。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/pgc-image/474d689f3920484fa7c382690ad1329f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=2eTDO%2BILzVd9LuUVAeXAwiE2C2g%3D",
        "flavorText": "T-14阿玛塔是俄罗斯研制的第四代主战坦克，采用了无人炮塔和先进的主动防御系统。",
        "rarity": "legendary"
    },
    
    # 中国现代坦克
    {
        "id": "china_type_99a",
        "name": "99A主战坦克",
        "type": "tank",
        "nation": "china",
        "era": "modern",
        "cost": 7,
        "attack": 7,
        "health": 8,
        "effect": {
            "type": "laser_suppression",
            "value": 1,
            "description": "激光压制：可抵消1次针对本卡的支援卡效果，信息化系统让所有己方中国坦克攻击力+1。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/d5e7f794330c927236b9f1fb1dad7d5f~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XyyEJHp9kclK2wEEXp6hHDoT%2F0o%3D",
        "flavorText": "99A是中国自主研发的第三代改进型主战坦克，装备了先进的激光压制系统和信息化系统。",
        "rarity": "legendary"
    },
    {
        "id": "china_type_15",
        "name": "15式轻型坦克",
        "type": "tank",
        "nation": "china",
        "era": "modern",
        "cost": 5,
        "attack": 5,
        "health": 5,
        "effect": {
            "type": "mountain_king",
            "value": 1,
            "description": "高原山地之王：在地形卡效果下，攻击力和生命值各+2，不受高原/山地地形负面影响。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "15式是中国研制的轻型坦克，特别适合在高原和山地地形作战。",
        "rarity": "epic"
    },
    {
        "id": "china_vt4",
        "name": "VT-4主战坦克",
        "type": "tank",
        "nation": "china",
        "era": "modern",
        "cost": 6,
        "attack": 6,
        "health": 6,
        "effect": {
            "type": "export_flagship",
            "value": 1,
            "description": "外贸旗舰：可适配所有国家的协同效果，上场时可选择获得「突袭」「装甲+2」「火力+2」中的任意1个效果。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "VT-4是中国研制的外贸主战坦克，具有先进的火控系统和防护性能。",
        "rarity": "rare"
    },
    
    # 其他国家现代坦克
    {
        "id": "britain_challenger_2",
        "name": "挑战者2主战坦克",
        "type": "tank",
        "nation": "britain",
        "era": "modern",
        "cost": 8,
        "attack": 6,
        "health": 9,
        "effect": {
            "type": "chobham_ultimate",
            "value": 1,
            "description": "乔巴姆终极版：受到的所有伤害-4，全球防护最强坦克，无法被任何穿甲弹一击摧毁。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/labis/da94210f40af921fda20f9a253d456a8~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=HNmiY%2Fsscr71%2FRvQJbXKy2EDehY%3D",
        "flavorText": "挑战者2是英国挑战者系列的最新型号，装备了改进的乔巴姆装甲，防护性能极强。",
        "rarity": "legendary"
    },
    {
        "id": "france_leclerc",
        "name": "勒克莱尔主战坦克",
        "type": "tank",
        "nation": "france",
        "era": "modern",
        "cost": 8,
        "attack": 7,
        "health": 8,
        "effect": {
            "type": "autoloader",
            "value": 1,
            "description": "自动装弹机：本回合如果没有受到伤害，下回合可以再次攻击。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/9b6f619c5dc040599714d2b2a2a541ba~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=XNGx6pfQXKvNwP1cSnJswpSBWq0%3D",
        "flavorText": "勒克莱尔是法国第三代主战坦克，以其先进的自动装弹系统和数字化火控闻名。",
        "rarity": "legendary"
    },
    {
        "id": "japan_type_10",
        "name": "10式主战坦克",
        "type": "tank",
        "nation": "japan",
        "era": "modern",
        "cost": 7,
        "attack": 6,
        "health": 7,
        "effect": {
            "type": "hydropneumatic_suspension",
            "value": 1,
            "description": "液气悬挂：可以调整车体高度，本回合免疫地形卡效果。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-qvj2lq49k0/d384a9d83167448e90b7782dcb6476ae~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=meriif88ipkMW8KENSY0oNLmTaY%3D",
        "flavorText": "10式是日本最新锐的主战坦克，装备了先进的液气悬挂系统和C4I系统。",
        "rarity": "epic"
    },
    {
        "id": "korea_k2",
        "name": "K2黑豹主战坦克",
        "type": "tank",
        "nation": "korea",
        "era": "modern",
        "cost": 7,
        "attack": 7,
        "health": 7,
        "effect": {
            "type": "active_defense",
            "value": 1,
            "description": "主动防御：可拦截所有敌方炮弹，本回合内不受任何坦克攻击伤害，自动装弹机可让本回合攻击2次。"
        },
        "image": "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/72040e8adbf24180be5b3bdfebc9011c~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=%2BZ9IQ5RwYelo3wlaqqb8mJu9v8w%3D",
        "flavorText": "K2黑豹是韩国研制的第三代主战坦克，装备了先进的主动防御系统和自动装弹机。",
        "rarity": "epic"
    },
    {
        "id": "israel_merkava_mk4",
        "name": "梅卡瓦MK4主战坦克",
        "type": "tank",
        "nation": "israel",
        "era": "modern",
        "cost": 7,
        "attack": 6,
        "health": 8,
        "effect": {
            "type": "urban_king",
            "value": 1,
            "description": "城市战之王：在城市地形中生命值+3，受到的伤害-2，前置发动机可吸收伤害。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/faa326b0292a439abad7a0881de494a1~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Zz%2B7oAUXEyZu155u9OsJfCLH7G8%3D",
        "flavorText": "梅卡瓦MK4是以色列梅卡瓦系列的最新型号，采用了前置发动机设计，特别适合城市作战。",
        "rarity": "legendary"
    },
    {
        "id": "sweden_strv_122",
        "name": "Strv 122主战坦克",
        "type": "tank",
        "nation": "sweden",
        "era": "modern",
        "cost": 7,
        "attack": 6,
        "health": 8,
        "effect": {
            "type": "enhanced_protection",
            "value": 3,
            "description": "增强防护：对穿甲弹和破甲弹的防护效果提升30%。"
        },
        "image": "https://p3-doubao-search-sign.byteimg.com/labis/b81af92c727f7623183a78a2dde800e0~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1787913153&x-signature=Ilvrj%2BupiUUMPwhkmS9KN7K0wU4%3D",
        "flavorText": "Strv 122是瑞典版的豹2A5，加强了装甲防护和冬季作战能力。",
        "rarity": "epic"
    }
]

# 合并所有坦克数据
all_tanks = ww1_tanks + interwar_tanks + ww2_tanks + coldwar_early_tanks + coldwar_late_tanks + modern_tanks

def generate_tank_data():
    """生成完整的坦克卡牌数据"""
    # 为每个坦克添加一些额外的属性
    for tank in all_tanks:
        # 确保每个坦克都有必要的属性
        if 'id' not in tank:
            tank['id'] = f"{tank['nation']}_{tank['name'].lower().replace(' ', '_')}"
        
        # 添加一些随机的变化，增加游戏的多样性
        if random.random() < 0.1:  # 10%的几率有特殊变化
            tank['cost'] = max(1, tank['cost'] + random.choice([-1, 1]))
            tank['attack'] = max(1, tank['attack'] + random.choice([-1, 1]))
            tank['health'] = max(1, tank['health'] + random.choice([-1, 1]))
    
    return all_tanks

def generate_json_file():
    """生成JSON文件"""
    tank_data = generate_tank_data()
    
    # 保存为JSON文件
    with open('tank_cards.json', 'w', encoding='utf-8') as f:
        json.dump(tank_data, f, ensure_ascii=False, indent=2)
    
    print(f"成功生成 {len(tank_data)} 张坦克卡牌数据")
    print(f"数据已保存到 tank_cards.json 文件中")
    
    # 统计信息
    stats = {
        'total': len(tank_data),
        'by_nation': {},
        'by_era': {},
        'by_rarity': {}
    }
    
    for tank in tank_data:
        # 按国家统计
        nation = tank['nation']
        if nation not in stats['by_nation']:
            stats['by_nation'][nation] = 0
        stats['by_nation'][nation] += 1
        
        # 按年代统计
        era = tank['era']
        if era not in stats['by_era']:
            stats['by_era'][era] = 0
        stats['by_era'][era] += 1
        
        # 按稀有度统计
        rarity = tank['rarity']
        if rarity not in stats['by_rarity']:
            stats['by_rarity'][rarity] = 0
        stats['by_rarity'][rarity] += 1
    
    print("\n统计信息:")
    print(f"总坦克数量: {stats['total']}")
    print("\n按国家统计:")
    for nation, count in stats['by_nation'].items():
        print(f"  {NATIONS.get(nation, nation)}: {count} 辆")
    print("\n按年代统计:")
    for era, count in stats['by_era'].items():
        print(f"  {ERAS.get(era, era)}: {count} 辆")
    print("\n按稀有度统计:")
    for rarity, count in stats['by_rarity'].items():
        print(f"  {rarity}: {count} 辆")

def generate_html_injection_script():
    """生成HTML注入脚本"""
    tank_data = generate_tank_data()
    
    # 生成JavaScript代码
    js_code = f'''// 坦克卡牌数据 - 自动生成于 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
const tankCardsData = {json.dumps(tank_data, ensure_ascii=False, indent=2)};

// 将坦克卡牌数据合并到现有卡牌数据中
if (typeof cardsData !== 'undefined') {{
    // 移除现有的坦克卡牌
    const nonTankCards = cardsData.filter(card => card.type !== 'tank');
    // 合并新的坦克卡牌
    cardsData = nonTankCards.concat(tankCardsData);
    console.log('成功添加 ' + tankCardsData.length + ' 张坦克卡牌到游戏中！');}} else {{
    console.error('cardsData 未定义，无法合并坦克卡牌数据');
}}'''
    
    # 保存为JavaScript文件
    with open('inject_tank_cards.js', 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"\nHTML注入脚本已生成到 inject_tank_cards.js 文件中")
    print("使用方法:")
    print("1. 将 inject_tank_cards.js 文件复制到您的项目目录中")
    print("2. 在 index.html 文件的 <script> 标签中，在 cardsData 定义之后添加:")
    print("   <script src=\"inject_tank_cards.js\"></script>")
    print("3. 刷新页面，新的坦克卡牌将自动添加到游戏中")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1] == 'json':
            generate_json_file()
        elif sys.argv[1] == 'js':
            generate_html_injection_script()
        else:
            print("无效的参数，请使用 'json' 或 'js'")
    else:
        print("=== 坦克卡牌数据生成器 ===")
        print("用法:")
        print("  python tank_data_generator.py json  - 生成JSON文件")
        print("  python tank_data_generator.py js    - 生成HTML注入脚本")
        print("\n自动生成HTML注入脚本...")
        generate_html_injection_script()