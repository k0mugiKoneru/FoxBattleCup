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
