# Cloudflare Pagesへのデプロイ手順

このドキュメントでは、GitHub Actionsを使用してJekyllサイトをCloudflare Pagesに自動デプロイする方法を説明します。

## 前提条件

- GitHubアカウント
- Cloudflareアカウント
- このリポジトリがGitHubにプッシュされていること

## セットアップ手順

### 1. Cloudflare Pages プロジェクトの作成

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. 左メニューから「Workers & Pages」を選択
3. 「Create application」→「Pages」→「Connect to Git」を選択
4. **GitHubとの接続はスキップ**（GitHub Actionsでデプロイするため）
5. 代わりに「Direct Upload」を選択
6. プロジェクト名を `goofmint-dev` に設定
7. プロジェクトを作成

### 2. Cloudflare API トークンの取得

1. Cloudflare Dashboard で右上のアイコン → 「My Profile」
2. 左メニューから「API Tokens」を選択
3. 「Create Token」をクリック
4. 「Edit Cloudflare Workers」テンプレートを使用するか、カスタムトークンを作成
   - **Permissions**:
     - Account - Cloudflare Pages: Edit
   - **Account Resources**:
     - Include - 該当するアカウント
5. 「Continue to summary」→「Create Token」
6. **トークンをコピーして保存**（後で使用）

### 3. Cloudflare Account IDの取得

1. Cloudflare Dashboard のホームに戻る
2. 右側のサイドバーに表示されている「Account ID」をコピー

### 4. GitHub Secretsの設定

1. GitHubリポジトリページで「Settings」→「Secrets and variables」→「Actions」
2. 「New repository secret」をクリックして以下を追加：

   **CLOUDFLARE_API_TOKEN**
   ```
   （ステップ2で取得したAPIトークン）
   ```

   **CLOUDFLARE_ACCOUNT_ID**
   ```
   （ステップ3で取得したAccount ID）
   ```

## デプロイ方法

### 自動デプロイ

`main` ブランチにプッシュすると自動的にデプロイされます：

```bash
git add .
git commit -m "Update site"
git push origin main
```

### デプロイの確認

1. GitHubリポジトリの「Actions」タブでワークフローの実行状況を確認
2. 成功したら Cloudflare Dashboard の「Workers & Pages」でデプロイを確認
3. 提供されたURLでサイトにアクセス

## カスタムドメインの設定

1. Cloudflare Dashboard で該当プロジェクトを選択
2. 「Custom domains」タブを開く
3. 「Set up a custom domain」をクリック
4. ドメイン名を入力（例: `goofmint.dev`）
5. DNSレコードが自動的に設定されます

## トラブルシューティング

### ビルドエラー

- GitHub Actionsの「Actions」タブでログを確認
- Rubyのバージョンやgemの依存関係を確認

### デプロイエラー

- Cloudflare API TokenとAccount IDが正しく設定されているか確認
- プロジェクト名が `goofmint-dev` と一致しているか確認

### 環境変数

本番環境用の環境変数が必要な場合：

```yaml
# .github/workflows/deploy.yml
- name: Build Jekyll site
  run: bundle exec jekyll build
  env:
    JEKYLL_ENV: production
    # その他の環境変数をここに追加
```

## 参考リンク

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions for Cloudflare Pages](https://github.com/cloudflare/pages-action)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
