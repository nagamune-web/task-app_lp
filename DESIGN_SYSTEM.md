# TaskFlow Design System

> **バージョン**: 1.0.0  
> **最終更新**: 2026-05-02  
> **対象**: TaskFlow — チーム向け業務量管理・タスク委譲ツール

---

## 目次

1. [デザイン原則](#1-デザイン原則)
2. [カラーパレット](#2-カラーパレット)
3. [タイポグラフィ](#3-タイポグラフィ)
4. [スペーシングルール](#4-スペーシングルール)
5. [コンポーネントスタイル](#5-コンポーネントスタイル)
6. [トーン＆マナー](#6-トーンマナー)
7. [使用禁止事項](#7-使用禁止事項)

---

## 1. デザイン原則

TaskFlow のUIは、**30代女性Webディレクター**が毎日気持ちよく使えることを第一に設計されています。

| 原則 | 説明 |
|------|------|
| **Calm Clarity（静かな明瞭さ）** | 情報が多くても圧迫感を与えない。余白と整列で読みやすさを確保する |
| **Warm Professional（温かみのあるプロフェッショナル）** | 仕事ツールだが冷たくない。コーラルレッドのアクセントが親しみやすさを生む |
| **Effortless Action（迷わせない操作）** | 次に何をすればいいか、常に自明であること |
| **Trust through Transparency（透明性による信頼）** | 業務量・進捗・負荷は正直にデータで表示する |

---

## 2. カラーパレット

### 2-1. プライマリカラー

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-primary` | `#E8614A` | セクション見出し・アクティブ状態・アクセント |
| `--color-primary-light` | `#F28B77` | ホバー状態・サブアクセント |
| `--color-primary-dark` | `#C44A35` | プレス状態・強調 |
| `--color-primary-soft` | `#FAD9D3` | バッジ背景・ハイライト |
| `--color-primary-pale` | `#FDF0ED` | 選択行背景・サブ塗り |

### 2-2. セカンダリカラー

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-secondary` | `#D97B5A` | テラコッタ系アクセント・グラフ補助色 |
| `--color-secondary-light` | `#EBA98F` | ホバー・グラフ薄色 |
| `--color-secondary-pale` | `#FAF0EB` | カード差し色 |

### 2-3. バックグラウンド

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-bg-base` | `#FDF6F4` | ページ全体の背景色 |
| `--color-bg-surface` | `#FFFFFF` | カード・モーダル・サイドバー |
| `--color-bg-subtle` | `#FAF3F1` | テーブル偶数行・非アクティブ領域 |
| `--color-bg-overlay` | `rgba(237,224,220,0.5)` | ツールチップ・ドロップダウン背景 |

### 2-4. テキスト

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-text-primary` | `#2D2D2D` | 本文・ラベル・入力値 |
| `--color-text-secondary` | `#6B6B6B` | サブテキスト・説明文 |
| `--color-text-muted` | `#9E9E9E` | プレースホルダー・補足情報 |
| `--color-text-disabled` | `#C4C4C4` | 非活性テキスト |
| `--color-text-on-primary` | `#FFFFFF` | プライマリ背景上のテキスト |

### 2-5. アクセント（状態・意味色）

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-success` | `#3DAA75` | 完了・承認・余裕あり |
| `--color-success-pale` | `#E8F7F0` | 成功背景 |
| `--color-warning` | `#F59E0B` | 注意・業務量中程度 |
| `--color-warning-pale` | `#FEF3C7` | 警告背景 |
| `--color-danger` | `#E34F4F` | エラー・業務過多アラート |
| `--color-danger-pale` | `#FDECEC` | エラー背景 |
| `--color-info` | `#4A90D9` | 情報・通知 |
| `--color-info-pale` | `#EBF4FD` | 情報背景 |

### 2-6. ボーダー

| トークン名 | HEX | 用途 |
|-----------|-----|------|
| `--color-border-default` | `#EDE0DC` | カード・入力欄・区切り線 |
| `--color-border-strong` | `#D4C5C0` | フォーカス枠・強調枠 |
| `--color-border-focus` | `#E8614A` | フォーカス状態のボーダー |

---

## 3. タイポグラフィ

### 3-1. フォントファミリー

```css
/* プライマリフォント（日本語） */
--font-family-ja: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
                  'Noto Sans JP', 'Yu Gothic', sans-serif;

/* プライマリフォント（英数字） */
--font-family-en: 'Inter', 'SF Pro Display', system-ui, sans-serif;

/* モノスペース（コード・数値） */
--font-family-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

> **使い分け**: 日本語混在コンテンツには `--font-family-ja`、時間・数値・IDなどの英数字表示には `--font-family-en` を優先適用する。

### 3-2. タイプスケール

| トークン名 | サイズ | ウェイト | 行間 | 用途 |
|-----------|--------|---------|------|------|
| `--text-display` | 32px / 2rem | 800 | 1.2 | ページ最大見出し（LPヒーロー等） |
| `--text-h1` | 24px / 1.5rem | 700 | 1.3 | ページタイトル・セクション大見出し |
| `--text-h2` | 20px / 1.25rem | 700 | 1.35 | セクション中見出し |
| `--text-h3` | 17px / 1.0625rem | 600 | 1.4 | カード見出し・グループラベル |
| `--text-body-lg` | 16px / 1rem | 400 | 1.75 | 本文（長文・説明文） |
| `--text-body` | 14px / 0.875rem | 400 | 1.7 | 一般UIテキスト |
| `--text-body-sm` | 13px / 0.8125rem | 400 | 1.65 | サブ説明・注記 |
| `--text-label` | 12px / 0.75rem | 600 | 1.4 | バッジ・タグ・ステータス |
| `--text-caption` | 11px / 0.6875rem | 400 | 1.5 | タイムスタンプ・補足情報 |

### 3-3. 見出しの色ルール

```
セクション見出し（h1〜h2）: --color-primary (#E8614A)
カード内見出し（h3）        : --color-text-primary (#2D2D2D)
説明文・本文               : --color-text-secondary (#6B6B6B)
```

### 3-4. 文字間隔（letter-spacing）

| 用途 | 値 |
|------|----|
| 日本語本文 | `0` (デフォルト) |
| 英語見出し | `-0.02em` |
| ラベル・バッジ | `+0.04em` |
| セクションラベル（ALL CAPS） | `+0.12em` |

---

## 4. スペーシングルール

### 4-1. ベースユニット

**基準値: 4px**。すべての余白・サイズはこの倍数で定義する。

```css
--space-1:  4px;   /*  4px — アイコン内パディング・微調整 */
--space-2:  8px;   /*  8px — インライン要素間・タイト */
--space-3: 12px;   /* 12px — 入力欄内パディング */
--space-4: 16px;   /* 16px — 標準パディング・カード内余白 */
--space-5: 20px;   /* 20px — カード内上下パディング */
--space-6: 24px;   /* 24px — セクション内コンポーネント間 */
--space-8: 32px;   /* 32px — カード間・グリッドギャップ */
--space-10: 40px;  /* 40px — セクション内ブロック間 */
--space-12: 48px;  /* 48px — セクション上下パディング（モバイル）*/
--space-16: 64px;  /* 64px — セクション上下パディング（デスクトップ）*/
--space-20: 80px;  /* 80px — ページ上下の大余白 */
```

### 4-2. コンポーネント別スペーシング指針

| コンポーネント | パディング |
|--------------|-----------|
| ボタン（標準） | 上下 `10px` / 左右 `20px` |
| ボタン（小） | 上下 `6px` / 左右 `14px` |
| ボタン（大） | 上下 `14px` / 左右 `28px` |
| カード | `24px` 四方（モバイル: `16px`） |
| 入力フォーム | 上下 `10px` / 左右 `14px` |
| モーダル | `32px` 四方（モバイル: `20px`） |
| テーブルセル | 上下 `12px` / 左右 `16px` |
| バッジ | 上下 `3px` / 左右 `10px` |

### 4-3. レイアウトグリッド

```
最大幅       : 1200px（コンテンツ） / 1400px（フル幅レイアウト）
サイドパディング: 40px（デスクトップ）/ 20px（タブレット）/ 16px（モバイル）
カラム数      : 12（デスクトップ）/ 8（タブレット）/ 4（モバイル）
ガター        : 24px（デスクトップ）/ 16px（モバイル）
```

---

## 5. コンポーネントスタイル

### 5-1. ボタン

#### Primary Button
```
背景色  : --color-primary (#E8614A)
テキスト: --color-text-on-primary (#FFFFFF)
角丸   : 8px
影     : 0 2px 8px rgba(232,97,74,0.25)
フォント: --text-body / weight 600
---
ホバー : 背景色を --color-primary-dark (#C44A35) に変更、影を強化
プレス : scale(0.98)
無効時 : opacity 0.45 / cursor not-allowed
```

#### Secondary Button（Outlined）
```
背景色  : transparent
ボーダー: 1.5px solid --color-border-default
テキスト: --color-text-primary
角丸   : 8px
---
ホバー : 背景色 --color-bg-subtle、ボーダー --color-primary
```

#### Ghost Button
```
背景色  : transparent
テキスト: --color-text-secondary
---
ホバー : 背景色 --color-bg-subtle
```

#### Danger Button
```
背景色  : --color-danger (#E34F4F)
テキスト: #FFFFFF
ホバー : 背景色を濃く (#C73B3B)
```

### 5-2. カード

```
背景色     : --color-bg-surface (#FFFFFF)
ボーダー   : 1px solid --color-border-default (#EDE0DC)
角丸       : 12px（標準）/ 16px（大カード）
影         : 0 1px 4px rgba(45,45,45,0.06)
パディング  : 24px
---
ホバー（クリック可能なカード）:
  shadow: 0 4px 16px rgba(232,97,74,0.12)
  border-color: --color-border-strong
  transform: translateY(-2px)
  transition: 0.2s ease

タスクカード強調ボーダー（優先度）:
  高優先: border-left 3px solid --color-danger
  中優先: border-left 3px solid --color-warning
  低優先: border-left 3px solid --color-success
```

### 5-3. フォーム

#### テキスト入力・テキストエリア
```
背景色    : --color-bg-surface
ボーダー  : 1.5px solid --color-border-default
角丸      : 8px
パディング: 10px 14px
フォント  : --text-body / --color-text-primary
---
フォーカス:
  border-color: --color-border-focus (#E8614A)
  box-shadow: 0 0 0 3px rgba(232,97,74,0.12)
  outline: none

エラー:
  border-color: --color-danger
  box-shadow: 0 0 0 3px rgba(227,79,79,0.1)

プレースホルダー: --color-text-muted
```

#### セレクト・ドロップダウン
```
同上スタイルを継承
矢印アイコン: --color-text-secondary / right 12px
ドロップダウン背景: #FFFFFF / shadow: 0 8px 24px rgba(0,0,0,0.1)
```

#### ラベル
```
フォント  : --text-label (12px / weight 600)
色        : --color-text-secondary
マージン底辺: --space-2 (8px)
必須マーク: --color-primary の「*」
```

### 5-4. バッジ・タグ・ステータスチップ

```
共通:
  font-size : --text-label (12px)
  font-weight: 600
  padding   : 3px 10px
  border-radius: 100px（ピル型）

ステータス別:
  未着手 : bg #F0EFFF / text #5B5BD6
  進行中 : bg #FEF3C7 / text #B45309
  完了   : bg #E8F7F0 / text #2E7D5A
  業務過多: bg --color-danger-pale / text --color-danger

優先度別:
  高 : bg #FDECEC / text #C62A2A / dot --color-danger
  中 : bg #FEF3C7 / text #A16207 / dot --color-warning
  低 : bg #E8F7F0 / text #2E6E50 / dot --color-success
```

### 5-5. アイコン

```
サイズ規格:
  xs  : 14px（インラインアイコン）
  sm  : 16px（ボタン内・テキスト横）
  md  : 20px（一般UI）
  lg  : 24px（メニュー・見出し横）
  xl  : 32px（空状態・イラスト）

スタイル:
  推奨ライブラリ: Lucide Icons / Heroicons（線の細さが世界観に合致）
  線の太さ: 1.5px（stroke-width）
  色: 文脈に応じて --color-text-secondary か --color-primary を使用

禁止:
  塗りつぶし（solid）アイコンとアウトラインアイコンの混在使用
```

### 5-6. ナビゲーション・サイドバー

```
幅            : 240px（展開時）/ 64px（折りたたみ時）
背景色         : --color-bg-surface
右ボーダー     : 1px solid --color-border-default
アイテムパディング: 10px 16px
角丸（アイテム）: 8px

非アクティブ:
  text: --color-text-secondary
  icon: --color-text-muted

アクティブ:
  bg: --color-primary-pale (#FDF0ED)
  text: --color-primary
  icon: --color-primary
  font-weight: 600
```

### 5-7. テーブル

```
ヘッダー行:
  bg: --color-bg-subtle
  text: --color-text-secondary / --text-label / weight 600
  letter-spacing: +0.04em

データ行:
  偶数行bg: --color-bg-subtle
  ホバー: --color-primary-pale

ボーダー: 1px solid --color-border-default（横のみ）
```

---

## 6. トーン＆マナー

### 6-1. ブランドパーソナリティ

TaskFlow の言葉は「**有能な同僚**」のように話しかける。

- チームへの思いやりを持ち、論理的でありながら温かい
- 上から目線でも、馴れ馴れしすぎでもない
- 困ったときにそっと手を差し伸べるような言葉を選ぶ

### 6-2. 文体の基本方針

| 方針 | 良い例 | 悪い例 |
|------|--------|--------|
| 丁寧語（ですます）を基本とする | 「タスクを追加しました」 | 「タスク追加した」 |
| 主語はユーザー目線 | 「タスクを確認できます」 | 「タスクが表示されます」 |
| 短く、迷わせない | 「保存する」 | 「変更内容を保存してください」 |
| 感情に共感する | 「少し業務が集中しています」 | 「WARNING: 負荷超過」 |
| 行動を促す言葉を使う | 「○○さんに依頼してみませんか？」 | 「依頼先候補あり」 |

### 6-3. シーン別コピーガイドライン

**空の状態（Empty State）**
```
見出し: 「まだタスクはありません」
説明 : 「タスクを追加して、チームの業務を整理しましょう。」
CTA  : 「最初のタスクを追加する」
```

**成功メッセージ（Toast / Snackbar）**
```
✓ タスクを追加しました
✓ ○○さんへの依頼を送りました
✓ ステータスを「完了」に更新しました
```

**エラーメッセージ**
```
× 保存できませんでした。もう一度お試しください。
× この操作は取り消せません。本当に削除しますか？
```

**業務過多アラート**
```
「田中さんの今週のタスクが80%を超えています。」
「タスクを誰かに依頼することを検討してみませんか？」
```

**確認ダイアログ**
```
タイトル: 「タスクを削除しますか？」
説明文 : 「この操作は元に戻せません。」
確認CTA : 「削除する」（--color-danger）
キャンセル: 「やめる」
```

### 6-4. 数値・単位の表記

| 内容 | 表記方法 |
|------|---------|
| 業務負荷 | `40時間中 28時間` / `70%` |
| 残タスク数 | `3件` |
| 日付 | `5月2日（月）` / 今週内は `今日` `明日` |
| 経過時間 | `2時間前` `昨日` |

---

## 7. 使用禁止事項

### 7-1. 禁止カラー

| 禁止内容 | 理由 |
|---------|------|
| 背景全面を黒・濃紺にする | ダークテーマ不採用。ペルソナに合わない |
| 彩度の高い蛍光色（#00FF00, #FF00FF 等）| 品位を損なう |
| プライマリカラーを2色以上同時使用 | ブランド希薄化 |
| グレーだけで全テキストを統一 | メリハリが失われる |
| 赤系以外の「強調色」を追加する | プライマリと競合する |

### 7-2. 禁止タイポグラフィ

| 禁止内容 | 理由 |
|---------|------|
| 本文に12px未満のフォントを使用 | 可読性・アクセシビリティ |
| 全体で3種類以上のフォントウェイトを混在 | 視覚ノイズが増える |
| 日本語テキストを全大文字・全イタリックで表示 | 読みにくい |
| ウェイト300（Light）を日本語本文に使用 | OS・ブラウザで潰れる可能性がある |

### 7-3. 禁止デザインパターン

| 禁止内容 | 理由 |
|---------|------|
| ダークモードのみ提供 | ライトモードがデフォルト（PRODUCT_CONTEXT参照） |
| 重いシャドウ・深いドロップシャドウ | 「すっきり・上品」な世界観と相反する |
| グラデーション背景の多用 | 情報密度が高いアプリではノイズになる |
| 3px以上の太いボーダー | 重すぎる印象 |
| カード内でカードを重ねる（入れ子カード） | 階層が不明確になる |
| モーダルの上にモーダルを重ねる | 認知負荷が高い |
| 赤・オレンジ系色を「危険でないUI要素」に使用 | プライマリカラーとの混乱を招く |
| スクロールしないと見えない位置にCTAを配置 | 行動率が落ちる |

### 7-4. 禁止コピー表現

| 禁止表現 | 代替案 |
|---------|--------|
| 「エラーが発生しました」（だけ） | 「保存できませんでした。もう一度お試しください。」 |
| 「WARNING」「ALERT」などの英語大文字 | 「注意」「お知らせ」 |
| 「完了した！」などの感嘆符多用 | 「完了しました」 |
| 「押してください」 | 「タップ / クリックする」 |
| 「〜することができます」 | 「〜できます」 |
| システム用語そのまま（「null」「undefined」等） | 「データが見つかりません」 |

---

## 付録：CSSカスタムプロパティ 一覧

```css
:root {
  /* Colors - Primary */
  --color-primary:       #E8614A;
  --color-primary-light: #F28B77;
  --color-primary-dark:  #C44A35;
  --color-primary-soft:  #FAD9D3;
  --color-primary-pale:  #FDF0ED;

  /* Colors - Secondary */
  --color-secondary:       #D97B5A;
  --color-secondary-light: #EBA98F;
  --color-secondary-pale:  #FAF0EB;

  /* Colors - Background */
  --color-bg-base:    #FDF6F4;
  --color-bg-surface: #FFFFFF;
  --color-bg-subtle:  #FAF3F1;

  /* Colors - Text */
  --color-text-primary:    #2D2D2D;
  --color-text-secondary:  #6B6B6B;
  --color-text-muted:      #9E9E9E;
  --color-text-disabled:   #C4C4C4;
  --color-text-on-primary: #FFFFFF;

  /* Colors - Semantic */
  --color-success:      #3DAA75;
  --color-success-pale: #E8F7F0;
  --color-warning:      #F59E0B;
  --color-warning-pale: #FEF3C7;
  --color-danger:       #E34F4F;
  --color-danger-pale:  #FDECEC;
  --color-info:         #4A90D9;
  --color-info-pale:    #EBF4FD;

  /* Colors - Border */
  --color-border-default: #EDE0DC;
  --color-border-strong:  #D4C5C0;
  --color-border-focus:   #E8614A;

  /* Typography */
  --font-family-ja:   'Hiragino Sans', 'Noto Sans JP', sans-serif;
  --font-family-en:   'Inter', system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;

  --text-display: 2rem;      /* 32px */
  --text-h1:      1.5rem;    /* 24px */
  --text-h2:      1.25rem;   /* 20px */
  --text-h3:      1.0625rem; /* 17px */
  --text-body-lg: 1rem;      /* 16px */
  --text-body:    0.875rem;  /* 14px */
  --text-body-sm: 0.8125rem; /* 13px */
  --text-label:   0.75rem;   /* 12px */
  --text-caption: 0.6875rem; /* 11px */

  /* Spacing */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius:    8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 100px;
}
```

---

*このデザインシステムは TaskFlow の成長とともに更新されます。変更は Pull Request を通じてレビューし、バージョン番号を更新してください。*
