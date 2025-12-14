// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "有趣的朋友",  // 同上...
        "今天是你的生日",
        "没什么送你的",
        "凑合凑合，别介意",
        "那么，步入正题",
        "在我眼里你是一个",
        "公私分明",
        "熟悉了就露出“真面目”的人",
	"你是个记性又好又坏的人",
        "你记下了我们”燃冬“的",
        "很多有趣经历（虽然都是失误画面）",
        "smgfxyjq！！！",
        "你玩记者比较多",
        "结果发现你确实也是一个”记者“",
        "什么丢脸操作都被你记录下来了",
        "最后，祝你生日快乐~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "有趣的朋友": "./imgs/nothing.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "没什么送你的": "./imgs/zaiyiqi.png",
        "凑合凑合，别介意": "./imgs/nothing.jpg",
        "那么，步入正题": "./imgs/yangzi.jpeg",
        "在我眼里你是一个": "./imgs/nothing.jpg",
        "公私分明": "./imgs/nothing.jpg",
        "熟悉了就露出“真面目”的人": "./imgs/nothing.jpg",
        "你是个记性又好又坏的人": "./imgs/nothing.jpg",
        "你记下了我们”燃冬“的": "./imgs/chuo.gif",
        "很多有趣经历（虽然都是失误画面）": "./imgs/chihaodian.jpeg",
        "smgfxyjq！！！": "./imgs/weibao.jpeg",
        "你玩记者比较多": "./imgs/nothing.jpg",
        "结果发现你确实也是一个”记者“": "./imgs/nothing.jpg",
        "什么丢脸操作都被你记录下来了": "./imgs/nothing.jpg",
	"最后，祝你生日快乐~":""
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '老萝卜署名'
};
