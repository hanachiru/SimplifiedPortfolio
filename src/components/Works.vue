<template>
  <div class="mt-4">
    <h1>Works</h1>
    <div class="card-columns">
      <div v-for="modal in modals" :key="modal.id">
        <div class="card shadow">
          <div
            class="card-header bg-white"
            v-on:click.self="onClickedModal(modal)"
          >
            {{ modal.title }}
          </div>
          <img
            class="card-img-bottom"
            v-bind:src="modal.img"
            alt="Card image cap"
            v-on:click.self="onClickedModal(modal)"
          />
          <div v-if="modal.isActive">
            <div class="modal" v-on:click.self="openModal = false">
              <div class="modal-dialog-centered col-md-8 offset-md-2">
                <div class="modal-content">
                  <div class="modal-header bg-light">
                    <h3 class="mt-2 ml-2">
                      <b>{{ modal.title }}</b>
                    </h3>
                    <button
                      type="button"
                      class="close"
                      v-on:click="onClickedModal(modal)"
                    >
                      ×
                    </button>
                  </div>
                  <div class="modal-body">
                    <img
                      v-bind:src="modal.img"
                      class="img-fluid col-md-8 offset-md-2"
                    />
                    <p class="mt-4">{{ modal.description }}</p>
                  </div>
                  <div class="modal-footer bg-light">
                    <h5 class="col ml-auto">
                      <span
                        v-for="framework in modal.frameworks"
                        :key="framework"
                      >
                        <span class="badge badge-info mr-1">{{
                          framework
                        }}</span>
                      </span>
                    </h5>
                    <span v-for="link in modal.links" :key="link">
                      <a v-bind:href="link.src" target="_blank">
                        <font-awesome-icon
                          class="fa-lg"
                          v-bind:icon="link.icon"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-backdrop show"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modals: [
        {
          id: 0,
          isActive: false,
          img: require("@/assets/HatenaBlog-logo.png"),
          title: "技術ブログ",
          description:
            "大学2年生の夏にブログの執筆を開始し、記事を544個投稿，3万PV/月(2021/2/31時)得ることができています。一応雑記ブログという位置付けですが、ほとんどUnityに関する記事を上げているので実質技術ブログと言っても差し支えないと思います。",
          frameworks: ["Unity", "C#", "etc..."],
          links: [{ icon: "link", src: "https://www.hanachiru-blog.com/" }],
        },
        {
          id: 1,
          isActive: false,
          img: require("@/assets/VoiceMaid.png"),
          title: "Voice-Maid Project ホームアイドル Saki",
          description:
            "COI東北拠点のプロジェクトの一つで、日常ヘルスケアのための音声対話3Dエージェントの開発を行なっています。東北大学工学研究科伊藤・能勢研究室で開発が進んでおり、大学3年の春から研究補佐(アルバイト)として参加させていただいています。現在開発は7人で行なっていて、開発環境はUnityを用いています。また第188回HCI・第56回EC合同研究発表会への論文投稿も行いました。",
          frameworks: ["Unity", "C#", "Python", "Docker", "AWS"],
          links: [
            {
              icon: "link",
              src: "http://www.coi.tohoku.ac.jp/study/list.html",
            },
            {
              icon: "sticky-note",
              src: "https://www.ipsj.or.jp/kenkyukai/event/hci188ec56.html",
            },
          ],
        },
        {
          id: 2,
          isActive: false,
          img: require("@/assets/ClosedCircle.png"),
          title: "クローズドサークルからの脱出",
          description: "大学4年の1月にリリースした、ボクセルを用いたミステリー風脱出ゲーム。Google Play, Apple Storeにアプリを掲載しており、初めて納得できる作品に仕上げることができたと感じています。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "apple-alt",
              src:
                "https://apps.apple.com/us/app/%E8%84%B1%E5%87%BA%E3%82%B2%E3%83%BC%E3%83%A0-%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%83%89%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%81%8B%E3%82%89%E3%81%AE%E8%84%B1%E5%87%BA/id1549713660",
            },
            {
              icon: "mobile-alt",
              src:
                "https://play.google.com/store/apps/details?id=com.Hanachiru.ClosedCircle",
            },
          ],
        },
        {
          id: 3,
          isActive: false,
          img: require("@/assets/unity1week.png"),
          title: "ゲームジャム「unity1week」",
          description: "「unity1week」というUnityを用いて1週間でゲームを作るというイベントに7回参加させていただきました。(2021/1/25時)　私がゲームを作り始めたキッカケでもあるイベントなので思い入れが強く、予定が空いてさえいれば積極的に参加しています。またゲームジャム参加後にクラス設計についての記事を書き、Twitterを中心に多くの方に反応をいただけたことも印象に残っています。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "link",
              src:
                "https://unityroom.com/users/tpzeofn2ka4ywqig376l",
            },
            {
              icon: "sticky-note",
              src:
                "https://note.com/hanaaaaaachiru/n/n400dd2ad4484",
            },
          ],
        },
        {
          id: 4,
          isActive: false,
          img: require("@/assets/Elevator.png"),
          title: "Elevator -エレベーターという密室",
          description: "大学2年生の9月にリリースした脱出ゲーム。Google Playにアプリを掲載し、5,5000ダウンロード(2021/1/25時)を突破しました。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "mobile-alt",
              src:
                "https://play.google.com/store/apps/details?id=com.Hanachiru.Elevator",
            },
          ],
        },
        {
          id: 5,
          isActive: false,
          img: require("@/assets/aws.png"),
          title: "ポートフォリオ",
          description: "こちらのサイト。Vue.jsによりサイトを作成し、AWSにデプロイしました。Unityを使ったゲーム制作も好きですが、Webサイトを作るのも割と好きな気がします。",
          frameworks: ["Vue.js", "html", "css", "javascript", "AWS"],
          links: [
            {
              icon: "link",
              src:
                "https://github.com/hanachiru/SimplifiedPortfolio",
            },
            {
              icon: "sticky-note",
              src:
                "https://www.hanachiru-blog.com/entry/2021/01/28/120000",
            },
          ],
        },
        {
          id: 6,
          isActive: false,
          img: require("@/assets/Fax.png"),
          title: "Faxという密室",
          description: "大学2年生の1月にリリースした脱出ゲームです。「Cicada3301」というネット上で実際にあった出来事を題材に作成したゲームで、同じような体験をしてもらいたいという思いで作りました。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "mobile-alt",
              src:
                "https://play.google.com/store/apps/details?id=com.Hanachiru.FAX_Missitu",
            },
          ],
        },
        {
          id: 7,
          isActive: false,
          img: require("@/assets/Kyouen.png"),
          title: "共円",
          description: "大学2年生の6月に初めてGooglePlayにリリースしたゲームアプリです。共円という数学ゲームの問題集と，オフラインでの対戦ができるようになっています。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "mobile-alt",
              src:
                "https://play.google.com/store/apps/details?id=com.Hanachiru.kyoen",
            },
          ],
        },
        {
          id: 8,
          isActive: false,
          img: require("@/assets/HitTheFloor.png"),
          title: "Hit The Floor",
          description: "大学2年生の9月にリリースしたパズルゲーム。unity1weekというゲームジャムにて作成したゲームをスマホ用にバージョンアップしてリリースをしました。",
          frameworks: ["Unity", "C#"],
          links: [
            {
              icon: "mobile-alt",
              src:
                "https://play.google.com/store/apps/details?id=com.Hanachiru.HitTheFloor",
            },
          ],
        },
        {
          id: 9,
          isActive: false,
          img: require("@/assets/UnityOsusume.png"),
          title: "Unityオススメ記事20選",
          description: "毎日Unityのオススメな記事を20個紹介してくれるサイトです。Vue.js + Firebaseの組み合わせで作成し，記事の収集・ランク付けはGoogleAppsScriptで行なっています。",
          frameworks: ["Vue.js", "html", "css", "javascript", "firebase", "GoogleAppsScript"],
          links: [
            {
              icon: "link",
              src:
                "https://unityosusume20.firebaseapp.com/",
            },
            {
              icon: "sticky-note",
              src:
                "https://www.hanachiru-blog.com/entry/2019/11/14/232846",
            }
          ],
        },
      ],
    };
  },
  methods: {
    onClickedModal: function (modal) {
      // 開く
      this.modals[modal.id].isActive = !this.modals[modal.id].isActive;
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
</style>