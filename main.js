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
      { name: 'サニーチーズバーガー', price: '¥680', slot: 'sb-pop1' },
      { name: 'アボカドバーガー', price: '¥720', slot: 'sb-pop2' },
      { name: 'テリヤキバーガー', price: '¥650', slot: 'sb-pop3' },
      { name: 'ベーコンエッグバーガー', price: '¥750', slot: 'sb-pop4' },
      { name: 'スパイシーチキンバーガー', price: '¥620', slot: 'sb-pop5' },
      { name: 'ダブルビーフバーガー', price: '¥890', slot: 'sb-pop6' },
      { name: 'フィッシュバーガー', price: '¥590', slot: 'sb-pop7' }
    ];
    const sets = [
      { name: 'サニーチーズバーガーセット', price: '¥1,050', slot: 'sb-set1' },
      { name: 'アボカドバーガーセット', price: '¥1,090', slot: 'sb-set2' },
      { name: 'テリヤキバーガーセット', price: '¥990', slot: 'sb-set3' },
      { name: 'ベーコンエッグバーガーセット', price: '¥1,120', slot: 'sb-set4' }
    ];
    const camps = [
      { tag: '平日ランチ限定', title: 'ポテト＆ドリンクセットが', price: '¥100 OFF!', bg: 'linear-gradient(140deg,#FFD447,#FFB800)', fg: '#4A3527', slot: 'sb-camp1' },
      { tag: '夏の新定番', title: 'サニーレモネード', price: '¥380', bg: 'linear-gradient(140deg,#7ECBE8,#B8E6F5)', fg: '#0F5470', slot: 'sb-camp2' },
      { tag: 'スパイシー新登場！', title: 'ハラペーニョチーズバーガー', price: '¥730', bg: 'linear-gradient(140deg,#F5921E,#FFB65C)', fg: '#4A2A05', slot: 'sb-camp3' },
      { tag: 'おもちゃ付き！', title: 'キッズセット', price: '¥500', bg: 'linear-gradient(140deg,#F79BB8,#FFC2D5)', fg: '#7A2244', slot: 'sb-camp4' },
      { tag: '10:30まで', title: 'モーニングセット', price: '¥450', bg: 'linear-gradient(140deg,#A8D082,#C9E5AC)', fg: '#2F4D16', slot: 'sb-camp5' },
      { tag: '夏季限定', title: 'マンゴーシェイク', price: '¥490', bg: 'linear-gradient(140deg,#FFB03A,#FFD08A)', fg: '#5A3305', slot: 'sb-camp6' }
    ];
    const news = [
      { date: '2024.05.01', text: '新商品「ハラペーニョチーズバーガー」登場！' },
      { date: '2024.04.25', text: 'ゴールデンウィーク期間の営業について' },
      { date: '2024.04.15', text: 'アプリ会員限定クーポン配信中！' }
    ];
    const areaLabel = { tokyo: '東京', kanagawa: '神奈川', osaka: '大阪', fukuoka: '福岡' };
    return {
      popular, sets, camps, news,
      popX: -this.state.pop * 244,
      setX: -this.state.set * 376,
      campX: -this.state.camp * 286,
      menuOpen: this.state.menuOpen,
      showCampaign: this.props.showCampaign ?? true,
      showStore: this.props.showStore ?? true,
      area: this.state.area,
      near: this.state.near,
      searchNote: this.state.note,
      toggleMenu: () => this.setState(s => ({ menuOpen: !s.menuOpen })),
      closeMenu: () => this.setState({ menuOpen: false }),
      popPrev: e => this.step('pop', -1, popular.length - 5, e),
      popNext: e => this.step('pop', 1, popular.length - 5, e),
      setPrev: e => this.step('set', -1, sets.length - 3, e),
      setNext: e => this.step('set', 1, sets.length - 3, e),
      campPrev: e => this.step('camp', -1, camps.length - 4, e),
      campNext: e => this.step('camp', 1, camps.length - 4, e),
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
