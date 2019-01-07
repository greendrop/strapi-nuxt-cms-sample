# strapi-nuxt-cms-sample

Strapi(Headless CMS)とNuxt.jsを組み合わせたサンプルです。

## 使用言語・ライブラリ

- Strapi
- Nuxt.js(Vue.js)

## 環境構築アプリケーション

- Docker
- Docker Compose
- direnv
- git

## セットアップ

```shell
$ git clone git@github.com:greendrop/strapi-nuxt-cms-sample.git
$ cd strapi-nuxt-cms-sample
$ vi .envrc
$ direnv allow
$ cp front/.env.example front/.env
$ docker-compose pull
$ docker-compose build
$ docker-compose run --rm front bash
$ yarn install
$ exit
$ docker-compose up
```

### .envrc

```
export USER_ID=`id -u`
export GROUP_ID=`id -g`
```

### front/.env

APIのリクエスト先は環境に合わせて変更

## Strapi管理画面

http://localhost:1337/admin

### ユーザー登録

- 管理画面を表示し、ユーザーを登録

### コンテンツタイプ作成

- 名前: article
- フィールド
  - title: string
  - body: text

### ロールと権限

- Public
  - 権限: Article
    - count, find, findone にチェックを入れ、保存

### 作成したコンテンツタイプ:Articlesに内容を追加

## フロント(Nuxt.js)

http://localhost:3000