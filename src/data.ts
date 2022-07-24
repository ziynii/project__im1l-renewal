export interface IMenu {
  id: number;
  name: string;
  price?: string;
  desciption: string;
  url: string;
  category: string;
  option?: string;
}

export default [
  {
    id: 1,
    name: '에스프레소',
    price: '2,500',
    desciption:
      '콜롬비아 원두를 베이스로\n100% 아라비카 원두만을 사용한\n에스프레소',
    url: `${process.env.PUBLIC_URL}/image/ep.png`,
    category: 'coffee',
    option: 'Only Hot',
  },
  {
    id: 2,
    name: '에스프레소 마끼아또',
    price: '2,500',
    desciption:
      '100% 아라비카 원두만을 사용한 \n에스프레소 위에 소량의 우유거품을 \n얹은 부드러운 에스프레소',
    url: `${process.env.PUBLIC_URL}/image/m_c.png`,
    category: 'coffee',
    option: 'Only Hot',
  },
  {
    id: 3,
    name: '에스프레소 콘파냐',
    price: '2,500',
    desciption:
      '100% 아라비카 원두만을 사용한 \n에스프레소 위에 풍부한 휘핑크림을 \n얹은 달콤한 에스프레소',
    url: `${process.env.PUBLIC_URL}/image/conpa.png`,
    category: 'coffee',
    option: 'Only Hot',
  },
  {
    id: 4,
    name: '아메리카노',
    price: '2,500',
    desciption:
      '유어일리터만의 맛과 향을 더한 \n100% 아라비카 원두로 추출해 \n산뜻하고 풍부한 맛의 아메리카노',
    url: `${process.env.PUBLIC_URL}/image/aa.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 5,
    name: '헤이즐넛 아메리카노',
    price: '3,000',
    desciption:
      '유어일리터의 산뜻하고 풍부한 \n아메리카노와 프리미엄 헤이즐넛 시럽의 만남',
    url: `${process.env.PUBLIC_URL}/image/aa.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 6,
    name: '카페라떼',
    price: '3,500',
    desciption:
      '풍부한 에스프레소와 \n신선한 우유가 어우러져 \n고소하고 부드러운 카페라떼',
    url: `${process.env.PUBLIC_URL}/image/cl.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 7,
    name: '카푸치노',
    price: '3,800',
    desciption:
      '신선한 우유로 만든 벨벳 우유 거품과 \n풍부한 에스프레소의 절묘한 조화',
    url: `${process.env.PUBLIC_URL}/image/cpu.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 8,
    name: '바닐라라떼',
    price: '4,000',
    desciption:
      '유어일리터의 고소하고 부드러운 \n카페라떼와 프리미엄 바닐라 시럽의 만남',
    url: `${process.env.PUBLIC_URL}/image/b_l.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 9,
    name: '헤이즐넛라떼',
    price: '4,000',
    desciption:
      '유어일리터의 고소하고 부드러운 \n카페라떼와 프리미엄 헤이즐넛 시럽의 만남',
    url: `${process.env.PUBLIC_URL}/image/h_l.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 10,
    name: '카페모카',
    price: '4,300',
    desciption:
      '쌉싸름한 다크초콜릿과 \n풍부한 에스프레소, 신선한 우유가 \n더해진 달콤한 커피',
    url: `${process.env.PUBLIC_URL}/image/cmo.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 11,
    name: '카라멜 마끼아또',
    price: '4,300',
    desciption:
      '부드러운 우유 거품과 달콤한 카라멜, \n에스프레소의 풍부한 맛이 돋보이는 커피',
    url: `${process.env.PUBLIC_URL}/image/cm.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 12,
    name: '콜드브루',
    price: '4,000',
    desciption:
      '100% 아라비카 원두를 \n저온 방식으로 장시간에 걸쳐 추출해 \n풍미가 돋보이는 커피',
    url: `${process.env.PUBLIC_URL}/image/d_c.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 13,
    name: '콜드브루 라떼',
    price: '4,500',
    desciption:
      '저온 방식으로 장시간 추출한 커피와 \n신선한 우유가 어우러져 \n한층 더 고소한 커피',
    url: `${process.env.PUBLIC_URL}/image/d_l.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 14,
    name: '돌체 라떼',
    price: '3,800',
    desciption:
      '깊고 진한 에스프레소와 \n달콤한 바닐라빈 연유가 만나 \n달콤하고 부드러운 커피',
    url: `${process.env.PUBLIC_URL}/image/dolche.png`,
    category: 'coffee',
    option: 'Hot/Ice',
  },
  {
    id: 15,
    name: '흑당커피',
    price: '4,800',
    desciption: '진하고 달콤한 흑당에 고소한 \n카페라떼가 어우러진 커피음료',
    url: `${process.env.PUBLIC_URL}/image/b_s_c.png`,
    category: 'coffee',
    option: 'Only Ice',
  },
  {
    id: 16,
    name: '초코라떼',
    price: '3,800',
    desciption:
      '다크초콜릿과 부드러운 우유, \n그리고 달콤한 휘핑크림이 \n조화로운 음료',
    url: `${process.env.PUBLIC_URL}/image/cho_la.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 17,
    name: '미숫가루라떼',
    price: '3,800',
    desciption: '달콤하고 고소하며 \n포만감이 가득한 곡물 우유',
    url: `${process.env.PUBLIC_URL}/image/misu.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 18,
    name: '고구마라떼',
    price: '4,300',
    desciption: '달콤한 고구마에 \n신선한 우유를 더해 든든한 음료',
    url: `${process.env.PUBLIC_URL}/image/goguma_l.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 19,
    name: '녹차라떼',
    price: '4,800',
    desciption: '100% 국내산 녹차와 우유를 사용해 \n쌉싸름하고 고소한 음료',
    url: `${process.env.PUBLIC_URL}/image/green_l.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 20,
    name: '민트초코라떼',
    price: '4,800',
    desciption: '초콜릿과 민트향이 만나 달콤, \n청량한 초코 음료',
    url: `${process.env.PUBLIC_URL}/image/m_c_l.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 21,
    name: '쿠키크림라떼',
    price: '4,800',
    desciption:
      '오레오의 특유의 크리미함과 \n부드러운 우유의 조화를 느낄 수 있는 \n초코 음료',
    url: `${process.env.PUBLIC_URL}/image/cook_la.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 22,
    name: '크림치즈초코라떼',
    price: '5,500',
    desciption:
      '진하고 부드러운 크림치즈에 \n다크초콜릿, 푸짐한 토핑치즈케이크가 \n어우러진 음료',
    url: `${process.env.PUBLIC_URL}/image/cheese_choco_latte.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 23,
    name: '크림치즈딸기라떼',
    price: '5,500',
    desciption:
      '진하고 부드러운 크림치즈에 \n딸기 과육, 푸짐한 토핑치즈케이크가 \n어우러진 음료',
    url: `${process.env.PUBLIC_URL}/image/c_s_l.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 24,
    name: '멜로라떼',
    price: '4,300',
    desciption:
      '달콤한 바닐라빈연유와 신선한 우유, \n마시멜로우가 조화로운 음료',
    url: `${process.env.PUBLIC_URL}/image/mellow.png`,
    category: 'beverage',
    option: 'Hot/Ice',
  },
  {
    id: 25,
    name: '흑당버블라떼',
    price: '5,300',
    desciption: '진하고 달콤한 흑당에 \n쫄깃한 버블이 어우러진 음료',
    url: `${process.env.PUBLIC_URL}/image/b_s_l.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 26,
    name: '복숭아 아이스티',
    price: '3,300',
    desciption: '풍부한 복숭아 향이 가득한 \n달콤한 인기 음료',
    url: `${process.env.PUBLIC_URL}/image/p_i_tea.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 27,
    name: '레몬 아이스티',
    price: '3,300',
    desciption: '상큼한 레몬 향이 가득하고 \n새콤달콤한 인기 음료',
    url: `${process.env.PUBLIC_URL}/image/l_i_tea.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 28,
    name: '레몬에이드',
    price: '4,300',
    desciption: '상큼한 레몬 그리고 탄산의 청량감을 \n즐길 수 있는 달달한 음료',
    url: `${process.env.PUBLIC_URL}/image/l_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 29,
    name: '자몽에이드',
    price: '4,300',
    desciption:
      '자몽의 쌉싸름함과 상큼함 그리고 \n탄산의 청량감을 즐길 수 있는 음료',
    url: `${process.env.PUBLIC_URL}/image/g_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 30,
    name: '청포도에이드',
    price: '4,300',
    desciption:
      '청포도의 상큼함과 달콤함 그리고 \n탄산의 청량감을 즐길 수 있는 음료',
    url: `${process.env.PUBLIC_URL}/image/g_g_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 31,
    name: '딸기레몬에이드',
    price: '5,000',
    desciption: '달콤한 딸기 과육과 상큼한 레몬이 \n어우러진 청량한 탄산음료',
    url: `${process.env.PUBLIC_URL}/image/s_l_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 32,
    name: '블루레몬에이드',
    price: '5,000',
    desciption:
      '레몬의 상큼함과 진한 달콤함 \n그리고 탄산의 청량감을 \n즐길 수 있는 음료',
    url: `${process.env.PUBLIC_URL}/image/b_l_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 33,
    name: '청귤에이드',
    price: '5,000',
    desciption: '청정 제주의 싱그러움을 그대로 담은 \n새콤달콤한 청귤에이드',
    url: `${process.env.PUBLIC_URL}/image/u_ade.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 34,
    name: '요거트스무디',
    price: '5,000',
    desciption: '새콤한 레몬향과 달콤한 요거트가 \n조화로운 요거트스무디',
    url: `${process.env.PUBLIC_URL}/image/yogert_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 35,
    name: '망고스무디',
    price: '5,000',
    desciption: '열대과일 망고가 들어가 \n달콤하고 쫀득한 스무디',
    url: `${process.env.PUBLIC_URL}/image/mang_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 36,
    name: '딸기스무디',
    price: '5,000',
    desciption:
      '딸기 과육이 들어가 새콤달콤함이 \n입안 가득 퍼지는 요거트스무디',
    url: `${process.env.PUBLIC_URL}/image/st_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 37,
    name: '그린티스무디',
    price: '5,000',
    desciption:
      '100% 국내산 녹차와 우유를 사용해 \n고소하고 쌉싸름한 맛의 스무디',
    url: `${process.env.PUBLIC_URL}/image/green_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 38,
    name: '초코칩스무디',
    price: '5,000',
    desciption:
      '다크초콜릿과 부드러운 우유, \n그리고 초코칩이 가득 들어간 \n달콤한 스무디',
    url: `${process.env.PUBLIC_URL}/image/cho_chip_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 39,
    name: '블루베리스무디',
    price: '5,000',
    desciption:
      '블루베리 과육이 들어가 \n상큼함이 입안 가득 퍼지는 \n요거트스무디',
    url: `${process.env.PUBLIC_URL}/image/bb_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 40,
    name: '민트초코스무디',
    price: '5,500',
    desciption:
      '초콜릿과 민트향이 만나 \n달콤하면서도 청량감 있는 \n초코스무디',
    url: `${process.env.PUBLIC_URL}/image/mint_cho_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 41,
    name: '쿠앤크스무디',
    price: '5,000',
    desciption:
      '오레오의 특유의 크리미함과 \n부드러운 우유의 조화를 \n느낄 수 있는 초코스무디',
    url: `${process.env.PUBLIC_URL}/image/cook_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 42,
    name: '크림치즈초코스무디',
    price: '6,300',
    desciption:
      '향미가 풍부하고 부드러운 \n크림치즈와 다크초콜릿, \n푸짐한 토핑치즈케이크가 어우러진 \n시원한 음료',
    url: `${process.env.PUBLIC_URL}/image/cheese_choco_sm.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 43,
    name: '크림치즈딸기스무디',
    price: '6,300',
    desciption:
      '향미가 풍부하고 부드러운 \n크림치즈와 딸기 과육, \n푸짐한 토핑치즈케이크가 어우러진 \n시원한 음료',
    url: `${process.env.PUBLIC_URL}/image/c_s_s.png`,
    category: 'beverage',
    option: 'Only Ice',
  },
  {
    id: 44,
    name: '트로피칼 히비스커스',
    price: '4,500',
    desciption:
      '열대 과일 풍미와 로즈힙, \n히비스커스가 상큼하게 조화를 이루는 \n새콤달콤한 허브차',
    url: `${process.env.PUBLIC_URL}/image/hibiscus.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 45,
    name: '탠저린 진저',
    price: '4,500',
    desciption:
      '알싸한 생강에 감귤 껍질, 감초 \n그리고 오미자차가 연상되는 \n깊은 진홍색의 블렌딩 차',
    url: `${process.env.PUBLIC_URL}/image/tangerine-ginger.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 46,
    name: '유자차',
    price: '3,500',
    desciption: '비타민이 풍부하고 상큼달콤한 \n대표적인 과일 티',
    url: `${process.env.PUBLIC_URL}/image/uza_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 47,
    name: '레몬티',
    price: '3,500',
    desciption: '레몬 과육이 듬뿍 들어가 \n더욱 상큼한 과일 티',
    url: `${process.env.PUBLIC_URL}/image/l_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 48,
    name: '꿀자몽차',
    price: '4,500',
    desciption: '생자몽을 착즙해 과육이 입안에서 \n톡톡 터지는 달콤한 과일 티',
    url: `${process.env.PUBLIC_URL}/image/honey_g.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 49,
    name: '청귤차',
    price: '4,500',
    desciption: '청정 제주의 싱그러움을 그대로 담은 \n새콤달콤한 청귤차',
    url: `${process.env.PUBLIC_URL}/image/u_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 50,
    name: '밀크티 블랙',
    price: '4,500',
    desciption: '프리미엄 홍차를 저온침출한 \n부드럽고 진한 블랙밀크티',
    url: `${process.env.PUBLIC_URL}/image/milk_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 51,
    name: '밀크티 허니',
    price: '4,500',
    desciption: '최고급 홍차에 달콤한 꿀을 더한 \n향긋한 허니밀크티',
    url: `${process.env.PUBLIC_URL}/image/milk_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 52,
    name: '얼그레이',
    price: '4,500',
    desciption:
      '베르가못 오일에서 추출된 \n감귤 및 꽃향기가 풍부한, \n부드럽고 생동감 넘치는 잎차',
    url: `${process.env.PUBLIC_URL}/image/grey_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 53,
    name: '카모마일메들리',
    price: '4,500',
    desciption:
      '진정 효과가 있는 카모마일에 \n언뜻 느껴지는 감귤과 민트의 향이 \n조화롭게 블렌딩된 잎차',
    url: `${process.env.PUBLIC_URL}/image/camo_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 54,
    name: '페퍼민트루이보스',
    price: '4,500',
    desciption:
      '힐링이 되는 달콤한 루이보스와 \n시원한 페퍼민트가 블렌딩된 잎차',
    url: `${process.env.PUBLIC_URL}/image/mint_tea.png`,
    category: 'tea',
    option: 'Hot/Ice',
  },
  {
    id: 55,
    name: '스파이시 치킨 파니니',
    price: '5,500',
    desciption:
      '부드럽게 조리된 닭가슴살, \n까망베르 치즈와 부드럽고 매콤한 \n전용소스가 어우러지는 파니니',
    url: `${process.env.PUBLIC_URL}/image/c-s.png`,
    category: 'dessert',
  },
  {
    id: 56,
    name: '에그 베이컨 파니니',
    price: '5,500',
    desciption:
      '계란후라이와 베이컨의 고소하고 짭짤함, \n머스타드 소스와 치즈의 풍부한 맛! \n남녀노소 누구나 좋아하는 파니니',
    url: `${process.env.PUBLIC_URL}/image/e-b.png`,
    category: 'dessert',
  },
  {
    id: 57,
    name: '연유 바게트',
    price: '3,800',
    desciption: '달콤하고 부드러운 연유크림이 흐르는 \n겉바속촉 바게트',
    url: `${process.env.PUBLIC_URL}/image/condensed.png`,
    category: 'dessert',
  },
  {
    id: 58,
    name: '메이플 크로플',
    price: '3,800',
    desciption: '버터 향과 메이플 시럽의 \n단 맛이 조화로운 베이직 크로플',
    url: `${process.env.PUBLIC_URL}/image/croffle-m.png`,
    category: 'dessert',
  },
  {
    id: 59,
    name: '누텔라 크로플',
    price: '4,300',
    desciption: '악마의 잼, 누텔라가 발라진 초코 크로플',
    url: `${process.env.PUBLIC_URL}/image/croffle-n.png`,
    category: 'dessert',
  },
  {
    id: 60,
    name: '브라운 치즈 크로플',
    price: '4,800',
    desciption:
      '카라멜처럼 쫀득한 식감과 \n치즈의 짭조름함을 모두 잡은 \n브라운치즈가 토핑된 크로플',
    url: `${process.env.PUBLIC_URL}/image/croffle-b.png`,
    category: 'dessert',
  },
  {
    id: 61,
    name: '리얼딸기 마카롱',
    price: '3,100',
    desciption: '새콤한 건딸기와 \n달콤한 필링이 어우러진 마카롱',
    url: `${process.env.PUBLIC_URL}/image/mc-realstraw.png`,
    category: 'dessert',
  },
  {
    id: 62,
    name: '인절미 마카롱',
    price: '3,100',
    desciption: '쫄깃한 떡과 \n고소한 인절미 향이 풍부한 마카롱',
    url: `${process.env.PUBLIC_URL}/image/mc-injulme.png`,
    category: 'dessert',
  },
  {
    id: 63,
    name: '뽀또크래커 마카롱',
    price: '3.100',
    desciption: '짭짤한 과자와 진한 치즈 맛의 \n조화가 잘 어우러진 마카롱',
    url: `${process.env.PUBLIC_URL}/image/mc-bboto.png`,
    category: 'dessert',
  },
  {
    id: 64,
    name: '석기시대 마카롱',
    price: '3,100',
    desciption: '진한 초코와 \n과자의 바삭함이 어우러진 마카롱',
    url: `${process.env.PUBLIC_URL}/image/mc-loly.png`,
    category: 'dessert',
  },
  {
    id: 65,
    name: '오레오뚱즈 마카롱',
    price: '3,100',
    desciption: '달달한 쿠키와 \n오레오 크림이 조화로운 마카롱',
    url: `${process.env.PUBLIC_URL}/image/mc-oreo.png`,
    category: 'dessert',
  },
  {
    id: 66,
    name: '플럼스위티',
    price: '4,300',
    desciption:
      '상큼하고 향긋한 자두블렌딩 차와 \n딸기토핑이 어우러져 새콤달콤한 맛이 \n돋보이는 음료',
    url: `${process.env.PUBLIC_URL}/image/plum.png`,
    category: 'season',
    option: 'Hot/Ice',
  },
  {
    id: 67,
    name: '메리베리뱅쇼',
    price: '4,300',
    desciption:
      '유어일리터만의 블렌딩으로 \n풍부한 과일 토핑을 통해 시간이 지날수록 \n풍미가 더욱 진해지는 뱅쇼',
    url: `${process.env.PUBLIC_URL}/image/van.png`,
    category: 'season',
    option: 'Hot/Ice',
  },
  {
    id: 68,
    name: '청귤블랙티',
    price: '4,000',
    desciption: '새콤한 청귤과 향긋한 홍차가 \n부드럽게 어우러지는 음료',
    url: `${process.env.PUBLIC_URL}/image/black.png`,
    category: 'season',
    option: 'Hot/Ice',
  },
  {
    id: 69,
    name: '생딸기라떼',
    price: '6,000',
    desciption: '싱그러운 생딸기를 듬뿍 담은 \n유어일리터 대표 시그니처 라떼',
    url: `${process.env.PUBLIC_URL}/image/ss_l.png`,
    category: 'season',
    option: 'Only Ice',
  },
  {
    id: 70,
    name: '생딸기주스',
    price: '4,500',
    desciption: '싱그러운 생딸기를 듬뿍 담은 \n유어일리터 대표 시그니처 주스',
    url: `${process.env.PUBLIC_URL}/image/s_j.png`,
    category: 'season',
    option: 'Only Ice',
  },
  {
    id: 71,
    name: '솔티드 카라멜 라떼',
    price: '4,800',
    desciption:
      '달콤한 카라멜 음료 위에 올라간 \n부드러운 크림, 그라인딩된 소금의 \n미묘한 짭짤함, 단짠단짠 조화를 이루는 음료',
    url: `${process.env.PUBLIC_URL}/image/solted-l.png`,
    category: 'season',
    option: 'Only Ice',
  },
  {
    id: 72,
    name: '솔티드 카라멜 샷',
    price: '4,800',
    desciption:
      '솔티드 카라멜과 고소하고 산뜻한 \n에스프레소의 하모니, 단짠단짠과 더불어 \n묵직한 바디감을 느낄 수 있는 음료',
    url: `${process.env.PUBLIC_URL}/image/solted-s.png`,
    category: 'season',
    option: 'Only Ice',
  },
  {
    id: 73,
    name: '땅콩카라멜 라떼',
    price: '4,300',
    desciption:
      '남녀노소 누구나 알고 있는 고소하고 \n달달한 땅콩카라멜 맛! 부드럽고 달달한 \n과자 토핑도 잔뜩 :)',
    url: `${process.env.PUBLIC_URL}/image/p-c.png`,
    category: 'season',
    option: 'Hot/Ice',
  },
  {
    id: 74,
    name: '에티오피아 시다모 핸드드립',
    desciption: 'Ethiopia Sidamo',
    url: `${process.env.PUBLIC_URL}/image/ethiopia.png`,
    category: 'md',
  },
  {
    id: 75,
    name: '코스타리카 따라주 핸드드립',
    desciption: 'Costa Rica Tarrazu',
    url: `${process.env.PUBLIC_URL}/image/costa.png`,
    category: 'md',
  },
  {
    id: 76,
    name: '케냐 AA 핸드드립',
    desciption: 'Kenya AA',
    url: `${process.env.PUBLIC_URL}/image/kenya.png`,
    category: 'md',
  },
  {
    id: 77,
    name: '베이직 머그컵 흰색',
    desciption: 'IM1L Bagic Mug',
    url: `${process.env.PUBLIC_URL}/image/mugwhite.png`,
    category: 'md',
  },
  {
    id: 78,
    name: '베이직 머그컵 로즈골드',
    desciption: 'IM1L Bagic Mug',
    url: `${process.env.PUBLIC_URL}/image/mugrose.png`,
    category: 'md',
  },
  {
    id: 79,
    name: '유어일리터 트라이탄컵 L',
    desciption: 'IM1L Tritan Cup L',
    url: `${process.env.PUBLIC_URL}/image/tritan1l.png`,
    category: 'md',
  },
  {
    id: 80,
    name: '유어일리터 트라이탄컵 M',
    desciption: 'IM1L Tritan Cup M',
    url: `${process.env.PUBLIC_URL}/image/tritanxl.png`,
    category: 'md',
  },
];
