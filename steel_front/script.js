// 国家阵营特色数据
const countryBonuses = {
    '德国': {
        name: '德意志',
        bonus: {
            heavyTankArmor: 0.2, // 重坦装甲+20%
            heavyTankPiercing: 0.2, // 重坦穿深+20%
            description: '重坦流：装甲+20%，穿深+20%'
        }
    },
    '苏联': {
        name: '苏维埃',
        bonus: {
            mediumTankSynergy: 0.25, // 中坦联动攻击力+25%
            costReduction: 0.1, // 费用-10%
            description: '中坦流：中坦联动攻击力+25%，费用-10%'
        }
    },
    '美国': {
        name: '合众国',
        bonus: {
            supportCardBonus: 0.3, // 支援卡效果+30%
            drawCardChance: 0.15, // 额外抽牌几率+15%
            description: '支援流：支援卡效果+30%，额外抽牌几率+15%'
        }
    },
    '中国': {
        name: '人民共和国',
        bonus: {
            lightTankMobility: 0.3, // 轻坦机动性+30%
            lightTankScout: 0.25, // 轻坦侦察能力+25%
            description: '轻坦流：轻坦机动性+30%，侦察能力+25%'
        }
    },
    '英国': {
        name: '联合王国',
        bonus: {
            heavyTankHealth: 0.2, // 重坦生命值+20%
            mediumTankAccuracy: 0.15, // 中坦命中率+15%
            description: '均衡流：重坦生命值+20%，中坦命中率+15%'
        }
    },
    '法国': {
        name: '法兰西',
        bonus: {
            lightTankRush: 0.35, // 轻坦突袭+35%
            mediumTankSpeed: 0.2, // 中坦速度+20%
            description: '机动流：轻坦突袭+35%，中坦速度+20%'
        }
    }
};

// 卡牌数据
const cardData = {
    // 坦克卡
    tanks: [
        // 德国重型坦克
        {
            id: 101,
            name: "虎式重型坦克",
            country: "德国",
            year: 1942,
            type: "重型",
            cost: 6,
            attack: 3,
            health: 8,
            armor: 200,
            piercing: 150,
            reload: 2,
            speed: 2,
            attackRange: 1,
            rarity: "史诗",
            ability: "重型装甲：部署后获得1层固守，受到的伤害-1",
            abilityType: "heavyArmor",
            description: "二战德国标志性重型坦克，装备88mm火炮，装甲厚重，是盟军坦克的噩梦。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=German%20Tiger%20heavy%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 102,
            name: "虎王重型坦克",
            country: "德国",
            year: 1944,
            type: "重型",
            cost: 7,
            attack: 4,
            health: 10,
            armor: 250,
            piercing: 180,
            reload: 3,
            speed: 1,
            attackRange: 1,
            rarity: "传说",
            ability: "无敌铁壁：部署后获得2层固守，受到的伤害-2",
            abilityType: "invincibleWall",
            description: "德国在二战后期研发的超重型坦克，装甲厚度和火力都达到了顶峰。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=German%20King%20Tiger%20heavy%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 103,
            name: "豹式中型坦克",
            country: "德国",
            year: 1943,
            type: "中型",
            cost: 5,
            attack: 3,
            health: 7,
            armor: 140,
            piercing: 130,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "史诗",
            ability: "精准射击：攻击时无视1点护甲",
            abilityType: "precision",
            description: "德国在二战中最成功的中型坦克，结合了良好的火力、防护和机动性。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=German%20Panther%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 苏联中型坦克
        {
            id: 201,
            name: "T-34-85中型坦克",
            country: "苏联",
            year: 1943,
            type: "中型",
            cost: 4,
            attack: 2,
            health: 6,
            armor: 100,
            piercing: 100,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "稀有",
            ability: "集群作战：场上每有1个其他苏联坦克，攻击力+1",
            abilityType: "cluster",
            description: "二战中苏联最著名的中型坦克，产量巨大，性能均衡，是苏联胜利的重要武器。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Soviet%20T-34-85%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 202,
            name: "T-44中型坦克",
            country: "苏联",
            year: 1944,
            type: "中型",
            cost: 5,
            attack: 3,
            health: 7,
            armor: 120,
            piercing: 120,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "稀有",
            ability: "机动换位：回合内可与友军单位交换位置",
            abilityType: "mobileSwap",
            description: "T-34的改进型，为战后T-54坦克奠定了基础。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Soviet%20T-44%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 203,
            name: "IS-2重型坦克",
            country: "苏联",
            year: 1944,
            type: "重型",
            cost: 6,
            attack: 4,
            health: 9,
            armor: 160,
            piercing: 170,
            reload: 2,
            speed: 2,
            attackRange: 1,
            rarity: "史诗",
            ability: "重型装甲：部署后获得1层固守，受到的伤害-1",
            abilityType: "heavyArmor",
            description: "苏联在二战后期研发的重型坦克，装备122mm火炮，是德国重型坦克的克星。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Soviet%20IS-2%20heavy%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 美国轻型坦克
        {
            id: 301,
            name: "M3斯图亚特轻型坦克",
            country: "美国",
            year: 1941,
            type: "轻型",
            cost: 2,
            attack: 1,
            health: 3,
            armor: 30,
            piercing: 50,
            reload: 1,
            speed: 4,
            attackRange: 1,
            rarity: "普通",
            ability: "侦察：部署时可侦察对方1张手牌",
            abilityType: "scout",
            description: "美国在二战中广泛使用的轻型坦克，主要用于侦察和快速机动任务。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=American%20M3%20Stuart%20light%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 302,
            name: "M5斯图亚特轻型坦克",
            country: "美国",
            year: 1942,
            type: "轻型",
            cost: 3,
            attack: 1,
            health: 4,
            armor: 40,
            piercing: 60,
            reload: 1,
            speed: 4,
            attackRange: 1,
            rarity: "普通",
            ability: "快速突袭：部署后可立即攻击一次",
            abilityType: "quickRush",
            description: "M3的改进型，机动性更强，是盟军在二战中的重要侦察力量。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=American%20M5%20Stuart%20light%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 303,
            name: "M4谢尔曼中型坦克",
            country: "美国",
            year: 1942,
            type: "中型",
            cost: 4,
            attack: 2,
            health: 7,
            armor: 80,
            piercing: 90,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "稀有",
            ability: "多用途：可以攻击敌方坦克或直接攻击基地",
            abilityType: "versatility",
            description: "美国在二战中生产最多的中型坦克，可靠性高，适应性强。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=American%20M4%20Sherman%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 中国轻坦
        {
            id: 401,
            name: "59式中型坦克",
            country: "中国",
            year: 1959,
            type: "中型",
            cost: 4,
            attack: 2,
            health: 6,
            armor: 100,
            piercing: 100,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "稀有",
            ability: "持久作战：每回合结束时恢复1点生命值",
            abilityType: "endurance",
            description: "中国仿制的T-54A坦克，是中国装甲部队的主力装备。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Type%2059%20medium%20tank%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 402,
            name: "62式轻型坦克",
            country: "中国",
            year: 1962,
            type: "轻型",
            cost: 3,
            attack: 1,
            health: 4,
            armor: 45,
            piercing: 70,
            reload: 1,
            speed: 4,
            attackRange: 1,
            rarity: "普通",
            ability: "侦察：部署时可侦察对方1张手牌",
            abilityType: "scout",
            description: "中国自主研发的轻型坦克，主要用于南方水网地带和山地作战。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Type%2062%20light%20tank%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 英国坦克
        {
            id: 701,
            name: "丘吉尔重型坦克",
            country: "英国",
            year: 1941,
            type: "重型",
            cost: 6,
            attack: 3,
            health: 10,
            armor: 150,
            piercing: 120,
            reload: 2,
            speed: 1,
            attackRange: 1,
            rarity: "史诗",
            ability: "重型装甲：部署后获得1层固守，受到的伤害-1",
            abilityType: "heavyArmor",
            description: "英国在二战中使用的重型坦克，以其厚重的装甲而闻名。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=British%20Churchill%20heavy%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 702,
            name: "克伦威尔巡洋坦克",
            country: "英国",
            year: 1943,
            type: "中型",
            cost: 4,
            attack: 3,
            health: 6,
            armor: 75,
            piercing: 100,
            reload: 1,
            speed: 4,
            attackRange: 1,
            rarity: "稀有",
            ability: "快速突袭：部署后可立即攻击一次",
            abilityType: "quickRush",
            description: "英国在二战中使用的巡洋坦克，机动性强，火力适中。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=British%20Cromwell%20cruiser%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 法国坦克
        {
            id: 801,
            name: "B1重型坦克",
            country: "法国",
            year: 1935,
            type: "重型",
            cost: 5,
            attack: 2,
            health: 8,
            armor: 60,
            piercing: 80,
            reload: 2,
            speed: 2,
            attackRange: 1,
            rarity: "稀有",
            ability: "重型装甲：部署后获得1层固守，受到的伤害-1",
            abilityType: "heavyArmor",
            description: "法国在二战前研发的重型坦克，装甲厚重但机动性较差。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=French%20B1%20heavy%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 802,
            name: "AMX-13轻型坦克",
            country: "法国",
            year: 1952,
            type: "轻型",
            cost: 3,
            attack: 2,
            health: 4,
            armor: 40,
            piercing: 80,
            reload: 1,
            speed: 4,
            attackRange: 1,
            rarity: "稀有",
            ability: "快速突袭：部署后可立即攻击一次",
            abilityType: "quickRush",
            description: "法国战后研发的轻型坦克，采用摇摆炮塔设计，机动性优异。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=French%20AMX-13%20light%20tank%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 日本坦克
        {
            id: 901,
            name: "九七式中型坦克",
            country: "日本",
            year: 1937,
            type: "中型",
            cost: 3,
            attack: 1,
            health: 5,
            armor: 30,
            piercing: 50,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "普通",
            ability: "集群作战：场上每有1个其他日本坦克，攻击力+1",
            abilityType: "cluster",
            description: "日本在二战中使用最广泛的中型坦克，性能落后于欧美同期坦克。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Japanese%20Type%2097%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 902,
            name: "一式中型坦克",
            country: "日本",
            year: 1941,
            type: "中型",
            cost: 4,
            attack: 2,
            health: 6,
            armor: 45,
            piercing: 70,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "稀有",
            ability: "持久作战：每回合结束时恢复1点生命值",
            abilityType: "endurance",
            description: "日本在二战后期研发的中型坦克，性能有所提升但仍落后于盟军坦克。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Japanese%20Type%201%20medium%20tank%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 反坦克炮
        {
            id: 501,
            name: "SU-152自行火炮",
            country: "苏联",
            year: 1943,
            type: "反坦克炮",
            cost: 5,
            attack: 5,
            health: 5,
            armor: 60,
            piercing: 200,
            reload: 2,
            speed: 2,
            attackRange: 2,
            rarity: "稀有",
            ability: "曲射：可越过前排直接攻击后排单位",
            abilityType: "curveShot",
            description: "苏联在二战中使用的重型自行火炮，能有效摧毁德国重型坦克。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Soviet%20SU-152%20self-propelled%20gun%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 502,
            name: "猎豹坦克歼击车",
            country: "德国",
            year: 1944,
            type: "反坦克炮",
            cost: 6,
            attack: 4,
            health: 6,
            armor: 80,
            piercing: 180,
            reload: 2,
            speed: 3,
            attackRange: 2,
            rarity: "史诗",
            ability: "精准射击：攻击时无视1点护甲",
            abilityType: "precision",
            description: "德国在二战中最成功的坦克歼击车之一，火力强大，机动性好。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=German%20Jagdpanther%20tank%20destroyer%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        {
            id: 503,
            name: "M10狼獾坦克歼击车",
            country: "美国",
            year: 1942,
            type: "反坦克炮",
            cost: 4,
            attack: 3,
            health: 4,
            armor: 30,
            piercing: 140,
            reload: 1,
            speed: 3,
            attackRange: 2,
            rarity: "稀有",
            ability: "快速突袭：部署后可立即攻击一次",
            abilityType: "quickRush",
            description: "美国在二战中使用的坦克歼击车，机动性好，火力适中。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=American%20M10%20Wolverine%20tank%20destroyer%20WW2%20military%20vehicle%20dark%20theme&image_size=square_hd"
        },
        // 辅助单位
        {
            id: 601,
            name: "工程车",
            country: "通用",
            year: 1940,
            type: "辅助",
            cost: 3,
            attack: 0,
            health: 4,
            armor: 20,
            piercing: 0,
            reload: 1,
            speed: 2,
            attackRange: 1,
            rarity: "普通",
            ability: "维修：每回合开始时，恢复1个友军单位2点生命值",
            abilityType: "repair",
            description: "用于战场维修和工程作业的辅助车辆。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=military%20engineering%20vehicle%20repair%20tank%20realistic&image_size=square_hd"
        },
        {
            id: 602,
            name: "防空车",
            country: "通用",
            year: 1942,
            type: "辅助",
            cost: 3,
            attack: 1,
            health: 3,
            armor: 20,
            piercing: 30,
            reload: 1,
            speed: 3,
            attackRange: 1,
            rarity: "普通",
            ability: "防空：反制敌方空中支援指令卡",
            abilityType: "antiAir",
            description: "装备防空武器的车辆，用于对付敌方空中单位。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anti-aircraft%20tank%20military%20vehicle%20realistic&image_size=square_hd"
        },
        {
            id: 603,
            name: "补给车",
            country: "通用",
            year: 1941,
            type: "辅助",
            cost: 4,
            attack: 0,
            health: 3,
            armor: 10,
            piercing: 0,
            reload: 1,
            speed: 2,
            attackRange: 1,
            rarity: "稀有",
            ability: "补给：每回合开始时提供1点临时补给点",
            abilityType: "supply",
            description: "用于向前线部队输送补给的车辆。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=military%20supply%20truck%20logistics%20vehicle%20realistic&image_size=square_hd"
        }
    ],
    
    // 指令卡（战术卡/技能牌）
    command: [
        {
            id: 1001,
            name: "穿甲弹",
            cost: 3,
            effect: "对敌方单个坦克造成4点伤害",
            effectType: "singleDamage",
            value: 4,
            rarity: "普通",
            description: "发射穿甲弹，对敌方单个坦克造成高额伤害。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=armor%20piercing%20shell%20tank%20ammunition%20military&image_size=square_hd"
        },
        {
            id: 1002,
            name: "反坦克导弹",
            cost: 4,
            effect: "无视装甲对敌方单个坦克造成5点伤害",
            effectType: "ignoreArmorDamage",
            value: 5,
            rarity: "稀有",
            description: "发射反坦克导弹，无视装甲造成伤害。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anti-tank%20missile%20military%20weapon%20launch&image_size=square_hd"
        },
        {
            id: 1003,
            name: "炮火覆盖",
            cost: 5,
            effect: "对敌方全场造成2点伤害",
            effectType: "aoeDamage",
            value: 2,
            rarity: "稀有",
            description: "呼叫炮兵对敌方阵地进行覆盖式炮击。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=artillery%20bombardment%20military%20explosion%20battlefield&image_size=square_hd"
        },
        {
            id: 1004,
            name: "战场维修",
            cost: 3,
            effect: "给友军单个坦克恢复4点生命值",
            effectType: "singleHeal",
            value: 4,
            rarity: "普通",
            description: "对友军坦克进行战场维修，恢复生命值。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=emergency%20repair%20tank%20maintenance%20military&image_size=square_hd"
        },
        {
            id: 1005,
            name: "烟幕遮蔽",
            cost: 2,
            effect: "给友军单个坦克加闪避，规避一次攻击",
            effectType: "smokeScreen",
            value: 1,
            rarity: "普通",
            description: "释放烟幕弹掩护友军坦克，使其规避一次攻击。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smoke%20screen%20military%20tactical%20smoke%20battlefield&image_size=square_hd"
        },
        {
            id: 1006,
            name: "无人机侦察",
            cost: 2,
            effect: "查看对方3张手牌",
            effectType: "scoutHand",
            value: 3,
            rarity: "普通",
            description: "派遣无人机侦察，查看对方手牌。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=military%20drone%20reconnaissance%20uav%20surveillance&image_size=square_hd"
        },
        {
            id: 1007,
            name: "后勤补给",
            cost: 3,
            effect: "额外抽2张牌",
            effectType: "drawCards",
            value: 2,
            rarity: "稀有",
            description: "获得后勤补给，额外抽取卡牌。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=military%20supply%20truck%20logistics%20convoy&image_size=square_hd"
        },
        {
            id: 1008,
            name: "空中支援",
            cost: 5,
            effect: "无视装甲攻击敌方后排任意坦克造成4点伤害",
            effectType: "airSupport",
            value: 4,
            rarity: "稀有",
            description: "呼叫空中力量对敌方后排单位进行打击。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=air%20support%20military%20aircraft%20bombing%20battlefield&image_size=square_hd"
        },
        {
            id: 1009,
            name: "全面维修",
            cost: 4,
            effect: "给所有友军坦克恢复2点生命值",
            effectType: "aoeHeal",
            value: 2,
            rarity: "史诗",
            description: "对所有友军坦克进行维修，恢复生命值。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mass%20tank%20repair%20military%20maintenance%20depot&image_size=square_hd"
        },
        {
            id: 1010,
            name: "集火攻击",
            cost: 4,
            effect: "本回合所有友军坦克攻击力+2",
            effectType: "buffAttack",
            value: 2,
            rarity: "史诗",
            description: "下达集火命令，所有友军坦克攻击力提升。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=concentrated%20artillery%20fire%20military%20battle&image_size=square_hd"
        }
    ],
    
    // 配件卡
    equipment: [
        {
            id: 2001,
            name: "反应装甲",
            cost: 2,
            effect: "抵消一次伤害",
            effectType: "reactiveArmor",
            value: 1,
            rarity: "稀有",
            description: "安装反应装甲，可抵消一次伤害。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tank%20reactive%20armor%20military%20equipment&image_size=square_hd"
        },
        {
            id: 2002,
            name: "垂直稳定器",
            cost: 2,
            effect: "提升命中",
            effectType: "stabilizer",
            value: 0.2,
            rarity: "普通",
            description: "安装垂直稳定器，提升坦克的命中率。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tank%20gun%20stabilizer%20military%20equipment&image_size=square_hd"
        },
        {
            id: 2003,
            name: "高光镜",
            cost: 1,
            effect: "强化侦察效果",
            effectType: "highPowerScope",
            value: 0.25,
            rarity: "普通",
            description: "安装高光镜，强化侦察效果。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tank%20periscope%20high%20power%20scope%20military&image_size=square_hd"
        }
    ],
    
    // 乘员卡
    crew: [
        {
            id: 3001,
            name: "王牌车长",
            cost: 3,
            effect: "给坦克加穿深、暴击概率",
            effectType: "aceCommander",
            value: 0.2,
            rarity: "史诗",
            description: "经验丰富的王牌车长，提升坦克的战斗力。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tank%20commander%20military%20officer%20portrait&image_size=square_hd"
        },
        {
            id: 3002,
            name: "魏特曼",
            cost: 5,
            effect: "传说级王牌车长，大幅提升穿深和暴击概率",
            effectType: "wittmann",
            value: 0.4,
            rarity: "传说",
            description: "二战德国最著名的坦克王牌，击毁过数百辆盟军坦克。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Michael%20Wittmann%20tank%20ace%20portrait%20ww2&image_size=square_hd"
        },
        {
            id: 3003,
            name: "卡尔尤斯",
            cost: 5,
            effect: "传说级王牌车长，提升穿深和生命值",
            effectType: "carius",
            value: 0.35,
            rarity: "传说",
            description: "二战德国另一位坦克王牌，战绩辉煌。",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kurt%20Carius%20tank%20ace%20portrait%20ww2&image_size=square_hd"
        }
    ],
    
    // 地形卡
    terrain: [
        {
            id: 4001,
            name: "平原",
            cost: 2,
            effect: "所有中型坦克攻击力 + 1",
            effectType: "mediumAttack",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=open%20plain%20battlefield%20military%20terrain%20realistic&image_size=square_hd"
        },
        {
            id: 4002,
            name: "森林",
            cost: 2,
            effect: "所有轻型坦克闪避率 + 30%",
            effectType: "lightTankEvasion",
            value: 0.3,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=forest%20battlefield%20military%20terrain%20trees%20wooded&image_size=square_hd"
        },
        {
            id: 4003,
            name: "沙漠",
            cost: 2,
            effect: "所有坦克移动范围 + 1，燃油消耗 + 1",
            effectType: "desertTerrain",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=desert%20battlefield%20military%20terrain%20sand%20dunes&image_size=square_hd"
        },
        {
            id: 4004,
            name: "城市",
            cost: 2,
            effect: "所有重型坦克生命值 + 2，移动范围 - 1",
            effectType: "urbanTerrain",
            value: 2,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=urban%20city%20battlefield%20destroyed%20buildings%20street&image_size=square_hd"
        },
        {
            id: 4005,
            name: "山地",
            cost: 2,
            effect: "所有坦克攻击范围 + 1，移动范围 - 1",
            effectType: "mountainTerrain",
            value: 1,
            duration: 3,
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mountain%20battlefield%20military%20terrain%20rocky%20hills&image_size=square_hd"
        }
    ],
    
    // 指挥官卡（主将卡）
    commander: [
        {
            id: 5001,
            name: "巴顿将军",
            country: "美国",
            year: 1940,
            cost: 0,
            attack: 0,
            health: 50,
            armor: 80,
            rarity: "史诗",
            passiveAbility: "装甲先锋：所有美国坦克攻击力 + 1",
            activeAbility: "装甲冲锋：消耗5燃油，让1个美国坦克攻击力 + 3（本回合有效）",
            activeCost: 5,
            activeCooldown: 3,
            description: "美国著名将领，以装甲部队战术著称",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=General%20George%20Patton%20military%20portrait%20ww2&image_size=square_hd"
        },
        {
            id: 5002,
            name: "朱可夫元帅",
            country: "苏联",
            year: 1940,
            cost: 0,
            attack: 0,
            health: 50,
            armor: 80,
            rarity: "史诗",
            passiveAbility: "钢铁意志：所有苏联坦克生命值 + 1",
            activeAbility: "钢铁洪流：消耗4燃油，让1个苏联坦克生命值 + 4（本回合有效）",
            activeCost: 4,
            activeCooldown: 3,
            description: "苏联元帅，二战期间指挥多次重要战役",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Marshal%20Georgy%20Zhukov%20soviet%20military%20portrait%20ww2&image_size=square_hd"
        },
        {
            id: 5003,
            name: "隆美尔元帅",
            country: "德国",
            year: 1940,
            cost: 0,
            attack: 0,
            health: 50,
            armor: 100,
            rarity: "传说",
            passiveAbility: "沙漠之狐：所有德国坦克移动范围 + 1",
            activeAbility: "闪电战术：消耗6燃油，让1个德国坦克获得「突袭」和攻击力 + 2（本回合有效）",
            activeCost: 6,
            activeCooldown: 4,
            description: "德国名将，以机动战术著称，被誉为沙漠之狐",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Field%20Marshal%20Erwin%20Rommel%20german%20military%20portrait%20ww2&image_size=square_hd"
        },
        {
            id: 5004,
            name: "彭德怀元帅",
            country: "中国",
            year: 1950,
            cost: 0,
            attack: 0,
            health: 50,
            armor: 100,
            rarity: "传说",
            passiveAbility: "游击战术：所有中国坦克燃油消耗 - 1",
            activeAbility: "穿插作战：消耗5燃油，让1个中国坦克移动到任意位置并立即攻击",
            activeCost: 5,
            activeCooldown: 4,
            description: "中国人民解放军元帅，军事家",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Marshal%20Peng%20Dehuai%20chinese%20military%20portrait&image_size=square_hd"
        },
        {
            id: 5005,
            name: "蒙哥马利元帅",
            country: "英国",
            year: 1940,
            cost: 0,
            attack: 0,
            health: 50,
            armor: 90,
            rarity: "史诗",
            passiveAbility: "稳扎稳打：所有英国坦克每回合恢复1点生命值",
            activeAbility: "坚固防线：消耗4燃油，所有友军坦克本回合受到的伤害 - 1",
            activeCost: 4,
            activeCooldown: 3,
            description: "英国著名将领，以稳健的战术著称",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Field%20Marshal%20Bernard%20Montgomery%20british%20military%20portrait%20ww2&image_size=square_hd"
        }
    ]
};

// 游戏状态
let gameState = {
    gameMode: "turnBased", // turnBased 或 continuous
    turnCount: 1,
    currentTurn: "player",
    gameTime: 300, // 持续对战模式时间限制（秒）
    fuelProductionRate: 1, // 燃油产出速率（每秒）
    lastFuelProduction: Date.now(),
    lastEventTime: Date.now(),
    activeEvent: null,
    player: {
        health: 50,
        fuel: 3,
        maxFuel: 20,
        fuelReserve: 0,
        deck: [],
        hand: [],
        frontRow: [],
        backRow: [],
        activeTerrain: null,
        commander: null,
        usedOversupply: 0,
        usedDispatch: false,
        discardPile: [],
        specialSkillCooldown: 0
    },
    opponent: {
        health: 50,
        fuel: 3,
        maxFuel: 20,
        fuelReserve: 0,
        deck: [],
        hand: [],
        frontRow: [],
        backRow: [],
        activeTerrain: null,
        commander: null,
        usedOversupply: 0,
        usedDispatch: false,
        discardPile: [],
        specialSkillCooldown: 0
    },
    selectedCard: null,
    gamePhase: "deploy"
};

// AI决策函数
function aiDecision() {
    if (gameState.gameMode !== "continuous") return;
    
    // AI思考时间（避免决策过快）
    if (Math.random() > 0.1) return; // 10%的概率执行决策
    
    // 1. AI出牌逻辑
    aiPlayCards();
    
    // 2. AI攻击逻辑
    aiAttack();
}

// AI出牌逻辑
function aiPlayCards() {
    // 遍历AI手牌，选择合适的卡牌
    for (let i = gameState.opponent.hand.length - 1; i >= 0; i--) {
        const card = gameState.opponent.hand[i];
        
        // 检查燃油是否足够
        if (card.cost > gameState.opponent.fuel) continue;
        
        // 检查战场位置是否已满
        const allOpponentUnits = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
        if (card.type && allOpponentUnits.length >= 6) continue;
        
        // 智能出牌策略
        let shouldPlay = false;
        
        // 坦克卡策略
        if (card.type) {
            // 优先出高攻击力的坦克
            if (card.attack >= 3) {
                shouldPlay = true;
            }
            // 轻坦和辅助单位也可以考虑出
            else if (card.type === '轻型' || card.type === '辅助') {
                shouldPlay = Math.random() > 0.5;
            }
        }
        // 地形卡策略
        else if (card.duration) {
            // 如果没有地形效果，优先出地形卡
            if (!gameState.opponent.activeTerrain) {
                shouldPlay = true;
            }
        }
        // 支援卡策略
        else if (card.effect) {
            // 有敌方坦克时使用攻击型支援卡
            const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
            if (allPlayerTanks.length > 0 && (card.effectType === 'aoeDamage' || card.effectType === 'airSupport')) {
                shouldPlay = true;
            }
            // 己方有坦克时使用治疗型支援卡
            if (allOpponentUnits.length > 0 && (card.effectType === 'singleHeal' || card.effectType === 'aoeHeal')) {
                // 只有当坦克生命值低于50%时才使用治疗
                const lowHealthTanks = allOpponentUnits.filter(t => t.health && t.health < t.maxHealth * 0.5);
                shouldPlay = lowHealthTanks.length > 0;
            }
        }
        
        if (shouldPlay) {
            // 消耗燃油
            gameState.opponent.fuel -= card.cost;
            
            // 从手牌中移除卡牌
            const playedCard = gameState.opponent.hand.splice(i, 1)[0];
            // 添加到弃牌堆
            gameState.opponent.discardPile.push(playedCard);
            
            // 处理不同类型的卡牌
            if (card.type) {
                // 坦克卡
                // 应用国家阵营特色加成
                const tankWithBonus = applyCountryBonus({...card}, false);
                
                // 根据坦克类型决定放置位置
                const tankType = tankWithBonus.type;
                if (tankType === '重型' || tankType === '中型') {
                    // 重坦和中坦放在前排
                    const frontRowCount = gameState.opponent.frontRow.filter(t => t).length;
                    if (frontRowCount < 3) {
                        const emptyIndex = gameState.opponent.frontRow.findIndex(t => !t);
                        if (emptyIndex >= 0) {
                            gameState.opponent.frontRow[emptyIndex] = tankWithBonus;
                        } else {
                            gameState.opponent.frontRow.push(tankWithBonus);
                        }
                    } else {
                        const backRowCount = gameState.opponent.backRow.filter(t => t).length;
                        if (backRowCount < 3) {
                            const emptyIndex = gameState.opponent.backRow.findIndex(t => !t);
                            if (emptyIndex >= 0) {
                                gameState.opponent.backRow[emptyIndex] = tankWithBonus;
                            } else {
                                gameState.opponent.backRow.push(tankWithBonus);
                            }
                        }
                    }
                } else {
                    // 其他类型坦克放在后排
                    const backRowCount = gameState.opponent.backRow.filter(t => t).length;
                    if (backRowCount < 3) {
                        const emptyIndex = gameState.opponent.backRow.findIndex(t => !t);
                        if (emptyIndex >= 0) {
                            gameState.opponent.backRow[emptyIndex] = tankWithBonus;
                        } else {
                            gameState.opponent.backRow.push(tankWithBonus);
                        }
                    } else {
                        const frontRowCount = gameState.opponent.frontRow.filter(t => t).length;
                        if (frontRowCount < 3) {
                            const emptyIndex = gameState.opponent.frontRow.findIndex(t => !t);
                            if (emptyIndex >= 0) {
                                gameState.opponent.frontRow[emptyIndex] = tankWithBonus;
                            } else {
                                gameState.opponent.frontRow.push(tankWithBonus);
                            }
                        }
                    }
                }
            } else if (card.effect) {
                if (card.duration) {
                    // 地形卡
                    gameState.opponent.activeTerrain = card;
                } else {
                    // 支援卡
                    handleOpponentSupportCard(card);
                }
            }
            
            break; // 每次只出一张牌
        }
    }
}

// 处理对手支援卡效果
function handleOpponentSupportCard(card) {
    // 获取所有坦克（前后排合并）
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    
    switch (card.effectType) {
        case 'aoeDamage':
            // 对敌方所有坦克造成伤害
            allPlayerTanks.forEach(target => {
                if (target) {
                    target.health -= card.value;
                }
            });
            break;
        case 'singleDamage':
            // 对敌方单个坦克造成伤害
            if (allPlayerTanks.length > 0) {
                // 优先攻击攻击力高的坦克
                const target = allPlayerTanks.reduce((max, tank) => 
                    (tank.attack > max.attack) ? tank : max, allPlayerTanks[0]);
                if (target) {
                    target.health -= card.value;
                }
            }
            break;
        case 'singleHeal':
            // 给单个坦克加血
            if (allOpponentTanks.length > 0) {
                // 优先治疗生命值低的坦克
                const target = allOpponentTanks.reduce((min, tank) => 
                    (tank.health < min.health) ? tank : min, allOpponentTanks[0]);
                if (target) {
                    target.health += card.value;
                }
            }
            break;
        case 'airSupport':
            // 无视装甲攻击敌方后排
            const playerBackRow = gameState.player.backRow;
            playerBackRow.forEach(target => {
                if (target) {
                    target.health -= card.value;
                }
            });
            break;
        case 'smokeScreen':
            // 给友军加闪避
            if (allOpponentTanks.length > 0) {
                const target = allOpponentTanks[0];
                if (target) {
                    target.evasion = true;
                }
            }
            break;
    }
}

// AI攻击逻辑
function aiAttack() {
    // 获取AI所有坦克
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    
    // 遍历AI坦克，执行攻击
    allOpponentTanks.forEach(tank => {
        if (!tank || tank.hasAttacked) return;
        
        // 获取可攻击的目标
        const attackableTargets = getAttackableTargets(tank);
        
        if (attackableTargets.length > 0) {
            // 选择攻击目标
            const target = selectAttackTarget(attackableTargets);
            
            if (target) {
                // 执行攻击
                performAttack(tank, target);
                tank.hasAttacked = true;
            }
        }
    });
}

// 获取可攻击的目标
function getAttackableTargets(attacker) {
    const targets = [];
    
    // 敌方坦克
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    allPlayerTanks.forEach(tank => {
        if (tank) {
            targets.push({ type: 'tank', target: tank });
        }
    });
    
    // 敌方基地
    targets.push({ type: 'base', target: gameState.player });
    
    return targets;
}

// 选择攻击目标
function selectAttackTarget(targets) {
    // 优先攻击敌方坦克
    const tankTargets = targets.filter(t => t.type === 'tank');
    if (tankTargets.length > 0) {
        // 优先攻击攻击力高的坦克
        return tankTargets.reduce((max, target) => 
            (target.target.attack > max.target.attack) ? target : max, tankTargets[0]);
    }
    
    // 没有坦克时攻击基地
    return targets.find(t => t.type === 'base');
}

// 执行攻击
function performAttack(attacker, target) {
    if (target.type === 'tank') {
        // 攻击敌方坦克
        const damage = attacker.attack;
        target.target.health -= damage;
    } else if (target.type === 'base') {
        // 攻击敌方基地
        const damage = attacker.attack;
        target.target.health -= damage;
    }
}

// 随机事件配置
const randomEvents = [
    {
        name: "燃油泄漏",
        description: "燃油生产速率暂时降低",
        duration: 10,
        effect: (player) => {
            gameState.fuelProductionRate = 0.5;
        },
        onEnd: () => {
            gameState.fuelProductionRate = 1;
        }
    },
    {
        name: "补给线畅通",
        description: "燃油生产速率暂时提高",
        duration: 10,
        effect: (player) => {
            gameState.fuelProductionRate = 2;
        },
        onEnd: () => {
            gameState.fuelProductionRate = 1;
        }
    },
    {
        name: "战场维修",
        description: "所有坦克恢复生命值",
        duration: 1,
        effect: (player) => {
            // 玩家坦克恢复
            const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
            allPlayerTanks.forEach(tank => {
                if (tank) {
                    tank.health += 2;
                }
            });
            // 对手坦克恢复
            const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
            allOpponentTanks.forEach(tank => {
                if (tank) {
                    tank.health += 2;
                }
            });
        }
    },
    {
        name: "空袭警报",
        description: "所有单位受到伤害",
        duration: 1,
        effect: (player) => {
            // 玩家坦克受到伤害
            const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
            allPlayerTanks.forEach(tank => {
                if (tank) {
                    tank.health -= 1;
                }
            });
            // 对手坦克受到伤害
            const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
            allOpponentTanks.forEach(tank => {
                if (tank) {
                    tank.health -= 1;
                }
            });
        }
    }
];

// 生成随机事件
function generateRandomEvent() {
    if (gameState.activeEvent) return;
    
    if (Math.random() < 0.005) { // 0.5%的概率生成事件
        const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
        gameState.activeEvent = {
            ...event,
            startTime: Date.now(),
            endTime: Date.now() + (event.duration * 1000)
        };
        
        // 触发事件效果
        event.effect();
        
        console.log(`触发事件: ${event.name} - ${event.description}`);
    }
}

// 处理随机事件
function handleRandomEvents() {
    if (gameState.activeEvent) {
        const now = Date.now();
        if (now >= gameState.activeEvent.endTime) {
            // 事件结束
            if (gameState.activeEvent.onEnd) {
                gameState.activeEvent.onEnd();
            }
            gameState.activeEvent = null;
        }
    } else {
        // 尝试生成新事件
        generateRandomEvent();
    }
}

// 特殊技能系统
function useSpecialSkill(player) {
    if (player.specialSkillCooldown > 0) return;
    
    // 消耗10点燃油
    if (player.fuel < 10) return;
    
    player.fuel -= 10;
    player.specialSkillCooldown = 30; // 30秒冷却
    
    // 特殊技能效果：召唤一个强力坦克
    const specialTank = {
        id: 9999,
        name: "超级坦克",
        country: "通用",
        year: 2024,
        type: "重型",
        cost: 10,
        attack: 5,
        health: 15,
        armor: 200,
        piercing: 200,
        reload: 2,
        speed: 2,
        attackRange: 1,
        rarity: "传说",
        ability: "超级装甲：受到的伤害-2",
        abilityType: "superArmor",
        description: "特殊技能召唤的超级坦克",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=super%20tank%20future%20military%20vehicle%20powerful&image_size=square_hd"
    };
    
    // 放置超级坦克
    const frontRowEmptyIndex = player.frontRow.findIndex(t => !t);
    if (frontRowEmptyIndex >= 0) {
        player.frontRow[frontRowEmptyIndex] = specialTank;
    } else {
        const backRowEmptyIndex = player.backRow.findIndex(t => !t);
        if (backRowEmptyIndex >= 0) {
            player.backRow[backRowEmptyIndex] = specialTank;
        }
    }
    
    console.log("使用特殊技能：召唤超级坦克！");
}

// 更新特殊技能冷却
function updateSpecialSkillCooldowns() {
    if (gameState.player.specialSkillCooldown > 0) {
        gameState.player.specialSkillCooldown -= 1/60;
    }
    if (gameState.opponent.specialSkillCooldown > 0) {
        gameState.opponent.specialSkillCooldown -= 1/60;
    }
}

// AI使用特殊技能
function aiUseSpecialSkill() {
    if (gameState.opponent.specialSkillCooldown <= 0 && gameState.opponent.fuel >= 10) {
        // 有一定概率使用特殊技能
        if (Math.random() > 0.7) {
            useSpecialSkill(gameState.opponent);
        }
    }
}

// 玩家使用特殊技能
function usePlayerSpecialSkill() {
    if (gameState.gameMode === "continuous") {
        useSpecialSkill(gameState.player);
    }
}

// 游戏主循环
function gameLoop() {
    if (gameState.gameMode === "continuous") {
        // 持续对战模式的实时逻辑
        const now = Date.now();
        
        // 燃油生产
        if (now - gameState.lastFuelProduction >= 1000) { // 每1秒生产燃油
            // 玩家燃油生产
            if (gameState.player.fuel < gameState.player.maxFuel) {
                const oldFuel = gameState.player.fuel;
                gameState.player.fuel += gameState.fuelProductionRate;
                if (Math.floor(gameState.player.fuel) > Math.floor(oldFuel)) {
                    // 触发燃油动画
                    const fuelElement = document.getElementById('playerFuel');
                    if (fuelElement) {
                        fuelElement.classList.add('animate');
                        setTimeout(() => {
                            fuelElement.classList.remove('animate');
                        }, 500);
                    }
                }
            }
            
            // 对手燃油生产
            if (gameState.opponent.fuel < gameState.opponent.maxFuel) {
                gameState.opponent.fuel += gameState.fuelProductionRate;
            }
            
            gameState.lastFuelProduction = now;
        }
        
        // 时间倒计时
        gameState.gameTime -= 1/60; // 每帧减少1/60秒
        if (gameState.gameTime <= 0) {
            gameState.gameTime = 0;
            // 时间结束，判断胜负
            endGame();
        }
        
        // 处理随机事件
        handleRandomEvents();
        
        // 更新特殊技能冷却
        updateSpecialSkillCooldowns();
        
        // AI决策
        aiDecision();
        
        // AI使用特殊技能
        aiUseSpecialSkill();
        
        // 检查游戏是否结束
        if (gameState.player.health <= 0 || gameState.opponent.health <= 0) {
            endGame();
        }
        
        // 渲染游戏界面
        renderGame();
    }
    
    // 继续游戏循环
    requestAnimationFrame(gameLoop);
}

// 初始化游戏
function initGame() {
    // 初始化玩家和对手的卡组
    initDecks();
    
    // 初始化玩家和对手的手牌
    drawInitialCards();
    
    // 选择指挥官
    selectCommanders();
    
    // 重置游戏时间和燃油生产时间
    if (gameState.gameMode === "continuous") {
        gameState.gameTime = 300; // 5分钟
        gameState.lastFuelProduction = Date.now();
    }
    
    // 渲染游戏界面
    renderGame();
    
    // 开始游戏循环
    gameLoop();
}

// 初始化卡组
function initDecks() {
    // 玩家卡组（德国混合坦克流）- 50张
    gameState.player.deck = [
        cardData.tanks[0], // 虎式重型坦克
        cardData.tanks[1], // 虎王重型坦克
        cardData.tanks[2], // 豹式中型坦克
        cardData.tanks[7], // 猎豹坦克歼击车
        cardData.command[0], // 炮火覆盖
        cardData.command[3], // 烟雾弹
        cardData.equipment[0], // 反应装甲
        cardData.crew[0], // 王牌车长
        cardData.terrain[0], // 平原战场
        cardData.tanks[0], // 虎式重型坦克
        cardData.tanks[7], // 猎豹坦克歼击车
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.equipment[1], // 垂直稳定器
        cardData.terrain[1], // 城市废墟
        cardData.tanks[6], // 59式中型坦克
        cardData.tanks[6], // 59式中型坦克
        cardData.command[0], // 炮火覆盖
        cardData.command[3], // 烟雾弹
        cardData.equipment[2], // 高光镜
        cardData.terrain[2], // 城市巷战
        cardData.tanks[3], // T-34-85中型坦克
        cardData.tanks[4], // T-44中型坦克
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.equipment[0], // 反应装甲
        cardData.terrain[3], // 平原开阔地
        cardData.tanks[5], // M3斯图亚特轻型坦克
        cardData.tanks[8], // M5斯图亚特轻型坦克
        cardData.command[0], // 炮火覆盖
        cardData.crew[1], // 魏特曼
        cardData.tanks[9], // M4谢尔曼中型坦克
        cardData.tanks[10], // 62式轻型坦克
        cardData.tanks[11], // 丘吉尔重型坦克
        cardData.tanks[12], // 克伦威尔巡洋坦克
        cardData.tanks[13], // B1重型坦克
        cardData.tanks[14], // AMX-13轻型坦克
        cardData.tanks[15], // 九七式中型坦克
        cardData.tanks[16], // 一式中型坦克
        cardData.tanks[17], // SU-152自行火炮
        cardData.tanks[18], // 工程车
        cardData.tanks[19], // 防空车
        cardData.tanks[20], // 补给车
        cardData.command[0], // 炮火覆盖
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.command[3]  // 烟雾弹
    ];
    
    // 对手卡组（苏联混合坦克流）- 50张
    gameState.opponent.deck = [
        cardData.tanks[3], // T-34-85中型坦克
        cardData.tanks[4], // T-44中型坦克
        cardData.tanks[5], // M3斯图亚特轻型坦克
        cardData.tanks[17], // SU-152自行火炮
        cardData.command[0], // 炮火覆盖
        cardData.command[3], // 烟雾弹
        cardData.equipment[0], // 反应装甲
        cardData.crew[0], // 王牌车长
        cardData.terrain[0], // 平原战场
        cardData.tanks[3], // T-34-85中型坦克
        cardData.tanks[4], // T-44中型坦克
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.equipment[1], // 垂直稳定器
        cardData.terrain[1], // 城市废墟
        cardData.tanks[5], // M3斯图亚特轻型坦克
        cardData.tanks[8], // M5斯图亚特轻型坦克
        cardData.command[0], // 炮火覆盖
        cardData.command[3], // 烟雾弹
        cardData.equipment[2], // 高光镜
        cardData.terrain[2], // 城市巷战
        cardData.tanks[6], // 59式中型坦克
        cardData.tanks[6], // 59式中型坦克
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.equipment[0], // 反应装甲
        cardData.terrain[3], // 平原开阔地
        cardData.tanks[0], // 虎式重型坦克
        cardData.tanks[7], // 猎豹坦克歼击车
        cardData.command[0], // 炮火覆盖
        cardData.crew[2], // 卡尔尤斯
        cardData.tanks[9], // M4谢尔曼中型坦克
        cardData.tanks[10], // 62式轻型坦克
        cardData.tanks[11], // 丘吉尔重型坦克
        cardData.tanks[12], // 克伦威尔巡洋坦克
        cardData.tanks[13], // B1重型坦克
        cardData.tanks[14], // AMX-13轻型坦克
        cardData.tanks[15], // 九七式中型坦克
        cardData.tanks[16], // 一式中型坦克
        cardData.tanks[18], // 工程车
        cardData.tanks[19], // 防空车
        cardData.tanks[20], // 补给车
        cardData.command[0], // 炮火覆盖
        cardData.command[1], // 紧急维修
        cardData.command[2], // 空中支援
        cardData.command[3]  // 烟雾弹
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
    // 玩家抽5张牌
    for (let i = 0; i < 5; i++) {
        if (gameState.player.deck.length > 0) {
            gameState.player.hand.push(gameState.player.deck.pop());
        }
    }
    
    // 对手抽5张牌
    for (let i = 0; i < 5; i++) {
        if (gameState.opponent.deck.length > 0) {
            gameState.opponent.hand.push(gameState.opponent.deck.pop());
        }
    }
}

// 选择指挥官
function selectCommanders() {
    // 随机选择指挥官
    gameState.player.commander = cardData.commander[Math.floor(Math.random() * cardData.commander.length)];
    gameState.opponent.commander = cardData.commander[Math.floor(Math.random() * cardData.commander.length)];
}

// 渲染游戏界面
function renderGame() {
    // 渲染玩家信息
    document.getElementById('playerHealth').textContent = gameState.player.health;
    document.getElementById('playerFuel').textContent = `${Math.floor(gameState.player.fuel)}/${gameState.player.maxFuel}`;
    document.getElementById('player-commander-name').textContent = gameState.player.commander.name;
    
    // 渲染对手信息
    document.getElementById('opponentHealth').textContent = gameState.opponent.health;
    document.getElementById('opponentFuel').textContent = `${Math.floor(gameState.opponent.fuel)}/${gameState.opponent.maxFuel}`;
    document.getElementById('opponent-commander-name').textContent = gameState.opponent.commander.name;
    
    // 渲染游戏信息
    const turnIndicator = document.getElementById('turnIndicator');
    const turnCounter = document.getElementById('turnCounter');
    
    if (gameState.gameMode === "turnBased") {
        // 回合制模式
        turnIndicator.textContent = gameState.currentTurn === "player" ? "你的回合" : "对手的回合";
        // 添加呼吸光效
        if (gameState.currentTurn === "player") {
            turnIndicator.classList.add('breathing-effect');
        } else {
            turnIndicator.classList.remove('breathing-effect');
        }
        turnCounter.textContent = `回合 ${gameState.turnCount}`;
        // 显示结束回合按钮
        document.getElementById('endTurnBtn').style.display = 'block';
        document.getElementById('endTurnBtn').disabled = gameState.currentTurn !== "player";
    } else {
        // 持续对战模式
        turnIndicator.textContent = "持续对战模式";
        turnIndicator.classList.remove('breathing-effect');
        // 显示剩余时间
        const minutes = Math.floor(gameState.gameTime / 60);
        const seconds = Math.floor(gameState.gameTime % 60);
        turnCounter.textContent = `时间: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        // 隐藏结束回合按钮
        document.getElementById('endTurnBtn').style.display = 'none';
    }
    
    // 渲染特殊技能冷却
    const specialSkillBtn = document.getElementById('specialSkillBtn');
    const specialSkillCooldown = document.getElementById('specialSkillCooldown');
    if (specialSkillBtn && specialSkillCooldown) {
        const cooldown = Math.ceil(gameState.player.specialSkillCooldown);
        specialSkillCooldown.textContent = `冷却: ${cooldown}s`;
        
        if (cooldown > 0 || gameState.player.fuel < 10) {
            specialSkillBtn.disabled = true;
            specialSkillBtn.classList.add('opacity-50');
        } else {
            specialSkillBtn.disabled = false;
            specialSkillBtn.classList.remove('opacity-50');
        }
    }
    
    // 渲染玩家手牌
    const playerHandElement = document.getElementById('playerHand');
    playerHandElement.innerHTML = '';
    gameState.player.hand.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        playerHandElement.appendChild(cardElement);
    });
    
    // 渲染玩家前排坦克
    const playerFrontRowElement = document.getElementById('playerFrontRow');
    playerFrontRowElement.innerHTML = '';
    gameState.player.frontRow.forEach((card, index) => {
        if (card) {
            const cardElement = createCardElement(card, index, true, true, 'front');
            playerFrontRowElement.appendChild(cardElement);
        }
    });
    
    // 渲染玩家后排坦克
    const playerBackRowElement = document.getElementById('playerBackRow');
    playerBackRowElement.innerHTML = '';
    gameState.player.backRow.forEach((card, index) => {
        if (card) {
            const cardElement = createCardElement(card, index, true, true, 'back');
            playerBackRowElement.appendChild(cardElement);
        }
    });
    
    // 渲染对手前排坦克
    const opponentFrontRowElement = document.getElementById('opponentFrontRow');
    opponentFrontRowElement.innerHTML = '';
    gameState.opponent.frontRow.forEach((card, index) => {
        if (card) {
            const cardElement = createCardElement(card, index, true, false, 'front');
            opponentFrontRowElement.appendChild(cardElement);
        }
    });
    
    // 渲染对手后排坦克
    const opponentBackRowElement = document.getElementById('opponentBackRow');
    opponentBackRowElement.innerHTML = '';
    gameState.opponent.backRow.forEach((card, index) => {
        if (card) {
            const cardElement = createCardElement(card, index, true, false, 'back');
            opponentBackRowElement.appendChild(cardElement);
        }
    });
    
    // 渲染对手手牌数量
    const opponentHandElement = document.getElementById('opponentHand');
    opponentHandElement.innerHTML = '';
    for (let i = 0; i < gameState.opponent.hand.length; i++) {
        const cardBack = document.createElement('div');
        cardBack.className = 'w-16 h-24 bg-gray-700 rounded-md mr-1 flex items-center justify-center transition-all duration-300';
        cardBack.innerHTML = '<i class="fa fa-file-text-o text-2xl text-gray-500"></i>';
        opponentHandElement.appendChild(cardBack);
    }
    
    // 渲染地形效果
    renderTerrain();
    
    // 渲染指挥官头像
    renderCommanders();
    
    // 渲染弃牌堆和牌库数量
    renderDeckInfo();
}

// 渲染弃牌堆和牌库数量
function renderDeckInfo() {
    // 计算总弃牌堆数量
    const totalDiscard = gameState.player.discardPile.length + gameState.opponent.discardPile.length;
    document.getElementById('discardPileCount').textContent = totalDiscard;
    
    // 计算玩家牌库剩余数量
    const playerDeckCount = gameState.player.deck.length;
    document.getElementById('deckCountNumber').textContent = playerDeckCount;
    
    // 添加弃牌堆点击事件
    const discardPileElement = document.getElementById('discardPile');
    discardPileElement.onclick = function() {
        showDiscardPile();
    };
}

// 显示弃牌堆
function showDiscardPile() {
    const allDiscard = [...gameState.player.discardPile, ...gameState.opponent.discardPile];
    if (allDiscard.length === 0) {
        alert('弃牌堆为空！');
        return;
    }
    
    let discardList = '弃牌堆：\n';
    allDiscard.forEach((card, index) => {
        discardList += `${index + 1}. ${card.name}\n`;
    });
    
    alert(discardList);
}

// 显示伤害数字
function showDamageNumber(element, damage, isPlayer = true) {
    const damageElement = document.createElement('div');
    damageElement.className = 'damage-number';
    damageElement.textContent = `-${damage}`;
    damageElement.style.color = isPlayer ? '#ef4444' : '#f59e0b';
    
    const rect = element.getBoundingClientRect();
    const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
    
    damageElement.style.left = `${rect.left - gameBoardRect.left + rect.width / 2 - 10}px`;
    damageElement.style.top = `${rect.top - gameBoardRect.top - 20}px`;
    
    document.getElementById('gameBoard').appendChild(damageElement);
    
    // 动画结束后移除元素
    setTimeout(() => {
        damageElement.remove();
    }, 1000);
}

// 显示击中动画
function showHitAnimation(element) {
    element.classList.add('hit-animation');
    setTimeout(() => {
        element.classList.remove('hit-animation');
    }, 300);
}

// 显示闪避动画
function showEvadeAnimation(element) {
    element.classList.add('evade-animation');
    setTimeout(() => {
        element.classList.remove('evade-animation');
    }, 500);
}

// 显示效果文字
function showEffectText(element, text) {
    const effectElement = document.createElement('div');
    effectElement.className = 'effect-text';
    effectElement.textContent = text;
    
    const rect = element.getBoundingClientRect();
    const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
    
    effectElement.style.left = `${rect.left - gameBoardRect.left + rect.width / 2 - 40}px`;
    effectElement.style.top = `${rect.top - gameBoardRect.top - 30}px`;
    
    document.getElementById('gameBoard').appendChild(effectElement);
    
    // 动画结束后移除元素
    setTimeout(() => {
        effectElement.remove();
    }, 2000);
}

// 渲染地形效果
function renderTerrain() {
    // 渲染玩家地形效果
    const playerTerrainElement = document.getElementById('player-terrain');
    const playerTerrainImage = document.getElementById('player-terrain-image');
    const playerTerrainName = document.getElementById('player-terrain-name');
    const playerTerrainDuration = document.getElementById('player-terrain-duration');
    
    const playerActiveTerrain = gameState.player.activeTerrain;
    
    if (playerActiveTerrain) {
        playerTerrainElement.classList.remove('hidden');
        playerTerrainImage.src = playerActiveTerrain.image;
        playerTerrainName.textContent = playerActiveTerrain.name;
        playerTerrainDuration.textContent = `剩余 ${playerActiveTerrain.duration} 回合`;
    } else {
        playerTerrainElement.classList.add('hidden');
    }
    
    // 渲染对手地形效果
    const opponentTerrainElement = document.getElementById('opponent-terrain');
    const opponentTerrainImage = document.getElementById('opponent-terrain-image');
    const opponentTerrainName = document.getElementById('opponent-terrain-name');
    const opponentTerrainDuration = document.getElementById('opponent-terrain-duration');
    
    const opponentActiveTerrain = gameState.opponent.activeTerrain;
    
    if (opponentActiveTerrain) {
        opponentTerrainElement.classList.remove('hidden');
        opponentTerrainImage.src = opponentActiveTerrain.image;
        opponentTerrainName.textContent = opponentActiveTerrain.name;
        opponentTerrainDuration.textContent = `剩余 ${opponentActiveTerrain.duration} 回合`;
    } else {
        opponentTerrainElement.classList.add('hidden');
    }
}

// 渲染指挥官头像
function renderCommanders() {
    // 玩家指挥官头像
    const playerCommanderImage = document.getElementById('player-commander');
    const playerCommander = gameState.player.commander;
    
    if (playerCommander) {
        // 使用cardData.commander中的image属性
        const commanderData = cardData.commander.find(c => c.name === playerCommander.name);
        if (commanderData) {
            playerCommanderImage.src = commanderData.image;
            playerCommanderImage.alt = playerCommander.name;
        }
    }
    
    // 对手指挥官头像
    const opponentCommanderImage = document.getElementById('opponent-commander');
    const opponentCommander = gameState.opponent.commander;
    
    if (opponentCommander) {
        // 使用cardData.commander中的image属性
        const commanderData = cardData.commander.find(c => c.name === opponentCommander.name);
        if (commanderData) {
            opponentCommanderImage.src = commanderData.image;
            opponentCommanderImage.alt = opponentCommander.name;
        }
    }
}

// 游戏结束函数
function endGame() {
    let winner = '';
    let message = '';
    
    if (gameState.player.health > gameState.opponent.health) {
        winner = 'player';
        message = '恭喜你获得胜利！';
    } else if (gameState.player.health < gameState.opponent.health) {
        winner = 'opponent';
        message = '很遗憾，你输掉了比赛！';
    } else {
        message = '平局！';
    }
    
    alert(message);
    
    // 重置游戏状态
    resetGame();
    
    // 显示游戏模式选择界面
    document.getElementById('gameModeSelection').style.display = 'flex';
    document.getElementById('gameBoard').style.display = 'none';
}

// 重置游戏状态
function resetGame() {
    gameState = {
        gameMode: "turnBased",
        turnCount: 1,
        currentTurn: "player",
        gameTime: 300,
        fuelProductionRate: 1,
        lastFuelProduction: Date.now(),
        player: {
            health: 50,
            fuel: 3,
            maxFuel: 20,
            fuelReserve: 0,
            deck: [],
            hand: [],
            frontRow: [],
            backRow: [],
            activeTerrain: null,
            commander: null,
            usedOversupply: 0,
            usedDispatch: false,
            discardPile: []
        },
        opponent: {
            health: 50,
            fuel: 3,
            maxFuel: 20,
            fuelReserve: 0,
            deck: [],
            hand: [],
            frontRow: [],
            backRow: [],
            activeTerrain: null,
            commander: null,
            usedOversupply: 0,
            usedDispatch: false,
            discardPile: []
        },
        selectedCard: null,
        gamePhase: "deploy"
    };
}

// 创建卡牌元素
function createCardElement(card, index, isField = false, isPlayer = true, position = '') {
    const cardElement = document.createElement('div');
    cardElement.className = `w-16 h-24 rounded-md overflow-hidden mr-2 relative ${isField ? 'cursor-pointer' : 'hand-card'} ${isField ? 'card-enter-animation' : ''} transition-all duration-300`;
    
    // 卡牌背景
    cardElement.style.background = 'linear-gradient(135deg, #333 0%, #111 100%)';
    
    // 卡牌图片
    if (card.image) {
        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        imgElement.className = 'w-full h-12 object-cover';
        cardElement.appendChild(imgElement);
    }
    
    // 卡牌信息
    const infoElement = document.createElement('div');
    infoElement.className = 'p-1 text-xs';
    
    // 卡牌名称
    const nameElement = document.createElement('div');
    nameElement.className = 'font-bold text-white truncate';
    nameElement.textContent = card.name;
    infoElement.appendChild(nameElement);
    
    // 卡牌费用
    if (card.cost !== undefined) {
        const costElement = document.createElement('div');
        costElement.className = 'text-yellow-400';
        costElement.textContent = `费: ${card.cost}`;
        infoElement.appendChild(costElement);
    }
    
    // 坦克属性
    if (card.attack !== undefined) {
        const attackElement = document.createElement('div');
        attackElement.className = 'text-red-400';
        attackElement.textContent = `攻: ${card.attack}`;
        infoElement.appendChild(attackElement);
    }
    
    if (card.health !== undefined) {
        const healthElement = document.createElement('div');
        healthElement.className = 'text-green-400';
        healthElement.textContent = `血: ${card.health}`;
        infoElement.appendChild(healthElement);
    }
    
    // 稀有度标识
    if (card.rarity) {
        const rarityElement = document.createElement('div');
        rarityElement.className = 'absolute top-0 right-0 px-1 text-xs font-bold';
        switch (card.rarity) {
            case '普通':
                rarityElement.className += ' bg-gray-500 text-white';
                break;
            case '稀有':
                rarityElement.className += ' bg-blue-500 text-white';
                break;
            case '史诗':
                rarityElement.className += ' bg-purple-500 text-white';
                break;
            case '传说':
                rarityElement.className += ' bg-yellow-500 text-black';
                break;
        }
        rarityElement.textContent = card.rarity;
        cardElement.appendChild(rarityElement);
    }
    
    // 卡牌背面（用于对手手牌）
    if (!isPlayer && !isField) {
        cardElement.innerHTML = '';
        cardElement.className = 'w-16 h-24 bg-gray-700 rounded-md mr-1 flex items-center justify-center transition-all duration-300';
        cardElement.innerHTML = '<i class="fa fa-file-text-o text-2xl text-gray-500"></i>';
        return cardElement;
    }
    
    cardElement.appendChild(infoElement);
    
    // 添加hover效果
    cardElement.addEventListener('mouseenter', () => {
        if (isField && card.type) {
            cardElement.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                infoElement.innerHTML = '';
                
                // 显示详细属性
                const speedElement = document.createElement('div');
                speedElement.className = 'text-blue-400';
                speedElement.textContent = `速: ${card.speed || 0}`;
                infoElement.appendChild(speedElement);
                
                const rangeElement = document.createElement('div');
                rangeElement.className = 'text-purple-400';
                rangeElement.textContent = `距: ${card.attackRange || 1}`;
                infoElement.appendChild(rangeElement);
                
                if (card.attack !== undefined) {
                    const attackElement = document.createElement('div');
                    attackElement.className = 'text-red-400';
                    attackElement.textContent = `攻: ${card.attack}`;
                    infoElement.appendChild(attackElement);
                }
                
                if (card.health !== undefined) {
                    const healthElement = document.createElement('div');
                    healthElement.className = 'text-green-400';
                    healthElement.textContent = `血: ${card.health}`;
                    infoElement.appendChild(healthElement);
                }
                
                if (card.armor !== undefined) {
                    const armorElement = document.createElement('div');
                    armorElement.className = 'text-gray-300';
                    armorElement.textContent = `甲: ${card.armor}`;
                    infoElement.appendChild(armorElement);
                }
            }, 150);
        }
    });
    
    cardElement.addEventListener('mouseleave', () => {
        if (isField && card.type) {
            cardElement.style.transform = 'rotateY(0deg)';
            setTimeout(() => {
                infoElement.innerHTML = '';
                
                // 恢复原始信息
                const nameElement = document.createElement('div');
                nameElement.className = 'font-bold text-white truncate';
                nameElement.textContent = card.name;
                infoElement.appendChild(nameElement);
                
                if (card.cost !== undefined) {
                    const costElement = document.createElement('div');
                    costElement.className = 'text-yellow-400';
                    costElement.textContent = `费: ${card.cost}`;
                    infoElement.appendChild(costElement);
                }
                
                if (card.attack !== undefined) {
                    const attackElement = document.createElement('div');
                    attackElement.className = 'text-red-400';
                    attackElement.textContent = `攻: ${card.attack}`;
                    infoElement.appendChild(attackElement);
                }
                
                if (card.health !== undefined) {
                    const healthElement = document.createElement('div');
                    healthElement.className = 'text-green-400';
                    healthElement.textContent = `血: ${card.health}`;
                    infoElement.appendChild(healthElement);
                }
            }, 150);
        }
    });
    
    // 添加点击事件
    if (!isField && isPlayer) {
        cardElement.addEventListener('click', () => {
            playCard(index);
        });
    } else if (isField && isPlayer && card.type) {
        // 场上坦克的点击事件（用于移动和攻击）
        cardElement.addEventListener('click', () => {
            if (gameState.currentTurn === "player") {
                if (!card.hasAttacked) {
                    showAttackOptions(card, index, position);
                } else {
                    showMoveOptions(card, index, position);
                }
            }
        });
    }
    
    return cardElement;
}

// 应用国家阵营特色加成
function applyCountryBonus(tank, isPlayer) {
    const country = tank.country;
    if (!countryBonuses[country]) return tank;
    
    const bonus = countryBonuses[country].bonus;
    const tankType = tank.type;
    
    // 根据国家和坦克类型应用加成
    if (country === '德国') {
        if (tankType === '重型') {
            // 重坦装甲+20%，穿深+20%
            tank.piercing = Math.floor(tank.piercing * (1 + bonus.heavyTankPiercing));
            tank.armor = Math.floor(tank.armor * (1 + bonus.heavyTankArmor));
        }
    } else if (country === '苏联') {
        if (tankType === '中型') {
            // 中坦联动攻击力+25%
            tank.attack = Math.floor(tank.attack * (1 + bonus.mediumTankSynergy));
        }
        // 费用-10%（在出牌时处理）
    } else if (country === '美国') {
        // 支援卡效果+30%，额外抽牌几率+15%（在支援卡处理时应用）
    } else if (country === '中国') {
        if (tankType === '轻型') {
            // 轻坦机动性+30%，侦察能力+25%
            tank.attack = Math.floor(tank.attack * (1 + bonus.lightTankMobility));
        }
    } else if (country === '英国') {
        if (tankType === '重型') {
            // 重坦生命值+20%
            tank.health = Math.floor(tank.health * (1 + bonus.heavyTankHealth));
        }
        if (tankType === '中型') {
            // 中坦命中率+15%（在攻击时应用）
        }
    } else if (country === '法国') {
        if (tankType === '轻型') {
            // 轻坦突袭+35%
            tank.attack = Math.floor(tank.attack * (1 + bonus.lightTankRush));
        }
        if (tankType === '中型') {
            // 中坦速度+20%
            tank.attack = Math.floor(tank.attack * (1 + bonus.mediumTankSpeed));
        }
    }
    
    return tank;
}

// 出牌
function playCard(index) {
    const card = gameState.player.hand[index];
    
    // 检查燃油是否足够
    if (card.cost > gameState.player.fuel) {
        alert('燃油不足！');
        return;
    }
    
    // 检查战场位置是否已满
    const allPlayerUnits = [...gameState.player.frontRow, ...gameState.player.backRow];
    if (card.type && allPlayerUnits.length >= 6) {
        alert('战场位置已满！');
        return;
    }
    
    // 获取卡牌元素并添加旋转动画
    const playerHandElement = document.getElementById('playerHand');
    const cardElement = playerHandElement.children[index];
    if (cardElement) {
        cardElement.classList.add('animate-card-rotate');
    }
    
    // 消耗燃油
    gameState.player.fuel -= card.cost;
    
    // 从手牌中移除卡牌
    const playedCard = gameState.player.hand.splice(index, 1)[0];
    // 添加到弃牌堆
    gameState.player.discardPile.push(playedCard);
    
    // 处理不同类型的卡牌
    if (card.type) {
        // 坦克卡
        // 应用国家阵营特色加成
        const tankWithBonus = applyCountryBonus({...card}, true);
        
        // 检查战场位置是否已满
        const frontRowCount = gameState.player.frontRow.filter(t => t).length;
        const backRowCount = gameState.player.backRow.filter(t => t).length;
        
        if (frontRowCount + backRowCount >= 6) {
            alert('战场位置已满！');
            return;
        }
        
        // 根据坦克类型决定放置位置
        const tankType = tankWithBonus.type;
        if (tankType === '重型' || tankType === '中型') {
            // 重坦和中坦放在前排
            if (frontRowCount < 3) {
                // 找到第一个空位置
                const emptyIndex = gameState.player.frontRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.frontRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.frontRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到前排！`);
                }
            } else if (backRowCount < 3) {
                // 如果前排已满，放到后排
                const emptyIndex = gameState.player.backRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.backRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.backRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到后排！`);
                }
            } else {
                alert('战场位置已满！');
                return;
            }
        } else if (tankType === '轻型' || tankType === '反坦克炮' || tankType === '辅助') {
            // 轻坦、反坦克炮和辅助单位可放在前排或后排
            if (backRowCount < 3) {
                // 优先放在后排
                const emptyIndex = gameState.player.backRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.backRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.backRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到后排！`);
                }
            } else if (frontRowCount < 3) {
                // 如果后排已满，放到前排
                const emptyIndex = gameState.player.frontRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.frontRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.frontRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到前排！`);
                }
            } else {
                alert('战场位置已满！');
                return;
            }
        } else {
            // 默认放在前排
            if (frontRowCount < 3) {
                const emptyIndex = gameState.player.frontRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.frontRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.frontRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到前排！`);
                }
            } else if (backRowCount < 3) {
                // 如果前排已满，放到后排
                const emptyIndex = gameState.player.backRow.findIndex(t => !t);
                if (emptyIndex >= 0) {
                    gameState.player.backRow[emptyIndex] = tankWithBonus;
                } else {
                    gameState.player.backRow.push(tankWithBonus);
                }
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}部署到后排！`);
                }
            } else {
                alert('战场位置已满！');
                return;
            }
        }
        
        // 触发坦克技能
        if (tankWithBonus.abilityType === 'heavyArmor' || tankWithBonus.abilityType === 'invincibleWall') {
            // 重型坦克的固守能力
            tankWithBonus.defense = 1;
            // 显示效果文字
            if (cardElement) {
                showEffectText(cardElement, `${tankWithBonus.name}获得固守效果！`);
            }
        } else if (tankWithBonus.abilityType === 'scout') {
            // 侦察：上场时可侦察对方1张手牌
            if (gameState.opponent.hand.length > 0) {
                const randomIndex = Math.floor(Math.random() * gameState.opponent.hand.length);
                const opponentCard = gameState.opponent.hand[randomIndex];
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `侦察到对方手牌：${opponentCard.name}`);
                }
            }
        } else if (tankWithBonus.abilityType === 'quickRush') {
            // 快速突袭：部署后可立即攻击一次
            // 显示效果文字
            if (cardElement) {
                showEffectText(cardElement, `${tankWithBonus.name}触发快速突袭！`);
            }
        } else if (tankWithBonus.abilityType === 'cluster') {
            // 集群作战：场上每有1个其他苏联坦克，攻击力+1
            const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
            const sovietTanks = allPlayerTanks.filter(t => t.country === '苏联' && t !== tankWithBonus).length;
            if (sovietTanks > 0) {
                tankWithBonus.attack += sovietTanks;
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `${tankWithBonus.name}触发集群作战，获得${sovietTanks}点攻击力！`);
                }
            }
        }
    } else if (card.effect) {
        if (card.duration) {
            // 地形卡
            gameState.player.activeTerrain = card;
            // 显示效果文字
            if (cardElement) {
                showEffectText(cardElement, `地形：${card.name} 生效，持续${card.duration}回合`);
            }
        } else {
            // 指令卡/配件卡/乘员卡
            handleSupportCard(card, cardElement);
        }
    }
    
    // 使用setTimeout延迟渲染，确保动画完成
    setTimeout(() => {
        renderGame();
    }, 600);
}

// 处理支援卡效果
function handleSupportCard(card, cardElement) {
    // 获取所有坦克（前后排合并）
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    
    switch (card.effectType) {
        case 'aoeDamage':
            // 对敌方所有坦克造成伤害
            allOpponentTanks.forEach(target => {
                target.health -= card.value;
                // 显示伤害数字
                const targetElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(target)] || 
                                     document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(target)];
                if (targetElement) {
                    showDamageNumber(targetElement, card.value, false);
                    showHitAnimation(targetElement);
                }
            });
            // 显示效果文字
            if (cardElement) {
                showEffectText(cardElement, `炮火覆盖！对敌方所有坦克造成${card.value}点伤害！`);
            }
            break;
        case 'singleHeal':
            // 给单个坦克加血
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要治疗的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].health += card.value;
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `紧急维修！给${allPlayerTanks[targetIndex].name}恢复${card.value}点生命值！`);
                    }
                }
            }
            break;
        case 'airSupport':
            // 无视装甲攻击敌方后排
            const opponentBackRow = gameState.opponent.backRow;
            if (opponentBackRow.length > 0) {
                opponentBackRow.forEach(target => {
                    target.health -= card.value;
                    // 显示伤害数字
                    const targetElement = document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(target)];
                    if (targetElement) {
                        showDamageNumber(targetElement, card.value, false);
                        showHitAnimation(targetElement);
                    }
                });
                // 显示效果文字
                if (cardElement) {
                    showEffectText(cardElement, `空中支援！对敌方后排造成${card.value}点伤害！`);
                }
            }
            break;
        case 'smokeScreen':
            // 给友军加闪避，规避一次攻击
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要掩护的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].evasion = true;
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `烟雾弹！${allPlayerTanks[targetIndex].name}获得闪避效果！`);
                    }
                }
            }
            break;
        case 'reactiveArmor':
            // 反应装甲：抵消一次伤害
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要装备反应装甲的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].reactiveArmor = true;
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `反应装甲已装备到${allPlayerTanks[targetIndex].name}！`);
                    }
                }
            }
            break;
        case 'stabilizer':
            // 垂直稳定器：提升命中
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要装备垂直稳定器的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].accuracy = (allPlayerTanks[targetIndex].accuracy || 1) * (1 + card.value);
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `垂直稳定器已装备到${allPlayerTanks[targetIndex].name}！`);
                    }
                }
            }
            break;
        case 'highPowerScope':
            // 高光镜：强化侦察效果
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要装备高光镜的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].scoutBonus = (allPlayerTanks[targetIndex].scoutBonus || 1) * (1 + card.value);
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `高光镜已装备到${allPlayerTanks[targetIndex].name}！`);
                    }
                }
            }
            break;
        case 'aceCommander':
        case 'wittmann':
        case 'carius':
            // 乘员卡：提升坦克性能
            if (allPlayerTanks.length > 0) {
                const targetIndex = prompt('请选择要任命乘员的目标索引（从0开始）：');
                if (targetIndex !== null && targetIndex >= 0 && targetIndex < allPlayerTanks.length) {
                    allPlayerTanks[targetIndex].piercing = Math.floor(allPlayerTanks[targetIndex].piercing * (1 + card.value));
                    allPlayerTanks[targetIndex].criticalChance = (allPlayerTanks[targetIndex].criticalChance || 0) + card.value * 0.5;
                    // 显示效果文字
                    if (cardElement) {
                        showEffectText(cardElement, `${card.name}已任命到${allPlayerTanks[targetIndex].name}！`);
                    }
                }
            }
            break;
    }
    
    // 检查是否有坦克被摧毁
    gameState.opponent.frontRow = gameState.opponent.frontRow.filter(tank => tank.health > 0);
    gameState.opponent.backRow = gameState.opponent.backRow.filter(tank => tank.health > 0);
    gameState.player.frontRow = gameState.player.frontRow.filter(tank => tank.health > 0);
    gameState.player.backRow = gameState.player.backRow.filter(tank => tank.health > 0);
    
    // 检查游戏结束条件
    checkGameOver();
}

// 结束回合
function endTurn() {
    // 获取所有玩家坦克
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    
    // 处理59式坦克的持久作战技能
    allPlayerTanks.forEach(tank => {
        if (tank.abilityType === 'endurance') {
            tank.health += 1;
            // 显示效果文字
            const tankElement = document.getElementById('playerFrontRow').children[gameState.player.frontRow.indexOf(tank)] || 
                               document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(tank)];
            if (tankElement) {
                showEffectText(tankElement, `${tank.name}触发持久作战，恢复1点生命值！`);
            }
        }
    });
    
    allOpponentTanks.forEach(tank => {
        if (tank.abilityType === 'endurance') {
            tank.health += 1;
            // 显示效果文字
            const tankElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(tank)] || 
                               document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(tank)];
            if (tankElement) {
                showEffectText(tankElement, `${tank.name}触发持久作战，恢复1点生命值！`);
            }
        }
    });
    
    // 清理死亡坦克
    gameState.player.frontRow = gameState.player.frontRow.filter(tank => tank.health > 0);
    gameState.player.backRow = gameState.player.backRow.filter(tank => tank.health > 0);
    gameState.opponent.frontRow = gameState.opponent.frontRow.filter(tank => tank.health > 0);
    gameState.opponent.backRow = gameState.opponent.backRow.filter(tank => tank.health > 0);
    
    // 处理地形效果持续时间
    if (gameState.player.activeTerrain) {
        gameState.player.activeTerrain.duration--;
        if (gameState.player.activeTerrain.duration <= 0) {
            gameState.player.activeTerrain = null;
            // 显示效果文字
            showEffectText(document.getElementById('player-terrain'), '玩家地形效果结束');
        }
    }
    if (gameState.opponent.activeTerrain) {
        gameState.opponent.activeTerrain.duration--;
        if (gameState.opponent.activeTerrain.duration <= 0) {
            gameState.opponent.activeTerrain = null;
            // 显示效果文字
            showEffectText(document.getElementById('opponent-terrain'), '对手地形效果结束');
        }
    }
    
    // 切换当前回合
    gameState.currentTurn = gameState.currentTurn === "player" ? "opponent" : "player";
    
    // 增加回合数
    gameState.turnCount++;
    
    // 恢复燃油
    if (gameState.currentTurn === "player") {
        // 玩家回合
        gameState.player.maxFuel = Math.min(gameState.turnCount, 20);
        gameState.player.fuel = gameState.player.maxFuel + gameState.player.fuelReserve;
        gameState.player.fuelReserve = 0;
        gameState.player.usedDispatch = false;
        
        // 重置玩家坦克的攻击状态
        gameState.player.frontRow.forEach(tank => {
            if (tank) {
                tank.hasAttacked = false;
            }
        });
        gameState.player.backRow.forEach(tank => {
            if (tank) {
                tank.hasAttacked = false;
            }
        });
        
        // 玩家抽牌
        if (gameState.player.deck.length > 0) {
            gameState.player.hand.push(gameState.player.deck.pop());
        }
    } else {
        // 对手回合
        gameState.opponent.maxFuel = Math.min(gameState.turnCount, 20);
        gameState.opponent.fuel = gameState.opponent.maxFuel + gameState.opponent.fuelReserve;
        gameState.opponent.fuelReserve = 0;
        gameState.opponent.usedDispatch = false;
        
        // 重置对手坦克的攻击状态
        gameState.opponent.frontRow.forEach(tank => {
            if (tank) {
                tank.hasAttacked = false;
            }
        });
        gameState.opponent.backRow.forEach(tank => {
            if (tank) {
                tank.hasAttacked = false;
            }
        });
        
        // 对手抽牌
        if (gameState.opponent.deck.length > 0) {
            gameState.opponent.hand.push(gameState.opponent.deck.pop());
        }
        
        // 对手AI行动
        setTimeout(opponentTurn, 1000);
    }
    
    // 渲染游戏界面
    renderGame();
}

// 对手回合AI
async function opponentTurn() {
    // 智能AI：根据战场局势做出策略性决策
    const opponentHand = gameState.opponent.hand;
    const allOpponentUnits = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    const allPlayerUnits = [...gameState.player.frontRow, ...gameState.player.backRow];
    
    // 分析战场局势
    const battlefieldAnalysis = {
        hasFrontline: gameState.opponent.frontRow.length > 0,
        hasBackline: gameState.opponent.backRow.length > 0,
        playerHasUnits: allPlayerUnits.length > 0,
        opponentLowHealth: allOpponentUnits.some(unit => unit.health <= 3),
        playerLowHealth: allPlayerUnits.some(unit => unit.health <= 3),
        playerHighAttack: allPlayerUnits.some(unit => unit.attack >= 3)
    };
    
    // 智能排序手牌：优先使用能应对当前局势的卡牌
    opponentHand.sort((a, b) => {
        // 计算卡牌优先级
        const getPriority = (card) => {
            let priority = (card.cost || 0); // 基础优先级为费用
            
            // 根据战场局势调整优先级
            if (card.effectType === 'singleHeal' && battlefieldAnalysis.opponentLowHealth) {
                priority += 5; // 优先使用治疗卡
            }
            if (card.effectType === 'smokeScreen' && battlefieldAnalysis.playerHighAttack) {
                priority += 4; // 优先使用防御卡
            }
            if (card.effectType === 'aoeDamage' && battlefieldAnalysis.playerHasUnits) {
                priority += 3; // 优先使用群体伤害
            }
            if (card.type === '重型' && !battlefieldAnalysis.hasFrontline) {
                priority += 3; // 优先部署前排坦克
            }
            if (card.type === '反坦克炮' && battlefieldAnalysis.playerHasUnits) {
                priority += 2; // 优先部署反坦克炮
            }
            
            return priority;
        };
        
        return getPriority(b) - getPriority(a);
    });
    
    let playedCard = false;
    
    for (let i = 0; i < opponentHand.length; i++) {
        const card = opponentHand[i];
        
        // 检查燃油是否足够
        if (card.cost > gameState.opponent.fuel) {
            continue;
        }
        
        // 检查战场位置是否已满
        if (card.type && allOpponentUnits.length >= 6) {
            continue;
        }
        
        // 消耗燃油
        gameState.opponent.fuel -= card.cost;
        
        // 从手牌中移除卡牌
        const cardToPlay = opponentHand.splice(i, 1)[0];
        // 添加到弃牌堆
        gameState.opponent.discardPile.push(cardToPlay);
        
        playedCard = true;
        
        // 显示AI出牌意图
        showEffectText(document.getElementById('opponentHand'), `AI使用${card.name}！`);
        
        if (card.type) {
            // 坦克卡
            // 应用国家阵营特色加成
            const tankWithBonus = applyCountryBonus({...card}, false);
            
            // 根据坦克类型决定放置位置
            const tankType = tankWithBonus.type;
            if (tankType === '重型' || tankType === '中型') {
                // 重坦和中坦放在前排
                if (gameState.opponent.frontRow.length < 3) {
                    gameState.opponent.frontRow.push(tankWithBonus);
                    // 渲染游戏界面以显示新部署的坦克
                    renderGame();
                    // 显示对手卡牌动画
                    setTimeout(() => {
                        const tankElement = document.getElementById('opponentFrontRow').lastChild;
                        if (tankElement) {
                            tankElement.classList.add('animate-opponent-card-rotate');
                            showEffectText(tankElement, `${tankWithBonus.name}部署到前排！`);
                        }
                    }, 100);
                }
            } else if (tankType === '轻型' || tankType === '反坦克炮' || tankType === '辅助') {
                // 轻坦、反坦克炮和辅助单位可放在前排或后排
                if (gameState.opponent.backRow.length < 3) {
                    gameState.opponent.backRow.push(tankWithBonus);
                    // 渲染游戏界面以显示新部署的坦克
                    renderGame();
                    // 显示对手卡牌动画
                    setTimeout(() => {
                        const tankElement = document.getElementById('opponentBackRow').lastChild;
                        if (tankElement) {
                            tankElement.classList.add('animate-opponent-card-rotate');
                            showEffectText(tankElement, `${tankWithBonus.name}部署到后排！`);
                        }
                    }, 100);
                } else if (gameState.opponent.frontRow.length < 3) {
                    gameState.opponent.frontRow.push(tankWithBonus);
                    // 渲染游戏界面以显示新部署的坦克
                    renderGame();
                    // 显示对手卡牌动画
                    setTimeout(() => {
                        const tankElement = document.getElementById('opponentFrontRow').lastChild;
                        if (tankElement) {
                            tankElement.classList.add('animate-opponent-card-rotate');
                            showEffectText(tankElement, `${tankWithBonus.name}部署到前排！`);
                        }
                    }, 100);
                }
            } else {
                // 默认放在前排
                if (gameState.opponent.frontRow.length < 3) {
                    gameState.opponent.frontRow.push(tankWithBonus);
                    // 渲染游戏界面以显示新部署的坦克
                    renderGame();
                    // 显示对手卡牌动画
                    setTimeout(() => {
                        const tankElement = document.getElementById('opponentFrontRow').lastChild;
                        if (tankElement) {
                            tankElement.classList.add('animate-opponent-card-rotate');
                            showEffectText(tankElement, `${tankWithBonus.name}部署到前排！`);
                        }
                    }, 100);
                }
            }
            
            // 触发坦克技能
            if (tankWithBonus.abilityType === 'heavyArmor' || tankWithBonus.abilityType === 'invincibleWall') {
                // 重型坦克的固守能力
                tankWithBonus.defense = 1;
                // 显示效果文字
                const tankElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(tankWithBonus)] || 
                                   document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(tankWithBonus)];
                if (tankElement) {
                    showEffectText(tankElement, `${tankWithBonus.name}获得固守效果！`);
                }
            } else if (tankWithBonus.abilityType === 'scout') {
                // 侦察：上场时可侦察对方1张手牌
                if (gameState.player.hand.length > 0) {
                    const randomIndex = Math.floor(Math.random() * gameState.player.hand.length);
                    const playerCard = gameState.player.hand[randomIndex];
                    // 显示效果文字
                    const tankElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(tankWithBonus)] || 
                                       document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(tankWithBonus)];
                    if (tankElement) {
                        showEffectText(tankElement, `侦察到对方手牌：${playerCard.name}`);
                    }
                }
            } else if (tankWithBonus.abilityType === 'quickRush') {
                // 快速突袭：部署后可立即攻击一次
                // 显示效果文字
                const tankElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(tankWithBonus)] || 
                                   document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(tankWithBonus)];
                if (tankElement) {
                    showEffectText(tankElement, `${tankWithBonus.name}触发快速突袭！`);
                }
            } else if (tankWithBonus.abilityType === 'cluster') {
                // 集群作战：场上每有1个其他苏联坦克，攻击力+1
                const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
                const sovietTanks = allOpponentTanks.filter(t => t.country === '苏联' && t !== tankWithBonus).length;
                if (sovietTanks > 0) {
                    tankWithBonus.attack += sovietTanks;
                    // 显示效果文字
                    const tankElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(tankWithBonus)] || 
                                       document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(tankWithBonus)];
                    if (tankElement) {
                        showEffectText(tankElement, `${tankWithBonus.name}触发集群作战，获得${sovietTanks}点攻击力！`);
                    }
                }
            }
        } else if (card.effect) {
            if (card.duration) {
                // 地形卡
                gameState.opponent.activeTerrain = card;
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `地形：${card.name} 生效，持续${card.duration}回合`);
            } else {
                // 指令卡/配件卡/乘员卡
                handleOpponentSupportCard(card);
            }
        }
        
        // 暂停一下，让动画有时间播放
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 继续尝试出牌
        return opponentTurn();
    }
    
    // 没有可出的牌，开始攻击
    if (!playedCard) {
        opponentAttack();
        
        // 结束对手回合
        setTimeout(() => {
            endTurn();
        }, 1000);
    }
}

// 处理对手支援卡效果
function handleOpponentSupportCard(card) {
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    
    switch (card.effectType) {
        case 'aoeDamage':
            // 对敌方所有坦克造成伤害
            allPlayerTanks.forEach(target => {
                target.health -= card.value;
                // 显示伤害数字
                const targetElement = document.getElementById('playerFrontRow').children[gameState.player.frontRow.indexOf(target)] || 
                                     document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(target)];
                if (targetElement) {
                    showDamageNumber(targetElement, card.value, true);
                    showHitAnimation(targetElement);
                }
            });
            // 显示效果文字
            showEffectText(document.getElementById('opponentHand'), `炮火覆盖！对我方所有坦克造成${card.value}点伤害！`);
            break;
        case 'singleHeal':
            // 给单个坦克加血
            if (allOpponentTanks.length > 0) {
                // AI选择血量最低的坦克
                const target = allOpponentTanks.reduce((min, tank) => tank.health < min.health ? tank : min, allOpponentTanks[0]);
                target.health += card.value;
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `紧急维修！给${target.name}恢复${card.value}点生命值！`);
            }
            break;
        case 'airSupport':
            // 无视装甲攻击敌方后排
            const playerBackRow = gameState.player.backRow;
            if (playerBackRow.length > 0) {
                playerBackRow.forEach(target => {
                    target.health -= card.value;
                    // 显示伤害数字
                    const targetElement = document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(target)];
                    if (targetElement) {
                        showDamageNumber(targetElement, card.value, true);
                        showHitAnimation(targetElement);
                    }
                });
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `空中支援！对我方后排造成${card.value}点伤害！`);
            }
            break;
        case 'smokeScreen':
            // 给友军加闪避，规避一次攻击
            if (allOpponentTanks.length > 0) {
                // AI选择最前面的坦克
                const target = allOpponentTanks[0];
                target.evasion = true;
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `烟雾弹！${target.name}获得闪避效果！`);
            }
            break;
        case 'reactiveArmor':
            // 反应装甲：抵消一次伤害
            if (allOpponentTanks.length > 0) {
                // AI选择最前面的坦克
                const target = allOpponentTanks[0];
                target.reactiveArmor = true;
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `反应装甲已装备到${target.name}！`);
            }
            break;
        case 'stabilizer':
            // 垂直稳定器：提升命中
            if (allOpponentTanks.length > 0) {
                // AI选择攻击力最高的坦克
                const target = allOpponentTanks.reduce((max, tank) => tank.attack > max.attack ? tank : max, allOpponentTanks[0]);
                target.accuracy = (target.accuracy || 1) * (1 + card.value);
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `垂直稳定器已装备到${target.name}！`);
            }
            break;
        case 'highPowerScope':
            // 高光镜：强化侦察效果
            if (allOpponentTanks.length > 0) {
                // AI选择轻坦
                const lightTanks = allOpponentTanks.filter(tank => tank.type === '轻型');
                if (lightTanks.length > 0) {
                    const target = lightTanks[0];
                    target.scoutBonus = (target.scoutBonus || 1) * (1 + card.value);
                    // 显示效果文字
                    showEffectText(document.getElementById('opponentHand'), `高光镜已装备到${target.name}！`);
                }
            }
            break;
        case 'aceCommander':
        case 'wittmann':
        case 'carius':
            // 乘员卡：提升坦克性能
            if (allOpponentTanks.length > 0) {
                // AI选择攻击力最高的坦克
                const target = allOpponentTanks.reduce((max, tank) => tank.attack > max.attack ? tank : max, allOpponentTanks[0]);
                target.piercing = Math.floor(target.piercing * (1 + card.value));
                target.criticalChance = (target.criticalChance || 0) + card.value * 0.5;
                // 显示效果文字
                showEffectText(document.getElementById('opponentHand'), `${card.name}已任命到${target.name}！`);
            }
            break;
    }
    
    // 检查是否有坦克被摧毁
    gameState.player.frontRow = gameState.player.frontRow.filter(tank => tank.health > 0);
    gameState.player.backRow = gameState.player.backRow.filter(tank => tank.health > 0);
    gameState.opponent.frontRow = gameState.opponent.frontRow.filter(tank => tank.health > 0);
    gameState.opponent.backRow = gameState.opponent.backRow.filter(tank => tank.health > 0);
    
    // 检查游戏结束条件
    checkGameOver();
}

// 对手攻击
function opponentAttack() {
    const allOpponentTanks = [...gameState.opponent.frontRow, ...gameState.opponent.backRow];
    const allPlayerTanks = [...gameState.player.frontRow, ...gameState.player.backRow];
    
    if (allOpponentTanks.length === 0 || allPlayerTanks.length === 0) return;
    
    // AI坦克攻击
    allOpponentTanks.forEach(attacker => {
        if (allPlayerTanks.length > 0) {
            // AI智能选择目标：优先攻击血量低的坦克，其次攻击高攻击的坦克
            let target = allPlayerTanks[0];
            let lowestHealth = target.health;
            let highestAttack = target.attack;
            
            for (let i = 1; i < allPlayerTanks.length; i++) {
                const tank = allPlayerTanks[i];
                // 优先选择血量低的坦克
                if (tank.health < lowestHealth) {
                    lowestHealth = tank.health;
                    target = tank;
                } else if (tank.health === lowestHealth && tank.attack > highestAttack) {
                    // 血量相同时选择攻击高的坦克
                    highestAttack = tank.attack;
                    target = tank;
                }
            }
            
            // 显示AI攻击意图
            const attackerElement = document.getElementById('opponentFrontRow').children[gameState.opponent.frontRow.indexOf(attacker)] || 
                                   document.getElementById('opponentBackRow').children[gameState.opponent.backRow.indexOf(attacker)];
            if (attackerElement) {
                showEffectText(attackerElement, `AI选择攻击${target.name}！`);
            }
            
            // 计算伤害
            let damage = attacker.attack;
            
            // 应用技能效果
            if (attacker.abilityType === 'precision') {
                damage += 1; // 无视1点护甲
            }
            
            // 应用装甲和穿深效果
            if (attacker.piercing > target.armor) {
                // 穿深大于装甲，造成全额伤害
            } else {
                // 穿深小于等于装甲，造成半伤
                damage = Math.floor(damage / 2);
            }
            
            // 应用防御效果
            if (target.defense) {
                damage = Math.max(0, damage - target.defense);
            }
            
            // 应用闪避效果
            if (target.evasion) {
                // 50%几率闪避
                if (Math.random() < 0.5) {
                    // 显示闪避动画
                    const targetElement = document.getElementById('playerFrontRow').children[gameState.player.frontRow.indexOf(target)] || 
                                         document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(target)];
                    if (targetElement) {
                        showEvadeAnimation(targetElement);
                        showEffectText(targetElement, `${target.name}闪避了攻击！`);
                    }
                    target.evasion = false;
                    return;
                } else {
                    target.evasion = false;
                }
            }
            
            // 应用反应装甲效果
            if (target.reactiveArmor) {
                // 显示效果文字
                const targetElement = document.getElementById('playerFrontRow').children[gameState.player.frontRow.indexOf(target)] || 
                                     document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(target)];
                if (targetElement) {
                    showEffectText(targetElement, `${target.name}的反应装甲抵消了伤害！`);
                }
                target.reactiveArmor = false;
                return;
            }
            
            // 造成伤害
            target.health -= damage;
            
            // 显示伤害数字和击中动画
            const targetElement = document.getElementById('playerFrontRow').children[gameState.player.frontRow.indexOf(target)] || 
                                 document.getElementById('playerBackRow').children[gameState.player.backRow.indexOf(target)];
            
            if (attackerElement) {
                showEffectText(attackerElement, `${attacker.name}攻击了${target.name}！`);
            }
            
            if (targetElement) {
                showDamageNumber(targetElement, damage, true);
                showHitAnimation(targetElement);
                // 显示攻击数值浮动文字
                showEffectText(targetElement, `攻击+${damage}`);
            }
            
            // 移除反击机制，改为同一回合操作
            // 反坦克炮和其他坦克都不会反击
            
            // 检查目标是否被摧毁
            if (target.health <= 0) {
                if (targetElement) {
                    showEffectText(targetElement, `${target.name}被摧毁了！`);
                }
            }
            
            // 检查攻击者是否被反击摧毁
            if (attacker.health <= 0) {
                if (attackerElement) {
                    showEffectText(attackerElement, `${attacker.name}被摧毁了！`);
                }
            }
        }
    });
    
    // 清理死亡坦克
    gameState.player.frontRow = gameState.player.frontRow.filter(tank => tank.health > 0);
    gameState.player.backRow = gameState.player.backRow.filter(tank => tank.health > 0);
    gameState.opponent.frontRow = gameState.opponent.frontRow.filter(tank => tank.health > 0);
    gameState.opponent.backRow = gameState.opponent.backRow.filter(tank => tank.health > 0);
    
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
    
    // 检查玩家卡组耗尽
    if (gameState.player.deck.length === 0 && gameState.player.hand.length === 0) {
        alert('游戏结束！玩家卡组耗尽，对手胜利！');
        return;
    }
    
    // 检查对手卡组耗尽
    if (gameState.opponent.deck.length === 0 && gameState.opponent.hand.length === 0) {
        alert('游戏结束！对手卡组耗尽，玩家胜利！');
        return;
    }
}

// 显示坦克移动选项
function showMoveOptions(card, index, position) {
    // 清除之前的移动选项
    clearMoveOptions();
    
    // 计算可移动的位置
    const validPositions = calculateValidMovePositions(card, index, position);
    
    // 显示可移动位置
    validPositions.forEach(pos => {
        const positionElement = document.createElement('div');
        positionElement.className = 'move-option absolute w-16 h-24 border-2 border-green-500 rounded-md flex items-center justify-center cursor-pointer';
        positionElement.style.left = pos.x + 'px';
        positionElement.style.top = pos.y + 'px';
        positionElement.style.zIndex = '1000';
        positionElement.innerHTML = '<i class="fa fa-check text-green-500 text-xl"></i>';
        
        // 添加点击事件
        positionElement.addEventListener('click', () => {
            moveTank(card, index, position, pos.target);
        });
        
        document.getElementById('gameBoard').appendChild(positionElement);
    });
}

// 清除移动选项
function clearMoveOptions() {
    const moveOptions = document.querySelectorAll('.move-option');
    moveOptions.forEach(option => option.remove());
}

// 计算可移动的位置
function calculateValidMovePositions(card, index, position) {
    const validPositions = [];
    const speed = card.speed || 1;
    
    // 玩家的前后排
    const playerFrontRow = document.getElementById('playerFrontRow');
    const playerBackRow = document.getElementById('playerBackRow');
    
    // 对手的前后排
    const opponentFrontRow = document.getElementById('opponentFrontRow');
    const opponentBackRow = document.getElementById('opponentBackRow');
    
    // 检查玩家前排
    if (speed >= 1) {
        for (let i = 0; i < 3; i++) {
            if (!gameState.player.frontRow[i]) {
                const rect = playerFrontRow.getBoundingClientRect();
                const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
                validPositions.push({
                    x: rect.left - gameBoardRect.left + (i * 72),
                    y: rect.top - gameBoardRect.top,
                    target: { side: 'player', row: 'front', index: i }
                });
            }
        }
    }
    
    // 检查玩家后排
    if (speed >= 1) {
        for (let i = 0; i < 3; i++) {
            if (!gameState.player.backRow[i]) {
                const rect = playerBackRow.getBoundingClientRect();
                const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
                validPositions.push({
                    x: rect.left - gameBoardRect.left + (i * 72),
                    y: rect.top - gameBoardRect.top,
                    target: { side: 'player', row: 'back', index: i }
                });
            }
        }
    }
    
    // 检查对手前排（需要speed >= 2）
    if (speed >= 2) {
        for (let i = 0; i < 3; i++) {
            if (!gameState.opponent.frontRow[i]) {
                const rect = opponentFrontRow.getBoundingClientRect();
                const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
                validPositions.push({
                    x: rect.left - gameBoardRect.left + (i * 72),
                    y: rect.top - gameBoardRect.top,
                    target: { side: 'opponent', row: 'front', index: i }
                });
            }
        }
    }
    
    // 检查对手后排（需要speed >= 3）
    if (speed >= 3) {
        for (let i = 0; i < 3; i++) {
            if (!gameState.opponent.backRow[i]) {
                const rect = opponentBackRow.getBoundingClientRect();
                const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
                validPositions.push({
                    x: rect.left - gameBoardRect.left + (i * 72),
                    y: rect.top - gameBoardRect.top,
                    target: { side: 'opponent', row: 'back', index: i }
                });
            }
        }
    }
    
    return validPositions;
}

// 移动坦克
function moveTank(card, index, currentPosition, targetPosition) {
    // 计算燃油消耗
    let fuelCost = 0;
    if (card.type === '轻型') {
        fuelCost = 1; // 轻坦移动任意格消耗1燃油
    } else if (card.type === '中型') {
        fuelCost = 1; // 中坦移动1格消耗1燃油
    } else if (card.type === '重型') {
        fuelCost = 2; // 重坦移动1格消耗2燃油
    } else {
        fuelCost = 1; // 其他类型默认消耗1燃油
    }
    
    // 检查燃油是否足够
    if (gameState.player.fuel < fuelCost) {
        alert('燃油不足！');
        clearMoveOptions();
        return;
    }
    
    // 消耗燃油
    gameState.player.fuel -= fuelCost;
    
    // 从当前位置移除坦克
    if (currentPosition === 'front') {
        gameState.player.frontRow.splice(index, 1);
    } else if (currentPosition === 'back') {
        gameState.player.backRow.splice(index, 1);
    }
    
    // 添加到目标位置
    if (targetPosition.side === 'player') {
        if (targetPosition.row === 'front') {
            gameState.player.frontRow[targetPosition.index] = card;
        } else if (targetPosition.row === 'back') {
            gameState.player.backRow[targetPosition.index] = card;
        }
    } else if (targetPosition.side === 'opponent') {
        if (targetPosition.row === 'front') {
            gameState.opponent.frontRow[targetPosition.index] = card;
        } else if (targetPosition.row === 'back') {
            gameState.opponent.backRow[targetPosition.index] = card;
        }
    }
    
    // 清除移动选项
    clearMoveOptions();
    
    // 重新渲染游戏
    renderGame();
    
    // 显示移动效果文字
    showEffectText(document.getElementById('gameBoard'), `${card.name}移动到新位置，消耗${fuelCost}点燃油！`);
}

// 显示攻击选项
function showAttackOptions(card, index, position) {
    // 清除之前的移动选项
    clearMoveOptions();
    
    // 计算可攻击的目标
    const validTargets = calculateValidAttackTargets(card, index, position);
    
    // 显示可攻击目标
    validTargets.forEach(target => {
        const targetElement = document.createElement('div');
        targetElement.className = 'move-option absolute w-16 h-24 border-2 border-red-500 rounded-md flex items-center justify-center cursor-pointer';
        targetElement.style.left = target.x + 'px';
        targetElement.style.top = target.y + 'px';
        targetElement.style.zIndex = '1000';
        targetElement.innerHTML = '<i class="fa fa-crosshairs text-red-500 text-xl"></i>';
        
        // 添加点击事件
        targetElement.addEventListener('click', () => {
            attackTarget(card, index, position, target.target);
        });
        
        document.getElementById('gameBoard').appendChild(targetElement);
    });
}

// 计算可攻击的目标
function calculateValidAttackTargets(card, index, position) {
    const validTargets = [];
    const attackRange = card.attackRange || 1;
    
    // 对手的前后排
    const opponentFrontRow = document.getElementById('opponentFrontRow');
    const opponentBackRow = document.getElementById('opponentBackRow');
    
    // 检查对手前排
    for (let i = 0; i < 3; i++) {
        if (gameState.opponent.frontRow[i]) {
            const rect = opponentFrontRow.getBoundingClientRect();
            const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
            validTargets.push({
                x: rect.left - gameBoardRect.left + (i * 72),
                y: rect.top - gameBoardRect.top,
                target: { type: 'tank', side: 'opponent', row: 'front', index: i }
            });
        }
    }
    
    // 检查对手后排
    for (let i = 0; i < 3; i++) {
        if (gameState.opponent.backRow[i]) {
            const rect = opponentBackRow.getBoundingClientRect();
            const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
            validTargets.push({
                x: rect.left - gameBoardRect.left + (i * 72),
                y: rect.top - gameBoardRect.top,
                target: { type: 'tank', side: 'opponent', row: 'back', index: i }
            });
        }
    }
    
    // 检查大本营（如果坦克在交火区）
    if (position === 'front') {
        const opponentCommander = document.getElementById('opponentCommander');
        const rect = opponentCommander.getBoundingClientRect();
        const gameBoardRect = document.getElementById('gameBoard').getBoundingClientRect();
        validTargets.push({
            x: rect.left - gameBoardRect.left + 100,
            y: rect.top - gameBoardRect.top + 20,
            target: { type: 'base', side: 'opponent' }
        });
    }
    
    return validTargets;
}

// 攻击目标
function attackTarget(card, index, position, target) {
    // 标记坦克已攻击
    card.hasAttacked = true;
    
    if (target.type === 'tank') {
        // 攻击敌方坦克
        let targetTank;
        if (target.side === 'opponent') {
            if (target.row === 'front') {
                targetTank = gameState.opponent.frontRow[target.index];
            } else if (target.row === 'back') {
                targetTank = gameState.opponent.backRow[target.index];
            }
        }
        
        if (targetTank) {
            // 计算伤害
            let damage = card.attack;
            
            // 应用技能效果
            if (card.abilityType === 'precision') {
                damage += 1; // 无视1点护甲
            }
            
            // 应用装甲和穿深效果
            if (card.piercing > targetTank.armor) {
                // 穿深大于装甲，造成全额伤害
            } else {
                // 穿深小于等于装甲，造成半伤
                damage = Math.floor(damage / 2);
            }
            
            // 应用防御效果
            if (targetTank.defense) {
                damage = Math.max(0, damage - targetTank.defense);
            }
            
            // 应用闪避效果
            if (targetTank.evasion) {
                // 50%几率闪避
                if (Math.random() < 0.5) {
                    // 显示闪避动画
                    const targetElement = document.getElementById('opponentFrontRow').children[target.index] || 
                                         document.getElementById('opponentBackRow').children[target.index];
                    if (targetElement) {
                        showEvadeAnimation(targetElement);
                        showEffectText(targetElement, `${targetTank.name}闪避了攻击！`);
                    }
                    targetTank.evasion = false;
                    clearMoveOptions();
                    renderGame();
                    return;
                } else {
                    targetTank.evasion = false;
                }
            }
            
            // 应用反应装甲效果
            if (targetTank.reactiveArmor) {
                // 显示效果文字
                const targetElement = document.getElementById('opponentFrontRow').children[target.index] || 
                                     document.getElementById('opponentBackRow').children[target.index];
                if (targetElement) {
                    showEffectText(targetElement, `${targetTank.name}的反应装甲抵消了伤害！`);
                }
                targetTank.reactiveArmor = false;
                clearMoveOptions();
                renderGame();
                return;
            }
            
            // 造成伤害
            targetTank.health -= damage;
            
            // 显示伤害数字和击中动画
            const targetElement = document.getElementById('opponentFrontRow').children[target.index] || 
                                 document.getElementById('opponentBackRow').children[target.index];
            const attackerElement = document.getElementById('playerFrontRow').children[index] || 
                                   document.getElementById('playerBackRow').children[index];
            
            if (attackerElement) {
                showEffectText(attackerElement, `${card.name}攻击了${targetTank.name}！`);
            }
            
            if (targetElement) {
                showDamageNumber(targetElement, damage, false);
                showHitAnimation(targetElement);
                showEffectText(targetElement, `攻击+${damage}`);
            }
            
            // 移除反击机制，改为同一回合操作
            // 反坦克炮和其他坦克都不会反击
            
            // 检查目标是否被摧毁
            if (targetTank.health <= 0) {
                if (targetElement) {
                    showEffectText(targetElement, `${targetTank.name}被摧毁了！`);
                }
                // 从战场移除
                if (target.row === 'front') {
                    gameState.opponent.frontRow[target.index] = null;
                } else if (target.row === 'back') {
                    gameState.opponent.backRow[target.index] = null;
                }
            }
            
            // 检查攻击者是否被反击摧毁
            if (card.health <= 0) {
                if (attackerElement) {
                    showEffectText(attackerElement, `${card.name}被摧毁了！`);
                }
                // 从战场移除
                if (position === 'front') {
                    gameState.player.frontRow[index] = null;
                } else if (position === 'back') {
                    gameState.player.backRow[index] = null;
                }
            }
        }
    } else if (target.type === 'base') {
        // 攻击敌方大本营
        let damage = card.attack;
        gameState.opponent.health -= damage;
        
        // 显示伤害数字和击中动画
        const opponentCommander = document.getElementById('opponentCommander');
        const attackerElement = document.getElementById('playerFrontRow').children[index] || 
                               document.getElementById('playerBackRow').children[index];
        
        if (attackerElement) {
            showEffectText(attackerElement, `${card.name}攻击了敌方大本营！`);
        }
        
        if (opponentCommander) {
            showDamageNumber(opponentCommander, damage, false);
            showHitAnimation(opponentCommander);
            showEffectText(opponentCommander, `攻击+${damage}`);
        }
    }
    
    // 清除攻击选项
    clearMoveOptions();
    
    // 重新渲染游戏
    renderGame();
    
    // 检查游戏结束条件
    checkGameOver();
}

// 初始化游戏
window.onload = function() {
    // 添加游戏模式选择事件监听
    const playTurnBasedBtn = document.getElementById('playAgainstAI');
    const playRoyalModeBtn = document.getElementById('playRoyalMode');
    
    if (playTurnBasedBtn) {
        playTurnBasedBtn.addEventListener('click', function() {
            gameState.gameMode = "turnBased";
            startGame();
        });
    }
    
    if (playRoyalModeBtn) {
        playRoyalModeBtn.addEventListener('click', function() {
            gameState.gameMode = "continuous";
            startGame();
        });
    }
    
    // 添加投降按钮事件监听
    const surrenderBtn = document.getElementById('surrenderBtn');
    if (surrenderBtn) {
        surrenderBtn.addEventListener('click', function() {
            if (confirm('确定要投降吗？')) {
                alert('游戏结束！玩家投降，对手胜利！');
                // 可以在这里添加重置游戏的逻辑
            }
        });
    }
};

// 开始游戏
function startGame() {
    // 初始化游戏状态
    initGameState();
    
    // 初始化玩家和对手的卡组
    initDecks();
    
    // 初始化玩家和对手的手牌
    drawInitialCards();
    
    // 选择指挥官
    selectCommanders();
    
    // 渲染游戏界面
    renderGame();
    
    // 如果是持续对战模式，启动游戏循环
    if (gameState.gameMode === "continuous") {
        gameLoop();
    }
}

// 初始化游戏状态
function initGameState() {
    gameState = {
        gameMode: gameState.gameMode,
        turnCount: 1,
        currentTurn: "player",
        gameTime: 300, // 持续对战模式时间限制（秒）
        fuelProductionRate: 1, // 燃油产出速率（每秒）
        lastFuelProduction: Date.now(),
        lastEventTime: Date.now(),
        activeEvent: null,
        player: {
            health: 50,
            fuel: 3,
            maxFuel: 20,
            fuelReserve: 0,
            deck: [],
            hand: [],
            frontRow: [],
            backRow: [],
            activeTerrain: null,
            commander: null,
            usedOversupply: 0,
            usedDispatch: false,
            discardPile: [],
            specialSkillCooldown: 0
        },
        opponent: {
            health: 50,
            fuel: 3,
            maxFuel: 20,
            fuelReserve: 0,
            deck: [],
            hand: [],
            frontRow: [],
            backRow: [],
            activeTerrain: null,
            commander: null,
            usedOversupply: 0,
            usedDispatch: false,
            discardPile: [],
            specialSkillCooldown: 0
        },
        selectedCard: null,
        gamePhase: "deploy"
    };
}

// 皇室战争模式游戏循环
function startRoyalGameLoop() {
    const gameLoop = setInterval(function() {
        // 检查游戏是否结束
        if (checkGameOver()) {
            clearInterval(gameLoop);
            return;
        }
        
        // 检查时间
        gameState.gameTime--;
        if (gameState.gameTime <= 0) {
            // 时间结束，比较双方生命值
            if (gameState.player.health > gameState.opponent.health) {
                alert('游戏结束！时间到，玩家胜利！');
            } else if (gameState.player.health < gameState.opponent.health) {
                alert('游戏结束！时间到，对手胜利！');
            } else {
                alert('游戏结束！时间到，平局！');
            }
            clearInterval(gameLoop);
            return;
        }
        
        // 燃油持续产出
        const now = Date.now();
        if (now - gameState.lastFuelProduction >= 1000) {
            // 增加燃油
            gameState.player.fuel = Math.min(gameState.player.fuel + gameState.fuelProductionRate, gameState.player.maxFuel);
            gameState.opponent.fuel = Math.min(gameState.opponent.fuel + gameState.fuelProductionRate, gameState.opponent.maxFuel);
            gameState.lastFuelProduction = now;
            
            // 渲染游戏界面
            renderGame();
        }
        
        // AI随机行动
        if (Math.random() < 0.1) { // 10%几率AI行动
            opponentTurn();
        }
    }, 1000);
}
