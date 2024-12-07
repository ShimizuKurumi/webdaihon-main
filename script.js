// const paragraph = document.querySelectorAll(".paragraph");


$(document).ready(function () {
    let paragraphWidth = [];
    let paragraph = [];
    let count = 0;
    let totalWidth = 0;
    let keyCount = 0;
    let wrapperCount = 1;
    let lastChildCount = 0;
    let firstChildCount = 1;


    $(".paragraph").each((i, elem) => {
        paragraph[i] = $(elem);
        paragraphWidth[i] = $(elem).width();
    });
    console.log(paragraphWidth);


    $(function () {
        var totalWidth = 0;
        var $newDiv = $('<div class="paragraph__wrapper">');
        var count = 0; // カウント用の変数を初期化


        //パラグラフ---------------------------
        $('p.paragraph').each(function () {

            var $this = $(this);
            var thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得

            // 合計幅が400pxを超える場合
            if (totalWidth + thisWidth > $(window).width() * 0.85) {
                // 新しいdiv要素をbodyに追加
                $('body').append($newDiv);
                // 合計幅をリセット
                totalWidth = 0;
                $newDiv = $('<div class="paragraph__wrapper">');
                count++;
            }

            // pタグを新しいdiv要素に追加
            $newDiv.append($this);
            // 合計幅に加算
            totalWidth += thisWidth;

            $(".paragraph__wrapper p:last").addClass('last-child');

        });


        // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
        if ($newDiv.children().length > 0) {
            $('body').append($newDiv);
        }

        const elements = $(".paragraph__wrapper");
        $(".paragraph__wrapper p:first-of-type").addClass('first-child');


        document.addEventListener('keydown', (event) => {

            // 左矢印キーが押された場合
            if (event.key === 'ArrowLeft') {
                // クラス名last-childの要素を取得
                const lastChild = $('.last-child');

                // lastChildのopacityが1の場合、targetDivのopacityを0にする
                if (lastChild[lastChildCount].style.opacity === '1') {
                    console.log(lastChild[lastChildCount]);
                    keyCount++;


                    if (keyCount === 2) {
                        // 2回押されたら処理を実行
                        console.log('左矢印キーが2回押されました');
                        // ここに実行したい処理を記述
                        // 例:
                        wrapperCount++;

                        $(".paragraph__wrapper").each(function (index) {
                            $(this).css("opacity", "0");
                        });


                        $(elements[wrapperCount]).css({
                            // ここに変更したいCSSプロパティを記述する
                            opacity: '1',
                        });
                    }
                    if (keyCount === 3) {
                        keyCount = 0;
                        console.log('左矢印キーが3回押されました');
                        lastChildCount++;
                    }

                }

            }

            if (event.key === 'ArrowRight') {
                const firstChild = $('.first-child');
                console.log("右矢印キーが１回押されました");
                console.log(firstChild);

                // lastChildのopacityが1の場合、targetDivのopacityを0にする
                if (firstChild[firstChildCount].style.opacity === '0') {
                    keyCount++;

                    if (keyCount === 1) {
                        // 2回押されたら処理を実行
                        console.log('右矢印キーが1回押されました');
                        // ここに実行したい処理を記述
                        // 例:
                        wrapperCount--;

                        $(".paragraph__wrapper").each(function (index) {
                            $(this).css("opacity", "0");
                        });


                        $(elements[wrapperCount]).css({
                            // ここに変更したいCSSプロパティを記述する
                            opacity: '1',
                        });
                    }
                    if (keyCount === 2) {
                        keyCount = 0;
                        console.log('右矢印キーが2回押されました');
                        firstChildCount++;
                    }

                }

            }
        });


    });


    //個別演出--------------------------------------
    $(document).keydown(function (e) {

        if (e.which === 37) { // 左矢印キー

            if (0 <= count && count < 29) {
                count++;
                //PC処理
                paragraph[count].css({
                    opacity: '1',
                });
            };
            if (count === 4) {
                $('.bg-eye').css({
                    'opacity': "0",
                });

            } else if (count === 5) {
                $('.bg-eye').css({
                    'opacity': "0.1",
                });
            } else if (count === 8) {
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });

            }
            else if (count === 9) {
                $('#paper')[0].play();

                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye').css({
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }
            else if (count === 11) {
                $('.body').css({
                    'animation': "tikatika .3s step-end forwards"
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'fill': "#F9EFE1",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });

            } else if (count === 15) {
                $('.bg-eye').css({
                    'opacity': "0",
                });
            } else if (count === 16) {
                $('.bg-eye').css({
                    'opacity': "0.1",
                });

            } else if (count === 18) {
                $('#clock')[0].play();
            } else if (count === 25) {
                $('#bgm')[0].play();
            };

        }


        //右矢印キー-------------------------------------
        else if (e.which === 39) { // 右矢印キー
            if (0 < count && count <= 29) {
                count--;

                paragraph[count + 1].css({
                    opacity: '0',
                });

            };

            if (count < 4) {
                $('.bg-eye').css({
                    'opacity': "0.1",
                });
            } else if (count < 5) {
                $('.bg-eye').css({
                    'opacity': "0",
                });
            } else if (count < 8) {
                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye').css({
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });
            }
            else if (count < 9) {
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });
            }

            else if (count < 11) {

                $('.body').css({
                    'animation': "beige .3s ease forwards"
                });

                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye').css({
                    'fill': "#0B1632",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }

            else if (count < 15) {
                $('.bg-eye').css({
                    'opacity': "0.1",
                });

            } else if (count < 16) {
                $('.bg-eye').css({
                    'opacity': "0",
                });

            } else if (count < 25) {
                $('#bgm')[0].pause();
                $('#bgm')[0].currentTime = 0;
            }

        }

        console.log(count, totalWidth);

    });


}
);


// $(document).ready(function () {
//     // フェードアウトさせたい要素のセレクタをここに指定します
//     $('.opening').delay(600).fadeOut(400);
// });

// $(document).ready(function () {
//     // ホバー対象の要素を指定
//     $(".border-line").hover(function () {
//         // 画像の生成
//         var img = $("<img />");
//         img.attr("src", "./images/dictionary.png"); // 画像のパスを設定
//         img.addClass("hover-image"); // 画像にクラスを追加（CSSでスタイルを定義）

//         // 画像を要素の近くに絶対配置
//         $(this).append(img);

//         // 画像の位置調整 (例: 右上に表示)
//         $(".hover-image").css({
//             position: "absolute",
//             top: "100px",
//             right: "-220px",
//             width: "250px",
//             animation: "opacity1 ease .5s forwards"
//         });
//     }, function () {
//         // ホバー終了時に画像を削除
//         $(".hover-image").remove();
//     });
// });