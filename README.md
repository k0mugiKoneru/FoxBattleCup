# FoxBattleCup 公式サイト Ver.4

## 更新内容
- 公式大会ロゴ：assets/fbc-logo.png（全ページのヘッダー・フッター、トップページ）
- 過去5大会の開催日、名称、YouTubeアーカイブを追加（archive.html）
- FoxBirthdayCupの協賛企業「ハタ鉱泉株式会社 様」を掲載
- 参加表明フォーム：https://forms.gle/jML6whNMKP97Z4hR8 を assets/config.js に設定

## GitHub Pages 更新手順
1. ZIPを解凍します。
2. GitHubの k0mugikoneru/FoxBattleCup リポジトリのルートで Add file > Upload files を選択します。
3. 解凍後のHTMLファイル7点、README.md、assets フォルダをアップロードします。既存ファイルは同じパスへ上書きします。
4. Commit changes で保存します。反映には数分かかる場合があります。

**注意：** `index.html` はリポジトリの最上位に置いてください。ロゴ画像を含む assets フォルダも忘れずにアップロードしてください。

お問い合わせフォームは未設定です。フォームが決まったら `assets/config.js` の `contactForm` にURLを記入してください。参加表明フォームは公開していますが、募集状況はフォーム内の記載が優先されます。過去大会の順位や結果は未確認のため掲載していません。


## Ver.4.1
- 大会タイトルページのみ見出しを30%拡大、本文を50%縮小（ボタンと共通ナビは対象外）。

## Ver.4.1 修正版（Ver.4.3 は使用しません）
- tournaments.html：Vol.4 開催予定欄を指定の4行（太字）に変更。
- tournaments.html：「2026年12月開催予定。日程・参加募集などの詳細は決定次第お知らせします。」を削除。
- assets/style.css：2027年シーズン企画案内をVer.4.1の 6.5px → 8.45px（30% UP）に変更。
- assets/style.css：計画段階の注意書きをVer.4.1の 6px → 8.4px（40% UP）に変更。
- その他ページはVer.4.1の内容を維持。

アップロード時は tournaments.html と assets/style.css の2ファイルだけ置き換えれば反映できます。
GitHubのブラウザ画面でディレクトリ構造を維持してアップロードしてください。

## Ver.4.1 修正版 v2（今回の更新）
- 大会タイトルページの「2027年のシーズン展開を企画中。開催日程・形式は今後案内します。」を前版から50%拡大（8.45px → 12.675px）。
- 大会タイトルページの「掲載している開催予定は計画段階の情報です。参加受付開始を保証するものではありません。」を前版から50%拡大（8.4px → 12.6px）。
- その他の文字・ページは変更なし。GitHub上では `assets/style.css` のみの更新でOKです。


## FoxBattleCup Vol.4 大会詳細（追加更新）

- `tournament-vol4.html`: Vol.4大会詳細、試合形式、参加条件、ポイント表、提供された大会概要画像を掲載
- `tournaments.html`: Vol.4カードから大会詳細へ移動できるように変更。従来の参加表明リンクも残しています。
- `assets/tournament-detail.css`: 大会詳細ページだけに適用するCSS。以前のフォント調整は変更していません。
- `assets/fbc-vol4-guide.jpg`: 支給されたVol.4大会概要画像。

GitHub Pagesのリポジトリ `FoxBattleCup` のルートに、ZIPの中身をアップロードしてください。
部分更新の場合は、上記4ファイルだけ追加・更新してください。

**公開URL** `https://k0mugikoneru.github.io/FoxBattleCup/tournament-vol4.html`

**注意** 最新の募集状況は主催者の案内で確認してください。掲載情報に変更があればHTML本文も更新してください。
