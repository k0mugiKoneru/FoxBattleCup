# FoxBattleCup 公式サイト ハイブリッドデザイン V2

## 中身
- `index.html` トップ（ダーク）
- `news.html` ニュース（ダーク）
- `tournaments.html` 大会タイトル（ダーク）
- `archive.html` 過去開催（ダーク）
- `about.html` 大会概要（ホワイト）
- `entry.html` 参加表明（ダーク）
- `contact.html` お問い合わせ（ホワイト）
- `assets/style.css` レイアウト・配色
- `assets/config.js` GoogleフォームURL設定
- `assets/site.js` スマホメニュー・フォームリンク処理

## 確認
`index.html` をダブルクリックするとPC上で確認できます。

## フォーム設定
1. Googleフォームで「参加表明」「お問い合わせ」を作成。
2. 送信フォームの公開URLを取得。
3. `assets/config.js` 内の `entryForm` と `contactForm` にURLを記入（引用符を残す）。
4. 両ページのボタンが有効になります。URL未設定時はボタンは無効です。

## 記事と大会情報の更新
HTMLを直接編集してください。ニュース等を頻繁に更新する場合は将来CMS連携を推奨します。
`FoxBattleCup Vol.4`（2026年12月）・2027シーズンは**計画段階**として仮掲載しています。正式な告知前に確認をお願いします。過去開催の結果は未確認のため未掲載です。

## 無料公開（GitHub Pages）
1. GitHubで新しいパブリックリポジトリを作成。
2. 解凍後のフォルダ**内のファイルとassetsフォルダ**をリポジトリ直下へアップロード。
3. Settings → Pages → Build and deployment → Deploy from a branch → main / root を指定して保存。
4. 表示されたサイトURLを開きます。

※GitHub Pagesは静的ホスティングで、Googleフォームは外部サービスです。個人情報の取り扱い・公開前の内容確認を忘れずに。
