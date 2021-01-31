<template>
  <div class="mt-4">
    <h1>Profile</h1>
    <div class="card-columns custom-column-count">
        <div class="card shadow">
          <img class="card-img-top" src="../assets/icon.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">自己紹介</h5>
              <p>ニックネーム：はなちる(@hanaaaaaachiru)</p>
              <p>所属：東北大学???????????? 学部4年</p>
              <p>Mail：hanachiru.blog@gmail.com</p>
            </div>
          </div>
      <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">経歴</h4>
          <p class="card-text">
            <ul class="pl-4">
                <li>2017-04: 東北大学?????? ??????????? 入学</li>
                <li>2021-03: 東北大学?????? ??????????? 卒業(予定)</li>
                <li>2021-04: 東北大学大学院 ??????????? 博士前期課程 入学(予定)</li>
                <li>2023-03: 東北大学大学院 ??????????? 博士前期課程 卒業(予定)</li>
            </ul>
          </p>
        </div>
    </div>
    <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">プログラミング言語</h4>
          <p class="card-text">C#, python, javascript</p>
          <b>特にC#が大好きです</b>
        </div>
    </div>
    <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">趣味</h4>
          <p class="card-text">ゲーム・アプリ制作，ゲーム，Youtube，歩く事，ブログ執筆</p>
        </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
@media (max-width:767px) { 
  .custom-column-count{
    column-count: 1;
  }
}

@media (min-width:768px) { 
.custom-column-count{
    column-count: 2;
  }
}
</style>