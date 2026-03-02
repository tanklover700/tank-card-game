// 卡牌数据
const cardData = {
    // 坦克卡
    tanks: [
        // 冷战早期
        // 苏联
        {
            id: 1,
            name: "T-54/55主战坦克",
            country: "苏联",
            year: 1947,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 3,
            ability: "全球量产：场上每有1张同名卡，所有苏联坦克攻击力+1，燃油消耗-1",
            abilityType: "globalProduction",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soviet%20T-54%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 2,
            name: "T-62主战坦克",
            country: "苏联",
            year: 1961,
            type: "中型",
            cost: 4,
            attack: 1,
            health: 4,
            ability: "滑膛炮先驱：无视敌方2点装甲，攻击时有50%几率造成额外2点伤害",
            abilityType: "smoothborePioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soviet%20T-62%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 3,
            name: "T-64主战坦克",
            country: "苏联",
            year: 1967,
            type: "中型",
            cost: 4,
            attack: 1,
            health: 5,
            ability: "复合装甲先驱：受到的穿甲伤害-2，首发攻击必定暴击",
            abilityType: "compositeArmorPioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soviet%20T-64%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 美国
        {
            id: 4,
            name: "M46巴顿中型坦克",
            country: "美国",
            year: 1949,
            type: "中型",
            cost: 2,
            attack: 1,
            health: 3,
            ability: "战后先锋：上场时可让1张己方二战坦克获得+2攻击力，持续2回合",
            abilityType: "postWarPioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M46%20Patton%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 5,
            name: "M48巴顿主战坦克",
            country: "美国",
            year: 1952,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "火控先驱：攻击时100%命中，无视闪避效果",
            abilityType: "fireControlPioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M48%20Patton%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 6,
            name: "M60主战坦克",
            country: "美国",
            year: 1960,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "全能主战：攻击力+1，生命值+1，不受任何地形卡负面影响",
            abilityType: "versatileMBT",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M60%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 英国
        {
            id: 7,
            name: "百夫长主战坦克",
            country: "英国",
            year: 1946,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "通用标杆：所有同阵营坦克攻击力+1，可适配所有国家的协同效果",
            abilityType: "universalBenchmark",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20Centurion%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 8,
            name: "酋长主战坦克",
            country: "英国",
            year: 1967,
            type: "重型",
            cost: 4,
            attack: 1,
            health: 6,
            ability: "重甲火力：生命值+3，攻击力+2，攻击后本回合无法移动",
            abilityType: "heavyArmorFirepower",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20Chieftain%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 德国
        {
            id: 9,
            name: "豹1主战坦克",
            country: "德国",
            year: 1965,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "高机动火控：获得「突袭」效果，攻击时无视敌方1点装甲，闪避率+20%",
            abilityType: "highMobilityFireControl",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=german%20Leopard%201%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 法国
        {
            id: 10,
            name: "AMX-30主战坦克",
            country: "法国",
            year: 1966,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "高机动：本回合可攻击2次，对中型/轻型坦克伤害+2",
            abilityType: "highMobility",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=french%20AMX-30%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 中国
        {
            id: 11,
            name: "59式中型坦克",
            country: "中国",
            year: 1959,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 3,
            ability: "国产开端：场上每有1张中国坦克，本卡攻击力和生命值各+1",
            abilityType: "domesticBeginning",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20Type%2059%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 12,
            name: "62式轻型坦克",
            country: "中国",
            year: 1963,
            type: "轻型",
            cost: 2,
            attack: 1,
            health: 2,
            ability: "南方水网：不受沼泽/森林地形负面影响，在这些地形中获得「突袭」",
            abilityType: "southernWaterNetwork",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20Type%2062%20light%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 日本
        {
            id: 13,
            name: "61式主战坦克",
            country: "日本",
            year: 1961,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "本土防御：己方基地受到攻击时，本卡可自动拦截，为基地承担所有伤害",
            abilityType: "homelandDefense",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20Type%2061%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 瑞典
        {
            id: 14,
            name: "Strv 103无炮塔坦克",
            country: "瑞典",
            year: 1967,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 5,
            ability: "无炮塔设计：正面受到的伤害-3，无法攻击侧面目标，固定火炮精度拉满",
            abilityType: "turretlessDesign",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=swedish%20Strv%20103%20turretless%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 瑞士
        {
            id: 15,
            name: "Pz.68中型坦克",
            country: "瑞士",
            year: 1971,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "永久中立：不会成为敌方支援卡的目标，场上所有主战坦克属性不会被降低",
            abilityType: "permanentNeutrality",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=swiss%20Pz.68%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 冷战后期
        // 苏联
        {
            id: 16,
            name: "T-72主战坦克",
            country: "苏联",
            year: 1973,
            type: "中型",
            cost: 4,
            attack: 2,
            health: 5,
            ability: "量产洪流：当场上有3个及以上苏联坦克时，本卡燃油消耗-2，攻击力+1",
            abilityType: "massProductionFlood",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soviet%20T-72%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 17,
            name: "T-80主战坦克",
            country: "苏联",
            year: 1976,
            type: "中型",
            cost: 5,
            attack: 2,
            health: 5,
            ability: "燃气轮机：上场即可攻击，本回合内可移动2次，攻击后仍可使用支援卡",
            abilityType: "gasTurbine",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soviet%20T-80%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 美国
        {
            id: 18,
            name: "M1艾布拉姆斯主战坦克",
            country: "美国",
            year: 1980,
            type: "重型",
            cost: 3,
            attack: 1,
            health: 6,
            ability: "贫铀装甲：受到的穿甲伤害-2，首发攻击必定命中，无视闪避",
            abilityType: "uraniumArmor",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M1%20Abrams%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 19,
            name: "M1A1艾布拉姆斯",
            country: "美国",
            year: 1985,
            type: "重型",
            cost: 6,
            attack: 2,
            health: 6,
            ability: "火力升级：无视敌方3点装甲，对所有苏联系坦克伤害+2",
            abilityType: "firepowerUpgrade",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M1A1%20Abrams%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 德国
        {
            id: 20,
            name: "豹2主战坦克",
            country: "德国",
            year: 1979,
            type: "重型",
            cost: 6,
            attack: 2,
            health: 6,
            ability: "火控标杆：攻击时100%命中，每回合可额外攻击1次，无冷却",
            abilityType: "fireControlBenchmark",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=german%20Leopard%202%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 法国
        {
            id: 21,
            name: "勒克莱尔主战坦克",
            country: "法国",
            year: 1992,
            type: "重型",
            cost: 7,
            attack: 3,
            health: 6,
            ability: "自动装弹机：本回合如果没有受到伤害，下回合可以再次攻击，数字化火控响应速度+50%",
            abilityType: "autoLoader",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=french%20Leclerc%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 英国
        {
            id: 22,
            name: "挑战者1主战坦克",
            country: "英国",
            year: 1983,
            type: "重型",
            cost: 5,
            attack: 2,
            health: 7,
            ability: "乔巴姆装甲：受到的所有伤害-3，无法被暴击",
            abilityType: "chobhamArmor",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20Challenger%201%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 日本
        {
            id: 23,
            name: "74式主战坦克",
            country: "日本",
            year: 1975,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 5,
            ability: "液气悬挂：可调整车体高度，本回合内免疫地形卡效果，攻击时有20%几率造成额外伤害",
            abilityType: "hydro pneumaticSuspension",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20Type%2074%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 中国
        {
            id: 24,
            name: "88式主战坦克",
            country: "中国",
            year: 1988,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 4,
            ability: "追赶之路：场上每有1张现代中国坦克，本卡燃油消耗-1，攻击力+1",
            abilityType: "catchingUpPath",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20Type%2088%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 以色列
        {
            id: 25,
            name: "梅卡瓦MK1主战坦克",
            country: "以色列",
            year: 1979,
            type: "重型",
            cost: 3,
            attack: 1,
            health: 8,
            ability: "乘员优先：生命值+4，受到致命伤害时有50%几率存活，剩余1点生命值",
            abilityType: "crewPriority",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=israeli%20Merkava%20MK1%20tank%20cold%20war%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 韩国
        {
            id: 26,
            name: "K1主战坦克",
            country: "韩国",
            year: 1987,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 5,
            ability: "山地作战：在山地/森林地形中，攻击力+2，闪避率+20%",
            abilityType: "mountainCombat",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20K1%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 意大利
        {
            id: 27,
            name: "OF-40主战坦克",
            country: "意大利",
            year: 1980,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 5,
            ability: "外贸专精：场上每有1个不同国家的坦克，本卡攻击力+1，最高+5",
            abilityType: "exportSpecialization",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=italian%20OF-40%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 现代
        // 德国
        {
            id: 28,
            name: "豹2A7主战坦克",
            country: "德国",
            year: 2014,
            type: "重型",
            cost: 9,
            attack: 5,
            health: 7,
            ability: "全能王者：受到的伤害-2，攻击力+3，无视敌方2点装甲，火控系统可锁定2个目标",
            abilityType: "全能王者",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=german%20Leopard%202A7%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 29,
            name: "豹2A8主战坦克",
            country: "德国",
            year: 2025,
            type: "重型",
            cost: 9,
            attack: 5,
            health: 8,
            ability: "巅峰防护：受到的所有伤害-3，主动防御系统可抵消1次敌方支援卡/坦克攻击，每回合1次",
            abilityType: "peakProtection",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=german%20Leopard%202A8%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 美国
        {
            id: 30,
            name: "M1A2 SEPv4艾布拉姆斯",
            country: "美国",
            year: 2021,
            type: "重型",
            cost: 10,
            attack: 6,
            health: 8,
            ability: "信息化王者：每回合可额外使用1张支援卡，热成像瞄准可攻击隐藏目标，贫铀装甲正面抗穿等效1200mm",
            abilityType: "informationKing",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20M1A2%20SEPv4%20Abrams%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 俄罗斯
        {
            id: 31,
            name: "T-90M主战坦克",
            country: "俄罗斯",
            year: 2020,
            type: "重型",
            cost: 8,
            attack: 4,
            health: 7,
            ability: "性价比之王：燃油消耗-1，爆炸反应装甲有50%几率完全闪避穿甲弹攻击，多燃料发动机低温启动不受限制",
            abilityType: "costPerformanceKing",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=russian%20T-90M%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 32,
            name: "T-14阿玛塔主战坦克",
            country: "俄罗斯",
            year: 2015,
            type: "重型",
            cost: 9,
            attack: 5,
            health: 10,
            ability: "无人炮塔：受到攻击时有50%几率减少3点伤害，主动防御系统可拦截所有来袭炮弹，乘员舱装甲强化，生命值+5",
            abilityType: "unmannedTurret",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=russian%20T-14%20Armata%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 中国
        {
            id: 33,
            name: "99A主战坦克",
            country: "中国",
            year: 2015,
            type: "重型",
            cost: 9,
            attack: 5,
            health: 7,
            ability: "激光压制：可抵消1次针对本卡的支援卡效果，信息化系统让所有己方中国坦克攻击力+1，正面复合装甲抗穿等效1000mm",
            abilityType: "laserSuppression",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20Type%2099A%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 34,
            name: "15式轻型坦克",
            country: "中国",
            year: 2018,
            type: "轻型",
            cost: 7,
            attack: 3,
            health: 4,
            ability: "高原山地之王：在地形卡效果下，攻击力和生命值各+2，不受高原/山地地形负面影响，液气悬挂适配全地形",
            abilityType: "plateauMountainKing",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20Type%2015%20light%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 35,
            name: "VT-4主战坦克",
            country: "中国",
            year: 2017,
            type: "重型",
            cost: 8,
            attack: 4,
            health: 6,
            ability: "外贸旗舰：可适配所有国家的协同效果，上场时可选择获得「突袭」「装甲+2」「火力+2」中的任意1个效果",
            abilityType: "exportFlagship",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20VT-4%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 英国
        {
            id: 36,
            name: "挑战者2主战坦克",
            country: "英国",
            year: 1998,
            type: "重型",
            cost: 7,
            attack: 3,
            health: 9,
            ability: "乔巴姆终极版：受到的所有伤害-4，全球防护最强坦克，无法被任何穿甲弹一击摧毁",
            abilityType: "chobhamUltimate",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20Challenger%202%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 日本
        {
            id: 37,
            name: "10式主战坦克",
            country: "日本",
            year: 2012,
            type: "中型",
            cost: 8,
            attack: 4,
            health: 5,
            ability: "轻量化先锋：液气悬挂可免疫地形卡效果，C4I系统可让所有己方日本坦克闪避率+20%，可快速部署",
            abilityType: "lightweightPioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20Type%2010%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 以色列
        {
            id: 38,
            name: "梅卡瓦MK4主战坦克",
            country: "以色列",
            year: 2004,
            type: "重型",
            cost: 8,
            attack: 4,
            health: 8,
            ability: "城市战之王：在城市地形中生命值+3，受到的伤害-2，前置发动机可吸收伤害，乘员存活率100%，受到致命伤害必定存活1回合",
            abilityType: "urbanWarfareKing",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=israeli%20Merkava%20MK4%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 韩国
        {
            id: 39,
            name: "K2黑豹主战坦克",
            country: "韩国",
            year: 2014,
            type: "重型",
            cost: 9,
            attack: 5,
            health: 6,
            ability: "主动防御：可拦截所有敌方炮弹，本回合内不受任何坦克攻击伤害，自动装弹机可让本回合攻击2次",
            abilityType: "activeDefense",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20K2%20Black%20Panther%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 德国
        {
            id: 40,
            name: "KF-51黑豹主战坦克",
            country: "德国",
            year: 2022,
            type: "重型",
            cost: 9,
            attack: 6,
            health: 6,
            ability: "未来坦克：攻击力+5，燃油消耗9点，上场时直接摧毁敌方1个坦克，无人机协同可查看对手所有手牌，主动防御全覆盖",
            abilityType: "futureTank",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=german%20KF-51%20Panther%20tank%20future%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 法国
        {
            id: 41,
            name: "勒克莱尔XLR主战坦克",
            country: "法国",
            year: 2022,
            type: "重型",
            cost: 8,
            attack: 4,
            health: 6,
            ability: "数字化先驱：战场管理系统可让所有己方坦克攻击冷却-1，15秒内完成搜索-锁定-击毁循环，每回合可多抽1张牌",
            abilityType: "digitalPioneer",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=french%20Leclerc%20XLR%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 印度
        {
            id: 42,
            name: "阿琼MK2主战坦克",
            country: "印度",
            year: 2011,
            type: "重型",
            cost: 7,
            attack: 3,
            health: 6,
            ability: "国产雄心：生命值+3，攻击力+1，场上每有1张不同国家的坦克，本卡获得1个随机增益效果",
            abilityType: "domesticAmbition",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=indian%20Arjun%20MK2%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        },
        // 瑞典
        {
            id: 43,
            name: "Strv 122主战坦克",
            country: "瑞典",
            year: 1997,
            type: "重型",
            cost: 8,
            attack: 4,
            health: 7,
            ability: "北欧防护：对穿甲弹和破甲弹的防护效果提升30%，受到的伤害-3，冬季地形中全属性+1",
            abilityType: "nordicProtection",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=swedish%20Strv%20122%20tank%20modern%20military%20vehicle%20realistic&image_size=square_hd"
        }
    ],
    
    // 支援卡
    support: [
        // 进攻型
        {
            id: 101,
            name: "炮火覆盖",
            type: "进攻型",
            cost: 4,
            effect: "对敌方所有坦克造成2点伤害",
            effectType: "aoeDamage",
            value: 2
        },
        {
            id: 102,
            name: "空中支援",
            type: "进攻型",
            cost: 5,
            effect: "对单个目标造成4点伤害",
            effectType: "singleDamage",
            value: 4
        },
        // 防御型
        {
            id: 103,
            name: "阵地工事",
            type: "防御型",
            cost: 3,
            effect: "给己方所有坦克 + 2生命值",
            effectType: "aoeHeal",
            value: 2
        },
        {
            id: 104,
            name: "装甲抢修",
            type: "防御型",
            cost: 4,
            effect: "恢复己方1个坦克3点生命值",
            effectType: "singleHeal",
            value: 3
        },
        // 辅助型
        {
            id: 105,
            name: "后勤补给",
            type: "辅助型",
            cost: 3,
            effect: "抽2张牌",
            effectType: "drawCards",
            value: 2
        },
        {
            id: 106,
            name: "燃油补给",
            type: "辅助型",
            cost: 4,
            effect: "本回合额外获得2点燃油",
            effectType: "fuelGain",
            value: 2
        }
    ],
    
    // 地形卡
    terrain: [
        {
            id: 201,
            name: "平原战场",
            cost: 2,
            effect: "所有中型坦克攻击力 + 1",
            effectType: "mediumAttack",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=open%20plain%20battlefield%20military%20terrain%20realistic&image_size=square_hd"
        },
        {
            id: 202,
            name: "城市废墟",
            cost: 2,
            effect: "所有重型坦克生命值 + 1",
            effectType: "heavyHealth",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=urban%20ruins%20battlefield%20destroyed%20city%20realistic&image_size=square_hd"
        },
        {
            id: 203,
            name: "沙漠地带",
            cost: 2,
            effect: "所有轻型坦克获得「突袭」",
            effectType: "lightRush",
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=desert%20battlefield%20sandy%20terrain%20military%20realistic&image_size=square_hd"
        },
        {
            id: 204,
            name: "埃塞俄比亚高原",
            cost: 3,
            effect: "所有轻型坦克攻击力 + 2，所有坦克生命值 + 1",
            effectType: "plateauBonus",
            value: 2,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ethiopian%20plateau%20high%20altitude%20mountainous%20terrain%20tank%20warfare&image_size=square_hd"
        },
        {
            id: 205,
            name: "欧亚平原",
            cost: 2,
            effect: "所有中型坦克攻击力 + 2，所有轻型坦克攻击力 + 1",
            effectType: "eurasianPlain",
            value: 2,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=eurasian%20plain%20vast%20open%20terrain%20tank%20warfare&image_size=square_hd"
        },
        {
            id: 206,
            name: "西欧平原",
            cost: 2,
            effect: "所有坦克攻击力 + 1，所有重型坦克生命值 + 1",
            effectType: "westernEuropeanPlain",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=western%20european%20plain%20rolling%20hills%20tank%20warfare&image_size=square_hd"
        }
    ],
    
    // 指挥官卡
    commander: [
        {
            id: 301,
            name: "巴顿将军",
            country: "美国",
            health: 25,
            ability: "装甲冲锋：每回合可让1个美国坦克攻击力 + 2（本回合有效）",
            abilityType: "armorCharge"
        },
        {
            id: 302,
            name: "朱可夫元帅",
            country: "苏联",
            health: 25,
            ability: "钢铁洪流：每回合可让1个苏联坦克生命值 + 2（本回合有效）",
            abilityType: "steelFlood"
        },
        {
            id: 303,
            name: "隆美尔元帅",
            country: "德国",
            health: 25,
            ability: "沙漠之狐：每回合可让1个德国坦克获得「突袭」（本回合有效）",
            abilityType: "desertFox"
        },
        {
            id: 304,
            name: "彭德怀元帅",
            country: "中国",
            health: 25,
            ability: "游击战：每回合可让1个中国坦克移动到任意位置",
            abilityType: "guerrillaWarfare"
        }
    ]
};

// 游戏状态
let gameState = {
    turnCount: 1,
    currentTurn: "player",
    player: {
        health: 30,
        fuel: 1,
        deck: [],
        hand: [],
        field: [],
        activeTerrain: null,
        commander: null
    },
    opponent: {
        health: 30,
        fuel: 1,
        deck: [],
        hand: [],
        field: [],
        activeTerrain: null,
        commander: null
    },
    selectedCard: null
};

// 初始化游戏
function initGame() {
    // 初始化玩家和对手的卡组
    initDecks();
    
    // 初始化玩家和对手的手牌
    drawInitialCards();
    
    // 选择指挥官
    selectCommanders();
    
    // 渲染游戏界面
    renderGame();
}

// 初始化卡组
function initDecks() {
    // 玩家卡组（德国混合坦克流）
    gameState.player.deck = [
        cardData.tanks[0], // I号坦克（1费）
        cardData.tanks[0], // I号坦克（1费）
        cardData.tanks[1], // II号坦克（2费）
        cardData.tanks[1], // II号坦克（2费）
        cardData.tanks[2], // 豹式坦克（4费）
        cardData.tanks[3], // 虎式坦克（6费）
        cardData.support[0], // 炮火覆盖
        cardData.support[2], // 阵地工事
        cardData.terrain[1], // 城市废墟
        cardData.terrain[1]  // 城市废墟
    ];
    
    // 对手卡组（苏联混合坦克流）
    gameState.opponent.deck = [
        cardData.tanks[4], // T-26（1费）
        cardData.tanks[4], // T-26（1费）
        cardData.tanks[5], // T-34-76（3费）
        cardData.tanks[5], // T-34-76（3费）
        cardData.tanks[6], // T-34-85（4费）
        cardData.tanks[7], // KV-1（5费）
        cardData.support[1], // 空中支援
        cardData.support[3], // 装甲抢修
        cardData.terrain[0], // 平原战场
        cardData.terrain[0]  // 平原战场
    ];
    
    // 洗牌
    shuffleDeck(gameState.player.deck);
    shuffleDeck(gameState.opponent.deck);
}

// 洗牌函数
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// 抽取初始手牌
function drawInitialCards() {
    // 玩家抽取6张牌
    for (let i = 0; i < 6; i++) {
        if (gameState.player.deck.length > 0) {
            gameState.player.hand.push(gameState.player.deck.pop());
        }
    }
    
    // 对手抽取6张牌
    for (let i = 0; i < 6; i++) {
        if (gameState.opponent.deck.length > 0) {
            gameState.opponent.hand.push(gameState.opponent.deck.pop());
        }
    }
}

// 选择指挥官
function selectCommanders() {
    // 玩家选择隆美尔元帅（德国）
    gameState.player.commander = cardData.commander[2];
    
    // 对手选择朱可夫元帅（苏联）
    gameState.opponent.commander = cardData.commander[1];
}

// 渲染游戏界面
function renderGame() {
    // 渲染玩家信息
    document.getElementById('player-health').textContent = gameState.player.health;
    document.getElementById('player-fuel').textContent = gameState.player.fuel;
    document.getElementById('player-commander').textContent = gameState.player.commander.name;
    
    // 渲染对手信息
    document.getElementById('opponent-health').textContent = gameState.opponent.health;
    document.getElementById('opponent-fuel').textContent = gameState.opponent.fuel;
    document.getElementById('opponent-commander').textContent = gameState.opponent.commander.name;
    
    // 渲染回合信息
    document.getElementById('turn-info').textContent = gameState.currentTurn === "player" ? "你的回合" : "对手的回合";
    document.getElementById('turn-count').textContent = `回合 ${gameState.turnCount}`;
    
    // 渲染玩家手牌
    const playerHandElement = document.getElementById('player-hand');
    playerHandElement.innerHTML = '';
    gameState.player.hand.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        playerHandElement.appendChild(cardElement);
    });
    
    // 渲染玩家场上坦克
    const playerFieldElement = document.getElementById('player-field');
    playerFieldElement.innerHTML = '';
    gameState.player.field.forEach((card, index) => {
        const cardElement = createCardElement(card, index, true);
        playerFieldElement.appendChild(cardElement);
    });
    
    // 渲染对手场上坦克
    const opponentFieldElement = document.getElementById('opponent-field');
    opponentFieldElement.innerHTML = '';
    gameState.opponent.field.forEach((card, index) => {
        const cardElement = createCardElement(card, index, true, false);
        opponentFieldElement.appendChild(cardElement);
    });
    
    // 渲染对手手牌数量
    const opponentHandElement = document.getElementById('opponent-hand');
    opponentHandElement.innerHTML = '';
    for (let i = 0; i < gameState.opponent.hand.length; i++) {
        const cardBack = document.createElement('div');
        cardBack.className = 'card card-back';
        opponentHandElement.appendChild(cardBack);
    }
    
    // 渲染地形效果
    renderTerrainEffects();
    
    // 禁用/启用结束回合按钮
    document.getElementById('end-turn-btn').disabled = gameState.currentTurn !== "player";
}

// 渲染地形效果
function renderTerrainEffects() {
    // 渲染玩家地形效果
    const playerTerrainElement = document.getElementById('player-terrain');
    playerTerrainElement.innerHTML = '';
    if (gameState.player.activeTerrain) {
        const terrainCard = createCardElement(gameState.player.activeTerrain, 0, false, true);
        playerTerrainElement.appendChild(terrainCard);
    }
    
    // 渲染对手地形效果
    const opponentTerrainElement = document.getElementById('opponent-terrain');
    opponentTerrainElement.innerHTML = '';
    if (gameState.opponent.activeTerrain) {
        const terrainCard = createCardElement(gameState.opponent.activeTerrain, 0, false, false);
        opponentTerrainElement.appendChild(terrainCard);
    }
}

// 创建卡牌元素
function createCardElement(card, index, isField = false, isPlayer = true) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${getCardType(card)}`;
    cardElement.dataset.index = index;
    
    if (card.type) {
        // 坦克卡
        cardElement.innerHTML = `
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}">
            </div>
            <div class="card-name">${card.name}</div>
            <div class="card-country">${card.country}</div>
            <div class="card-stats">
                <span class="cost">${card.cost}</span>
                <span class="attack">${card.attack}</span>
                <span class="health">${card.health}</span>
            </div>
            <div class="card-ability">${card.ability}</div>
        `;
        
        if (isField && isPlayer) {
            // 场上的玩家坦克可以点击选择攻击
            cardElement.addEventListener('click', () => selectCardForAttack(index));
        } else if (!isField && isPlayer) {
            // 手牌中的卡牌可以点击出牌
            cardElement.addEventListener('click', () => playCard(index));
        }
    } else if (card.effect) {
        // 地形卡
        cardElement.innerHTML = `
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}">
            </div>
            <div class="card-name">${card.name}</div>
            <div class="card-stats">
                <span class="cost">${card.cost}</span>
                <span class="duration">${card.duration}</span>
            </div>
            <div class="card-effect">${card.effect}</div>
        `;
        
        if (!isField && isPlayer) {
            // 手牌中的地形卡可以点击出牌
            cardElement.addEventListener('click', () => playCard(index));
        }
    } else if (card.type === undefined && card.effect === undefined) {
        // 支援卡
        cardElement.innerHTML = `
            <div class="card-name">${card.name}</div>
            <div class="card-type">${card.type}</div>
            <div class="card-stats">
                <span class="cost">${card.cost}</span>
            </div>
            <div class="card-effect">${card.effect}</div>
        `;
        
        if (!isField && isPlayer) {
            // 手牌中的支援卡可以点击出牌
            cardElement.addEventListener('click', () => playCard(index));
        }
    }
    
    return cardElement;
}

// 获取卡牌类型
function getCardType(card) {
    if (card.type) return 'tank';
    if (card.effect && card.duration) return 'terrain';
    if (card.effect) return 'support';
    if (card.health === 25) return 'commander';
    return '';
}

// 选择卡牌进行攻击
function selectCardForAttack(index) {
    if (gameState.currentTurn !== "player") return;
    
    // 取消之前的选择
    if (gameState.selectedCard && gameState.selectedCard.index === index) {
        gameState.selectedCard = null;
        renderGame();
        return;
    }
    
    // 选择新的卡牌
    gameState.selectedCard = {
        index: index,
        card: gameState.player.field[index]
    };
    
    // 高亮选中的卡牌
    renderGame();
}

// 攻击目标
function attackTarget(index) {
    if (gameState.selectedCard === null) return;
    
    const attacker = gameState.player.field[gameState.selectedCard.index];
    const target = gameState.opponent.field[index];
    
    // 计算伤害
    let damage = attacker.attack;
    
    // 应用技能效果
    // 虎式坦克的装甲强化
    if (target.abilityType === 'armor') {
        damage = Math.max(1, damage - 1);
    }
    // 豹式坦克的精准射击
    if (attacker.abilityType === 'precision') {
        damage += 1; // 无视1点护甲
    }
    // T-34-85的协同作战
    if (attacker.abilityType === 'synergy') {
        const sovietTanks = gameState.player.field.filter(card => card.country === '苏联').length;
        damage += sovietTanks - 1; // 减去自己
    }
    // KV-1的钢铁壁垒
    if (target.abilityType === 'barrier' && !target.barrierBroken) {
        damage = 0;
        target.barrierBroken = true;
    }
    // 99A的复合装甲
    if (target.abilityType === 'compositeArmor') {
        if (!target.damageReductionCount) target.damageReductionCount = 0;
        if (target.damageReductionCount < 3) {
            damage = Math.max(1, damage - 1);
            target.damageReductionCount++;
        }
    }
    // T-34-76的机动防御
    if (target.abilityType === 'mobileDefense') {
        if (Math.random() > 0.5) {
            damage = Math.max(1, damage - 1);
            alert(`${target.name}触发机动防御，减少1点伤害！`);
        }
    }
    // 意大利M13/40坦克的沙漠适应
    if (attacker.abilityType === 'desertAdaptation' && gameState.player.activeTerrain && gameState.player.activeTerrain.name === '沙漠地带') {
        damage += 1;
        attacker.health += 1;
        alert(`${attacker.name}在沙漠地带获得适应性加成！`);
    }
    // 以色列梅卡瓦MK4的主动防御
    if (target.abilityType === 'activeDefense') {
        if (Math.random() < 0.3) {
            damage = 0;
            alert(`${target.name}触发主动防御，完全闪避伤害！`);
        }
    }
    // 印度阿琼主战坦克的本土优势
    if (attacker.abilityType === 'homeAdvantage') {
        const indianTanks = gameState.player.field.filter(card => card.country === '印度' && card !== attacker).length;
        if (indianTanks > 0) {
            damage += indianTanks;
            alert(`${attacker.name}获得本土优势，攻击力提升！`);
        }
    }
    // 韩国K2黑豹的先进火控
    if (attacker.abilityType === 'advancedFireControl') {
        if (Math.random() > 0.5) {
            damage += 1;
            alert(`${attacker.name}触发先进火控，造成额外伤害！`);
        }
    }
    // 俄罗斯T-90的反应装甲
    if (target.abilityType === 'reactiveArmor' && !target.reactiveArmorUsed) {
        if (attacker.abilityType === 'armorPiercing') {
            damage = 0;
            target.reactiveArmorUsed = true;
            alert(`${target.name}触发反应装甲，抵消穿甲伤害！`);
        }
    }
    // 乌克兰T-84的焊接炮塔
    if (target.abilityType === 'weldedTurret') {
        damage = Math.max(1, damage - 1);
        alert(`${target.name}的焊接炮塔减少1点伤害！`);
    }
    
    // 应用地形效果
    if (gameState.player.activeTerrain) {
        const terrain = gameState.player.activeTerrain;
        if (terrain.effectType === 'mediumAttack' && attacker.type === '中型') {
            damage += terrain.value;
        } else if (terrain.effectType === 'heavyHealth' && attacker.type === '重型') {
            attacker.health += terrain.value;
        } else if (terrain.effectType === 'lightRush' && attacker.type === '轻型') {
            // 突袭效果：可以在同一回合攻击
        } else if (terrain.effectType === 'plateauBonus') {
            if (attacker.type === '轻型') {
                damage += terrain.value;
            }
            // 所有坦克生命值 + 1
            gameState.player.field.forEach(tank => {
                tank.health += 1;
            });
        } else if (terrain.effectType === 'eurasianPlain') {
            if (attacker.type === '中型') {
                damage += terrain.value;
            } else if (attacker.type === '轻型') {
                damage += 1;
            }
        } else if (terrain.effectType === 'westernEuropeanPlain') {
            damage += terrain.value;
            if (attacker.type === '重型') {
                attacker.health += 1;
            }
        }
    }
    
    if (gameState.opponent.activeTerrain) {
        const terrain = gameState.opponent.activeTerrain;
        if (terrain.effectType === 'mediumAttack' && target.type === '中型') {
            // 目标攻击力提升，但不影响当前防御
        } else if (terrain.effectType === 'heavyHealth' && target.type === '重型') {
            target.health += terrain.value;
        } else if (terrain.effectType === 'lightRush' && target.type === '轻型') {
            // 突袭效果：可以在同一回合攻击
        } else if (terrain.effectType === 'plateauBonus') {
            if (target.type === '轻型') {
                // 目标攻击力提升，但不影响当前防御
            }
            // 所有坦克生命值 + 1
            gameState.opponent.field.forEach(tank => {
                tank.health += 1;
            });
        } else if (terrain.effectType === 'eurasianPlain') {
            if (target.type === '中型') {
                // 目标攻击力提升，但不影响当前防御
            } else if (target.type === '轻型') {
                // 目标攻击力提升，但不影响当前防御
            }
        } else if (terrain.effectType === 'westernEuropeanPlain') {
            // 目标攻击力提升，但不影响当前防御
            if (target.type === '重型') {
                target.health += 1;
            }
        }
    }
    
    // 应用伤害
    target.health -= damage;
    attacker.health -= target.attack;
    
    // 检查是否有坦克被摧毁
    if (target.health <= 0) {
        gameState.opponent.field.splice(index, 1);
    }
    if (attacker.health <= 0) {
        gameState.player.field.splice(gameState.selectedCard.index, 1);
    }
    
    // 重置选择
    gameState.selectedCard = null;
    
    // 检查游戏结束条件
    checkGameOver();
    
    // 渲染游戏界面
    renderGame();
}

// 出牌
function playCard(index) {
    const card = gameState.player.hand[index];
    
    // 检查燃油是否足够
    if (card.cost > gameState.player.fuel) {
        alert('燃油不足！');
        return;
    }
    
    // 消耗燃油
    gameState.player.fuel -= card.cost;
    
    // 从手牌中移除卡牌
    gameState.player.hand.splice(index, 1);
    
    // 处理不同类型的卡牌
    if (card.type) {
        // 坦克卡
        gameState.player.field.push(card);
        
        // 触发坦克技能
        if (card.abilityType === 'mobility') {
            // M3斯图亚特的高机动性：上场时可立即攻击
            alert('M3斯图亚特上场，可立即攻击！');
        } else if (card.abilityType === 'scout') {
            // 侦察：上场时抽1张牌
            if (gameState.player.deck.length > 0) {
                gameState.player.hand.push(gameState.player.deck.pop());
                alert(`${card.name}上场，抽1张牌！`);
            }
        } else if (card.abilityType === 'quickDeploy') {
            // 快速部署：本回合上场后获得+1攻击力
            card.attack += 1;
            alert(`${card.name}上场，获得+1攻击力！`);
        } else if (card.abilityType === 'cluster') {
            // 集群作战：场上每有1个其他苏联坦克，生命值 + 1
            const sovietTanks = gameState.player.field.filter(t => t.country === '苏联' && t !== card).length;
            if (sovietTanks > 0) {
                card.health += sovietTanks;
                alert(`${card.name}上场，获得${sovietTanks}点生命值！`);
            }
        }
    } else if (card.effect) {
        if (card.duration) {
            // 地形卡
            gameState.player.activeTerrain = card;
            alert(`地形：${card.name} 生效，持续${card.duration}回合`);
        } else {
            // 支援卡
            handleSupportCard(card);
        }
    }
    
    // 渲染游戏界面
    renderGame();
}

// 处理支援卡效果
function handleSupportCard(card) {
    switch (card.effectType) {
        case 'aoeDamage':
            // 对敌方所有坦克造成伤害
            gameState.opponent.field.forEach(target => {
                target.health -= card.value;
            });
            alert(`炮火覆盖！对敌方所有坦克造成${card.value}点伤害！`);
            break;
        case 'singleDamage':
            // 对单个目标造成伤害
            if (gameState.opponent.field.length > 0) {
                const targetIndex = prompt('请选择要攻击的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < gameState.opponent.field.length) {
                    gameState.opponent.field[targetIndex].health -= card.value;
                    alert(`空中支援！对目标造成${card.value}点伤害！`);
                }
            }
            break;
        case 'aoeHeal':
            // 给己方所有坦克加血
            gameState.player.field.forEach(tank => {
                tank.health += card.value;
            });
            alert(`阵地工事！给己方所有坦克恢复${card.value}点生命值！`);
            break;
        case 'singleHeal':
            // 给单个坦克加血
            if (gameState.player.field.length > 0) {
                const targetIndex = prompt('请选择要治疗的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < gameState.player.field.length) {
                    gameState.player.field[targetIndex].health += card.value;
                    alert(`装甲抢修！给目标恢复${card.value}点生命值！`);
                }
            }
            break;
        case 'drawCards':
            // 抽牌
            for (let i = 0; i < card.value; i++) {
                if (gameState.player.deck.length > 0) {
                    gameState.player.hand.push(gameState.player.deck.pop());
                }
            }
            alert(`后勤补给！抽${card.value}张牌！`);
            break;
        case 'fuelGain':
            // 获得燃油
            gameState.player.fuel += card.value;
            alert(`燃油补给！获得${card.value}点燃油！`);
            break;
    }
    
    // 检查是否有坦克被摧毁
    gameState.opponent.field = gameState.opponent.field.filter(tank => tank.health > 0);
    
    // 检查游戏结束条件
    checkGameOver();
}

// 结束回合
function endTurn() {
    // 处理59式坦克的持久作战技能
    gameState.player.field.forEach(tank => {
        if (tank.abilityType === 'endurance') {
            tank.health += 1;
            alert(`${tank.name}触发持久作战，恢复1点生命值！`);
        }
    });
    
    gameState.opponent.field.forEach(tank => {
        if (tank.abilityType === 'endurance') {
            tank.health += 1;
        }
    });
    
    // 处理地形效果持续时间
    if (gameState.player.activeTerrain) {
        gameState.player.activeTerrain.duration--;
        if (gameState.player.activeTerrain.duration <= 0) {
            gameState.player.activeTerrain = null;
            alert('玩家地形效果结束');
        }
    }
    if (gameState.opponent.activeTerrain) {
        gameState.opponent.activeTerrain.duration--;
        if (gameState.opponent.activeTerrain.duration <= 0) {
            gameState.opponent.activeTerrain = null;
            alert('对手地形效果结束');
        }
    }
    
    // 切换当前回合
    gameState.currentTurn = gameState.currentTurn === "player" ? "opponent" : "player";
    
    // 增加回合数
    gameState.turnCount++;
    
    // 恢复燃油
    if (gameState.currentTurn === "player") {
        gameState.player.fuel = Math.min(gameState.turnCount, 10);
        // 玩家抽牌
        if (gameState.player.deck.length > 0) {
            gameState.player.hand.push(gameState.player.deck.pop());
        }
    } else {
        gameState.opponent.fuel = Math.min(gameState.turnCount, 10);
        // 对手抽牌
        if (gameState.opponent.deck.length > 0) {
            gameState.opponent.hand.push(gameState.opponent.deck.pop());
        }
        // 对手AI行动
        opponentTurn();
    }
    
    // 渲染游戏界面
    renderGame();
}

// 对手回合AI
function opponentTurn() {
    // 简单AI：尝试出最高费用的卡牌
    let highestCostCardIndex = -1;
    let highestCost = -1;
    
    for (let i = 0; i < gameState.opponent.hand.length; i++) {
        const card = gameState.opponent.hand[i];
        if (card.cost <= gameState.opponent.fuel && card.cost > highestCost) {
            highestCost = card.cost;
            highestCostCardIndex = i;
        }
    }
    
    if (highestCostCardIndex !== -1) {
        const card = gameState.opponent.hand[highestCostCardIndex];
        gameState.opponent.fuel -= card.cost;
        gameState.opponent.hand.splice(highestCostCardIndex, 1);
        
        if (card.type) {
            // 坦克卡
            gameState.opponent.field.push(card);
            alert(`对手出了 ${card.name}`);
        } else if (card.effect) {
            if (card.duration) {
                // 地形卡
                gameState.opponent.activeTerrain = card;
                alert(`对手使用了地形卡：${card.name}`);
            } else {
                // 支援卡
                handleOpponentSupportCard(card);
            }
        }
    }
    
    // 对手攻击
    opponentAttack();
    
    // 结束对手回合
    setTimeout(() => {
        endTurn();
    }, 1000);
}

// 处理对手支援卡效果
function handleOpponentSupportCard(card) {
    switch (card.effectType) {
        case 'aoeDamage':
            // 对我方所有坦克造成伤害
            gameState.player.field.forEach(tank => {
                tank.health -= card.value;
            });
            alert(`对手使用了炮火覆盖！对我方所有坦克造成${card.value}点伤害！`);
            break;
        case 'singleDamage':
            // 对我方单个坦克造成伤害
            if (gameState.player.field.length > 0) {
                const targetIndex = Math.floor(Math.random() * gameState.player.field.length);
                gameState.player.field[targetIndex].health -= card.value;
                alert(`对手使用了空中支援！对${gameState.player.field[targetIndex].name}造成${card.value}点伤害！`);
            }
            break;
        case 'aoeHeal':
            // 给对手所有坦克加血
            gameState.opponent.field.forEach(tank => {
                tank.health += card.value;
            });
            alert(`对手使用了阵地工事！给所有坦克恢复${card.value}点生命值！`);
            break;
        case 'singleHeal':
            // 给对手单个坦克加血
            if (gameState.opponent.field.length > 0) {
                const targetIndex = Math.floor(Math.random() * gameState.opponent.field.length);
                gameState.opponent.field[targetIndex].health += card.value;
                alert(`对手使用了装甲抢修！给${gameState.opponent.field[targetIndex].name}恢复${card.value}点生命值！`);
            }
            break;
        case 'drawCards':
            // 对手抽牌
            for (let i = 0; i < card.value; i++) {
                if (gameState.opponent.deck.length > 0) {
                    gameState.opponent.hand.push(gameState.opponent.deck.pop());
                }
            }
            alert(`对手使用了后勤补给！抽${card.value}张牌！`);
            break;
        case 'fuelGain':
            // 对手获得燃油
            gameState.opponent.fuel += card.value;
            alert(`对手使用了燃油补给！获得${card.value}点燃油！`);
            break;
    }
    
    // 检查是否有坦克被摧毁
    gameState.player.field = gameState.player.field.filter(tank => tank.health > 0);
    
    // 检查游戏结束条件
    checkGameOver();
}

// 对手攻击
function opponentAttack() {
    if (gameState.opponent.field.length === 0 || gameState.player.field.length === 0) return;
    
    // 简单AI：选择第一个坦克攻击玩家的第一个坦克
    const attacker = gameState.opponent.field[0];
    const target = gameState.player.field[0];
    
    // 计算伤害
    let damage = attacker.attack;
    
    // 应用技能效果
    // 虎式坦克的装甲强化
    if (target.abilityType === 'armor') {
        damage = Math.max(1, damage - 1);
    }
    // 豹式坦克的精准射击
    if (attacker.abilityType === 'precision') {
        damage += 1; // 无视1点护甲
    }
    // T-34-85的协同作战
    if (attacker.abilityType === 'synergy') {
        const sovietTanks = gameState.opponent.field.filter(card => card.country === '苏联').length;
        damage += sovietTanks - 1; // 减去自己
    }
    // KV-1的钢铁壁垒
    if (target.abilityType === 'barrier' && !target.barrierBroken) {
        damage = 0;
        target.barrierBroken = true;
    }
    // 99A的复合装甲
    if (target.abilityType === 'compositeArmor') {
        if (!target.damageReductionCount) target.damageReductionCount = 0;
        if (target.damageReductionCount < 3) {
            damage = Math.max(1, damage - 1);
            target.damageReductionCount++;
        }
    }
    // T-34-76的机动防御
    if (target.abilityType === 'mobileDefense') {
        if (Math.random() > 0.5) {
            damage = Math.max(1, damage - 1);
            alert(`${target.name}触发机动防御，减少1点伤害！`);
        }
    }
    
    // 应用地形效果
    if (gameState.opponent.activeTerrain) {
        const terrain = gameState.opponent.activeTerrain;
        if (terrain.effectType === 'mediumAttack' && attacker.type === '中型') {
            damage += terrain.value;
        } else if (terrain.effectType === 'heavyHealth' && attacker.type === '重型') {
            attacker.health += terrain.value;
        } else if (terrain.effectType === 'lightRush' && attacker.type === '轻型') {
            // 突袭效果：可以在同一回合攻击
        } else if (terrain.effectType === 'plateauBonus') {
            if (attacker.type === '轻型') {
                damage += terrain.value;
            }
            // 所有坦克生命值 + 1
            gameState.opponent.field.forEach(tank => {
                tank.health += 1;
            });
        } else if (terrain.effectType === 'eurasianPlain') {
            if (attacker.type === '中型') {
                damage += terrain.value;
            } else if (attacker.type === '轻型') {
                damage += 1;
            }
        } else if (terrain.effectType === 'westernEuropeanPlain') {
            damage += terrain.value;
            if (attacker.type === '重型') {
                attacker.health += 1;
            }
        }
    }
    
    if (gameState.player.activeTerrain) {
        const terrain = gameState.player.activeTerrain;
        if (terrain.effectType === 'mediumAttack' && target.type === '中型') {
            // 目标攻击力提升，但不影响当前防御
        } else if (terrain.effectType === 'heavyHealth' && target.type === '重型') {
            target.health += terrain.value;
        } else if (terrain.effectType === 'lightRush' && target.type === '轻型') {
            // 突袭效果：可以在同一回合攻击
        } else if (terrain.effectType === 'plateauBonus') {
            if (target.type === '轻型') {
                // 目标攻击力提升，但不影响当前防御
            }
            // 所有坦克生命值 + 1
            gameState.player.field.forEach(tank => {
                tank.health += 1;
            });
        } else if (terrain.effectType === 'eurasianPlain') {
            if (target.type === '中型') {
                // 目标攻击力提升，但不影响当前防御
            } else if (target.type === '轻型') {
                // 目标攻击力提升，但不影响当前防御
            }
        } else if (terrain.effectType === 'westernEuropeanPlain') {
            // 目标攻击力提升，但不影响当前防御
            if (target.type === '重型') {
                target.health += 1;
            }
        }
    }
    
    // 应用伤害
    target.health -= damage;
    attacker.health -= target.attack;
    
    alert(`对手的${attacker.name}攻击了你的${target.name}！`);
    
    // 检查是否有坦克被摧毁
    if (target.health <= 0) {
        gameState.player.field.shift();
        alert(`你的${target.name}被摧毁了！`);
    }
    if (attacker.health <= 0) {
        gameState.opponent.field.shift();
        alert(`对手的${attacker.name}被摧毁了！`);
    }
    
    // 检查游戏结束条件
    checkGameOver();
}

// 检查游戏结束条件
function checkGameOver() {
    // 检查玩家是否胜利
    if (gameState.opponent.health <= 0) {
        alert('游戏结束！玩家胜利！');
        return;
    }
    
    // 检查对手是否胜利
    if (gameState.player.health <= 0) {
        alert('游戏结束！对手胜利！');
        return;
    }
}

// 初始化游戏
window.onload = initGame;