/// <reference path="./types.d.ts" />

const DATA_INIT_CODE = `rule("Global subroutine: Data init")
{
	event
	{
		Subroutine;
		dataInit;
	}

	actions
	{
		Global.ITEM_COLOR = Mapped Array(String Split(Custom String(
			"D/R/R/M/M/Y/Y/Y/Y/Y/Y/Y/W/W/R/R/R/R/W/Y/Y/Y/O/O/R/W/O/O/W/W/O/R/M/L/L/G/G/H/H/H/H/H/H/H/H/H/{0}", Custom String(
			"H/H/H/H/H/H/H/H/H/H/H/H/H/H/H/L/T/T/T/T/W/W/W/G/G/G/W/R/S/Y/R/S/S/C/M/F/F/F/M/M/C/R/S/C/M/V/{0}", Custom String(
			"V/W/V/Y/S/C/R/F/F/F/Y/Y/Y/C/Y/S/Y/Y/Y/Y/W/Y/F/F/F/F/F/F/F/R/A/M/A/F/H/F/F/F/F/F/R/A/Y/P/Y/R/{0}", Custom String(
			"M/M/H/Y/C/C/C/C/C/W/W/W/W/W/S/R/R/S/S/O/O/A/A/A/M/M/W/M/W/C/G/O/A/C/C/O/A/A/C/C/G/A/A/C/A/C/{0}", Custom String(
			"A/F/F/F/G/C/M/G/C/M/W/W/M/M/B/W/W/W/F/O/O/S/S/S/W/F/F/W/S/F/M/M/W/W/Y/Y/M/F/F/M/F/M/M/F/F/F/{0}", Custom String(
			"F/F/F/F/F/F/F/F/F/F/F/P/C/P/C/S/P/C/P/C/P/C/S/C/C/W/W/W/W/P/P/P/Y/F/M/G/N/N/W/W/W/F/F/N/A/Q/{0}", Custom String(
			"X/X/P/M/P/M/P/M/P/M/M/M/M/A/X/P/Y/P/Y"))))))), Custom String("/")), Array(Color(Black), Color(Red), Custom Color(180, 100,
			False, 255), Color(Yellow), Color(White), Color(Lime Green), Color(Green), Custom Color(255, 200, 100, 255), Color(Turquoise),
			Custom Color(100, 60, False, 255), Custom Color(255, 65, False, 255), Custom Color(255, 255, 190, 255), Custom Color(False,
			125, False, 255), Color(Orange), Custom Color(246, 86, 86, 255), Custom Color(250, 150, 70, 255), Color(Sky Blue),
			Custom Color(255, 192, 243, 255), Custom Color(255, 108, 141, 255), Custom Color(255, 239, 104, 255))[Index Of Array Value(
			String Split(Custom String("D/R/M/Y/W/L/G/H/T/S/C/F/V/O/A/P/B/N/Q/X"), Custom String("/")), Current Array Element)]);
		Global.ITEM_NAME = Append To Array(String Split(Custom String(
			"탄 음식/소고기/썬 소고기/스테이크/찹스테이크/감자/썬 감자/감자튀김/구운 감자/찐 감자/으깬 감자/볶은 감자/파스타/삶은 파스타/토마토/썬 토마토/구운 토마토/토마토 소스/크림 소스/치즈/슬라이스 치즈/녹인 치즈/로제{0}",
			Custom String(" 소스/치즈 감자튀김/토마토 파스타/크림 파스타/로제 파스타/로제치즈 파스타/크림치즈 파스타/크림치즈 소스/로제치즈 소스/생 패티/익힌 패티/양상추")), Custom String("/")),
			Append To Array(String Split(Custom String(
			"썬 양상추/구운 양상추/볶은 양상추/햄버거 빵/아래 빵/윗 빵/빵+패티/빵+치즈/빵+토마토/빵+양상추/빵+패티+치즈/빵+패티+토마토/빵+패티+양상추/빵+치즈+토마토/빵+치즈+양상추/빵+토마토+양상추/빵+패+치+토/빵+패+치+{0}",
			Custom String("양/빵+패+토+양/빵+치+토+양/빵+패+치+토+양/고기 버거/치즈고기 버거/야채 버거/치즈야채 버거/일반 버거/치즈 버거/양산형 칼/보조도마용 칼/휴대용 칼/날카로운 칼/겐지의 단검")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"닭고기/썬 닭고기/조각낸 닭고기/파/썬 파/다진 파/튀김가루/고추장/간장/물엿/고추장 소스/간장 소스/파닭 소스/양념치킨 소스/구운 닭/닭+튀김가루/썬 닭+튀김가루/조각 닭+튀김가루/튀긴 조각 닭/후라이드 치킨/양념치킨/고추{0}",
			Custom String("장 치킨/간장 치킨/닭강정/통닭/볶은 파/튀긴 파/삶은 닭고기/구운 파/튀김 부스러기/파닭/양념+튀긴 조각 닭/뭉겐 토마토/깨진 달걀/달걀/삶은 달걀/깐 삶은 달걀")), Custom String(
			"/")), Append To Array(String Split(Custom String(
			"으깬 삶은 달걀/깐 달걀/김치볶음밥/계란볶음밥/불고기쌈밥/섞인 달걀/계란 후라이/스크램블 에그/계란찜/쌀/피자 치즈/밀가루/밀가루 반죽/작은 밀가루 반죽/핀 밀가루 반죽/만두피/피자 도우/밀 토르티야/페{0}",
			Custom String("퍼로니/베이컨/구운 베이컨/썬 베이컨/도우+소스/치즈 피자/피자 베이스/피자+페퍼로니/피자+베이컨/피자+감자/피자+베이컨+감자/페퍼로니 피자/베이컨 피자/포테이토 피자/베이컨 포테이토 피자")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"계란말이/구운 페퍼로니/구운 썬 베이컨/삶은 소고기/빵가루/채썬 계란말이/김치/썬 김치/다진 김치/볶은 김치/계란김치볶음밥/두부/썬 두부/두부 구이/두부 볶음/으깬 두부/불고기덮밥/김치불고기덮밥/다진 소고기/썬 소고{0}",
			Custom String("기+간장/불고기/당면/썬 당면/돼지고기/썬 돼지고기/다진 돼지고기/구운 돼지고기/튀긴 돼지고기/수육/볶은 돼지고기/썬 수육/파+김치/파+두부/파+당면/파+돼지")), Custom String(
			"/")), Append To Array(String Split(Custom String(
			"김치+당면/김치+돼지/두부+당면/두부+돼지/당면+돼지/파+김+당/파+김+돼/파+두+당/파+두+돼/파+당+돼/김+당+돼/두+당+돼/파+김+당+돼/파+두+당+돼/생 야채만두/생 김치만두/생 고기만두/구운 야채만두/구운 김치만두/{0}",
			Custom String("구운 고기만두/찐 야채만두/찐 김치만두/찐 고기만두/공기밥/볶음밥/돈가스/썬 돈가스")), Custom String("/")), Append To Array(String Split(
			Custom String("생선/손질한 생선/다진 생선/찐 생선/찐 어묵/생선 구이/튀긴 생선/손질한 생선+간장/생선 간장 찜/생선 간장 구이/작은 공기밥/초밥/초밥 2p{0}", Custom String(
			"cs/주먹밥/간장 주먹밥/찐 생선 덮밥/돈가스 정식/돈가스 계란덮밥/썬 삶은 닭고기/삶은 닭고기+밥/스크램블에그 덮밥/삶은 닭 계란덮밥/생선가스/썬 돼지+튀김가루/다진 생선+튀김가루/튀긴 어묵/손질한생선+튀김가루")),
			Custom String("/")), Append To Array(String Split(Custom String(
			"튀긴 조각 닭+밥/튀긴 닭 계란덮밥/작은 수제비 반죽/수제비 반죽/밀가루 덩어리/늘린 밀가루 반죽/밀가루 중면(1|4)/밀가루 중면(2|4)/{0}", Custom String(
			"밀가루 중면(3|4)/밀가루 중면/얇은 밀가루 덩어리/늘린 밀가루 가닥/밀가루 소면(1|4)/밀가루 소면(2|4)/밀가루 소면(3|4)")), Custom String("/")), Append To Array(
			String Split(Custom String("밀가루 소면/육수/김치 육수/끓인 육수/끓인 김치 육수/자장 소스/수제비/김치수제비/칼국수/김치칼국수/잔치국수/김치잔치국수/{0}", Custom String(
			"자장면/썬 두부+김치/두부 볶음+김치/삶은 밀가루 중면/삶은 밀가루 소면/삶은 수제비 반죽/떡국용 떡/떡국/만둣국/떡만둣국/계란 반죽/고기 반죽/동그랑땡/고급 부엌칼")), Custom String("/")),
			Append To Array(String Split(Custom String("회오리어묵/썬 회오리어묵/양파/썬 양파/다진 양파/구운 양파/볶은 양파/새우/구운 새우/찐 새우/핀 옥수수 반죽/옥수수 토르{0}",
			Custom String("티야/돼지고기 타코(밀)/돼지고기 타코(옥수수)/소고기 타코(밀)/소고기 타코(옥수수)/구운 감바스 타코(밀)/구운 감바스 타코(옥수수)/찐 감바스 타코(밀)")), Custom String(
			"/")), Append To Array(String Split(Custom String("찐 감바스 타코(옥수수)/돼지고기+양파/소고기+양파/구운 새우+양파/찐 {0}", Custom String(
			"새우+양파/옥수수 반죽/튀긴 밀 토르티야/튀긴 옥수수 토르티야/나초(밀)/나초(옥수수)")), Custom String("/")), Empty Array)))))))))));
		Global.ITEM_SCORE = Mapped Array(String Split(Custom String(
			"0/0/0/3/3/0/0/4/0/0/3/0/0/0/0/0/0/0/0/0/0/0/0/3/4/4/6/6/5/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/{0}", Custom String(
			"0/0/0/0/0/0/3/4/4/5/6/6/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/3/3/4/4/4/5/4/0/0/0/0/0/5/0/{0}", Custom String(
			"0/0/0/0/0/0/0/5/5/5/0/3/3/3/0/0/0/0/0/0/0/0/0/0/0/0/0/0/7/0/0/0/0/0/7/7/7/7/4/0/0/0/0/5/0/0/0/0/7{0}", Custom String(
			"/0/0/0/0/0/5/7/0/0/3/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/5/6/6/5/6/{0}", Custom String(
			"6/3/3/4/5/0/0/0/1/3/3/3/1/5/5/1/3/5/3/4/3/5/7/0/5/4/7/5/0/0/3/0/5/7/0/0/0/0/3/3{0}", Custom String(
			"/4/0/0/5/0/0/0/0/0/0/0/0/0/3/4/5/7/5/7/5/4/5/0/0/0/0/3/6/6/0/0/3/0/0/0/0/0/0/0/0{0}", Custom String(
			"/0/0/0/0/0/6/5/6/5/6/5/6/5/0/0/0/0/0/0/0/4/4"))))))), Custom String("/")), Index Of Array Value(String Split(Custom String(
			"0/1/2/3/4/5/6/7/8/9"), Custom String("/")), Current Array Element) * 5);
		Global.CUTTING_NEEDED = Array(99, 5, 5, 99, 99, 5, 99, 99, 99, 3, 99, 99, 99, 99, 5, 99, 99, 99, 99, 2, 99, 99, 99, 99, 99, 99, 99,
			99, 99, 99, 99, 99, 99, 5, 99, 99, 99, 1, 9, 9, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			99, 99, 99, 99, 99, 99, 5, 5, 99, 5, 5, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			3, 99, 99, 99, 99, 99, 99, 1, 1, 5, 99, 7, 99, 7, 99, 99, 99, 99, 99, 99, 99, 99, 1, 3, 3, 99, 3, 99, 99, 2, 2, 99, 99, 99, 99,
			99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 5, 5, 99, 99, 99, 5, 7, 99, 99, 99, 99, 99, 99, 99, 99, 5, 99, 5, 5,
			99, 99, 99, 3, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			99, 1, 99, 5, 99, 5, 5, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			99, 99, 99, 99, 3, 99, 99, 99, 99, 99, 3, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			99, 99, 99, 99, 99, 99, 99, 99, 5, 99, 5, 5, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
			99, 99, 99, 99, 99);
		Global.CUTTING_RESULT = Array(False, 2, 154, False, False, 6, False, False, False, 10, False, False, False, False, 15, False,
			False, False, False, 20, False, False, False, False, False, False, False, False, False, False, False, False, False, 34, False,
			False, False, Array(38, 39), 140, 140, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, 67, 68, False, 70, 71, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, 216, False, False, False, False, False, False, 104, 102, 103, False, 108, False, 112, False, False, False,
			False, False, False, False, False, Array(116, 116), 227, Array(229, 229), False, Array(235, 235), False, False, 124, 138,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			143, 144, False, False, False, 148, 151, False, False, False, False, False, False, False, False, 158, False, 160, 161, False,
			False, False, 166, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, Array(208, 208), False, 197,
			False, Array(199, 199), 200, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, Array(231,
			231), False, False, False, False, False, Array(237, 237), False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, 267, False, 269, 270, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False);
		Global.GRILLING_NEEDED = Array(99, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 5, 2, 3, 3, 5, 5, 5, 5, 5, 3, 3, 3, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 99, 99, 99, 99, 5, 4, 3, 6, 5, 2, 2, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5,
			5, 5, 5, 5, 5, 5, 3, 5, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
		Global.GRILLING_RESULT = Array(False, 3, 4, False, False, 8, 11, False, False, False, False, False, False, False, 16, False, False,
			False, False, 21, 21, False, False, False, False, False, False, False, False, False, False, 32, False, 35, 36, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, 80, False, False, 94, 91, 91, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, 21, False, False, False, False, False, False, False, 137, 123, False, 138, False, False, 126, 132, 133, 134, 135,
			False, False, False, False, False, False, False, False, False, False, 144, 145, False, False, False, 149, 150, False, False,
			False, False, False, False, False, False, False, False, 162, 165, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, 203, 203, False, False, False, False, False, 207,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, 271, False, False, False, False, 274, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False);
		Global.FRYING_NEEDED = Array(99, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 2, 5, 5, 5, 5, 5, 2, 2, 2, 5, 5,
			55, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 99, 99, 99, 99, 7, 5, 4, 5, 5, 5, 4, 3,
			3, 3, 3, 3, 3, 3, 5, 7, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
		Global.FRYING_RESULT = Array(False, False, False, False, False, False, 7, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			92, False, False, 95, False, False, False, False, False, False, False, False, 90, 85, 84, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, 291, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 163, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, 204, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, 196, 223, False, 220, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, 292, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False);
		Global.POT_TIME = Array(False, 5, False, False, False, 5, 3, False, False, False, False, False, 7, False, False, 5, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 7, 3, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, 5, False, 3, False, False, False, 4, False, False, False, 5, False, False,
			False, 5, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 7, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, 5, 5, 5, False, False, False, False, False, False, False, False, False, False, 5, 5, 5, False, False, False,
			False, 5, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, 5, False, False, False, False, False, 5, False, False, False, False, False, 5, 7, 7,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, 5, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False);
		Global.POT_RESULT = Array(False, 139, False, False, False, 9, 9, False, False, False, False, False, 13, False, False, 17, False,
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
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 275,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False);
		Global.PAN_NEEDED = Array(99, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 5, 2, 5, 3, 5, 5, 5, 5, 5, 3, 3, 3, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 99, 99, 99, 99, 5, 5, 5, 6, 5, 2, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5,
			5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 99, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5, 5, 5, 5, 5, 5, 5);
	}
}

rule("Global subroutine: Data init2")
{
	event
	{
		Subroutine;
		dataInit2;
	}

	actions
	{
		Global.PAN_RESULT = Array(False, 3, 4, False, False, 8, 11, False, False, False, False, False, False, False, 16, False, False,
			False, False, 21, 21, False, False, False, False, False, False, False, False, False, False, 32, False, 35, 36, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, 94, 91, 91, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, 89, False, False, False, False, False, False, 109, False, False, False, 110, False, 136,
			False, False, 21, False, False, False, 120, False, False, False, 137, 123, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, 145, 145, False, False, 149, 150,
			False, False, False, False, False, False, 156, False, False, False, 162, 165, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, 188,
			189, 190, False, False, False, False, False, False, 195, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, 264, False, False, False, False, 271, 272, 272, False, False, 274, False, False, 277, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False);
		Global.IMPACT_RESULT = Array(False, False, False, False, False, False, False, False, False, 10, False, False, False, False, 98, 98,
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
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False,
			False, 276, 293, 294, False, False);
		Global.RAW_MIX = Array(21025, 21026, 6127, 6129, 7021, 13017, 13018, 13022, 13030, 13029, 15038, 15040, 15041, 15043, 15044, 15046,
			15048, 15051, 17018, 17119, 18021, 20038, 20040, 20042, 20043, 20045, 20046, 20049, 20052, 32038, 32041, 32042, 32043, 32047,
			32048, 32049, 32053, 34038, 34040, 34041, 34042, 34044, 34045, 34047, 34050, 39040, 39044, 39049, 39053, 39052, 39054, 66072,
			67072, 68072, 70077, 73075, 73077, 74075, 74076, 76085, 77085, 78085, 79085, 79084, 113125, 121127, 124127, 124130, 21022,
			71144, 71151, 71158, 71161, 144158, 144161, 151158, 151161, 158161, 167158, 169144, 171071, 167161, 170144, 172071, 168158,
			169151, 173071, 168161, 170151, 174071, 169161, 170158, 175071, 171161, 172158, 175144, 176161, 177158, 180144, 181071, 178161,
			179158, 180151, 182071, 168118, 183118, 184118, 167175, 169172, 170171, 168175, 169174, 170173, 2077, 156194, 145152, 33152,
			145195, 109195, 105109, 106145, 77199, 199211, 209209, 77211, 194201, 194196, 194197, 110214, 194216, 110194, 196218, 197218,
			110217, 216218, 72160, 72200, 72199, 84194, 110225, 84218, 231231, 231232, 231233, 232232, 237237, 237238, 237239, 238238,
			227227, 257243, 144246, 255243, 144248, 256243, 144250, 255245, 148143, 150143, 243258, 243193, 258260, 259193, 104114, 262184,
			34152, 104214, 104217, 104225, 165272, 4272, 274272, 275272, 286120, 286277, 287120, 287277, 288120, 288277, 289120, 289277);
		Global.RAW_RESULT = Array(28, 27, 130, 131, 23, 24, 25, 26, 27, 28, 42, 45, 47, 49, 50, 52, 53, 54, 22, 125, 29, 41, 44, 47, 48,
			50, 51, 53, 54, 40, 44, 45, 46, 50, 51, 52, 54, 43, 46, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 81, 82, 83, 78, 76, 79,
			77, 79, 87, 88, 96, 86, 97, 127, 128, 129, 131, 30, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 176, 176, 177, 177, 177,
			178, 178, 178, 179, 179, 179, 180, 180, 180, 181, 181, 181, 183, 183, 183, 183, 184, 184, 184, 184, 185, 186, 187, 183, 183,
			183, 184, 184, 184, 155, 152, 153, 107, 105, 106, 146, 146, 205, 209, 210, 212, 213, 214, 214, 215, 217, 218, 215, 215, 219,
			219, 221, 222, 224, 225, 226, 226, 232, 233, 234, 234, 238, 239, 240, 240, 228, 246, 247, 248, 249, 250, 251, 252, 253, 254,
			259, 260, 261, 261, 262, 263, 107, 215, 219, 226, 286, 287, 288, 289, 278, 279, 280, 281, 282, 283, 284, 285);
		Global.MIXING_RECIPE = Mapped Array(Global.ITEM_NAME, Empty Array);
		Global.MIXING_RESULT = Global.MIXING_RECIPE;
		For Global Variable(checkingIndex, False, Count Of(Global.RAW_MIX), True);
			Modify Global Variable At Index(MIXING_RECIPE, Global.RAW_MIX[Global.checkingIndex] % 1000, Append To Array, Round To Integer(
				Global.RAW_MIX[Global.checkingIndex] / 1000, Down));
			Modify Global Variable At Index(MIXING_RECIPE, Round To Integer(Global.RAW_MIX[Global.checkingIndex] / 1000, Down),
				Append To Array, Global.RAW_MIX[Global.checkingIndex] % 1000);
			Modify Global Variable At Index(MIXING_RESULT, Global.RAW_MIX[Global.checkingIndex] % 1000, Append To Array,
				Global.RAW_RESULT[Global.checkingIndex]);
			Modify Global Variable At Index(MIXING_RESULT, Round To Integer(Global.RAW_MIX[Global.checkingIndex] / 1000, Down),
				Append To Array, Global.RAW_RESULT[Global.checkingIndex]);
		End;
		Global.MENU_LIST = Array(Array(3, 4, 7, 10, 23, 24, 25, 26, 28, 27), Array(7, 23, 55, 56, 57, 58, 59, 60), Array(85, 86, 87, 88,
			89, 90, 96), Array(7, 23, 126, 132, 133, 134, 135), Array(193, 188, 189, 190, 191, 192), Array(105, 106, 107, 146, 152, 153,
			194, 101, 103, 109, 110, 111, 156, 218), Array(196, 202, 203, 209, 210, 211, 213, 214, 215, 219, 220, 223, 226), Array(193,
			246, 247, 248, 249, 250, 251, 259, 260, 261, 264, 111), Array(278, 279, 280, 281, 282, 283, 284, 285, 293, 294));
		Global.HAZARD_MENU_LIST = Array(Array(0, 0, 0, 8, 9, 11, 13, 15, 16, 20, 32, 139), Array(0, 0, 0, 3, 4, 8, 9, 10, 11, 16, 20, 35,
			36, 139, 140), Array(0, 0, 0, 80, 91, 92, 93, 94, 95, 216), Array(0, 0, 0, 8, 9, 10, 11, 120, 123, 137, 138), Array(0, 0, 0,
			91, 92, 94, 120, 145, 147, 148, 148, 150, 158, 162, 163, 164, 165, 166, 176, 177, 178, 179, 180, 181, 253, 254), Array(0, 0, 0,
			1, 2, 3, 4, 33, 34, 35, 36, 77, 100, 102, 104, 108, 112, 142, 143, 144, 145, 154, 155, 195), Array(0, 0, 0, 101, 102, 103, 106,
			109, 110, 111, 162, 163, 164, 165, 166, 194, 195, 204, 218, 84, 85, 90), Array(0, 0, 0, 190, 109, 110, 101, 102, 103, 120, 145,
			143), Array(0, 0, 0, 162, 163, 165, 3, 4, 32, 274, 275, 271, 272));
		Global.FRIDGE_LIST = Array(Array(1, 5, 19, 12, 14, 18), Array(37, 1, 14, 33, 19, 5), Array(66, 72, 69, 73, 74, 75), Array(114, 14,
			113, 121, 122, 5), Array(159, 142, 114, 69, 157, 147), Array(1, 142, 112, 100, 33, 77), Array(198, 159, 112, 100, 66, 72),
			Array(114, 142, 184, 100, 241, 258), Array(114, 1, 290, 159, 273, 268));
		Global.stageMode = Workshop Setting Combo(Custom String("설정"), Custom String("요리 모드"), 0, Array(Custom String("클래식"),
			Custom String("모듬회밥!"), Custom String("Taco Tuesday!")), 2);
		Global.CUSTOMER_LIST = Array(Array(Array(Hero(Soldier: 76), Hero(Soldier: 76), Hero(Roadhog)), Array(Hero(Tracer), Hero(Tracer),
			Hero(Soldier: 76)), Array(Hero(Soldier: 76), Hero(Soldier: 76), Hero(Roadhog)), Array(Hero(Tracer), Hero(Bastion), Hero(
			Bastion)), Array(Hero(Hanzo), Hero(Tracer)), Array(Hero(Zarya), Hero(Bastion)), Array(Hero(Hanzo), Hero(Mercy)), Array(Hero(
			Hanzo), Hero(Soldier: 76)), Array(Hero(Zarya), Hero(Hanzo), Hero(Mercy)), Array(Hero(Soldier: 76), Hero(Roadhog)), Array(Hero(
			Hanzo), Hero(Roadhog), Hero(Mercy)), Array(Hero(Hanzo), Hero(Zarya), Hero(Bastion)), Array(Hero(Roadhog), Hero(Mercy), Hero(
			Tracer)), Array(Hero(Tracer), Hero(Hanzo), Hero(Zarya)), Array(Hero(Hanzo), Hero(Zarya), Hero(Bastion), Hero(Mercy))), Array(
			Array(Hero(Soldier: 76), Hero(Soldier: 76), Hero(Roadhog)), Array(Hero(Tracer), Hero(Tracer), Hero(Soldier: 76)), Array(Hero(
			Tracer), Hero(Tracer), Hero(Mercy)), Array(Hero(Hanzo), Hero(Bastion), Hero(Hanzo), Hero(Bastion), Hero(Bastion)), Array(Hero(
			Hazard), Hero(Roadhog)), Array(Hero(Hazard), Hero(Bastion), Hero(Bastion), Hero(Zarya)), Array(Hero(Mauga), Hero(Roadhog),
			Hero(Zarya)), Array(Hero(Mauga), Hero(Mercy), Hero(Mercy), Hero(Hazard)), Array(Hero(D.Va), Hero(Soldier: 76), Hero(
			Soldier: 76), Hero(Soldier: 76), Hero(Soldier: 76)), Array(Hero(Mauga), Hero(Zarya), Hero(Zarya), Hero(Zarya)), Array(Hero(
			D.Va), Hero(Mercy), Hero(Mercy), Hero(Tracer), Hero(Tracer), Hero(Tracer), Hero(Tracer)), Array(Hero(Moira), Hero(Soldier: 76),
			Hero(Soldier: 76), Hero(Soldier: 76), Hero(Soldier: 76), Hero(Mauga)), Array(Hero(D.Va), Hero(Moira), Hero(Moira), Hero(
			Hazard), Hero(Mauga), Hero(Zarya), Hero(Zarya), Hero(Zarya), Hero(D.Va))), Array(Array(Hero(Soldier: 76), Hero(Soldier: 76),
			Hero(Roadhog)), Array(Hero(Tracer), Hero(Tracer), Hero(Soldier: 76)), Array(Hero(Tracer), Hero(Tracer), Hero(Mercy)), Array(
			Hero(Hanzo), Hero(Bastion), Hero(Hanzo), Hero(Bastion), Hero(Bastion)), Array(Hero(Hazard), Hero(Roadhog)), Array(Hero(Hazard),
			Hero(Bastion), Hero(Bastion), Hero(Zarya)), Array(Hero(Mauga), Hero(Roadhog), Hero(Zarya)), Array(Hero(Mauga), Hero(Mercy),
			Hero(Mercy), Hero(Hazard)), Array(Hero(D.Va), Hero(Soldier: 76), Hero(Soldier: 76), Hero(Soldier: 76), Hero(Soldier: 76)),
			Array(Hero(Mauga), Hero(Zarya), Hero(Zarya), Hero(Zarya)), Array(Hero(D.Va), Hero(Mercy), Hero(Mercy), Hero(Tracer), Hero(
			Tracer), Hero(Tracer), Hero(Tracer)), Array(Hero(Moira), Hero(Soldier: 76), Hero(Soldier: 76), Hero(Soldier: 76), Hero(
			Soldier: 76), Hero(Mauga)), Array(Hero(D.Va), Hero(Moira), Hero(Moira), Hero(Hazard), Hero(Mauga), Hero(Zarya), Hero(Zarya),
			Hero(Zarya), Hero(D.Va))))[Global.stageMode];
		Global.STAGE_CODE = Array(Array(Array(0), Array(2), Array(3), Array(0), Array(2), Array(0), Array(3), Array(4), Array(2), Array(1),
			Array(4), Array(3), Array(1), Array(4), Array(1)), Array(Array(0), Array(2), Array(5), Array(6), Array(3), Array(4), Array(1),
			Array(7), Array(Random Integer(0, 6)), Array(Random Integer(0, 7)), Array(Random Integer(0, 7)), Array(Random Integer(0, 7)),
			Random Value In Array(Array(Array(5, 6), Array(4, 7), Array(2, 3), Array(0, 1), Array(3, 7), Array(2, 6)))), Array(Array(0),
			Array(2), Array(3), Array(1), Array(4), Array(8), Array(6), Array(5), Array(Random Value In Array(Array(0, 1, 2, 3, 4, 5, 6,
			8))), Array(Random Value In Array(Array(0, 1, 2, 3, 4, 5, 6, 8))), Array(Random Value In Array(Array(0, 1, 2, 3, 4, 5, 6, 8))),
			Array(Random Value In Array(Array(0, 1, 2, 3, 4, 5, 6, 8))), Random Value In Array(Array(Array(5, 6), Array(4, 8), Array(2, 3),
			Array(0, 1), Array(0, 3), Array(2, 6)))))[Global.stageMode];
		Global.STAGE_NAME = String Split(Custom String("스테이크&파스타/수제 버거/치킨/피자/만두/달걀&밥/생선&밥/국수/타코"), Custom String("/"));
		Global.upgradePrice = Array(Array(50, 250), Array(100, 100), Array(100, 100), Array(100, 100));
		Global.UPGRADE_CODE = Array(Array(265, -1), Array(0, 1), Array(2, 3), Array(4, 5));
		Global.KNIFE = Array(61, 265, 62, 63, 64, 65);
		Global.KNIFE_AMOUNT = Array(1.200, 1.500, 1.500, 1.500, 3, 1.200);
		Global.KNIFE_DECREASE = Array(0.150, 0.100, 0.050, 0.050, 0.050, 0.100);
		Global.COOKWARE_NAME = String Split(Custom String("튀김기/솥/그릴/팬/도마/싱크대/냉장고"), Custom String("/"));
		Global.UPGRADE_NAME = String Split(Custom String("튀김기 강화/솥 강화/그릴 강화/팬 강화/개인 이동 속도 증가/팀 영업 시간 증가"), Custom String("/"));
	}
}`;

let lines = DATA_INIT_CODE.split("\n");

let FOOD_NAMES = "";
let ITEM_COLORS = "";
let CUTTING_RESULTS = "";
let GRILLING_RESULTS = "";
let FRYING_RESULTS = "";
let POT_RESULTS = "";
let PAN_RESULTS = "";
let IMPACT_RESULTS = "";
let MIX_RECIPES = "";
let MIX_RESULTS = "";
let MENU_LISTS = "";
let HAZARD_MENU_LISTS = "";
let STAGE_NAMES = "";
let FRIDGE_LISTS = "";

const CatchKeywords = ['ITEM_NAME', 'ITEM_COLOR', 'CUTTING_RESULT', 'GRILLING_RESULT', 'FRYING_RESULT', 'POT_RESULT', 'PAN_RESULT', 'IMPACT_RESULT', 'RAW_MIX', 'RAW_RESULT', 'MENU_LIST', 'HAZARD_MENU_LIST', 'STAGE_NAME', 'FRIDGE_LIST'];

const ColorsSupported = "ABCDFGHLMOPRSTVWY";

for (let i = 0; i < lines.length; i++) {
	let line = lines[i];
	// if line.trimStart() NOT startsWith 'Global.' + 'one of CatchKeywords', continue;
	let keyword = CatchKeywords.find(keyword => line.trimStart().startsWith('Global.' + keyword + ' = '));
	if (undefined === keyword) continue;

	let tline = "";
	let cnt = 0;
	for (let j = 0; j < lines.length - i; j++) {
		if (lines[i + j].trimEnd().endsWith(';')) {
			tline += lines[i + j];
			cnt++;
			break;
		}
		tline += lines[i + j] + '\n';
		cnt++;
	}

	i += cnt - 1;

	switch (keyword) {
		case 'ITEM_NAME':
			FOOD_NAMES = tline;
			break;
		case 'ITEM_COLOR':
			ITEM_COLORS = tline;
			break;
		case 'CUTTING_RESULT':
			CUTTING_RESULTS = tline;
			break;
		case 'GRILLING_RESULT':
			GRILLING_RESULTS = tline;
			break;
		case 'FRYING_RESULT':
			FRYING_RESULTS = tline;
			break;
		case 'POT_RESULT':
			POT_RESULTS = tline;
			break;
		case 'PAN_RESULT':
			PAN_RESULTS = tline;
			break;
		case 'IMPACT_RESULT':
			IMPACT_RESULTS = tline;
			break;
		case 'RAW_MIX':
			MIX_RECIPES = tline;
			break;
		case 'RAW_RESULT':
			MIX_RESULTS = tline;
			break;
		case 'MENU_LIST':
			MENU_LISTS = tline;
			break;
		case 'HAZARD_MENU_LIST':
			HAZARD_MENU_LISTS = tline;
			break;
		case 'STAGE_NAME':
			STAGE_NAMES = tline;
			break;
		case 'FRIDGE_LIST':
			FRIDGE_LISTS = tline;
			break;
	}
}

// Parsing food names from the workshop script.
function parseSlashStrings(str) {
	let arr = [];
	let temp = str.split("String Split(");
	for (let i = 1; i < temp.length; i++) {
		let tmpAccumStr = "";
		let tmpStr = temp[i].split("Custom String(");
		for (let j = 1; j < tmpStr.length; j++) {
			let str = tmpStr[j];
			let start = str.indexOf("\"");
			let end = str.indexOf("\"", start + 1);
			str = str.substring(start + 1, end); // Remove the first quote.
			if (str.endsWith("{0}")) {
				str = str.substring(0, str.length - 3);
				tmpAccumStr += str;
			} else {
				tmpAccumStr += str;
				break;
			}
		}
		arr.push(...tmpAccumStr.split("/"));
	}
	return arr;
}

const foodNames = parseSlashStrings(FOOD_NAMES);
console.log("List of food names: ");
for (let i = 0; i < foodNames.length; i++) {
	console.log(i, foodNames[i]);
}

const itemColors = parseSlashStrings(ITEM_COLORS);
console.log(itemColors);

itemColors.forEach(element => {
	if (!ColorsSupported.includes(element)) {
		console.log("WARNING: Unsupported color: ", element);
	}
});

const stageNames = parseSlashStrings(STAGE_NAMES);

/**
 * 
 * @param {string} str 
 * @returns {[Array<null | number | number[]>, string]} Pair of parsed workshop array and remaining str
 */
function parseWorkshopArray(str) {
	/**
	 * @type {Array<null | number | number[]>}
	 */
	let res = [];

	str = str.substring(str.indexOf("Array(") + 6);
	while (true) {
		str = str.trim();
		if (str.startsWith("False")) {
			res.push(null);
			str = str.substring(5).trim();
		} else if (str.startsWith("Array(")) {
			let [a, b] = parseWorkshopArray(str);
			res.push(a);
			str = b;
		} else {
			let m = str.match(/^\d+/)[0];
			res.push(Number(m))
			str = str.substring(m.length).trim();
		}
		if (str.startsWith(",")) {
			str = str.substring(1);
		} else if (str.startsWith(")")) {
			str = str.substring(1);
			break;
		}
	}

	return [res, str];
}

function parseMenuArray(str) {
	// just parse all the numbers using regex from str and return as an array.
	return str.match(/\d+/g).map(Number);
}

const cuttingResults = parseWorkshopArray(CUTTING_RESULTS)[0];
const grillingResults = parseWorkshopArray(GRILLING_RESULTS)[0];
const fryingResults = parseWorkshopArray(FRYING_RESULTS)[0];
const potResults = parseWorkshopArray(POT_RESULTS)[0];
const panResults = parseWorkshopArray(PAN_RESULTS)[0];
const impactResults = parseWorkshopArray(IMPACT_RESULTS)[0];
const mixRecipes = parseWorkshopArray(MIX_RECIPES)[0];
const mixResults = parseWorkshopArray(MIX_RESULTS)[0];

console.log("cuttingResults", cuttingResults);

let menus = parseWorkshopArray(MENU_LISTS)[0];
let hazardMenus = parseWorkshopArray(HAZARD_MENU_LISTS)[0];
let fridge = parseWorkshopArray(FRIDGE_LISTS)[0];

/**
 * @type {Record<number, {method: CookMethod, items: number[], output: number[]}[]>}
 */
let recipeReversedMap = {};

/**
 * 
 * @param {number} resultId 
 * @param {{method: CookMethod, items: number[], output: number[]}} methodObj 
 */
function storeMethod(resultId, methodObj) {
	if (typeof resultId !== "number") { // array
		for (let i = 0; i < resultId.length; i++) {
			storeMethod(resultId[i], methodObj);
		}
		return;
	}
	if (recipeReversedMap[resultId] === undefined) {
		recipeReversedMap[resultId] = [];
	}
	recipeReversedMap[resultId].push(methodObj);
}

cuttingResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "cutting", items: [sourceIndex], output });
});

grillingResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "grilling", items: [sourceIndex], output });
});

fryingResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "frying", items: [sourceIndex], output });
});

potResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "pot", items: [sourceIndex], output });
});

panResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "pan", items: [sourceIndex], output });
});

impactResults.forEach((value, sourceIndex) => {
	if (value === null) return;
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "impact", items: [sourceIndex], output });
});

mixResults.forEach((value, sourceIndex) => {
	let recipe = mixRecipes[sourceIndex];
	let ingredientA = recipe % 1000;
	let ingredientB = Math.floor(recipe / 1000);
	let output = value;
	if (typeof output == "number") output = [value];
	storeMethod(value, { method: "mix", items: [ingredientA, ingredientB], output });
});

function humanReadableMethod(method) {
	switch (method) {
		case "cutting": return "도마에서 썰어서";
		case "grilling": return "그릴에 구워서";
		case "frying": return "튀겨서";
		case "pot": return "솥에 쪄서";
		case "pan": return "팬에 볶아서";
		case "impact": return "던져서";
		case "mix": return "섞어서";
	}
}

/**
 * 
 * @param {number} recipeId 
 * @param {number} stageId 
 * @returns {FlatRecipe[]}
 */
function calculateRecipeV2(recipeId, stageId) {
	/**
	 * 
	 * @param {number} item 
	 * @returns {Recipe}
	 */
	const calculateFullRecipe = (itemId) => {
		/**
		 * @type {[number, Recipe][]}
		 */
		let calculationQueue = []; // itemId, parent recipe or null

		calculationQueue.push([itemId, null]);

		/**
		 * @type {Recipe}
		 */
		let result;

		/**
		 * @type {number[]}
		 */
		let inventory = [];

		while (calculationQueue.length > 0) {
			/**
			 * @type {[number, Recipe]}
			 */
			let [nid, recipe] = calculationQueue.shift();

			/**
			 * @type {Recipe}
			 */
			let m = {
				ingredients: [],
				method: "fridge",
				itemId: nid,
				fullOutput: [nid],
				repeat: 1
			}
			if (recipe === null) {
				result = m;
			} else {
				recipe.ingredients.push(m)
			}

			if (recipeReversedMap[nid] === undefined || fridge[stageId].includes(nid)) {
			} else if (inventory.includes(nid)) {
				inventory.splice(inventory.indexOf(nid), 1);
				m.method = "premade";
			} else {
				let d = recipeReversedMap[nid][0];
				m.method = d.method;
				m.fullOutput = d.output;
				inventory.push(...d.output);
				inventory.splice(inventory.indexOf(nid), 1);
				let insertAt = 0;
				d.items.forEach(element => {
					calculationQueue.splice(insertAt++, 0, [element, m]);
				});
			}
		}

		return result;
	}

	// const debugRecipe = (recipe) => {
	// 	let steps = getRecipeSteps(recipe);
	// 	/**
	// 	 * @type {Array<number>}
	// 	 */
	// 	let inventory = [];

	// 	steps.forEach(element => {
	// 		for (let i = 0; i < element.repeat; i++) {
	// 			element.ingredients.forEach((a) => {
	// 				let d = inventory.lastIndexOf(a); // Must be last index of for proper leftover removal.
	// 				if (d != -1) inventory.splice(d, 1);
	// 			})
	// 			if (element.method !== "premade")
	// 				element.fullOutput.forEach((a) => {
	// 					inventory.push(a);
	// 				})
	// 		}

	// 		// Debugging
	// 		console.log(element.ingredients.map((v) => foodNames[v]), element.method, foodNames[element.itemId], '*', element.repeat);
	// 	});

	// 	console.log("Items left:", inventory);
	// }

	// Recipe flattening
	/**
	 * 
	 * @param {Recipe} recipe 
	 * @returns {Array<FlatRecipe>}
	 */
	const getRecipeSteps = (recipe) => {
		/**
		 * @type {Array<FlatRecipe>}
		 */
		let steps = [];
		/**
		 * 
		 * @param {Recipe} recipe 
		 */
		const appendStep = (recipe) => {
			recipe.ingredients.forEach(element => {
				appendStep(element);
			});
			steps.push({
				ingredients: recipe.ingredients.map((a) => a.itemId),
				itemId: recipe.itemId,
				method: recipe.method,
				fullOutput: recipe.fullOutput,
				repeat: recipe.repeat
			})
		}
		appendStep(recipe);
		return steps;
	}

	let recipe = calculateFullRecipe(recipeId);

	console.log("Full recipe", recipe)

	// Iterate backward, and eliminate repetitive recipes
	/**
	 * Parent recipe, and indication of child ingredient to check.
	 * @type {Array<[Recipe, number]>}
	 */
	let derepeatStack = [];
	recipe.ingredients.forEach((_, i) => {
		derepeatStack.splice(i, 0, [recipe, i]);
	})
	while (derepeatStack.length > 0) {
		/**
		 * @type {[Recipe, number]}
		 */
		let [a, b] = derepeatStack.pop();
		let c = a.ingredients[b];

		/**
		 * 
		 * @param {Recipe} recipe 
		 * @returns {boolean}
		 */
		const aa = (recipe) => {
			if (recipe.method === "premade") return false;
			return recipe.ingredients.map((v) => aa(v)).reduce((a, b) => a && b, true);
		}
		if (!aa(c)) continue;

		// If there's repetition, remove it.

		/**
		 * Parent recipe, and indication of child ingredient to check.
		 * @type {Array<[Recipe, number]>}
		 */
		let checkStack = [];
		for (let i = 0; i < b; i++) {
			checkStack.splice(i, 0, [a, i]);
		}
		while (checkStack.length > 0) {
			/**
			 * @type {[Recipe, number]}
			 */
			let [d, e] = checkStack.pop();
			let f = d.ingredients[e];
			if (f.itemId === c.itemId && f.ingredients.length > 0) { // Found repetition of same recipe.
				// Remove from the list
				c.ingredients = [];
				c.method = "premade";
				c.fullOutput = [c.itemId];

				// add all repeats of f and children by c.repeat
				const aa = (r) => {
					r.repeat += c.repeat;
					r.ingredients.forEach(element => {
						aa(element);
					});
				}
				aa(f);
			} else {
				f.ingredients.forEach((_, i) => {
					checkStack.splice(i, 0, [f, i]);
				});
			}
		}

		c.ingredients.forEach((_, i) => {
			derepeatStack.splice(i, 0, [c, i]);
		});
	}
	// Derepetition complete.

	return getRecipeSteps(recipe);
}

/**
 * 
 * @param {number} recipeId 
 * @param {number} stageId 
 * @returns {[string, Record<number, number>]}
 */
function explainRecipe(recipeId, stageId) {
	let recipe = [];
	let ingredients = {};

	let steps = calculateRecipeV2(recipeId, stageId);
	for (let step of steps) {
		if (step.method === "mix") {
			let ingredientA = step.ingredients[0];
			let ingredientB = step.ingredients[1];
			recipe.push(`'${htmlItemName(ingredientA)}'와 '${htmlItemName(ingredientB)}' 섞어서 '${htmlItemName(step.itemId)}' 만들기.`);
		} else if (step.method === "premade") {
			recipe.push(`방금 제작한 '${htmlItemName(step.itemId)}' 가져오기.`);
		} else if (step.method !== "fridge") {
			let ingredient = step.ingredients[0];
			let methodStr = humanReadableMethod(step.method);
			recipe.push(`'${htmlItemName(ingredient)}' ${methodStr} '${htmlItemName(step.itemId)}' 만들기.`);
		}
		if (step.method === "fridge") {
			if (step.itemId in ingredients) {
				ingredients[step.itemId]++;
			} else {
				ingredients[step.itemId] = 1;
			}
		}
	}

	return [recipe, ingredients];
}

function htmlItemName(itemId) {
	// class name is .item-color-<character>
	return `<span class="item item-color-${itemColors[itemId]}">${foodNames[itemId]}</span>`;
}

function humanReadableRecipe(recipeId, stageId) {
	let [recipe, ingredients] = explainRecipe(recipeId, stageId);

	// 탄 음식
	if (recipeId === 0) recipe = ["아무 재료나 계속 가열하기."]

	let recipeStr = recipe.map((v) => `<div class='block'>${v}</div>`).join("\n");
	let ingredientsStr = ``;
	for (let itemId in ingredients) {
		let count = ingredients[itemId];
		ingredientsStr += `${htmlItemName(itemId)} x ${count}\n`;
	}

	let result = `재료:\n\n${ingredientsStr}\n\n조리법:\n\n${recipeStr}\n\n\n'${htmlItemName(recipeId)}' 완성!`;
	return result;
}

// menus.forEach(element => {
// 	console.log(humanReadableRecipe(element))
// });