// 워크샵 코드에서 Data init 부분을 찾아서 아래와 같이 붙여넣으면 자동으로 파싱합니다.
const FOOD_NAMES = `Global.ITEM_NAME = Append To Array(String Split(Custom String(
			"탄 음식/소고기/썬 소고기/스테이크/찹스테이크/감자/썬 감자/감자튀김/구운 감자/찐 감자/으깬 감자/볶은 감자/파스타/삶은 파스타/토마토/썬 토마토/구운 토마토/토마토 소스/크림 소스/치즈/슬라이스 치즈/녹인 치즈/로제{0}",
			Custom String(" 소스/치즈 감자튀김/토마토 파스타/크림 파스타/로제 파스타/로제치즈 파스타/크림치즈 파스타/크림치즈 소스/로제치즈 소스/생 패티/익힌 패티/양상추")), Custom String("/")),
			Append To Array(String Split(Custom String(
			"썬 양상추/구운 양상추/볶은 양상추/햄버거 빵/아래 빵/윗 빵/빵+패티/빵+치즈/빵+토마토/빵+양상추/빵+패티+치즈/빵+패티+토마토/빵+패티+양상추/빵+치즈+토마토/빵+치즈+양상추/빵+토마토+양상추/빵+패+치+토/빵+패+치+{0}",
			Custom String("양/빵+패+토+양/빵+치+토+양/빵+패+치+토+양/고기 버거/치즈고기 버거/야채 버거/치즈야채 버거/일반 버거/치즈 버거/양산형 칼/보조도마용 칼/휴대용 칼/날카로운 칼/겐지의 단검")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"닭고기/썬 닭고기/조각낸 닭고기/파/썬 파/다진 파/튀김가루/고추장/간장/물엿/고추장 소스/간장 소스/파닭 소스/양념치킨 소스/구운 닭/닭+튀김가루/썬 닭+튀김가루/조각 닭+튀김가루/튀긴 조각 닭/후라이드 치킨/양념치킨/고추{0}",
			Custom String("장 치킨/간장 치킨/닭강정/통닭/볶은 파/튀긴 파/삶은 닭고기/구운 파/튀김 부스러기/파닭/양념+튀긴 조각 닭/뭉겐 토마토/깨진 달걀/달걀/삶은 달걀/깐 삶은 달걀")), Custom String(
			"/")), Append To Array(String Split(Custom String(
			"으깬 삶은 달걀/깐 달걀/김치볶음밥/계란볶음밥/불고기쌈밥/섞인 달걀/계란 후라이/스크램블 에그/계란찜/쌀/피자 치즈/밀가루/밀가루 반죽/작은 밀가루 반죽/핀 밀가루 반죽/만두피/피자 도우/밀 또띠아/페{0}",
			Custom String("퍼로니/베이컨/구운 베이컨/썬 베이컨/도우+소스/치즈 피자/피자 베이스/피자+페퍼로니/피자+베이컨/피자+감자/피자+베이컨+감자/페퍼로니 피자/베이컨 피자/포테이토 피자/베이컨 포테이토 피자")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"계란말이/구운 페퍼로니/구운 썬 베이컨/삶은 소고기/빵가루/채썬 계란말이/김치/썬 김치/다진 김치/볶은 김치/계란김치볶음밥/두부/썬 두부/두부 구이/두부 볶음/으깬 두부/불고기덮밥/김치불고기덮밥/다진 소고기/썬 소고{0}",
			Custom String("기+간장/불고기/당면/썬 당면/돼지고기/썬 돼지고기/다진 돼지고기/구운 돼지고기/튀긴 돼지고기/수육/볶은 돼지고기/썬 수육/파+김치/파+두부/파+당면/파+돼지")), Custom String(
			"/")), Append To Array(String Split(Custom String(
			"김치+당면/김치+돼지/두부+당면/두부+돼지/당면+돼지/파+김+당/파+김+돼/파+두+당/파+두+돼/파+당+돼/김+당+돼/두+당+돼/파+김+당+돼/파+두+당+돼/생 야채만두/생 김치만두/생 고기만두/구운 야채만두/구운 김치만두/{0}",
			Custom String("구운 고기만두/찐 야채만두/찐 김치만두/찐 고기만두/공기밥/볶음밥/돈가스/썬 돈가스")), Custom String("/")), Append To Array(String Split(
			Custom String("생선/손질한 생선/다진 생선/찐 생선/찐 어묵/생선 구이/튀긴 생선/손질한 생선+간장/생선 간장 찜/생선 간장 구이/작은 공기밥/초밥/초밥 2p{0}", Custom String(
			"cs/주먹밥/간장 주먹밥/찐 생선 덮밥/돈가스 정식/가츠동/썬 삶은 닭고기/삶은 닭고기+밥/스크램블에그 덮밥/오야코동/생선가스/다진 돼지+튀김가루/다진 생선+튀김가루/튀긴 어묵/손질한생선+튀김가루")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"튀긴 조각 닭+밥/가라아게동/작은 수제비 반죽/수제비 반죽/밀가루 덩어리/늘린 밀가루 반죽/밀가루 중면(1|4)/밀가루 중면(2|4)/{0}", Custom String(
			"밀가루 중면(3|4)/밀가루 중면/얇은 밀가루 덩어리/늘린 밀가루 가닥/밀가루 소면(1|4)/밀가루 소면(2|4)/밀가루 소면(3|4)")), Custom String("/")), Append To Array(
			String Split(Custom String("밀가루 소면/육수/김치 육수/끓인 육수/끓인 김치 육수/자장 소스/수제비/김치수제비/칼국수/김치칼국수/잔치국수/김치잔치국수/{0}", Custom String(
			"자장면/썬 두부+김치/두부 볶음+김치/삶은 밀가루 중면/삶은 밀가루 소면/삶은 수제비 반죽/떡국용 떡/떡국/만둣국/떡만둣국/계란 반죽/고기 반죽/동그랑땡/고급 부엌칼")), Custom String("/")),
			Empty Array)))))))));`;

const CUTTING_RESULTS = `Global.CUTTING_RESULT = Array(False, 2, 154, False, False, 6, False, False, False, 10, False, False, False, False, 15, False,
			False, False, False, 20, False, False, False, False, False, False, False, False, False, False, False, False, False, 34, False,
			False, False, Array(38, 39), 140, 140, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, 67, 68, False, 70, 71, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, 216, False, False, False, False, False, False, 104, 102, 103, False, 108, False, False, False, False,
			False, False, False, False, False, False, Array(116, 116), 227, Array(229, 229), False, Array(235, 235), False, False, 124,
			138, False, False, False, False, False, False, False, False, False, False, False, False, 141, False, False, False, False,
			False, 143, 144, False, False, False, 148, 151, False, False, False, False, False, False, False, False, 158, False, 160, 161,
			False, False, False, 166, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, Array(208, 208),
			False, 197, False, Array(199, 199), 200, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			Array(231, 231), False, False, False, False, False, Array(237, 237), False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False);`;

const GRILLING_RESULTS = `Global.GRILLING_RESULT = Array(False, 3, 4, False, False, 8, 11, False, False, False, False, False, False, False, 16, False, False,
			False, False, 21, 21, False, False, False, False, False, False, False, False, False, False, 32, False, 35, 36, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, 80, False, False, 94, 91, 91, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, 21, False, False, False, False, False, False, False, 137, 123, False, 138, False, False, 126, 132, 133, 134, 135,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 149, 150, False,
			False, False, False, False, False, False, False, False, False, 162, 165, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 203, 203, False, False, False, False,
			False, 207, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False);`;

const FRYING_RESULTS = `Global.FRYING_RESULT = Array(False, False, False, False, False, False, 7, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			92, False, False, 95, False, False, False, False, False, False, False, False, 90, 85, 84, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 163, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, 204, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, 196, 223, False, 220, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False);`;

const POT_RESULTS = `Global.POT_RESULT = Array(False, 139, False, False, False, 9, 9, False, False, False, False, False, 13, False, False, 17, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, 93, 216, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, 17, False, 101, False, False, False, 111, False, False, False, 111,
			False, False, False, 194, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, 164, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, 191, 192, 193, False, False, False, False, False, False, False, False, False, False, 201, 201, 202,
			False, False, False, False, 206, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, 257, False, False, False, False, False, 255, False, False,
			False, False, False, 256, 243, 244, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False);`;

const PAN_RESULTS = `Global.PAN_RESULT = Array(False, 3, 4, False, False, 8, 11, False, False, False, False, False, False, False, 16, False, False,
			False, False, 21, 21, False, False, False, False, False, False, False, False, False, False, 32, False, 35, 36, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, 94, 91, 91, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, 89, False, False, False, False, False, False, 109, False, False, False, 110, False, False,
			False, False, 21, False, False, False, 120, False, False, False, False, 123, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, 145, 145, False, False, 149, 150,
			False, False, False, False, False, False, 156, False, False, False, 162, 165, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 188,
			189, 190, False, False, False, False, False, False, 195, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, 264, False, False);`;

const IMPACT_RESULTS = `Global.IMPACT_RESULT = Array(False, False, False, False, False, False, False, False, False, 10, False, False, False, False, 98, 98,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 104, 103, 103, False, 108, False, False,
			False, False, False, False, False, False, False, 115, 117, 118, 119, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, 151, 151, False, False, False, False, False, 31, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, 211, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 230, False, False, False, False, False,
			236, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False);`;

const MIX_RECIPES = `Global.RAW_MIX = Array(21025, 21026, 6127, 6129, 7021, 13017, 13018, 13022, 13030, 13029, 15038, 15040, 15041, 15043, 15044, 15046,
			15048, 15051, 17018, 17119, 18021, 20038, 20040, 20042, 20043, 20045, 20046, 20049, 20052, 32038, 32041, 32042, 32043, 32047,
			32048, 32049, 32053, 34038, 34040, 34041, 34042, 34044, 34045, 34047, 34050, 39040, 39044, 39049, 39053, 39052, 39054, 66072,
			67072, 68072, 70077, 73075, 73077, 74075, 74076, 76085, 77085, 78085, 79085, 79084, 113125, 121127, 124127, 124130, 21022,
			71144, 71151, 71158, 71161, 144158, 144161, 151158, 151161, 158161, 167158, 169144, 171071, 167161, 170144, 172071, 168158,
			169151, 173071, 168161, 170151, 174071, 169161, 170158, 175071, 171161, 172158, 175144, 176161, 177158, 180144, 181071, 178161,
			179158, 180151, 182071, 168118, 183118, 184118, 167175, 169172, 170171, 168175, 169174, 170173, 2077, 156194, 145152, 33152,
			145195, 109195, 105109, 106145, 77199, 199211, 209209, 77211, 194201, 194196, 194197, 110214, 194216, 110194, 196218, 197218,
			110217, 216218, 72161, 72200, 72199, 84194, 110225, 84218, 231231, 231232, 231233, 232232, 237237, 237238, 237239, 238238,
			227227, 257243, 144246, 255243, 144248, 256243, 144250, 255245, 148143, 150143, 243258, 243193, 258260, 259193, 104114, 262184,
			34152, 104214, 104217, 104225);`;

const MIX_RESULTS = `Global.RAW_RESULT = Array(28, 27, 130, 131, 23, 24, 25, 26, 27, 28, 42, 45, 47, 49, 50, 52, 53, 54, 22, 125, 29, 41, 44, 47, 48,
			50, 51, 53, 54, 40, 44, 45, 46, 50, 51, 52, 54, 43, 46, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 81, 82, 83, 78, 76, 79,
			77, 79, 87, 88, 96, 86, 97, 127, 128, 129, 131, 30, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 176, 176, 177, 177, 177,
			178, 178, 178, 179, 179, 179, 180, 180, 180, 181, 181, 181, 183, 183, 183, 183, 184, 184, 184, 184, 185, 186, 187, 183, 183,
			183, 184, 184, 184, 155, 152, 153, 107, 105, 106, 146, 146, 205, 209, 210, 212, 213, 214, 214, 215, 217, 218, 215, 215, 219,
			219, 221, 222, 224, 225, 226, 226, 232, 233, 234, 234, 238, 239, 240, 240, 228, 246, 247, 248, 249, 250, 251, 252, 253, 254,
			259, 260, 261, 261, 262, 263, 107, 215, 219, 226);`;

const MENU_LISTS = `Global.MENU_LIST = Array(Array(3, 4, 7, 10, 23, 24, 25, 26, 28, 27), Array(7, 23, 55, 56, 57, 58, 59, 60), Array(85, 86, 87, 88,
			89, 90, 96), Array(7, 23, 126, 132, 133, 134, 135), Array(193, 188, 189, 190, 191, 192), Array(105, 106, 107, 146, 152, 153,
			194, 101, 103, 109, 110, 111, 156, 218), Array(196, 202, 203, 209, 210, 211, 213, 214, 215, 219, 220, 223, 226), Array(193,
			246, 247, 248, 249, 250, 251, 259, 260, 261, 264, 111));`;

const HAZARD_MENU_LISTS = `Global.HAZARD_MENU_LIST = Array(Array(0, 0, 0, 8, 9, 11, 13, 15, 16, 20, 32, 139), Array(0, 0, 0, 3, 4, 8, 9, 10, 11, 16, 20, 35,
			36, 139, 140), Array(0, 0, 0, 80, 91, 92, 93, 94, 95, 216), Array(0, 0, 0, 8, 9, 10, 11, 120, 123, 137, 138), Array(0, 0, 0,
			91, 92, 94, 120, 145, 147, 148, 148, 150, 158, 162, 163, 164, 165, 166, 176, 177, 178, 179, 180, 181, 253, 254), Array(0, 0, 0,
			1, 2, 3, 4, 33, 34, 35, 36, 77, 100, 102, 104, 108, 112, 142, 143, 144, 145, 154, 155, 195), Array(0, 0, 0, 101, 102, 103, 106,
			109, 110, 111, 162, 163, 164, 165, 166, 194, 195, 204, 218, 84, 85, 90), Array(0, 0, 0, 190, 109, 110, 101, 102, 103, 120, 145,
			143));`;

// Parsing food names from the workshop script.
let foodNames = [];
let tmpFoodStr = FOOD_NAMES.split("String Split(");
for(let i=1; i<tmpFoodStr.length; i++) {
    let tmpAccumStr = "";
    let tmpStr = tmpFoodStr[i].split("Custom String(");
    for(let j=1; j<tmpStr.length; j++) {
        let str = tmpStr[j];
        let start = str.indexOf("\"");
        let end = str.indexOf("\"", start+1);
        str = str.substring(start + 1, end); // Remove the first quote.
        if(str.endsWith("{0}")) {
            str = str.substring(0, str.length-3);
            tmpAccumStr += str;
        } else {
            tmpAccumStr += str;
            break;
        }
    }
    foodNames.push(...tmpAccumStr.split("/"));
}
console.log("List of food names: ");
for(let i=0; i<foodNames.length; i++) {
    console.log(i, foodNames[i]);
}

function parseWorkshopArray(str) {
    let arr = str.split("Array(")[1].split(");")[0].split(",");
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i].includes("False")) {
            result.push(null);
        } else {
            result.push(parseInt(arr[i].trim()));
        }
    }
    return result;
}

function parseMenuArray(str) {
    // just parse all the numbers using regex from str and return as an array.
    return str.match(/\d+/g).map(Number);
}

const cuttingResults = parseWorkshopArray(CUTTING_RESULTS);
const grillingResults = parseWorkshopArray(GRILLING_RESULTS);
const fryingResults = parseWorkshopArray(FRYING_RESULTS);
const potResults = parseWorkshopArray(POT_RESULTS);
const panResults = parseWorkshopArray(PAN_RESULTS);
const impactResults = parseWorkshopArray(IMPACT_RESULTS);
const mixRecipes = parseWorkshopArray(MIX_RECIPES);
const mixResults = parseWorkshopArray(MIX_RESULTS);

let menus = parseMenuArray(MENU_LISTS);
let hazardMenus = parseMenuArray(HAZARD_MENU_LISTS);

menus.push(...hazardMenus);

/**
 * @type {Record<number, {method: string, items: number[]}[]>}
 */
let recipeReversedMap = {};

/**
 * 
 * @param {number} resultId 
 * @param {{method: string, items: number[]}} methodObj 
 */
function storeMethod(resultId, methodObj) {
    if(recipeReversedMap[resultId] === undefined) {
        recipeReversedMap[resultId] = [];
    }
    recipeReversedMap[resultId].push(methodObj);
}

cuttingResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "cutting", items: [sourceIndex]});
});

grillingResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "grilling", items: [sourceIndex]});
});

fryingResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "frying", items: [sourceIndex]});
});

potResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "pot", items: [sourceIndex]});
});

panResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "pan", items: [sourceIndex]});
});

impactResults.forEach((value, sourceIndex) => {
    if(value === null) return;
    storeMethod(value, {method: "impact", items: [sourceIndex]});
});

mixResults.forEach((value, sourceIndex) => {
    let recipe = mixRecipes[sourceIndex];
    let ingredientA = recipe % 1000;
    let ingredientB = Math.floor(recipe / 1000);
    storeMethod(value, {method: "mix", items: [ingredientA, ingredientB]});
});

function humanReadableMethod(method) {
    switch(method) {
        case "cutting": return "썰어서";
        case "grilling": return "직화로 구워서";
        case "frying": return "튀겨서";
        case "pot": return "끓여서";
        case "pan": return "팬에 구워서";
        case "impact": return "던져서";
        case "mix": return "섞어서";
    }
}

/**
 * 
 * @param {number} recipeId 
 * @returns {[string[], [number, number][]]} how to cook, and list and count of ingredients.
 */
function explainRecipe(recipeId) {
    let recipe = [];
    let ingredients = [];

    /**
     * 
     * @param {[number, number][]} items 
     */
    function addAllIngredients(items) {
        // If the recipeId is in ingredients, add count(second entry) by 1. Otherwise, add it to the list with count 1.
        for(let i=0; i<items.length; i++) {
            let [itemId, count] = items[i];
            let found = false;
            for(let j=0; j<ingredients.length; j++) {
                if(ingredients[j][0] === itemId) {
                    ingredients[j][1] += count;
                    found = true;
                    break;
                }
            }
            if(!found) {
                ingredients.push([itemId, count]);
            }
        }
    }
    if(recipeReversedMap[recipeId] === undefined) {
        // If the recipeId is in ingredients, add count(second entry) by 1. Otherwise, add it to the list with count 1.
        ingredients.push([recipeId, 1]);
    } else {
        let howToCook = recipeReversedMap[recipeId][0];
        if(howToCook.method === "mix") {
            let ingredientA = howToCook.items[0];
            let ingredientB = howToCook.items[1];
            let [subRecipeA, subIngredientsA] = explainRecipe(ingredientA);
            let [subRecipeB, subIngredientsB] = explainRecipe(ingredientB);
            recipe.push(...subRecipeA);
            recipe.push(...subRecipeB);
            addAllIngredients(subIngredientsA);
            addAllIngredients(subIngredientsB);
            recipe.push(`'${foodNames[ingredientA]}'와 '${foodNames[ingredientB]}' 섞어서 '${foodNames[recipeId]}' 만들기.`);
        } else {
            let ingredient = howToCook.items[0];
            let subRecipe = explainRecipe(ingredient);
            recipe.push(...subRecipe[0]);
            addAllIngredients(subRecipe[1]);
            let methodStr = humanReadableMethod(howToCook.method);
            recipe.push(`'${foodNames[ingredient]}' ${methodStr} '${foodNames[recipeId]}' 만들기.`);
        }
    }

    return [recipe, ingredients];
}

function humanReadableRecipe(recipeId) {
    let [recipe, ingredients] = explainRecipe(recipeId);
    let recipeStr = recipe.join("\n\n");
    let ingredientsStr = ingredients.map(([itemId, count]) => `${foodNames[itemId]} x${count}`).join("\n");
    
    let result = `재료:\n${ingredientsStr}\n\n조리법:\n${recipeStr}\n\n'${foodNames[recipeId]}' 완성!`;
    return result;
}

menus.forEach(element => {
    console.log(humanReadableRecipe(element))
});