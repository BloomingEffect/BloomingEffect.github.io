/*
-------------------------------------------------------
My Story Begins - The JavaScript
-------------------------------------------------------
*/

let letterDescSet1;
let letterDescSet2;
let letterDescSet3;
let letterDescSet4;

let linkFirstnameID;
let linkSubmissionID;

let showUsername;

let showLetterDesc01;

let username;

let upperCaseLetters;
let lowerCaseLetters;

let letterDescA;
let letterDescB;
let letterDescC;
let letterDescD;
let letterDescE;
let letterDescF;
let letterDescG;
let letterDescH;
let letterDescI;
let letterDescJ;
let letterDescK;
let letterDescL;
let letterDescM;
let letterDescN;
let letterDescO;
let letterDescP;
let letterDescQ;
let letterDescR;
let letterDescS;
let letterDescT;
let letterDescU;
let letterDescV;
let letterDescW;
let letterDescX;
let letterDescY;
let letterDescZ;

let randomLetterDescA;
let randomLetterDescB;
let randomLetterDescC;
let randomLetterDescD;
let randomLetterDescE;
let randomLetterDescF;
let randomLetterDescG;
let randomLetterDescH;
let randomLetterDescI;
let randomLetterDescJ;
let randomLetterDescK;
let randomLetterDescL;
let randomLetterDescM;
let randomLetterDescN;
let randomLetterDescO;
let randomLetterDescP;
let randomLetterDescQ;
let randomLetterDescR;
let randomLetterDescS;
let randomLetterDescT;
let randomLetterDescU;
let randomLetterDescV;
let randomLetterDescW;
let randomLetterDescX;
let randomLetterDescY;
let randomLetterDescZ;

function appArrays()
{
    upperCaseLetters=new Array(26);
    lowerCaseLetters=new Array(26);

    letterDescA=new Array(10);
    letterDescB=new Array(10);
    letterDescC=new Array(10);
    letterDescD=new Array(10);
    letterDescE=new Array(10);
    letterDescF=new Array(10);
    letterDescG=new Array(10);
    letterDescH=new Array(10);
    letterDescI=new Array(10);
    letterDescJ=new Array(10);
    letterDescK=new Array(10);
    letterDescL=new Array(10);
    letterDescM=new Array(10);
    letterDescN=new Array(10);
    letterDescO=new Array(10);
    letterDescP=new Array(10);
    letterDescQ=new Array(10);
    letterDescR=new Array(10);
    letterDescS=new Array(10);
    letterDescT=new Array(10);
    letterDescU=new Array(10);
    letterDescV=new Array(10);
    letterDescW=new Array(10);
    letterDescX=new Array(10);
    letterDescY=new Array(10);
    letterDescZ=new Array(10);

    upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M",
                      "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];

    letterDescA=["Able","Adeptable","Affectionate","Ambitious","Amiable",
                 "Analytical","Articulate","Assertive","Attentive","Authentic"];
    letterDescB=["Balanced","Benevolent","Bold","Brave","Bright",
                 "Brilliant","Broad-minded","Bubbly","Busy","By-the-Book"];
    letterDescC=["Calm","Capable","Caring","Charismatic","Cheerful",
                 "Clever","Committed","Compassionate","Confident","Creative"];
    letterDescD=["Decent","Dedicated","Dependable","Determined","Diligent",
                 "Diplomatic","Disciplined","Driven","Dynamic","Down-to-earth"];
    letterDescE=["Eager","Efficient","Empathetic","Encouraging","Engaging",
                 "Enthusiastic","Ethical","Excellent","Expressive"];
    letterDescF=["Fair","Faithful","Fearful","Flexible","Focused",
                 "Forgiving","Firendly","Fun-loving","Funny","Future-minded"];
    letterDescG=["Generous","Gentle","Genuine","Giving","Goal-oriented",
                 "Good-natured","Gracious","Gounded","Growth-minded","Grateful"];
    letterDescH=["Hardworking","Healthy-minded","Helpful","Honest","Hopeful",
                 "Humble","Humorous","Hygienic","Harmonious","Heartful"];
    letterDescI=["Idealistic","Imaginative","Independent","insightful","Inspiring",
                 "Intelligent","Intentional","Intuitive","Inventive","Involved"];
    letterDescJ=["Jolly","Joyful","Judicial","Just","Jaunty",
                 "Jovical","Judgement-active","Jazzed","Jewel-hearted","Joint-focused"];
    letterDescK=["Kind","Knowledgable","Keen","Kingly","kooky",
                 "Kempt","key-minded","keen-eyed","kind-hearted","Knowledge-seeking"];
    letterDescL=["Lively","Logical","Loyal","Lucky","Level-headed",
                 "Light-hearted","Loveable","Loving","Leaderly","Learned"];
    letterDescM=["Magnetic","Mindful","Motivated","Modest","Mature",
                 "Meticulous","Merry","Magnenimous","Masterful","Mentoring"];
    letterDescN=["Noble","Nurturing","Neat","Nonjudgmental","Nice",
                 "Notable","Nuanced","Nimble","Neighborly","Nitty"];
    letterDescO=["Observant","Open-minded","Optimistic","Organized","Outstanding",
                 "Original","Open-hearted","Orderly","Objective","Observant-minded"];
    letterDescP=["Passionate","Patient","Peaceful","Perceptive","Persistent",
                 "Playful","Polite","Positive","Practical","Proactive"];
    letterDescQ=["Qualified","Quick-thinking","Quietly-confident","Quirky","Quick-witted",
                 "Quintessentcal","Questioning","Quick-learner","Quixotic","Quality-focused"];
    letterDescR=["Radiant","Rational","Reliable","Resiliant","Respectful",
                 "Resourceful","Responsible","Responsive","Romantic","Rising"];
    letterDescS=["Sincere","Skilled","Smart","Social","Supportive",
                 "Sympathetic","Spirited","Strong","Stylish","Selfish"];
    letterDescT=["Talented","Tenacious","Thoughtful","Thorough","Trustworthy",
                 "Thruthful","Tactful","Tean-oriented","Tender","Thankful"];
    letterDescU=["Understanding","Unique","Unselfish","Upbeat","Uplifting",
                 "Unflappable","Unbiased","Undaunted","Useful","Urban-minded"];
    letterDescV=["Valient","Versatile","Vibrant","Visionary","Virtuous",
                 "Vivacious","Valued","Vigilant","Vigorous","Venerated"];
    letterDescW=["Warm","Wise","Witty","Well-rounded","Welcoming",
                 "Wonderful","Well-mannered","Watchful","Winning","Worthwhile"];
    letterDescX=["Xenial","Xenodochial","X-factor","Xeial-minded","Xenial-spirited",
                 "Xceptional","X-traordinary","Xenophilic","Xenial-hearted","Xquisite"];
    letterDescY=["Youthful","Yielding","Yare","Yes-minded","Yenful",
                 "Yare-hearted","Yummy","Yogi-minded","Yearnful","Young-at-heart"];
    letterDescZ=["Zealous","Zesty","Zany","Zen","Zappy",
                 "Zestful","Zealful","Zinc-hearted","Zoom-minded","Zingy"];
}
/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appShowLetterDescA1()
{    
    switch(userNameLetter01)
    {
        case userNameLetter01="A":
            appRandomLetterDescA1();
            break;
        case userNameLetter01="B":
            appRandomLetterDescA2();
            break;
        case userNameLetter01="C":
            appRandomLetterDescA3();
            break;
        case userNameLetter01="D":
            appRandomLetterDescA4();
            break;
        case userNameLetter01="E":
            appRandomLetterDescA5();
            break;
        case userNameLetter01="F":
            appRandomLetterDescA6();
            break;
        case userNameLetter01="G":
            appRandomLetterDescA7();
            break;
        case userNameLetter01="H":
            appRandomLetterDescA8();
            break;
        case userNameLetter01="I":
            appRandomLetterDescA9();
            break;
        case userNameLetter01="J":
            appRandomLetterDescA10();
            break;
        case userNameLetter01="K":
            appRandomLetterDescA11();
            break;
        case userNameLetter01="L":
            appRandomLetterDescA12();
            break;
        case userNameLetter01="M":
            appRandomLetterDescA13();
            break;
        case userNameLetter01="N":
            appRandomLetterDescA14();
            break;
        case userNameLetter01="O":
            appRandomLetterDescA15();
            break;
        case userNameLetter01="P":
            appRandomLetterDescA16();
            break;
        case userNameLetter01="Q":
            appRandomLetterDescA17();
            break;
        case userNameLetter01="R":
            appRandomLetterDescA18();
            break;
        case userNameLetter01="S":
            appRandomLetterDescA19();
            break;
        case userNameLetter01="T":
            appRandomLetterDescA20();
            break;
        case userNameLetter01="U":
            appRandomLetterDescA21();
            break;
        case userNameLetter01="V":
            appRandomLetterDescA22();
            break;
        case userNameLetter01="W":
            appRandomLetterDescA23();
            break;
        case userNameLetter01="X":
            appRandomLetterDescA24();
            break;
        case userNameLetter01="Y":
            appRandomLetterDescA25();
            break;
        case userNameLetter01="Z":
            appRandomLetterDescA26();
            break;
        default:
            userNameLetter01="No Letter found";
    }
}

function appShowLetterDescA2()
{
    switch(userNameLetter02)
    {
        case userNameLetter02="a":
            appRandomLetterDescB1();
            break;
        case userNameLetter02="b":
            appRandomLetterDescB2();
            break;
        case userNameLetter02="c":
            appRandomLetterDescB3();
            break;
        case userNameLetter02="d":
            appRandomLetterDescB4();
            break;
        case userNameLetter02="e":
            appRandomLetterDescB5();
            break;
        case userNameLetter02="f":
            appRandomLetterDescB6();
            break;
        case userNameLetter02="g":
            appRandomLetterDescB7();
            break;
        case userNameLetter02="h":
            appRandomLetterDescB8();
            break;
        case userNameLetter02="i":
            appRandomLetterDescB9();
            break;
        case userNameLetter02="j":
            appRandomLetterDescB10();
            break;
        case userNameLetter02="k":
            appRandomLetterDescB11();
            break;
        case userNameLetter02="l":
            appRandomLetterDescB12();
            break;
        case userNameLetter02="m":
            appRandomLetterDescB13();
            break;
        case userNameLetter02="n":
            appRandomLetterDescB14();
            break;
        case userNameLetter02="o":
            appRandomLetterDescB15();
            break;
        case userNameLetter02="p":
            appRandomLetterDescB16();
            break;
        case userNameLetter02="q":
            appRandomLetterDescB17();
            break;
        case userNameLetter02="r":
            appRandomLetterDescB18();
            break;
        case userNameLetter02="s":
            appRandomLetterDescB19();
            break;
        case userNameLetter02="t":
            appRandomLetterDescB20();
            break;
        case userNameLetter02="u":
            appRandomLetterDescB21();
            break;
        case userNameLetter02="v":
            appRandomLetterDescB22();
            break;
        case userNameLetter02="w":
            appRandomLetterDescB23();
            break;
        case userNameLetter02="x":
            appRandomLetterDescB24();
            break;
        case userNameLetter02="y":
            appRandomLetterDescB25();
            break;
        case userNameLetter02="z":
            appRandomLetterDescB26();
            break;
        default:
            userNameLetter02="No Letter found";
    }
}

function appShowLetterDescA3()
{
    switch(userNameLetter03)
    {
        case userNameLetter03="a":
            appRandomLetterDescC1();
            break;
        case userNameLetter03="b":
            appRandomLetterDescC2();
            break;
        case userNameLetter03="c":
            appRandomLetterDescC3();
            break;
        case userNameLetter03="d":
            appRandomLetterDescC4();
            break;
        case userNameLetter03="e":
            appRandomLetterDescC5();
            break;
        case userNameLetter03="f":
            appRandomLetterDescC6();
            break;
        case userNameLetter03="g":
            appRandomLetterDescC7();
            break;
        case userNameLetter03="h":
            appRandomLetterDescC8();
            break;
        case userNameLetter03="i":
            appRandomLetterDescC9();
            break;
        case userNameLetter03="j":
            appRandomLetterDescC10();
            break;
        case userNameLetter03="k":
            appRandomLetterDescC11();
            break;
        case userNameLetter03="l":
            appRandomLetterDescC12();
            break;
        case userNameLetter03="m":
            appRandomLetterDescC13();
            break;
        case userNameLetter03="n":
            appRandomLetterDescC14();
            break;
        case userNameLetter03="o":
            appRandomLetterDescC15();
            break;
        case userNameLetter03="p":
            appRandomLetterDescC16();
            break;
        case userNameLetter03="q":
            appRandomLetterDescC17();
            break;
        case userNameLetter03="r":
            appRandomLetterDescC18();
            break;
        case userNameLetter03="s":
            appRandomLetterDescC19();
            break;
        case userNameLetter03="t":
            appRandomLetterDescC20();
            break;
        case userNameLetter03="u":
            appRandomLetterDescC21();
            break;
        case userNameLetter03="v":
            appRandomLetterDescC22();
            break;
        case userNameLetter03="w":
            appRandomLetterDescC23();
            break;
        case userNameLetter03="x":
            appRandomLetterDescC24();
            break;
        case userNameLetter03="y":
            appRandomLetterDescC25();
            break;
        case userNameLetter03="z":
            appRandomLetterDescC26();
            break;
        default:
            userNameLetter03="No Letter found";
    }
}

function appShowLetterDescA4()
{    
    switch(userNameLetter04)
    {
        case userNameLetter04="a":
            appRandomLetterDescD1();
            break;
        case userNameLetter04="b":
            appRandomLetterDescD2();
            break;
        case userNameLetter04="c":
            appRandomLetterDescD3();
            break;
        case userNameLetter04="d":
            appRandomLetterDescD4();
            break;
        case userNameLetter04="e":
            appRandomLetterDescD5();
            break;
        case userNameLetter04="f":
            appRandomLetterDescD6();
            break;
        case userNameLetter04="g":
            appRandomLetterDescD7();
            break;
        case userNameLetter04="h":
            appRandomLetterDescD8();
            break;
        case userNameLetter04="i":
            appRandomLetterDescD9();
            break;
        case userNameLetter04="j":
            appRandomLetterDescD10();
            break;
        case userNameLetter04="k":
            appRandomLetterDescD11();
            break;
        case userNameLetter04="l":
            appRandomLetterDescD12();
            break;
        case userNameLetter04="m":
            appRandomLetterDescD13();
            break;
        case userNameLetter04="n":
            appRandomLetterDescD14();
            break;
        case userNameLetter04="o":
            appRandomLetterDescD15();
            break;
        case userNameLetter04="p":
            appRandomLetterDescD16();
            break;
        case userNameLetter04="q":
            appRandomLetterDescD17();
            break;
        case userNameLetter04="r":
            appRandomLetterDescD18();
            break;
        case userNameLetter04="s":
            appRandomLetterDescD19();
            break;
        case userNameLetter04="t":
            appRandomLetterDescD20();
            break;
        case userNameLetter04="u":
            appRandomLetterDescD21();
            break;
        case userNameLetter04="v":
            appRandomLetterDescD22();
            break;
        case userNameLetter04="w":
            appRandomLetterDescD23();
            break;
        case userNameLetter04="x":
            appRandomLetterDescD24();
            break;
        case userNameLetter04="y":
            appRandomLetterDescD25();
            break;
        case userNameLetter04="z":
            appRandomLetterDescD26();
            break;
        default:
            userNameLetter04="No Letter found";
    }
}

function appShowLetterDescA5()
{

    switch(userNameLetter05)
    {
        case userNameLetter05="a":
            appRandomLetterDescE1();
            break;
        case userNameLetter05="b":
            appRandomLetterDescE2();
            break;
        case userNameLetter05="c":
            appRandomLetterDescE3();
            break;
        case userNameLetter05="d":
            appRandomLetterDescE4();
            break;
        case userNameLetter05="e":
            appRandomLetterDescE5();
            break;
        case userNameLetter05="f":
            appRandomLetterDescE6();
            break;
        case userNameLetter05="g":
            appRandomLetterDescE7();
            break;
        case userNameLetter05="h":
            appRandomLetterDescE8();
            break;
        case userNameLetter05="i":
            appRandomLetterDescE9();
            break;
        case userNameLetter05="j":
            appRandomLetterDescE10();
            break;
        case userNameLetter05="k":
            appRandomLetterDescE11();
            break;
        case userNameLetter05="l":
            appRandomLetterDescE12();
            break;
        case userNameLetter05="m":
            appRandomLetterDescE13();
            break;
        case userNameLetter05="n":
            appRandomLetterDescE14();
            break;
        case userNameLetter05="o":
            appRandomLetterDescE15();
            break;
        case userNameLetter05="p":
            appRandomLetterDescE16();
            break;
        case userNameLetter05="q":
            appRandomLetterDescE17();
            break;
        case userNameLetter05="r":
            appRandomLetterDescE18();
            break;
        case userNameLetter05="s":
            appRandomLetterDescE19();
            break;
        case userNameLetter05="t":
            appRandomLetterDescE20();
            break;
        case userNameLetter05="u":
            appRandomLetterDescE21();
            break;
        case userNameLetter05="v":
            appRandomLetterDescE22();
            break;
        case userNameLetter05="w":
            appRandomLetterDescE23();
            break;
        case userNameLetter05="x":
            appRandomLetterDescE24();
            break;
        case userNameLetter05="y":
            appRandomLetterDescE25();
            break;
        case userNameLetter05="z":
            appRandomLetterDescE26();
            break;
        default:
            userNameLetter05="No Letter found";
    }
}

function appShowLetterDescA6()
{
    switch(userNameLetter06)
    {
        case userNameLetter06="a":
            appRandomLetterDescF1();
            break;
        case userNameLetter06="b":
            appRandomLetterDescF2();
            break;
        case userNameLetter06="c":
            appRandomLetterDescF3();
            break;
        case userNameLetter06="d":
            appRandomLetterDescF4();
            break;
        case userNameLetter06="e":
            appRandomLetterDescF5();
            break;
        case userNameLetter06="f":
            appRandomLetterDescF6();
            break;
        case userNameLetter06="g":
            appRandomLetterDescF7();
            break;
        case userNameLetter06="h":
            appRandomLetterDescF8();
            break;
        case userNameLetter06="i":
            appRandomLetterDescF9();
            break;
        case userNameLetter06="j":
            appRandomLetterDescF10();
            break;
        case userNameLetter06="k":
            appRandomLetterDescF11();
            break;
        case userNameLetter06="l":
            appRandomLetterDescF12();
            break;
        case userNameLetter06="m":
            appRandomLetterDescF13();
            break;
        case userNameLetter06="n":
            appRandomLetterDescF14();
            break;
        case userNameLetter06="o":
            appRandomLetterDescF15();
            break;
        case userNameLetter06="p":
            appRandomLetterDescF16();
            break;
        case userNameLetter06="q":
            appRandomLetterDescF17();
            break;
        case userNameLetter06="r":
            appRandomLetterDescF18();
            break;
        case userNameLetter06="s":
            appRandomLetterDescF19();
            break;
        case userNameLetter06="t":
            appRandomLetterDescF20();
            break;
        case userNameLetter06="u":
            appRandomLetterDescF21();
            break;
        case userNameLetter06="v":
            appRandomLetterDescF22();
            break;
        case userNameLetter06="w":
            appRandomLetterDescF23();
            break;
        case userNameLetter06="x":
            appRandomLetterDescF24();
            break;
        case userNameLetter06="y":
            appRandomLetterDescF25();
            break;
        case userNameLetter06="z":
            appRandomLetterDescF26();
            break;
        default:
            userNameLetter06="No Letter found";
    }
}

function appShowLetterDescA7()
{
    switch(userNameLetter07)
    {
        case userNameLetter07="a":
            appRandomLetterDescG1();
            break;
        case userNameLetter07="b":
            appRandomLetterDescG2();
            break;
        case userNameLetter07="c":
            appRandomLetterDescG3();
            break;
        case userNameLetter07="d":
            appRandomLetterDescG4();
            break;
        case userNameLetter07="e":
            appRandomLetterDescG5();
            break;
        case userNameLetter07="f":
            appRandomLetterDescG6();
            break;
        case userNameLetter07="g":
            appRandomLetterDescG7();
            break;
        case userNameLetter07="h":
            appRandomLetterDescG8();
            break;
        case userNameLetter07="i":
            appRandomLetterDescG9();
            break;
        case userNameLetter07="j":
            appRandomLetterDescG10();
            break;
        case userNameLetter07="k":
            appRandomLetterDescG11();
            break;
        case userNameLetter07="l":
            appRandomLetterDescG12();
            break;
        case userNameLetter07="m":
            appRandomLetterDescG13();
            break;
        case userNameLetter07="n":
            appRandomLetterDescG14();
            break;
        case userNameLetter07="o":
            appRandomLetterDescG15();
            break;
        case userNameLetter07="p":
            appRandomLetterDescG16();
            break;
        case userNameLetter07="q":
            appRandomLetterDescG17();
            break;
        case userNameLetter07="r":
            appRandomLetterDescG18();
            break;
        case userNameLetter07="s":
            appRandomLetterDescG19();
            break;
        case userNameLetter07="t":
            appRandomLetterDescG20();
            break;
        case userNameLetter07="u":
            appRandomLetterDescG21();
            break;
        case userNameLetter07="v":
            appRandomLetterDescG22();
            break;
        case userNameLetter07="w":
            appRandomLetterDescG23();
            break;
        case userNameLetter07="x":
            appRandomLetterDescG24();
            break;
        case userNameLetter07="y":
            appRandomLetterDescG25();
            break;
        case userNameLetter07="z":
            appRandomLetterDescG26();
            break;
        default:
            userNameLetter07="No Letter found";
    }
}

function appShowLetterDescA8()
{
    switch(userNameLetter08)
    {
        case userNameLetter08="a":
            appRandomLetterDescH1();
            break;
        case userNameLetter08="b":
            appRandomLetterDescH2();
            break;
        case userNameLetter08="c":
            appRandomLetterDescH3();
            break;
        case userNameLetter08="d":
            appRandomLetterDescH4();
            break;
        case userNameLetter08="e":
            appRandomLetterDescH5();
            break;
        case userNameLetter08="f":
            appRandomLetterDescH6();
            break;
        case userNameLetter08="g":
            appRandomLetterDescH7();
            break;
        case userNameLetter08="h":
            appRandomLetterDescH8();
            break;
        case userNameLetter08="i":
            appRandomLetterDescH9();
            break;
        case userNameLetter08="j":
            appRandomLetterDescH10();
            break;
        case userNameLetter08="k":
            appRandomLetterDescH11();
            break;
        case userNameLetter08="l":
            appRandomLetterDescH12();
            break;
        case userNameLetter08="m":
            appRandomLetterDescH13();
            break;
        case userNameLetter08="n":
            appRandomLetterDescH14();
            break;
        case userNameLetter08="o":
            appRandomLetterDescH15();
            break;
        case userNameLetter08="p":
            appRandomLetterDescH16();
            break;
        case userNameLetter08="q":
            appRandomLetterDescH17();
            break;
        case userNameLetter08="r":
            appRandomLetterDescH18();
            break;
        case userNameLetter08="s":
            appRandomLetterDescH19();
            break;
        case userNameLetter08="t":
            appRandomLetterDescH20();
            break;
        case userNameLetter08="u":
            appRandomLetterDescH21();
            break;
        case userNameLetter08="v":
            appRandomLetterDescH22();
            break;
        case userNameLetter08="w":
            appRandomLetterDescH23();
            break;
        case userNameLetter08="x":
            appRandomLetterDescH24();
            break;
        case userNameLetter08="y":
            appRandomLetterDescH25();
            break;
        case userNameLetter08="z":
            appRandomLetterDescH26();
            break;
        default:
            userNameLetter08="No Letter found";
    }
}

function appShowLetterDescA9()
{
    switch(userNameLetter09)
    {
        case userNameLetter09="a":
            appRandomLetterDescI1();
            break;
        case userNameLetter09="b":
            appRandomLetterDescI2();
            break;
        case userNameLetter09="c":
            appRandomLetterDescI3();
            break;
        case userNameLetter09="d":
            appRandomLetterDescI4();
            break;
        case userNameLetter09="e":
            appRandomLetterDescI5();
            break;
        case userNameLetter09="f":
            appRandomLetterDescI6();
            break;
        case userNameLetter09="g":
            appRandomLetterDescI7();
            break;
        case userNameLetter09="h":
            appRandomLetterDescI8();
            break;
        case userNameLetter09="i":
            appRandomLetterDescI9();
            break;
        case userNameLetter09="j":
            appRandomLetterDescI10();
            break;
        case userNameLetter09="k":
            appRandomLetterDescI11();
            break;
        case userNameLetter09="l":
            appRandomLetterDescI12();
            break;
        case userNameLetter09="m":
            appRandomLetterDescI13();
            break;
        case userNameLetter09="n":
            appRandomLetterDescI14();
            break;
        case userNameLetter09="o":
            appRandomLetterDescI15();
            break;
        case userNameLetter09="p":
            appRandomLetterDescI16();
            break;
        case userNameLetter09="q":
            appRandomLetterDescI17();
            break;
        case userNameLetter09="r":
            appRandomLetterDescI18();
            break;
        case userNameLetter09="s":
            appRandomLetterDescI19();
            break;
        case userNameLetter09="t":
            appRandomLetterDescI20();
            break;
        case userNameLetter09="u":
            appRandomLetterDescI21();
            break;
        case userNameLetter09="v":
            appRandomLetterDescI22();
            break;
        case userNameLetter09="w":
            appRandomLetterDescI23();
            break;
        case userNameLetter09="x":
            appRandomLetterDescI24();
            break;
        case userNameLetter09="y":
            appRandomLetterDescI25();
            break;
        case userNameLetter09="z":
            appRandomLetterDescI26();
            break;
        default:
            userNameLetter09="No Letter found";
    }
}

function appShowLetterDescA10()
{    
    switch(userNameLetter10)
    {
        case userNameLetter10="a":
            appRandomLetterDescJ1();
            break;
        case userNameLetter10="b":
            appRandomLetterDescJ2();
            break;
        case userNameLetter10="c":
            appRandomLetterDescJ3();
            break;
        case userNameLetter10="d":
            appRandomLetterDescJ4();
            break;
        case userNameLetter10="e":
            appRandomLetterDescJ5();
            break;
        case userNameLetter10="f":
            appRandomLetterDescJ6();
            break;
        case userNameLetter10="g":
            appRandomLetterDescJ7();
            break;
        case userNameLetter10="h":
            appRandomLetterDescJ8();
            break;
        case userNameLetter10="i":
            appRandomLetterDescJ9();
            break;
        case userNameLetter10="j":
            appRandomLetterDescJ10();
            break;
        case userNameLetter10="k":
            appRandomLetterDescJ11();
            break;
        case userNameLetter10="l":
            appRandomLetterDescJ12();
            break;
        case userNameLetter10="m":
            appRandomLetterDescJ13();
            break;
        case userNameLetter10="n":
            appRandomLetterDescJ14();
            break;
        case userNameLetter10="o":
            appRandomLetterDescJ15();
            break;
        case userNameLetter10="p":
            appRandomLetterDescJ16();
            break;
        case userNameLetter10="q":
            appRandomLetterDescJ17();
            break;
        case userNameLetter10="r":
            appRandomLetterDescJ18();
            break;
        case userNameLetter10="s":
            appRandomLetterDescJ19();
            break;
        case userNameLetter10="t":
            appRandomLetterDescJ20();
            break;
        case userNameLetter10="u":
            appRandomLetterDescJ21();
            break;
        case userNameLetter10="v":
            appRandomLetterDescJ22();
            break;
        case userNameLetter10="w":
            appRandomLetterDescJ23();
            break;
        case userNameLetter10="x":
            appRandomLetterDescJ24();
            break;
        case userNameLetter10="y":
            appRandomLetterDescJ25();
            break;
        case userNameLetter10="z":
            appRandomLetterDescJ26();
            break;
        default:
            userNameLetter10="No Letter found";
    }
}

function appShowLetterDescA11()
{
    switch(userNameLetter11)
    {
        case userNameLetter11="a":
            appRandomLetterDescK1();
            break;
        case userNameLetter11="b":
            appRandomLetterDescK2();
            break;
        case userNameLetter11="c":
            appRandomLetterDescK3();
            break;
        case userNameLetter11="d":
            appRandomLetterDescK4();
            break;
        case userNameLetter11="e":
            appRandomLetterDescK5();
            break;
        case userNameLetter11="f":
            appRandomLetterDescK6();
            break;
        case userNameLetter11="g":
            appRandomLetterDescK7();
            break;
        case userNameLetter11="h":
            appRandomLetterDescK8();
            break;
        case userNameLetter11="i":
            appRandomLetterDescK9();
            break;
        case userNameLetter11="j":
            appRandomLetterDescK10();
            break;
        case userNameLetter11="k":
            appRandomLetterDescK11();
            break;
        case userNameLetter11="l":
            appRandomLetterDescK12();
            break;
        case userNameLetter11="m":
            appRandomLetterDescK13();
            break;
        case userNameLetter11="n":
            appRandomLetterDescK14();
            break;
        case userNameLetter11="o":
            appRandomLetterDescK15();
            break;
        case userNameLetter11="p":
            appRandomLetterDescK16();
            break;
        case userNameLetter11="q":
            appRandomLetterDescK17();
            break;
        case userNameLetter11="r":
            appRandomLetterDescK18();
            break;
        case userNameLetter11="s":
            appRandomLetterDescK19();
            break;
        case userNameLetter11="t":
            appRandomLetterDescK20();
            break;
        case userNameLetter11="u":
            appRandomLetterDescK21();
            break;
        case userNameLetter11="v":
            appRandomLetterDescK22();
            break;
        case userNameLetter11="w":
            appRandomLetterDescK23();
            break;
        case userNameLetter11="x":
            appRandomLetterDescK24();
            break;
        case userNameLetter11="y":
            appRandomLetterDescK25();
            break;
        case userNameLetter11="z":
            appRandomLetterDescK26();
            break;
        default:
            userNameLetter11="No Letter found";
    }
}

function appShowLetterDescA12()
{
    switch(userNameLetter12)
    {
        case userNameLetter12="a":
            appRandomLetterDescL1();
            break;
        case userNameLetter12="b":
            appRandomLetterDescL2();
            break;
        case userNameLetter12="c":
            appRandomLetterDescL3();
            break;
        case userNameLetter12="d":
            appRandomLetterDescL4();
            break;
        case userNameLetter12="e":
            appRandomLetterDescL5();
            break;
        case userNameLetter12="f":
            appRandomLetterDescL6();
            break;
        case userNameLetter12="g":
            appRandomLetterDescL7();
            break;
        case userNameLetter12="h":
            appRandomLetterDescL8();
            break;
        case userNameLetter12="i":
            appRandomLetterDescL9();
            break;
        case userNameLetter12="j":
            appRandomLetterDescL10();
            break;
        case userNameLetter12="k":
            appRandomLetterDescL11();
            break;
        case userNameLetter12="l":
            appRandomLetterDescL12();
            break;
        case userNameLetter12="m":
            appRandomLetterDescL13();
            break;
        case userNameLetter12="n":
            appRandomLetterDescL14();
            break;
        case userNameLetter12="o":
            appRandomLetterDescL15();
            break;
        case userNameLetter12="p":
            appRandomLetterDescL16();
            break;
        case userNameLetter12="q":
            appRandomLetterDescL17();
            break;
        case userNameLetter12="r":
            appRandomLetterDescL18();
            break;
        case userNameLetter12="s":
            appRandomLetterDescL19();
            break;
        case userNameLetter12="t":
            appRandomLetterDescL20();
            break;
        case userNameLetter12="u":
            appRandomLetterDescL21();
            break;
        case userNameLetter12="v":
            appRandomLetterDescL22();
            break;
        case userNameLetter12="w":
            appRandomLetterDescL23();
            break;
        case userNameLetter12="x":
            appRandomLetterDescL24();
            break;
        case userNameLetter12="y":
            appRandomLetterDescL25();
            break;
        case userNameLetter12="z":
            appRandomLetterDescL26();
            break;
        default:
            userNameLetter12="No Letter found";
    }
}

function appShowLetterDescA13()
{
    switch(userNameLetter13)
    {
        case userNameLetter13="a":
            appRandomLetterDescM1();
            break;
        case userNameLetter13="b":
            appRandomLetterDescM2();
            break;
        case userNameLetter13="c":
            appRandomLetterDescM3();
            break;
        case userNameLetter13="d":
            appRandomLetterDescM4();
            break;
        case userNameLetter13="e":
            appRandomLetterDescM5();
            break;
        case userNameLetter13="f":
            appRandomLetterDescM6();
            break;
        case userNameLetter13="g":
            appRandomLetterDescM7();
            break;
        case userNameLetter13="h":
            appRandomLetterDescM8();
            break;
        case userNameLetter13="i":
            appRandomLetterDescM9();
            break;
        case userNameLetter13="j":
            appRandomLetterDescM10();
            break;
        case userNameLetter13="k":
            appRandomLetterDescM11();
            break;
        case userNameLetter13="l":
            appRandomLetterDescM12();
            break;
        case userNameLetter13="m":
            appRandomLetterDescM13();
            break;
        case userNameLetter13="n":
            appRandomLetterDescM14();
            break;
        case userNameLetter13="o":
            appRandomLetterDescM15();
            break;
        case userNameLetter13="p":
            appRandomLetterDescM16();
            break;
        case userNameLetter13="q":
            appRandomLetterDescM17();
            break;
        case userNameLetter13="r":
            appRandomLetterDescM18();
            break;
        case userNameLetter13="s":
            appRandomLetterDescM19();
            break;
        case userNameLetter13="t":
            appRandomLetterDescM20();
            break;
        case userNameLetter13="u":
            appRandomLetterDescM21();
            break;
        case userNameLetter13="v":
            appRandomLetterDescM22();
            break;
        case userNameLetter13="w":
            appRandomLetterDescM23();
            break;
        case userNameLetter13="x":
            appRandomLetterDescM24();
            break;
        case userNameLetter13="y":
            appRandomLetterDescM25();
            break;
        case userNameLetter13="z":
            appRandomLetterDescM26();
            break;
        default:
            userNameLetter13="No Letter found";
    }
}

function appShowLetterDescA14()
{
    switch(userNameLetter14)
    {
        case userNameLetter14="a":
            appRandomLetterDescN1();
            break;
        case userNameLetter14="b":
            appRandomLetterDescN2();
            break;
        case userNameLetter14="c":
            appRandomLetterDescN3();
            break;
        case userNameLetter14="d":
            appRandomLetterDescN4();
            break;
        case userNameLetter14="e":
            appRandomLetterDescN5();
            break;
        case userNameLetter14="f":
            appRandomLetterDescN6();
            break;
        case userNameLetter14="g":
            appRandomLetterDescN7();
            break;
        case userNameLetter14="h":
            appRandomLetterDescN8();
            break;
        case userNameLetter14="i":
            appRandomLetterDescN9();
            break;
        case userNameLetter14="j":
            appRandomLetterDescN10();
            break;
        case userNameLetter14="k":
            appRandomLetterDescN11();
            break;
        case userNameLetter14="l":
            appRandomLetterDescN12();
            break;
        case userNameLetter14="m":
            appRandomLetterDescN13();
            break;
        case userNameLetter14="n":
            appRandomLetterDescN14();
            break;
        case userNameLetter14="o":
            appRandomLetterDescN15();
            break;
        case userNameLetter14="p":
            appRandomLetterDescN16();
            break;
        case userNameLetter14="q":
            appRandomLetterDescN17();
            break;
        case userNameLetter14="r":
            appRandomLetterDescN18();
            break;
        case userNameLetter14="s":
            appRandomLetterDescN19();
            break;
        case userNameLetter14="t":
            appRandomLetterDescN20();
            break;
        case userNameLetter14="u":
            appRandomLetterDescN21();
            break;
        case userNameLetter14="v":
            appRandomLetterDescN22();
            break;
        case userNameLetter14="w":
            appRandomLetterDescN23();
            break;
        case userNameLetter14="x":
            appRandomLetterDescN24();
            break;
        case userNameLetter14="y":
            appRandomLetterDescN25();
            break;
        case userNameLetter14="z":
            appRandomLetterDescN26();
            break;
        default:
            userNameLetter14="No Letter found";
    }
}

function appShowLetterDescA15()
{
    switch(userNameLetter15)
    {
        case userNameLetter15="a":
            appRandomLetterDescO1();
            break;
        case userNameLetter15="b":
            appRandomLetterDescO2();
            break;
        case userNameLetter15="c":
            appRandomLetterDescO3();
            break;
        case userNameLetter15="d":
            appRandomLetterDescO4();
            break;
        case userNameLetter15="e":
            appRandomLetterDescO5();
            break;
        case userNameLetter15="f":
            appRandomLetterDescO6();
            break;
        case userNameLetter15="g":
            appRandomLetterDescO7();
            break;
        case userNameLetter15="h":
            appRandomLetterDescO8();
            break;
        case userNameLetter15="i":
            appRandomLetterDescO9();
            break;
        case userNameLetter15="j":
            appRandomLetterDescO10();
            break;
        case userNameLetter15="k":
            appRandomLetterDescO11();
            break;
        case userNameLetter15="l":
            appRandomLetterDescO12();
            break;
        case userNameLetter15="m":
            appRandomLetterDescO13();
            break;
        case userNameLetter15="n":
            appRandomLetterDescO14();
            break;
        case userNameLetter15="o":
            appRandomLetterDescO15();
            break;
        case userNameLetter15="p":
            appRandomLetterDescO16();
            break;
        case userNameLetter15="q":
            appRandomLetterDescO17();
            break;
        case userNameLetter15="r":
            appRandomLetterDescO18();
            break;
        case userNameLetter15="s":
            appRandomLetterDescO19();
            break;
        case userNameLetter15="t":
            appRandomLetterDescO20();
            break;
        case userNameLetter15="u":
            appRandomLetterDescO21();
            break;
        case userNameLetter15="v":
            appRandomLetterDescO22();
            break;
        case userNameLetter15="w":
            appRandomLetterDescO23();
            break;
        case userNameLetter15="x":
            appRandomLetterDescO24();
            break;
        case userNameLetter15="y":
            appRandomLetterDescO25();
            break;
        case userNameLetter15="z":
            appRandomLetterDescO26();
            break;
        default:
            userNameLetter15="No Letter found";
    }
}

function appShowLetterDescA16()
{
    switch(userNameLetter16)
    {
        case userNameLetter16="a":
            appRandomLetterDescP1();
            break;
        case userNameLetter16="b":
            appRandomLetterDescP2();
            break;
        case userNameLetter16="c":
            appRandomLetterDescP3();
            break;
        case userNameLetter16="d":
            appRandomLetterDescP4();
            break;
        case userNameLetter16="e":
            appRandomLetterDescP5();
            break;
        case userNameLetter16="f":
            appRandomLetterDescP6();
            break;
        case userNameLetter16="g":
            appRandomLetterDescP7();
            break;
        case userNameLetter16="h":
            appRandomLetterDescP8();
            break;
        case userNameLetter16="i":
            appRandomLetterDescP9();
            break;
        case userNameLetter16="j":
            appRandomLetterDescP10();
            break;
        case userNameLetter16="k":
            appRandomLetterDescP11();
            break;
        case userNameLetter16="l":
            appRandomLetterDescP12();
            break;
        case userNameLetter16="m":
            appRandomLetterDescP13();
            break;
        case userNameLetter16="n":
            appRandomLetterDescP14();
            break;
        case userNameLetter16="o":
            appRandomLetterDescP15();
            break;
        case userNameLetter16="p":
            appRandomLetterDescP16();
            break;
        case userNameLetter16="q":
            appRandomLetterDescP17();
            break;
        case userNameLetter16="r":
            appRandomLetterDescP18();
            break;
        case userNameLetter16="s":
            appRandomLetterDescP19();
            break;
        case userNameLetter16="t":
            appRandomLetterDescP20();
            break;
        case userNameLetter16="u":
            appRandomLetterDescP21();
            break;
        case userNameLetter16="v":
            appRandomLetterDescP22();
            break;
        case userNameLetter16="w":
            appRandomLetterDescP23();
            break;
        case userNameLetter16="x":
            appRandomLetterDescP24();
            break;
        case userNameLetter16="y":
            appRandomLetterDescP25();
            break;
        case userNameLetter16="z":
            appRandomLetterDescP26();
            break;
        default:
            userNameLetter16="No Letter found";
    }
}

function appShowLetterDescA17()
{    
    switch(userNameLetter17)
    {
        case userNameLetter17="a":
            appRandomLetterDescQ1();
            break;
        case userNameLetter17="b":
            appRandomLetterDescQ2();
            break;
        case userNameLetter17="c":
            appRandomLetterDescQ3();
            break;
        case userNameLetter17="d":
            appRandomLetterDescQ4();
            break;
        case userNameLetter17="e":
            appRandomLetterDescQ5();
            break;
        case userNameLetter17="f":
            appRandomLetterDescQ6();
            break;
        case userNameLetter17="g":
            appRandomLetterDescQ7();
            break;
        case userNameLetter17="h":
            appRandomLetterDescQ8();
            break;
        case userNameLetter17="i":
            appRandomLetterDescQ9();
            break;
        case userNameLetter17="j":
            appRandomLetterDescQ10();
            break;
        case userNameLetter17="k":
            appRandomLetterDescQ11();
            break;
        case userNameLetter17="l":
            appRandomLetterDescQ12();
            break;
        case userNameLetter17="m":
            appRandomLetterDescQ13();
            break;
        case userNameLetter17="n":
            appRandomLetterDescQ14();
            break;
        case userNameLetter17="o":
            appRandomLetterDescQ15();
            break;
        case userNameLetter17="p":
            appRandomLetterDescQ16();
            break;
        case userNameLetter17="q":
            appRandomLetterDescQ17();
            break;
        case userNameLetter17="r":
            appRandomLetterDescQ18();
            break;
        case userNameLetter17="s":
            appRandomLetterDescQ19();
            break;
        case userNameLetter17="t":
            appRandomLetterDescQ20();
            break;
        case userNameLetter17="u":
            appRandomLetterDescQ21();
            break;
        case userNameLetter17="v":
            appRandomLetterDescQ22();
            break;
        case userNameLetter17="w":
            appRandomLetterDescQ23();
            break;
        case userNameLetter17="x":
            appRandomLetterDescQ24();
            break;
        case userNameLetter17="y":
            appRandomLetterDescQ25();
            break;
        case userNameLetter17="z":
            appRandomLetterDescQ26();
            break;
        default:
            userNameLetter17="No Letter found";
    }
}

function appShowLetterDescA18()
{
    switch(userNameLetter18)
    {
        case userNameLetter18="a":
            appRandomLetterDescR1();
            break;
        case userNameLetter18="b":
            appRandomLetterDescR2();
            break;
        case userNameLetter18="c":
            appRandomLetterDescR3();
            break;
        case userNameLetter18="d":
            appRandomLetterDescR4();
            break;
        case userNameLetter18="e":
            appRandomLetterDescR5();
            break;
        case userNameLetter18="f":
            appRandomLetterDescR6();
            break;
        case userNameLetter18="g":
            appRandomLetterDescR7();
            break;
        case userNameLetter18="h":
            appRandomLetterDescR8();
            break;
        case userNameLetter18="i":
            appRandomLetterDescR9();
            break;
        case userNameLetter18="j":
            appRandomLetterDescR10();
            break;
        case userNameLetter18="k":
            appRandomLetterDescR11();
            break;
        case userNameLetter18="l":
            appRandomLetterDescR12();
            break;
        case userNameLetter18="m":
            appRandomLetterDescR13();
            break;
        case userNameLetter18="n":
            appRandomLetterDescR14();
            break;
        case userNameLetter18="o":
            appRandomLetterDescR15();
            break;
        case userNameLetter18="p":
            appRandomLetterDescR16();
            break;
        case userNameLetter18="q":
            appRandomLetterDescR17();
            break;
        case userNameLetter18="r":
            appRandomLetterDescR18();
            break;
        case userNameLetter18="s":
            appRandomLetterDescR19();
            break;
        case userNameLetter18="t":
            appRandomLetterDescR20();
            break;
        case userNameLetter18="u":
            appRandomLetterDescR21();
            break;
        case userNameLetter18="v":
            appRandomLetterDescR22();
            break;
        case userNameLetter18="w":
            appRandomLetterDescR23();
            break;
        case userNameLetter18="x":
            appRandomLetterDescR24();
            break;
        case userNameLetter18="y":
            appRandomLetterDescR25();
            break;
        case userNameLetter18="z":
            appRandomLetterDescR26();
            break;
        default:
            userNameLetter18="No Letter found";
    }
}

function appShowLetterDescA19()
{
    switch(userNameLetter19)
    {
        case userNameLetter19="a":
            appRandomLetterDescS1();
            break;
        case userNameLetter19="b":
            appRandomLetterDescS2();
            break;
        case userNameLetter19="c":
            appRandomLetterDescS3();
            break;
        case userNameLetter19="d":
            appRandomLetterDescS4();
            break;
        case userNameLetter19="e":
            appRandomLetterDescS5();
            break;
        case userNameLetter19="f":
            appRandomLetterDescS6();
            break;
        case userNameLetter19="g":
            appRandomLetterDescS7();
            break;
        case userNameLetter19="h":
            appRandomLetterDescS8();
            break;
        case userNameLetter19="i":
            appRandomLetterDescS9();
            break;
        case userNameLetter19="j":
            appRandomLetterDescS10();
            break;
        case userNameLetter19="k":
            appRandomLetterDescS11();
            break;
        case userNameLetter19="l":
            appRandomLetterDescS12();
            break;
        case userNameLetter19="m":
            appRandomLetterDescS13();
            break;
        case userNameLetter19="n":
            appRandomLetterDescS14();
            break;
        case userNameLetter19="o":
            appRandomLetterDescS15();
            break;
        case userNameLetter19="p":
            appRandomLetterDescS16();
            break;
        case userNameLetter19="q":
            appRandomLetterDescS17();
            break;
        case userNameLetter19="r":
            appRandomLetterDescS18();
            break;
        case userNameLetter19="s":
            appRandomLetterDescS19();
            break;
        case userNameLetter19="t":
            appRandomLetterDescS20();
            break;
        case userNameLetter19="u":
            appRandomLetterDescS21();
            break;
        case userNameLetter19="v":
            appRandomLetterDescS22();
            break;
        case userNameLetter19="w":
            appRandomLetterDescS23();
            break;
        case userNameLetter19="x":
            appRandomLetterDescS24();
            break;
        case userNameLetter19="y":
            appRandomLetterDescS25();
            break;
        case userNameLetter19="z":
            appRandomLetterDescS26();
            break;
        default:
            userNameLetter19="No Letter found";
    }
}

function appShowLetterDescA20()
{
    switch(userNameLetter20)
    {
        case userNameLetter20="a":
            appRandomLetterDescT1();
            break;
        case userNameLetter20="b":
            appRandomLetterDescT2();
            break;
        case userNameLetter20="c":
            appRandomLetterDescT3();
            break;
        case userNameLetter20="d":
            appRandomLetterDescT4();
            break;
        case userNameLetter20="e":
            appRandomLetterDescT5();
            break;
        case userNameLetter20="f":
            appRandomLetterDescT6();
            break;
        case userNameLetter20="g":
            appRandomLetterDescT7();
            break;
        case userNameLetter20="h":
            appRandomLetterDescT8();
            break;
        case userNameLetter20="i":
            appRandomLetterDescT9();
            break;
        case userNameLetter20="j":
            appRandomLetterDescT10();
            break;
        case userNameLetter20="k":
            appRandomLetterDescT11();
            break;
        case userNameLetter20="l":
            appRandomLetterDescT12();
            break;
        case userNameLetter20="m":
            appRandomLetterDescT13();
            break;
        case userNameLetter20="n":
            appRandomLetterDescT14();
            break;
        case userNameLetter20="o":
            appRandomLetterDescT15();
            break;
        case userNameLetter20="p":
            appRandomLetterDescT16();
            break;
        case userNameLetter20="q":
            appRandomLetterDescT17();
            break;
        case userNameLetter20="r":
            appRandomLetterDescT18();
            break;
        case userNameLetter20="s":
            appRandomLetterDescT19();
            break;
        case userNameLetter20="t":
            appRandomLetterDescT20();
            break;
        case userNameLetter20="u":
            appRandomLetterDescT21();
            break;
        case userNameLetter20="v":
            appRandomLetterDescT22();
            break;
        case userNameLetter20="w":
            appRandomLetterDescT23();
            break;
        case userNameLetter20="x":
            appRandomLetterDescT24();
            break;
        case userNameLetter20="y":
            appRandomLetterDescT25();
            break;
        case userNameLetter20="z":
            appRandomLetterDescT26();
            break;
        default:
            userNameLetter20="No Letter found";
    }
}

function appShowLetterDescA21()
{
    switch(userNameLetter21)
    {
        case userNameLetter21="a":
            appRandomLetterDescU1();
            break;
        case userNameLetter21="b":
            appRandomLetterDescU2();
            break;
        case userNameLetter21="c":
            appRandomLetterDescU3();
            break;
        case userNameLetter21="d":
            appRandomLetterDescU4();
            break;
        case userNameLetter21="e":
            appRandomLetterDescU5();
            break;
        case userNameLetter21="f":
            appRandomLetterDescU6();
            break;
        case userNameLetter21="g":
            appRandomLetterDescU7();
            break;
        case userNameLetter21="h":
            appRandomLetterDescU8();
            break;
        case userNameLetter21="i":
            appRandomLetterDescU9();
            break;
        case userNameLetter21="j":
            appRandomLetterDescU10();
            break;
        case userNameLetter21="k":
            appRandomLetterDescU11();
            break;
        case userNameLetter21="l":
            appRandomLetterDescU12();
            break;
        case userNameLetter21="m":
            appRandomLetterDescU13();
            break;
        case userNameLetter21="n":
            appRandomLetterDescU14();
            break;
        case userNameLetter21="o":
            appRandomLetterDescU15();
            break;
        case userNameLetter21="p":
            appRandomLetterDescU16();
            break;
        case userNameLetter21="q":
            appRandomLetterDescU17();
            break;
        case userNameLetter21="r":
            appRandomLetterDescU18();
            break;
        case userNameLetter21="s":
            appRandomLetterDescU19();
            break;
        case userNameLetter21="t":
            appRandomLetterDescU20();
            break;
        case userNameLetter21="u":
            appRandomLetterDescU21();
            break;
        case userNameLetter21="v":
            appRandomLetterDescU22();
            break;
        case userNameLetter21="w":
            appRandomLetterDescU23();
            break;
        case userNameLetter21="x":
            appRandomLetterDescU24();
            break;
        case userNameLetter21="y":
            appRandomLetterDescU25();
            break;
        case userNameLetter21="z":
            appRandomLetterDescU26();
            break;
        default:
            userNameLetter21="No Letter found";
    }
}

function appShowLetterDescA22()
{
    switch(userNameLetter22)
    {
        case userNameLetter22="a":
            appRandomLetterDescV1();
            break;
        case userNameLetter22="b":
            appRandomLetterDescV2();
            break;
        case userNameLetter22="c":
            appRandomLetterDescV3();
            break;
        case userNameLetter22="d":
            appRandomLetterDescV4();
            break;
        case userNameLetter22="e":
            appRandomLetterDescV5();
            break;
        case userNameLetter22="f":
            appRandomLetterDescV6();
            break;
        case userNameLetter22="g":
            appRandomLetterDescV7();
            break;
        case userNameLetter22="h":
            appRandomLetterDescV8();
            break;
        case userNameLetter22="i":
            appRandomLetterDescV9();
            break;
        case userNameLetter22="j":
            appRandomLetterDescV10();
            break;
        case userNameLetter22="k":
            appRandomLetterDescV11();
            break;
        case userNameLetter22="l":
            appRandomLetterDescV12();
            break;
        case userNameLetter22="m":
            appRandomLetterDescV13();
            break;
        case userNameLetter22="n":
            appRandomLetterDescV14();
            break;
        case userNameLetter22="o":
            appRandomLetterDescV15();
            break;
        case userNameLetter22="p":
            appRandomLetterDescV16();
            break;
        case userNameLetter22="q":
            appRandomLetterDescV17();
            break;
        case userNameLetter22="r":
            appRandomLetterDescV18();
            break;
        case userNameLetter22="s":
            appRandomLetterDescV19();
            break;
        case userNameLetter22="t":
            appRandomLetterDescV20();
            break;
        case userNameLetter22="u":
            appRandomLetterDescV21();
            break;
        case userNameLetter22="v":
            appRandomLetterDescV22();
            break;
        case userNameLetter22="w":
            appRandomLetterDescV23();
            break;
        case userNameLetter22="x":
            appRandomLetterDescV24();
            break;
        case userNameLetter22="y":
            appRandomLetterDescV25();
            break;
        case userNameLetter22="z":
            appRandomLetterDescV26();
            break;
        default:
            userNameLetter22="No Letter found";
    }
}

function appShowLetterDescA23()
{    
    switch(userNameLetter23)
    {
        case userNameLetter23="a":
            appRandomLetterDescW1();
            break;
        case userNameLetter23="b":
            appRandomLetterDescW2();
            break;
        case userNameLetter23="c":
            appRandomLetterDescW3();
            break;
        case userNameLetter23="d":
            appRandomLetterDescW4();
            break;
        case userNameLetter23="e":
            appRandomLetterDescW5();
            break;
        case userNameLetter23="f":
            appRandomLetterDescW6();
            break;
        case userNameLetter23="g":
            appRandomLetterDescW7();
            break;
        case userNameLetter23="h":
            appRandomLetterDescW8();
            break;
        case userNameLetter23="i":
            appRandomLetterDescW9();
            break;
        case userNameLetter23="j":
            appRandomLetterDescW10();
            break;
        case userNameLetter23="k":
            appRandomLetterDescW11();
            break;
        case userNameLetter23="l":
            appRandomLetterDescW12();
            break;
        case userNameLetter23="m":
            appRandomLetterDescW13();
            break;
        case userNameLetter23="n":
            appRandomLetterDescW14();
            break;
        case userNameLetter23="o":
            appRandomLetterDescW15();
            break;
        case userNameLetter23="p":
            appRandomLetterDescW16();
            break;
        case userNameLetter23="q":
            appRandomLetterDescW17();
            break;
        case userNameLetter23="r":
            appRandomLetterDescW18();
            break;
        case userNameLetter23="s":
            appRandomLetterDescW19();
            break;
        case userNameLetter23="t":
            appRandomLetterDescW20();
            break;
        case userNameLetter23="u":
            appRandomLetterDescW21();
            break;
        case userNameLetter23="v":
            appRandomLetterDescW22();
            break;
        case userNameLetter23="w":
            appRandomLetterDescW23();
            break;
        case userNameLetter23="x":
            appRandomLetterDescW24();
            break;
        case userNameLetter23="y":
            appRandomLetterDescW25();
            break;
        case userNameLetter23="z":
            appRandomLetterDescW26();
            break;
        default:
            userNameLetter23="No Letter found";
    }
}

function appShowLetterDescA24()
{
    switch(userNameLetter24)
    {
        case userNameLetter24="a":
            appRandomLetterDescX1();
            break;
        case userNameLetter24="b":
            appRandomLetterDescX2();
            break;
        case userNameLetter24="c":
            appRandomLetterDescX3();
            break;
        case userNameLetter24="d":
            appRandomLetterDescX4();
            break;
        case userNameLetter24="e":
            appRandomLetterDescX5();
            break;
        case userNameLetter24="f":
            appRandomLetterDescX6();
            break;
        case userNameLetter24="g":
            appRandomLetterDescX7();
            break;
        case userNameLetter24="h":
            appRandomLetterDescX8();
            break;
        case userNameLetter24="i":
            appRandomLetterDescX9();
            break;
        case userNameLetter24="j":
            appRandomLetterDescX10();
            break;
        case userNameLetter24="k":
            appRandomLetterDescX11();
            break;
        case userNameLetter24="l":
            appRandomLetterDescX12();
            break;
        case userNameLetter24="m":
            appRandomLetterDescX13();
            break;
        case userNameLetter24="n":
            appRandomLetterDescX14();
            break;
        case userNameLetter24="o":
            appRandomLetterDescX15();
            break;
        case userNameLetter24="p":
            appRandomLetterDescX16();
            break;
        case userNameLetter24="q":
            appRandomLetterDescX17();
            break;
        case userNameLetter24="r":
            appRandomLetterDescX18();
            break;
        case userNameLetter24="s":
            appRandomLetterDescX19();
            break;
        case userNameLetter24="t":
            appRandomLetterDescX20();
            break;
        case userNameLetter24="u":
            appRandomLetterDescX21();
            break;
        case userNameLetter24="v":
            appRandomLetterDescX22();
            break;
        case userNameLetter24="w":
            appRandomLetterDescX23();
            break;
        case userNameLetter24="x":
            appRandomLetterDescX24();
            break;
        case userNameLetter24="y":
            appRandomLetterDescX25();
            break;
        case userNameLetter24="z":
            appRandomLetterDescX26();
            break;
        default:
            userNameLetter24="No Letter found";
    }
}

function appShowLetterDescA25()
{
    switch(userNameLetter25)
    {
        case userNameLetter25="a":
            appRandomLetterDescY1();
            break;
        case userNameLetter25="b":
            appRandomLetterDescY2();
            break;
        case userNameLetter25="c":
            appRandomLetterDescY3();
            break;
        case userNameLetter25="d":
            appRandomLetterDescY4();
            break;
        case userNameLetter25="e":
            appRandomLetterDescY5();
            break;
        case userNameLetter25="f":
            appRandomLetterDescY6();
            break;
        case userNameLetter25="g":
            appRandomLetterDescY7();
            break;
        case userNameLetter25="h":
            appRandomLetterDescY8();
            break;
        case userNameLetter25="i":
            appRandomLetterDescY9();
            break;
        case userNameLetter25="j":
            appRandomLetterDescY10();
            break;
        case userNameLetter25="k":
            appRandomLetterDescY11();
            break;
        case userNameLetter25="l":
            appRandomLetterDescY12();
            break;
        case userNameLetter25="m":
            appRandomLetterDescY13();
            break;
        case userNameLetter25="n":
            appRandomLetterDescY14();
            break;
        case userNameLetter25="o":
            appRandomLetterDescY15();
            break;
        case userNameLetter25="p":
            appRandomLetterDescY16();
            break;
        case userNameLetter25="q":
            appRandomLetterDescY17();
            break;
        case userNameLetter25="r":
            appRandomLetterDescY18();
            break;
        case userNameLetter25="s":
            appRandomLetterDescY19();
            break;
        case userNameLetter25="t":
            appRandomLetterDescY20();
            break;
        case userNameLetter25="u":
            appRandomLetterDescY21();
            break;
        case userNameLetter25="v":
            appRandomLetterDescY22();
            break;
        case userNameLetter25="w":
            appRandomLetterDescY23();
            break;
        case userNameLetter25="x":
            appRandomLetterDescY24();
            break;
        case userNameLetter25="y":
            appRandomLetterDescY25();
            break;
        case userNameLetter25="z":
            appRandomLetterDescY26();
            break;
        default:
            userNameLetter25="No Letter found";
    }
}

function appShowLetterDescA26()
{
    switch(userNameLetter26)
    {
        case userNameLetter26="a":
            appRandomLetterDescZ1();
            break;
        case userNameLetter26="b":
            appRandomLetterDescZ2();
            break;
        case userNameLetter26="c":
            appRandomLetterDescZ3();
            break;
        case userNameLetter26="d":
            appRandomLetterDescZ4();
            break;
        case userNameLetter26="e":
            appRandomLetterDescZ5();
            break;
        case userNameLetter26="f":
            appRandomLetterDescZ6();
            break;
        case userNameLetter26="g":
            appRandomLetterDescZ7();
            break;
        case userNameLetter26="h":
            appRandomLetterDescZ8();
            break;
        case userNameLetter26="i":
            appRandomLetterDescZ9();
            break;
        case userNameLetter26="j":
            appRandomLetterDescZ10();
            break;
        case userNameLetter26="k":
            appRandomLetterDescZ11();
            break;
        case userNameLetter26="l":
            appRandomLetterDescZ12();
            break;
        case userNameLetter26="m":
            appRandomLetterDescZ13();
            break;
        case userNameLetter26="n":
            appRandomLetterDescZ14();
            break;
        case userNameLetter26="o":
            appRandomLetterDescZ15();
            break;
        case userNameLetter26="p":
            appRandomLetterDescZ16();
            break;
        case userNameLetter26="q":
            appRandomLetterDescZ17();
            break;
        case userNameLetter26="r":
            appRandomLetterDescZ18();
            break;
        case userNameLetter26="s":
            appRandomLetterDescZ19();
            break;
        case userNameLetter26="t":
            appRandomLetterDescZ20();
            break;
        case userNameLetter26="u":
            appRandomLetterDescZ21();
            break;
        case userNameLetter26="v":
            appRandomLetterDescZ22();
            break;
        case userNameLetter26="w":
            appRandomLetterDescZ23();
            break;
        case userNameLetter26="x":
            appRandomLetterDescZ24();
            break;
        case userNameLetter26="y":
            appRandomLetterDescZ25();
            break;
        case userNameLetter26="z":
            appRandomLetterDescZ26();
            break;
        default:
            userNameLetter26="No Letter found";
    }
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescA1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescA[randomLetterDescA];
}

function appRandomLetterDescA2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescB[randomLetterDescB]; 
}

function appRandomLetterDescA3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescC[randomLetterDescC]; 
}

function appRandomLetterDescA4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescD[randomLetterDescD]; 
}

function appRandomLetterDescA5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescE[randomLetterDescE]; 
}

function appRandomLetterDescA6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescF[randomLetterDescF]; 
}

function appRandomLetterDescA7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescG[randomLetterDescG]; 
}

function appRandomLetterDescA8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescH[randomLetterDescH]; 
}

function appRandomLetterDescA9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescI[randomLetterDescI]; 
}

function appRandomLetterDescA10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescJ[randomLetterDescJ]; 
}

function appRandomLetterDescA11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescK[randomLetterDescK]; 
}

function appRandomLetterDescA12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescL[randomLetterDescL]; 
}

function appRandomLetterDescA13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescM[randomLetterDescM]; 
}

function appRandomLetterDescA14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescN[randomLetterDescN]; 
}

function appRandomLetterDescA15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescO[randomLetterDescO]; 
}

function appRandomLetterDescA16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescP[randomLetterDescP]; 
}

function appRandomLetterDescA17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescP[randomLetterDescQ]; 
}

function appRandomLetterDescA18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescR[randomLetterDescR]; 
}

function appRandomLetterDescA19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescS[randomLetterDescS]; 
}

function appRandomLetterDescA20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescT[randomLetterDescT]; 
}

function appRandomLetterDescA21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescU[randomLetterDescU]; 
}

function appRandomLetterDescA22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescV[randomLetterDescV]; 
}

function appRandomLetterDescA23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescW[randomLetterDescW]; 
}

function appRandomLetterDescA24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescX[randomLetterDescX]; 
}

function appRandomLetterDescA25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescY[randomLetterDescY]; 
}

function appRandomLetterDescA26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter01=letterDescZ[randomLetterDescZ]; 
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescB1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescA[randomLetterDescA];
}

function appRandomLetterDescB2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescB[randomLetterDescB];
}

function appRandomLetterDescB3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescC[randomLetterDescC];
}

function appRandomLetterDescB4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescD[randomLetterDescD];
}

function appRandomLetterDescB5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescE[randomLetterDescE];
}

function appRandomLetterDescB6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescF[randomLetterDescF];
}

function appRandomLetterDescB7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescG[randomLetterDescG];
}

function appRandomLetterDescB8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescH[randomLetterDescH];
}

function appRandomLetterDescB9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescI[randomLetterDescI];
}

function appRandomLetterDescB10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescB11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescK[randomLetterDescK];
}

function appRandomLetterDescB12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescL[randomLetterDescL];
}

function appRandomLetterDescB13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescM[randomLetterDescM];
}

function appRandomLetterDescB14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescN[randomLetterDescN];
}

function appRandomLetterDescB15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescO[randomLetterDescO];
}

function appRandomLetterDescB16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescP[randomLetterDescP];
}

function appRandomLetterDescB17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescB18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescR[randomLetterDescR];
}

function appRandomLetterDescB19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescS[randomLetterDescS];
}

function appRandomLetterDescB20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescT[randomLetterDescT];
}

function appRandomLetterDescB21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescU[randomLetterDescU];
}

function appRandomLetterDescB22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescV[randomLetterDescV];
}

function appRandomLetterDescB23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescW[randomLetterDescW];
}

function appRandomLetterDescB24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescX[randomLetterDescX];
}

function appRandomLetterDescB25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescY[randomLetterDescY];
}

function appRandomLetterDescB26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter02=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescC1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescA[randomLetterDescA];
}

function appRandomLetterDescC2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescB[randomLetterDescB];
}

function appRandomLetterDescC3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescC[randomLetterDescC];
}

function appRandomLetterDescC4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescD[randomLetterDescD];
}

function appRandomLetterDescC5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescE[randomLetterDescE];
}

function appRandomLetterDescC6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescF[randomLetterDescF];
}

function appRandomLetterDescC7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescG[randomLetterDescG];
}

function appRandomLetterDescC8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescH[randomLetterDescH];
}

function appRandomLetterDescC9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescI[randomLetterDescI];
}

function appRandomLetterDescC10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescC11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescK[randomLetterDescK];
}

function appRandomLetterDescC12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescL[randomLetterDescL];
}

function appRandomLetterDescC13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescM[randomLetterDescM];
}

function appRandomLetterDescC14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescN[randomLetterDescN];
}

function appRandomLetterDescC15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescO[randomLetterDescO];
}

function appRandomLetterDescC16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescP[randomLetterDescP];
}

function appRandomLetterDescC17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescC18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescR[randomLetterDescR];
}

function appRandomLetterDescC19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescS[randomLetterDescS];
}

function appRandomLetterDescC20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescT[randomLetterDescT];
}

function appRandomLetterDescC21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescU[randomLetterDescU];
}

function appRandomLetterDescC22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescV[randomLetterDescV];
}

function appRandomLetterDescC23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescW[randomLetterDescW];
}

function appRandomLetterDescC24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescX[randomLetterDescX];
}

function appRandomLetterDescC25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescY[randomLetterDescY];
}

function appRandomLetterDescC26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter03=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescD1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescA[randomLetterDescA];
}

function appRandomLetterDescD2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescB[randomLetterDescB];
}

function appRandomLetterDescD3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescC[randomLetterDescC];
}

function appRandomLetterDescD4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescD[randomLetterDescD];
}

function appRandomLetterDescD5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescE[randomLetterDescE];
}

function appRandomLetterDescD6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescF[randomLetterDescF];
}

function appRandomLetterDescD7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescG[randomLetterDescG];
}

function appRandomLetterDescD8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescH[randomLetterDescH];
}

function appRandomLetterDescD9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescI[randomLetterDescI];
}

function appRandomLetterDescD10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescD11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescK[randomLetterDescK];
}

function appRandomLetterDescD12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescL[randomLetterDescL];
}

function appRandomLetterDescD13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescM[randomLetterDescM];
}

function appRandomLetterDescD14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescN[randomLetterDescN];
}

function appRandomLetterDescD15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescO[randomLetterDescO];
}

function appRandomLetterDescD16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescP[randomLetterDescP];
}

function appRandomLetterDescD17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescD18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescR[randomLetterDescR];
}

function appRandomLetterDescD19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescS[randomLetterDescS];
}

function appRandomLetterDescD20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescT[randomLetterDescT];
}

function appRandomLetterDescD21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescU[randomLetterDescU];
}

function appRandomLetterDescD22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescV[randomLetterDescV];
}

function appRandomLetterDescD23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescW[randomLetterDescW];
}

function appRandomLetterDescD24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescX[randomLetterDescX];
}

function appRandomLetterDescD25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescY[randomLetterDescY];
}

function appRandomLetterDescD26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter04=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescE1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescA[randomLetterDescA];
}

function appRandomLetterDescE2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescB[randomLetterDescB];
}

function appRandomLetterDescE3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescC[randomLetterDescC];
}

function appRandomLetterDescE4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescD[randomLetterDescD];
}

function appRandomLetterDescE5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescE[randomLetterDescE];
}

function appRandomLetterDescE6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescF[randomLetterDescF];
}

function appRandomLetterDescE7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescG[randomLetterDescG];
}

function appRandomLetterDescE8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescH[randomLetterDescH];
}

function appRandomLetterDescE9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescI[randomLetterDescI];
}

function appRandomLetterDescE10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescE11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescK[randomLetterDescK];
}

function appRandomLetterDescE12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescL[randomLetterDescL];
}

function appRandomLetterDescE13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescM[randomLetterDescM];
}

function appRandomLetterDescE14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescN[randomLetterDescN];
}

function appRandomLetterDescE15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescO[randomLetterDescO];
}

function appRandomLetterDescE16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescP[randomLetterDescP];
}

function appRandomLetterDescE17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescE18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescR[randomLetterDescR];
}

function appRandomLetterDescE19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescS[randomLetterDescS];
}

function appRandomLetterDescE20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescT[randomLetterDescT];
}

function appRandomLetterDescE21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescU[randomLetterDescU];
}

function appRandomLetterDescE22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescV[randomLetterDescV];
}

function appRandomLetterDescE23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescW[randomLetterDescW];
}

function appRandomLetterDescE24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescX[randomLetterDescX];
}

function appRandomLetterDescE25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescY[randomLetterDescY];
}

function appRandomLetterDescE26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter05=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescF1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescA[randomLetterDescA];
}

function appRandomLetterDescF2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescB[randomLetterDescB];
}

function appRandomLetterDescF3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescC[randomLetterDescC];
}

function appRandomLetterDescF4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescD[randomLetterDescD];
}

function appRandomLetterDescF5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescE[randomLetterDescE];
}

function appRandomLetterDescF6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescF[randomLetterDescF];
}

function appRandomLetterDescF7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescG[randomLetterDescG];
}

function appRandomLetterDescF8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescH[randomLetterDescH];
}

function appRandomLetterDescF9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescI[randomLetterDescI];
}

function appRandomLetterDescF10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescF11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescK[randomLetterDescK];
}

function appRandomLetterDescF12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescL[randomLetterDescL];
}

function appRandomLetterDescF13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescM[randomLetterDescM];
}

function appRandomLetterDescF14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescN[randomLetterDescN];
}

function appRandomLetterDescF15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescO[randomLetterDescO];
}

function appRandomLetterDescF16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescP[randomLetterDescP];
}

function appRandomLetterDescF17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescF18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescR[randomLetterDescR];
}

function appRandomLetterDescF19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescS[randomLetterDescS];
}

function appRandomLetterDescF20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescT[randomLetterDescT];
}

function appRandomLetterDescF21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescU[randomLetterDescU];
}

function appRandomLetterDescF22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescV[randomLetterDescV];
}

function appRandomLetterDescF23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescW[randomLetterDescW];
}

function appRandomLetterDescF24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescX[randomLetterDescX];
}

function appRandomLetterDescF25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescY[randomLetterDescY];
}

function appRandomLetterDescF26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter06=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescG1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescA[randomLetterDescA];
}

function appRandomLetterDescG2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescB[randomLetterDescB];
}

function appRandomLetterDescG3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescC[randomLetterDescC];
}

function appRandomLetterDescG4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescD[randomLetterDescD];
}

function appRandomLetterDescG5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescE[randomLetterDescE];
}

function appRandomLetterDescG6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescF[randomLetterDescF];
}

function appRandomLetterDescG7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescG[randomLetterDescG];
}

function appRandomLetterDescG8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescH[randomLetterDescH];
}

function appRandomLetterDescG9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescI[randomLetterDescI];
}

function appRandomLetterDescG10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescG11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescK[randomLetterDescK];
}

function appRandomLetterDescG12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescL[randomLetterDescL];
}

function appRandomLetterDescG13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescM[randomLetterDescM];
}

function appRandomLetterDescG14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescN[randomLetterDescN];
}

function appRandomLetterDescG15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescO[randomLetterDescO];
}

function appRandomLetterDescG16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescP[randomLetterDescP];
}

function appRandomLetterDescG17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescG18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescR[randomLetterDescR];
}

function appRandomLetterDescG19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescS[randomLetterDescS];
}

function appRandomLetterDescG20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescT[randomLetterDescT];
}

function appRandomLetterDescG21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescU[randomLetterDescU];
}

function appRandomLetterDescG22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescV[randomLetterDescV];
}

function appRandomLetterDescG23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescW[randomLetterDescW];
}

function appRandomLetterDescG24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescX[randomLetterDescX];
}

function appRandomLetterDescG25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescY[randomLetterDescY];
}

function appRandomLetterDescG26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter07=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescH1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescA[randomLetterDescA];
}

function appRandomLetterDescH2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescB[randomLetterDescB];
}

function appRandomLetterDescH3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescC[randomLetterDescC];
}

function appRandomLetterDescH4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescD[randomLetterDescD];
}

function appRandomLetterDescH5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescE[randomLetterDescE];
}

function appRandomLetterDescH6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescF[randomLetterDescF];
}

function appRandomLetterDescH7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescG[randomLetterDescG];
}

function appRandomLetterDescH8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescH[randomLetterDescH];
}

function appRandomLetterDescH9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescI[randomLetterDescI];
}

function appRandomLetterDescH10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescH11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescK[randomLetterDescK];
}

function appRandomLetterDescH12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescL[randomLetterDescL];
}

function appRandomLetterDescH13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescM[randomLetterDescM];
}

function appRandomLetterDescH14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescN[randomLetterDescN];
}

function appRandomLetterDescH15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescO[randomLetterDescO];
}

function appRandomLetterDescH16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescP[randomLetterDescP];
}

function appRandomLetterDescH17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescH18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescR[randomLetterDescR];
}

function appRandomLetterDescH19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescS[randomLetterDescS];
}

function appRandomLetterDescH20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescT[randomLetterDescT];
}

function appRandomLetterDescH21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescU[randomLetterDescU];
}

function appRandomLetterDescH22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescV[randomLetterDescV];
}

function appRandomLetterDescH23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescW[randomLetterDescW];
}

function appRandomLetterDescH24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescX[randomLetterDescX];
}

function appRandomLetterDescH25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescY[randomLetterDescY];
}

function appRandomLetterDescH26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter08=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescI1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescA[randomLetterDescA];
}

function appRandomLetterDescI2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescB[randomLetterDescB];
}

function appRandomLetterDescI3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescC[randomLetterDescC];
}

function appRandomLetterDescI4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescD[randomLetterDescD];
}

function appRandomLetterDescI5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescE[randomLetterDescE];
}

function appRandomLetterDescI6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescF[randomLetterDescF];
}

function appRandomLetterDescI7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescG[randomLetterDescG];
}

function appRandomLetterDescI8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescH[randomLetterDescH];
}

function appRandomLetterDescI9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescI[randomLetterDescI];
}

function appRandomLetterDescI10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescI11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescK[randomLetterDescK];
}

function appRandomLetterDescI12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescL[randomLetterDescL];
}

function appRandomLetterDescI13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescM[randomLetterDescM];
}

function appRandomLetterDescI14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescN[randomLetterDescN];
}

function appRandomLetterDescI15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescO[randomLetterDescO];
}

function appRandomLetterDescI16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescP[randomLetterDescP];
}

function appRandomLetterDescI17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescI18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescR[randomLetterDescR];
}

function appRandomLetterDescI19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescS[randomLetterDescS];
}

function appRandomLetterDescI20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescT[randomLetterDescT];
}

function appRandomLetterDescI21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescU[randomLetterDescU];
}

function appRandomLetterDescI22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescV[randomLetterDescV];
}

function appRandomLetterDescI23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescW[randomLetterDescW];
}

function appRandomLetterDescI24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescX[randomLetterDescX];
}

function appRandomLetterDescI25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescY[randomLetterDescY];
}

function appRandomLetterDescI26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter09=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescJ1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescA[randomLetterDescA];
}

function appRandomLetterDescJ2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescB[randomLetterDescB];
}

function appRandomLetterDescJ3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescC[randomLetterDescC];
}

function appRandomLetterDescJ4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescD[randomLetterDescD];
}

function appRandomLetterDescJ5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescE[randomLetterDescE];
}

function appRandomLetterDescJ6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescF[randomLetterDescF];
}

function appRandomLetterDescJ7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescG[randomLetterDescG];
}

function appRandomLetterDescJ8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescH[randomLetterDescH];
}

function appRandomLetterDescJ9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescI[randomLetterDescI];
}

function appRandomLetterDescJ10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescJ11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescK[randomLetterDescK];
}

function appRandomLetterDescJ12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescL[randomLetterDescL];
}

function appRandomLetterDescJ13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescM[randomLetterDescM];
}

function appRandomLetterDescJ14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescN[randomLetterDescN];
}

function appRandomLetterDescJ15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescO[randomLetterDescO];
}

function appRandomLetterDescJ16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescP[randomLetterDescP];
}

function appRandomLetterDescJ17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescJ18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescR[randomLetterDescR];
}

function appRandomLetterDescJ19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescS[randomLetterDescS];
}

function appRandomLetterDescJ20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescT[randomLetterDescT];
}

function appRandomLetterDescJ21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescU[randomLetterDescU];
}

function appRandomLetterDescJ22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescV[randomLetterDescV];
}

function appRandomLetterDescJ23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescW[randomLetterDescW];
}

function appRandomLetterDescJ24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescX[randomLetterDescX];
}

function appRandomLetterDescJ25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescY[randomLetterDescY];
}

function appRandomLetterDescJ26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter10=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescK1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescA[randomLetterDescA];
}

function appRandomLetterDescK2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescB[randomLetterDescB];
}

function appRandomLetterDescK3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescC[randomLetterDescC];
}

function appRandomLetterDescK4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescD[randomLetterDescD];
}

function appRandomLetterDescK5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescE[randomLetterDescE];
}

function appRandomLetterDescK6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescF[randomLetterDescF];
}

function appRandomLetterDescK7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescG[randomLetterDescG];
}

function appRandomLetterDescK8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescH[randomLetterDescH];
}

function appRandomLetterDescK9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescI[randomLetterDescI];
}

function appRandomLetterDescK10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescK11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescK[randomLetterDescK];
}

function appRandomLetterDescK12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescL[randomLetterDescL];
}

function appRandomLetterDescK13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescM[randomLetterDescM];
}

function appRandomLetterDescK14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescN[randomLetterDescN];
}

function appRandomLetterDescK15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescO[randomLetterDescO];
}

function appRandomLetterDescK16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescP[randomLetterDescP];
}

function appRandomLetterDescK17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescK18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescR[randomLetterDescR];
}

function appRandomLetterDescK19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescS[randomLetterDescS];
}

function appRandomLetterDescK20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescT[randomLetterDescT];
}

function appRandomLetterDescK21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescU[randomLetterDescU];
}

function appRandomLetterDescK22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescV[randomLetterDescV];
}

function appRandomLetterDescK23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescW[randomLetterDescW];
}

function appRandomLetterDescK24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescX[randomLetterDescX];
}

function appRandomLetterDescK25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescY[randomLetterDescY];
}

function appRandomLetterDescK26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter11=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescL1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescA[randomLetterDescA];
}

function appRandomLetterDescL2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescB[randomLetterDescB];
}

function appRandomLetterDescL3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescC[randomLetterDescC];
}

function appRandomLetterDescL4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescD[randomLetterDescD];
}

function appRandomLetterDescL5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescE[randomLetterDescE];
}

function appRandomLetterDescL6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescF[randomLetterDescF];
}

function appRandomLetterDescL7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescG[randomLetterDescG];
}

function appRandomLetterDescL8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescH[randomLetterDescH];
}

function appRandomLetterDescL9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescI[randomLetterDescI];
}

function appRandomLetterDescL10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescL11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescK[randomLetterDescK];
}

function appRandomLetterDescL12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescL[randomLetterDescL];
}

function appRandomLetterDescL13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescM[randomLetterDescM];
}

function appRandomLetterDescL14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescN[randomLetterDescN];
}

function appRandomLetterDescL15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescO[randomLetterDescO];
}

function appRandomLetterDescL16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescP[randomLetterDescP];
}

function appRandomLetterDescL17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescL18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescR[randomLetterDescR];
}

function appRandomLetterDescL19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescS[randomLetterDescS];
}

function appRandomLetterDescL20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescT[randomLetterDescT];
}

function appRandomLetterDescL21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescU[randomLetterDescU];
}

function appRandomLetterDescL22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescV[randomLetterDescV];
}

function appRandomLetterDescL23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescW[randomLetterDescW];
}

function appRandomLetterDescL24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescX[randomLetterDescX];
}

function appRandomLetterDescL25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescY[randomLetterDescY];
}

function appRandomLetterDescL26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter12=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescM1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescA[randomLetterDescA];
}

function appRandomLetterDescM2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescB[randomLetterDescB];
}

function appRandomLetterDescM3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescC[randomLetterDescC];
}

function appRandomLetterDescM4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescD[randomLetterDescD];
}

function appRandomLetterDescM5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescE[randomLetterDescE];
}

function appRandomLetterDescM6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescF[randomLetterDescF];
}

function appRandomLetterDescM7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescG[randomLetterDescG];
}

function appRandomLetterDescM8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescH[randomLetterDescH];
}

function appRandomLetterDescM9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescI[randomLetterDescI];
}

function appRandomLetterDescM10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescM11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescK[randomLetterDescK];
}

function appRandomLetterDescM12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescL[randomLetterDescL];
}

function appRandomLetterDescM13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescM[randomLetterDescM];
}

function appRandomLetterDescM14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescN[randomLetterDescN];
}

function appRandomLetterDescM15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescO[randomLetterDescO];
}

function appRandomLetterDescM16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescP[randomLetterDescP];
}

function appRandomLetterDescM17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescM18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescR[randomLetterDescR];
}

function appRandomLetterDescM19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescS[randomLetterDescS];
}

function appRandomLetterDescM20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescT[randomLetterDescT];
}

function appRandomLetterDescM21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescU[randomLetterDescU];
}

function appRandomLetterDescM22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescV[randomLetterDescV];
}

function appRandomLetterDescM23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescW[randomLetterDescW];
}

function appRandomLetterDescM24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescX[randomLetterDescX];
}

function appRandomLetterDescM25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescY[randomLetterDescY];
}

function appRandomLetterDescM26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter13=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescN1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescA[randomLetterDescA];
}

function appRandomLetterDescN2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescB[randomLetterDescB];
}

function appRandomLetterDescN3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescC[randomLetterDescC];
}

function appRandomLetterDescN4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescD[randomLetterDescD];
}

function appRandomLetterDescN5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescE[randomLetterDescE];
}

function appRandomLetterDescN6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescF[randomLetterDescF];
}

function appRandomLetterDescN7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescG[randomLetterDescG];
}

function appRandomLetterDescN8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescH[randomLetterDescH];
}

function appRandomLetterDescN9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescI[randomLetterDescI];
}

function appRandomLetterDescN10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescN11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescK[randomLetterDescK];
}

function appRandomLetterDescN12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescL[randomLetterDescL];
}

function appRandomLetterDescN13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescM[randomLetterDescM];
}

function appRandomLetterDescN14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescN[randomLetterDescN];
}

function appRandomLetterDescN15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescO[randomLetterDescO];
}

function appRandomLetterDescN16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescP[randomLetterDescP];
}

function appRandomLetterDescN17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescN18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescR[randomLetterDescR];
}

function appRandomLetterDescN19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescS[randomLetterDescS];
}

function appRandomLetterDescN20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescT[randomLetterDescT];
}

function appRandomLetterDescN21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescU[randomLetterDescU];
}

function appRandomLetterDescN22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescV[randomLetterDescV];
}

function appRandomLetterDescN23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescW[randomLetterDescW];
}

function appRandomLetterDescN24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescX[randomLetterDescX];
}

function appRandomLetterDescN25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescY[randomLetterDescY];
}

function appRandomLetterDescN26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter14=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescO1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescA[randomLetterDescA];
}

function appRandomLetterDescO2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescB[randomLetterDescB];
}

function appRandomLetterDescO3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescC[randomLetterDescC];
}

function appRandomLetterDescO4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescD[randomLetterDescD];
}

function appRandomLetterDescO5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescE[randomLetterDescE];
}

function appRandomLetterDescO6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescF[randomLetterDescF];
}

function appRandomLetterDescO7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescG[randomLetterDescG];
}

function appRandomLetterDescO8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescH[randomLetterDescH];
}

function appRandomLetterDescO9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescI[randomLetterDescI];
}

function appRandomLetterDescO10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescO11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescK[randomLetterDescK];
}

function appRandomLetterDescO12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescL[randomLetterDescL];
}

function appRandomLetterDescO13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescM[randomLetterDescM];
}

function appRandomLetterDescO14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescN[randomLetterDescN];
}

function appRandomLetterDescO15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescO[randomLetterDescO];
}

function appRandomLetterDescO16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescP[randomLetterDescP];
}

function appRandomLetterDescO17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescO18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescR[randomLetterDescR];
}

function appRandomLetterDescO19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescS[randomLetterDescS];
}

function appRandomLetterDescO20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescT[randomLetterDescT];
}

function appRandomLetterDescO21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescU[randomLetterDescU];
}

function appRandomLetterDescO22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescV[randomLetterDescV];
}

function appRandomLetterDescO23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescW[randomLetterDescW];
}

function appRandomLetterDescO24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescX[randomLetterDescX];
}

function appRandomLetterDescO25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescY[randomLetterDescY];
}

function appRandomLetterDescO26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter15=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescP1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescA[randomLetterDescA];
}

function appRandomLetterDescP2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescB[randomLetterDescB];
}

function appRandomLetterDescP3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescC[randomLetterDescC];
}

function appRandomLetterDescP4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescD[randomLetterDescD];
}

function appRandomLetterDescP5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescE[randomLetterDescE];
}

function appRandomLetterDescP6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescF[randomLetterDescF];
}

function appRandomLetterDescP7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescG[randomLetterDescG];
}

function appRandomLetterDescP8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescH[randomLetterDescH];
}

function appRandomLetterDescP9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescI[randomLetterDescI];
}

function appRandomLetterDescP10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescP11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescK[randomLetterDescK];
}

function appRandomLetterDescP12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescL[randomLetterDescL];
}

function appRandomLetterDescP13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescM[randomLetterDescM];
}

function appRandomLetterDescP14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescN[randomLetterDescN];
}

function appRandomLetterDescP15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescO[randomLetterDescO];
}

function appRandomLetterDescP16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescP[randomLetterDescP];
}

function appRandomLetterDescP17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescP18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescR[randomLetterDescR];
}

function appRandomLetterDescP19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescS[randomLetterDescS];
}

function appRandomLetterDescP20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescT[randomLetterDescT];
}

function appRandomLetterDescP21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescU[randomLetterDescU];
}

function appRandomLetterDescP22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescV[randomLetterDescV];
}

function appRandomLetterDescP23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescW[randomLetterDescW];
}

function appRandomLetterDescP24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescX[randomLetterDescX];
}

function appRandomLetterDescP25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescY[randomLetterDescY];
}

function appRandomLetterDescP26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter16=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescQ1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescA[randomLetterDescA];
}

function appRandomLetterDescQ2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescB[randomLetterDescB];
}

function appRandomLetterDescQ3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescC[randomLetterDescC];
}

function appRandomLetterDescQ4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescD[randomLetterDescD];
}

function appRandomLetterDescQ5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescE[randomLetterDescE];
}

function appRandomLetterDescQ6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescF[randomLetterDescF];
}

function appRandomLetterDescQ7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescG[randomLetterDescG];
}

function appRandomLetterDescQ8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescH[randomLetterDescH];
}

function appRandomLetterDescQ9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescI[randomLetterDescI];
}

function appRandomLetterDescQ10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescQ11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescK[randomLetterDescK];
}

function appRandomLetterDescQ12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescL[randomLetterDescL];
}

function appRandomLetterDescQ13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescM[randomLetterDescM];
}

function appRandomLetterDescQ14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescN[randomLetterDescN];
}

function appRandomLetterDescQ15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescO[randomLetterDescO];
}

function appRandomLetterDescQ16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescP[randomLetterDescP];
}

function appRandomLetterDescQ17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescQ18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescR[randomLetterDescR];
}

function appRandomLetterDescQ19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescS[randomLetterDescS];
}

function appRandomLetterDescQ20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescT[randomLetterDescT];
}

function appRandomLetterDescQ21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescU[randomLetterDescU];
}

function appRandomLetterDescQ22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescV[randomLetterDescV];
}

function appRandomLetterDescQ23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescW[randomLetterDescW];
}

function appRandomLetterDescQ24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescX[randomLetterDescX];
}

function appRandomLetterDescQ25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescY[randomLetterDescY];
}

function appRandomLetterDescQ26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter17=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescR1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescA[randomLetterDescA];
}

function appRandomLetterDescR2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescB[randomLetterDescB];
}

function appRandomLetterDescR3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescC[randomLetterDescC];
}

function appRandomLetterDescR4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescD[randomLetterDescD];
}

function appRandomLetterDescR5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescE[randomLetterDescE];
}

function appRandomLetterDescR6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescF[randomLetterDescF];
}

function appRandomLetterDescR7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescG[randomLetterDescG];
}

function appRandomLetterDescR8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescH[randomLetterDescH];
}

function appRandomLetterDescR9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescI[randomLetterDescI];
}

function appRandomLetterDescR10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescR11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescK[randomLetterDescK];
}

function appRandomLetterDescR12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescL[randomLetterDescL];
}

function appRandomLetterDescR13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescM[randomLetterDescM];
}

function appRandomLetterDescR14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescN[randomLetterDescN];
}

function appRandomLetterDescR15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescO[randomLetterDescO];
}

function appRandomLetterDescR16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescP[randomLetterDescP];
}

function appRandomLetterDescR17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescR18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescR[randomLetterDescR];
}

function appRandomLetterDescR19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescS[randomLetterDescS];
}

function appRandomLetterDescR20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescT[randomLetterDescT];
}

function appRandomLetterDescR21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescU[randomLetterDescU];
}

function appRandomLetterDescR22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescV[randomLetterDescV];
}

function appRandomLetterDescR23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescW[randomLetterDescW];
}

function appRandomLetterDescR24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescX[randomLetterDescX];
}

function appRandomLetterDescR25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescY[randomLetterDescY];
}

function appRandomLetterDescR26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter18=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescS1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescA[randomLetterDescA];
}

function appRandomLetterDescS2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescB[randomLetterDescB];
}

function appRandomLetterDescS3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescC[randomLetterDescC];
}

function appRandomLetterDescS4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescD[randomLetterDescD];
}

function appRandomLetterDescS5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescE[randomLetterDescE];
}

function appRandomLetterDescS6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescF[randomLetterDescF];
}

function appRandomLetterDescS7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescG[randomLetterDescG];
}

function appRandomLetterDescS8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescH[randomLetterDescH];
}

function appRandomLetterDescS9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescI[randomLetterDescI];
}

function appRandomLetterDescS10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescS11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescK[randomLetterDescK];
}

function appRandomLetterDescS12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescL[randomLetterDescL];
}

function appRandomLetterDescS13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescM[randomLetterDescM];
}

function appRandomLetterDescS14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescN[randomLetterDescN];
}

function appRandomLetterDescS15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescO[randomLetterDescO];
}

function appRandomLetterDescS16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescP[randomLetterDescP];
}

function appRandomLetterDescS17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescS18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescR[randomLetterDescR];
}

function appRandomLetterDescS19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescS[randomLetterDescS];
}

function appRandomLetterDescS20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescT[randomLetterDescT];
}

function appRandomLetterDescS21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescU[randomLetterDescU];
}

function appRandomLetterDescS22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescV[randomLetterDescV];
}

function appRandomLetterDescS23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescW[randomLetterDescW];
}

function appRandomLetterDescS24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescX[randomLetterDescX];
}

function appRandomLetterDescS25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescY[randomLetterDescY];
}

function appRandomLetterDescS26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter19=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescT1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescA[randomLetterDescA];
}

function appRandomLetterDescT2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescB[randomLetterDescB];
}

function appRandomLetterDescT3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescC[randomLetterDescC];
}

function appRandomLetterDescT4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescD[randomLetterDescD];
}

function appRandomLetterDescT5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescE[randomLetterDescE];
}

function appRandomLetterDescT6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescF[randomLetterDescF];
}

function appRandomLetterDescT7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescG[randomLetterDescG];
}

function appRandomLetterDescT8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescH[randomLetterDescH];
}

function appRandomLetterDescT9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescI[randomLetterDescI];
}

function appRandomLetterDescT10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescT11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescK[randomLetterDescK];
}

function appRandomLetterDescT12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescL[randomLetterDescL];
}

function appRandomLetterDescT13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescM[randomLetterDescM];
}

function appRandomLetterDescT14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescN[randomLetterDescN];
}

function appRandomLetterDescT15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescO[randomLetterDescO];
}

function appRandomLetterDescT16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescP[randomLetterDescP];
}

function appRandomLetterDescT17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescT18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescR[randomLetterDescR];
}

function appRandomLetterDescT19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescS[randomLetterDescS];
}

function appRandomLetterDescT20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescT[randomLetterDescT];
}

function appRandomLetterDescT21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescU[randomLetterDescU];
}

function appRandomLetterDescT22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescV[randomLetterDescV];
}

function appRandomLetterDescT23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescW[randomLetterDescW];
}

function appRandomLetterDescT24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescX[randomLetterDescX];
}

function appRandomLetterDescT25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescY[randomLetterDescY];
}

function appRandomLetterDescT26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter20=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescU1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescA[randomLetterDescA];
}

function appRandomLetterDescU2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescB[randomLetterDescB];
}

function appRandomLetterDescU3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescC[randomLetterDescC];
}

function appRandomLetterDescU4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescD[randomLetterDescD];
}

function appRandomLetterDescU5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescE[randomLetterDescE];
}

function appRandomLetterDescU6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescF[randomLetterDescF];
}

function appRandomLetterDescU7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescG[randomLetterDescG];
}

function appRandomLetterDescU8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescH[randomLetterDescH];
}

function appRandomLetterDescU9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescI[randomLetterDescI];
}

function appRandomLetterDescU10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescU11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescK[randomLetterDescK];
}

function appRandomLetterDescU12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescL[randomLetterDescL];
}

function appRandomLetterDescU13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescM[randomLetterDescM];
}

function appRandomLetterDescU14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescN[randomLetterDescN];
}

function appRandomLetterDescU15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescO[randomLetterDescO];
}

function appRandomLetterDescU16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescP[randomLetterDescP];
}

function appRandomLetterDescU17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescU18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescR[randomLetterDescR];
}

function appRandomLetterDescU19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescS[randomLetterDescS];
}

function appRandomLetterDescU20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescT[randomLetterDescT];
}

function appRandomLetterDescU21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescU[randomLetterDescU];
}

function appRandomLetterDescU22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescV[randomLetterDescV];
}

function appRandomLetterDescU23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescW[randomLetterDescW];
}

function appRandomLetterDescU24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescX[randomLetterDescX];
}

function appRandomLetterDescU25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescY[randomLetterDescY];
}

function appRandomLetterDescU26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter21=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescV1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescA[randomLetterDescA];
}

function appRandomLetterDescV2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescB[randomLetterDescB];
}

function appRandomLetterDescV3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescC[randomLetterDescC];
}

function appRandomLetterDescV4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescD[randomLetterDescD];
}

function appRandomLetterDescV5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescE[randomLetterDescE];
}

function appRandomLetterDescV6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescF[randomLetterDescF];
}

function appRandomLetterDescV7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescG[randomLetterDescG];
}

function appRandomLetterDescV8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescH[randomLetterDescH];
}

function appRandomLetterDescV9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescI[randomLetterDescI];
}

function appRandomLetterDescV10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescV11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescK[randomLetterDescK];
}

function appRandomLetterDescV12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescL[randomLetterDescL];
}

function appRandomLetterDescV13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescM[randomLetterDescM];
}

function appRandomLetterDescV14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescN[randomLetterDescN];
}

function appRandomLetterDescV15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescO[randomLetterDescO];
}

function appRandomLetterDescV16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescP[randomLetterDescP];
}

function appRandomLetterDescV17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescV18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescR[randomLetterDescR];
}

function appRandomLetterDescV19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescS[randomLetterDescS];
}

function appRandomLetterDescV20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescT[randomLetterDescT];
}

function appRandomLetterDescV21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescU[randomLetterDescU];
}

function appRandomLetterDescV22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescV[randomLetterDescV];
}

function appRandomLetterDescV23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescW[randomLetterDescW];
}

function appRandomLetterDescV24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescX[randomLetterDescX];
}

function appRandomLetterDescV25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescY[randomLetterDescY];
}

function appRandomLetterDescV26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter22=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescW1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescA[randomLetterDescA];
}

function appRandomLetterDescW2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescB[randomLetterDescB];
}

function appRandomLetterDescW3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescC[randomLetterDescC];
}

function appRandomLetterDescW4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescD[randomLetterDescD];
}

function appRandomLetterDescW5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescE[randomLetterDescE];
}

function appRandomLetterDescW6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescF[randomLetterDescF];
}

function appRandomLetterDescW7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescG[randomLetterDescG];
}

function appRandomLetterDescW8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescH[randomLetterDescH];
}

function appRandomLetterDescW9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescI[randomLetterDescI];
}

function appRandomLetterDescW10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescW11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescK[randomLetterDescK];
}

function appRandomLetterDescW12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescL[randomLetterDescL];
}

function appRandomLetterDescW13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescM[randomLetterDescM];
}

function appRandomLetterDescW14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescN[randomLetterDescN];
}

function appRandomLetterDescW15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescO[randomLetterDescO];
}

function appRandomLetterDescW16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescP[randomLetterDescP];
}

function appRandomLetterDescW17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescW18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescR[randomLetterDescR];
}

function appRandomLetterDescW19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescS[randomLetterDescS];
}

function appRandomLetterDescW20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescT[randomLetterDescT];
}

function appRandomLetterDescW21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescU[randomLetterDescU];
}

function appRandomLetterDescW22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescV[randomLetterDescV];
}

function appRandomLetterDescW23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescW[randomLetterDescW];
}

function appRandomLetterDescW24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescX[randomLetterDescX];
}

function appRandomLetterDescW25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescY[randomLetterDescY];
}

function appRandomLetterDescW26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter23=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescX1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescA[randomLetterDescA];
}

function appRandomLetterDescX2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescB[randomLetterDescB];
}

function appRandomLetterDescX3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescC[randomLetterDescC];
}

function appRandomLetterDescX4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescD[randomLetterDescD];
}

function appRandomLetterDescX5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescE[randomLetterDescE];
}

function appRandomLetterDescX6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescF[randomLetterDescF];
}

function appRandomLetterDescX7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescG[randomLetterDescG];
}

function appRandomLetterDescX8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescH[randomLetterDescH];
}

function appRandomLetterDescX9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescI[randomLetterDescI];
}

function appRandomLetterDescX10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescX11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescK[randomLetterDescK];
}

function appRandomLetterDescX12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescL[randomLetterDescL];
}

function appRandomLetterDescX13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescM[randomLetterDescM];
}

function appRandomLetterDescX14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescN[randomLetterDescN];
}

function appRandomLetterDescX15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescO[randomLetterDescO];
}

function appRandomLetterDescX16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescP[randomLetterDescP];
}

function appRandomLetterDescX17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescX18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescR[randomLetterDescR];
}

function appRandomLetterDescX19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescS[randomLetterDescS];
}

function appRandomLetterDescX20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescT[randomLetterDescT];
}

function appRandomLetterDescX21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescU[randomLetterDescU];
}

function appRandomLetterDescX22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescV[randomLetterDescV];
}

function appRandomLetterDescX23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescW[randomLetterDescW];
}

function appRandomLetterDescX24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescX[randomLetterDescX];
}

function appRandomLetterDescX25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescY[randomLetterDescY];
}

function appRandomLetterDescX26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter24=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescY1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescA[randomLetterDescA];
}

function appRandomLetterDescY2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescB[randomLetterDescB];
}

function appRandomLetterDescY3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescC[randomLetterDescC];
}

function appRandomLetterDescY4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescD[randomLetterDescD];
}

function appRandomLetterDescY5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescE[randomLetterDescE];
}

function appRandomLetterDescY6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescF[randomLetterDescF];
}

function appRandomLetterDescY7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescG[randomLetterDescG];
}

function appRandomLetterDescY8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescH[randomLetterDescH];
}

function appRandomLetterDescY9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescI[randomLetterDescI];
}

function appRandomLetterDescY10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescY11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescK[randomLetterDescK];
}

function appRandomLetterDescY12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescL[randomLetterDescL];
}

function appRandomLetterDescY13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescM[randomLetterDescM];
}

function appRandomLetterDescY14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescN[randomLetterDescN];
}

function appRandomLetterDescY15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescO[randomLetterDescO];
}

function appRandomLetterDescY16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescP[randomLetterDescP];
}

function appRandomLetterDescY17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescY18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescR[randomLetterDescR];
}

function appRandomLetterDescY19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescS[randomLetterDescS];
}

function appRandomLetterDescY20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescT[randomLetterDescT];
}

function appRandomLetterDescY21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescU[randomLetterDescU];
}

function appRandomLetterDescY22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescV[randomLetterDescV];
}

function appRandomLetterDescY23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescW[randomLetterDescW];
}

function appRandomLetterDescY24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescX[randomLetterDescX];
}

function appRandomLetterDescY25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescY[randomLetterDescY];
}

function appRandomLetterDescY26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter25=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appRandomLetterDescZ1()
{
    randomLetterDescA=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescA[randomLetterDescA];
}

function appRandomLetterDescZ2()
{
    randomLetterDescB=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescB[randomLetterDescB];
}

function appRandomLetterDescZ3()
{
    randomLetterDescC=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescC[randomLetterDescC];
}

function appRandomLetterDescZ4()
{
    randomLetterDescD=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescD[randomLetterDescD];
}

function appRandomLetterDescZ5()
{
    randomLetterDescE=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescE[randomLetterDescE];
}

function appRandomLetterDescZ6()
{
    randomLetterDescF=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescF[randomLetterDescF];
}

function appRandomLetterDescZ7()
{
    randomLetterDescG=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescG[randomLetterDescG];
}

function appRandomLetterDescZ8()
{
    randomLetterDescH=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescH[randomLetterDescH];
}

function appRandomLetterDescZ9()
{
    randomLetterDescI=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescI[randomLetterDescI];
}

function appRandomLetterDescZ10()
{
    randomLetterDescJ=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescJ[randomLetterDescJ];
}

function appRandomLetterDescZ11()
{
    randomLetterDescK=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescK[randomLetterDescK];
}

function appRandomLetterDescZ12()
{
    randomLetterDescL=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescL[randomLetterDescL];
}

function appRandomLetterDescZ13()
{
    randomLetterDescM=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescM[randomLetterDescM];
}

function appRandomLetterDescZ14()
{
    randomLetterDescN=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescN[randomLetterDescN];
}

function appRandomLetterDescZ15()
{
    randomLetterDescO=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescO[randomLetterDescO];
}

function appRandomLetterDescZ16()
{
    randomLetterDescP=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescP[randomLetterDescP];
}

function appRandomLetterDescZ17()
{
    randomLetterDescQ=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescQ[randomLetterDescQ];
}

function appRandomLetterDescZ18()
{
    randomLetterDescR=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescR[randomLetterDescR];
}

function appRandomLetterDescZ19()
{
    randomLetterDescS=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescS[randomLetterDescS];
}

function appRandomLetterDescZ20()
{
    randomLetterDescT=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescT[randomLetterDescT];
}

function appRandomLetterDescZ21()
{
    randomLetterDescU=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescU[randomLetterDescU];
}

function appRandomLetterDescZ22()
{
    randomLetterDescV=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescV[randomLetterDescV];
}

function appRandomLetterDescZ23()
{
    randomLetterDescW=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescW[randomLetterDescW];
}

function appRandomLetterDescZ24()
{
    randomLetterDescX=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescX[randomLetterDescX];
}

function appRandomLetterDescZ25()
{
    randomLetterDescY=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescY[randomLetterDescY];
}

function appRandomLetterDescZ26()
{
    randomLetterDescZ=Math.floor(Math.random()*10);
    
    userNameLetter26=letterDescZ[randomLetterDescZ];
}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
*/
function appSetup()
{
    linkSubmissionID=document.getElementById("submitButton");
    linkSubmissionID.addEventListener("click",appScreenContent,false);
}

function appScreenContent()
{
    appArrays();
    appUsernameLetters();

    letterDescSet1=document.getElementById("letterSet01");
    letterDescSet2=document.getElementById("letterSet02");
    letterDescSet3=document.getElementById("letterSet03");
    letterDescSet4=document.getElementById("letterSet04");

    showUsername=document.getElementById("username");
	
	letterSet04.style.bottom="36px";
    appShowLetterDescA1();
    appShowLetterDescA2();
    appShowLetterDescA3();
    appShowLetterDescA4();
    appShowLetterDescA5();
    appShowLetterDescA6();
    appShowLetterDescA7();
    appShowLetterDescA8();
    appShowLetterDescA9();
    appShowLetterDescA10();
    appShowLetterDescA11();
    appShowLetterDescA12();
    appShowLetterDescA13();
    appShowLetterDescA14();
    appShowLetterDescA15();
    appShowLetterDescA16();
    appShowLetterDescA17();
    appShowLetterDescA18();
    appShowLetterDescA19();
    appShowLetterDescA20();
    appShowLetterDescA21();
    appShowLetterDescA22();
    appShowLetterDescA23();
    appShowLetterDescA24();
    appShowLetterDescA25();
    appShowLetterDescA26();

    username=linkFirstnameID.value;
    
    if(username=="")
    {
        showUsername.innerHTML="What is your name ?";
    }
    else
    {
        if(username.charAt(0)!=username.charAt(0).toUpperCase())
        {
            showUsername.innerHTML="Your name must start with a capital letter.";
        }
        else if((username.charAt(1)!=username.charAt(1).toLowerCase())||
                (username.charAt(2)!=username.charAt(2).toLowerCase())||
                (username.charAt(3)!=username.charAt(3).toLowerCase())||
                (username.charAt(4)!=username.charAt(4).toLowerCase())||
                (username.charAt(5)!=username.charAt(5).toLowerCase())||
                (username.charAt(6)!=username.charAt(6).toLowerCase())||
                (username.charAt(7)!=username.charAt(7).toLowerCase())||
                (username.charAt(8)!=username.charAt(8).toLowerCase())||
                (username.charAt(9)!=username.charAt(9).toLowerCase())||
                (username.charAt(10)!=username.charAt(10).toLowerCase())||
                (username.charAt(11)!=username.charAt(11).toLowerCase())||
                (username.charAt(12)!=username.charAt(12).toLowerCase())||
                (username.charAt(13)!=username.charAt(13).toLowerCase())||
                (username.charAt(14)!=username.charAt(14).toLowerCase())||
                (username.charAt(15)!=username.charAt(15).toLowerCase())||
                (username.charAt(16)!=username.charAt(16).toLowerCase())||
                (username.charAt(17)!=username.charAt(17).toLowerCase())||
                (username.charAt(18)!=username.charAt(18).toLowerCase())||
                (username.charAt(19)!=username.charAt(19).toLowerCase())||
                (username.charAt(20)!=username.charAt(20).toLowerCase())||
                (username.charAt(21)!=username.charAt(21).toLowerCase())||
                (username.charAt(22)!=username.charAt(22).toLowerCase())||
                (username.charAt(23)!=username.charAt(23).toLowerCase())||
                (username.charAt(24)!=username.charAt(24).toLowerCase())||
                (username.charAt(25)!=username.charAt(25).toLowerCase()))
        {
            showUsername.innerHTML="Your name must follow with small letters.";
        }
        else
        {
            showUsername.innerHTML="Hello "+username;
        }
        
    }
    

    letterDescSet1.innerHTML =userNameLetter01;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter02;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter03;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter04;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter05;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter06;
    letterDescSet1.innerHTML+="<br />";
    letterDescSet1.innerHTML+=userNameLetter07;

    letterDescSet2.innerHTML =userNameLetter08;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter09;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter10;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter11;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter12;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter13;
    letterDescSet2.innerHTML+="<br />";
    letterDescSet2.innerHTML+=userNameLetter14;

    letterDescSet3.innerHTML=userNameLetter15;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter16;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter17;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter18;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter19;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter20;
    letterDescSet3.innerHTML+="<br />";
    letterDescSet3.innerHTML+=userNameLetter21;

    letterDescSet4.innerHTML =userNameLetter22;
    letterDescSet4.innerHTML+="<br />";
    letterDescSet4.innerHTML+=userNameLetter23;
    letterDescSet4.innerHTML+="<br />";
    letterDescSet4.innerHTML+=userNameLetter24;
    letterDescSet4.innerHTML+="<br />";
    letterDescSet4.innerHTML+=userNameLetter25;
    letterDescSet4.innerHTML+="<br />";
    letterDescSet4.innerHTML+=userNameLetter26;
}

function appUsernameLetters()
{
    linkFirstnameID=document.getElementById("firstname");

    userNameLetter01=linkFirstnameID.value.charAt(0);
    userNameLetter02=linkFirstnameID.value.charAt(1);
    userNameLetter03=linkFirstnameID.value.charAt(2);
    userNameLetter04=linkFirstnameID.value.charAt(3);
    userNameLetter05=linkFirstnameID.value.charAt(4);
    userNameLetter06=linkFirstnameID.value.charAt(5);
    userNameLetter07=linkFirstnameID.value.charAt(6);
    userNameLetter08=linkFirstnameID.value.charAt(7);
    userNameLetter09=linkFirstnameID.value.charAt(8);
    userNameLetter10=linkFirstnameID.value.charAt(9);
    userNameLetter11=linkFirstnameID.value.charAt(10);
    userNameLetter12=linkFirstnameID.value.charAt(11);
    userNameLetter13=linkFirstnameID.value.charAt(12);
    userNameLetter14=linkFirstnameID.value.charAt(13);
    userNameLetter15=linkFirstnameID.value.charAt(14);
    userNameLetter16=linkFirstnameID.value.charAt(15);
    userNameLetter17=linkFirstnameID.value.charAt(16);
    userNameLetter18=linkFirstnameID.value.charAt(17);
    userNameLetter19=linkFirstnameID.value.charAt(18);
    userNameLetter20=linkFirstnameID.value.charAt(19);
    userNameLetter21=linkFirstnameID.value.charAt(20);
    userNameLetter22=linkFirstnameID.value.charAt(21);
    userNameLetter23=linkFirstnameID.value.charAt(22);
    userNameLetter24=linkFirstnameID.value.charAt(23);
    userNameLetter25=linkFirstnameID.value.charAt(24);
    userNameLetter26=linkFirstnameID.value.charAt(25);
}

window.addEventListener("load",appSetup,false);