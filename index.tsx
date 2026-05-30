

// KAKAO SDK Type Declaration is removed as it's no longer needed.

interface Product {
    id: string;
    name: string;
    category: '인기프로그램' | '뉴트리션' | '스킨케어' | '바디&헬스리빙' | '프로그램&팩' | '비지니스도구';
    subCategory: string;
    price: number;
    points: number;
    discountable: boolean;
    componentText?: string;
    searchableText?: string;
}

const baseProducts: Product[] = [
    // 뉴트리션
    { id: '100', name: '헬스팩', category: '뉴트리션', subCategory: '헬스팩 & 기초영양', price: 158000, points: 60, discountable: true },
    { id: '101', name: '셀센셜즈', category: '뉴트리션', subCategory: '헬스팩 & 기초영양', price: 109000, points: 42, discountable: true },
    { id: '105', name: '유사니멀즈', category: '뉴트리션', subCategory: '헬스팩 & 기초영양', price: 39000, points: 13, discountable: true },
    { id: '122', name: '바이오메가', category: '뉴트리션', subCategory: '헬스팩 & 기초영양', price: 44500, points: 16, discountable: true },
    { id: '108', name: '프로바이오틱', category: '뉴트리션', subCategory: '옵티마이저', price: 36500, points: 15, discountable: true },
    { id: '109', name: '비타민D', category: '뉴트리션', subCategory: '옵티마이저', price: 22000, points: 10, discountable: true },
    { id: '186', name: '써큘레이트 플러스', category: '뉴트리션', subCategory: '옵티마이저', price: 97000, points: 39, discountable: true },
    { id: '110', name: '프로후라바놀 C300', category: '뉴트리션', subCategory: '옵티마이저', price: 53500, points: 24, discountable: true },
    { id: '137', name: '프로후라바놀 C600', category: '뉴트리션', subCategory: '옵티마이저', price: 52400, points: 24, discountable: true },
    { id: '111', name: '알로엔즈 플러스', category: '뉴트리션', subCategory: '옵티마이저', price: 68000, points: 26, discountable: true },
    { id: '113', name: '비전엑스 디에스', category: '뉴트리션', subCategory: '옵티마이저', price: 47200, points: 21, discountable: true },
    { id: '120', name: '마그네칼D', category: '뉴트리션', subCategory: '옵티마이저', price: 36000, points: 14, discountable: true },
    { id: '123', name: '코퀴논30', category: '뉴트리션', subCategory: '옵티마이저', price: 54500, points: 21, discountable: true },
    { id: '124', name: 'E-프라임', category: '뉴트리션', subCategory: '옵티마이저', price: 57000, points: 19, discountable: true },
    { id: '129', name: '이소플라본 플러스', category: '뉴트리션', subCategory: '옵티마이저', price: 38500, points: 15, discountable: true },
    { id: '130', name: '폴리 C', category: '뉴트리션', subCategory: '옵티마이저', price: 31500, points: 12, discountable: true },
    { id: '131', name: '프로코사 글루코사민', category: '뉴트리션', subCategory: '옵티마이저', price: 58500, points: 22, discountable: true },
    { id: '135', name: '헤파실 플러스', category: '뉴트리션', subCategory: '옵티마이저', price: 59500, points: 25, discountable: true },
    { id: '143', name: '부스터 C600', category: '뉴트리션', subCategory: '옵티마이저', price: 45000, points: 15, discountable: true },
    { id: '146', name: '프로글루카뮨', category: '뉴트리션', subCategory: '옵티마이저', price: 65500, points: 25, discountable: true },
    { id: '147', name: '메타볼리즘 플러스', category: '뉴트리션', subCategory: '체중조절', price: 56000, points: 22, discountable: true },
    { id: '270', name: '뉴트리밀 액티브 소이 - 초코렛맛', category: '뉴트리션', subCategory: '체중조절', price: 83000, points: 25, discountable: true },
    { id: '271', name: '뉴트리밀 액티브 소이 - 바닐라맛', category: '뉴트리션', subCategory: '체중조절', price: 83000, points: 25, discountable: true },
    { id: '259', name: '뉴트리밀 액티브 - 초코렛맛 (개별포장 - 14개입)', category: '뉴트리션', subCategory: '체중조절', price: 88000, points: 22, discountable: true },
    { id: '255', name: '뉴트리밀 액티브 - 바닐라맛 (개별포장 - 14개입)', category: '뉴트리션', subCategory: '체중조절', price: 88000, points: 22, discountable: true },
    { id: '210', name: '뉴트리밀 - 더치 초콜릿맛', category: '뉴트리션', subCategory: '체중조절', price: 53500, points: 17, discountable: true },
    { id: '211', name: '뉴트리밀 - 프렌치 바닐라맛', category: '뉴트리션', subCategory: '체중조절', price: 53500, points: 17, discountable: true },
    { id: '212', name: '뉴트리밀 - 와일드 스트로베리맛', category: '뉴트리션', subCategory: '체중조절', price: 53500, points: 17, discountable: true },
    { id: '218', name: '뉴트리밀 - 카푸치노맛', category: '뉴트리션', subCategory: '체중조절', price: 53500, points: 17, discountable: true },
    { id: '178', name: '코어아미노 드링크', category: '뉴트리션', subCategory: '체중조절', price: 88000, points: 35, discountable: true },
    { id: '116', name: '유기농 곡물 효소', category: '뉴트리션', subCategory: '장내 환경 개선', price: 57000, points: 22, discountable: true },
    { id: '224', name: '에프오에스 액티브', category: '뉴트리션', subCategory: '장내 환경 개선', price: 43500, points: 14, discountable: true },
    { id: '226', name: '화이버지 플러스', category: '뉴트리션', subCategory: '장내 환경 개선', price: 51000, points: 17, discountable: true },
    { id: '158', name: '피지 에너지 드링크 - 시트러스 베리맛', category: '뉴트리션', subCategory: '에너지 & 수분 보충', price: 63000, points: 22, discountable: true },
    { id: '201', name: '허브 티 믹스 - 페퍼민트맛', category: '뉴트리션', subCategory: '에너지 & 수분 보충', price: 38000, points: 12, discountable: true },
    { id: '242', name: '액티브 미네랄 드링크 믹스 - 수박맛', category: '뉴트리션', subCategory: '에너지 & 수분 보충', price: 54500, points: 16, discountable: true },
    // 스킨케어 (할인 불가)
    { id: '330', name: '컨디셔닝 메이크업 리무버', category: '스킨케어', subCategory: '셀라비브', price: 33000, points: 16, discountable: false },
    { id: '331', name: '퍼펙팅 토너', category: '스킨케어', subCategory: '셀라비브', price: 44500, points: 19, discountable: false },
    { id: '333', name: '크리미 폼 클렌저', category: '스킨케어', subCategory: '셀라비브', price: 41000, points: 18, discountable: false },
    { id: '334', name: '프로텍티브 데이 로션', category: '스킨케어', subCategory: '셀라비브', price: 44000, points: 19, discountable: false },
    { id: '335', name: '프로텍티브 데이 크림', category: '스킨케어', subCategory: '셀라비브', price: 44000, points: 19, discountable: false },
    { id: '336', name: '리플레니싱 나이트 젤', category: '스킨케어', subCategory: '셀라비브', price: 58000, points: 27, discountable: false },
    { id: '337', name: '리플레니싱 나이트 크림', category: '스킨케어', subCategory: '셀라비브', price: 58000, points: 27, discountable: false },
    { id: '339', name: '바이탈라이징 세럼', category: '스킨케어', subCategory: '셀라비브', price: 58000, points: 27, discountable: false },
    { id: '340', name: '하이드레이팅 아이 에센스', category: '스킨케어', subCategory: '셀라비브', price: 64000, points: 29, discountable: false },
    { id: '341', name: '엑스폴레이팅 스크럽 마스크', category: '스킨케어', subCategory: '셀라비브', price: 51000, points: 23, discountable: false },
    { id: '342', name: '하이드레이팅 시트 마스크', category: '스킨케어', subCategory: '셀라비브', price: 33000, points: 12, discountable: false },
    { id: '344', name: '브라이트닝 루미너스 모이스처 크림', category: '스킨케어', subCategory: '셀라비브', price: 68000, points: 31, discountable: false },
    { id: '345', name: '래디언트 페이셜 오일', category: '스킨케어', subCategory: '셀라비브', price: 72000, points: 31, discountable: false },
    { id: '355', name: '리서페이싱 앰플 세럼', category: '스킨케어', subCategory: '셀라비브', price: 120000, points: 55, discountable: false },
    { id: '366', name: '배리어 밤', category: '스킨케어', subCategory: '셀라비브 포스트바이오틱', price: 48000, points: 22, discountable: false },
    { id: '367', name: '레스큐 세럼', category: '스킨케어', subCategory: '셀라비브 포스트바이오틱', price: 64000, points: 29, discountable: false },
    { id: '368', name: '카밍 클렌저', category: '스킨케어', subCategory: '셀라비브 포스트바이오틱', price: 55000, points: 22, discountable: false },
    { id: '369', name: '수딩 모이스처라이저', category: '스킨케어', subCategory: '셀라비브 포스트바이오틱', price: 64000, points: 29, discountable: false },
    // 바디&헬스리빙
    { id: '311', name: '에너자이징 샤워젤', category: '바디&헬스리빙', subCategory: '선세이 (바디&헤어)', price: 23000, points: 7, discountable: true },
    { id: '312', name: '리바이탈라이징 샴푸', category: '바디&헬스리빙', subCategory: '선세이 (바디&헤어)', price: 23000, points: 7, discountable: true },
    { id: '313', name: '너리싱 컨디셔너', category: '바디&헬스리빙', subCategory: '선세이 (바디&헤어)', price: 23000, points: 7, discountable: true },
    { id: '314', name: '퍼밍 바디 너리셔', category: '바디&헬스리빙', subCategory: '선세이 (바디&헤어)', price: 35000, points: 18, discountable: true },
    { id: '398', name: '유사나 바이오 화이트 치약', category: '바디&헬스리빙', subCategory: '헬스리빙', price: 7300, points: 2, discountable: true },
    { id: '476', name: '유사나 바이오 화이트 치약 5개 특별팩', category: '바디&헬스리빙', subCategory: '헬스리빙', price: 36500, points: 10, discountable: true },
    { id: '318.550', name: '유사나 포밍 핸드 워시 - 펌프포함', category: '바디&헬스리빙', subCategory: '헬스리빙', price: 9600, points: 3, discountable: true },
    { id: '318.500', name: '유사나 포밍 핸드 워시 - 리필용', category: '바디&헬스리빙', subCategory: '헬스리빙', price: 8500, points: 3, discountable: true },
    // 프로그램&팩
    { id: '416.500', name: '헬라챌 1단계 프로그램 - 더치 초코렛맛', category: '프로그램&팩', subCategory: '헬시 라이프스타일 챌린지', price: 467000, points: 167, discountable: true },
    { id: '979.502', name: '헬라챌 2단계 프로그램 - 소이 초코렛맛', category: '프로그램&팩', subCategory: '헬시 라이프스타일 챌린지', price: 526000, points: 183, discountable: true },
    { id: '424.500', name: '헬라챌 3단계 프로그램 - 더치 초코렛맛', category: '프로그램&팩', subCategory: '헬시 라이프스타일 챌린지', price: 715500, points: 255, discountable: true },
    { id: '407.500', name: '헬라챌 4단계 프로그램 - 소이 초코렛맛', category: '프로그램&팩', subCategory: '헬시 라이프스타일 챌린지', price: 774500, points: 271, discountable: true },
    { id: '950', name: '바디 선물세트', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 58000, points: 24, discountable: true },
    { id: '953', name: '어린이 선물세트', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 75500, points: 25, discountable: true },
    { id: '442', name: '항산화 선물세트', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 108000, points: 43, discountable: true },
    { id: '418', name: '[신규회원] 유사나 스타트 팩', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 1507000, points: 549, discountable: true },
    { id: '159', name: '에너지 리프레시 팩', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 189000, points: 66, discountable: true },
    { id: '604', name: '4배 건강 유사나 헬스팩 세트', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 632000, points: 240, discountable: true },
    { id: '350', name: '셀라비브 풀 팩 (10종)', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 485500, points: 219, discountable: false },
    { id: '353.502', name: '셀라비브 디럭스 팩 (민감성,건성 6종)', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 293500, points: 118, discountable: false },
    { id: '353.511', name: '셀라비브 디럭스 팩 (복합성,지성 6종)', category: '프로그램&팩', subCategory: '선물세트 & 패키지', price: 293500, points: 118, discountable: false },
    // 비지니스 도구 (할인 불가)
    { id: '450.502', name: '스타터킷', category: '비지니스도구', subCategory: '비지니스도구', price: 20000, points: 0, discountable: false },
    { id: '500.511', name: '회사소개서', category: '비지니스도구', subCategory: '비지니스도구', price: 1000, points: 0, discountable: false },
    { id: '719.500', name: '멀티 스포츠백 (블랙)', category: '비지니스도구', subCategory: '비지니스도구', price: 61000, points: 0, discountable: false },
    { id: '752.007', name: '마이스마트 쉐이커 (대)-코랄', category: '비지니스도구', subCategory: '비지니스도구', price: 16000, points: 0, discountable: false },
    { id: '752.011', name: '마이스마트 쉐이커 (3단)-핑크', category: '비지니스도구', subCategory: '비지니스도구', price: 17000, points: 0, discountable: false },
];

interface ProgramDefinition {
  id: string;
  name: string;
  components: { productId: string; quantity: number }[];
}

const programDefinitions: ProgramDefinition[] = [
    { id: 'P01', name: '🏆 베스트 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '111', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '110', quantity: 1 }, { productId: '108', quantity: 1 }, { productId: '123', quantity: 1 }, { productId: '135', quantity: 1 }, { productId: '113', quantity: 1 }] },
    { id: 'P02', name: '⭐ 기초영양 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '110', quantity: 1 }, { productId: '108', quantity: 1 }] },
    { id: 'P03', name: '🌿 장 건강 프로그램', components: [{ productId: '135', quantity: 1 }, { productId: '111', quantity: 2 }, { productId: '226', quantity: 2 }, { productId: '108', quantity: 2 }, { productId: '116', quantity: 1 }] },
    { id: 'P04', name: '⚡ 활력 건강 프로그램', components: [{ productId: '110', quantity: 1 }, { productId: '143', quantity: 1 }, { productId: '124', quantity: 1 }, { productId: '123', quantity: 1 }, { productId: '135', quantity: 1 }] },
    { id: 'P05', name: '💪 뼈/관절 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '131', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '109', quantity: 1 }] },
    { id: 'P06', name: '👀 눈 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '113', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '110', quantity: 1 }] },
    { id: 'P07', name: '🩸 혈행(혈압) 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '110', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '123', quantity: 1 }] },
    { id: 'P08', name: '🤧 환절기 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '146', quantity: 1 }, { productId: '110', quantity: 1 }] },
    { id: 'P09', name: '🛡️ 면역 건강 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '146', quantity: 1 }, { productId: '108', quantity: 2 }, { productId: '110', quantity: 1 }, { productId: '109', quantity: 1 }] },
    { id: 'P10', name: '🥗 세상에서 가장 건강한 식사 한 끼', components: [{ productId: '100', quantity: 1 }, { productId: '122', quantity: 1 }, { productId: '259', quantity: 2 }] },
    { id: 'P11', name: '⚾ 1500억 이정후 구독 프로그램', components: [{ productId: '100', quantity: 1 }, { productId: '270', quantity: 2 }, { productId: '242', quantity: 1 }, { productId: '143', quantity: 1 }] },
];

const programProducts: Product[] = programDefinitions.map(progDef => {
    let totalPrice = 0;
    let totalPoints = 0;
    let isDiscountable = true;
    
    const componentText = '( ' + progDef.components.map(comp => {
        const product = baseProducts.find(p => p.id === comp.productId);
        if (product) {
            totalPrice += product.price * comp.quantity;
            totalPoints += product.points * comp.quantity;
            if (!product.discountable) {
                isDiscountable = false;
            }
            return `${product.name} x ${comp.quantity}`;
        }
        return '';
    }).filter(Boolean).join(', ') + ' )';

    return {
        id: progDef.id,
        name: progDef.name,
        category: '인기프로그램',
        subCategory: '추천 프로그램',
        price: totalPrice,
        points: totalPoints,
        discountable: isDiscountable,
        componentText: componentText
    };
});

const Hangul = {
    chosung: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
    isHangul: (char: string) => char.charCodeAt(0) >= 0xAC00 && char.charCodeAt(0) <= 0xD7A3,
    getChosung: (char: string) => {
        if (!Hangul.isHangul(char)) return char;
        const chosungIndex = Math.floor((char.charCodeAt(0) - 0xAC00) / 588);
        return Hangul.chosung[chosungIndex];
    },
    search: (text: string, query: string): boolean => {
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        if (lowerText.includes(lowerQuery)) return true;
        const textChosung = [...text].map(Hangul.getChosung).join('');
        return textChosung.includes(lowerQuery);
    }
};

const products: Product[] = [...programProducts, ...baseProducts].map(p => ({
    ...p,
    searchableText: (p.id + p.name + (p.componentText || '')).toLowerCase()
}));


interface CategoryInfo {
    name: '인기프로그램' | '뉴트리션' | '스킨케어' | '바디&헬스리빙' | '프로그램&팩' | '비지니스도구';
    subCategories: string[];
    discountable: boolean;
}

const categoriesInOrder: CategoryInfo[] = [
    { name: '인기프로그램', subCategories: ['추천 프로그램'], discountable: true },
    { name: '뉴트리션', subCategories: ['헬스팩 & 기초영양', '옵티마이저', '체중조절', '장내 환경 개선', '에너지 & 수분 보충'], discountable: true },
    { name: '스킨케어', subCategories: ['셀라비브', '셀라비브 포스트바이오틱'], discountable: false },
    { name: '바디&헬스리빙', subCategories: ['선세이 (바디&헤어)', '헬스리빙'], discountable: true },
    { name: '프로그램&팩', subCategories: ['헬시 라이프스타일 챌린지', '선물세트 & 패키지'], discountable: true },
    { name: '비지니스도구', subCategories: ['비지니스도구'], discountable: false }
];

// App State
let quantities: { [productId: string]: number } = {};
let showOnlySelected = false;
let expandedPrograms: Set<string> = new Set();
let searchTerm = '';

const root = document.getElementById('root');
if (!root) throw new Error("Root element not found");

// --- UTILITIES ---
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: number | undefined;
    return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;
        clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(context, args), wait);
    };
}

function getHighlightedHTML(text: string, query: string): string {
    if (!query || !text) return text;
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    
    const startIndex = lowerText.indexOf(lowerQuery);
    if (startIndex !== -1) {
        const matchedText = text.substring(startIndex, startIndex + query.length);
        return text.substring(0, startIndex) + `<strong>${matchedText}</strong>` + text.substring(startIndex + query.length);
    }
    
    // For chosung highlighting
    const textChosung = [...text].map(Hangul.getChosung).join('');
    const chosungStartIndex = textChosung.indexOf(lowerQuery);
    if (chosungStartIndex !== -1) {
        let highlighted = '';
        let currentPos = 0;
        let queryPos = 0;
        let matchStart = -1;
        
        for (let i = 0; i < text.length; i++) {
            if (queryPos < query.length && Hangul.getChosung(text[i]) === lowerQuery[queryPos]) {
                if (matchStart === -1) matchStart = i;
                queryPos++;
            } else {
                if(matchStart !== -1){
                     highlighted += `<strong>${text.substring(matchStart, i)}</strong>`;
                     matchStart = -1;
                }
                 highlighted += text[i];
                 queryPos = 0;
                  if (queryPos < query.length && Hangul.getChosung(text[i]) === lowerQuery[queryPos]) {
                    if (matchStart === -1) matchStart = i;
                    queryPos++;
                }
            }
        }
        if(matchStart !== -1){
            highlighted += `<strong>${text.substring(matchStart)}</strong>`;
        }

        if(queryPos === query.length) return highlighted;
    }

    return text;
}


// --- State Persistence ---
function saveState() {
    try {
        const appState = { quantities, showOnlySelected, expandedPrograms: Array.from(expandedPrograms) };
        localStorage.setItem('usanaCalculatorState', JSON.stringify(appState));
    } catch (error) {
        console.error("Could not save state to localStorage", error);
    }
}

function loadState() {
    try {
        const serializedState = localStorage.getItem('usanaCalculatorState');
        if (serializedState === null) return;
        const savedState = JSON.parse(serializedState);
        quantities = savedState.quantities || {};
        showOnlySelected = savedState.showOnlySelected || false;
        expandedPrograms = new Set(savedState.expandedPrograms || []);
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        quantities = {};
        showOnlySelected = false;
        expandedPrograms = new Set();
    }
}

// --- Event Handlers & Core Logic ---
const actions = {
    increment: (id: string) => {
        quantities[id] = (quantities[id] || 0) + 1;
        saveState();
        render();
    },
    decrement: (id: string) => {
        if (quantities[id] > 0) {
            quantities[id]--;
            if (quantities[id] === 0) delete quantities[id];
        }
        saveState();
        render();
    },
    reset: () => {
        quantities = {};
        showOnlySelected = false;
        expandedPrograms = new Set();
        searchTerm = '';
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        if(searchInput) searchInput.value = '';
        localStorage.removeItem('usanaCalculatorState');
        try {
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
            console.warn("Could not replace history state:", e);
        }
        render();
    },
    toggleView: () => {
        showOnlySelected = !showOnlySelected;
        saveState();
        render();
    },
    toggleProgram: (id: string) => {
        expandedPrograms.has(id) ? expandedPrograms.delete(id) : expandedPrograms.add(id);
        saveState();
        render();
    },
    clearSearch: () => {
        searchTerm = '';
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        if(searchInput) searchInput.value = '';
        render();
    },
    copyLink: () => {
        if (Object.keys(quantities).length === 0) {
            alert("공유할 상품을 먼저 선택해주세요.");
            return;
        }
        try {
            const serializedCart = btoa(JSON.stringify(quantities));
            const shareUrl = `${window.location.origin}${window.location.pathname}?cart=${serializedCart}`;
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert("공유 링크가 복사되었습니다.");
            }, () => {
                alert("링크 복사에 실패했습니다.");
            });
        } catch (e) {
            console.error("Failed to create share link", e);
            alert("공유 링크 생성에 실패했습니다.");
        }
    }
};

const handleSearchInput = debounce((event: Event) => {
    const input = event.target as HTMLInputElement;
    searchTerm = input.value;
    render();
}, 300);

function handleDelegatedClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const actionElement = target.closest('[data-action]') as HTMLElement;
    if (!actionElement) return;

    const action = actionElement.dataset.action as keyof typeof actions;
    const id = actionElement.dataset.id;

    if (actions[action]) {
        if (id) {
             (actions[action] as (id: string) => void)(id);
        } else {
             (actions[action] as () => void)();
        }
    }
}


// --- Render function ---
function render() {
    let totalMemberPrice = 0;
    let totalAutoShipPrice = 0;
    let totalPoints = 0;

    Object.entries(quantities).forEach(([id, qty]) => {
        const product = products.find(p => p.id === id);
        if (product && qty > 0) {
            const memberPrice = product.price * qty;
            totalMemberPrice += memberPrice;
            totalAutoShipPrice += product.discountable ? memberPrice * 0.9 : memberPrice;
            totalPoints += product.points * qty;
        }
    });

    let filteredProducts = products;
    const hasSearchTerm = searchTerm.trim() !== '';

    if (showOnlySelected) {
        // "선택보기" 모드: 선택된 제품과 검색 결과를 함께 보여줍니다.
        filteredProducts = products.filter(p => {
            const isSelected = quantities[p.id] > 0;
            if (!hasSearchTerm) {
                return isSelected; // 검색어가 없으면 선택된 것만 표시
            }
            // 검색어가 있으면 선택된 항목 또는 검색과 일치하는 항목 표시
            const matchesSearch = Hangul.search(p.searchableText!, searchTerm) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
            return isSelected || matchesSearch;
        });
    } else if (hasSearchTerm) {
        // "전체보기" 모드: 검색 결과만 필터링합니다.
        filteredProducts = products.filter(p => Hangul.search(p.searchableText!, searchTerm) || p.id.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    let productRowsHTML = '';
    if (filteredProducts.length === 0) {
        productRowsHTML = `<div class="empty-state-message">${showOnlySelected && !searchTerm ? '선택된 제품이 없습니다.' : '검색 결과가 없습니다.'}</div>`;
    } else {
         productRowsHTML = categoriesInOrder.map(categoryInfo => {
            const categoryProducts = filteredProducts.filter(p => p.category === categoryInfo.name);
            if (categoryProducts.length === 0) return '';
        
            return `
                <div class="product-category">${categoryInfo.name} ${!categoryInfo.discountable ? '(정기배송 10% 할인 제외)' : ''}</div>
                ${categoryInfo.subCategories.map(subCategory => {
                    const subCategoryProducts = categoryProducts.filter(p => p.subCategory === subCategory);
                    if (subCategoryProducts.length === 0) return '';

                    return `
                        <div class="product-subcategory">${subCategory}</div>
                        ${subCategoryProducts.map(p => {
                            const isProgram = p.category === '인기프로그램';
                            const isExpanded = isProgram && expandedPrograms.has(p.id);
                        
                            return `
                            <div class="product-row ${isProgram ? 'program-row' : ''} ${isExpanded ? 'expanded' : ''}" data-action="toggleProgram" data-id="${p.id}">
                                <div class="product-cell id">${p.id}</div>
                                <div class="product-cell name">
                                    ${isProgram ? `
                                        <div class="program-title">
                                            <span class="expand-icon"></span>
                                            <span>${getHighlightedHTML(p.name, searchTerm)}</span>
                                        </div>
                                        <div class="product-components">${p.componentText || ''}</div>
                                    ` : `
                                        ${getHighlightedHTML(p.name, searchTerm)}
                                    `}
                                </div>
                                <div class="product-cell price">${p.price.toLocaleString()}원</div>
                                <div class="product-cell points">${p.points}P</div>
                                <div class="product-cell quantity-add-desktop">
                                    <button class="quantity-btn increment-btn" data-action="increment" data-id="${p.id}" aria-label="더하기">+</button>
                                </div>
                                <div class="product-cell quantity-num-desktop">
                                    <div class="quantity-display">${quantities[p.id] || 0}</div>
                                </div>
                                <div class="product-cell quantity-rem-desktop">
                                    <button class="quantity-btn decrement-btn" data-action="decrement" data-id="${p.id}" aria-label="빼기">-</button>
                                </div>
                                <div class="product-cell details">
                                    <span class="mobile-label">가격: ${p.price.toLocaleString()}원</span>
                                    <span class="mobile-label"> / 점수: ${p.points}P</span>
                                </div>
                                <div class="product-cell actions">
                                    <div class="quantity-control">
                                        <button class="quantity-btn increment-btn" data-action="increment" data-id="${p.id}" aria-label="더하기">+</button>
                                        <div class="quantity-display">${quantities[p.id] || 0}</div>
                                        <button class="quantity-btn decrement-btn" data-action="decrement" data-id="${p.id}" aria-label="빼기">-</button>
                                    </div>
                                </div>
                            </div>
                        `}).join('')}
                    `;
                }).join('')}
            `;
        }).join('');
    }

    const appHTML = `
        <div class="app-container">
            <div class="main-header-sticky">
                <header class="header">
                    <h1>유사나 쇼핑 계산기</h1>
                    <h2 class="subtitle">made by KDY</h2>
                    <div class="header-controls-wrapper">
                         <div class="search-bar">
                            <input type="text" id="search-input" class="search-input" placeholder="제품명, 품번, 초성으로 검색" value="${searchTerm}">
                             ${searchTerm ? `<button class="search-clear-btn" data-action="clearSearch" aria-label="검색어 지우기">&times;</button>` : ''}
                        </div>
                    </div>
                    <div class="controls">
                        <a href="https://issuu.com/usanakorea/docs/_18b387dc56d8e8" target="_blank" class="btn btn-manual">유사나 전제품 설명서</a>
                        <button class="btn btn-reset" data-action="reset">초기화</button>
                        <button class="btn btn-toggle" data-action="toggleView">${showOnlySelected ? '전체보기' : '선택보기'}</button>
                        <button class="btn btn-copy" data-action="copyLink" aria-label="링크 복사">링크 복사</button>
                    </div>
                </header>
                
                <section class="summary-container">
                    <div class="summary-card"><h3>멤버십 가격</h3><p>₩${totalMemberPrice.toLocaleString()}</p></div>
                    <div class="summary-card"><h3>정기배송 가격</h3><p>₩${totalAutoShipPrice.toLocaleString()}</p></div>
                    <div class="summary-card"><h3>실적 점수</h3><p>${totalPoints.toLocaleString()} P</p></div>
                </section>
            </div>

            <section class="product-list-container">
                 <div class="product-list-header">
                    <div>품번</div><div style="text-align:left;">제품명</div><div>가격</div><div>점수</div><div>더하기</div><div>수량</div><div>빼기</div>
                </div>
                ${productRowsHTML}
            </section>
        </div>
    `;

    root.innerHTML = appHTML;

    // Attach search listener separately as it's not a click event
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        // Set focus back to search input after render
        if (document.activeElement !== searchInput) {
            searchInput.focus();
            (searchInput as HTMLInputElement).selectionStart = (searchInput as HTMLInputElement).selectionEnd = searchTerm.length;
        }
    }
}

// --- Initial setup ---
function initializeApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const cartDataFromUrl = urlParams.get('cart');

    if (cartDataFromUrl) {
        try {
            const decodedQuantities = JSON.parse(atob(cartDataFromUrl));
            if (typeof decodedQuantities === 'object' && decodedQuantities !== null) {
                quantities = decodedQuantities;
                showOnlySelected = true;
                try {
                    window.history.replaceState({}, document.title, window.location.pathname);
                } catch (e) {
                    console.warn("Could not replace history state:", e);
                }
            } else {
                 loadState();
            }
        } catch (e) {
            console.error("Failed to parse cart data from URL", e);
            loadState();
        }
    } else {
        loadState();
    }
    render();
}

root.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    // Specific check to prevent program row from toggling when a button is clicked
    if(target.closest('button')){
        handleDelegatedClick(e as MouseEvent);
    } else if (target.closest('.program-row')){
        const actionElement = target.closest('[data-action="toggleProgram"]') as HTMLElement;
        if(actionElement){
            actions.toggleProgram(actionElement.dataset.id!);
        }
    } else {
         handleDelegatedClick(e as MouseEvent);
    }
});

initializeApp();

export {};