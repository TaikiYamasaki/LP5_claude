// dc-runtime evaluates this Component class from the inline
// <script type="text/x-dc" data-dc-script> tag's text content (it needs
// the literal source text, not an executed class, since DCLogic is only
// injected into scope at eval time). We keep the source here as a string
// and a small loader in the HTML copies it into that tag before the
// runtime boots. Loading this file via <script src> (rather than fetch/XHR)
// keeps it working even when the page is opened directly as a local file.
window.__DC_COMPONENT_SRC = `
class Component extends DCLogic {
  state = { menuOpen: false, pop: 0, set: 0, camp: 0, area: '', near: '', note: '' };

  step(key, dir, max, e) {
    if (e) e.preventDefault();
    this.setState(s => ({ [key]: Math.min(max, Math.max(0, s[key] + dir)) }));
  }

  renderVals() {
    const popular = [
      { name: 'サニーチーズバーガー', price: '¥680', slot: 'sb-pop1', img: './uploads/サニーチーズバーガー.png' },
      { name: 'アボカドバーガー', price: '¥720', slot: 'sb-pop2', img: './uploads/アボカドバーガー.png' },
      { name: 'テリヤキバーガー', price: '¥650', slot: 'sb-pop3', img: './uploads/テリヤキバーガー.png' },
      { name: 'ベーコンエッグバーガー', price: '¥750', slot: 'sb-pop4', img: './uploads/ベーコンエッグバーガー.png' },
      { name: 'スパイシーチキンバーガー', price: '¥620', slot: 'sb-pop5', img: './uploads/スパイシーチキンバーガー.png' },
      { name: 'ダブルビーフバーガー', price: '¥890', slot: 'sb-pop6', img: './uploads/ダブルビーフバーガー.png' },
      { name: 'フィッシュバーガー', price: '¥590', slot: 'sb-pop7', img: './uploads/フィッシュバーガー.png' }
    ];
    const sets = [
      { name: 'サニーチーズバーガーセット', price: '¥1,050', slot: 'sb-set1', img: './uploads/チーズバーガーセット.png' },
      { name: 'アボカドバーガーセット', price: '¥1,090', slot: 'sb-set2', img: './uploads/アボカドバーガーセット.png' },
      { name: 'テリヤキバーガーセット', price: '¥990', slot: 'sb-set3', img: './uploads/テリヤキバーガーセット.png' },
      { name: 'ベーコンエッグバーガーセット', price: '¥1,120', slot: 'sb-set4', img: './uploads/ベーコンエッグチーズバーガーセット.png' }
    ];
    const camps = [
      { tag: '平日ランチ限定', title: 'ポテト＆ドリンクセットが', price: '¥100 OFF!', bg: 'linear-gradient(140deg,#FFD447,#FFB800)', fg: '#4A3527', slot: 'sb-camp1', img: './uploads/ポテトとコーラ.png' },
      { tag: '夏の新定番', title: 'サニーレモネード', price: '¥380', bg: 'linear-gradient(140deg,#7ECBE8,#B8E6F5)', fg: '#0F5470', slot: 'sb-camp2', img: './uploads/レモンソーダ.png' },
      { tag: 'スパイシー新登場！', title: 'ハラペーニョチーズバーガー', price: '¥730', bg: 'linear-gradient(140deg,#F5921E,#FFB65C)', fg: '#4A2A05', slot: 'sb-camp3', img: './uploads/ハラペーニョチーズバーガー.png' },
      { tag: 'おもちゃ付き！', title: 'キッズセット', price: '¥500', bg: 'linear-gradient(140deg,#F79BB8,#FFC2D5)', fg: '#7A2244', slot: 'sb-camp4', img: './uploads/キッズセット.png' },
      { tag: '10:30まで', title: 'モーニングセット', price: '¥450', bg: 'linear-gradient(140deg,#A8D082,#C9E5AC)', fg: '#2F4D16', slot: 'sb-camp5', img: './uploads/モーニングセット.png' },
      { tag: '夏季限定', title: 'マンゴーシェイク', price: '¥490', bg: 'linear-gradient(140deg,#FFB03A,#FFD08A)', fg: '#5A3305', slot: 'sb-camp6', img: './uploads/マンゴーシェイク.png' }
    ];
    const news = [
      { date: '2024.05.01', text: '新商品「ハラペーニョチーズバーガー」登場！' },
      { date: '2024.04.25', text: 'ゴールデンウィーク期間の営業について' },
      { date: '2024.04.15', text: 'アプリ会員限定クーポン配信中！' }
    ];
    const areaLabel = { tokyo: '東京', kanagawa: '神奈川', osaka: '大阪', fukuoka: '福岡' };
    const vw = window.innerWidth;
    const setWrapEl = document.querySelector('.s62');
    const setCardW = setWrapEl ? Math.min(352, setWrapEl.clientWidth) : (vw <= 600 ? Math.min(352, vw - 96) : 352);
    const setStep = setCardW + 24;
    const setVisible = setWrapEl ? Math.max(1, Math.round(setWrapEl.clientWidth / setStep)) : (vw <= 600 ? 1 : 3);
    const setMax = Math.max(0, sets.length - setVisible);
    const padX = vw <= 600 ? 42 : 60;
    const containerW = Math.min(vw, 1330) - padX * 2;
    const popStep = 244;
    const popVisible = Math.max(1, Math.floor((containerW + 24) / popStep));
    const popTrackW = popVisible * popStep - 24;
    const popMax = Math.max(0, popular.length - popVisible);
    const campStep = 286;
    const campVisible = Math.max(1, Math.floor((containerW - 8 + 20) / campStep));
    const campTrackW = campVisible * campStep - 20 + 8;
    const campMax = Math.max(0, camps.length - campVisible);
    return {
      popular, sets, camps, news,
      popX: -this.state.pop * 244,
      popTrackW,
      campTrackW,
      setX: -this.state.set * setStep,
      canPopPrev: this.state.pop > 0,
      canPopNext: this.state.pop < popMax,
      canSetPrev: this.state.set > 0,
      canSetNext: this.state.set < setMax,
      canCampPrev: this.state.camp > 0,
      canCampNext: this.state.camp < campMax,
      campX: -this.state.camp * 286,
      menuOpen: this.state.menuOpen,
      showCampaign: this.props.showCampaign ?? true,
      showStore: this.props.showStore ?? true,
      area: this.state.area,
      near: this.state.near,
      searchNote: this.state.note,
      toggleMenu: () => this.setState(s => ({ menuOpen: !s.menuOpen })),
      closeMenu: () => this.setState({ menuOpen: false }),
      popPrev: e => this.step('pop', -1, popMax, e),
      popNext: e => this.step('pop', 1, popMax, e),
      setPrev: e => this.step('set', -1, setMax, e),
      setNext: e => this.step('set', 1, setMax, e),
      campPrev: e => this.step('camp', -1, campMax, e),
      campNext: e => this.step('camp', 1, campMax, e),
      setArea: e => this.setState({ area: e.target.value }),
      setNear: e => this.setState({ near: e.target.value }),
      search: () => {
        const a = areaLabel[this.state.area];
        this.setState({ note: a ? a + 'エリアの店舗を 12 件見つけました。' : 'エリアを選択してください。' });
      },
      toTop: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    };
  }
}
`;
