    $(document).ready(function(){
          // 當畫面元素（靜態元素）載入完成後才執行程式
    new WOW().init();
          // WOW的鏈結語法

    // TODO: 1 設定.nav-link的點擊事件
    $('.navbar .nav-link, #scrollTopBtn').click(function(){
          // 選擇.navbar裡面所有的.nav-link ''文字字串

        // TODO: 2 取得移動目標
        const target = $(this).attr('href');
          // const target似html裡的class概念
          // $(this).attr('href');  告訴target我指定的屬性
        console.log(target);
          // 檢查它有沒有抓到位置的語法

        // TODO: 3. 取得移動目標的座標
        // .offset() => { top: 200, left: 0 }
        const position=$(target).offset().top;
          // position定位(座標)
        console.log(position);
          // 檢查它有沒有抓到座標

        // TODO: 4. 使用動畫移動到目標的座標
        // 導覽列的高度
        const navbarHeight=56;
        //    先停止目前有在執行的動畫.stop()，再執行新的動畫
        // .animate({物件}, 動畫秒數-單位為千分之一秒)
        $('html, body').animate({
        scrollTop: position-navbarHeight
         }, 300);       
    });
});