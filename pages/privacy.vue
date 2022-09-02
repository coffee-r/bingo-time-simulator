<template>

    <!-- プライバシーポリシー・TOPページリンク・フッター -->
    <main>

        <!-- プライバシーポリシー -->
        <article class="prose prose-sm sm:prose-base lg:prose-base max-w-3xl mx-2 mx-auto bg-white px-4 pt-8">
            
            <h1 class="text-center">プライバシーポリシー</h1>
            <p>
                この文章は本サービスにおける個人情報の保護およびその適切な取り扱いについての方針を示したものです。
            </p>

            <h2>Cookieの使用</h2>
            <p>
                <ul>
                    <li>Cookieとはユーザーのウェブサイト閲覧情報を、そのユーザーのコンピューター（PCやスマートフォン、タブレットなどインターネット接続可能な機器）に記憶させる機能のことです。</li>
                    <li>Cookieには、本サービスによって設定されるもの（ファーストパーティークッキー）と、本サービスと提携する第三者によって設定されるもの（サードパーティークッキー）があります。</li>
                    <li>本サービスでは、Cookieを使用して収集した情報を利用して、ユーザーのウェブサイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析し、ウェブサイト自体のパフォーマンス改善や、本サービスからユーザーに提供するサービスの向上、改善のために使用することがあります。またこの分析には Googleアナリティクス が利用され、ツール提供者に情報提供されることがあります。</li>
                    <ul>
                        <li>Coookie名「_ga」</li>
                        <li>Coookie名「_ga_7CVJJC12TW」</li>
                    </ul>
                    <li>ユーザーがブラウザの設定を変更することによりCookieを無効にすることが可能です。ただし、Cookieを無効にした場合は、一部のサービスが受けられない場合があります。Cookieの設定の変更方法については、各ブラウザの製造元へご確認ください。</li>
                </ul>     
            </p>
        </article>

        <!-- TOPページリンク -->
        <div class="text-center mt-8">
            <a href="/">
                <button class="bg-black hover:bg-gray-700 text-white  py-2 px-4 rounded-full">
                    TOPへ戻る
                </button>
            </a>
        </div>

        <!-- フッター -->
		<CustomFooter />

    </main>

</template>

<script setup>
import CustomFooter from "~/components/CustomFooter.vue";
</script>
