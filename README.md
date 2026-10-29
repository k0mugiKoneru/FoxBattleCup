# FoxBattleCup公式サイト — スタッフ紹介・eSports運営依頼追加版（Ver.5）

## 追加内容
- `staff.html` を新規作成。FoxBattleCup Vol.4と、2026年の過去5大会のMC／実況・解説／運営担当を掲載する欄を追加。
- **氏名未提供のため実在人物の名前を推測して記載していません。** 過去大会は「担当者情報を確認中」。Vol.4はこれまでの実施計画で共有された担当組織を「予定」として表示し、個別の名前は未掲載です。公開前に確認してください。
- 既存各ページのヘッダー／フッターに「MC・運営」を追加。
- 過去開催の5大会、大会タイトル／Vol.4詳細ページ、TOPから担当者ページへ移動可能。
- `contact.html` に「eSports大会運営依頼」を追加。企画書作成／大会台本作成／集計システム貸与を掲載。

## 問い合わせの公開前設定（重要）
`assets/config.js` の `contactForm` と `operationsForm` に、それぞれ実際のGoogleフォームURLを入力してください。
未設定のあいだ、ボタンは**準備中（無効）**になります。サイト自体で入力を収集・保存する仕組みはありません。
「集計システム貸与」は依頼項目であり、利用条件や提供を保証するものではありません。

## 担当者名の追加方法
`staff.html` 内の各大会カードの `staff-person` と、直後の説明文を編集してください。
出演・担当者の掲載許諾、役職・表記（敬称、所属、Xリンク等）を確認してから公開してください。

## GitHub Pages反映
`FoxBattleCup` リポジトリのルートへZIPを解凍した**中身**をアップロードしてください。`assets` 以下のファイルも維持してください。
- 新規: `staff.html`, `assets/staff-contact.css`
- 更新: 既存のHTML（8ページ）、`assets/config.js`, `assets/site.js`
- 変更していない: `assets/style.css`, `assets/tournament-detail.css`, ロゴ／案内画像

URL: https://k0mugikoneru.github.io/FoxBattleCup/staff.html

既存の参加表明フォームURL、2026年12月開催案内、過去5大会の配信URLは保持しています。


## Ver.5.2 変更内容
- 全ページで学生スタッフに関する表記を「チャレンジ学生」に統一。
- 変更対象ファイル：about.html, index.html, staff.html
- 大会のルールや参加条件、リンク、ロゴ等は変更していません。


## Ver.5.3 ニュース更新（2026-10-19）
- `news.html`：FoxBattleCup Vol.4のエントリー開始を最上段へ追加。
- `news-vol4-entry.html`：ニュース記事の新規ページ。大会概要、参加条件案内、Googleフォームへの「参加表明フォームを開く」ボタンを設置。
- `index.html`：TOPのニュース欄にもエントリー開始を追加。
- `assets/news-article.css`：ニュース用の追加スタイル（他ページのデザインを変更しません）。
- 日時、参加予定60名、ルール、フォームURLは既存データを継承。受付締切や選考方法は未設定のため掲載していません。

**GitHubへの更新：** `index.html`、`news.html`、`news-vol4-entry.html`、`assets/news-article.css` を既存のリポジトリ直下へアップロードしてください。CSSは `assets` フォルダ内に置いてください。

**記事URL（アップロード後）**：https://k0mugikoneru.github.io/FoxBattleCup/news-vol4-entry.html


## Ver.5.4: 公式X連携（2026-10-29）
- 公式X： https://x.com/foxcup_official （@foxcup_official）
- 全ページのヘッダー・フッターに公式Xリンクを追加しました。
- TOPページに公式Xの埋め込みタイムラインを設置しました。
- NEWS・参加表明・Vol.4詳細ページにも公式Xへの導線を追加しました。
- XタイムラインはXの公式ウィジェット `https://platform.x.com/widgets.js` を利用します。APIキーは不要です。
- 埋め込みがX側の仕様・ブラウザ設定等で表示されない環境でも、公式Xへ移動できるリンクは残します。

### GitHub Pages更新
`FBC_v5_4_X_GitHub_update.zip` を解凍し、**中のファイルとassetsフォルダをそのままリポジトリのルートへ上書き**してください。
ZIPファイルや上位フォルダをそのまま配置しないでください。
