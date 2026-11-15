予備試験 短答 肢トレ v003（令和8年度 全7科目）

■ ファイル（すべてリポジトリ直下にアップ。フォルダ構造もそのまま）
- index.html / questions.js / sw.js / app-sw.js / manifest.webmanifest / .nojekyll
- icons/ （icon-180.png, icon-192.png, icon-512.png）

■ 公開手順
1. GitHubの既存リポジトリの中身を全削除 → 上記一式をアップ（icons フォルダごと）
2. Settings → Pages → Branch を main / (root) にして Save
3. 出たURLをスマホChromeで開く → ⋮ → 「ホーム画面に追加」

■ 注意
- 正誤は予備校の公開解答（各問の正解）から肢別に展開したデータです。
- Q12・Q17・Q18・Q25 は「個数」や「組合せ」の正解しか出ないため、各肢の○×は法的検討で特定しています（個数と一致を確認済み）。
- 現行法との照合は未実施（出題当時の正誤）。
- 問題を更新したら app-sw.js の VERSION の数字を上げてください（端末の古いキャッシュ対策）。
- 無料のGitHub Pagesは公開リポジトリが前提です。

■ 記録
- ○×を押すと正誤が記録され、「間違えた肢のみ」で復習できます（端末内 localStorage）。
